import Image from "next/image"

const Navbar = () => {

    return(
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-dark px-2">
                <Image src="/searchNav.png" alt="" width={18} height={18}/>
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
            </div>
            {/* ICONS & USER */}
            <div className="flex items-center gap-6 ml-auto">
                <div className="bg-primary rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/messageNav.png" alt="" width={18} height={18} />
                </div>
                <div className="bg-primary rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcementNav.png" alt="" width={23} height={23} />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-darkRed text-secondary rounded-full text-xs">69</div>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">Rency Celestino</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image src="/profile.png" alt="" width={36} height={36} className="rounded-full"/>
            </div>
        </div>
    )
}

export default Navbar