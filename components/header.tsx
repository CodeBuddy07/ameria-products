"use client"

import { useState } from "react"
import { Search, Settings, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import profilePicture from '@/public/profile-picture.jpg'

export function Header() {
    const [searchQuery, setSearchQuery] = useState("")
    const [notificationCount] = useState(3)

    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 bg-[#F5F5F5] border-gray-200 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <div className="relative cursor-pointer">
                        <Link href="/dashboard/notifications">
                            <Button variant="ghost" className=" bg-[#F5F5F5] rounded-full">
                                <div className="h-8 w-6 ">
                                    <Image
                                        src="/notification.png"
                                        alt="notification Logo"
                                        width={100}
                                        height={100}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                {notificationCount > 0 && (
                                    <Badge
                                        variant="destructive"
                                        className="bg-[#0094F71A] text-blue-500 -right-3 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
                                    >
                                        {notificationCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                    </div>

                    {/* User menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-10 w-10 rounded-full overflow-hidden cursor-pointer p-0">
                                <Image
                                    src={profilePicture}
                                    alt="Profile Picture"
                                    width={100}
                                    height={100}
                                    className="object-cover w-full h-full"
                                />
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuItem>
                                <Link href="/dashboard/profile" className="flex items-center">
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/dashboard/settings" className="flex items-center">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
