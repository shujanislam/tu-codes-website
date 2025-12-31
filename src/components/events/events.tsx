import EventsClient from "@/components/events/EventsClient";

type DbEvent = {
  id: number;
  name: string;
  description: string | null;
  location: string | null;
  tag: string | null;
  image_url: string | null;
  scheduled_at: string;
  created_at: string;
};

export default function Events({ events }: { events: DbEvent[] }) {
  return <EventsClient events={events} />;
}
