import React from "react";
import IssuesBox from "./IssuesBox";

function Dashboard(){
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
              <IssuesBox />
              <IssuesBox />
              <IssuesBox />
              <IssuesBox />
          </div>
        </div>
    )
}

export default Dashboard;