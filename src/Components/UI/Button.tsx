import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  link: string | boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  const { children, link, onClick } = props;
  if (props.link) {
    return (
      <Link href={link as string} id="link" className={classes.btn}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {children}
      </button>
    );
  }
};

/* Next will recognise this a tag and replace its own a tag with this a tag and render it. 
   We do not set the href prop in here, it will be set by Next itself */

/**
 * In Next JS 13, Link is internally a tag
 * https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
 */

export default Button;
