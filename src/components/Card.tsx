import type { TMenuItem } from "../types";
import { useState } from "react";

export default function Card({ item }: { item: TMenuItem }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section
      onClick={() => setShowMenu(!showMenu)}
      className={`w-full border border-gray-300 hover:bg-slate-100 grid grid-cols-2 text-xs cursor-pointer rounded-xl m-2`}
    >
      {/* LHS */}
      <section className="flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">{item.Name}</h3>
          <p>{item.Description}</p>
          {item.MenuItemOptionSets.map((optionSet) => (
            <div key={optionSet.MenuItemOptionSetId} className="option-set">
              <br />
              <p className="pl-5 text-green-500 font-semibold italic">
                {optionSet.Name}
              </p>
              {optionSet.MenuItemOptionSetItems.map((option) => (
                <div
                  key={option.Name}
                  className="flex flex-col items-center justify-between h-[3rem] pl-5"
                >
                  <label for={`item-${item.MenuItemId}`}>
                    <span className="font-light pl-2">
                      {option.Name} (+${option.Price})
                    </span>
                  </label>
                  <input
                    type="radio"
                    name={`item-${item.MenuItemId}`}
                    value={option.Name}
                    className="w-5 h-5 border-2 border-gray-400 rounded-sm appearance-none checked:bg-black focus:outline-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-xs">${item.Price}</p>
      </section>
      {/* RHS */}
      <section className="flex flex-col justify-between relative ">
        <img
          src={item.ImageUrl ? item.ImageUrl : "./placeholder.jpg"}
          alt={item.Name}
          className="w-full h-full aspect-square object-cover rounded-l-s rounded-r-xl"
        />
        {/* <section className="flex-1 flex text-center justify-end items-center">
          <button className="bg-green-400 rounded-full p-4 m-2 hover:bg-green-500">
            <p className="text-xl font-bold absolute -translate-x-[0.42rem] -translate-y-[0.95rem]">
              +
            </p>
          </button>
        </section> */}
      </section>
    </section>
  );
}
