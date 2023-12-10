import { NextResponse } from "next/server"
import { doctorModel } from "@/model/doctor"
import dbConnect from "../../../config/db"

dbConnect()

export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)
        if (body.specialization && body.city && body.email && body.fullName && body.password && body.state && body.zip) {
            // database
            const product = new doctorModel(body)
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