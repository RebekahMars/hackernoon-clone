import articles from "./hackerNoonArticles";
import "./Card.css"

/*Software Development Card Element*/
export function Software() {
    return (
        <div className="software-card">
            <div className="card-title">
                <h2>Software Development</h2>
            </div>
            <div className="card">
                {articles["Software Development"].map((article, index) => 
                <div className="card-body" key={index}>
                     <a href={article.titleLink} className="article-title">{article.titleText}</a>
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

export default Software;