"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { createSupabaseBrowser } from "../../../lib/supabase/client";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import AuthRequiredPopup from "@/components/ui/AuthRequiredPopup";

export default function ProjectsHeaderClient({ projectsCount }: { projectsCount: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const handleAddProjectClick = async () => {
    // Check if user is authenticated
    const supabase = createSupabaseBrowser();
    const { data: userData } = await supabase.auth.getUser();
    
    if (!userData.user) {
      setShowAuthPopup(true);
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
                Projects
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Student-built projects — shipped, documented, and ready to show.
              </p>

              {/* small stat row (not ugly big) */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
                <span className="font-semibold text-gray-900">{projectsCount}</span>
                <span className="text-gray-500">projects listed</span>
              </div>
            </div>

            <button
              onClick={handleAddProjectClick}
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white
                shadow-sm transition hover:bg-[#1558b0]
              "
            >
              <Plus className="h-4 w-4" />
              Add project
            </button>
          </div>
        </div>
      </section>

      <CreateProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {showAuthPopup && (
        <AuthRequiredPopup onClose={() => setShowAuthPopup(false)} />
      )}
    </>
  );
}
