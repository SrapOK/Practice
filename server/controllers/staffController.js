const { Staff } = require("../models/models");
const ApiError = require("../error/ApiError");

class StaffController {
  async getAll(req, res) {
    const staff = await Staff.findAll();
    return res.json(staff);
  }
  async create(req, res) {
    const { name, middle_name, surname, role, additional } = req.body;
    const staff = await Staff.create({
      name,
      middle_name,
      surname,
      role,
      additional
    });
    return res.json(staff);
  }
}

module.exports = new StaffController();
