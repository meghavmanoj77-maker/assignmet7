const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
mongoose.connect('mongodb://127.0.0.1:27017/resume_db');
const Resume = mongoose.model('Resume', new mongoose.Schema({ name: String, education: String, projects: [String] }));
app.get('/', async (req, res) => {
  const cv = await Resume.findOne();
  res.render('cv', { cv });
});
app.listen(3000);
