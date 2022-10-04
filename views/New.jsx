const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="create a new player" group="players">
                <h1>New Page</h1>
                <form action="/players" method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="date">Date of Birth:</label>
                    <input type="text" id="date" name="date" />

                    <label htmlFor="nationality">Nationality:</label>
                    <input type="text" id="nationality" name="nationality" />

                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" />

                    <label htmlFor="playerImg">Player's image:</label>
                    <input type="text" id="playerImg" name="playerImg" />

                    <label htmlFor="available">Available:</label>
                    <input type="checkbox" id="available" name="available" />

                    <input type="submit" value="Create Player"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New