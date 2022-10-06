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
                <div className="line"></div>
                        <header>
                         <nav role="navigation">
                         <h1>Player's Agent</h1>
                        <ul className="nav-ul">
                        <li><a href={`/${this.props.group}`}>Home</a></li>
                        <li><a href="/players/new">Register</a></li>
                        <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                    </header>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;