import Head from "next/head";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "@/Components/Events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
