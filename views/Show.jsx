const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { player } = this.props

        return (
            <DefaultLayout title={`${player.name} details`} group="players">
            <div className='information'>
                <p>
                <img src={player.playerImg} height='300' href={`/players/${player._id}`}/>
                </p>
                <p>
                <a href={`/players/${player._id}`}>{player.name}</a> was born on {player.date}. {player.name}'s nationality is {player.nationality} and their field position is a {player.position}
                </p>
                <p>
                    {player.available ? "Player is available for hiring! ✅ "  : "Player is not available anymore ❌"}
                </p>
            </div>

                <div className='container'>



                    <button className="button" id="showButtons">
                        <a href={`/players/contact`}>Requet more info!</a>
                    </button>

                    <form className="form" id="showButtons" action={`/players/${player._id}/hire?_method=PATCH`} method="POST">
                    <input type="submit" value="Hire" />
                    </form>
                        
                    <button className="button" id="showButtons">
                        <a href={`/players/${player._id}/edit`}>Edit</a>
                    </button>               

                    <form className="form" id="showButtons" action={`/players/${player._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>


                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Show;