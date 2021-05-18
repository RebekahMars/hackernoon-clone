function HackerAbout()
{
    return(
        <div className="about-section">
            <div className="tab-titles">
                <button className="about-button">For Readers</button>
                <button className="about-button">For Writers</button>
                <button className="about-button">For Sponsers</button>
                <button className="about-button">About Us</button>
            </div>
            <div className="table-text-section">
                <p className="tabletext">Hacker Noon reflects the technology industry with unfettered stories and opinions writeen by real tech professionals.
                    We believe we can get closer to the truth by elevating thousands of voices. To the reader, we pldge no paywall, no 
                    pop up ads, and evergreen (get it?) content. Learn how hackers start their afternoons on Hacker Noon.
                </p>
                <button type="submit" className="table-text-button"></button>
            </div>
        </div>
    )
}

export default HackerAbout;