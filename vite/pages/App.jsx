import '../pages/app.scss';
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
export default function App() {
  return (
      <main>
      <Sidebar />
      <div className="content">
          <Outlet />
      </div>
    </main>
  )
}