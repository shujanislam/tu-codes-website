"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Github,
  CalendarDays,
  Trash2,
  MoreVertical,
  User,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { deleteProject } from "../../../lib/actions";
import { createSupabaseBrowser } from "../../../lib/supabase/client";

type Project = {
  id: string | number;
  title?: string | null;
  description?: string | null;
  owner?: string | null;
  image_url?: string | null;
  github_link?: string | null;
  created_at?: string | null;
};

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/dNWlZMXU_400x400.png";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [currentUserName, setCurrentUserName] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | number | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | number | null>(null);

  // Get current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createSupabaseBrowser();
      const { data } = await supabase.auth.getUser();
      if (data.user) setCurrentUserName(data.user.user_metadata.display_name ?? null);
    };
    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-container="true"]')) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "Recently";
    return date.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = async (
    projectId: string | number,
    projectTitle?: string | null
  ) => {
    const confirmed = window.confirm(
      `Delete "${projectTitle || "this project"}"? This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(projectId);
    try {
      await deleteProject(projectId);
      router.refresh();
    } catch (err: any) {
      alert(err?.message || "Failed to delete project");
      setDeletingId(null);
    }
  };

  const canDelete = (projectOwner?: string | null) =>
    !!currentUserName && projectOwner === currentUserName;

  const openGithub = (href?: string | null) => {
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  // Empty state
  if (!projects || projects.length === 0) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8] ring-1 ring-blue-100">
          <ExternalLink className="h-6 w-6" />
        </div>
        <h3 className="text-base font-semibold text-gray-900">No projects yet</h3>
        <p className="mt-1 text-sm text-gray-600">
          Add your first project to showcase what you’re building.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const showDelete = canDelete(project.owner);
        const isDeleting = deletingId === project.id;
        const menuOpen = openMenuId === project.id;

        return (
          <div
            key={project.id}
            className="
              group overflow-hidden rounded-3xl border border-gray-200 bg-white
              shadow-sm transition
              hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200
            "
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={project.image_url || FALLBACK_IMAGE}
                alt={project.title || "Project"}
                width={800}
                height={420}
                className="h-44 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Top-left pill */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Project
                </span>
              </div>

              {/* Menu */}
              <div
                className="absolute right-3 top-3"
                data-dropdown-container="true"
              >
                <button
                  type="button"
                  onClick={() => setOpenMenuId(menuOpen ? null : project.id)}
                  className="
                    inline-flex h-9 w-9 items-center justify-center rounded-xl
                    bg-white/90 shadow-sm ring-1 ring-black/5
                    transition hover:bg-white
                  "
                  aria-label="Project menu"
                >
                  <MoreVertical className="h-5 w-5 text-gray-700" />
                </button>

                {menuOpen && (
                  <div
                    className="
                      absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl
                      border border-gray-200 bg-white shadow-lg
                    "
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setOpenMenuId(null);
                        openGithub(project.github_link);
                      }}
                      disabled={!project.github_link}
                      className="
                        flex w-full items-center gap-2 px-4 py-3 text-sm
                        text-gray-800 transition hover:bg-gray-50
                        disabled:cursor-not-allowed disabled:opacity-50
                      "
                    >
                      <Github className="h-4 w-4 text-[#1a73e8]" />
                      Open GitHub
                    </button>

                    {showDelete && (
                      <button
                        type="button"
                        onClick={() => {
                          setOpenMenuId(null);
                          handleDelete(project.id, project.title);
                        }}
                        disabled={isDeleting}
                        className="
                          flex w-full items-center gap-2 px-4 py-3 text-sm
                          text-red-700 transition hover:bg-red-50
                          disabled:cursor-not-allowed disabled:opacity-60
                        "
                      >
                        <Trash2 className="h-4 w-4" />
                        {isDeleting ? "Deleting..." : "Delete"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {project.title ?? "Untitled project"}
              </h3>

              {/* Meta */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#1a73e8]" />
                  <span>{project.owner ?? "Unknown"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#1a73e8]" />
                  <span>{formatDate(project.created_at)}</span>
                </div>
              </div>

              <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                {project.description ?? "No description provided."}
              </p>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => openGithub(project.github_link)}
                  className="
                    inline-flex flex-1 items-center justify-center gap-2
                    rounded-xl bg-[#1a73e8] px-4 py-3 text-sm font-semibold text-white
                    shadow-sm transition hover:bg-[#1558b0]
                  "
                >
                  View
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
