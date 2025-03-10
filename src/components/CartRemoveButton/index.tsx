import { Trash2 } from "lucide-react";

export const CartRemoveButton = () => {
  return (
    <button className="grid place-content-center size-9 p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors">
      <Trash2 size={20} />
    </button>
  );
};
