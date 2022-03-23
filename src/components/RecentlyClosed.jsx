import React from 'react';

const closedItems = [
    {
      id: 0,
      issue: 'This is issue number 1',
    },
    {
      id: 1,
      issue: 'This is issue number 2',
    },
    {
      id: 2,
      issue: 'This is issue number 3',
    },
    {
      id: 3,
      issue: 'This is issue number 4',
    },
    {
      id: 4,
      issue: 'This is issue number 5',
    },
  ];

const RecentlyClosed = () => {
    return (
      <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Recently Closed Issues</h2>
        </header>
        <div className="p-3">
  
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Issue</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {
                  closedItems.map(closedItems => {
                    return (
                      <tr key={closedItems.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{closedItems.issue}</div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
  
          </div>
  
        </div>
       </div>
    );
}

export default RecentlyClosed;