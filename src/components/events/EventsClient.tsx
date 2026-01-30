"use client";

import { useState } from "react";
import { registerEvent } from "../../../lib/actions";
import { createSupabaseBrowser } from "../../../lib/supabase/client";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import EventRegistrationPopup from "@/components/events/EventRegistrationPopup";
import AuthRequiredPopup from "@/components/ui/AuthRequiredPopup";

type DbEvent = {
  id: number;
  name: string;
  description: string | null;
  location: string | null;
  tag: string | null;
  image_url: string | null;
  scheduled_at: string;
  created_at: string;
  link: string | null;
};

export default function EventsClient({ events }: { events: DbEvent[] }) {
  const [popupState, setPopupState] = useState<{
    show: boolean;
    message: string;
    type: "success" | "info";
  }>({ show: false, message: "", type: "success" });
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(d);
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(d);
  };

  const handleRegister = async (eventName: string) => {
    try {
      // Check if user is authenticated
      const supabase = createSupabaseBrowser();
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) {
        setShowAuthPopup(true);
        return;
      }

      const res = await registerEvent(eventName);
      
      if (res.includes("already registered")) {
        setPopupState({
          show: true,
          message: `You're already registered for ${eventName}.`,
          type: "info"
        });
      } else {
        setPopupState({
          show: true,
          message: `Successfully registered for ${eventName}!`,
          type: "success"
        });
      }
    } catch (err: any) {
      console.error(err.message);
      setPopupState({
        show: true,
        message: err.message || "Failed to register for the event.",
        type: "info"
      });
    }
  };

  return (
    <>
      {popupState.show && (
        <EventRegistrationPopup
          message={popupState.message}
          type={popupState.type}
          onClose={() => setPopupState({ ...popupState, show: false })}
        />
      )}

      {showAuthPopup && (
        <AuthRequiredPopup onClose={() => setShowAuthPopup(false)} />
      )}

      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Workshops, hackathons, and meetups designed to help you learn and build.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {!events || events.length === 0 ? (
              <div className="text-gray-600">No events yet.</div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="
                    group overflow-hidden rounded-3xl border border-gray-200 bg-white
                    shadow-sm transition
                    hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200
                  "
                >
                  {/* Image */}
                  {event.image_url ? (
                    <div className="relative">
                      <img
                        src={event.image_url}
                        alt={event.name}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                      {/* Tag */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {event.tag ?? "Event"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="border-b border-gray-100 px-6 py-4">
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {event.tag ?? "Event"}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                      {event.name}
                    </h3>

                    {/* Meta */}
                    <div className="mt-3 space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-[#1a73e8]" />
                        <span className="font-medium text-gray-800">
                          {formatDate(event.scheduled_at)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#1a73e8]" />
                        <span>{formatTime(event.scheduled_at)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#1a73e8]" />
                        <span>{event.location ?? "TBA"}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                      {event.description ?? "No description provided."}
                    </p>

                     {/* Action */}
                     {event.link ? (
                       <a
                         href={event.link}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="
                           mt-6 inline-flex w-full items-center justify-center gap-2
                           rounded-xl bg-[#1a73e8] px-4 py-3 text-sm font-semibold text-white
                           shadow-sm transition hover:bg-[#1558b0]
                           focus:outline-none focus:ring-2 focus:ring-blue-300
                         "
                       >
                         Register
                         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                       </a>
                     ) : (
                       <button
                         onClick={() => handleRegister(event.name)}
                         className="
                           mt-6 inline-flex w-full items-center justify-center gap-2
                           rounded-xl bg-[#1a73e8] px-4 py-3 text-sm font-semibold text-white
                           shadow-sm transition hover:bg-[#1558b0]
                           focus:outline-none focus:ring-2 focus:ring-blue-300
                         "
                       >
                         Register
                         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                       </button>
                     )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
