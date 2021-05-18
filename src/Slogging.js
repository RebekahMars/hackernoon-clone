import articles from "./hackerNoonArticles";
import "./Card.css"

/*Slogging Card Element*/
export function Slogging() {
    return (
        <div className="slog-card">
            <div className="card-title">
                <h2>Slogging</h2>
            </div>
            <div className="card">
                {articles.Slogging.map((article, index) => 
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

export default Slogging;