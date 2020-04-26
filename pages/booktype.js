import Head from "next/head";
import { useState } from "react";
import { Button } from "@material-ui/core";

import axios from "axios";
const BookType = () => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async () => {
    const obj = { name: values.name };
    await axios.post(process.env.BOOK_TYPE, obj);
  };
  const [values, setValues] = useState({ name: "" });

  return (
    <div className="container">
      <label>
        Name
        <input name="name" onChange={handleInputChange} value={values.name} />
      </label>
      <Button onClick={onSubmit}>Save</Button>
    </div>
  );
};

export default BookType;
