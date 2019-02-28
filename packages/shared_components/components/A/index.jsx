import React from "react";

const styles = {
  a: {
    color: "white",
    display: "block",
    border: "1px solid #d3d3d3",
    borderRadius: "2px",
    background: "black",
    padding: "10px",
    textDecoration: "none"
  }
};

function A(props) {
  return (
    <a {...props} style={styles.a}>
      {props.children}
    </a>
  );
}

export default A;
