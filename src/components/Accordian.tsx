"use client";

import Card from "@/components/Card";
import Image from "next/image";
import { TMenuSection, TMenuSectionItem } from "@/types";

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
    <div className="w-full max-w-[1200px] p-2 min-h-[70vh]">
      {MenuSections.map((section: TMenuSectionItem) => (
        <div key={section.MenuSectionId} id={section.MenuSectionId.toString()}>
          <div
            className="cursor-pointer border-t-[1px] border-gray-200 flex justify-between"
            onClick={() =>
              handleSectionClick(section.MenuSectionId.toString(), false)
            }
          >
            <h2 className="text-2xl py-4">{section.Name.toUpperCase()}</h2>
            <Image
              src={"./arrow.svg"}
              alt="up-arrow"
              width={20}
              height={20}
              className={`custom-arrow-transition ${
                visibleSections.includes(section.MenuSectionId.toString())
                  ? "rotate-180"
                  : ""
              }`}
            />
          </div>
          <div className="custom-grid">
            {visibleSections.includes(section.MenuSectionId.toString()) && (
              <>
                {section.MenuItems.map((item) => (
                  <Card item={item} key={item.MenuItemId} />
                ))}
                {section.MenuItems.length === 0 && (
                  <div>There are no items yet in this section</div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
