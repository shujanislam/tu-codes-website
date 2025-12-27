"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Github, Calendar } from "lucide-react";

type Project = {
  id: string | number;
  title?: string | null;
  description?: string | null;
  owner?: string | null;
  image_url?: string | null;
  github_link?: string | null;
  created_at?: string | null;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const router = useRouter();

  const go = (href?: string | null) => {
    if (!href) return;
    if (href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer");
    else router.push(href);
  };

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">📂</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Yet</h3>
          <p className="text-gray-600">Be the first to showcase your amazing project!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => {
        const clickable = Boolean(p.github_link);

        return (
          <div
            key={p.id}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
              <Image
                src={
                  p.image_url ??
                  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/dNWlZMXU_400x400.png"
                }
                alt={p.title ?? "Project image"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {p.title || "Untitled Project"}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                {p.description || "No description provided"}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(p.created_at)}</span>
                </div>
                <div className="font-medium text-gray-700">
                  by {p.owner || "Anonymous"}
                </div>
              </div>

              {/* GitHub Button */}
              {clickable && (
                <button
                  onClick={() => go(p.github_link)}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </button>
              )}
              {!clickable && (
                <div className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold text-center">
                  No GitHub Link
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

