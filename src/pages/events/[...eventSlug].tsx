import { useRouter } from "next/router";
import React from "react";

const FilteredEventPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>EventDetailsQuery</h1>
      <p>You have chosen: {query.eventSlug}</p>
    </div>
  );
};

export default FilteredEventPage;
