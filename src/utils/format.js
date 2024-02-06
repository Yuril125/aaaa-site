export const formatDateTime = ({day, month, year, beginHour, beginMinute, endHour, endMinute}) => {
    return [day.toString(), month.toString(), year.toString()].join("/") 
        + " From " 
        + formatTimeWithAmPm({hour: beginHour, minute: beginMinute})
        + " To "
        + formatTimeWithAmPm({hour: endHour, minute: endMinute});
}

export const formatTimeWithAmPm = ({hour, minute}) => {
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${amPm}`;
};

export const formatAddressForURL = (address) => {
    // First, trim leading and trailing spaces from the address
    let trimmedAddress = address.trim();
    
    // Use encodeURIComponent to ensure the address is URL-safe
    return encodeURIComponent(trimmedAddress);
}

export const formatTitleToID = (title) => {
    console.log(title);
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '');
}
