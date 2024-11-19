import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, examsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"



type Exam = {
    id:number;
    subject:string;
    class:number;
    professor:number;
    date:string;
}

const columns = [
    {
        header: "Subject",
        accessor: "name"
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Professor",
        accessor: "professor",
        className:"hidden md:table-cell"
    },
    {
        header: "Date",
        accessor: "date",
        className:"hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

const ExamListPage = () => {

    const renderRow = (item:Exam) => (
        <tr key={item.id} className="border-b border-lightGray odd:bg-whiteBg even:bg-evenColor text-sm hover:bg-hoverColor">
            <td className="flex items-center gap-4 p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.professor}</td>
            <td className="hidden md:table-cell">{item.date}</td>
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
                                <FormModal table="exam" type="update" data={item}  />
                                <FormModal table="exam" type="delete" id={item.id}  />
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
                <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
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
                            <FormModal table="exam" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            
            {/* LISTS */}
            <Table columns={columns} renderRow={renderRow} data={examsData}/>
            {/* PAGINATION */}
                <Pagination/>
        </div>
    )
}
export default ExamListPage