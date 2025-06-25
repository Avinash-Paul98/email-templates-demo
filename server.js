const express = require('express');
const path = require('path');
const fs = require('fs');

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

// HTML to EJS conversion function
function convertHtmlToEjs(htmlContent) {
  let ejsContent = htmlContent;

  // Define mapping of static values to EJS variables with more specific targeting
  const valueMappings = [
    // Patient Details
    { 
      pattern: /<div class="detail-value">Ms\. Ann Davis<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.fullName %></div>'
    },
    { 
      pattern: /<div class="detail-value">22\/06\/1989<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.dateOfBirth %></div>'
    },
    { 
      pattern: /<div class="detail-value">Female<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.gender %></div>'
    },
    { 
      pattern: /<div class="detail-value">4517 Washington Ave\. Manchester,<br>39495<\/div>/g,
      replacement: '<div class="detail-value"><%- patient.londonAddress.replace(/\\n/g, "<br>") %></div>'
    },
    { 
      pattern: /<div class="detail-value">123456789<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.homeTel %></div>'
    },
    { 
      pattern: /<div class="detail-value">23356899<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.workTel %></div>'
    },
    { 
      pattern: /<div class="detail-value">\+44 54865656<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.mobileNo %></div>'
    },
    { 
      pattern: /<div class="detail-value">oliver@gmail\.com<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.email %></div>'
    },
    { 
      pattern: /<div class="detail-value">Software Developer<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.occupation %></div>'
    },
    { 
      pattern: /<div class="detail-value">From Website<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.howDidYouKnow %></div>'
    },
    // Payment Details
    { 
      pattern: /<div class="detail-value">Life Insurance<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.insuranceName %></div>'
    },
    { 
      pattern: /<div class="detail-value">33567489900<\/div>/g,
      replacement: '<div class="detail-value"><%= patient.preAuthNumber %></div>'
    },
    // Question Answers - more specific targeting
    { 
      pattern: /<div class="question-answer">Yes<\/div>/g,
      replacement: '<div class="question-answer"><%= patient.medicalHistory.pastMedicalHistory %></div>'
    },
    { 
      pattern: /<div class="question-answer">No<\/div>/g,
      replacement: '<div class="question-answer"><%= patient.lifestyle.exercise %></div>'
    },
    { 
      pattern: /<div class="question-answer flexible">Meat<\/div>/g,
      replacement: '<div class="question-answer flexible"><%= patient.lifestyle.diet %></div>'
    },
    { 
      pattern: /<div class="question-answer flexible">Yes, 2 Packets Per Day<\/div>/g,
      replacement: '<div class="question-answer flexible"><%= patient.lifestyle.smoking %></div>'
    },
    // Final Details
    { 
      pattern: /<div class="final-detail-value">Amelia Johnson<\/div>/g,
      replacement: '<div class="final-detail-value"><%= patient.signatureName %></div>'
    },
    { 
      pattern: /<div class="final-detail-value nowrap">03\/06\/1015<\/div>/g,
      replacement: '<div class="final-detail-value nowrap"><%= patient.signatureDate %></div>'
    },
    { 
      pattern: /<div class="final-detail-value">Mother<\/div>/g,
      replacement: '<div class="final-detail-value"><%= patient.relationship %></div>'
    },
    // Text areas with dynamic content
    { 
      pattern: /<div class="text-area">\s*I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020\. I also have a history of seasonal allergies\.\s*<\/div>/g,
      replacement: '<div class="text-area"><%= patient.medicalHistory.pastMedicalHistoryDetails %></div>'
    },
    { 
      pattern: /<div class="additional-question-text">\s*I was diagnosed with hypertension in 2018 and underwent appendectomy in 2020\. I also have a history of seasonal allergies\.\s*<\/div>/g,
      replacement: '<div class="additional-question-text"><%= patient.medicalHistory.additionalNotes %></div>'
    },
    // Handle NHS address (appears twice, so we need specific targeting)
    { 
      pattern: /<div class="detail-label">Address<\/div>\s*<div class="detail-value">4517 Washington Ave\. Manchester,<br>39495<\/div>/g,
      replacement: '<div class="detail-label">Address</div>\n              <div class="detail-value"><%- patient.previousNHSAddress.replace(/\\n/g, "<br>") %></div>'
    }
  ];

  // Add PDF download functionality
  const pdfScripts = `
    <!-- Download Button -->
    <div class="download-container" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
      <button class="download-btn" onclick="downloadPDF()" style="background-color: #93763c; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
        📄 Download PDF
      </button>
    </div>

    <!-- Include jsPDF and html2canvas from reliable CDNs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    
    <!-- Fallback for html2canvas -->
    <script>
      // Fallback loading for html2canvas if the first CDN fails
      if (!window.html2canvas) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js';
        script.onload = function() {
          console.log('html2canvas loaded from fallback CDN');
        };
        script.onerror = function() {
          console.error('Failed to load html2canvas from fallback CDN');
        };
        document.head.appendChild(script);
      }
    </script>

    <script>
      // Wait for libraries to load
      function checkLibrariesLoaded() {
        return new Promise((resolve, reject) => {
          let attempts = 0;
          const maxAttempts = 50; // 5 seconds max wait
          
          function check() {
            attempts++;
            if (window.jspdf && window.html2canvas) {
              resolve();
            } else if (attempts >= maxAttempts) {
              reject(new Error('Libraries failed to load'));
            } else {
              setTimeout(check, 100);
            }
          }
          check();
        });
      }

      async function downloadPDF() {
        try {
          // Show loading state
          const downloadBtn = document.querySelector('.download-btn');
          const originalText = downloadBtn.innerHTML;
          downloadBtn.innerHTML = '⏳ Generating PDF...';
          downloadBtn.disabled = true;

          // Hide the download button temporarily
          const downloadContainer = document.querySelector('.download-container');
          downloadContainer.style.display = 'none';

          // Check if libraries are loaded
          await checkLibrariesLoaded();

          // Create a new jsPDF instance
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF('p', 'mm', 'a4');

          // Get the form container
          const element = document.getElementById('consent-form');
          
          // Use html2canvas to convert HTML to canvas
          const canvas = await window.html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: element.scrollWidth,
            height: element.scrollHeight,
            logging: false,
            onclone: function(clonedDoc) {
              // Remove any problematic elements from the cloned document
              const downloadElements = clonedDoc.querySelectorAll('.download-container');
              downloadElements.forEach(el => el.remove());
            }
          });

          // Calculate dimensions
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 295; // A4 height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          // Add first page
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          // Add additional pages if needed
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          // Generate filename with current date
          const currentDate = new Date().toISOString().split('T')[0];
          const filename = \`Patient_Consent_Form_\${currentDate}.pdf\`;

          // Download the PDF
          pdf.save(filename);

          // Show success message
          alert('PDF downloaded successfully!');

        } catch (error) {
          console.error('Error generating PDF:', error);
          let errorMessage = 'Error generating PDF. Please try again.';
          
          if (error.message.includes('Libraries failed to load')) {
            errorMessage = 'Required libraries failed to load. Please refresh the page and try again.';
          } else if (error.message.includes('html2canvas')) {
            errorMessage = 'Error capturing form content. Please refresh the page and try again.';
          }
          
          alert(errorMessage);
        } finally {
          // Show the download button again
          const downloadContainer = document.querySelector('.download-container');
          downloadContainer.style.display = 'block';
          
          // Reset button state
          const downloadBtn = document.querySelector('.download-btn');
          if (downloadBtn) {
            downloadBtn.innerHTML = '📄 Download PDF';
            downloadBtn.disabled = false;
          }
        }
      }
    </script>`;

  // Replace static values with EJS variables using specific patterns
  valueMappings.forEach(({ pattern, replacement }) => {
    ejsContent = ejsContent.replace(pattern, replacement);
  });

  // Add PDF scripts before closing body tag
  ejsContent = ejsContent.replace('</body>', pdfScripts + '\n  </body>');

  return ejsContent;
}

