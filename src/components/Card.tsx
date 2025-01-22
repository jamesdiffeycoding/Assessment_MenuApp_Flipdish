import type { TMenuItem } from "../types";

export default function Card({ item }: { item: TMenuItem }) {
  return (
    <section
      className={`w-[250px] border border-gray-300 p-4 hover:bg-yellow-100 grid grid-cols-[70%_30%] text-xs`}
    >
      {/* LHS */}
      <section className="flex flex-col justify-between pr-2">
        <div>
          <h3 className="text-lg font-bold">{item.Name}</h3>
          <p>{item.Description}</p>
          {item.MenuItemOptionSets.map((optionSet) => (
            <div key={optionSet.MenuItemOptionSetId} className="option-set">
              <br />
              <p className="pl-5 text-green-500 font-semibold italic">
                Options:
              </p>
              {optionSet.MenuItemOptionSetItems.map((option) => (
                <div key={option.MenuItemOptionSetItemId} className="flex">
                  <label>
                    <input
                      type="radio"
                      name={`item-${item.MenuItemId}`}
                      value={option.Name}
                    />

                    <span className="ml-2">
                      {option.Name} (+${option.Price})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm">${item.Price}</p>
      </section>
      {/* RHS */}
      <section className="flex flex-col justify-between relative">
        <img
          src={item.ImageUrl}
          alt={item.Name}
          width={400}
          height={400}
          className="aspect-square object-cover"
        />
        <section className="flex-1 flex text-center justify-end items-center">
          <button className="bg-green-400 rounded-full p-4 m-2 hover:bg-green-500">
            <p className="text-xl font-bold absolute -translate-x-[0.42rem] -translate-y-[0.95rem]">
              +
            </p>
          </button>
        </section>
      </section>
    </section>
  );
}
