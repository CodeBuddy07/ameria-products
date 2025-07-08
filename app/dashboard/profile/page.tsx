/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Pencil } from "lucide-react"
import defProfileImage from '@/public/profile-picture.jpg';
import rightArrow from '@/public/right-arrow.png';
import { toast } from "sonner"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("profile")
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [profile, setProfile] = useState({
        username: "Justyna Bronowicka",
        email: "Camille@gmail.com",
        contact: "+99007007007",
    })
    const [profileImage, setProfileImage] = useState<string | typeof defProfileImage>(defProfileImage);

    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: "",
    })

    const handleProfileChange = (e: any) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handlePasswordChange = (e: any) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value })
    }

    const handleProfileImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSaveProfile = async () => {
        try {
            const formData = new FormData();
            formData.append("username", profile.username);
            formData.append("email", profile.email);
            formData.append("contact", profile.contact);
            if (selectedFile) {
                formData.append("profileImage", selectedFile);
            }

            toast.success("Profile updated successfully!");
            //    api request to save profile data

            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error("Something went wrong.");
            console.error(err);
        }
    };



    return (
        <div className="px-4 py-8">
            <div className="flex items-center space-x-3 mb-6">
                <span className="bg-gray-200 p-2 rounded-full">
                    <Image src={rightArrow} alt="Back" width={24} height={24} className="cursor-pointer" onClick={() => window.history.back()} />
                </span>
                <h1 className="text-xl font-semibold">Profile</h1>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex space-x-4">
                    <div className="flex flex-col items-center text-center space-y-2 relative">
                        {/* Profile Image */}
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>

                        {/* Pencil Icon with File Input */}
                        <label
                            htmlFor="profileImageUpload"
                            className="absolute bottom-3 right-[calc(50%-48px)] z-20 bg-[#007400] p-1 rounded-full shadow-md cursor-pointer"
                        >
                            <Pencil className="text-white w-4 h-4" />
                            <input
                                id="profileImageUpload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleProfileImageChange}
                            />
                        </label>
                    </div>


                    <div className="space-y-2">
                        <h2 className="text-start text-[26px] font-semibold">Akash Sharif</h2>
                        <p className="text-start text-xl">Admin</p>
                    </div>
                </div>

                <div className="flex space-x-4 border-b border-gray-200 mt-4 mb-6">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`pb-2 font-medium cursor-pointer ${activeTab === "profile"
                            ? "border-b-2 border-black"
                            : "text-gray-500"
                            }`}
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`pb-2 font-medium cursor-pointer ${activeTab === "password"
                            ? "border-b-2 border-black"
                            : "text-gray-500"
                            }`}
                    >
                        Change Password
                    </button>
                </div>
            </div>

            {activeTab === "profile" && (
                <div className="mt-6 space-y-4">
                    <h3 className="text-center text-2xl font-medium">Edit Your Profile</h3>
                    <div className="space-y-2">
                        <Label>User Name</Label>
                        <Input
                            value={profile.username}
                            onChange={handleProfileChange}
                            name="username"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                            value={profile.email}
                            onChange={handleProfileChange}
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Contact No</Label>
                        <Input
                            value={profile.contact}
                            onChange={handleProfileChange}
                            name="contact"
                            placeholder="+1234567890"
                        />
                    </div>
                    <Button
                        className="w-full bg-green-800 hover:bg-green-700 text-white"
                        onClick={handleSaveProfile}
                    >
                        Save Changes
                    </Button>

                </div>
            )}

            {activeTab === "password" && (
                <div className="mt-6 space-y-4">
                    <h3 className="text-center text-2xl font-medium">Change Password</h3>
                    <div className="space-y-2">
                        <Label>Current Password</Label>
                        <Input
                            type="password"
                            name="current"
                            value={passwords.current}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>New Password</Label>
                        <Input
                            type="password"
                            name="new"
                            value={passwords.new}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Confirm Password</Label>
                        <Input
                            type="password"
                            name="confirm"
                            value={passwords.confirm}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <Button className="w-full bg-green-800 hover:bg-green-700 text-white">
                        Save Changes
                    </Button>
                </div>
            )}
        </div>
    )
}
