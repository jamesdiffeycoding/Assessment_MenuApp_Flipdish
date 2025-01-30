export default function MenuItem({
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
    <div className="flex justify-between border p-2 border-slate-100 rounded-lg hover:border hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-col justify-between">
        <p className="font-bold">
          {name} <span>{option && `| ${option}`}</span>
        </p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">£{price}</p>
      </div>
      <img
        src={imageUrl || "/placeholder.jpg"}
        alt={`Image of ${name}`}
        className="h-[100px] min-w-[100px] max-w-[100px] object-cover rounded-lg hover:w-[200px] hover:max-w-[200px] transition-all"
      />
    </div>
  );
}
