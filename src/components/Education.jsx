import React from 'react';

const Education = () => {
  const educationList = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 7.5",
      date: "May 2027"
    },
    {
      institution: "Delhi Public School, Yamunanagar",
      degree: "Intermediate",
      score: "Percentage: 83%",
      date: "June 2022"
    },
    {
      institution: "Delhi Public School, Yamunanagar",
      degree: "Matriculation",
      score: "Percentage: 75%",
      date: "March 2020"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2-section fade-in">Academic Background</h2>
        
        <div className="education-timeline fade-in delay-200">
          {educationList.map((edu, index) => (
            <div key={index} className="glass-card edu-card">
              <div className="edu-header">
                <h3>{edu.institution}</h3>
                <span className="edu-date">{edu.date}</span>
              </div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-score">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
