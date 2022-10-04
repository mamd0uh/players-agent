const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { player } = this.props

        return (
            <DefaultLayout title="edit a player" group="players">
                <h1>Edit Page</h1>
                <form action={`/players/${player._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={player.name} />

                    <label htmlFor="date">Date:</label>
                    <input type="text" id="date" name="date" defaultValue={player.date} />

                    <label htmlFor="nationality">Nationality:</label>
                    <input type="text" id="nationality" name="nationality" defaultValue={player.nationality} />

                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" defaultValue={player.position} />

                    <label htmlFor="playerImg">Player's image:</label>
                    <input type="text" id="playerImg" name="playerImg" defaultValue={player.playerImg}/>

                    <label htmlFor="available">Available:</label>
                    <input type="checkbox" id="available" name="available" defaultChecked={player.available} />

                    <input type="submit" value="Edit Player"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit