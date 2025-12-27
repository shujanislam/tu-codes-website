import { fetchProjects, fetchProjectsCount } from "../../../lib/queries";
import CreateProjectCard from "../../components/projects";
import ProjectGrid from '../../components/ui/ProjectGrid';

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  const projects_count = await fetchProjectsCount();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative dots */}
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Innovative solutions built by our community
            </p>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Explore amazing projects created by TU Codes members. From web apps to AI solutions,
              our community is building the future of technology.
            </p>

            {/* Stats Card */}
            <div className="inline-block">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">{projects_count || 0}</div>
                <div className="text-gray-700 font-medium text-lg">Projects Showcased</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProjectGrid projects={projects ?? []} />
        </div>
      </section>

      {/* Create Project Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <CreateProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
}
