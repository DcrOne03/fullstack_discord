"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

import{
    Dialog,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle

} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Server name is required."
    }),
    imageUrl:z.string().min(1,{
        message:"Server image is required"
    })
  });
export const InitialModal=()=>{
    // const [isMounted,setIsMounted]= useState(false);
    
    // useEffect(()=>{
    //     setIsMounted(true);
    // },[]);
    const form=useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageUrl:"",
        }
    });

    const isLoading=form.formState.isSubmitting;

    const onSubmit=async(values:z.infer<typeof formSchema>)=>{
        console.log(values)
    }
    // if(!isMounted){
    //     return null;
    // }
    return(
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a personality with a name and an image. You can always change in later
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-8 px-6">
                        <div className="flex items-center justify-center text-center">
                            TODO: Image Url Upload
                        </div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary">
                                        Server name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field} // Gán các thuộc tính của `field` để kết nối input với react-hook-form
                                            disabled={isLoading}
                                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                            placeholder="Enter"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <DialogFooter className="bg-gray-100 px-6 py-4">
                        <Button disabled={isLoading} variant="primary">
                            Create
                        </Button>
                    </DialogFooter>
                </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}