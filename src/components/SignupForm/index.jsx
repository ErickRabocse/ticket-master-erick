import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();

  const handleClearClick = () => {};
  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register("name")} required />
      </label>
      <br />
      <label>
        Age
        <input {...register("age")} required />
      </label>
      <br />
      <label>
        Address
        <input {...register("address")} required />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register("zipcode")} required />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone")} required />
      </label>
      <br />
      <button type="button" onClick={handleClearClick}>
        Clear
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
