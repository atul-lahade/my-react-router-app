import { NavLink, Outlet } from "react-router";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen space-y-4">
      <h1 className="font-bold">My Utilities App</h1>
      <div className="flex flex-row gap-4">
        <NavLink
          to="/name-gen"
          className={({ isActive }) =>
            isActive ? "underline cursor-pointer text-blue-500" : "underline cursor-pointer"
          }
        >
          Name Generator
        </NavLink>
        <NavLink
          to="/who-next/1001"
          className={({ isActive }) =>
            isActive ? "underline cursor-pointer text-blue-500" : "underline cursor-pointer"
          }
        >
          Who is next?
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            isActive ? "underline cursor-pointer text-blue-500" : "underline cursor-pointer"
          }
        >
          Calculator
        </NavLink>

        <NavLink
          to="/task-app"
          className={({ isActive }) =>
            isActive ? "underline cursor-pointer text-blue-500" : "underline cursor-pointer"
          }
        >
          My Task App
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "underline cursor-pointer text-blue-500" : "underline cursor-pointer"
          }
        >
          Users
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
