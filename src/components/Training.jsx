import React from 'react';

const Training = () => {
  const experiences = [
    {
      title: "DSA With C/C++",
      company: "CSE Pathshala",
      duration: "June 2025 - July 2025",
      type: "Training",
      link: "/dsa_cert.png",
      points: [
        "Completed a 6-week training in C programming, covering basics of C, loops, functions, arrays, pointers, and simple problem-solving",
        "Developed practical C/C++ coding skills including pointers, memory management, structures, and modular programming.",
        "Learned to analyse time and space complexity using Big O notation for evaluating algorithm efficiency."
      ]
    }
  ];

  const shortCourses = [
    { name: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Infosys", date: "August 31, 2025", link: "/gen_ai_cert.png" },
    { name: "Computational Theory: Language Principle & Finite Automata Theory", issuer: "Infosys", date: "August 11, 2025", link: "/comp_theory_cert.png" }
  ];

  const certificates = [
    { name: "C++ Programming: OOPs and DSA", issuer: "CSE Pathshala", date: "August 3, 2025", link: "/dsa_cert.png" },
    { name: "Formal Languages and Automation Theory", issuer: "Infosys", date: "August 2025", link: "/comp_theory_cert.png" },
    { name: "User Experience Design Professional", issuer: "Certification", date: "August 2025", link: "#" }
  ];

  return (
    <section id="training" className="section">
      <div className="container">
        <h2 className="h2-section fade-in">Training & Certifications</h2>
        
        <div className="training-container">
          <div className="training-list fade-in delay-200">
            <h3 className="sub-heading">Training</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    {exp.link && exp.link !== "#" && <a href={exp.link} target="_blank" rel="noreferrer" className="view-cert-btn">View Certificate</a>}
                  </div>
                  {exp.duration && <span className="timeline-date">{exp.duration}</span>}
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            {shortCourses.length > 0 && (
              <div className="grid-1 cert-grid" style={{ marginTop: '2.5rem' }}>
                {shortCourses.map((course, index) => (
                  <div key={index} className="glass-card cert-card">
                    <div className="cert-icon">🏆</div>
                    <div className="cert-info">
                      <h4>{course.name}</h4>
                      <p className="cert-issuer">{course.issuer}</p>
                      <p className="cert-date">{course.date}</p>
                      {course.link && course.link !== "#" && <a href={course.link} target="_blank" rel="noreferrer" className="view-cert-btn">View Certificate</a>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="cert-list fade-in delay-400">
            <h3 className="sub-heading">Certificates</h3>
            <div className="grid-1 cert-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card cert-card">
                  <div className="cert-icon">🏆</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    {cert.link && cert.link !== "#" && <a href={cert.link} target="_blank" rel="noreferrer" className="view-cert-btn">View Certificate</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
