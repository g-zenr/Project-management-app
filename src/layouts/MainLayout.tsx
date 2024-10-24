import { ReactNode } from "react";
import { SideNavigation } from "../components/navigation/SideNavigation";
import { app } from "../config/app";
import { TopNavigation } from "../components/navigation/TopNavigation";
import { Outlet } from "react-router-dom";
import logo from "../assets/uzaro.png";
import logo1 from "../assets/uzaro1.png";

type TNavigation = {
  key: string;
  name: string;
  path?: string | null | undefined;
  type: string;
  submenu?: TNavigation[] | null | undefined;
  icon: ReactNode;
};

const MainLayout = () => {
  return (
    <div className="flex">
      <SideNavigation
        groupBehavior="multiple"
        className="gap-10 bg-[#0f77be] text-white"
      >
        <SideNavigationContent />
      </SideNavigation>

      <div className="flex flex-col min-h-screen flex-1">
        {/* <TopNavigation /> */}
        {/* Temp remove the top nav to make it little bit nicer*/}

        <div className="flex flex-col p-5 bg-[#fafafa] min-h-[calc(100%-4rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const SideNavigationContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="py-4 self-center">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <div className="flex flex-col items-center h-full mt-1">
          {" "}
          {app.navigation.map((navItem) => handleNavigation({ navItem }))}
        </div>
      </div>
    </>
  );
};

const handleNavigation = ({
  navItem,
  iteration = 1,
}: {
  navItem: TNavigation;
  iteration?: number;
}) => {
  if (navItem.type == "link" && navItem.path) {
    return (
      <SideNavigation.NavLink
        key={navItem.key}
        to={navItem.path}
        className={`${iteration > 1 ? "px-14" : ""}`}
      >
        {navItem.icon}
        {navItem.name}
      </SideNavigation.NavLink>
    );
  }

  if (navItem.type == "group" && navItem.submenu) {
    return (
      <SideNavigation.Group key={navItem.key}>
        <SideNavigation.GroupTrigger group={navItem.key}>
          {navItem.icon}
          {navItem.name}
        </SideNavigation.GroupTrigger>
        <SideNavigation.GroupContent group={navItem.key}>
          {navItem.submenu.map((navItem) =>
            handleNavigation({ navItem, iteration: iteration + 1 })
          )}
        </SideNavigation.GroupContent>
      </SideNavigation.Group>
    );
  }
};

export { MainLayout };
