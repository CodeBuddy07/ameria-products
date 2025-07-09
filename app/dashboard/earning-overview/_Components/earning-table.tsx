"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type SubscriptionType = "Pro Plan" | "Premium Plan" | "Basic Plan"

type Subscription = {
  serial: string
  name: string
  Expiredate: string
  subscriptionType: SubscriptionType
  purchaseDate: string
}

interface SubscriptionTableProps {
  subscriptions: Subscription[]
}

export default function EarningTable({ subscriptions }: SubscriptionTableProps) {
  const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionType | "All">("All")

  const filteredSubscriptions = selectedSubscription === "All"
    ? subscriptions
    : subscriptions.filter(sub => sub.subscriptionType === selectedSubscription)

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[#08692C] text-white">
          <tr>
            <th className="px-6 py-2 text-left text-sm font-medium">Serial</th>
            <th className="px-6 py-2 text-left text-sm font-medium">User Name</th>
            <th className="px-6 py-2 text-left text-sm font-medium">Expire Date</th>
            <th className="px-6 py-2 text-left text-sm font-medium">
              <div className="flex items-center space-x-2">
                <span>Subscription Type</span>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 rounded-full hover:bg-transparent hover:text-green-500 cursor-pointer"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-40">
                    <DropdownMenuItem onClick={() => setSelectedSubscription("All")}>
                      All Plans
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSubscription("Basic Plan")}>
                      Basic Plan
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSubscription("Pro Plan")}>
                      Pro Plan
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSubscription("Premium Plan")}>
                      Premium Plan
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Selected filter label */}
                {selectedSubscription !== "All" && (
                  <span className="text-xs px-2 py-0.5 bg-white text-green-700 rounded-full">
                    {selectedSubscription}
                  </span>
                )}
              </div>
            </th>
            <th className="px-6 py-2 text-left text-sm font-medium">Purchase Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredSubscriptions.length > 0 ? (
            filteredSubscriptions.map((subs, index) => (
              <tr key={`${subs.serial}-${index}`} className="bg-white">
                <td className="px-6 py-4 text-sm text-gray-900 font-bold">{subs.serial}</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-bold">{subs.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{subs.Expiredate}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{subs.subscriptionType}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{subs.purchaseDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-sm text-muted-foreground">
                No subscriptions found for &quot;{selectedSubscription}&quot;
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
