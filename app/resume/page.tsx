import ContactLinks from "../components/Contact";
import Skills from "../components/Skills";

const experience = [
  {
    company: "Dornach (ZieglerGroup)",
    position: "Full Stack Developer",
    period: "Oct 2023 - Oct 2024",
    description: "I was outsourced to ZieglerGroup international logistics corporation. I was assigned to development of the MyZiegler. Project tailored to business clients and their needs of independently requesting quotes.",
    techStack: ["TypeScript", "Next.js", "TailwindCSS", "shadcn", "tanstack", "MongoDB", "Docker"]
  },
  {
    company: "Apkeo",
    position: "Full Stack Developer",
    period: "Jul 2023 - Oct 2023",
    description: "Worked on web application integrating AI into essential tools like spreadsheets, maps, communication features, forms, and more into a unified platform.",
    techStack: ["TypeScript", "Node.js", "Vue.js", "Sass", "Socket.IO", "MongoDB", "Redis", "Docker"]
  },
  {
    company: "WebWizards",
    position: "Frontend Developer",
    period: "Mar 2023 - Jul 2023",
    description: "I was responsible for keeping WP pages up to date, and developed 2 MPA websites in Astro for Porshe and Skoda dealership marketing",
    techStack: ["TypeScript", "React.js", "Vue.js", "Next.js", "Nuxt.js", "Astro", "TailwindCSS", "Sass"]
  },
  {
    company: "CodeClutch",
    position: "Full Stack Developer",
    period: "Oct 2022 - Feb 2023",
    description: "Helped to build cryptocurrency trading platform that unified multiple digital asset exchanges into a user-friendly interface.",
    techStack: ["TypeScript", "Node.js", "Nuxt.js", "Pinia", "TailwindCSS", "MongoDB"]
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "Oct 2022 - Feb 2023",
    description: "Developed website with content management system for business client",
    techStack: ["TypeScript", "Next.js", "Firebase", "TailwindCSS"]
  },
  {
    company: "ATComputers",
    position: "Frontend Developer",
    period: "Dec 2019 - Apr 2021",
    description: "Worked on customer relationship management (CRM) software designed to assist businesses in managing communication and interactions.",
    techStack: ["Vue.js", "Vuex", "Sass", "Python", "Laravel"]
  }
];

export default function ResumePage() {
  return (
    <main className="backdrop-blur space-y-3 p-3">

      <header className="flex justify-between items-center shadow-md border border-neutral-300 dark:border-neutral-700 rounded">
        <div className="flex flex-col p-2 px-7">
          <h1 className="text-2xl font-semibold ">Samuel Kaminski</h1>
          <h3 className="text-xl mb-4">Full-Stack Developer</h3>
          <ContactLinks />
        </div>
        <Skills />
      </header>

      <ul className="">
        {experience.map((item) => (
          <li key={item.company} className="py-5 space-y-1.5 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex justify-between items-start">
              <header className="flex-1">
                <h2 className="font-semibold">{item.company}</h2>
                <h4 className="font-normal">{item.position}</h4>
              </header>
              <h4 className="dark:text-neutral-200 text-neutral-800">{item.period}</h4>
            </div>
                <div className="flex gap-5">
                  {/* {JSON.stringify(item.techStack, [","], 2)} */}
                  {item.techStack.map((name) =>
                    <div key={name} className="text-[9px] rounded-lg lowercase">
                      <span className="text-neutral-600">#</span> {name}
                    </div>)}
                </div>
            <p className=" text-[9px] text-neutral-400">{'// ' + item.description}</p>
          </li>
        ))}
      </ul>
      <p className="text-[7px] text-center ">
        I hereby give consent for my personal data to be processed for the purposes of current and future recruitment processes
      </p>
    </main>
  )
}
