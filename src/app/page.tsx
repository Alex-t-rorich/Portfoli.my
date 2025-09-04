import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 flex flex-col items-center text-center lg:flex-row lg:text-left">
        <div className="lg:w-1/2">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            I'm a developer passionate about creating beautiful, functional websites and applications.
            Explore my work and get in touch to discuss your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link 
              href="/portfolio" 
              className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12">
          <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-xl md:h-80 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-80">
              <span className="text-xl font-medium">Your Image Here</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Project {item}</h3>
                <p className="mb-4 text-gray-600">
                  A brief description of this project and the technologies used.
                </p>
                <Link 
                  href={`/portfolio/project-${item}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">My Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {['Frontend', 'Backend', 'UI/UX', 'Deployment'].map((skill) => (
            <div key={skill} className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-3 text-lg font-medium">{skill}</h3>
              <p className="text-gray-600">
                Brief description of your experience with {skill.toLowerCase()} technologies.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <p className="mb-4 text-gray-600">
            I'm a passionate developer with expertise in building modern web applications. 
            I specialize in React, Next.js, and backend technologies.
          </p>
          <p className="mb-4 text-gray-600">
            My approach combines technical expertise with creative problem-solving 
            to deliver solutions that exceed expectations.
          </p>
          <div className="mt-6 text-center">
            <Link 
              href="/about" 
              className="text-blue-600 hover:text-blue-800"
            >
              Learn more about me →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
          <p className="mb-6 text-lg">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link 
            href="/contact" 
            className="inline-block rounded-md bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}