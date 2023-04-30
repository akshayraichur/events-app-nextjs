import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "@/Components/Events/EventList";
import EventsSearch from "@/Components/Events/EventsSearch";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { fetchData } from "@/Utils/ApiCalls";
import { EventType } from "../index";

type EventsPageProps = {
  events: Array<EventType>;
};

const EventsPage = ({ events }: EventsPageProps) => {
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

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const response = await fetchData("https://react-firebase-auth-24251.firebaseio.com/events.json");
  let resultingData: Array<EventType> = Object.keys(response).map((key) => ({ id: key, ...response[key] }));

  return {
    props: {
      events: resultingData,
    },
    revalidate: 10,
  };
}

export default EventsPage;
