// THIS FORM MODAL IS NOT YET OK.. 
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
    subject: z.string().min(2, {message:"Subject is required!"}),
    professor: z.string().min(2, {message:"Professor is required!"}),
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
            <h1 className="text-xl font-semibold">Add Subject</h1>
            <span className="text-xs text-lightGray font-medium ">Subject Information</span>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="Subject" name="username" defaultValue={data?.username} register={register} error={errors.subject} />
                </div>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="Name" name="professor" defaultValue={data?.professor} register={register} error={errors.professor} />
                </div>
            <button className="bg-createButton text-secondary p-2 rounded-md">
                {type==="create" ? "Create" : "Update"}
            </button>
        </form>
    )
}
export default SubjectForm;