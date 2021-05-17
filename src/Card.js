import articles from "./hackerNoonArticles"
import "./Card.css"

/*Title element --> need to add the link to the title*/
export const Article = props => {
    return (
        <div className="ArticleTitle">
            <h2 className="card-title" a href={props.titleLink}>{props.titleText}</h2> 
        </div>
    );
}

/*Avatar element*/
export const Avatar = props => {
    return (
        <img 
        className="Avatar"
        src={props.avatarSrc}
        alt={props.userName}
        />
    );
}

/*Author Information*/
export const Author = props => {
    return (
        <div className="AuthorInfo">
            <div className="AuthorInfo-text-left">
                <p>{props.userName}</p>
                <p>{props.author}</p>
            </div>
            <div className="AuthorInfo-text-right">
                <p>{props.readIn}</p>
                <p>{props.posted}</p>
            </div>
        </div>
    )
}

// /*Individual card element for HackerNoon page */
// export const Card = props => {
//     console.log(props.title)
  
//     return (
//       <div className="card-container">
//         <div>
//           <h2 className="card-title">{props.title}</h2>
//           {props.children}
//         </div>
//       </div>
//     );
//   }


