import { IProject } from "@/app/projectModel";
import { useTranslations } from "next-intl";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

type ProjectCardProps = {
  project: IProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center p-3 w-[460px] h-[630px] text-black bg-white rounded-xl shadow-xl hover:scale-105 transition-transform max-md:w-full">
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
