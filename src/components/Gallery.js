import React from "react";
import { h3, imageWrapper, subsectionWrapper, galleryWrapper, imageInnerWrapper } from "../styles/styles";

export const Gallery = (props) => {
    return (
        <div>
            <div style={h3}>
                {props.galleryName}
            </div>
            <div style={{...subsectionWrapper, ...galleryWrapper}}>
                {props.imageUrls.map((imageUrl) => {
                    return (
                        <div style={imageWrapper}>
                            <img src={imageUrl} style={imageInnerWrapper} alt=""></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
