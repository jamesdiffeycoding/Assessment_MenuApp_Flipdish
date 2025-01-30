"use client";
import axios from "axios";
import MenuItem from "@/components/MenuItem";
import {
  TMenuItem,
  TMenuItemOptionSet,
  TMenuSectionHeading,
} from "../../types";
import { useEffect, useState } from "react";

const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setSections(data.MenuSections);
    });
  }, []);

  function itemShouldDisplayAlone(menuItem: TMenuItem) {
    // if an item has any option sets where isMasterOptionSet is true, it should not be displayed alone
    return !menuItem.MenuItemOptionSets.some(
      (optionSet: TMenuItemOptionSet) => optionSet.IsMasterOptionSet === true
    );
  }

  return (
    <div className="m-4 flex justify-center">
      <div className="w-[90%] max-w-[1000px]">
        <div className="flex flex-col gap-8 mt-4 justify-center">
          {!sections.length && <p>Loading...</p>}

          {sections.map((section: TMenuSectionHeading) => (
            <div key={section.MenuSectionId}>
              <h2 className="text-xl pb-2 font-bold">{section.Name}</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {section.MenuItems.map((menuItem: TMenuItem) => {
                  if (itemShouldDisplayAlone(menuItem)) {
                    return (
                      <MenuItem
                        name={menuItem.Name}
                        description={menuItem.Description}
                        option={null}
                        price={menuItem.Price}
                        imageUrl={menuItem.ImageUrl}
                        key={menuItem.MenuItemId}
                      />
                    );
                  } else {
                    return menuItem.MenuItemOptionSets.map((optionSet) => {
                      if (optionSet.IsMasterOptionSet) {
                        return optionSet.MenuItemOptionSetItems.map(
                          (optionSetItem) => (
                            <MenuItem
                              name={menuItem.Name}
                              description={menuItem.Description}
                              option={optionSetItem.Name}
                              price={optionSetItem.Price}
                              imageUrl={menuItem.ImageUrl}
                              key={optionSetItem.MenuItemOptionSetItemId}
                            />
                          )
                        );
                      }
                      return null;
                    });
                  }
                })}
              </div>
              {section.MenuItems.length === 0 && (
                <p>We&apos;re whipping something up - come back soon!</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
