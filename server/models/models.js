const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Workday = sequelize.define("workday", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING },
  start: { type: DataTypes.STRING },
  end: { type: DataTypes.STRING }
});

const Attendance = sequelize.define("attendance", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  time: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING }
});

const Staff = sequelize.define("staff", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  middle_name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
  additional: { type: DataTypes.STRING }
});

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Violator = sequelize.define("violator", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  violations: { type: DataTypes.INTEGER, defaultValue: 0 }
});

Staff.hasMany(Attendance);
Attendance.belongsTo(Staff);

Workday.hasMany(Attendance);
Attendance.belongsTo(Workday);

Staff.hasOne(User);
User.belongsTo(Staff);

Staff.hasOne(Violator);
Violator.belongsTo(Staff);

module.exports = {
  Workday,
  Attendance,
  Staff,
  User,
  Violator
};
