import React from "react";
import EventItem, { EventItemProps } from "./EventItem";
import classes from "./EventList.module.css";

interface EventListProps {
  items: EventItemProps[];
}

const EventList = (props: EventListProps) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event: EventItemProps) => (
        <EventItem
          key={event.title}
          title={event.title}
          id={event.id}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
