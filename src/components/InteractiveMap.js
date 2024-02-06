import { useState } from "react";
import { subsectionWrapper } from "../styles/styles";
import { formatAddressForURL } from "../utils/format";

export const InteractiveMap = (props) => {
    const [locationIndex, setLocationIndex] = useState(0);
    const iframeUrl = "https://www.google.com/maps/embed/v1/place?key=&q=" + formatAddressForURL(props.locations[locationIndex].address);
    return (<div style={subsectionWrapper}>
        <iframe>
            <iframe
                width="600"
                height="450"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={iframeUrl}>
            </iframe>
        </iframe>
        <ul>
            {props.locations.map((location, index) => {
                return (<div onMouseDown={(e) => {
                    setLocationIndex(index);
                }}>
                    <a href={location.siteLink}>{location.name}</a>
                </div>);
            })}
        </ul>
    </div>);
}
