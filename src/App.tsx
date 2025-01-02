import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { LetterForm } from './components/LetterForm';
import { LetterTemplate } from './components/LetterTemplate';
import { LetterData } from './types';

function App() {
  const [letterData, setLetterData] = useState<LetterData | null>(null);

  const handleGenerate = (data: LetterData) => {
    setLetterData(data);
    setTimeout(() => {
      const element = document.getElementById('letter-content');
      const opt = {
        margin: 10,
        filename: `internship_letter_${data.studentName.toLowerCase().replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      html2pdf().set(opt).from(element).save();
    }, 500); // Increased timeout to ensure logo is loaded
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Internship Letter Generator</h1>
          <p className="mt-2 text-gray-600">Generate professional internship letters with ease</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="w-full lg:w-1/3">
            <LetterForm onGenerate={handleGenerate} />
          </div>
          
          <div className="w-full lg:w-2/3 overflow-auto">
            {letterData && (
              <div className="bg-white shadow-lg rounded-lg">
                <LetterTemplate data={letterData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;