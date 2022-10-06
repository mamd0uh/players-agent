const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                <div className="line">
                        <header>
                         <nav role="navigation">
                         <h1>Player's Agent</h1>
                        <ul className="nav-ul">
                        <li><a href={`/${this.props.group}`}>Home</a></li>
                        <li><a href="/players/new">Register</a></li>
                        <li><a href="/players/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    </header>
                    </div>
                    {this.props.children}
                </body>

                <footer>
                <p className="copy">&copy; Mamdouh Elmallah 2022 — Per Scholas </p>
                </footer>
                <div className="line"></div>


            </html>
        )
    }
}

module.exports = DefaultLayout;