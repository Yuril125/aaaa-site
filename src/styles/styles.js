import { rgbToHex } from "../utils/colors";

export const h1 = { // Header 1
    fontSize: 36,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 5,
    color: rgbToHex([0, 0, 0]),
};

export const h2 = { // Header 2
    fontSize: 20,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 5,
    color: rgbToHex([0, 0, 0]),
};

export const h3 = { // Header 3
    fontSize: 16,
    fontWeight: 400,
    marginTop: 15,
    marginBottom: 15,
    color: rgbToHex([40, 40, 40]),
};

export const p = { // Paragraph
    fontSize: 12,
    fontWeight: 400,
    marginTop: 30,
    marginBottom: 5,
    color: rgbToHex([20, 20, 20]),
};

export const listStyle = { // Paragraph
    fontSize: 12,
    fontWeight: 400,
    marginTop: 30,
    marginBottom: 30,
    color: rgbToHex([20, 20, 20]),
};


export const pageWrapper = {
    borderStyle: "solid 1px black", // Debug
    margin: 8,
};

export const subsectionWrapper = {
    borderStyle: "solid 1px black", // Debug
    margin: 8,
};

export const galleryWrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Adjusts spacing around items
}

export const navButtonWrapper = {
    borderStyle: "solid 1px black", // Debug
    margin: 5,
    padding: 10,
    fontSize: 12,
    textAlign: "center",
    minHeight: 100,
    maxWidth: 200,
}

export const navIconWrapper = {
    borderStyle: "solid 1px black", // Debug
    margin: 5,
    padding: 20,
    minHeight: 80,
    minWidth: 80,
    maxHeight: 640,
}

export const navbarWrapper = {
    position: 'fixed',
    top: 0,
    minHeight: 150,
    width: "100%",
    backgroundColor: rgbToHex([255, 255, 255]),
    zIndex: 100,
}

export const imageWrapper = {
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    maxWidth:250,
    maxHeight:250,
};

export const imageInnerWrapper = {
    width: 250,
    height: 250,
}

export const calendarWrapper = {
    borderStyle: "solid 1px black", // Debug
    margin: 5,
    maxHeight: 640,
}
