// routes/notices.js

const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET /notices/latest — must come before /:id
router.get("/latest", (req, res) => {
  if (db.notices.length === 0) {
    return res.status(404).json({ error: "No notices available" });
  }

  // Return the notice with the most recent date
  const latest = db.notices.reduce((prev, curr) =>
    new Date(curr.date) > new Date(prev.date) ? curr : prev
  );

  const { title, date } = latest;
  res.json({ title, date });
});

// GET /notices — get all notices
router.get("/", (req, res) => {
  const result = db.notices.map(({ title }) => ({ title }));
  res.json(result);
});

module.exports = router;