// Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Pedometer App",
      description: "A fitness app that tracks steps, calories, and distance in real time.",
      technologies: "React Native, Tailwind CSS, GSAP",
      githubLink: "https://github.com/yourusername/pedometer-app",
      demoLink: "https://your-pedometer-app-demo.com",
    },
    {
      title: "To-Do List",
      description: "A simple and efficient task management app.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/yourusername/todo-app",
      demoLink: "https://your-todo-app-demo.com",
    },
    {
      title: "Interactive Teacher-Parent App",
      description:
        "An app for direct interaction between teachers and parents for student performance updates.",
      technologies: "React.js, Firebase, Tailwind CSS",
      githubLink: "https://github.com/yourusername/teacher-parent-app",
      demoLink: "https://your-teacher-parent-app-demo.com",
    },
    {
      title: "Startup Assistive Support Platform",
      description:
        "A platform providing startups with analysis tools and solutions, with a focus on supporting disabled individuals.",
      technologies: "Next.js, Node.js, MongoDB",
      githubLink: "https://github.com/yourusername/startup-assistive-platform",
      demoLink: "https://your-startup-assistive-platform-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-700">
      <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 m-4 w-80 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <p className="text-sm text-yellow-400 mb-4">Technologies: {project.technologies}</p>
            <div className="flex justify-between">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                GitHub
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
