const pool = require("../db");

exports.predict = async (req, res) => {
  const { heartRate, bp, symptoms } = req.body;
  const userId = req.user.id;

  let risk = "Low";

  if (heartRate > 110 || bp > 150 || symptoms.includes("chest")) {
    risk = "High";
  } else if (heartRate > 90) {
    risk = "Medium";
  }

  const data = await pool.query(
    "INSERT INTO health_data (user_id, heart_rate, bp, symptoms, risk_level) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [userId, heartRate, bp, symptoms, risk]
  );

  res.json(data.rows[0]);
};const pool = require("../db");

exports.predict = async (req, res) => {
  const { heartRate, bp, symptoms } = req.body;
  const userId = req.user.id;

  let risk = "Low";

  if (heartRate > 110 || bp > 150 || symptoms.includes("chest")) {
    risk = "High";
  } else if (heartRate > 90) {
    risk = "Medium";
  }

  const data = await pool.query(
    "INSERT INTO health_data (user_id, heart_rate, bp, symptoms, risk_level) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [userId, heartRate, bp, symptoms, risk]
  );

  res.json(data.rows[0]);
};