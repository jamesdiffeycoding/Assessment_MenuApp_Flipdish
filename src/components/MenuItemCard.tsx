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
  return (
    <div className="h-[120px] flex justify-between border border-slate-200 rounded-lg hover:border hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-col justify-between p-[12px]">
        <div>
          <p className="font-bold">
            {name} <span>{option && `| ${option}`}</span>
          </p>
          <p className="text-xs">{description}</p>
        </div>
        <p className="text-sm">£{price}</p>
      </div>
      <img
        src={imageUrl || "/placeholder.jpg"}
        alt={`Image of ${name}`}
        className="h-full min-w-[100px] max-w-[100px] hover:in-w-[150px] hover:min-w-[40%] hover:max-w-[40%] object-cover rounded-r-lg transition-all duration-[800ms]"
      />
    </div>
  );
}
