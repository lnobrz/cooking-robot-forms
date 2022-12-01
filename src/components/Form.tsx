import React from "react";
import { BigTitle } from "./ui/Titles";
import StandartInput from "./ui/StandartInput";

const Form = () => {
  return (
    <div className="mx-7 mt-7">
      <BigTitle title="Add Menu Item" />
      <form className="mt-7">
        <StandartInput type="text" name="Name" id="name" />
        <StandartInput
          type="number"
          name="Price"
          id="price"
          additionalClasses="mt-5"
        />
        <StandartInput
          type="text"
          name="Image Description"
          id="imageDescription"
          additionalClasses="mt-5"
        />
      </form>
    </div>
  );
};

export default Form;
