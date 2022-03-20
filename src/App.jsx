import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;