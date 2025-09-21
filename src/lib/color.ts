export function stringToColor(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const value = (hash >> (i * 5)) & 0xff;
        color += ("00" + value.toString(16)).slice(-2).substring(0, 1);
    }
    return color;
}


export function stringToGray(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; 
    }

    const gray = 150 + (Math.abs(hash) % 70); 

    const hex = gray.toString(16).padStart(2, "0");
    return `#${hex}${hex}${hex}`;
}
