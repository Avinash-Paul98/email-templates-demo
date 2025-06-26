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

// Sample patient data - concise content for better PDF layout
const patientData = {
  fullName: "Ms. Sarah Emma Thompson",
  dateOfBirth: "15/03/1985",
  gender: "Female",
  londonAddress: "42 Baker Street, London\nW1U 6TJ",
  overseasAddress: "15 Main Avenue, Dublin\nD02 K7P5, Ireland",
  homeTel: "020 7946 0958",
  workTel: "020 8765 4321",
  mobileNo: "+44 7911 123456",
  email: "sarah.thompson@email.com",
  occupation: "Marketing Manager",
  howDidYouKnow: "Referral from GP",
  previousNHSTel: "020 8234 5678",
  previousNHSAddress: "NHS Trust Hospital\n123 Health Street, London SE1 9RT",
  insuranceName: "BUPA Health Insurance",
  membershipNumber: "BUP123456789",
  preAuthNumber: "AUTH987654321",
  medicalHistory: {
    pastMedicalHistory: "Yes",
    pastMedicalHistoryDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    operations: "Yes",
    operationsDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    otherClinicians: "Yes",
    otherCliniciansDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    recentInvestigations: "Yes",
    recentInvestigationsDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    additionalNotes: "Please notify Dr. Helen Baker (GP) at Riverside Medical Centre of any findings or treatment plans. Contact: 020 7123 4567."
  },
  lifestyle: {
    exercise: "Yes",
    exerciseDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    diet: "Balanced Diet",
    dietDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    smoking: "No",
    smokingDetails: "Diagnosed with mild hypertension in 2019. Seasonal allergies to pollen. Previous ankle fracture in 2020, fully healed. Regular monitoring for blood pressure with good control.",
    alcohol: "Yes, Socially",
    alcoholDetails: "Occasional social drinking - 1-2 glasses of wine per week maximum. No history of alcohol-related problems or dependency issues."
  },
  femalePatients: {
    periodProblems: "No",
    periodProblemsDetails: "Regular 28-day cycle with normal flow. No significant pain or irregularities noted.",
    pregnant: "No",
    pregnantDetails: "Not currently pregnant. Last cervical screening March 2023 - normal results. Next screening due March 2026 as per NHS guidelines.",
    breastProblems: "No", 
    breastProblemsDetails: "No lumps, pain, or changes noticed. Regular self-examination performed monthly with no concerns identified.",
    mammogram: "Yes",
    mammogramDetails: "First mammogram completed August 2024 as part of routine screening. Results normal with no abnormalities detected. Next screening due August 2027.",
    contraception: "Yes",
    contraceptionDetails: "Combined oral contraceptive pill for past 4 years. No side effects. Regular blood pressure monitoring due to medication type."
  },
  chaperone: "No",
  signatureName: "Sarah Emma Thompson",
  signatureDate: "15/12/2024",
  relationship: "Patient (Self)"
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