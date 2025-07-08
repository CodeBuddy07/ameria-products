interface StatusBadgeProps {
  status: "Active" | "Blocked"
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === "Active" ? " text-green-500" : " text-red-500"
      }`}
    >
      {status}
    </span>
  )
}
