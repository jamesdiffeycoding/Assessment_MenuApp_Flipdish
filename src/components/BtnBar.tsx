"use client";

export default function BtnBar({ MenuSections, handleSectionClick }) {
  return (
    <section className="flex custom-sticky-sections z-10 w-full justify-center bg-white">
      {MenuSections.map((section) => (
        <button
          key={section.MenuSectionId}
          className="rounded-full text-slate-500 border border-slate-400 p-2 m-1 text-xl hover:bg-slate-100"
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
