import articles from "./hackerNoonArticles";
import "./Card.css"

/*Security Card Element*/
export function Security() {
    return (
        <div className="security-card">
            <div className="card-title">
                <h2>Security</h2>
            </div>
            <div className="card">
                {articles.Security.map((article, index) => 
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

export default Security;