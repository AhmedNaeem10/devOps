import React from 'react';
import Header from '../components/Header';
import CertificationSection from '../components/CertificationSection';

const data = [
  {
    title: "AWS Certified Cloud Practitioner",
    date: "Aug-2022"
  },
  {
    title: "Azure Developer Associate - AZ-204",
    date: "June-2022"
  },
  {
    title: "The Complete Node.js Developer Course (Udemy)",
    date: "May-2022"
  },
  {
    title: "Modern React with Redux (Udemy)",
    date: "April-2022"
  },
];

function Certification() {
  return (
    <div>
      <Header route="certifications" />
      <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: '80%' }}>
          {
            data?.map((project, index) => {
              return (
                <CertificationSection data={project} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Certification;
