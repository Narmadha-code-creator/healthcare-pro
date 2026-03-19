const pool = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1,$2) RETURNING *",
    [email, hash]
  );

  res.json(user.rows[0]);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length === 0) return res.send("User not found");

  const valid = await bcrypt.compare(password, user.rows[0].password);

  if (!valid) return res.send("Wrong password");

  const token = jwt.sign({ id: user.rows[0].id }, "secretkey");

  res.json({ token });
};