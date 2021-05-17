import articles from "./hackerNoonArticles.js"
import "./Card.css"

/*Title element --> need to add the link to the title*/
export const Article = props => {
    return (
        <div className="ArticleTitle">
            {articles.Programming.map((article, index) =>
            <div key={index}>
                <h2 a href={article.titleLink}>{article.titleText}</h2>
            </div>)} 
        </div>
    );
}

function Card() {
    return (
    <div className="articles">
        {articles.Programming.map((article, index) =>
        <div key={index}>
            <h2>{article.titleText}</h2>
            <p>{article.author}</p>
        </div>)}
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


/*Programming Card Element*/
export function Programming() {
    return (
        <div className="programming-card">
            <div className="card-title">
                <h2>Programming</h2>
            </div>
            <div className="card">
                {articles.Programming.map((article, index) => 
                <div className="card-body" key={index}>
                    <h2 className="article-title">{article.titleText}</h2>
                    <div className="Avatar">
                        <div>
                            <img src={article.avatarSrc}></img>
                        </div>
                        <div className="card-text-left">
                            <p>{article.userName}</p>
                            <p>{article.author}</p>
                        </div>
                        <div className="card-text-right">
                            <p>{article.readIn}</p>
                            <p>{article.posted}</p> 
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Programming;

