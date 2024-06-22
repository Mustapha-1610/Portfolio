import projectModel from "@/app/projectModel";
import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const { title, description, coverPicture, links, tags } =
      await request.json();
    if (!title || !description || !coverPicture || !links) {
      return NextResponse.json({ error: "Missing Inputs" });
    }
    const newProject = await projectModel.create({
      title,
      description,
      coverPicture,
      links,
      tags,
    });
    if (newProject) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Project Not Created!" });
  } catch (err) {
    return NextResponse.json({ error: "Server Error" });
  }
}
