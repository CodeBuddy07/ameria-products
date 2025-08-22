"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UserTable from "./user-table"
import Pagination from "./pagination"
import baseURL from "@/app/utils/baseURL"

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

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("")

  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page: number) => {
    try {
      const res = await baseURL.get(`/user?page=${page}&limit=10`, {
        withCredentials: true,
      });

      const { user, totalPage } = res.data.data;

      const transformedUsers: User[] = user.map((u: any) => ({
        id: u.id,
        userName: u.userName,
        joinDate: new Date(u.createdAt).toLocaleDateString(),
        status: "Active",
        company: {
          name: "N/A",
          email: u.email,
          leader: "N/A",
          subscriptionPlan: "Free",
        },
      }));

      setUsers(transformedUsers);
      setTotalPages(totalPage);
    } catch (err: any) {
      console.error("Fetch users error:", err.message);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);


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
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <UserTable users={users} />

      {/* Pagination */}
      <div className="p-6 border-t border-gray-200">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
