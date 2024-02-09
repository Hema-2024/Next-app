// import { Young_Serif } from 'next/font/google';
import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from '@prisma/client';
import prisma from "../../../prisma/client";
// const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json("Hi");
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data);
  try {
    const createdEntry = await prisma.dailydetails.create({
      data: {
        name: data.name,
        date: new Date(data.date),
        mrng: data.mrng,
        evng: data.evng,
      },
    });

    console.log("Created Entry:", createdEntry);

    return NextResponse.json({
      createdEntry,
      databaseUrl: process.env.DATABASE_URL,
    });
  } catch (error) {
    console.error("Error creating entry:", error);
  }

  return NextResponse.json(data);
}
