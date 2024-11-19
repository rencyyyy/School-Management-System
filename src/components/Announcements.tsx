 const Announcements = () => {
    return(
        <div className="bg-whiteBg p-4 rounded-lg">
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-semibold">Announcements</h1>
                <span className="text-xs text-pureBlack">View all</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-rightBg rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor</h2>
                        <span className="text-sm text-darkGray bg-whiteBg rounded-md px-1 py-1">2024-10-29</span>
                    </div>
                    <p className="text-sm text-dark mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisis.</p>
                </div>
                <div className="bg-rightBg rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor</h2>
                        <span className="text-sm text-darkGray bg-whiteBg rounded-md px-1 py-1">2024-10-29</span>
                    </div>
                    <p className="text-sm text-dark mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid dolor voluptatem nostrum inventore praesentium voluptas.</p>
                </div>
                <div className="bg-rightBg rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor</h2>
                        <span className="text-sm text-darkGray bg-whiteBg rounded-md px-1 py-1">2024-10-29</span>
                    </div>
                    <p className="text-sm text-dark mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            
        </div>
    )
}
export default Announcements