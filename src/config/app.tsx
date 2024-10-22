import { RouteObject } from "react-router-dom";
import { DashboardPage } from "../pages/Dasboard";
import { ReportPage } from "../pages/Report";
import { ProfilePage } from "../pages/Profile";
import { ProjectsPage } from "../pages/ProjectsPage";
import { RiBarChartBoxLine, RiHome2Line, RiUserLine } from "react-icons/ri";
import { MainLayout } from "../layouts/MainLayout";

export const app = {
  routes: [
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "/report",
          element: <ReportPage />,
        },
        {
          path: "/Project",
          element: <ProjectsPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ] as RouteObject[], //setup your routes depending on the needs of the system. This is just a placeholder. DO NOT CHANGE THE KEY.

  navigation: [
    {
      key: "dashboard",
      name: "Dashboard",
      type: "link",
      path: "/",
      icon: <RiHome2Line size={20} />,
    },
    {
      key: "report",
      name: "Report",
      type: "link",
      path: "/report",
      icon: <RiBarChartBoxLine size={20} />,
    },
    {
      key: "Project",
      name: "Project",
      type: "link",
      path: "/Project",
      icon: <RiBarChartBoxLine size={20} />,
    },
    {
      key: "profile",
      name: "Profile",
      type: "link",
      path: "/profile",
      icon: <RiUserLine size={20} />,
    },
  ], //this is different from routes, this is used for generating the side navigation
  /*
        If you have nested navigation, you can use the group type:
        {
            key: 'users',
            name: 'User',
            type: 'group',
            path: 'users ,
            icon: 'insert react icon or any icon from any icon library here'
            submenu: [
                {
                    key: 'client',
                    name: 'Client',
                    type: 'link',
                    path: 'users/client/',
                    icon: <FaRegUser size={14} />
                },
            ]
        }
    */
};
