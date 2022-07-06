import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Componentes
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
// Pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const { setCurrentColor, setCurrentMode, activeMenu, themeSettings, setThemeSettings,currentColor,currentMode } = useStateContext();
  // const activeMenu = true;

  //Para que se guarde en el localStorage el modo dark y los cambios de colores
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
   <div className={currentMode  === "Dark" ? "dark":""}>

      <Router>
        <div className="flex relative dark:bg-main-dark-bg min-h-screen justify-end">
          {/* Tuerca se settings */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                // Aca esta para activarlo el themeSettings el menu de opciones de dark y colores
                onClick={()=> setThemeSettings(true)}
                >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* =========== Sidebar =========== fixed w-1/5*/}
          {activeMenu ? (
            <div className="w-2/3 sm:w-2/5 md:w-[30%] lg:w-[25%] xl:w-1/5 fixed z-10 left-0 sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* =========== Main ===========  xl:ml-72 flex-2*/}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "lg:w-[75%]" : "flex-2"
              
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
                 {/* El menu de opciones inicializa en false */}
               {themeSettings && <ThemeSettings/>}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>

          </div>
        </div>
      </Router>
    
  </div>
  );
};

export default App;
