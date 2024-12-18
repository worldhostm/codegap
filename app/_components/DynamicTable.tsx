'use client'
// React Component for a dynamic HTML table
import React from 'react';
import Pagination from './Pagination';

// Define the types for the props
interface TableProps {
  headers: string[]; // Array of column headers
  data: Array<{ [key: string]: any }>; // Array of row data objects
}

const keyLabels: { [key: string]: string } = {
    id: "번호",
    title: "제목",
    createdAt: "작성일",
  };

export default function DynamicTable ({ headers, data }:TableProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
    return (
        <div style={{ overflowX: 'auto', textAlign:'center',width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <table
            style={{
              width:'1200px',
              borderCollapse: 'collapse',
              borderTop: '1px solid #ddd',
              borderBottom: 'white',
            }}
          >
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    style={{
                      borderTop: '1px solid #ddd',
                      borderBottom: '1px solid #ddd',
                      padding: '8px',
                      textAlign: 'center',
                      backgroundColor: '#f4f4f4',
                    }}
                  >
                    {keyLabels[header]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      style={{
                        borderTop: '1px solid #ddd',
                        borderBottom: '1px solid #ddd',
                        padding: '8px',
                      }}
                    >
                      {row[header] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
          currentPage={1}
          itemsPerPage={10}
          onPageChange={()=>setCurrentPage(1)}
          totalItems={data.length}
          />
        </div>
      );
};

// Example usage
// import DynamicTable from './DynamicTable';
// const headers = ['Name', 'Age', 'City'];
// const data = [
//   { Name: 'John Doe', Age: 28, City: 'New York' },
//   { Name: 'Jane Smith', Age: 34, City: 'Los Angeles' },
//   { Name: 'Sam Wilson', Age: 23, City: 'Chicago' },
// ];
// <DynamicTable headers={headers} data={data} />
