"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Total',
    count: 2368,
    fill: '#fdfffc',
  },
  {
    name: 'Boys',
    count: 1234,
    fill: '#710000',
  },
  {
    name: 'Girls',
    count: 1134,
    fill: '#ffd500',
  }
];

const CountChart = () => {
    return(
        <div className="bg-whiteBg rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                    background
                    dataKey="count"
                    />
                
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-darkRed rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-darkGray">Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-primary rounded-full" />
                    <h1 className="font-bold">1,134</h1>
                    <h2 className="text-xs text-darkGray">Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}
export default CountChart