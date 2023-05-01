import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../dummy-data";
import EventSummary from "@/Components/EventDetail/EventSummary";
import EventLogistics from "@/Components/EventDetail/EventLogistics";
import EventContent from "@/Components/EventDetail/EventContent";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchData } from "@/Utils/ApiCalls";
import { EventType } from "../index";
import Head from "next/head";

type EventDetailPageProps = {
  event: EventType;
};

const EventDetailPage = (props: EventDetailPageProps) => {
  const { event } = props;
  const {
    query: { eventId },
  } = useRouter();

  if (Object.keys(event).length === 0) {
    return <p className="center error-alert">No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { params } = ctx;

  const response = await fetchData("https://react-firebase-auth-24251.firebaseio.com/events.json");
  let resultingData: Array<EventType> = Object.keys(response).map((key) => ({ id: key, ...response[key] }));

  let filteredData: Array<EventType | []> = resultingData.filter((data) => data.id === params?.eventId);

  return {
    props: {
      event: filteredData[0] ?? {},
    },
  };
}

export default EventDetailPage;
