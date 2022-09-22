import { Box } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import classes from "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleBox = (props) => {
  const boxClickedEventHandler = () => {
    props.onClick(props.position, props.iconNmber);
    console.log("FW to MainGrid");
  };

  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "Whitesmoke",
        width: 200,
        height: 140,
        backgroundColor: "transparent",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "transparent",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <ImageListItem>
        {props.iconNmber.length > 1 ? (
          <div className={classes.wrap} onClick={boxClickedEventHandler}>
            <FontAwesomeIcon
              icon={props.iconNmber[0]}
              size="8x"
              color="Whitesmoke"
            />
            <FontAwesomeIcon
              icon={props.iconNmber[1]}
              size="8x"
              color="Whitesmoke"
            />
          </div>
        ) : (
          <div className={classes.wrap} onClick={boxClickedEventHandler}>
            <FontAwesomeIcon
              icon={props.iconNmber}
              size="8x"
              color="Whitesmoke"
            />
          </div>
        )}
      </ImageListItem>
    </Box>
  );
};

export default SingleBox;
