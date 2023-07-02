import Calendar from "../pages/Calendar";
import Login from "../pages/Login";

export interface IRouts {
  path: string;
  Component: React.ComponentType;
}

export const publicRoutes: IRouts[] = [{ path: "/login", Component: Login }];
export const privateRoutes: IRouts[] = [{ path: "/home", Component: Calendar }];
