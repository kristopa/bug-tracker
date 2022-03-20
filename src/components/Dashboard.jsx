import React from "react";
import IssuesBox from "./IssuesBox";

function Dashboard(){
    return (
        <div className="px-4 py-8 w-full mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div><IssuesBox /></div>
            <div><IssuesBox /></div>
            <div><IssuesBox /></div>
            <div><IssuesBox /></div>
            <div><IssuesBox /></div>
            <div><IssuesBox /></div>
          </div>
        </div>
    )
}

export default Dashboard;