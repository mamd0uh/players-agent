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
                <div class="line"></div>
                        <header>
                         <nav role="navigation">
                         <h1>Player's Agent</h1>
                        <ul class="nav-ul">
                        <li><a href={`/${this.props.group}`}>Home</a></li>
                        <li><a href="#">About Us</a></li>
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