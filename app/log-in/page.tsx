"use client"
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from '@/public/logo.png';
import { toast } from "sonner";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;

        console.log("Email:", email);
        console.log("Password:", password);

        toast.success("Signed in successfully");
        window.location.href = "/dashboard";
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Military image */}
            <div className="hidden lg:flex lg:w-1/2">
                <Image
                    src="/log-in.jpg"
                    alt="Military helicopter and personnel"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                />
            </div>

            {/* Right side - Login form */}
            <div className="flex w-full items-start justify-center bg-gray-50 lg:w-1/2">
                <div className="w-full max-w-md space-y-8 py-8 mt-[10%]">
                    <div className="flex flex-col items-start space-y-4">
                        <div>
                            <Image src={logo} alt="Logo" width={128} height={85} />
                        </div>
                        <div className="text-start">
                            <h1 className="text-2xl font-semibold text-gray-900">Welcome to Redline Track</h1>
                            <p className="mt-2 text-sm font-semibold text-gray-600">Sign in to your account</p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 data-[state=checked]:bg-gradient-to-b from-[#4F9F4F] to-[#08692C] data-[state=checked]:border-[#08692C]"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-600">
                                    Remember Password
                                </label>
                            </div>
                            <a href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                Forgot Password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="h-12 w-full rounded-full bg-gradient-to-b from-[#4F9F4F] to-[#08692C]  text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
