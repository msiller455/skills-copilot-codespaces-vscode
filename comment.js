// Create web server

const express = require('express');
const mongoose = require('mongoose');
const Comment = require('./models/comment'); // Adjust the path to your comment model
const cors = require('cors');

// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a route to create a new comment
app.post('/comments', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
});