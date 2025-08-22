"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import AddSubscription from "./_Components/AddSubscription"
import EditPrice from "./_Components/EditPrice"
import RemoveNotification from "./_Components/RemovePopup"
import { toast } from "sonner"
import baseURL from "@/app/utils/baseURL"

type Subscription = {
  id: string
  subscriptionName: string
  billingCycle: string
  shortDescription: string[]
  price: number
  createdAt: string
  updatedAt: string
}

const Page = () => {
  const [editOpen, setEditOpen] = useState(false)
  const [removeOpen, setRemoveOpen] = useState(false)
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [selectedSub, setSelectedSub] = useState<Subscription | null>(null)

  const fetchSubscriptions = async () => {
    try {
      const res = await baseURL.get("/subscription")
      setSubscriptions(res.data.data.subscription)
    } catch (err) {
      console.error("Error fetching subscriptions", err)
      toast.error("Failed to load subscriptions")
    }
  }

  const handlePriceUpdate = async (newPrice: string) => {
    if (!selectedSub) return

    try {
      // PUT or PATCH API call for update
      await baseURL.put(`/subscription/${selectedSub.id}`, {
        price: parseFloat(newPrice),
      })

      // Update local state
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === selectedSub.id ? { ...sub, price: parseFloat(newPrice) } : sub
        )
      )

      toast.success("Price updated successfully")
      setEditOpen(false)
    } catch (err) {
      console.error("Error updating price", err)
      toast.error("Failed to update price")
    }
  }

  const handleRemove = async () => {
    if (!selectedSub) return

    try {
      // DELETE API call
      await baseURL.delete(`/subscription/${selectedSub.id}`)

      // Update local state
      setSubscriptions((prev) => prev.filter((sub) => sub.id !== selectedSub.id))

      toast.success("Subscription removed successfully")
      setRemoveOpen(false)
    } catch (err) {
      console.error("Error removing subscription", err)
      toast.error("Failed to remove subscription")
    }
  }

  useEffect(() => {
    fetchSubscriptions()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold my-8">Subscription Plans</h1>
        {/* <AddSubscription form={form} handleChange={handleChange} handleSave={handleSave} /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((sub) => (
          <Card key={sub.id} className="shadow-sm rounded-2xl">
            <CardContent>
              <h2 className="text-lg font-semibold mb-2">{sub.subscriptionName}</h2>

              <ul className="text-sm text-gray-500 mb-2 list-disc pl-4">
                {sub.shortDescription.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              <div className="mb-6">
                <span className="text-4xl font-bold text-black">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(sub.price)}
                </span>
                <span className="text-muted-foreground text-sm">
                  {" "}
                  /{sub.billingCycle}
                </span>
              </div>

              <div className="flex w-full gap-3">
                <Button
                  onClick={() => {
                    setSelectedSub(sub)
                    setEditOpen(true)
                  }}
                  className="flex-1 bg-[#E9FFE9] text-green-900 hover:bg-green-200"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Price
                </Button>

                {/* <Button
                  onClick={() => {
                    setSelectedSub(sub)
                    setRemoveOpen(true)
                  }}
                  className="flex-1 bg-[#FEF2F2] text-red-900 hover:bg-red-200"
                >
                  <Trash className="w-4 h-4 mr-2" />
                  Remove
                </Button> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Modal */}
      <EditPrice
        open={editOpen}
        onOpenChange={setEditOpen}
        currentPrice={selectedSub?.price.toString() ?? ""}
        onSave={handlePriceUpdate}
      />

      {/* Remove Modal */}
      <RemoveNotification
        open={removeOpen}
        onOpenChange={setRemoveOpen}
        onConfirm={handleRemove}
        title={selectedSub?.subscriptionName || "Subscription"}
      />
    </div>
  )
}

export default Page