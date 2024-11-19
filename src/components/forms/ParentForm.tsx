// THIS FORM MODAL IS NOT YET OK.. 
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
    username: z.
        string()
        .min(3, { message: 'Username must be at least 3 characters.' })
        .max(20, { message: 'Username must not be longer than 20 characters.' }),
    email: z.string().email({message:"Invalid email address!"}),
    password: z.string().min(8, {message:"Password must be at least 8 characters long."}),
    firstName: z.string().min(2, {message:"First name is required!."}),
    lastName: z.string().min(2, {message:"Last name is required!."}),
    phone: z.string().min(2, {message:"Phone number is required!."}),
    address: z.string().min(2, {message:"Address is required!."}),
});

type Inputs = z.infer<typeof schema>;

// CREATE & UPDATE of menu teacher form
const ParentForm = ({
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
            <h1 className="text-xl font-semibold">Add new Parent</h1>
            <span className="text-xs text-lightGray font-medium ">Authentication Information</span>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors.username} />
                    <InputField label="Email address" name="email" type="email" defaultValue={data?.email} register={register} error={errors.email} />
                    <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors.password} />
                </div>
            <span className="text-xs text-lightGray font-medium ">Personal Information</span>
                <div className="flex justify-between flex-wrap gap-4">
                    <InputField label="First name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName} />
                    <InputField label="Last name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName} />
                    <InputField label="Phone No." name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
                    <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} />
                </div>
            <button className="bg-createButton text-secondary p-2 rounded-md">
                {type==="create" ? "Create" : "Update"}
            </button>
        </form>
    )
}
export default ParentForm;