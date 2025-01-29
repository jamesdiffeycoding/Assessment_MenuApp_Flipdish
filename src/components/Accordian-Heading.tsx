import { TMenuSectionItem } from "../types";
import Image from "next/image";

export default function AccordianHeading({
  handleSectionClick,
  section,
  visibleSections,
}: {
  handleSectionClick: (categoryId: string, collapseOthers: boolean) => void;
  section: TMenuSectionItem;
  visibleSections: string[];
}) {
  return (
    <div
      className={`cursor-pointer flex justify-between rounded-md text-slate-400 hover:text-black hover:bg-slate-100 `}
      onClick={() =>
        handleSectionClick(section.MenuSectionId.toString(), false)
      }
    >
      <div
        className={`text-2xl py-2 my-4 pl-2  ${
          visibleSections.includes(section.MenuSectionId.toString()) &&
          "font-semibold text-black"
        }`}
      >
        {section.Name.toUpperCase()}
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`custom-arrow-transition bg-green-100 w-[30px] h-[30px] rounded-full flex items-center justify-center text-center ${
            visibleSections.includes(section.MenuSectionId.toString())
              ? "rotate-180 bg-blue-400"
              : ""
          }`}
        >
          <Image
            src={"./arrow.svg"}
            alt="up-arrow"
            width={20}
            height={20}
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-center"
          />
        </div>
      </div>
    </div>
  );
}
