import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const Blog = ({ title, description, imageUrl, username }) => {
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
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {username ? username.charAt(0) : ""}
            </Avatar>
          }
          title= {title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt="blog image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
