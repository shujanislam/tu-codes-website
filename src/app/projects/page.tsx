import ProjectGrid from "@/components/ui/ProjectGrid";
import ProjectsHeaderClient from "@/components/ui/ProjectsHeaderClient";
import { fetchProjects, fetchProjectsCount } from "../../../lib/queries";

export const dynamic = "force-dynamic"; // ensures SSR (not static)

export default async function ProjectsPage() {
  const [projects, projectsCount] = await Promise.all([
    fetchProjects(),
    fetchProjectsCount(),
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ProjectsHeaderClient projectsCount={projectsCount ?? 0} />

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProjectGrid projects={projects ?? []} />
        </div>
      </section>
    </div>
  );
}
