import { Input, Space, Table } from "antd";
import { useMemo, useCallback } from "react";
import _ from "lodash";

export function MyTable({ data, query, handleSort, handleSearch }) {
  console.log("query ===>", query);
  const userSort = query.sortType == "asc" ? "ascend" : "descend";

  const columns = useMemo(
    () => [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        sorter: true,
        defaultSortOrder: query.sort == "title" ? userSort : null,
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
        sorter: true,
        defaultSortOrder: query.sort == "position" ? userSort : null,
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        sorter: true,
        defaultSortOrder: query.sort == "type" ? userSort : null,
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city",
        sorter: true,
        defaultSortOrder: query.sort == "city" ? userSort : null,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: true,
        defaultSortOrder: query.sort == "age" ? userSort : null,
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        sorter: true,
        defaultSortOrder: query.sort == "gender" ? userSort : null,
      },
      {
        title: "email",
        dataIndex: "email",
        key: "email",
        sorter: true,
        defaultSortOrder: query.sort == "email" ? userSort : null,
      },
      {
        title: "name",
        dataIndex: "name",
        key: "name",
        sorter: true,
        defaultSortOrder: query.sort == "name" ? userSort : null,
      },

      {
        title: "phone",
        dataIndex: "phone",
        key: "phone",
        sorter: true,
        defaultSortOrder: query.sort == "phone" ? userSort : null,
      },

      {
        title: "experience",
        dataIndex: "experience",
        key: "experience",
        sorter: true,
        defaultSortOrder: query.sort == "experience" ? userSort : null,
      },

    ],
    []
  );


  const delayedQuery = useCallback(
    _.debounce((q) => handleSearch(q), 300),
    []
  );
  function handleInputChange(e) {
    delayedQuery(e.target.value);
  }
  return (
    <>
      <div className="grid gap-2">
        <div className='mx-auto'>
          <Input.Search
            placeholder="Search here"
            onSearch={handleSearch}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <Table
            dataSource={data}
            columns={columns}
            onChange={(pagination, filters, sorter) => {
              // console.log(
              //   "pagination, filters, sorter",
              //   pagination,
              //   filters,
              //   sorter
              // );
              console.log("sorter", sorter);
              if (sorter.order) {
                const sortType = sorter.order == "descend" ? "desc" : "asc";
                handleSort(sorter.columnKey, sortType);
              } else {
                handleSort(sorter.columnKey, undefined);
              }
            }}
            pagination={{ hideOnSinglePage: true }}
            scroll={{scrollToFirstRowOnChange : true}}
          />
        </div>
      </div>
    </>
  );
}
