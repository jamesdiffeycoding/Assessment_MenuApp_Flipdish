"use client";
import axios from "axios";
import MenuItemCard from "@/components/MenuItemCard";
import { Menu, MenuItem, MenuSectionHeading } from "../types";
import { useEffect, useState } from "react";

const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [sections, setSections] = useState<MenuSectionHeading[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get<Menu>(url);
      setSections(response.data.MenuSections);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  function itemHasNoOptionsToShow(menuItem: MenuItem) {
    // if an item has any option sets where isMasterOptionSet is true, it should not be displayed alone
    return !menuItem.MenuItemOptionSets.some(
      (optionSet) => optionSet.IsMasterOptionSet === true
    );
  }

  return (
    <div className="m-4 flex justify-center">
      <div className="w-[90%] max-w-[1000px]">
        <div className="flex flex-col gap-8 mt-4 justify-center">
          {loading && (
            <img
              src="/loading-spinner.svg"
              alt="Image of loading spinner"
              className="w-full h-6 animate-[spin_3s_linear_infinite]"
            />
          )}
          {errorMessage && (
            <p className="text-red-500">
              {errorMessage}. Don&apos;t worry, it should be fixed before long.
            </p>
          )}

          {sections.map((section) => (
            <div key={section.MenuSectionId}>
              <h2 className="text-xl pb-2 font-bold">{section.Name}</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {section.MenuItems.map((menuItem) => {
                  if (itemHasNoOptionsToShow(menuItem)) {
                    return (
                      <MenuItemCard
                        description={menuItem.Description}
                        imageUrl={menuItem.ImageUrl}
                        key={menuItem.MenuItemId}
                        name={menuItem.Name}
                        option={null}
                        price={menuItem.Price}
                      />
                    );
                  } else {
                    return menuItem.MenuItemOptionSets.map((optionSet) => {
                      if (optionSet.IsMasterOptionSet) {
                        return optionSet.MenuItemOptionSetItems.map(
                          (optionSetItem) => (
                            <MenuItemCard
                              description={menuItem.Description}
                              imageUrl={menuItem.ImageUrl}
                              key={optionSetItem.MenuItemOptionSetItemId}
                              name={menuItem.Name}
                              option={optionSetItem.Name}
                              price={optionSetItem.Price}
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
