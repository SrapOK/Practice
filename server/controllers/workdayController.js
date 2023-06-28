const ApiError = require("../error/ApiError");
const { Workday } = require("../models/models");

class WorkdayController {
  async getAll(req, res) {
    const workdays = await Workday.findAll();
    return res.json(workdays);
  }
  async create(req, res) {
    const { start, end, date } = req.body;
    const workday = await Workday.create({ start, end, date });
    return res.json(workday);
  }
}

module.exports = new WorkdayController();
