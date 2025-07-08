"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, DollarSign, Crown, Settings, Menu, X } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

const navigationItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "users",
        label: "User List",
        href: "/dashboard/users",
        icon: Users,
    },
    {
        id: "earnings",
        label: "Earning Overview",
        href: "/dashboard/earning-overview",
        icon: DollarSign,
    },
    {
        id: "subscriptions",
        label: "Subscription",
        href: "/dashboard/subscriptions",
        icon: Crown,
    },
    {
        id: "settings",
        label: "Setting",
        href: "/dashboard/settings",
        icon: Settings,
    },
]

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const handleLogout = () => {
        toast.success("Logged out successfully!")
        window.location.href = "/log-in";
    }
// todo : button 

    return (
        <>
            {/* Mobile menu button */}
            <Button
                variant="ghost"
                size="sm"
                className="lg:hidden fixed top-4 left-4 z-50"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full",
                    className,
                )}
            >
                <div className="flex flex-col">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-16 px-4 ">
                        <div className="h-16 w-24">
                            <Image
                                src="/logo.png"
                                alt="Redline Track Logo"
                                width={96}
                                height={64}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href
                            const Icon = item.icon

                            return (
                                <Link key={item.id} href={item.href}>
                                    <div
                                        className={cn(
                                            "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                            isActive ? "bg-[#08692C] text-white" : "text-[#5C5C5C] hover:bg-gray-100 hover:text-gray-900",
                                        )}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="pr-4 py-4 border-t border-gray-200">
                        <Button
                            variant="ghost"
                            onClick={handleLogout}
                            className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <div className="h-5 w-5 ">
                                <Image
                                    src="/logout.png"
                                    alt="Logout Logo"
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            )}
        </>
    )
}
