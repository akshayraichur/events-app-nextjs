import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  link: string;
};

const Button = (props: ButtonProps) => {
  const { children, link } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>{" "}
      {/* Next will recognise this a tag and replace its own a tag with this a tag and render it. 
      We do not set the href prop in here, it will be set by Next itself */}
    </Link>
  );
};

export default Button;
