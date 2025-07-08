import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const EditPrice = ({
  open,
  onOpenChange,
  currentPrice,
  onSave,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPrice: string;
  onSave: (price: string) => void;
}) => {
  const [price, setPrice] = useState(currentPrice);

  const handleSubmit = () => {
    onSave(price);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Edit Price</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$0.00"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#008236] focus:border-[#008236] sm:text-sm"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-[#008236] text-white rounded-md text-sm"
          >
            Save Price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPrice;
