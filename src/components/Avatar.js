import React from "react";
import { Part } from "./Part";
import { LIST_PARTS } from "../constant";

const Avatar = (props) => {
  return (
    <div className="avatar">
      {LIST_PARTS.map((item, index) => {
        return (
          <Part
            key={item.id}
            path={item.path}
            index={props[item.id]}
            zIndex={index}
          />
        );
      })}
    </div>
  );
};

export default Avatar;
