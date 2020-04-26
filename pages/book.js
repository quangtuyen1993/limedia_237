import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Button,
  Select,
  MenuItem,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import axios from "axios";
const Book = () => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async () => {
    const obj = {
      name: values.name,
      author: values.author,
      img:values.img,
      description:values.description,
      bookTypes: [values.bookType, values.bookType_2, values.bookType_3],
    };
    await axios.post(process.env.BOOK, obj);
    alert(
      values.name +
        "----" +
        values.bookType +
        "/" +
        values.bookType_2 +
        "/" +
        values.bookType_3
    );
  };
  const [values, setValues] = useState({
    name: "",
    author: "",
    description: "",
    img:"",
    bookType: "",
    bookType_2: "",
    bookType_3: "",
  });

  const [bts, setBts] = useState([]);

  useEffect(() => {
    const getBookType = async () => {
      let bt = await axios.get(process.env.BOOK_TYPE);
      setBts(bt.data);
    };
    getBookType();
  }, []);

  return (
    <div className="container">
      <div> Book</div>
      <TextField
        name="name"
        label="Name"
        onChange={handleInputChange}
        value={values.name}
      />
      <br />
      <TextField
        name="author"
        label="Author"
        onChange={handleInputChange}
        value={values.author}
      />
      <br/>
      <TextField
        name="img"
        label="Link Image"
        onChange={handleInputChange}
        value={values.img}
      />
      <br />

      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
        value={values.description}
      />
      <br />
      <Select
        name="bookType"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleInputChange}
      >
        {bts.map((bt) => (
          <MenuItem key={bt._id} value={bt._id}>
            {bt.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        name="bookType_2"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleInputChange}
      >
        {bts.map((bt, index) => (
          <MenuItem key={bt._id} value={bt._id}>
            {bt.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        name="bookType_3"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleInputChange}
      >
        {bts.map((bt) => (
          <MenuItem key={bt._id} value={bt._id}>
            {bt.name}
          </MenuItem>
        ))}
      </Select>
      <br />
      <Button onClick={onSubmit}>Save</Button>
    </div>
  );
};

export default Book;
