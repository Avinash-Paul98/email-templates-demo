# Patient Consent Form - PDF Generator

A Node.js application that converts a patient consent form to PDF using jsPDF and html2canvas libraries.

## Features

- **Dynamic EJS Template**: Patient data is dynamically populated from server-side data
- **PDF Download**: Click the "Download PDF" button to generate and download a PDF version of the form
- **Responsive Design**: The form looks great on both desktop and mobile devices
- **Professional Styling**: Clean, medical-form styling with proper typography and layout

## Technologies Used

- **Node.js** with **Express.js** - Backend server
- **EJS** - Template engine for dynamic content
- **jsPDF** - PDF generation library
- **html2canvas** - HTML to canvas conversion for PDF generation

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   Open your browser and go to: `http://localhost:3000`

## Usage

### Two-Step Workflow:

1. **Landing Page** (`http://localhost:3000`):
   - **Step 1**: Click "Convert HTML to EJS" to prepare the dynamic template
   - **Step 2**: Click "Generate & Download PDF" to open the EJS form and download PDF

2. **EJS Form** (`http://localhost:3000/consent-form`):
   - View the dynamic patient consent form with sample data
   - Click the "📄 Download PDF" button to generate and download a PDF version

3. **Modify Data**: Edit the `patientData` object in `server.js` to customize the patient information

## File Structure

```
email-templates-demo/
├── views/
│   └── consent-form.ejs    # Main EJS template
├── public/                 # Static files (images, CSS)
│   ├── leh-logo.png       # Logo image
│   └── (other assets)
├── server.js              # Express server
├── package.json           # Dependencies
└── README.md             # This file
```

## Customization

### Modifying Patient Data

Edit the `patientData` object in `server.js`:

```javascript
const patientData = {
  fullName: "Your Patient Name",
  dateOfBirth: "DD/MM/YYYY",
  gender: "Male/Female",
  // ... other fields
};
```

### Styling Changes

Modify the CSS within the `<style>` tag in `views/consent-form.ejs` to customize the appearance.

### PDF Options

The PDF generation options can be modified in the `downloadPDF()` function:

```javascript
const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The PDF generation happens entirely on the client-side using jsPDF and html2canvas
- Large forms may take a few seconds to generate the PDF
- The download button is automatically hidden during PDF generation and in print mode

## Support

For issues or questions, please check:
- [jsPDF Documentation](https://www.npmjs.com/package/jspdf)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)