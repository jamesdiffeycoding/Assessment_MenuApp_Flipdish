"use client";

import { useMenuContext } from "@/context/MenuContext";

export default function BtnBar() {
  const { MenuSections, handleSectionClick } = useMenuContext();

  return (
    <section className="flex custom-sticky-sections z-10 w-full justify-end bg-white">
      {MenuSections.map((section) => (
        <button
          key={section.MenuSectionId}
          className="rounded-full text-slate-400 border border-slate-400 p-2 m-1 text-xl hover:text-black hover:bg-slate-100"
          onClick={() => {
            handleSectionClick(section.MenuSectionId.toString(), true);
          }}
        >
          {section.Name.toUpperCase()}
        </button>
      ))}
    </section>
  );
}
