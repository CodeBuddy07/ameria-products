"use client"

import { useState } from "react"
import { Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UserTable from "./user-table"
import Pagination from "./pagination"


const mockUsers = [
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Blocked" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  },
  {
    id: "#5089",
    name: "Jane Cooper",
    joinDate: "May 10, 2025",
    status: "Active" as const,
    company: {
      name: "Acme Inc.",
      email: "jane@acme.com",
      leader: "John Smith",
      subscriptionPlan: "Pro"
    }
  }
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 12

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
  const startIndex = (currentPage - 1) * usersPerPage
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage)

  return (
    <div className="bg-white rounded-lg ">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">User List</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 w-64"
              />
              <Button
                size="sm"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-9 w-10 p-0 bg-[#08692C] hover:bg-green-700 rounded-s-none"
              >
                <Settings2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <UserTable users={currentUsers} />

      {/* Pagination */}
      <div className="p-6 border-t border-gray-200">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}
