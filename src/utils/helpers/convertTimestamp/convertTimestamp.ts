export const convertTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
};