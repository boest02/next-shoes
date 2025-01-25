'use server'

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function addShoe(formData: FormData) {
    const newShoe = await prisma.shoe.create({
        data: {
            type: formData.get("type") as string,
            foot: formData.get("foot") as string,
            brand: formData.get("brand") as string,
            image: formData.get("image") as string,
            size: Number(formData.get("size")),
            name: formData.get("name") as string
        }
    });
    revalidatePath("/add");
}