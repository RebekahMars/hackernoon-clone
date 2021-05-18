import {Link} from 'react-scroll'

function Heading()
{
    return(
        <header>
             <div className="header-top">
          <div className="header-top-left">
            <h2>HACKERNOON</h2>
          </div>
          <div className="header-top-right">
            <input type="search" className="header-search" placeholder="Search..."></input>
            <button type="submit" className="writing-button">Start Writing</button>
            <button type="submit" className="log-in-button">Log in</button>
          </div>
        </div>
        <div className="header-bottom">
            <p><Link activeClass="active" to="programming-card" spy={true} smooth="{true}">Programming</Link></p>
            <p><Link to="technology-card" spy={true} smooth="{true}">Technology</Link></p>
            <p><Link to="crypto-card" spy={true} smooth="{true}">Cryptocurrency</Link></p>
            <p><Link to="java-card" spy={true} smooth="{true}">Javascript</Link></p>
            <p><Link to="python-card" spy={true} smooth="{true}">Python</Link></p>
            <p><Link to="blockchain-card" spy={true} smooth="{true}">Blockchain</Link></p>
            <p><Link to="gaming-card" spy={true} smooth="{true}">Gaming</Link></p>
            <p><Link to="Ai-card" spy={true} smooth="{true}">AI</Link></p>
            <p><Link to="startup-card" spy={true} smooth="{true}">Startup</Link></p>
            <p><Link to="react-card" spy={true} smooth="{true}">React</Link></p>
            <p><Link to="security-card" spy={true} smooth="{true}">Security</Link></p>
            <p><Link to="slog-card" spy={true} smooth="{true}">Slogging</Link></p>
            <p><Link to="podcast-card" spy={true} smooth="{true}">Hackernoon Podcast</Link></p>
            <p><Link to="decentralization-card" spy={true} smooth="{true}">Decentralization</Link></p>
            <p><Link to="velo-card" spy={true} smooth="{true}">Velo</Link></p>
            <p><Link to="hackernoon-card" spy={true} smooth="{true}">Hackernoon</Link></p>
            <p><Link to="internet-card" spy={true} smooth="{true}">Decentralized Internet</Link></p>
            <p><Link to="software-card" spy={true} smooth="{true}">Software Development</Link></p>
        </div>
        </header>
    )
}
export default Heading