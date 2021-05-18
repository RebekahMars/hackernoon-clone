function Footer()
{
    return(
        <div className="footer-container">
            <div className="footer-left">
                <div className="about-footer">
                    <h2 className="footer-title">ABOUT</h2>
                    <ul className="footer-links">
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Cookies</li>
                        <li>Help</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="read-footer">
                    <h2 className="footer-title">READ</h2>
                    <ul className="footer-links">
                        <li>Archive</li>
                        <li>Leaderboard</li>
                        <li>Signup</li>
                        <li>Tech Brief</li>
                        <li>Tech Tags</li>
                        <li>Tech Stories</li>
                    </ul>
                </div>
                <div className="write-footer">
                    <h2 className="footer-title">WRITE</h2>
                    <ul className="footer-links">
                        <li>Distribution</li>
                        <li>Editor Tips</li>
                        <li>Guidelines</li>
                        <li>New Story</li>
                        <li>Perks</li>
                        <li>Why Write</li>
                    </ul>
                </div>
                <div className="sponser-footer">
                    <h2 className="footer-title">SPONSER</h2>
                    <ul className="footer-links">
                        <li>Brand Publishing</li>
                        <li>Case Studies</li>
                        <li>Niche Marketing</li>
                        <li>Newsletter</li>
                        <li>Sitewide Billboard</li>
                        <li>Writing Contests</li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                <div className="newletter-footer">
                    <h2 className="footer-title">THE HACKER NOON NEWSLETTER</h2>
                    <p className="footer-text">Quality Weekly Reads About Technology Infilitrating Everything</p>
                    <div className="footer-search">
                        <input type="search" className="search" placeholder="name@company.com"></input>
                        <button type="submit" className="footer-button">Subscribe free</button>
                    </div>
                    <input type="radio" className="subscribe"></input>
                    <label for="subscribe">Yes, I agree to receive emails about tech eating the world.</label>
                    <div className="social-media">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;