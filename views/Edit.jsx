const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { player } = this.props

        return (
            <DefaultLayout title="Edit a player" group="players">
                <h1>Edit Information</h1>
                <form action={`/players/${player._id}?_method=PUT`} method="POST">
               
               
                <div className='edit'>

                <div className="input"><label htmlFor="name" className="label">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={player.name} /></div> 

                    <div className="input"><label htmlFor="date" className="label">Date of Birth:</label>
                    <input type="text" id="date" name="date" defaultValue={player.date} /></div> 

                    <div className="input"><label htmlFor="nationality" className="label">Nationality:</label>
                    <input type="text" id="nationality" name="nationality" defaultValue={player.nationality} /></div> 

                    <div className="input"><label htmlFor="position" className="label">Position:</label>
                    <input type="text" id="position" name="position" defaultValue={player.position} /></div> 

                    <div className="input"><label htmlFor="playerImg" className="label">Player's image:</label>
                    <input type="text" id="playerImg" name="playerImg" defaultValue={player.playerImg}/></div> 

                    <div className="input"><label htmlFor="available">Available:</label>
                    <input type="checkbox" id="available" name="available" defaultChecked={player.available}/></div> 

                    <div className="input"><input className="btn" type="submit" value="Edit Player"/></div> 
                    </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit