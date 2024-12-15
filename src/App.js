import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "My First Project",
    description: "A brief description of the project.",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/yourusername/project",
    liveLink: null
  }
];

const experienceData = [
  {
    company: "My Company",
    role: "Software Developer",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Developed web applications",
      "Collaborated with team members",
      "Implemented new features"
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <div className="flex space-x-4">
            {['projects', 'experience', 'about'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize ${
                  activeSection === section 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-10">
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600"
                          >
                            <GitHub size={20} />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 mb-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <span className="text-gray-600">{exp.duration}</span>
                </div>
                <h4 className="text-lg text-gray-700 mb-3">{exp.role}</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-2">{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              A passionate developer dedicated to creating innovative solutions.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <GitHub size={32} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="text-gray-700 hover:text-blue-600"
              >
                <Mail size={32} />
              </a>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;