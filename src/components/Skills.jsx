import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      skills: [
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ]
    },
    {
      title: "TECHNOLOGIES & FRAMEWORKS",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Express", icon: "devicon-express-original" }
      ]
    },
    {
      title: "PLATFORMS & TOOLS",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="h2-section h2-center fade-in">SKILLS</h2>
        <div className="skills-marquee-wrapper fade-in delay-200">
          {skillCategories.map((category, index) => {
            // Duplicate the array 4 times to ensure seamless infinite scrolling without gaps
            const scrollingSkills = [...category.skills, ...category.skills, ...category.skills, ...category.skills];
            
            return (
              <div key={index} className="skill-category-box">
                <h3 className="category-title">{category.title}</h3>
                <div className="category-marquee">
                  <div className={`marquee-content ${index % 2 !== 0 ? 'reverse' : ''}`}>
                    {scrollingSkills.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        <div className="skill-icon-box">
                          <i className={skill.icon}></i>
                        </div>
                        <span className="skill-label">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
