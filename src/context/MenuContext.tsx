"use client";
import sampleMenu from "../sampleMenu.json";
import { createContext, useContext, useState } from "react";
import { TMenuContext } from "@/types";

const { MenuSections } = sampleMenu;

const MenuContext = createContext<TMenuContext>({
  handleSectionClick: () => {},
  visibleSections: [],
  MenuSections: MenuSections,
});

export function useMenuContext() {
  return useContext(MenuContext);
}

export function MenuWrapper({ children }: { children: React.ReactNode }) {
  const [visibleSections, setVisibleSections] = useState([
    MenuSections[0].MenuSectionId.toString(),
  ]);

  function handleSectionClick(categoryId: string, collapseOthers: boolean) {
    if (collapseOthers) {
      setVisibleSections([categoryId]);
    } else if (visibleSections.includes(categoryId)) {
      setVisibleSections(visibleSections.filter((id) => id !== categoryId));
    } else {
      setVisibleSections([...visibleSections, categoryId]);
    }

    const section = document.getElementById(categoryId);
    if (section?.scrollIntoView) {
      section.scrollIntoView({ behavior: "smooth" });
      window.scrollBy(0, -100);
    }
  }

  return (
    <MenuContext.Provider
      value={{ handleSectionClick, visibleSections, MenuSections }}
    >
      {children}
    </MenuContext.Provider>
  );
}
