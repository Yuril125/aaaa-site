import React from "react";
import { h1, h2, p, subsectionWrapper } from "../styles/styles";
import { formatTitleToID } from "../utils/format";

export const PageSection = (props) => {
    return (
       <div id={props.title ? formatTitleToID(props.title) : formatTitleToID(props.subtitle)} style={{
        width: "100%",
        margin: 10,
        padding: 5,
      }}>
        {props.title && <div style={h1}>
            {props.title}
        </div>} 
        {props.subtitle && <div style={h2}>
            {props.subtitle}
        </div>} 
        {props.content && <div style={p}>
            {props.content}
        </div>} 
        <div style={subsectionWrapper}>
            {props.children /* Images, lists, etc. can go here */ } 
        </div>
      </div>
    );
}
