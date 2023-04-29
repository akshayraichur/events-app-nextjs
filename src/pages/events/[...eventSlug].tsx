import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/Components/Events/EventList";
import Button from "@/Components/UI/Button";

const FilteredEventPage = () => {
  const router = useRouter();

  const filteredData = router.query.eventSlug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

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
    return (
      <>
        <p className="center error-alert">Invalid filter, please adjust your values</p>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({
    year: fitleredYear,
    month: fitleredMonth,
  });

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
      <EventList items={events} />
    </div>
  );
};

export default FilteredEventPage;
