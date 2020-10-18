import React from "react";
import Popover from "@material-ui/core/Popover";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px;
`;

const Para = styled.p`
  paddig-bottom: 3px;
  border-bottom: 1px solid #ddd;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(1),
    },
  })
);

const Avatar: React.FunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <img
        src={"https://avatars2.githubusercontent.com/u/31888467?s=60&v=4"}
        width="20"
        height="20"
        alt="sub"
      /> */}
      <div>
        <img
          src={"https://avatars2.githubusercontent.com/u/31888467?s=60&v=4"}
          width="20"
          height="20"
          alt="sub"
          onClick={handleClick}
        />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Wrapper>
            <Para>My Profile</Para>
            <Para>Settings</Para>
            <Para>Sign Out</Para>
          </Wrapper>
        </Popover>
      </div>
    </div>
  );
};

export default Avatar;
