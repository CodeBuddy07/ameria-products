"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash } from "lucide-react"

import { useState } from "react"
import AddSubscription from "./_Components/AddSubscription"
import EditPrice from "./_Components/EditPrice"
import RemoveNotification from "./_Components/RemovePopup"
import { toast } from "sonner"

const Page = () => {
    const [editOpen, setEditOpen] = useState(false);
    const [removeOpen, setRemoveOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        cycle: "",
        description: "",
        price: "35.00",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving Subscription:", form);
        toast.success("Subscription saved successfully");
    };

    const handlePriceUpdate = (newPrice: string) => {
        setForm((prev) => ({ ...prev, price: newPrice }));
        toast.success("Price updated successfully");
    };

    const handleRemove = () => {
        console.log("Subscription removed");
        setRemoveOpen(false);
        toast.success("Subscription removed successfully");
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold my-8">Subscription Earning</h1>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <AddSubscription form={form} handleChange={handleChange} handleSave={handleSave} />
                    </div>
                </div>
            </div>

            <div className="max-w-md w-full">
                <Card className="shadow-sm rounded-2xl">
                    <CardContent className="">
                        <h2 className="text-lg font-semibold mb-2">Subscription Plan</h2>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-black">$35.00</span>
                            <span className="text-muted-foreground text-sm"> /month</span>
                        </div>

                        <div className="flex w-full gap-3">
                            <Button
                                onClick={() => setEditOpen(true)}
                                className="flex-1 bg-[#E9FFE9] text-green-900 hover:bg-green-200"
                            >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Price
                            </Button>
                            <Button
                                onClick={() => setRemoveOpen(true)}
                                className="flex-1 bg-[#FEF2F2] text-red-900 hover:bg-red-200"
                            >
                                <Trash className="w-4 h-4 mr-2" />
                                Remove Plan
                            </Button>

                        </div>
                    </CardContent>
                </Card>
            </div>

            <EditPrice
                open={editOpen}
                onOpenChange={setEditOpen}
                currentPrice={form.price}
                onSave={handlePriceUpdate}
            />

            <RemoveNotification
                open={removeOpen}
                onOpenChange={setRemoveOpen}
                onConfirm={handleRemove}
                title="Subscription"
            />

        </div>
    )
}

export default Page