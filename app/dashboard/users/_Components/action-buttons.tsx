"use client"

import { Eye, Ban, LockOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DetailsModal } from "./detail-modal"
import { ConfirmationAlert } from "./confirmation-alert"

interface ActionButtonsProps {
  status: "Active" | "Blocked"
  companyDetails: {
    name: string
    email: string
    leader: string
    subscriptionPlan: string
  }
}

export default function ActionButtons({ status, companyDetails }: ActionButtonsProps) {
  const handleEdit = () => {
    console.log("Edit user")
  }

  const handleDelete = () => {
    console.log("Delete user")
  }

  const handleBlock = () => {
    console.log("Block/Unblock user")
  }

  return (
    <div className="flex items-center space-x-2">

      <DetailsModal title="Company Details" companyDetails={companyDetails}>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
          onClick={handleEdit}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </DetailsModal>



      <ConfirmationAlert
        title="Are you sure!"
        description="You want to Delete?"
        cancelText="Cancel"
        confirmText="Delete"
        onConfirm={() => console.log('User Deleted')}
        variant="destructive"
      >
        {status === "Active" ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <Ban className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBlock}
            className="h-8 w-8 p-0 text-green-500 hover:text-green-600 hover:bg-green-50"
          >
            <LockOpen className="h-4 w-4" />
          </Button>
        )}
      </ConfirmationAlert>
    </div>
  )
}
