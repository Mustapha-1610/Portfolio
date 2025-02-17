"use client";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: any;
  isDarkMode: boolean;
  isLeft: boolean;
}

export default function ProjectCard({
  project,
  isDarkMode,
  isLeft,
}: ProjectCardProps) {
  const t = useTranslations("Index");

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex flex-col max-w-[500px] p-6 rounded-lg shadow-lg border-2 border-orange-600 ${
        isLeft ? "md:mr-12" : "md:ml-12"
      }`}
    >
      {/* Connector Line */}
      <div
        className={`max-md:hidden absolute top-1/2 w-8 h-[2px] bg-black ${
          !isLeft ? "right-full mr-2" : "left-full ml-2"
        }`}
      ></div>

      {/* Card Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold max-md:text-xl text-center">
          {project.title}
        </h3>

        {/* Technologies Used */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {project.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className="px-3 py-1 text-xs  bg-gray-100 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>

        <p className="mt-4 text-lg max-md:text-sm">
          {t(`projectDescription.${project.title}`)}
        </p>

        {/* Project Links */}
        <div className="mt-4 flex justify-center gap-4">
          {project.links?.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition duration-300"
            >
              <CiGlobe size={24} />
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
          )}
          {project.links?.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
