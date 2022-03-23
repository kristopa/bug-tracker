import React from 'react';

const openItems = [
    {
      id: 0,
      issue: 'This is issue number 1',
      date: 'insert date',
    },
    {
      id: 1,
      issue: 'This is issue number 2',
      date: 'insert date',
    },
    {
      id: 2,
      issue: 'This is issue number 3',
      date: 'insert date',
    },
    {
      id: 3,
      issue: 'This is issue number 4',
      date: 'insert date',
    },
    {
      id: 4,
      issue: 'This is issue number 5',
      date: 'insert date',
    },
  ];

const OpenIssues = () => {
    return (
      <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Open Issues</h2>
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
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Date Issued</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {
                  openItems.map(openItems => {
                    return (
                      <tr key={openItems.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{openItems.issue}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left">{openItems.date}</div>
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

export default OpenIssues;