import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-whiteBg py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                        <Image src="/Photos/me.jpg" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">
                            <h1 className="text-xl font-semibold">Rency C. Delos Santos</h1>
                                <FormModal table="professor" type="update" data={{
                                        id: 1,
                                        username: "rency020",
                                        email:  "rencycelestino@gmail.com",
                                        password: "password",
                                        firstName: "Rency",
                                        lastName: "Delos Santos",
                                        phone: "09813082969",
                                        address: "605 Ipag Curaming St, Mariveles, Bataan",
                                        bloodType: "AB",
                                        birthday: "2002-11-20",
                                        sex: "male",
                                        img: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    }}
                                />
                            </div>
                            <p className="text-sm text-darkGray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam aliquid laudantium dolore repellat est iure.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>AB</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>rencycelestino020@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>09813082969</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARD */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARDS1 */}
                        <div className="bg-whiteBg p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/profAttendance.png" alt="" width={30} height={30} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">99%</h1>
                                <span className="text-sm text-dark">Attendance</span>
                            </div>
                        </div>
                        {/* CARDS2 */}
                        <div className="bg-whiteBg p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/profBranches.png" alt="" width={30} height={30} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-dark">Branches</span>
                            </div>
                        </div>
                        {/* CARDS3 */}
                        <div className="bg-whiteBg p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/profLessons.png" alt="" width={30} height={30} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">8</h1>
                                <span className="text-sm text-dark">Lessons</span>
                            </div>
                        </div>
                        {/* CARDS4 */}
                        <div className="bg-whiteBg p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/profClasses.png" alt="" width={30} height={30} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">8</h1>
                                <span className="text-sm text-dark">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-whiteBg rounded-md p-4 h-[800px]">
                    <h1 className="text-md font-semibold">Professor&apos;s Schedule</h1>
                    <BigCalendar/>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-whiteBg p-4 roumded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-dark">
                        <Link className="p-3 rounded-md text-whiteBg bg-darkOrange" href="/">Professor&apos;s Classes</Link>
                        <Link className="p-3 rounded-md text-whiteBg bg-naturalOrange" href="/">Professor&apos;s Students</Link> 
                        <Link className="p-3 rounded-md text-whiteBg bg-yellowOrange" href="/">Professor&apos;s Lessons</Link> 
                        <Link className="p-3 rounded-md text-whiteBg bg-darkOrange" href="/">Professor&apos;s Exams</Link> 
                        <Link className="p-3 rounded-md text-whiteBg bg-naturalOrange" href="/">Professor&apos;s Assignments</Link> 
                    </div>
                </div>
                {/* TO BE DEBUG */}
                <Performance/> 
                <Announcements/>
            </div>
        </div>
    )
}
export default SingleTeacherPage