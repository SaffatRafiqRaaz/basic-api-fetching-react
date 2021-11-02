import { Card, CardActionArea, Grid, Typography } from "@mui/material";

import React, { useEffect, useRef, useState } from "react";
import classes from "./Article.module.css";
import GamepadRoundedIcon from "@mui/icons-material/GamepadRounded";

function hovcol() {
  document.documentElement.style.setProperty(
    "--mycolor",
    "rgb(" +
      (Math.random() * 154 + 100) +
      "," +
      (Math.random() * 154 + 100) +
      "," +
      (Math.random() * 154 + 100) +
      ")"
  );
}

const Article = () => {
  const [state, setState] = useState([]);
  const [apistate, setapistate] = useState("posts");
  const btnref = useRef(null);
  const mousestatus = useRef(null);

  function apichange(calledapi) {
    if (apistate !== calledapi) setapistate(calledapi);
  }

  function mfunc() {
    console.log(mousestatus.current);
    hovcol();
  }

  console.log("Starting state:" + state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + apistate)
      .then((res) => res.json())
      .then((jsn) => {
        setState(jsn);

        console.log("Fetched data: " + jsn);

        console.log("After fetching:" + items);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apistate]);

  const items = [];
  let n = 0;
  let m = 0;
  state.forEach((element) => {
    m++;
    const l = [];
    Object.entries(element).forEach((k) => {
      n++;
      l.push(
        <li
          style={{
            listStyle: "none",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          key={n}
        >
          <GamepadRoundedIcon style={{ fontSize: "8px" }} />

          <Typography variant="caption">
            &emsp;<strong>{k[0]}</strong> : {k[1]}
          </Typography>
        </li>
      );
    });

    items.push(
      <Grid
        item
        key={m}
        maxWidth={"100vh"}
        style={{ padding: "24px" }}
        ref={mousestatus}
        onMouseLeave={() => mfunc()}
      >
        <Card
          style={{
            maxWidth: "250px",
            minWidth: "250px",
          }}
          className={classes.wow}
        >
          <CardActionArea style={{ padding: "10px" }}>
            <Typography
              variant="overline"
              width="100%"
              justifyContent="center"
              display="flex"
              fontWeight="bold"
              fontFamily="monospace"
              style={{ textShadow: "0px 1px 5px #ec00ff" }}
            >
              {apistate}
            </Typography>
            <ul style={{ paddingLeft: "20px" }}>{l}</ul>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  console.log("Got items: " + items);

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        style={{ width: "70%" }}
        direction="row"
        spacing={3}
        margin={0}
        marginTop={4}
      >
        <button
          className={classes.btn}
          ref={btnref}
          variant="contained"
          onClick={() => apichange("posts")}
        >
          Posts
        </button>
        <button
          className={classes.btn}
          ref={btnref}
          variant="contained"
          onClick={() => apichange("comments")}
        >
          Comments
        </button>
        <button
          className={classes.btn}
          ref={btnref}
          variant="contained"
          onClick={() => apichange("albums")}
        >
          Albums
        </button>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        style={{ width: "70%" }}
        direction="row"
        spacing={3}
        margin={0}
      >
        {items}
      </Grid>
    </Grid>
  );
};

export default Article;
