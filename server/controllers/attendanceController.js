const { Attendance } = require("../models/models");
const ApiError = require("../error/ApiError");

class AttendanceController {
  async getAll(req, res) {
    const attendances = await Attendance.findAll();
    return res.json(attendances);
  }
  async create(req, res) {
    const { time, type } = req.body;
    const attendance = await Attendance.create({ time, type });
    return res.json(attendance);
  }
}

module.exports = new AttendanceController();
