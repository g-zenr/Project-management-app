import { ReactNode } from "react";
import { SideNavigation } from "../components/navigation/SideNavigation";
import { app } from "../config/app";
import { TopNavigation } from "../components/navigation/TopNavigation";
import { Outlet } from "react-router-dom";

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
        className="gap-10 bg-[#3f5992] text-white"
      >
        <SideNavigationContent />
      </SideNavigation>

      <div className="flex flex-col min-h-screen flex-1">
        <TopNavigation />

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
      <div className="flex py-4 self-center">
        <h2>LOGO HERE</h2>
      </div>

      <div className="flex flex-col items-center h-full">
        {app.navigation.map((navItem) => handleNavigation({ navItem }))}
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
