const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample patient data - you can modify this or get it from a database
const patientData = {
  fullName: "Ms. Ann Dav david hoston jimmy fidric and hijak of tvk and kajol ",
  dateOfBirth: "22/06/1989",
  gender: "Femalereerrrr",
  londonAddress: "4517 Washington dc fh gh gj gjg jg jg gj gj gjg jg gj gjg jg gj gjg   Ave. Manchester,\n39495",
  overseasAddress: "4517 Washingtoreth  Ave. Manchester,\n39495",
  homeTel: "1234567892343234323 233432 243113",
  workTel: "23356899",
  mobileNo: "+44 54865656",
  email: "oliver@gmail.com",
  occupation: "Software Developer  2432321 sdasdasdcas dasdfasdfas dfas df asdfasdf asdfassfd",
  howDidYouKnow: "From Website",
  previousNHSTel: "123456789",
  previousNHSAddress: "4517 Washington Ave. Manchester,\n39495",
  insuranceName: "Life Insurance",
  membershipNumber: "123456789",
  preAuthNumber: "33567489900",
  medicalHistory: {
    pastMedicalHistory: "Yes",
    pastMedicalHistoryDetails: "I was diagnosed with super eask asdkjdba sddilamo klsjdlasd  hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies.",
    operations: "No",
    otherClinicians: "No",
    recentInvestigations: "Yes",
    recentInvestigationsDetails: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies.",
    additionalNotes: "I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020. I also have a history of seasonal allergies."
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

// Main route - serve the enhanced consent form with patient data
app.get('/consent-form', (req, res) => {
  res.render('consent-form', { patient: patientData });
});

// API route to get patient data (for future use)
app.get('/api/patient-data', (req, res) => {
  res.json(patientData);
});

// API route to update patient data (for future use)
app.post('/api/patient-data', (req, res) => {
  // Merge new data with existing patient data
  Object.assign(patientData, req.body);
  res.json({ 
    success: true, 
    message: 'Patient data updated successfully',
    data: patientData 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Landing page: http://localhost:${PORT}`);
  console.log(`Consent form: http://localhost:${PORT}/consent-form`);
  console.log(`\n✅ Enhanced PDF Generation Features:`);
  console.log(`   📄 Smart DOM-aware page breaks`);
  console.log(`   🚫 No DIV splitting between pages`);
  console.log(`   🧠 Content-aware consent section handling`);
  console.log(`   📝 Multiple PDF generation methods available`);
}); 