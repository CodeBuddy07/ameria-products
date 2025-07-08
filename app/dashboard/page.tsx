"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CrownIcon, LineChartIcon, EyeIcon, UsersRoundIcon, Ban, LockOpen } from "lucide-react"
import Charts from "./_components/charts/Charts"
import { useEffect, useState } from "react"
import { DetailsPopUp } from "./_components/actions/detailspopup"
import { ConfirmationAlert } from "./users/_Components/confirmation-alert"
import { toast } from "sonner"


const users = [
    {
        id: "#5089",
        name: "Jane Cooper",
        date: "May 10, 2025",
        status: "Active",
        email: "jane@example.com",
        subscriptionPlan: "Pro",
    },
    {
        id: "#5090",
        name: "Robert Fox",
        date: "June 2, 2025",
        status: "Blocked",
        email: "robert.fox@example.com",
        subscriptionPlan: "Basic",
    },
    {
        id: "#5091",
        name: "Emily Stone",
        date: "April 18, 2025",
        status: "Active",
        email: "emily.stone@example.com",
        subscriptionPlan: "Enterprise",
    },
    {
        id: "#5092",
        name: "Daniel Lee",
        date: "March 27, 2025",
        status: "Active",
        email: "daniel.lee@example.com",
        subscriptionPlan: "Pro",
    },
    {
        id: "#5093",
        name: "Sophia Turner",
        date: "July 1, 2025",
        status: "Blocked",
        email: "sophia.turner@example.com",

        subscriptionPlan: "Free",
    },
];

export default function DashboardPage() {
    const [filter, setFilter] = useState("all")
    const [filteredUsers, setFilteredUsers] = useState(users)

    const handleDelete = () => {
        console.log("Delete user")
        toast.success("User blocked successfully!")
    }

    const handleBlock = () => {
        console.log("Block/Unblock user")
        toast.success("User unblocked successfully!")
    }

    useEffect(() => {
        if (filter === "all") {
            setFilteredUsers(users)
        } else {
            setFilteredUsers(users.filter(user => user.status.toLowerCase() === filter))
        }
    }, [filter]);

    return (
        <main className="p-4 md:p-6 space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Total User</p>
                            <h2 className="text-[28px] font-bold">68</h2>
                        </div>

                        <div className="flex items-center justify-center bg-[#8280ff65] p-2 rounded-3xl h-[60px] w-[60px]">
                            <UsersRoundIcon className="text-[#8280FF]" />
                        </div>
                    </CardContent>

                </Card>
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
                <Card>

                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Active Subscription</p>
                            <h2 className="text-[28px] font-bold">40</h2>
                        </div>

                        <div className=" flex items-center justify-center bg-[#ffeed8f3] p-2 rounded-3xl h-[60px] w-[60px]">
                            <CrownIcon className="text-orange-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Chart */}
            <Charts />

            {/* User Table */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">User List</h3>
                        <Select defaultValue="all" onValueChange={(value) => setFilter(value)}>
                            <SelectTrigger className="w-[100px] h-8">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="blocked">Blocked</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-green-900 text-white">
                                <TableRow>
                                    <TableHead className="text-white">User ID</TableHead>
                                    <TableHead className="text-white">User Name</TableHead>
                                    <TableHead className="text-white">Join Date</TableHead>
                                    <TableHead className="text-white">Status</TableHead>
                                    <TableHead className="text-white text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredUsers.map((user, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.date}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="outline"
                                                className={`px-2 ${user.status === "Active"
                                                    ? "text-green-600 border-green-600"
                                                    : "text-red-600 border-red-600"}`}
                                            >
                                                {user.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center space-x-2">
                                            <DetailsPopUp
                                                title="User Details"
                                                userDetails={user}
                                            >
                                                <Button size="icon" variant="ghost">
                                                    <EyeIcon className="w-4 h-4 text-green-600" />
                                                </Button>
                                            </DetailsPopUp>

                                            <ConfirmationAlert
                                                title="Are you sure?"
                                                description={
                                                    user.status === "Active"
                                                        ? "You want to block this user?"
                                                        : "You want to unblock this user?"
                                                }
                                                cancelText="Cancel"
                                                confirmText={user.status === "Active" ? "Block User" : "Unblock User"}
                                                onConfirm={user.status === "Active" ? handleDelete : handleBlock}
                                                variant={user.status === "Active" ? "destructive" : "default"}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className={`
      h-8 w-8 p-0
      ${user.status === "Active"
                                                            ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                                                            : "text-green-500 hover:text-green-600 hover:bg-green-50"
                                                        }
    `}
                                                >
                                                    {user.status === "Active" ? (
                                                        <Ban className="h-4 w-4" />
                                                    ) : (
                                                        <LockOpen className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            </ConfirmationAlert>

                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}

