
const styles = {
    img: {
        height: "200px",
        width: "200px"
    }
}

const Dog = ({url})  => {
        return <img src={url} alt="Dog Pic" style={styles.img}/>
}


export default Dog; 

// const Dog = ({url}) => {
//     return <img src={url}  alt= "Dog Pic" />
// }