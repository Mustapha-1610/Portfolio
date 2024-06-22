import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
        <div className="mt-28 mb-56 max-w-full w-[1930px] max-md:my-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-2 my-auto text-center max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl text-black leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                  {t("introduction.hello")}
                  <span className="text-orange-600">
                    Mustapha Talbi
                  </span> <br /> {t("introduction.im")}
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
    </>
  );
}
