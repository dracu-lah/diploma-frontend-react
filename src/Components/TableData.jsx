import React from "react";

const TableData = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Course</th>
            <th>Exam Type</th>
            <th>Attendance</th>
            <th>I Mark</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>3131-Computer Architecture</td>
            <td>Regular</td>
            <td>Present</td>
            <td>50</td>
            <td>S</td>
            <td>A</td>
          </tr>
          <tr>
            <th>2</th>
            <td>3001-Environmental Science & Disaster Management</td>
            <td>Regular</td>
            <td>Present</td>
            <td>50</td>
            <td>S</td>
            <td>P</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
