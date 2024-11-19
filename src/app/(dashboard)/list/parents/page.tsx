import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, parentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"



type Parent = {
    id:number;
    name:string;
    email?:string;
    students:string[];
    phone:string;
    address:string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Name(s)",
        accessor: "students",
        className:"hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className:"hidden lg:table-cell"
    },
    {
        header: "Address",
        accessor: "address",
        className:"hidden lg:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

const ParentListPage = () => {

    const renderRow = (item:Parent) => (
        <tr key={item.id} className="border-b border-lightGray odd:bg-whiteBg even:bg-evenColor text-sm hover:bg-hoverColor">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-dark">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden lg:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    {/* <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-viewButton">
                            <Image src="/edit.png" alt="" width={16} height={16} />
                        </button>
                    </Link> */}
                    
                        {role === "admin" && (
                            // <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-deleteButton">
                            //     <Image src="/delete.png" alt="" width={16} height={16} />
                            // </button>
                            <>
                                <FormModal table="parent" type="update" data={item}/>
                                <FormModal table="parent" type="delete" id={item.id}/>
                            </>
                        )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-whiteBg p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP SECTION */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch/>
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary">
                            <Image src="/filter.png" alt="" width={15} height={15} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary">
                            <Image src="/sort.png" alt="" width={15} height={15} />
                        </button>
                        {role === "admin" && (
                            // <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary">
                            //     <Image src="/plus.png" alt="" width={15} height={15} />
                            // </button>
                            <FormModal table="parent" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            
            {/* LISTS */}
            <Table columns={columns} renderRow={renderRow} data={parentsData}/>
            {/* PAGINATION */}
                <Pagination/>
        </div>
    )
}
export default ParentListPage