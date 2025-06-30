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

// Sample patient data using the correct structure from your backend
const consentFormData = {
  success: true,
  message: "Patient consent form data retrieved successfully",
  data: {
    patient_consent_id: "d0154714-cb26-4b92-a7cb-38345586cdd9",
    patient_code: "PNTC1AE5C9",
    formFields: {
      basicDetails: {
        title: "mr",
        firstName: "thomson",
        surname: "Xavier",
        dateOfBirth: "2025-06-05T18:30:00.000Z",
        gender: "male",
        londonAddress: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
        postCode1: "SW1A 1AA",
        overseasAddress: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
        postCode2: "630001",
        homeTel: "2872369847638476234",
        workTel: "t62387462343648",
        mobile: "+918098375380",
        email: "thomson0852@gmail.com",
        occupation: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
        hearAbout: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
        previousGP: {
          ifApplicable: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          nameOfGP: "thomson Xavier",
          nhsAddress: "3586 nehru nagar 1st street karaikudi",
          nhsPostCode: "630001"
        },
        payment: {
          paymentType: ["insured"],
          insuranceName: "82y374983493",
          membershipNo: "2837827392",
          claimNo: "29387298372987328932",
          guardianName: "",
          contactDetails: ""
        }
      },
      medicalDetails: {
        pastMedicalHistory: {
          hasPastMedicalHistory: "yes",
          pastMedicalDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          hasOperations: "yes",
          operationsDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          hasOtherClinicians: "yes",
          otherCliniciansDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          hasRecentInvestigations: "yes",
          recentInvestigationsDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          takingMedication: "yes",
          medicationDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          otherDoctorNotification: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu"
        },
        lifestyle: {
          doExercise: "yes",
          exerciseDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          diet: ["meat", "veg", "vegan", "others"],
          dietComments: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu",
          doSmoke: "yes",
          smokeAmount: 6,
          smokePeriod: "per-week",
          drinkAlcohol: "yes",
          alcoholDetails: "iueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiuiueqhqrqheqwhehwq8he9pwehpq9hephwiehpiwhepuihwiuheiuhwiehiqwebwqbeiu"
        },
        femalePatients: {
          periodProblems: "",
          periodProblemsDetails: "",
          couldBePregnant: "",
          pregnancyDetails: "",
          breastProblems: "",
          breastProblemsDetails: "",
          hadMammogram: "",
          mammogramDetails: "",
          requireContraception: "",
          contraceptionDetails: "",
          requireChaperone: ""
        }
      },
      agreement: {
        agreedToProcessing: true,
        agreedToVoicemails: false,
        agreedToEmailContact: false,
        signatureName: "thomson",
        signatureDate: "2025-06-17T18:30:00.000Z",
        patientRelation: "thomson"
      }
    }
  }
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Main route - serve the enhanced consent form with patient data
app.get('/consent-form', (req, res) => {
  res.render('consent-form', consentFormData);
});

// API route to get patient data (for future use)
app.get('/api/patient-data', (req, res) => {
  res.json(consentFormData);
});

// API route to update patient data (for future use)
app.post('/api/patient-data', (req, res) => {
  // Merge new data with existing patient data
  Object.assign(consentFormData.data, req.body);
  res.json({ 
    success: true, 
    message: 'Patient data updated successfully',
    data: consentFormData.data 
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