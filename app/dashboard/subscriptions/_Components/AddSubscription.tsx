/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import React from "react"


interface AddSubscriptionProps {
  form: {
    name: string;
    cycle: string;
    description: string;
    price: string | number;
    [key: string]: any;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

const AddSubscription: React.FC<AddSubscriptionProps> = ({
  form,
  handleChange,
  handleSave,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#08692C] hover:bg-green-700 text-white">
          <Plus className="h-4 w-4 mr-2" /> Create Subscription Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[919px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4 space-y-1">
          <div className="space-y-2">
            <Label htmlFor="name">Subscription Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cycle">Billing Cycle</Label>
            <Input
              id="cycle"
              name="cycle"
              value={form.cycle}
              onChange={handleChange}
              placeholder="e.g. Monthly"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Input
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write short description"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              type="number"
            />
          </div>
        </div>

        <Button onClick={handleSave} className="w-full bg-[#08692C] hover:bg-green-700 text-white">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddSubscription;