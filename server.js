// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware — parse incoming JSON request bodies
app.use(express.json());

// Routes
const studentRoutes    = require("./routes/students");
const assignmentRoutes = require("./routes/assignments");
const noticeRoutes     = require("./routes/notices");

app.use("/students",    studentRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/notices",     noticeRoutes);

// GET / — Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Student Dashboard API" });
});

// GET /health — Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server Running" });
});

// 404 handler — unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 500 handler — unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});