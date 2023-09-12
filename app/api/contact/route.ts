import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { name, phone, email, address } = data;
    const saveData = await prisma.contact.create({
      data: {
        name: name,
        phone: phone,
        email: email,
        address: address,
      },
    });
    return new NextResponse(JSON.stringify(saveData), { status: 201 });
  } catch (error) {
    return new NextResponse("Fill the form correctly", { status: 400 });
  }
};

export const GET = async () => {
  try {
    const getContacts = await prisma.contact.findMany();
    return new NextResponse(JSON.stringify(getContacts), { status: 200 });
  } catch (error) {
    return new NextResponse("Can't fetch any data", { status: 400 });
  }
};
