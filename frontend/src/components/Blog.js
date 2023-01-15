import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import axios from "axios";

const Blog = ({ title, description, imageUrl, username, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ffdacc",
          ":hover": { boxShadow: "10px 10px 20px #ffafbd" },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton
              onClick={handleEdit}
              sx={{
                marginLeft: "auto",
                color: "#ffdacc",
                ":hover": { color: "#ffce44" },
              }}
            >
              <ModeEditOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              sx={{ color: "#ffdacc", ":hover": { color: "#dc143c" } }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#fe647e" }} aria-label="recipe">
              {username ? username.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          src={imageUrl}
          alt="blog image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{username}</b>: {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
