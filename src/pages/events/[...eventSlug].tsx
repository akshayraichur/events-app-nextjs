import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/Components/Events/EventList";
import Button from "@/Components/UI/Button";
import { GetServerSidePropsContext } from "next";
import { fetchData } from "@/Utils/ApiCalls";
import { EventType } from "..";
import Head from "next/head";

type FilteredEventProps = {
  events: EventType[];
  hasError?: boolean;
};

const FilteredEventPage = ({ events, hasError }: FilteredEventProps) => {
  if (hasError) {
    return (
      <>
        <p className="center error-alert">Invalid filter, please adjust your values</p>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        <p className="center error-alert">No events found</p>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>Events App | Filtered Events</title>
      </Head>
      <EventList items={events} />
    </div>
  );
};

/**
 *
 * This page is a good example of using client side data fetching, because, we might want to load the page as early as possible,
 * and then maybe show a loading state while the data is being fetched.
 * Ofcourse we would miss out of content being generated on the fly for SEO. but w.r.t performance, it would be nice to use client side data fetching here.
 *
 */

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { params } = ctx;
  let filteredData = params?.eventSlug as string[];
  console.log(params?.eventSlug);

  const fitleredYear = +filteredData[0];
  const fitleredMonth = +filteredData[1];

  if (
    isNaN(fitleredYear) ||
    isNaN(fitleredMonth) ||
    fitleredYear < 2021 ||
    fitleredYear > 2023 ||
    fitleredMonth < 1 ||
    fitleredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
    };
  }

  const response = await fetchData("https://react-firebase-auth-24251.firebaseio.com/events.json");
  let resultingData: Array<EventType> = Object.keys(response).map((key) => ({ id: key, ...response[key] }));

  const events = getFilteredEvents(
    {
      year: fitleredYear,
      month: fitleredMonth,
    },
    resultingData
  );

  return {
    props: {
      events,
    },
  };
}

export default FilteredEventPage;
