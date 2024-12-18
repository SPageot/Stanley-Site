import React from "react";

const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pb-7 lg:pb-0">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">July 2023 - Present</time>
          <div className="text-lg font-black">
            Super Systems Inc/Semper Valens Solutions
          </div>
          I developed backend servers with FastAPI and NestJS, improving
          performance and security through best practices like rate-limiting and
          authentication verification. I integrated React on the frontend,
          optimizing performance with hooks and reusable components, and reduced
          development time. I tested AI models with FastAPI, implemented
          TypeScript to improve reliability, and documented projects on GitHub
          for better collaboration. I containerized projects with Docker,
          applied security best practices, and used Azure functions for
          scalability. I also optimized state management with Redux, tested with
          Jest and pytest, and worked closely with UX designers and product
          managers to deliver user-friendly interfaces.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Oct 2022 - Jul 2023</time>
          <div className="text-lg font-black">Freelancer</div>I created
          client-side applications with React to reduce development time and
          improve performance and security. I implemented NestJS, FastAPI, and
          GraphQL in various projects, adding security features to prevent
          unauthorized access and limit endpoint pings. I wrote documentation
          for smooth project handovers, containerized projects with Docker for
          consistency across environments, and applied security best practices.
          I also built mobile applications with React Native for cross-device
          consistency and maintained clear communication with clients, walking
          them through each project's development process.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Nov 2021 - Oct 2022</time>
          <div className="text-lg font-black">Chia Network</div>I streamlined
          development by creating reusable React components and implemented
          Redux for efficient state management, improving performance and
          reducing re-renders. I used Jest for client-side testing, minimizing
          errors, and integrated Formik to reduce user input mistakes.
          Collaborating with UI designers and product managers, I translated
          design concepts into functional interfaces and contributed to scalable
          ExpressJS server-side applications. I also conducted code reviews,
          provided feedback on best practices, and suggested UI improvements to
          enhance user experience, all while actively participating in the agile
          development process.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">May 2020 - Nov 2021</time>
          <div className="text-lg font-black">Interviewer</div>I implemented
          React Native and React for mobile and web applications, optimizing
          performance to reduce loading times and enhance overall efficiency. By
          integrating Redux for centralized state management, I made debugging
          easier and improved error handling. I decreased development time by
          using Bootstrap and utilized TypeScript to reduce user errors and
          bugs. Additionally, I optimized UI rendering and data fetching for
          better performance and provided valuable UI recommendations to enhance
          the user experience. Completing tasks on time helped accelerate
          production.
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default Timeline;
