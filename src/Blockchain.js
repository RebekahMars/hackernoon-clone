import articles from "./hackerNoonArticles";
import "./Card.css";

/*Blockchain Card Element*/
export function Blockchain() {
    return (
        <div className="blockchain-card">
            <div className="card-title">
                <h2>Blockchain</h2>
            </div>
            <div className="card">
                {articles.Blockchain.map((article, index) => 
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

export default Blockchain;