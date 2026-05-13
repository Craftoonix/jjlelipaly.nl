
function getFavicon(href, size = 16) {  
    const domain = new URL(href).hostname;  
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

export default getFavicon