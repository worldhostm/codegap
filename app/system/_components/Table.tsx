import React from 'react';

interface TableProps {
  data: Record<string, string | number>[]; // JSON 배열로 데이터를 받음
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) return <p>No data available</p>; // 데이터가 없을 때

  // 테이블의 thead를 생성하기 위해 첫 번째 항목의 키를 사용
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="py-2 px-4 border-b bg-gray-200 text-left text-sm font-semibold text-gray-700"
              >
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {headers.map((header) => (
                <td key={header} className="py-2 px-4 border-b text-sm text-gray-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
