import React from "react";
import { calendarWrapper, h3, subsectionWrapper } from "../styles/styles";

export const Calendar = (props) => {
    return (
        <div style={calendarWrapper}>
            <div style={h3}>
                {props.calendarName}
            </div>
            <iframe src={props.calendarUrl} width="800" height="600" frameborder="0">
            </iframe>
        </div>
    );
}
