import { useRouter } from "next/router";
import React from "react";

const EventDetailPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Events Detail Page</h1>
      <p>You have chosen : {query?.eventId}</p>
    </div>
  );
};

export default EventDetailPage;
