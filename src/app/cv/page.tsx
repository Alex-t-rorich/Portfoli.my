import React from 'react';
import Head from 'next/head';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const cvData = {
  personal: {
    name: "Alex Johnson",
    title: "Senior Frontend Developer",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexjohnson",
    website: "alexjohnson.dev",
    summary: "Experienced frontend developer with 6+ years building responsive, accessible web applications. Specialized in React ecosystem, performance optimization, and clean UI implementation."
  },
  skills: [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "Jest & Testing", level: 85 },
    { name: "AWS", level: 70 },
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp, Inc.",
      period: "Jan 2021 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of company's design system used by 40+ developers, reducing development time by 30%",
        "Optimized main product page load time by 65% through code splitting and lazy loading",
        "Mentored junior developers and conducted 20+ technical interviews for frontend positions"
      ]
    },
    {
      role: "Frontend Developer",
      company: "WebSolutions",
      period: "Mar 2018 - Dec 2020",
      location: "Oakland, CA",
      achievements: [
        "Developed responsive e-commerce platform serving 100K+ monthly users",
        "Implemented accessibility improvements resulting in WCAG AA compliance",
        "Created automated testing system reducing regression bugs by 40%"
      ]
    },
    {
      role: "Junior Developer",
      company: "Creative Design Agency",
      period: "Jun 2016 - Feb 2018",
      location: "Portland, OR",
      achievements: [
        "Built interactive websites for 15+ clients in retail and hospitality sectors",
        "Collaborated with design team to improve development handoff process",
        "Maintained legacy codebase while incrementally upgrading to modern standards"
      ]
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of Washington",
      year: "2016",
      details: "Graduated with honors. Focus on web technologies and human-computer interaction."
    }
  ],
  certifications: [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2020" }
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Professional" },
    { name: "French", proficiency: "Basic" }
  ]
};

export default function CV() {
  return (
    <>
      <Head>
        <title>{cvData.personal.name} | {cvData.personal.title}</title>
        <meta name="description" content={cvData.personal.summary} />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header */}
          <header className="relative px-8 pt-8 pb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className={`text-3xl font-bold ${inter.className}`}>{cvData.personal.name}</h1>
                <h2 className="text-xl mt-1 text-blue-600">{cvData.personal.title}</h2>
              </div>
              <div className="mt-4 md:mt-0 text-sm">
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>{cvData.personal.email}</span>
                </div>
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>{cvData.personal.phone}</span>
                </div>
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{cvData.personal.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                  </svg>
                  <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {cvData.personal.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-8 py-6">
            {/* Summary */}
            <section className="mb-8">
              <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${inter.className}`}>Professional Summary</h3>
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600">{cvData.personal.summary}</p>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${inter.className}`}>Skills</h3>
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {cvData.skills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className={`${roboto.className} text-sm text-gray-600`}>{skill.name}</span>
                      <span className="text-xs text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${inter.className}`}>Work Experience</h3>
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              
              <div className="space-y-6">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-200 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="text-base font-semibold text-gray-700">{job.role}</h4>
                        <p className="text-gray-700">{job.company} | {job.location}</p>
                      </div>
                      <p className={`${roboto.className} text-sm text-gray-500 md:text-right whitespace-nowrap`}>{job.period}</p>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${inter.className}`}>Education</h3>
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                
                {cvData.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="text-base font-semibold text-gray-700">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className={`${roboto.className} text-sm text-gray-700`}>{edu.year}</p>
                    <p className="text-sm mt-1 text-gray-700">{edu.details}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${inter.className}`}>Certifications & Languages</h3>
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                
                <div className="mb-4">
                  {cvData.certifications.map((cert, index) => (
                    <div key={index} className="mb-2">
                      <p className="text-base font-medium text-gray-700">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-base font-semibold mb-2 text-gray-700">Languages</h4>
                {cvData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">{lang.name}</span>
                    <span className="text-gray-600">{lang.proficiency}</span>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-8 py-4 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-200">
            <p>References available upon request</p>
          </footer>
        </div>
      </main>
    </>
  );
}