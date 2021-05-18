import articles from "./hackerNoonArticles";
import "./Card.css"

/*Startup Card Element*/
export function Startup() {
    return (
        <div className="startup-card">
            <div className="card-title">
                <h2>Startup</h2>
            </div>
            <div className="card">
                {articles.Startup.map((article, index) => 
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

export default Startup;