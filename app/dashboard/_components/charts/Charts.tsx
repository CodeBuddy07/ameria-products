import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const earningsData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 95 },
    { month: "May", value: 60 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 70 },
    { month: "Sep", value: 55 },
    { month: "Oct", value: 50 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 58 },
];

const Charts = () => {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold ml-16">Earning Overview</h3>
                    <Select defaultValue="2025">
                        <SelectTrigger className="w-[100px] h-8">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={earningsData}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                        <Tooltip />
                        <Area

                            dataKey="value"
                            stroke="#16a34a"
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            strokeWidth={2.5}
                            activeDot={{ r: 5 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>

            </CardContent>
        </Card>
    )
}

export default Charts