import React from "react";

type StandartInputProps = {
  type: string;
  id: string;
  name: string;
  additionalClasses?: string;
};

const StandartInput = (props: StandartInputProps) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.name}
      className={`${props.additionalClasses} rounded-md	border-2 border-darkerGrey h-12 pl-7 w-full`}
    />
  );
};

export default StandartInput;
