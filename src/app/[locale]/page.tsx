"use client";
import { useTranslations } from "next-intl";
import LanguageChanger from "./components/languageChanger";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "../utils/projects";
import ProjectCard from "./components/projectCard";

export default function MyComponent() {
  const t = useTranslations("Index");

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <a
            href="./MustaphaTalbi_CV.pdf"
            download
            className="custom-button bg-white text-black border border-black rounded-xl px-4 py-2 transition duration-300 hover:bg-black hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("downloadCv")}
          </a>
          <LanguageChanger />
        </div>

        <div className="flex justify-center items-center px-6 max-md:px-5 max-md:max-w-full">
          <div className="max-w-full w-[1930px] max-md:my-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch px-2 my-auto text-center max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-4xl font-bold max-md:text-3xl">
                    {t("introduction.hello")}{" "}
                    <span className="text-orange-600">Mustapha Talbi</span>
                  </h1>
                  <p className="mt-4 text-lg max-md:text-base">
                    {t("introduction.im")}
                  </p>

                  <div className="flex justify-center gap-4 mt-10 max-md:mt-10">
                    <a
                      href="https://github.com/Mustapha-1610"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3.5 text-lg leading-7 text-white bg-black rounded-xl border-2 border-solid max-md:px-4 max-md:py-2.5 max-md:text-base"
                    >
                      <FaGithub
                        size={24}
                        className="mr-2 max-md:w-5 max-md:h-5"
                      />{" "}
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mustaphatalbi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3.5 text-lg leading-7 text-white bg-[#0A66C2] rounded-xl border-2 border-solid max-md:px-4 max-md:py-2.5 max-md:text-base hover:bg-[#004182] transition-colors duration-300"
                    >
                      <FaLinkedin
                        size={24}
                        className="mr-2 max-md:w-5 max-md:h-5"
                      />{" "}
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/images/1.png"
                  alt="Mustapha Talbi"
                  className="w-full aspect-square h-[84%] max-md:mt-2.5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center w-full max-md:max-w-full max-md:mt-10">
          <h2 className="text-4xl font-bold max-md:text-2xl">{t("aboutme")}</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-2" />
          <div className="mt-8 max-w-6xl font-normal mx-auto text-lg leading-relaxed max-md:text-base">
            <p>{t("aboutmeDesc")}</p>
          </div>
        </div>

        <div className="relative mt-36 mb-10 py-4 max-md:max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold max-md:text-2xl">
              {" "}
              {t("projects")}{" "}
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-2" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black transform -translate-x-1/2 max-md:hidden" />

            <div className="relative max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0
                      ? "justify-end md:pr-[50%] md:pl-0"
                      : "justify-start md:pl-[50%] md:pr-0"
                  } mb-16 px-4`}
                >
                  <ProjectCard
                    project={project}
                    isDarkMode={false}
                    isLeft={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
