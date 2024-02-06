import React from "react";
import { h3, p } from "../styles/styles";
import { formatDateTime } from "../utils/format";


export const UpcomingEvent = (props) => {
    return (
        <div>
            <div style={h3}>
                {props.eventName}
            </div>
            <div style={p}>
                {formatDateTime(props)}
            </div>
            <div style={p}>
                {props.description}
            </div>
        </div>
    );
}
