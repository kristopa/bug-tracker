import React from 'react';

const SideBar = () => {
  return (
    <div className="flex flex-col
                    static left-auto top-auto
                    h-screen
                    no-scrollbar w-48
                  bg-slate-300">
                    
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