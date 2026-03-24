import React from 'react';
import crowdfundImg from '../assets/crowdfund.png';
import eventhubImg from '../assets/eventhub.png';
import churchImg from '../assets/church.png';

const Projects = () => {
  const customProjects = [
    {
      title: "CrowdFund",
      description: "The platform empowers users to launch fundraising campaigns, bridging donors with meaningful causes. Contains backend PHP scripts to form a smooth, secure interface between the database and the platform.",
      image: crowdfundImg,
      live: "#",
      code: "#"
    },
    {
      title: "EventHub",
      description: "Created an Event Management website to help users create and manage events smoothly. Built a responsive and user-friendly interface using HTML, CSS, and JavaScript, integrated with a basic AI assistant.",
      image: eventhubImg,
      live: "#",
      code: "#"
    },
    {
      title: "Church Management System",
      description: "A modern church platform built for efficient administrative organization. Enables staff to securely manage member records, weekly religious events, track robust donations, and direct spiritual volunteering seamlessely.",
      image: churchImg,
      live: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2-section fade-in h2-center">PROJECTS</h2>
        
        <div className="projects-container">
          {customProjects.map((project, index) => (
            <div key={index} className={`project-row fade-in delay-${(index % 3 + 1) * 100} ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="project-image-box">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.live} className="btn-outline">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live App
                  </a>
                  <a href={project.code} className="btn-outline">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
