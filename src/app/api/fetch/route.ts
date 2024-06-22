import projectModel from "@/app/projectModel";
import { connect } from "@/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("anything");
    await connect();
    const projects = await projectModel.find();
    if (projects.length == 0) {
      return NextResponse.json({ error: "No Projects!" });
    }
    return NextResponse.json(projects);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server Error" });
  }
}
