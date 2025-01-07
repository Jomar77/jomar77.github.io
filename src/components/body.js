import React from 'react';

function Body() {
    return (
        <div>

            
            <div id="wrapper">

                <header id="header" className="alt">
                    <a href="index.html" className="logo"
                    ><strong> The Jomar</strong> <span>Project</span></a
                    >
                    <nav>
                        <a href="#menu">Menu</a>
                    </nav>
                </header>


                <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                    </ul>
                </nav>


                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>Hello there! my name is Jomar</h1>
                        </header>
                        <div className="content">
                            <p>Here is a compilation of the projects I made starting 2021.</p>

                            <ul className="actions">
                                <li>
                                    <a href="#one" className="button next scrolly">Get Started</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                <div id="main">
                    <section id="banner-container">
                        <div onclick="moveBanner('backward')"><p>&lt;</p></div>
                        <div className="banner-content">

                            <div className="banner-image">
                                <img id="banner-image" src="./images/pic01.png" alt="" />
                            </div>
                            <div className="title">
                                <p id="banner-title">New Zealand Map App</p>
                            </div>
                            <div className="text">
                                <p id="banner-text">
                                    Soon to be updated if sisipagin tsaka may pera :D. I hope you
                                    enjoyed! *Heavily* based from Denz's Project↗.
                                </p>
                            </div>
                            <a className="project-link-className" id="project-link" href="https://nz-map-app.vercel.app/">
                                <div className="banner-button">explore</div>
                            </a>
                        </div>
                        <div onclick="moveBanner('forward')"><p>&gt;</p></div>
                    </section>


                    <section id="one" className="tiles">
                        <article>
                            <span className="image">
                                <img src="images/2024.jfif" alt="" />
                            </span>
                            <header className="major">
                                <h3><a href="2024.html" className="link">2024 Projects</a></h3>
                                <p>Database and software engineering</p>
                            </header>
                        </article>
                        <article>
                            <span className="image">
                                <img src="images/2023.png" alt="" />
                            </span>
                            <header className="major">
                                <h3><a href="2023.html" className="link">2023 Projects</a></h3>
                                <p>Deployment of websites and data Analytics</p>
                            </header>
                        </article>
                        <article>
                            <span className="image">
                                <img src="images/2022.png" alt="" />
                            </span>
                            <header className="major">
                                <h3><a href="2022.html" className="link">2022 Projects</a></h3>
                                <p>A mix of web development and data analytics</p>
                            </header>
                        </article>
                        <article>
                            <span className="image">
                                <img src="images/2021.png" alt="" />
                            </span>
                            <header className="major">
                                <h3><a href="2021.html" className="link">2021 Projects</a></h3>
                                <p>The year where it all began</p>
                            </header>
                        </article>

                    </section>


                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About me</h2>
                            </header>
                            <p align="center">
                                I'm a data enthusiast with a passion for renewables and green
                                tech! Armed with a bachelor's degree in Computer Science and a New
                                Zealand Certificate in Information Technology (Level 5), I have
                                experience utilizing Machine Learning, Power BI, and ArcGIS to
                                extract valuable insights from complex datasets. From SWOT
                                analysis to collecting B2B leads, I'm eager to put my skills to
                                work in support of the sustainability movement. Let's collaborate
                                on data-driven solutions to help make the world a greener place!
                            </p>
                        </div>
                    </section>
                </div>


                <section id="contact">
                    <div className="inner">
                        <section>
                            <form method="post" action="#">
                                <div className="fields">
                                    <div className="field half">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className="field half">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" />
                                    </div>
                                    <div className="field">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" rows="6"></textarea>
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send Message" className="primary" />
                                    </li>
                                    <li><input type="reset" value="Clear" /></li>
                                </ul>
                            </form>
                        </section>
                        <section className="split">
                            <section>
                                <div className="contact-method">
                                    <span className="fa icon alt fa-envelope"></span>
                                    <h3>Email</h3>
                                    <a href="#">jom.nacorda@gmail.com</a>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="fa icon solid alt fa-phone"></span>
                                    <h3>Phone</h3>
                                    <span>0274271263</span>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="fa icon solid alt fa-home"></span>
                                    <h3>Address</h3>
                                    <span>Christchurch, NZ</span>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>


                <footer id="footer">
                    <div className="inner">
                        <ul className="icons">
                            <li>
                                <a
                                    href="https://twitter.com/_Cosmeownaut"
                                    className="fa brands icon solid alt fa-twitter"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/_cheshire.art/"
                                    className="fa brands icon solid alt fa-instagram"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Jomar77"
                                    className="fa brands icon solid alt fa-github"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/jomnacorda/"
                                    className="fa brands icon solid alt fa-linkedin"
                                ></a>
                            </li>
                        </ul>
                    </div>
                </footer>


                <script src="js\script.js"></script>
                <script src="js\jquery.min.js"></script>
                <script src="js\jquery.scrolly.min.js"></script>
                <script src="js\jquery.scrollex.min.js"></script>
                <script src="js\browser.min.js"></script>
                <script src="js\breakpoints.min.js"></script>
                <script src="js\util.js"></script>
                <script src="js\main.js"></script>
                <script src="js\j.js"></script>
            </div>

        </div>
    )
}

export default Body;