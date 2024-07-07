import platformModel from "@/app/platformModel";
import { connect } from "@/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  const platform = await platformModel.find({});
  if (platform.length > 0) {
    return NextResponse.json({ success: true });
  }
  await platformModel.create({});
  return NextResponse.json({ success: true });
}
