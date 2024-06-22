"use client";
import * as React from "react";
import { IProject } from "@/app/projectModel";
import { useTranslations } from "next-intl";
import ProjectCard from "./projectCard";
import Navbar from "./navbar";
import HeroSection from "./hero";
import Aboutme from "./aboutme";
import BottomSection from "./bottomSection";

interface Props {
  projectsData: IProject[];
}
export default function MyComponent({ projectsData }: Props) {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center px-16 pt-5 bg-white text-black max-md:px-5">
      <div className="flex flex-col px-5 pb-6 w-full bg-white max-w-[1520px] max-md:max-w-full">
        <Navbar />
        <HeroSection />
        <Aboutme />

        <div className="self-center text-4xl font-bold tracking-wider text-black leading-[54px] mt-[300px] max-md:mt-10">
          {t("projects")}
        </div>
        <div className="flex-wrap justify-center content-center py-4 pl-4 mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <BottomSection />
      </div>
    </div>
  );
}
