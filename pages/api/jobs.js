import JobsJson from "../../data/jobs.json";

function GetSortOrder(prop, type = "asc") {
  return function (a, b) {
    if (type === "desc") {
      if (b[prop] > a[prop]) {
        return 1;
      } else if (b[prop] < a[prop]) {
        return -1;
      }
      return 0;
    } else {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  };
}

function Search(dataObject, searchField = "title", searchVal) {
  const searchResults = [];
  for (let i = 0; i < dataObject.length; i++) {
    const regSearch = new RegExp(searchVal, "i");
    if (dataObject[i][searchField].match(regSearch)) {
      searchResults.push(dataObject[i]);
    }
  }
  return searchResults;
}

export default async (req, res) => {
  try {
    const { query } = req;
    let data = JobsJson;

    if (query.search) {
      data = Search(data, query.searchField, query.search);
    }
    if (query.limit) data = data.slice(0, query.limit);

    if (query.sort) {
      data.sort(GetSortOrder(query.sort, query?.sortType));
    }

    res.send(data)
    
  } catch (error) {
    res.send(error);
  }
};
