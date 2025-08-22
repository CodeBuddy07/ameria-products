/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { ChevronDown } from "lucide-react"
import StatusBadge from "./status-badge"
import ActionButtons from "./action-buttons"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type User = {
  id: string
  userName: string
  joinDate: string
  status: "Active" | "Blocked"
  company: {
    name: string
    email: string
    leader: string
    subscriptionPlan: string
  }
}

interface UserTableProps {
  users: User[]
}

export default function UserTable({ users }: UserTableProps) {
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Blocked">("All")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const filteredUsers =
    statusFilter === "All" ? users : users.filter((user) => user.status === statusFilter)

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full">
        <thead className="bg-[#08692C] text-white">
          <tr>
            <th className="px-6 py-2 text-left text-sm font-medium">User ID</th>
            <th className="px-6 py-2 text-left text-sm font-medium">User Name</th>
            <th className="px-6 py-2 text-left text-sm font-medium">Join Date</th>
            <th className="px-6 py-2 text-left text-sm font-medium relative">
              <div className="flex items-center space-x-1">
                <span>Status</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="h-8 w-8 p-0 rounded-full hover:bg-transparent hover:text-green-500 cursor-pointer"
                >
                  <ChevronDown className="h-4 w-4 " />
                </Button>
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-32 bg-white text-black border rounded shadow-md">
                  {["All", "Active", "Blocked"].map((status) => (
                    <div
                      key={status}
                      onClick={() => {
                        setStatusFilter(status as any)
                        setDropdownOpen(false)
                      }}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredUsers.map((user, index) => (
            <tr
              key={`${user?.id}-${index}`}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 text-sm text-gray-900">{user?.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user?.userName}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user?.joinDate}</td>
              <td className="px-6 py-4">
                <StatusBadge status={user?.status} />
              </td>
              <td className="px-6 py-4">
                <ActionButtons companyDetails={user?.company} status={user?.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
