import { RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { RiHome2Line } from "react-icons/ri";
import { MainLayout } from "../layouts/MainLayout";

export const app = {
    routes: [
        {
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ] as RouteObject[], //setup your routes depending on the needs of the system. This is just a placeholder. DO NOT CHANGE THE KEY.

    navigation: [
        {
            key: 'home',
            name: 'Home',
            type: 'link',
            path: '/',
            icon: <RiHome2Line size={20} />
        },
    ] //this is different from routes, this is used for generating the side navigation
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
}