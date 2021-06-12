export const apiURL = () => {
    // development // production // test

    // if (window.location.hostname === 'localhost') {
    // } 
    if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
        return 'http://localhost:3001'
    }  
    return null;
}

// google.com
// //localhost:3002

// `${window.location.hostname}/bookmarks`