import React, { useState } from 'react';
import Header from '../components/Header';
import ProjectSection from '../components/ProjectSection';

const data = [
  {
    title: "Connect n Hire",
    techs: ["NodeJS", "ReactJS", "Mongodb", "ExpressJS"]
  },
  {
    title: "Home Services Application",
    techs: ["NodeJS", "ReactJS", "MySQL", "ExpressJS", "Firebase"]
  },
  {
    title: "FCF Mobile App",
    techs: ["C#", "React Native", "MySQL", "Firebase"]
  },
  {
    title: "Online Tournament Platform",
    techs: ["NodeJS", "MySQL", "ReactJS", "ExpressJS"]
  }
];

function Project() {
  const [query, setQuery] = useState("")
  const [projects, setProjects] = useState(data);
  const [copy, setCopy] = useState(data);

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Header route="projects" />
      <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: '80%' }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 50 }}>
            <text></text>
            <input type={"text"} placeholder={"Technology"} onChange={handleChange} style={{ fontSize: 20 }}></input>
          </div>
          {
            projects?.map((project, index) => {
              return (
                <ProjectSection data={project} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Project;
