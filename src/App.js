import articles from "./hackerNoonArticles";
import './App.css';

const Card = props => {
  console.log(props.title)

  return (
    <div className="card-container">
      <div>
        <h2 className="card-title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <div>{articles.Programming[0].titleText}</div>
        </Card>
        <Card>
          <div>{articles.Programming[0].titleLink}</div>
        </Card>
      </header>
    </div>
  );
}

export default App;
