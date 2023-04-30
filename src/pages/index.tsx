import Head from "next/head";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "@/Components/Events/EventList";
import { GetStaticProps } from "next";
import { fetchData } from "@/Utils/ApiCalls";

export interface EventType {
  id: string;
  date: string;
  description: string;
  image: string;
  isFeatured: boolean;
  location: string;
  title: string;
}

type HomeProps = {
  featuredEventsData: EventType[];
};

export default function Home({ featuredEventsData }: HomeProps) {
  return (
    <div>
      <EventList items={featuredEventsData} />
    </div>
  );
}

// Down sides of using getStaticProps
// This page will only update if we build again. (if we do not use revalidate, if we use revalidate, then page will be built automatically after every x interval of seconds)
export async function getStaticProps(ctx: GetStaticProps) {
  const response = await fetchData("https://react-firebase-auth-24251.firebaseio.com/events.json");
  let resultingData: Array<EventType> = Object.keys(response).map((key) => ({ id: key, ...response[key] }));

  return {
    props: {
      featuredEventsData: resultingData.filter((events) => events.isFeatured),
      revalidate: 10,
    },
  };
}
