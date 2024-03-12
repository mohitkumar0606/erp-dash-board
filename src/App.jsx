import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Orders from "./components/Orders"
import { Toaster } from "./components/ui/toaster"
import Sidebar from "./components/ui/navigation-menu";
import { useEffect, useState } from "react";
import AppContext from "./context/app-context";
import { modifyMockdataToCurr } from "./lib/utils";

function App() {
  const [currPage, setCurrPage] = useState("dashboard");
  // Get the initial state from local storage, defaulting to an empty string
  const [data, setData] = useState(
    localStorage.getItem('erp-data') ?
      JSON.parse(localStorage.getItem('erp-data')) :
      modifyMockdataToCurr());

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('erp-data', JSON.stringify(data));
  }, [data]);

  return (
    <AppContext.Provider value={{
      currPage, setCurrPage,
      data, setData
    }}>
      <div className="h-screen w-screen flex relative">
        <Router>
          <Toaster />
          <Sidebar
            currPage={currPage}
            setCurrPage={currPage} />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard setCurrPage={setCurrPage} />} />
            <Route path="/products" element={<Products setCurrPage={setCurrPage} />} />
            <Route path="/orders" element={<Orders setCurrPage={setCurrPage} />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App
