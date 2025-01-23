"use client";

import Card from "@/components/Card";
import Image from "next/image";
import { TMenuSection, TMenuSectionItem } from "@/types";

import AccordianHeading from "./Accordian-Heading";

export default function Accordian({
  handleSectionClick,
  MenuSections,
  visibleSections,
}: {
  handleSectionClick: (categoryId: string, collapseOthers: boolean) => void;
  MenuSections: TMenuSection;
  visibleSections: string[];
}) {
  return (
    <div className="w-full p-2 min-h-[70vh]">
      {/* SECTION HEADING---------------------------- */}

      {MenuSections.map((section: TMenuSectionItem) => (
        <div key={section.MenuSectionId} id={section.MenuSectionId.toString()}>
          <AccordianHeading
            section={section}
            visibleSections={visibleSections}
            handleSectionClick={handleSectionClick}
          />

          {/* CARDS---------------------------- */}

          <div className="custom-card-grid gap-4 pb-4 flex-wrap">
            {visibleSections.includes(section.MenuSectionId.toString()) && (
              <>
                {section.MenuItems.map((item) => (
                  <Card item={item} key={item.MenuItemId} />
                ))}
                {section.MenuItems.length === 0 && <div>Coming soon...!</div>}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
