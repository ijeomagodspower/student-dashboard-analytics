import { createContext, useContext } from "react";

interface sidebarContextType {
  sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const sidebarContext = createContext<sidebarContextType | undefined>(
  undefined,
);

export function useSideBarContext() {
  const sidebarcon = useContext(sidebarContext);

  if (sidebarcon === undefined) {
    throw new Error("sidebarContext must be in UsesidebarContext");
  }

  return sidebarcon;
}
