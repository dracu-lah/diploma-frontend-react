import React from "react";
import UploadCSV from "../Components/UploadCSV";
import MainLayout from "../Layouts/MainLayout";

function App() {

  return (
    <MainLayout>
      {/* <div className="dummy__text">Home</div> */}
      <div>
        <UploadCSV />
      </div>
    </MainLayout>
  );
}

export default App;
