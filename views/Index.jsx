const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { players } = this.props

        return (
            <DefaultLayout title="All players" group="players">
                    <h1>Players Index Page</h1>
                    <ul id="players-index">
                        {players.map((player) => {
                            return (
                                <li key={player._id}>
                                    <img src={player.playerImg} href={`/players/${player._id}`}/><br/>
                                    <a href={`/players/${player._id}`}>{player.name}</a><br/>
                                    Position: {player.position}<br/>
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/players/new">Create a new a player</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;