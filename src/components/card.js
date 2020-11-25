import React from "react";
import { CardPanel } from "react-materialize";

export default function CustomCard({ children }) {
  return (
    <CardPanel className=" hoverable z-depth-1">
      <span className="white-text">{children}</span>
    </CardPanel>
  );
}
