// data/db.js
// In-memory data store (no database required)

const students = [
  { id: 1, name: "Aksh Kumar",   rollNo: "23BCS001", course: "B.Sc. Computer Science", semester: 3 },
  { id: 2, name: "Rahul Sharma", rollNo: "23BCS002", course: "B.Sc. Computer Science", semester: 3 },
  { id: 3, name: "Priya Singh",  rollNo: "23BCS003", course: "B.Sc. Computer Science", semester: 3 },
  { id: 4, name: "Amit Verma",   rollNo: "23BCS004", course: "B.Sc. Computer Science", semester: 2 },
  { id: 5, name: "Neha Gupta",   rollNo: "23BCS005", course: "B.Sc. Computer Science", semester: 2 },
];

const assignments = [
  { id: 1, title: "DS Assignment 2",   subject: "Data Structures",    dueDate: "2026-06-25", status: "Pending"   },
  { id: 2, title: "OS Lab Report",     subject: "Operating Systems",   dueDate: "2026-06-28", status: "Pending"   },
  { id: 3, title: "AI Case Study",     subject: "Artificial Intelligence", dueDate: "2026-06-20", status: "Submitted" },
  { id: 4, title: "Data Mining Project", subject: "Data Mining",      dueDate: "2026-06-15", status: "Overdue"   },
  { id: 5, title: "Networks Assignment", subject: "Computer Networks", dueDate: "2026-06-30", status: "Submitted" },
];

const notices = [
  { id: 1, title: "Exam Form Submission Open",       description: "Students of Semester 3 must fill and submit the exam form before 30th June.", date: "2026-06-18" },
  { id: 2, title: "Sports Week Registration Open",   description: "Annual Sports Week will be held from 5–10 July. Register at the sports office by 28th June.", date: "2026-06-17" },
  { id: 3, title: "Holiday Notice – 21st June",      description: "The college will remain closed on 21st June on account of International Yoga Day.", date: "2026-06-16" },
  { id: 4, title: "Internal Assessment Schedule Released", description: "IA-2 schedule has been uploaded on the college portal.", date: "2026-06-14" },
];

module.exports = { students, assignments, notices };