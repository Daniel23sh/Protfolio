import { EditorialProjectShowcase } from "@/components/projects/editorial/EditorialProjectShowcase";
import { projects, projectsSectionContent } from "@/content/portfolio";

const conceptHeadingId = "projects-editorial-concept-heading";

export function ProjectsEditorialConcept() {
  return (
    <section
      aria-labelledby={conceptHeadingId}
      data-design-concept="editorial-hybrid"
      className="overflow-hidden bg-transparent px-page-gutter py-[clamp(5rem,8vw,7rem)]"
    >
      <div className="mx-auto w-full max-w-content">
        <header>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-accent-warm uppercase sm:text-sm">
            Design exploration · Option C
          </p>
          <h2
            id={conceptHeadingId}
            className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold tracking-tight text-ink"
          >
            {projectsSectionContent.heading}
          </h2>
          <span
            aria-hidden="true"
            className="mt-5 block h-0.5 w-16 bg-accent-warm"
          />
        </header>

        <div className="mt-8 md:mt-10 lg:mt-6">
          {projects.map((project, index) => (
            <EditorialProjectShowcase
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
