import React from "react";
import { h3, subsectionWrapper } from "../styles/styles";

export const Gallery = (props) => {
    return (
        <div>
            <div style={h3}>
                {props.galleryName}
            </div>
            <div style={subsectionWrapper}>
                {props.imageUrls.map((imageUrl) => {
                    return <div>
                        <img src={"%PUBLIC_URL%" + imageUrl}></img>
                    </div>;
                })}
            </div>
        </div>
    );
}
