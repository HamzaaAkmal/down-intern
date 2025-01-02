import React from 'react';
import { LetterData } from '../types';
import { useLogoLoader } from '../hooks/useLogoLoader';

interface LetterTemplateProps {
  data: LetterData;
}

export function LetterTemplate({ data }: LetterTemplateProps) {
  const logoBase64 = useLogoLoader();

  const formattedStartDate = new Date(data.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedEndDate = new Date(data.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div id="letter-content" className="bg-white p-8 w-[21cm] min-h-[29.7cm] mx-auto">
    <div className="flex justify-center items-center mb-8 border-b pb-6">
      <img src="./logo.png" alt="Company Logo" className="h-10 mb-4" />
    </div>


      <div className="flex justify-between mb-8">
        <div>
          <p className="font-semibold">Ref: INT/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000)}</p>
        </div>
        <div>
          <p className="text-gray-600"><strong>{currentDate}</strong></p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-center mb-6 underline">INTERNSHIP OFFER LETTER</h2>

        <p>Dear <strong>{data.studentName}</strong>,</p>

        <p>
          We are pleased to confirm your internship position at <strong>{data.companyName}</strong> in the <strong>{data.department}</strong> department. 
          This letter serves as formal documentation of your internship arrangement with our organization.
        </p>

        <p>
          Your internship will commence on <strong>{formattedStartDate}</strong> and conclude on <strong>{formattedEndDate}</strong>. 
          During this period, you will be working under the supervision of <strong>{data.supervisorName}</strong>, <strong>{data.supervisorPosition}</strong>.
        </p>

        <p>
          <strong>Project Details:</strong><br />
          {data.projectDetails}
        </p>

        <p>
          <strong>During your internship, you will:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Gain hands-on experience in your field of study</li>
            <li>Work collaboratively with our professional team</li>
            <li>Participate in meaningful projects that contribute to our organization's goals</li>
            <li>Receive mentorship and guidance from experienced professionals</li>
          </ul>
        </p>

        <p>
          <strong>You will be expected to:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Maintain professional conduct at all times</li>
            <li>Adhere to company policies and procedures</li>
            <li>Complete assigned tasks within agreed timeframes</li>
            <li>Participate in team meetings and training sessions</li>
          </ul>
        </p>

        <p>
          We look forward to having you join our team and hope this internship provides you with 
          valuable experience for your future career development.
        </p>

        <div className="mt-12">
          <p>Sincerely,</p>
          <div className="mt-8">
            <p className="font-bold">{data.supervisorName}</p>
            <p className="font-semibold">{data.supervisorPosition}</p>
            <p className="font-semibold">{data.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}