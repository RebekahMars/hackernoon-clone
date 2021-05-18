import articles from "./hackerNoonArticles";
import "./Card.css"

/*Technology Card Element*/
export function Technology() {
    return (
        <div className="technology-card">
            <div className="card-title">
                <h2>Technology</h2>
            </div>
            <div className="card">
                {articles.Technology.map((article, index) => 
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

export default Technology;