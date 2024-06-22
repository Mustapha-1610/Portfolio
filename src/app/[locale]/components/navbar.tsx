import { useTranslations } from "next-intl";
import LanguageChanger from "./languageChanger";

export default function Navbar() {
  const t = useTranslations("Index");

  return (
    <>
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
            <LanguageChanger />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center py-1 fill-black">
              <div className="shrink-0 bg-orange-600 rounded-full h-[26px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
