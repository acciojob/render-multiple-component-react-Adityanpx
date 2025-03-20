import React from "react";

// Project component to display name and description
const Project = ({ name, description }) => {
  return (
    <div>
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
};

const App = () => {
  // Array of dream projects
  const projects = [
    {
      name: "AI-Powered Chatbot",
      description: "An intelligent chatbot that automates customer support."
    },
    {
      name: "Smart Farming App",
      description: "An IoT-based system to help farmers monitor soil conditions."
    },
    {
      name: "E-Commerce Platform",
      description: "A seamless online shopping experience with AI recommendations."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <Project key={index} name={project.name} description={project.description} />
      ))}
    </div>
  );
};

export default App;
