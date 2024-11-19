// THIS FORM MODAL IS NOT YET OK.. 
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
    class: z.string().min(2, {message:"Class is required!"}),
    capacity: z.number()
        .min(1, { message: 'Number of student must be at least 1.' })
        .max(60, { message: 'Number of student must not be greater than 60.' }),
    grade: z.number()
        .min(1, { message: 'Grade must be at least 1.' })
        .max(5, { message: 'Grade must not be greater than 5.' }),
    supervisor: z.string().min(2, {message:"Supervisor is required!"}),
});

type Inputs = z.infer<typeof schema>;

// CREATE & UPDATE of menu teacher form
const SubjectForm = ({
    type,
    data
    }: {
        type:"create" | "update";
        data?:any;
    }) => {

        // HANDLER
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<Inputs>({
            resolver: zodResolver(schema),
          });
        
        //ONSUBMIT
        const onSubmit = handleSubmit(data=>{
            console.log(data);
        });
    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Add Class</h1>
            <span className="text-xs text-lightGray font-medium ">Class Information</span>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="Class" name="class" defaultValue={data?.class} register={register} error={errors.class} />
                    <InputField label="Capacity" name="capacity" defaultValue={data?.capacity} register={register} error={errors.capacity} />
                    <InputField label="Grade" name="grade" defaultValue={data?.grade} register={register} error={errors.grade} />
                </div>
            <span className="text-xs text-lightGray font-medium ">Supervisor</span>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="Name" name="supervisor" defaultValue={data?.supervisor} register={register} error={errors.supervisor} />
                </div>
            <button className="bg-createButton text-secondary p-2 rounded-md">
                {type==="create" ? "Create" : "Update"}
            </button>
        </form>
    )
}
export default SubjectForm;