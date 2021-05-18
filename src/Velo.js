import articles from "./hackerNoonArticles";
import "./Card.css"

/*Velo Card Element*/
export function Velo() {
    return (
        <div className="velo-card">
            <div className="card-title">
                <h2>Velo</h2>
            </div>
            <div className="card">
                {articles.Velo.map((article, index) => 
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

export default Velo;