"use client";
import * as React from "react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
}) => (
  <div className="flex flex-col grow self-stretch p-3 w-full text-black bg-white rounded-xl shadow-lg leading-[150%] max-md:mt-10 max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      alt={`${title} project screenshot`}
      className="max-w-full aspect-square w-[357px]"
    />
    <div className="flex flex-col p-2 mt-1 max-md:max-w-full">
      <div className="text-2xl text-orange-600 max-md:max-w-full">{title}</div>
      <div className="text-lg max-md:max-w-full">{description}</div>
      <div className="flex flex-wrap gap-5 justify-between items-start pt-2 pb-1.5 text-xs whitespace-nowrap max-md:max-w-full">
        {tags.map((tag, index) => (
          <div key={index}>#{tag}</div>
        ))}
      </div>
    </div>
  </div>
);

type SocialIconProps = {
  src: string;
  alt: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="shrink-0 w-12 aspect-square"
  />
);

const MyComponent: React.FC = () => {
  const projects = [
    {
      title: "Project title",
      description: "Project description",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/871fa016d72aa341e7a0836c83951a2e29debbd82f00520f8e3eb5b3002a8bd2?apiKey=db99173e039840438568dfd5fef6299e&",
      tags: ["React", "CSS", "Typescript"],
    },
    {
      title: "Project title",
      description: "Project description",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a0ebe92723efeb8b9f48681d70f41cf1ea7a77c973f29bd7caa72d9e2f496bf3?apiKey=db99173e039840438568dfd5fef6299e&",
      tags: ["React", "CSS", "Typescript", "Typescript"],
    },
    {
      title: "Project title",
      description: "Project description",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49746c5b47fca47e7292889ad1e5ad35967feec03f6627bd77c89ce29fb68abf?apiKey=db99173e039840438568dfd5fef6299e&",
      tags: ["React", "CSS", "Typescript"],
    },
    {
      title: "Project title",
      description: "Project description",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49746c5b47fca47e7292889ad1e5ad35967feec03f6627bd77c89ce29fb68abf?apiKey=db99173e039840438568dfd5fef6299e&",
      tags: ["React", "CSS", "Typescript"],
    },
  ];

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/850f621e48322297ce0d570a89cd1d2284b5ca04b50800907219a1c54fa9c5e3?apiKey=db99173e039840438568dfd5fef6299e&",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa331ca46021f61658cca4c14b6f13ff1fd47c05eafb01f853c5ae632bcfc00a?apiKey=db99173e039840438568dfd5fef6299e&",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06ef81b3ef0c50e6a38d768ba205da76b0b2b87f877b5797c5fdccf276547fb1?apiKey=db99173e039840438568dfd5fef6299e&",
      alt: "Social media icon 3",
    },
  ];

  return (
    <div className="flex flex-col items-center px-16 pt-5 bg-white text-black max-md:px-5">
      <div className="flex flex-col px-5 pb-6 w-full bg-white max-w-[1520px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <button className="custom-button bg-white text-black border border-black rounded-xl px-4 py-2 transition duration-300 hover:bg-black hover:text-white">
            Download CV
          </button>
          <div className="flex gap-3 justify-between items-start pl-3">
            <div className="text-lg tracking-wide leading-7 text-black">
              About
            </div>
            <div className="text-lg tracking-wide leading-7 text-black">
              Projects
            </div>
            <div className="text-lg tracking-wide leading-7 text-black">
              Contact
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
                    Hello! My name is{" "}
                    <span className="text-orange-600">Mustapha Talbi</span>{" "}
                    <br /> and I am a Full Stack Web Developer <br /> based in
                    Tunisia.
                  </div>
                  <div className="justify-center self-center px-6 py-3.5 mt-10 text-lg leading-7 text-white cursor-pointer bg-black rounded-xl border-2  border-solid max-md:px-5 max-md:mt-10 flex flex-rows">
                    <FaGithub size={31} className="mr-2" /> Github
                  </div>
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
                  <div>About Me</div>
                  <div className="shrink-0 w-24 h-1 bg-black mt-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full text-lg leading-7 text-black max-md:max-w-full mt-5">
              <div className="max-md:max-w-full text-center">
                Here is your description in English! Lorem ipsum dolor sit amet,
                consectetur adipiscin
              </div>
              <div className="max-md:mr-2.5 max-md:max-w-full text-center">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </div>
              <div className="max-md:max-w-full text-center">
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </div>
              <div className="mr-7 max-md:mr-2.5 max-md:max-w-full text-center">
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </div>
              <div className="max-md:max-w-full text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </div>
              <div className="max-md:mr-2 max-md:max-w-full text-center">
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident,
              </div>
              <div className="max-md:max-w-full text-center">
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
          </div>
        </div>

        <div className="self-center text-4xl font-bold tracking-wider text-black leading-[54px] mt-[300px] max-md:mt-10">
          Projects
        </div>
        <div className="flex-wrap justify-center content-center py-4 pl-4 mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-0 justify-between self-center mt-10 text-lg leading-7 text-black">
          <div>View full private projects archive</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1288f2bba12ca8ee98153b1b3e0a4608969ffe3a2694afe2d0e3ac38f58275?apiKey=db99173e039840438568dfd5fef6299e&"
            alt="Arrow icon"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="flex justify-center items-center px-16 py-20 mt-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center mb-96 max-w-full mt-[503px] w-[620px] max-md:my-10">
            <button className="justify-center px-6 py-3.5 text-lg leading-7 text-center text-black bg-white rounded-xl border border-black border-solid max-md:px-5">
              Say hello!
            </button>
            <div className="shrink-0 self-stretch mt-8 h-px border-t border-black border-solid max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-8 max-w-full w-[304px]">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
