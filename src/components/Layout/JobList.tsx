// JobList.tsx
import React from "react";
import { jobList } from "../../data";
import CardJob from "./CardComponent/CardJob";

const JobList: React.FC = () => {
  return (
    <div>
      <h1 className="mb-5 pl-2 text-lg font-semibold transition-colors cursor-pointer duration-500 text-[#16A870]">
        Các công việc mới nhất
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobList.map((job, index) => (
          <div key={index} className="col-span-1">
            <CardJob
              id={job.id}
              Title={job.Title}
              Description={job.Description}
              PostedBy={job.PostedBy}
              Salary={job.Salary}
              ImageUrl={job.ImageUrl}
              location={job.location}
              detailedDescription={job.detailedDescription}
              isHot={job.isHot}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
