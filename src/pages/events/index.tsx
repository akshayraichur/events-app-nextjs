import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "@/Components/Events/EventList";
import EventsSearch from "@/Components/Events/EventsSearch";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
