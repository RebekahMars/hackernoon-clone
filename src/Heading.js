function Heading()
{
    return(
        <header>
             <div className="header-top">
          <div className="header-top-left">
            <h2>HACKERNOON</h2>
          </div>
          <div className="header-top-right">
            <input type="search"></input>
            <button type="submit">Start Writing</button>
            <button type="submit">Log in</button>
          </div>
        </div>
        <div className="header-bottom">
          <p>Read</p>
          <p>Top Stories</p>
          <p>Write</p>
          <p>Listen</p>
          <p>Live</p>
          <p>Advertise</p>
          <p>About</p>
          <p>Tech Companies</p>
          <p>Slogging</p>
          <p>Help</p>
        </div>
        </header>
    )
}
export default Heading