import React, { useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Select from "./Components/Select";
import Table from "./Components/Table";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    const searched = data.filter((item) =>
      item.Name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedData(searched);
    setFilteredData(searched);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectValue(selectedValue);

    const filtered = data.filter((item) => item.Designation === selectedValue);
    setFilteredData(filtered);
  };

  const data = [
    {
      S_NO: "1",
      Name: "Noor Khan",
      Email: "dummyemail@gmail.com",
      Designation: "Accountant",
      Salary: "80,000",
    },
    {
      S_NO: "2",
      Name: "Kashif ",
      Email: "dummyemail@gmail.com",
      Designation: "Sales Man",
      Salary: "40,000",
    },
    {
      S_NO: "3",
      Name: "Maaz Alhoti",
      Email: "dummyemail@gmail.com",
      Designation: "Data Analyst",
      Salary: "65,000",
    },
    {
      S_NO: "4",
      Name: "Waqas Khan",
      Email: "dummyemail@gmail.com",
      Designation: "Operation-Manager",
      Salary: "75,000",
    },
    {
      S_NO: "5",
      Name: "Kaiser Niazi",
      Email: "dummyemail@gmail.com",
      Designation: "Inventory Executive",
      Salary: "55,000",
    },
  ];

  return (
    <div>
      <h1 className="hed1">Components WITH Props</h1>
      <Input
        type="text"
        placeholder="Enter Employ Name...."
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button label="Search" onClick={() => alert("Button clicked!")} />
      <Card
        title="XYZ Enterprises"
        content="Global Product Supply and Service"
      />
      <Select
        options={[
          { label: "Accountant", value: "Accountant" },
          { label: "Sales Man", value: "Sales Man" },
          { label: "Data Analyst", value: "Data Analyst" },
          { label: "Operation Manager", value: "Operation Manager" },
          { label: "Inventory Executive", value: "Inventory Executive" },
        ]}
        value={selectValue}
        onChange={handleSelectChange}
      />
      <Table data={filteredData.length > 0 ? filteredData : data} />
    </div>
  );
};

export default App;
