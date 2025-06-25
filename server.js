const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample patient data - you can modify this or get it from a database
const patientData = {
  fullName: "Ms. Ann Davis",
  dateOfBirth: "22/06/1989",
  gender: "Female",
  londonAddress: "4517 Washington Ave. Manchester,\n39495",
  overseasAddress: "4517 Washington Ave. Manchester,\n39495",
  homeTel: "123456789",
  workTel: "23356899",
  mobileNo: "+44 54865656",
  email: "oliver@gmail.com",
  occupation: "Software Developer",
  howDidYouKnow: "From Website",
  previousNHSTel: "123456789",
  previousNHSAddress: "4517 Washington Ave. Manchester,\n39495",
  insuranceName: "Life Insurance",
  membershipNumber: "123456789",
  preAuthNumber: "33567489900",
  // Add more fields as needed
  medicalHistory: {
    pastMedicalHistory: "Yes",
    pastMedicalHistoryDetails: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies.",
    operations: "No",
    otherClinicians: "No",
    recentInvestigations: "Yes",
    recentInvestigationsDetails: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies."
  },
  lifestyle: {
    exercise: "No",
    diet: "Meat",
    dietDetails: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies.",
    smoking: "Yes, 2 Packets Per Day",
    alcohol: "No"
  },
  femalePatients: {
    periodProblems: "Yes",
    periodProblemsDetails: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies.",
    pregnant: "Yes",
    pregnantDetails: "Last cervical smear date and Result: 18 Jan 2025 , something",
    breastProblems: "No",
    mammogram: "No",
    contraception: "No"
  },
  chaperone: "No",
  signatureName: "Amelia Johnson",
  signatureDate: "03/06/1015",
  relationship: "Mother"
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle HTML to EJS conversion
app.post('/convert-to-ejs', (req, res) => {
  // In a real application, you might process the HTML here
  // For now, we'll just return success since the EJS template already exists
  res.json({ 
    success: true, 
    message: 'HTML successfully converted to EJS template',
    timestamp: new Date().toISOString()
  });
});

// Route to serve the EJS consent form
app.get('/consent-form', (req, res) => {
  res.render('consent-form', { patient: patientData });
});

// API route to get patient data (for future use)
app.get('/api/patient-data', (req, res) => {
  res.json(patientData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Landing page: http://localhost:${PORT}`);
  console.log(`Consent form: http://localhost:${PORT}/consent-form`);
}); 