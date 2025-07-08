"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import otpImage from '@/public/log-in.jpg';
import logo from '@/public/logo.png';

export default function OTPPage() {
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [timer, setTimer] = useState(59)
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    inputRefs.current[0]?.focus();
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return
    const updated = [...otp]
    updated[index] = value
    setOtp(updated)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src={otpImage}
          alt="Military Background"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      {/* Right OTP Section */}
      <div className="w-full md:w-1/2 flex items-start justify-center p-6 mt-[5%]">
        <div className="max-w-md w-full space-y-6">
          {/* Logo */}
          <div className="">
            <Image src={logo} alt="Logo" width={128} height={85} />
          </div>

          {/* Titles */}
          <div className="text-start space-y-1">
            <h1 className="text-2xl font-semibold">OTP Verification</h1>
            <p className="text-[16px] font-semibold">Enter 6-digit Code</p>
            <p className="text-sm text-muted-foreground">
              We have sent code to <span className="font-semibold">tan@mail.com</span> to verify your registration
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="flex gap-2">
            {otp.map((digit, idx) => (
              <Input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                ref={(el) => { inputRefs.current[idx] = el!; }}
                className="h-[70px] w-[70px] text-center text-2xl font-semibold border-2 rounded-md focus-visible:ring-2"
              />
            ))}
          </div>

          {/* Countdown */}
          <p className="text-start text-sm text-muted-foreground">Resend code <span className="font-semibold">{timer}s</span> </p>

          {/* Verify Button */}
          <Button
            type="submit"
            className="cursor-pointer h-12 w-full rounded-full bg-gradient-to-b from-[#4F9F4F] to-[#08692C]  text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => {
              const isComplete = otp.every((digit) => digit !== "");
              if (isComplete) {
                window.location.href = "/recover-password";
              }
            }}
          >
           Verify
          </Button>
        </div>
      </div>
    </div>
  )
}
