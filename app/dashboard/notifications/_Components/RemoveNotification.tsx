"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import rightArrow from '@/public/right-arrow.png';

const dummyNotifications = {
    Today: [
        "New subscription received from XYZ user.",
        "XYZ user has successfully renewed their subscription plan.",
    ],
    Yesterday: [
        "XYZ user’s Subscription Plan will expire in 3 days.",
        "New subscription received from XYZ user.",
    ],
};

export default function Notifications() {

    const handleRemove = () => {
    };


    return (
        <div className="px-4 py-6">
            <div className="flex items-center space-x-2 mb-6">
                <span className="bg-gray-200 p-2 rounded-full">
                    <Image
                        src={rightArrow}
                        alt="Back"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => window.history.back()}
                    />
                </span>
                <h2 className="text-lg font-semibold">Notifications</h2>
            </div>

            {Object.entries(dummyNotifications).map(([day, messages]) => (
                <div key={day} className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-gray-800">{day}</span>
                        <span className="text-xs bg-[#FFFACC80] text-black rounded-full px-2 py-0.5">
                            {messages.length}
                        </span>
                    </div>

                    <div className="space-y-2 bg-white rounded-md shadow-sm border">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between px-4 py-2 border-b last:border-b-0"
                            >
                                <p className="text-sm text-gray-700">{msg}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-gray-500 whitespace-nowrap">5 min ago</span>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Eye className="h-4 w-4 text-gray-600" />
                                    </Button>
                                    <Button
                                        className="bg-red-600 hover:bg-red-700 text-white h-8 px-3 text-xs"
                                        onClick={() => handleRemove()}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            
        </div>
    );
}
