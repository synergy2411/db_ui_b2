import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

function DemoAgGrid() {
  const [colDefs, setColDefs] = useState([
    {
      field: "emp_id",
      filter: true,
      floatingFilter: true,
      checkboxSelection: true,
    },
    { field: "emp_name", filter: true, floatingFilter: true },
    { field: "emp_dept", filter: true, floatingFilter: true, editable: true },
  ]);
  const [rowData, setRowData] = useState([
    { emp_id: "e001", emp_name: "John Doe", emp_dept: "marketing" },
    { emp_id: "e002", emp_name: "Monica Geller", emp_dept: "accounts" },
    { emp_id: "e003", emp_name: "Rachel Greens", emp_dept: "finance" },
    { emp_id: "e004", emp_name: "Joey", emp_dept: "marketing" },
  ]);

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
}

export default DemoAgGrid;
