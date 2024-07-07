import projectModel from "@/app/projectModel";
import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import geoip from "geoip-lite";
import platformModel from "@/app/platformModel";

export async function GET() {
  try {
    await connect();
    await platformModel.findOneAndUpdate({}, { $inc: { visitors: 1 } });
    const projects = await projectModel.find();
    if (projects.length == 0) {
      return NextResponse.json({ error: "No Projects!" });
    }
    console.log("hello");
    return NextResponse.json(projects);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server Error" });
  }
}
