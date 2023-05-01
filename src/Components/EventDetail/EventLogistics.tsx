import AddressIcon from "@/icons/address-icon";
import DateIcon from "@/icons/date-icon";
import LogisticsItem from "./LogisticsItem";
import classes from "./event-logistics.module.css";
import Image from "next/image";

type EventLogistics = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

function EventLogistics(props: EventLogistics) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
        <Image src={`/${image}`} alt={imageAlt} width={700} height={700} />
        {/* The width and height that we set in here, will only determine the image size that will be fetched in the end. The css styles will still work */}
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
