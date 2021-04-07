import React from "react";

// const Post = ({title, body}) => {
//     return(
//         <div>
//             <h2>{title}</h2>
//             <p>{body}</p>
//         </div>
//     )
// }

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body } = this.props; // when using class componenets must write
    // this.
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
