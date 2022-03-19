import React from 'react';

const SideBar = () => {
  return (
    <div className="flex flex-col overflow-hidden h-screen w-40
                  bg-white shadow-lg">
                    
        <SideBarText text={'🏠 Dashboard'} />
        <Divider />
        <SideBarText text={'🐞 New Issues'} />
        <SideBarText text={'📂 Open Issues'} />
        <SideBarText text={'👍🏼 Closed Issues'} />
        <Divider />
        <SideBarText text={'⚙ Preferences'} />
    </div>
  );
};

const SideBarText = ({ text }) => (
  <div className="sidebar-text group">
    {text}
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;