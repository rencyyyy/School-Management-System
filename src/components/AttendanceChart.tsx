"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 75,
    absent: 25,
  },
  {
    name: 'Tue',
    present: 40,
    absent: 50,
  },
  {
    name: 'Wed',
    present: 45,
    absent: 55,
  },
  {
    name: 'Thu',
    present: 21,
    absent: 79,
  },
  {
    name: 'Fri',
    present: 60,
    absent: 40,
  },
  {
    name: 'Sat',
    present: 50,
    absent: 50,
  }
];

const AttendanceChart = () => {
    return(
        <div className="bg-whiteBg rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ced4da" />
                    <XAxis dataKey="name" tick={{fill: "#463f3a"}} tickLine={false}/>
                    <YAxis />
                    <Tooltip contentStyle={{borderRadius: "10px", borderColor: "pureBlack"}}/>
                    <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
                    <Bar dataKey="present" fill="#ffd500" activeBar={<Rectangle fill="#ffd500" />} legendType='rect'/>
                    <Bar dataKey="absent" fill="#463f3a" activeBar={<Rectangle fill="#000000" />} legendType='rect' />
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    )
}

export default AttendanceChart