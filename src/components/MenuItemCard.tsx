export default function MenuItemCard({
  description,
  imageUrl,
  name,
  option,
  price,
}: {
  description: string | null;
  imageUrl: string | null;
  name: string;
  option: string | null;
  price: number | null;
}) {
  const maxDescriptionLength = 90;

  function gbpPrice(price: number) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  }

  return (
    <section className="h-[120px] flex justify-between border border-slate-200 rounded-lg hover:border hover:bg-slate-100 cursor-pointer">
      <div className="w-[70%] flex flex-col justify-between p-[12px]">
        <div>
          <h3 className="font-bold">
            {name} <span>{option && `| ${option}`}</span>
          </h3>
          <p className="text-[11px]">
            {description?.slice(0, maxDescriptionLength)}
            {description && description.length > maxDescriptionLength && "..."}
          </p>
        </div>
        <p className="text-sm">{gbpPrice(price)}</p>
      </div>
      <img
        src={imageUrl || "/placeholder.jpg"}
        alt={`Image of ${name} ${option && `| ${option}`}`}
        className="object-cover w-[20%] hover:w-[30%] transition-all duration-[800ms] rounded-r-lg"
      />
    </section>
  );
}
