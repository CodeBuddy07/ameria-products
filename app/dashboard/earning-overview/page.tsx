"use client"
import { Card, CardContent } from "@/components/ui/card"
import { LineChartIcon, Settings2 } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from "../users/_Components/pagination";
import EarningTable from "./_Components/earning-table";
import { useState } from "react";
import { DateFilter } from "./_Components/date-filter";

const mockSubscription = [
    { serial: "#01", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#02", name: "Rohim Uddin", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#03", name: "Korim Uddin", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#04", name: "Solim Ullah", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#04", name: "Rohomot Ali", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#04", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Premium Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#05", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#06", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Basic Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#07", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#08", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#09", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#10", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#11", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#12", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#13", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#14", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#15", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#16", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#17", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#18", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#19", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#20", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
    { serial: "#21", name: "Jane Cooper", Expiredate: "May 10, 2025", subscriptionType: "Pro Plan" as const, purchaseDate: "May 10, 2025" },
];

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 12;

    const filteredSubscription = mockSubscription.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.serial.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const totalPages = Math.ceil(filteredSubscription.length / usersPerPage)
    const startIndex = (currentPage - 1) * usersPerPage
    const currentUsers = filteredSubscription.slice(startIndex, startIndex + usersPerPage)

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Total Earning</p>
                            <h2 className="text-[28px] font-bold">40,685</h2>
                        </div>

                        <div className="flex items-center justify-center bg-[#4ad99259] p-2 rounded-3xl h-[60px] w-[60px]">
                            <LineChartIcon className="text-[#4AD991]" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold my-8">Subscription Earning</h1>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-4 pr-10 w-64"
                        />
                        <DateFilter >
                            <Button
                                size="sm"
                                className="absolute right-0 top-1/2 -translate-y-1/2 h-9 w-10 p-0 bg-[#08692C] hover:bg-green-700 rounded-s-none"
                            >
                                <Settings2 className="h-4 w-4" />
                            </Button>
                        </DateFilter>
                    </div>
                </div>
            </div>
            <EarningTable subscriptions={currentUsers} />
            <div className="p-6 border-t border-gray-200">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}

export default Page;