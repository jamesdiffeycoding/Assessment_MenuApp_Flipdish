export default function OrderBtn() {
  return (
    <div className="custom-order-btn text-base flex justify-end">
      <button
        className="p-2 bg-green-400 rounded-md hover:bg-green-500 text-white"
        onClick={() => alert("Placeholder for order confirmation transition")}
      >
        Confirm order
      </button>
    </div>
  );
}
