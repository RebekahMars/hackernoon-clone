import articles from "./hackerNoonArticles"
import "./Card.css"

/*Javascript Card Element*/
export function Javascript() {
    return (
        <div className="java-card">
            <div className="card-title">
                <h2>Javascript</h2>
            </div>
            <div className="card">
                {articles.Javascript.map((article, index) => 
                <div className="card-body" key={index}>
                    <a href={article.titleLink} className="article-title">{article.titleText}</a>
                    <div><button type="submit" className="hash-tag">{article.hashTag}</button></div>
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

export default Javascript;