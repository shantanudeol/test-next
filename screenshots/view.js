import { useEffect, useState } from "react";
import useSwr from "swr";
import { MyTable } from "./MyTable";

const fetcher = (url) => fetch(url).then((res) => res.json());

const View = () => {
  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState("");

  const { data, error } = useSwr(`/api/jobs${q}`, fetcher);
//   console.log("data", data[0]);
  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  const SortJobs = () => {
    const limit = "?limit=2&sort=title&sortType=desc";
    setQ(limit);
  };

  return (
    <>
      {/* <ul>
        {jobs &&
          jobs.length > 0 &&
          jobs.map((job) => (
            <li key={job.title}>
              <span onClick={() => SortJobs(job.title)}>{job.title}</span>
            </li>
          ))}
      </ul> */}

      <div className="py-2">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          CBH
        </h1>
      </div>
      <div className="flex justify-center">
        <MyTable data={data? data.data : []} />
      </div>
    </>
  );
};

export default View;
