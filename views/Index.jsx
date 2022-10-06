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
                                <li className="box" key={player._id}>
                                    <img src={player.playerImg} height='200'/><br/>
                                    <div>{player.name}</div><br/>
                                    <div>Position: {player.position}</div><br/>
                                    <button className="button" type="button" value="MORE"><a href={`/players/${player._id}`}>More</a></button>
                                </li>
                            )
                        })}
                    </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index;