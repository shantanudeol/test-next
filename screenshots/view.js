import { useEffect, useState } from "react";
import useSwr from "swr";
import { MyTable } from "./MyTable";
const fetcher = (url) => fetch(url).then((res) => res.json());

const View = () => {
  const [finalQuery, setFinalQuery] = useState("");

  const { data, error } = useSwr(`/api/jobs${finalQuery}`, fetcher);
  const [query, setQuery] = useState({
    limit: 10,
    sort: "title",
    sortType: "asc",
    search: "",
  });
  //   console.log("data", data[0]);

  const SortJobs = () => {
    const limit = "?limit=2&sort=title&sortType=desc";
    setQuery(limit);
  };

  function QueryBuilder() {
    let q = "?";
    if (query.limit) {
      //  q += `&limit=${query.limit}`;
    }
    if (query.sort) {
      q += `&sort=${query.sort}`;
    }
    if (query.sortType) {
      q += `&sortType=${query.sortType}`;
    }
    if (query.search) {
      q += `&search=${query.search}`;
    }
    setFinalQuery(q);
  }

  useEffect(() => {
    QueryBuilder();
  }, [query]);

  function handleSort(sort, sortType) {
    setQuery((prevstate) => ({
      ...prevstate,
      sort: sort,
      sortType: sortType,
    }));
  }

  function handleSearch(search) {
    setQuery((prevstate) => ({
      ...prevstate,
      search: search,
    }));
  }

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

      <div className='space-y-5'>
        <div className="py-2">
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            Nurse Daily Job
          </h1>
        </div>
        <div className="flex justify-center">
          <MyTable
            data={data ? data : []}
            query={query}
            handleSort={handleSort}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default View;
