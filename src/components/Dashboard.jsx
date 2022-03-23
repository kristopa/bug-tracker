import React from "react";
import OpenIssues from "./OpenIssues";
import RecentlyClosed from "./RecentlyClosed";

function Dashboard(){
    return (
        <div className="px-4 py-8 w-full mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div><OpenIssues /></div>
            <div><RecentlyClosed /></div>
          </div>
        </div>
    )
}

export default Dashboard;