// EJS syntax validation function
function validateEjsSyntax(ejsContent) {
  // Basic validation for matching EJS tags
  const openTags = (ejsContent.match(/<%[^%]*$/gm) || []).length;
  const closeTags = (ejsContent.match(/^[^%]*%>/gm) || []).length;
  
  // Count complete EJS expressions
  const completeExpressions = (ejsContent.match(/<%[^%]*%>/g) || []).length;
  
  if (openTags !== closeTags) {
    throw new Error(`Mismatched EJS tags: ${openTags} opening tags, ${closeTags} closing tags`);
  }
  
  // Basic check for malformed expressions
  const malformedTags = ejsContent.match(/<%[^%]*<%|%>[^%]*%>/g);
  if (malformedTags) {
    throw new Error(`Malformed EJS tags detected: ${malformedTags.join(', ')}`);
  }
  
  return true;
}

// Route to handle HTML to EJS conversion
app.post('/convert-to-ejs', (req, res) => {
  try {
    // Read the HTML template file
    const htmlFilePath = path.join(__dirname, 'public', 'form-template.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Convert HTML to EJS
    const ejsContent = convertHtmlToEjs(htmlContent);

    // Validate EJS syntax before saving
    validateEjsSyntax(ejsContent);

    // Save the converted EJS file
    const ejsFilePath = path.join(__dirname, 'views', 'converted-consent-form.ejs');
    fs.writeFileSync(ejsFilePath, ejsContent, 'utf8');

    // Count conversions made
    const conversionCount = (ejsContent.match(/<%[^%]*%>/g) || []).length;

    res.json({ 
      success: true, 
      message: 'HTML successfully converted to EJS template',
      timestamp: new Date().toISOString(),
      inputFile: 'form-template.html',
      outputFile: 'converted-consent-form.ejs',
      conversionsCount: conversionCount
    });
  } catch (error) {
    console.error('Error converting HTML to EJS:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to convert HTML to EJS',
      error: error.message
    });
  }
});

// Route to serve the EJS consent form
app.get('/consent-form', (req, res) => {
  // Check if converted EJS file exists, otherwise use the original
  const convertedEjsPath = path.join(__dirname, 'views', 'converted-consent-form.ejs');
  const templateName = fs.existsSync(convertedEjsPath) ? 'converted-consent-form' : 'consent-form';
  
  res.render(templateName, { patient: patientData });
});

// Route to view the source HTML template
app.get('/form-template', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form-template.html'));
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