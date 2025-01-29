"use client";
import axios from "axios";
import MenuItem from "@/components/MenuItem";
import { TMenuSection, TMenu } from "../../types";
import { useState, useEffect } from "react";

const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [sections, setSections] = useState<TMenuSection>([]); // Adjusted type to TMenuSection[]

  useEffect(() => {
    axios.get<TMenu>(url).then(({ data }) => {
      setSections(data.MenuSections);
      console.log(data.MenuSections);
    });
  }, []);

  return (
    <div className="m-4 flex justify-center">
      <div className="w-[90%] max-w-[1000px]">
        <div className="flex flex-col gap-8 mt-4 justify-center">
          {!sections.length && <p>Loading...</p>}

          {sections.map((category) => (
            <div key={category.MenuSectionId}>
              <h2
                key={category.MenuSectionId}
                className="text-xl pb-2 font-bold"
              >
                {category.Name}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.MenuItems.map((item) => (
                  <MenuItem
                    name={item.Name}
                    key={item.MenuItemId}
                    description={item.Description}
                    price={item.Price}
                    imageUrl={item.ImageUrl}
                  />
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
