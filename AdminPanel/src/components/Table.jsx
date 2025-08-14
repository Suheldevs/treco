// src/components/DynamicTable.jsx
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const Table = ({ data = [], columnConfig = {} }) => {
  const tableRef = useRef();

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: {
        details: {
          type: "column",
          target: "tr",
        },
      },
      columnDefs: [{ className: "control", orderable: false, targets: 0 }],
      scrollX: true,
      autoWidth: true,
      destroy: true,
      ordering: true,
      paging: true,
      info: true,
      language: {
        emptyTable: "No Records Found",
      },
    });

    return () => {
      table.destroy();
    };
  }, [data]);

  if (!data.length) {
    return (
      <div className="text-center text-gray-500 text-sm py-6">
        No data available
      </div>
    );
  }

  const columns = Object.keys(columnConfig);
  return (
    <div className="w-full rounded-md overflow-x-auto p-2 border border-gray-200 bg-white shadow custom-table-wrapper">
      <table
        ref={tableRef}
        className="min-w-max w-full text-sm text-left dataTable display stripe hover dataTable"
      >
        <thead>
          <tr className="bg-black text-white">
            <th className="px-3 py-2 font-semibold text-xs uppercase text-center">
              S. No.
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-3 py-2 font-semibold text-xs uppercase text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                {columnConfig[col]?.label || col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b hover:bg-blue-50 transition-colors duration-200 "
            >
              <td className="px-3 py-2 text-center">{idx + 1}</td>
              {columns.map((col) => (
  <td
    key={col}
    className="px-3 py-2 text-center"
    style={{ whiteSpace: "nowrap" }}
  >
    {columnConfig[col]?.render
      ? columnConfig[col].render(row[col], row)
      : row[col] || "--"}
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
