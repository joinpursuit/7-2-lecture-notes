export const apiURL = () => {
    // if (window.location.hostname === 'localhost')
    if ( //THESE ARE THE THREE OPTIONS :: development  production  test
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
        return 'http://localhost:3001'
    }  
    return null;
}