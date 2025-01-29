export default function MenuItem({
  name,
  description,
  price,
  imageUrl,
}: {
  name: string;
  description: string | null;
  price: number | null;
  imageUrl: string | null;
}) {
  return (
    <div className="flex justify-between border p-2 border-slate-100 rounded-lg hover:border hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-col justify-between">
        <p className="font-bold">{name}</p>
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
