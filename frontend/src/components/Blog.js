import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const Blog = ({ title, description, imageUrl, username, isUser }) => {
  console.log(title, isUser);
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
              sx={{
                marginLeft: "auto",
                color: "#ffdacc",
                ":hover": { color: "#ffce44" },
              }}
            >
              <ModeEditOutlinedIcon />
            </IconButton>
            <IconButton
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
          image={imageUrl}
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
