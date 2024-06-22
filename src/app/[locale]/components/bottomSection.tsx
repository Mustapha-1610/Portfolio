import { useTranslations } from "next-intl";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function BottomSection() {
  const t = useTranslations("Index");

  return (
    <>
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
    </>
  );
}
