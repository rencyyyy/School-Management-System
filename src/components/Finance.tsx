"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'June',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'July',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 490,
    expense: 1300,
  },
  {
    name: 'Sep',
    income: 4490,
    expense: 2300,
  },
  {
    name: 'Oct',
    income: 2490,
    expense: 3300,
  },
  {
    name: 'Nov',
    income: 3290,
    expense: 1300,
  },
  {
    name: 'Dec',
    income: 6490,
    expense: 2300,
  },
];

const FinanceChart = () => {
    return (
        <div className="bg-whiteBg rounded-lg p-4 h-full w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#ced4da"/>
                <XAxis dataKey="name" tick={{fill: "#463f3a"}} tickMargin={10} />
                <YAxis tickMargin={20}/>
                <Tooltip contentStyle={{borderRadius: "10px", borderColor: "pureBlack"}}/>
                <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
                <Area type="monotone" dataKey="income" stroke="#710000" fill="#710000" fillOpacity={0.1} activeDot={{ r: 8 }} strokeWidth={2} legendType='line' />
                <Area type="monotone" dataKey="expense" stroke="#463f3a" fill="#463f3a" fillOpacity={0.1} strokeWidth={2}legendType='line' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default FinanceChart