import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
function HackerAbout()
{
    return(
        <div className="about-section">
            <div className="tab-titles">
                <Tabs>
                    <TabList className="tab-titles">
                        <Tab className="tabs">For Readers</Tab>
                        <Tab className="tabs">For Writers</Tab>
                        <Tab className="tabs">For Sponsers</Tab>
                        <Tab className="tabs">About Us</Tab>
                    </TabList>
                    <TabPanel> 
                        <p className="tab-text">Hacker Noon reflects the technology industry with unfettered stories and opinions written by real tech professionals.
                        We believe we can get closer to the truth by elevating thousands of voices. To the reader, we pldge no paywall, no 
                        pop up ads, and evergreen (get it?) content. Learn how hackers start their afternoons on Hacker Noon.
                        </p>
                        <button>Create Hacker Noon Account</button>
                    </TabPanel>
                    <TabPanel>
                        <p className="tab-text">Hacker Noon elevates tech writing far and wide across the interwebs. With 25k+ stories in our library, we’ve cultivated 
                        rare publishing and technology expertise. We believe tech infiltrates all aspects of life, so writers from all industries are 
                        welcome here. To the contributing writer, we pledge quality distribution, editorial expertise and community access.
                        </p>
                        <button>Submit a Tech Story</button>
                    </TabPanel>
                    <TabPanel>
                        <p className="tab-text">Hacker Noon partners with companies that build cool products and employ people worth publishing. To sponsors, we currently 
                            offer sitewide billboard, brand-as-author stories, podcast placements, and events. Sponsors keep Hacker Noon free for readers 
                            forever and add to the reading experience rather than distracting from it. Sponsoring Hacker Noon is great way to make a positive 
                            impression on tech’s brightest minds.
                        </p>
                        <button>Sponser Hacker Noon</button>
                    </TabPanel>
                    <TabPanel>
                        <p className="tab-text">
                        Hacker Noon is an independent technology publication with the tagline, how hackers start their afternoons. Founded in 2016 and run by 
                        David Smooke and Linh Dao Smooke, Hacker Noon is one of the fastest growing tech publications with 7,000+ contributing writers, 200,000+ 
                        daily readers and 8,000,000+ monthly pageviews. Our traffic is ranked in the top 5K of all websites worldwide and in the top 3k of all US 
                        websites by Alexa. We publish ≈ 20 stories per day from around the internet.
                        </p>
                        <button>Learn More About Us</button>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
        // <div className="about-section">
        //     <div className="tab-titles">
        //         <button className="about-button">For Readers</button>
        //         <button className="about-button">For Writers</button>
        //         <button className="about-button">For Sponsers</button>
        //         <button className="about-button">About Us</button>
        //     </div>
        //     <div className="table-text-section">
        //         <p className="tabletext">Hacker Noon reflects the technology industry with unfettered stories and opinions written by real tech professionals.
        //             We believe we can get closer to the truth by elevating thousands of voices. To the reader, we pldge no paywall, no 
        //             pop up ads, and evergreen (get it?) content. Learn how hackers start their afternoons on Hacker Noon.
        //         </p>
        //         <button type="submit" className="table-text-button"></button>
        //     </div>
        // </div>
    )
}

export default HackerAbout;