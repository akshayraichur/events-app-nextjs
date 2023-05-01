import Link from "next/link";
import Image from "next/image";
import React from "react";

import classes from "./EventItem.module.css";
import Button from "../UI/Button";
import DateIcon from "@/icons/date-icon";
import AddressIcon from "@/icons/address-icon";
import ArrowRightIcon from "@/icons/arrow-right-icon";

export type EventItemProps = {
  title: string;
  date: string;
  location: string;
  id: string;
  image: string;
};

const EventItem = (props: EventItemProps) => {
  const { title, date, location, id, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={250} height={160} />{" "}
      {/* Here, we need to set the width and height of the image. It should be calculated manually, but checking the container width and set accordingly */}
      {/* The width and height that we set in here, will only determine the image size that will be fetched in the end. The css styles will still work */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
