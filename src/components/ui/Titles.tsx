import React from "react";

type titleProps = {
  additionalClasses?: string;
  title: string;
  preText?: string;
};

export const DisplayTitle = (props: titleProps) => {
  return (
    <h1
      className={`${props.additionalClasses} text-4xl md:text-6xl font-display font-black md:mx-16`}
    >
      {props.title}
    </h1>
  );
};

export const BigTitle = (props: titleProps) => {
  return (
    <h2 className={`${props.additionalClasses} font-display text-base`}>
      {props.title}
    </h2>
  );
};

export const SmallTitle = (props: titleProps) => {
  return (
    <h3
      className={`${props.additionalClasses} text-base font-display font-black`}
    >
      {props.preText}
      {props.title}
    </h3>
  );
};
