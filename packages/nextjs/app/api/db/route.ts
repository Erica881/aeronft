import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const flights = await prisma.flight.findMany();
  return NextResponse.json(flights);
}
