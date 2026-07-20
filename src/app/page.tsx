import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ProjectsEditorialConcept } from "@/components/sections/ProjectsEditorialConcept";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Projects />
        <ProjectsEditorialConcept />
      </main>
    </>
  );
}
