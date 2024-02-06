export const rgbToHex = ([r, g, b]) => {
    const clamp = (value) => Math.max(0, Math.min(255, value));
    return "#" + [r, g, b].map((color) => {
        const hex = clamp(color).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
};

export const interpolateRGB = (rgb1, rgb2, weight) => {
    // Clamp the weight between 0 and 1
    weight = Math.max(0, Math.min(1, weight));
    
    // Interpolate each component
    const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * weight);
    const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * weight);
    const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * weight);
    
    return [r, g, b];
};