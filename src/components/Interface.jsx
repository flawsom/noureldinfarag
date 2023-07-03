import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start
      ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug text-gray-200">
        Hi I'm
        <br />
        <span
          className={`
          text-3xl font-extrabold md:text-5xl font-extrabold leading-snug bg-emerald-50 text-emerald-600
          rounded-lg py-1.5 px-4 italic
          `}
        >
          Noureldin Farag
        </span>
      </h1>
      <motion.p
        className="text-base mt-6 md:text-lg text-gray-100 mt-8 font-semibold leading-relaxed max-w-xl"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a full-stack developer with a passion for building
        <br />
        beautiful interfaces and solving problems.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-emerald-500 text-white px-8 font-bold text-lg py-4 mt-12 rounded-lg shadow-lg 
      hover:bg-emerald-600 transition-all duration-200 ease-in-out`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 70,
  },
  {
    title: "NodeJS",
    level: 80,
  },
  {
    title: "Typescript",
    level: 80,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 65,
  },
  {
    title: "3D Modeling / Blender",
    level: 65,
  },
  {
    title: "Python",
    level: 90,
  },
  {
    title: "c++",
    level: 80,
  },
  {
    title: "Java",
    level: 85,
  },
  {
    title: "Linux / Bash / Shell",
    level: 80,
  },
  {
    title: "Swift",
    level: 75,
  },
  {
    title: "Agile / Scrum",
    level: 80,
  },
  {
    title: "SQL / NoSQL",
    level: 85,
  },
];

const languages = [
  {
    title: "English",
    level: 85,
  },
  {
    title: "French",
    level: 50,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="mt-4 space-y-50 grid grid-cols-2 gap-2 md:mt-4 space-y-50 grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-sm mt-1 md:text-base font-bold text-sky-50 "
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-emerald-100 rounded-full mt-2">
                <motion.div
                  className="h-full bg-cyan-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mt-10 text-white">
            Languages
          </h2>
          <div className="mt-3 space-y-2">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="mt-2 text-base md:text-base font-bold text-emerald-50"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-emerald-100 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-emerald-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center mt-32">
        <button
          className="hover:text-emerald-600 transition-colors  text-emerald-50"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold text-emerald-50">Projects</h2>
        <button
          className="hover:text-emerald-600 transition-colors  text-emerald-50"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xgejwbeq");
  return (
    <Section className={`flex justify-center`}>
      <h2 className="text-3xl md:text-4xl text-emerald-50 font-bold">
        Contact me
      </h2>
      <div className="mt-4 p-6 rounded-md w-96 max-w-full">
        {state.succeeded ? (
          <p className="bg-emerald-500 text-gray-900 px-8 font-bold text-lg py-4 rounded-lg shadow-lg text-center">
            Thanks for your message !
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-medium text-gray-100 block mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-100 block mb-1 mt-6"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-100 block mb-1 mt-6"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-30 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500 font-bold"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-emerald-600 text-white py-3 px-6 rounded-lg font-bold mt-8 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
