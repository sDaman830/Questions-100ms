const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

// Questions array
const questions = [
  "Can you provide a comprehensive explanation of the Document Object Model (DOM) in web development, including its structure and how it represents elements in HTML/XML documents? Additionally, could you elaborate on the various methods and techniques developers can use to select elements within the DOM for manipulation and interaction?",
  "In the context of programming or software development, what is the specific need or purpose behind the concept of 'NEXT'? How does it fit into modern development workflows, and what benefits does it offer in terms of efficiency, scalability, or functionality compared to alternative approaches?",
  "Could you delve into the functionality and architecture of application routers, particularly in web development frameworks or environments? What role do app routers play in managing navigation, handling requests, and structuring the flow of information within an application? Additionally, what are some common strategies or best practices for implementing and utilizing app routers effectively?",
  "I'd like to express my gratitude for the valuable information and insights you've provided. It has been a pleasure interacting with you, and I genuinely appreciate the knowledge and assistance you've shared.",
];

// Use cors middleware to allow all origins
app.use(cors());

// Route to handle GET requests with parameter
app.get("/question/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 1 && id <= 4) {
    const question = questions[id - 1];

    // Send question as JSON
    res.json({ question }); // Object containing the question
  } else {
    res.status(400).json({ message: "Invalid question ID" }); // Error response in JSON
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
