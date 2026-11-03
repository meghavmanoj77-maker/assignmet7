const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/resume_db');
const Resume = mongoose.model('Resume', new mongoose.Schema({ name: String, education: String, projects: [String] }));
async function seed() {
  await Resume.deleteMany({});
  await Resume.create({ name: 'Meghav Manoj', education: 'BCA & Data Science', projects: ['Friday AI', 'Nutrition ML'] });
  process.exit();
}
seed();
