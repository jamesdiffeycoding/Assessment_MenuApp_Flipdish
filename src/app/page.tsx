"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { TMenuSection, TMenu } from "../../types";

const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [sections, setSections] = useState<TMenuSection>([]); // type values set to optional

  useEffect(() => {
    axios.get<TMenu>(url).then(({ data }) => {
      setSections(data.MenuSections);
    });
  }, []);

  return (
    <div className="m-4 flex justify-center">
      <div className="w-[90%] max-w-[1000px]">
        <div className="flex flex-col gap-8 mt-4 justify-center">
          {!sections.length && <p> Loading... </p>}

          {sections?.map((category) => (
            <div key={category.MenuSectionId}>
              <h2
                key={category.MenuSectionId}
                className="text-xl pb-2 font-bold"
              >
                {category.Name}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category?.MenuItems.map((item) => (
                  <div
                    key={item.MenuItemId}
                    className="flex justify-between border p-2 border-slate-100 rounded-lg hover:border hover:bg-slate-100 cursor-pointer"
                  >
                    <div className="flex flex-col justify-between">
                      <p className="font-bold">{item.Name}</p>
                      <p className="text-sm">{item.Description}</p>
                      <p className="text-sm">£{item.Price}</p>
                    </div>
                    <img
                      src={item.ImageUrl || "/placeholder.jpg"}
                      alt={`Image of ${item.Name}`}
                      className="h-[100px] min-w-[100px] max-w-[100px] object-cover rounded-lg hover:w-[200px] hover:max-w-[200px] transition-all "
                    />
                  </div>
                ))}
              </div>
              {category.MenuItems.length === 0 && (
                <p>We're whipping something up - come back soon!</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
