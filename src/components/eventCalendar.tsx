"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
    {
        id: 1,
        title: "Bayad P175.00",
        time: "12:00 PM - 2:00 PM",
        description: "Isang magandang araw na naman na na-hold up ng P175.00 sa Sintang paaralan",
    },
    {
        id: 2,
        title: "Blood Donation",
        time: "8:00 AM - 5:00 PM",
        description: "Pagbabahagi ng dugo mula sa mga puyat, mababang level na dugo at may HIV",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 8:00 PM",
        description: "Ice cream yummy chicken adebayor bruno march april may june",
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="bg-whiteBg p-4 rounded-lg">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event=>(
                    <div className="p-5 rounded-md border-2 border-rightBg border-t-4 odd:border-t-lightGray even:border-t-primary" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">{event.title}</h1>
                            <span className="text-xs text-darkGray">{event.time}</span>
                        </div>
                        <p className="mt-2 text-dark text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventCalendar