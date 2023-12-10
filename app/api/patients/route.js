import { NextResponse } from "next/server"
import { patientModel } from "@/model/patient"
import dbConnect from "../../../config/db"

dbConnect()

export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)
        if (body.name && body.contactDetails && body.medicalHistory) {
            // database
            const product = new patientModel(body)
            await product.save()
            return NextResponse.json({ message: "successfully product created" })
        }

        return NextResponse.json({ message: "All params required, price, title, description" })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}