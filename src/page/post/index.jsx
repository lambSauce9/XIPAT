import { useEffect, useState } from "react";

import { Table, Input, Button, Modal } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";

interface DataType {
  key: React.Key;
  id: number;
  userId: number;
  title: string;
}

function Post() {
  const [data, setData] = useState();
  const [currentContent, setCurrentContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      width: "30%",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
        return (
          <Input
            type="number"
            autoFocus
            placeholder="Type userID"
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={(e) => {
              confirm()
            }}
            onBlur={() => {
              confirm()
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter:(value,record) => {
        return record.userId === parseInt(value)
      }
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "40%",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
        return (
          <Input
            type="text"
            autoFocus
            placeholder="Type title"
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={(e) => {
              confirm()
            }}
            onBlur={() => {
              confirm()
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter:(value,record) => {
        return record.title.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => {
          setCurrentContent(record);
          showModal()
        }}>Show Detail</Button>
      )
    },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Post</h2>
      <Modal title={currentContent?.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>ID: {currentContent?.id}</p>
        <p>User ID: {currentContent?.userId}</p>
        <p>Content: {currentContent?.body}</p>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="id"
      />
    </div>
  );
}

export default Post;
