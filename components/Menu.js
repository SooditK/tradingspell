import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  marginLeft: "15px",
});

const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MyButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Important Links
      </MyButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a href="https://www.tradingspell.com/">Home</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://tradingspell.graphy.com/">Join Graphy Community</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://wa.me/+916395657006">Contact Us</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.tradingspell.com/testimonials.html">
            Testimonials
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SimpleMenu;
