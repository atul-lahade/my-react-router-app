import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx", [
        route("name-gen", "routes/name-gen.tsx"),
        route("who-next/:deptId", "routes/who-next.tsx"),
        route("calculator", "routes/Calculator.tsx"),
        route("task-app", "routes/TaskApp.tsx"),
        route("users", "routes/Users.tsx")
    ]),

] satisfies RouteConfig;
