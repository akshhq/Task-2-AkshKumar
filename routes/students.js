// routes/students.js

const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET /students/count  — must come before /:id to avoid "count" being treated as an ID
router.get("/count", (req, res) => {
  res.json({ totalStudents: db.students.length });
});

// GET /students — get all students
router.get("/", (req, res) => {
  res.json(db.students);
});

// GET /students/:id — get student by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = db.students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
});

// POST /students — add a new student
router.post("/", (req, res) => {
  const { name, semester } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!semester) {
    return res.status(400).json({ error: "Semester is required" });
  }
  if (typeof semester !== "number" || semester < 1 || semester > 8) {
    return res.status(400).json({ error: "Semester must be a number between 1 and 8" });
  }

  const newId = db.students.length > 0 ? Math.max(...db.students.map((s) => s.id)) + 1 : 1;

  const newStudent = {
    id: newId,
    name: name.trim(),
    semester,
  };

  db.students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// DELETE /students/:id — delete a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  db.students.splice(index, 1);
  res.json({ message: "Student deleted successfully" });
});

module.exports = router;