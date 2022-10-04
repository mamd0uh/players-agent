const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { player } = this.props

        return (
            <DefaultLayout title={`${player.name} details`} group="players">
                <h1>Show Page</h1>
                <p>
                <img src={player.playerImg} href={`/players/${player._id}`}/>
                </p>
                <p>
                <a href={`/players/${player._id}`}>{player.name}</a> was born on {player.date}. {player.name} nationality is {player.nationality} and their field position is a {player.position}
                </p>
                <p>
                    {player.available ? "Player is currently available to hire!" : "Player is not available anymore."}
                </p>

                <button>
                    <a href={`/players/${player._id}/edit`}>Edit</a>
                </button>

                <form action={`/players/${player._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/players">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;