import { Space, Table } from "antd";

export function MyTable(props) {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      sort:true
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const columns1 = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];

  return (
    <Space>
      <Table dataSource={props.data} columns={columns1}  />
    </Space>
  );
}
