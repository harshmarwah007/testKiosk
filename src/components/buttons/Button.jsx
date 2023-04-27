import React from "react";
import { Button } from "antd";

const ButtonCustom = (props) => {
  return (
    <Button
      style={{
        width: props.width,
        height: props.height,
        background: props.buttonType == "primary" ? "#FFC700" : "#FFFFFF",
        borderRadius: "10px",
        margin: "10px",
        border: "none",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {props.text}
    </Button>
  );
};

export default ButtonCustom;
