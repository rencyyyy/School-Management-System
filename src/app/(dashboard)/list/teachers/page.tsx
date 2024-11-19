import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"



type Teacher = {
    id:number;
    teacherId:string;
    name:string;
    email?:string;
    photo:string;
    phone:string;
    subjects:string[];
    classes:string[];
    address:string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Proffesor ID",
        accessor: "professorId",
        className:"hidden md:table-cell"
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className:"hidden md:table-cell"
    },
    {
        header: "Classes",
        accessor: "classes",
        className:"hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className:"hidden lg:table-cell"    // for edit
    },
    {
        header: "Address",
        accessor: "address",
        className:"hidden lg:table-cell"    // for edit
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

const TeacherListPage = () => {

    const renderRow = (item:Teacher) => (
        <tr key={item.id} className="border-b border-lightGray odd:bg-whiteBg even:bg-evenColor text-sm hover:bg-hoverColor">
            <td className="flex items-center gap-4 p-4">
                <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"/>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-dark">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{item.classes.join(",")}</td>
            <td className="hidden lg:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-viewButton">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                        {role === "admin" && (
                            // <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-deleteButton">
                            //     <Image src="/delete.png" alt="" width={16} height={16} />
                            // </button>
                            <FormModal table="professor" type="delete" id={item.id}/>
                        )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-whiteBg p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP SECTION */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Professors</h1>
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
                            <FormModal table="professor" type="create" />
                        )}
                    </div>
                </div>
            </div>
            
            {/* LISTS */}
            <Table columns={columns} renderRow={renderRow} data={teachersData}/>
            {/* PAGINATION */}
                <Pagination/>
        </div>
    )
}
export default TeacherListPage