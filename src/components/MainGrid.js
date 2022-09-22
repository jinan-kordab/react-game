import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { Box } from "@mui/material";
import SingleBox from "./SingleBox";
import classes from "../index.css";
import Flash from "react-reveal/Flash";
import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
} from "@fortawesome/free-solid-svg-icons";

const MainGrid = (props) => {
  const initialMatrix = [
    fa2,
    [fa1, fa2],
    [fa1, fa3],
    fa3,
    fa1,
    fa4,
    [fa1, fa0],
    fa9,
    [fa1, fa1],
    [fa1, fa4],
    [],
    [fa1, fa5],
    fa5,
    fa6,
    fa8,
    fa7,
  ];
  const [matrix, setMatrix] = useState(initialMatrix);
  const [won, setIsWon] = useState(false);
  const [moves, setMoves] = useState(0);

  const fa0Rules = [1, 4];
  const fa1Rules = [0, 2, 5];
  const fa2Rules = [1, 3, 6];
  const fa3Rules = [2, 7];
  const fa4Rules = [0, 5, 8];
  const fa5Rules = [1, 6, 9, 4];
  const fa6Rules = [2, 7, 10, 5];
  const fa7Rules = [3, 6, 11];
  const fa8Rules = [4, 9, 12];
  const fa9Rules = [5, 10, 13, 8];
  const fa10Rules = [6, 11, 14, 9];
  const fa11Rules = [7, 10, 15];
  const fa12Rules = [8, 13];
  const fa13Rules = [9, 14, 12];
  const fa14Rules = [10, 15, 13];
  const fa15Rules = [11, 14];

  useEffect(() => {
    const winningMatrix = [
      fa1,
      fa2,
      fa3,
      fa4,
      fa5,
      fa6,
      fa7,
      fa8,
      fa9,
      [fa1, fa0],
      [fa1, fa1],
      [fa1, fa2],
      [fa1, fa3],
      [fa1, fa4],
      [fa1, fa5],
      [],
    ];

    if (JSON.stringify(matrix) === JSON.stringify(winningMatrix)) {
      setIsWon(true);
    }
  }, [matrix]);

  const singleBoxClickEventHandler = (position, iconNumber) => {
    if (won) {
      return;
    }

    switch (position) {
      case 0:
        //const fa0Rules = [1, 4];
        if (matrix[fa0Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[0] = [];
          tempoMatrix[fa0Rules[0]] = matrix[0];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa0Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[0] = [];
          tempoMatrix[fa0Rules[1]] = matrix[0];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 1:
        //const fa1Rules = [0, 2, 5];
        if (matrix[fa1Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[1] = [];
          tempoMatrix[fa1Rules[0]] = matrix[1];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa1Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[1] = [];
          tempoMatrix[fa1Rules[1]] = matrix[1];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa1Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[1] = [];
          tempoMatrix[fa1Rules[2]] = matrix[1];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 2:
        //const fa2Rules = [1, 3, 6];
        if (matrix[fa2Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[2] = [];
          tempoMatrix[fa2Rules[0]] = matrix[2];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa2Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[2] = [];
          tempoMatrix[fa2Rules[1]] = matrix[2];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa2Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[2] = [];
          tempoMatrix[fa2Rules[2]] = matrix[2];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 3:
        //onst fa3Rules = [2, 7];
        if (matrix[fa3Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[3] = [];
          tempoMatrix[fa3Rules[0]] = matrix[3];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa3Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[3] = [];
          tempoMatrix[fa3Rules[1]] = matrix[3];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }

        break;
      case 4:
        //const fa4Rules = [0, 5, 8];
        if (matrix[fa4Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[4] = [];
          tempoMatrix[fa4Rules[0]] = matrix[4];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa4Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[4] = [];
          tempoMatrix[fa4Rules[1]] = matrix[4];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa4Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[4] = [];
          tempoMatrix[fa4Rules[2]] = matrix[4];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 5:
        //const fa5Rules = [1, 6, 9, 4];
        if (matrix[fa5Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[5] = [];
          tempoMatrix[fa5Rules[0]] = matrix[5];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa5Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[5] = [];
          tempoMatrix[fa5Rules[1]] = matrix[5];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa5Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[5] = [];
          tempoMatrix[fa5Rules[2]] = matrix[5];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa5Rules[3]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[5] = [];
          tempoMatrix[fa5Rules[3]] = matrix[5];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 6:
        //onst fa6Rules = [2, 7, 10, 5];
        if (matrix[fa6Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[6] = [];
          tempoMatrix[fa6Rules[0]] = matrix[6];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa6Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[6] = [];
          tempoMatrix[fa6Rules[1]] = matrix[6];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa6Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[6] = [];
          tempoMatrix[fa6Rules[2]] = matrix[6];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa6Rules[3]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[6] = [];
          tempoMatrix[fa6Rules[3]] = matrix[6];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 7:
        //const fa7Rules = [3, 6, 11];
        if (matrix[fa7Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[7] = [];
          tempoMatrix[fa7Rules[0]] = matrix[7];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa7Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[7] = [];
          tempoMatrix[fa7Rules[1]] = matrix[7];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa7Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[7] = [];
          tempoMatrix[fa7Rules[2]] = matrix[7];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 8:
        //const fa8Rules = [4, 9, 12];
        if (matrix[fa8Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[8] = [];
          tempoMatrix[fa8Rules[0]] = matrix[8];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa8Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[8] = [];
          tempoMatrix[fa8Rules[1]] = matrix[8];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa8Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[8] = [];
          tempoMatrix[fa8Rules[2]] = matrix[8];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 9:
        //const fa9Rules = [5, 10, 13, 8];
        if (matrix[fa9Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[9] = [];
          tempoMatrix[fa9Rules[0]] = matrix[9];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa9Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[9] = [];
          tempoMatrix[fa9Rules[1]] = matrix[9];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa9Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[9] = [];
          tempoMatrix[fa9Rules[2]] = matrix[9];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa9Rules[3]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[9] = [];
          tempoMatrix[fa9Rules[3]] = matrix[9];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 10:
        //const fa10Rules = [6, 11, 14, 9];
        if (matrix[fa10Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[10] = [];
          tempoMatrix[fa10Rules[0]] = matrix[10];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa10Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[10] = [];
          tempoMatrix[fa10Rules[1]] = matrix[10];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa10Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[10] = [];
          tempoMatrix[fa10Rules[2]] = matrix[10];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa10Rules[3]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[10] = [];
          tempoMatrix[fa10Rules[3]] = matrix[10];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 11:
        //const fa11Rules = [7, 10, 15];
        if (matrix[fa11Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[11] = [];
          tempoMatrix[fa11Rules[0]] = matrix[11];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa11Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[11] = [];
          tempoMatrix[fa11Rules[1]] = matrix[11];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa11Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[11] = [];
          tempoMatrix[fa11Rules[2]] = matrix[11];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 12:
        //console.log("ASASDASDASDASDDSA");
        //const fa12Rules = [8, 13];
        if (matrix[fa12Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[12] = [];
          tempoMatrix[fa12Rules[0]] = matrix[12];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa12Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[12] = [];
          tempoMatrix[fa12Rules[1]] = matrix[12];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 13:
        //const fa13Rules = [9, 14, 12];
        console.log("ASASDASDASDASDDSA");
        if (matrix[fa13Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[13] = [];
          tempoMatrix[fa13Rules[0]] = matrix[13];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa13Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[13] = [];
          tempoMatrix[fa13Rules[1]] = matrix[13];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa13Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[13] = [];
          tempoMatrix[fa13Rules[2]] = matrix[13];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 14:
        if (matrix[fa14Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[14] = [];
          tempoMatrix[fa14Rules[0]] = matrix[14];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa14Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[14] = [];
          tempoMatrix[fa14Rules[1]] = matrix[14];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa14Rules[2]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[14] = [];
          tempoMatrix[fa14Rules[2]] = matrix[14];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      case 15:
        //const fa15Rules = [11, 14];
        if (matrix[fa15Rules[0]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[15] = [];
          tempoMatrix[fa15Rules[0]] = matrix[15];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        } else if (matrix[fa15Rules[1]].length === 0) {
          const tempoMatrix = [...matrix];
          tempoMatrix[15] = [];
          tempoMatrix[fa15Rules[1]] = matrix[15];
          setMoves(moves + 1);
          setMatrix(tempoMatrix);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {!won && (
        <ImageList className={classes.flexContainer}>
          <ImageListItem key="Subheader" cols={4}>
            <ListSubheader component="div"></ListSubheader>
          </ImageListItem>
          {/* Here the 16 boxes */}
          <SingleBox
            position={0}
            iconNmber={matrix[0]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={1}
            iconNmber={matrix[1]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={2}
            iconNmber={matrix[2]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={3}
            iconNmber={matrix[3]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={4}
            iconNmber={matrix[4]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={5}
            iconNmber={matrix[5]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={6}
            iconNmber={matrix[6]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={7}
            iconNmber={matrix[7]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={8}
            iconNmber={matrix[8]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={9}
            iconNmber={matrix[9]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={10}
            iconNmber={matrix[10]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={11}
            iconNmber={matrix[11]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={12}
            iconNmber={matrix[12]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={13}
            iconNmber={matrix[13]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={14}
            iconNmber={matrix[14]}
            onClick={singleBoxClickEventHandler}
          />
          <SingleBox
            position={15}
            iconNmber={matrix[15]}
            onClick={singleBoxClickEventHandler}
          />
        </ImageList>
      )}
      {won && (
        <div>
          <div style={{ color: "white", paddingTop: "17%", fontSize: "60px" }}>
            <Flash forever>
              <h1>YOU WON !</h1>
            </Flash>
          </div>
          <div style={{ color: "white", paddingTop: "0%", fontSize: "27px" }}>
            <h3>Game summary:</h3>
            <br />
            <ul>
              <li>Total Moves: {moves}</li>
            </ul>
          </div>
        </div>
      )}
    </Box>
  );
};

export default MainGrid;
