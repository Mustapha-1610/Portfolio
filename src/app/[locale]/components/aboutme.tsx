import { useTranslations } from "next-intl";

export default function Aboutme() {
  const t = useTranslations("Index");

  return (
    <>
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
    </>
  );
}
