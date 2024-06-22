import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  {
    code: "en",
    name: "English",
    flag: "https://flagsireland.com/cdn/shop/products/UnitedStatesofAmerica_USA_Flag.png?v=1679327841",
  },
  {
    code: "du",
    name: "Deutsch",
    flag: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
  },
  {
    code: "fr",
    name: "Français",
    flag: "https://static-00.iconduck.com/assets.00/flag-france-emoji-2048x1279-3lsn6si4.png",
  },
  {
    code: "ar",
    name: "العربية",
    flag: "https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg",
  },
];

interface Props {
  className?: string;
}

export default function LanguageChanger({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLocaleInfo =
    locales.find((locale) => locale.code === currentLocale) || locales[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center  text-lg tracking-wide  text-black rounded-xl transition duration-200 ${className}`}
      >
        <img
          src={currentLocaleInfo.flag}
          alt={currentLocaleInfo.name}
          className="w-5 h-5 mr-2"
        />
        {currentLocaleInfo.name}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => handleLanguageChange(locale.code)}
                className="flex items-center w-full px-4 py-2 text-lg tracking-wide leading-7 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <img
                  src={locale.flag}
                  alt={locale.name}
                  className="w-5 h-5 mr-2"
                />
                <span>{locale.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
