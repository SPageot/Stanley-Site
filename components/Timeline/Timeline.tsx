import { jobDetails } from "@/constants/helpers";
import React from "react";

const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon  max-md:timeline-compact timeline-vertical pb-7 h-full lg:pb-0">
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
        <div className="timeline-start mb-10 lg:w-4/5 md:text-end">
          <time className="font-mono italic">{jobDetails[0].jobYear}</time>
          <h2 className="text-lg font-black">{jobDetails[0].company}</h2>
          <h4 className="text-md font-black">{jobDetails[0].jobTitle}</h4>
          <p>{jobDetails[0].jobSummary}</p>
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
        <div className="timeline-end mb-10 lg:w-4/5">
          <time className="font-mono italic">{jobDetails[1].jobYear}</time>
          <h2 className="text-lg font-black">{jobDetails[1].company}</h2>
          <h4 className="text-md font-black">{jobDetails[1].jobTitle}</h4>
          <p>{jobDetails[1].jobSummary}</p>
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
        <div className="timeline-start mb-10 lg:w-4/5 md:text-end">
          <time className="font-mono italic">{jobDetails[2].jobYear}</time>
          <h2 className="text-lg font-black">{jobDetails[2].company}</h2>
          <h4 className="text-md font-black">{jobDetails[2].jobTitle}</h4>
          <p>{jobDetails[2].jobSummary}</p>
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
        <div className="timeline-end mb-10 lg:w-4/5">
          <time className="font-mono italic">{jobDetails[3].jobYear}</time>
          <h2 className="text-lg font-black">{jobDetails[3].company}</h2>
          <h4 className="text-md font-black">{jobDetails[3].jobTitle}</h4>
          <p>{jobDetails[3].jobSummary}</p>
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default Timeline;
