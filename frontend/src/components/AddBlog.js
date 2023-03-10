import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontsize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/addBlog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageUrl,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="#ff4081"
          borderRadius={10}
          borderShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width="80%"
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="gray"
            variant="h3"
            textAlign={"center"}
          >
            What's on your mind?
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
          />
          <InputLabel sx={labelStyles}>ImageUrl</InputLabel>
          <TextField
            name="imageUrl"
            onChange={handleChange}
            value={inputs.imageUrl}
          />
          <Button
            type="submit"
            sx={{
              borderRadius: 5,
              mt: 2,
            }}
            variant="outlined"
            color="secondary"
          >
            Post my blog
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
