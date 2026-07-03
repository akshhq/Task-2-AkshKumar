// routes/assignments.js

const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET /assignments/upcoming — must come before /:id
router.get("/upcoming", (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const upcoming = db.assignments
    .filter((a) => a.status === "Pending" && a.dueDate >= today)
    .map(({ title, dueDate }) => ({ title, dueDate }));

  res.json(upcoming);
});

// GET /assignments — get all assignments
router.get("/", (req, res) => {
  const result = db.assignments.map(({ title, status }) => ({ title, status }));
  res.json(result);
});

module.exports = router;