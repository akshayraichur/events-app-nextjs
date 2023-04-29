import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../dummy-data";
import EventSummary from "@/Components/EventDetail/EventSummary";
import EventLogistics from "@/Components/EventDetail/EventLogistics";
import EventContent from "@/Components/EventDetail/EventContent";

const EventDetailPage = () => {
  const {
    query: { eventId },
  } = useRouter();

  const event = getEventById(eventId);
  if (!event) {
    return <p className="center error-alert">No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
