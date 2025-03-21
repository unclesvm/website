import ContactLinks from "../components/Contact";
import Skills from "../components/Skills";

const experience = [
  {
    company: "Dornach (ZieglerGroup)",
    position: "Full Stack Developer",
    period: "10.2023 - 10.2024",
    description: "I was outsourced to ZieglerGroup international logistics corporation. I was assigned to development of the MyZiegler. Project tailored to business clients and their needs of independently requesting quotes.",
    techStack: ["TypeScript", "Next.js", "TailwindCSS", "shadcn", "tanstack", "MongoDB", "Docker"]
  },
  {
    company: "Apkeo",
    position: "Full Stack Developer",
    period: "07.2023 - 10.2023",
    description: "Worked on web application integrating AI into essential tools like spreadsheets, maps, communication features, forms, and more into a unified platform.",
    techStack: ["TypeScript", "Node.js", "Vue.js", "Sass", "Socket.IO", "MongoDB", "Redis", "Docker"]
  },
  {
    company: "WebWizards",
    position: "Frontend Developer",
    period: "03.2023 - 07.2023",
    description: "I was responsible for keeping WP pages up to date, and developed 2 MPA websites in Astro for Porshe and Skoda dealership marketing",
    techStack: ["TypeScript", "React.js", "Vue.js", "Next.js", "Nuxt.js", "Astro", "TailwindCSS", "Sass"]
  },
  {
    company: "CodeClutch",
    position: "Full Stack Developer",
    period: "10.2022 - 02.2023",
    description: "Helped to build cryptocurrency trading platform that unified multiple digital asset exchanges into a user-friendly interface.",
    techStack: ["TypeScript", "Node.js", "Nuxt.js", "Pinia", "TailwindCSS", "MongoDB"]
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "10.2022 - 02.2023",
    description: "Developed website with content management system for business client",
    techStack: ["TypeScript", "Next.js", "Firebase", "TailwindCSS"]
  },
  {
    company: "ATComputers",
    position: "Frontend Developer",
    period: "12.2019 - 04.2021",
    description: "Worked on customer relationship management (CRM) software designed to assist businesses in managing communication and interactions.",
    techStack: ["Vue.js", "Vuex", "Sass", "Python", "Laravel"]
  }
]

export default function ResumePage() {
  return (
    <main className="backdrop-blur bg-white dark:bg-black p-5">

      <div className="flex flex-col border border-neutral-600 rounded shadow sm:flex-row">
        <header className="flex-1 p-3 flex flex-col justify-center items-center  rounded">
          <h1 className="text-2xl font-semibold ">Samuel Kaminski</h1>
          <h3 className="text-xl mb-4">Full-Stack Developer</h3>
          <ContactLinks />
        </header>
        <Skills />
      </div>

      <ul className="">
        {experience.map((item) => (
          <li key={item.company} className="py-6 space-y-1.5 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex justify-between items-center">
              <header className="flex-1 flex flex-col gap-0">
                <h2 className="text-lg font-bold w-full">{item.company}</h2>
                <h4 className="font-sans">{item.position}</h4>
              </header>
              <h4 className="dark:text-neutral-200 text-neutral-800 text-sm font-sans">
                {item.period}
              </h4>
            </div>
            <p className="leading-4 text-[9px] text-justify font-sans ">
              {item.description}
            </p>
            <div className="flex gap-2 flex-wrap lowercase font-sans text-[9px] text-justify text-neutral-500">
              {"// " + item.techStack.join(', ')}
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[7px] text-center font-sans">
        I hereby give consent for my personal data to be processed for the purposes of current and future recruitment processes
      </p>
    </main>
  )
}
