import React from "react";

const Table = ({ data }) => {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid #ccc",
        textAlign: "center",
        backgroundColor: "#064AAC",
        color: "white",
      }}
    >
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th
              key={index}
              style={{ border: "1px solid #ccc", padding: "8px" }}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td
                key={index}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
