import Appbar from "./components/baseLayout/Appbar"
import Sidebar from "./components/baseLayout/Sidebar"
import DashboardScreen from "./components/dashboard/DashboardScreen"


function App() {
  return (
    <div className="wrapper w-screen flex items-center justify-center flex-col bg-[#212121]">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
        <div className="page-wrapper w-full">
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  )
}

export default App
