"use client";
import * as React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe, CiLinkedin } from "react-icons/ci";
import fileSaver from "file-saver";
import { IProject } from "@/app/projectModel";
import LanguageChanger from "./languageChanger";
import { useTranslations } from "next-intl";
type ProjectCardProps = {
  project: IProject;
};

function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center p-3 w-[460px] h-[630px] text-black bg-white rounded-xl shadow-xl hover:scale-105 transition-transform">
      <div className="w-full h-[340px] overflow-hidden">
        <img
          loading="lazy"
          src={project.coverPicture}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center p-2 mt-1 flex-grow">
        <div className="text-2xl font-extrabold text-center text-black">
          {project.title}
        </div>
        <div className="text-base text-center mt-2">
          {" "}
          {t(`projectDescription.${project.title}`)}
        </div>
        <div className="text-sm text-gray-600 mt-2">{t("technologies")}:</div>
        <div className="flex flex-wrap gap-2 justify-center items-start pt-2 pb-1.5 text-xs whitespace-nowrap max-md:max-w-full">
          {project.tags &&
            project.tags.map((tag, index) => <div key={index}>{tag}</div>)}
        </div>
        <div className="flex gap-2 mt-4">
          <a
            href={project.links?.website || "#"}
            className={`flex items-center px-3 py-1 rounded-full ${
              project.links?.website
                ? "bg-blue-600 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            target={project.links?.website ? "_blank" : ""}
            rel="noopener noreferrer"
            onClick={(e) => !project.links?.website && e.preventDefault()}
          >
            <CiGlobe size={20} className="mr-2" color="white" />
            {t("website")}
          </a>
          <a
            href={project.links?.github || "#"}
            className={`flex items-center px-3 py-1 rounded-full ${
              project.links?.github
                ? "bg-black text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            target={project.links?.github ? "_blank" : ""}
            rel="noopener noreferrer"
            onClick={(e) => !project.links?.github && e.preventDefault()}
          >
            <FaGithub size={20} className="mr-2" />
            GitHub
          </a>
          <a
            href={project.links?.youtube || "#"}
            className={`flex items-center px-3 py-1 rounded-full ${
              project.links?.youtube
                ? "bg-red-600 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            target={project.links?.youtube ? "_blank" : ""}
            rel="noopener noreferrer"
            onClick={(e) => !project.links?.youtube && e.preventDefault()}
          >
            <FaYoutube size={20} className="mr-2" />
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

interface Props {
  projectsData: IProject[];
}
export default function MyComponent({ projectsData }: Props) {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center px-16 pt-5 bg-white text-black max-md:px-5">
      <div className="flex flex-col px-5 pb-6 w-full bg-white max-w-[1520px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <a
            href="./Mustapha_Talbi_CV.pdf"
            download
            className="custom-button bg-white text-black border border-black rounded-xl px-4 py-2 transition duration-300 hover:bg-black hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("downloadCv")}
          </a>
          <div className="flex gap-3 justify-between items-start pl-3">
            <div className="text-lg tracking-wide leading-7 text-black">
              {t("about")}
            </div>
            <div className="text-lg tracking-wide leading-7 text-black">
              {t("projects")}
            </div>
            <div className="text-lg tracking-wide leading-7 text-black">
              <LanguageChanger />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center py-1 fill-black">
                <div className="shrink-0 bg-orange-600 rounded-full h-[26px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
          <div className="mt-28 mb-56 max-w-full w-[1930px] max-md:my-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch px-2 my-auto text-center max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl text-black leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                    {t("introduction.hello")}
                    <span className="text-orange-600">Mustapha Talbi</span>{" "}
                    <br /> {t("introduction.im")}
                    <br /> {t("introduction.based")}
                  </div>
                  <a
                    href="https://github.com/Mustapha-1610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center self-center px-6 py-3.5 mt-10 text-lg leading-7 text-white cursor-pointer bg-black rounded-xl border-2  border-solid max-md:px-5 max-md:mt-10 flex flex-rows"
                  >
                    <FaGithub size={31} className="mr-2" /> Github
                  </a>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-8/12 max-md:ml-0 max-md:w-full mb-2">
                <img
                  loading="lazy"
                  src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/image%20(2)-Photoroom.png?alt=media&token=430ef9cf-c2d7-4804-8ffa-34e88851e2d4"
                  alt="Jane Doe"
                  className="w-full aspect-square max-w-[1000px] max-md:mt-2.5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center gap-5 max-md:gap-0">
            <div className="flex flex-col items-center w-full text-center">
              <div className="text-4xl font-bold tracking-wider text-black leading-[54px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center">
                  <div> {t("aboutme")}</div>
                  <div className="shrink-0 w-24 h-1 bg-black mt-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[1000px] gap-5  text-lg leading-8 text-black max-md:max-w-[full] mt-5">
              <div className="max-md:max-w-full text-center">
                {t("aboutmeParagraph.first")}
              </div>
              <div className="max-md:mr-2.5 max-md:max-w-full text-center">
                {t("aboutmeParagraph.second")}
              </div>
              <div className="max-md:max-w-full text-center">
                {t("aboutmeParagraph.third")} {t("aboutmeParagraph.forth")}
              </div>
            </div>
          </div>
        </div>

        <div className="self-center text-4xl font-bold tracking-wider text-black leading-[54px] mt-[300px] max-md:mt-10">
          Projects
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

        <div className="flex justify-center items-center px-16  mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center mb-64 max-w-full mt-[503px] w-[620px] max-md:my-10">
            <p className="justify-center px-6 py-3.5 text-4xl font-bold leading-7 text-center text-black bg-white max-md:px-5">
              {t("sayHello")}
            </p>
            <div className="shrink-0 self-stretch mt-8 h-px border-t border-black border-solid max-md:max-w-full" />
            <div className="flex gap-5 justify-center mt-2 max-w-full w-[304px]">
              <a
                href="https://www.linkedin.com/in/mustaphatalbi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-4xl hover:text-blue-600 transition-colors"
              >
                <CiLinkedin size={100} />
              </a>
              <a
                href="https://github.com/Mustapha-1610"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-4xl hover:text-gray-600 transition-colors"
              >
                <FaGithub size={100} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
