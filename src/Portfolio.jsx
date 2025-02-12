import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import logos from assets
import htmlLogo from "./assets/logos/html.png";
import cssLogo from "./assets/logos/css-3.png";
import jsLogo from "./assets/logos/js.png";
import reactLogo from "./assets/logos/react.png";
import bootstrapLogo from "./assets/logos/bootstrap.png";
import tailwindLogo from "./assets/logos/tailwind.png";
import nodeLogo from "./assets/logos/nodejs.png";
import phpLogo from "./assets/logos/php.png";
import mysqlLogo from "./assets/logos/mysql.png";
import mongodbLogo from "./assets/logos/mongodb.png";
import postgresqlLogo from "./assets/logos/postgresql.png";
import snowflakeLogo from "./assets/logos/snowflake.png";
import gitLogo from "./assets/logos/git.png";
import javaLogo from "./assets/logos/java.png";
import postmanLogo from "./assets/logos/postman.png";
import githubLogo from "./assets/logos/github.png";
import viteLogo from "./assets/logos/vite.png";
import npmLogo from "./assets/logos/npm.png";
import thunderLogo from "./assets/logos/thunder.png";
// Import profile picture
import profilePicture from "./assets/profile.jpg"; // Add your image in the assets folder

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formResponse, setFormResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormResponse("Form submitted successfully!");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      easing: 'ease-in-out', // Set the easing function for animation
      once: true, // If true, animations only happen once (when scrolling down)
    });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen relative">
      <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-amber-100 to-white"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 p-8 text-gray-900 z-50 flex justify-between w-full">
        <div className="text-2xl font-bold">Sudarshan Sase</div>
        <ul className="flex space-x-8 text-lg font-semibold">
          <li>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-600">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="about"
        className="p-16 text-center min-h-screen flex items-center justify-center flex-col w-full"
        data-aos="fade-up"
      >
        <img
          src={profilePicture}
          alt="Sudarshan Sase"
          className="rounded-full w-32 h-32 object-cover mb-8 shadow-lg"
        />
        <h1 className="text-6xl font-bold mb-4 text-blue-500">Sudarshan Sase</h1>
        <p className="text-3xl mt-4 mb-8">
          Software Engineer | Front-end, Back-end & Full-stack Development
        </p>
        <p className="mt-6 text-lg w-full mx-auto max-w-2xl">
          As a software engineer, I'm driven by curiosity and a passion for
          problem-solving. With a strong foundation in both front-end and
          back-end technologies, I strive to create efficient, scalable, and
          user-friendly applications. My journey in the tech industry has been
          marked by continuous learning and adaptation to new technologies.
        </p>
      </section>

      <section
        id="skills"
        className="p-16 bg-gray-200 min-h-screen flex items-center justify-center flex-col w-full"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-center mb-12">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-12">
          <SkillCategory
            title="Frontend Technologies"
            skills={[
              { logo: htmlLogo, label: "HTML5" },
              { logo: cssLogo, label: "CSS3" },
              { logo: jsLogo, label: "JavaScript" },
              { logo: reactLogo, label: "React.js" },
              { logo: bootstrapLogo, label: "Bootstrap 4" },
              { logo: tailwindLogo, label: "Tailwind CSS" },
              { logo: viteLogo, label: "Vite" },
            ]}
          />
          <SkillCategory
            title="Backend Technologies"
            skills={[
              { logo: nodeLogo, label: "Node.js" },
              { logo: phpLogo, label: "PHP" },
              { logo: javaLogo, label: "Java" },
            ]}
          />
          <SkillCategory
            title="Database Technologies"
            skills={[
              { logo: mysqlLogo, label: "MySQL" },
              { logo: mongodbLogo, label: "MongoDB" },
              { logo: postgresqlLogo, label: "PostgreSQL" },
              { logo: snowflakeLogo, label: "Snowflake" },
            ]}
          />
          <SkillCategory
            title="DevOps Tools"
            skills={[
              { logo: gitLogo, label: "Git" },
              { logo: postmanLogo, label: "Postman" },
              { logo: githubLogo, label: "GitHub" },
              { logo: npmLogo, label: "NPM" },
              { logo: thunderLogo, label: "ThunderClient" },
            ]}
          />
        </div>
      </section>

      <section
        id="experience"
        className="p-16 min-h-screen w-full"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>
        <Experience
          title="Software Engineer"
          company="64 Squares"
          date="January 2024 – Present"
          responsibilities={[
            "Front-end development with React.js, Redux, and Tailwind CSS.",
            "Backend interaction using Node.js and Django.",
            "Database management with MySQL and MongoDB.",
          ]}
        />
        <Experience
          title="PHP Developer Intern"
          company="VS Technosoft"
          date="October 2023 – December 2023"
          responsibilities={[
            "Customized WordPress websites using PHP, HTML, CSS, and JavaScript.",
          ]}
        />
        <Experience
          title="Node.js Developer Trainee"
          company="Celebal Technology"
          date="June 2023 – August 2023"
          responsibilities={[
            "Worked on backend systems with Node.js and Express.js.",
          ]}
        />
      </section>

      <section
        id="projects"
        className="p-16 bg-gray-200 min-h-screen w-full"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
        <Project
          title="Taskwise"
          techStack="MERN Stack (MongoDB, Express.js, React.js, Node.js)"
          description="Developed REST APIs and role-based access control for task management and assessments."
        />
        <Project
          title="Vizismart"
          techStack="React.js, Redux, Axios, Tailwind CSS, Django, PostgreSQL"
          description="Developed property management functionalities and integrated authentication mechanisms."
        />
        <Project
          title="Stegnography"
          techStack="Core Java, LSB Manipulation"
          description="Developed steganography algorithms for hiding data within digital images."
        />
      </section>

      <section
        id="contact"
        className="p-16 min-h-screen flex items-center justify-center flex-col w-full"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-6 w-full">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="subject" className="block text-lg font-medium mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </div>

          {formResponse && (
            <div className="mt-6 text-center text-lg text-green-500">
              {formResponse}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

// Component for skill categories
const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-4xl font-semibold mb-6">{title}</h3>
    <ul className="space-y-6">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-lg">
          <img src={skill.logo} alt={skill.label} className="h-8 w-8 mr-4" />
          {skill.label}
        </li>
      ))}
    </ul>
  </div>
);

// Component for experience
const Experience = ({ title, company, date, responsibilities }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-semibold">{title}</h3>
    <p className="text-2xl text-gray-600">
      {company} - {date}
    </p>
    <ul className="list-disc list-inside mt-4 text-gray-800">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="text-lg">
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

// Component for projects
const Project = ({ title, techStack, description }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-semibold">{title}</h3>
    <p className="text-2xl text-gray-600">Tech Stack: {techStack}</p>
    <p className="mt-4 text-gray-800 text-lg">{description}</p>
  </div>
);

export default Portfolio;
