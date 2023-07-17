const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User } = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h"
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(
        ApiError(ApiError.badRequest("Некорректный email или password"))
      );
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      next(
        ApiError(
          ApiError.badRequest("Пользователь с таким email уже существует")
        )
      );
    }
    const hashPassword = await bcrypt.hash(password, 4);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJwt(user.id, email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким именем не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный парль"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    res.json({ message: "Хайп" });
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
