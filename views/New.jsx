const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Register" group="players">

                <h1>Register with us today!</h1>
                
                <form action="/players" method="POST">
                <div className='create'>
                    
                   <div className="input"><label htmlFor="name" className="label">Name:</label>
                    <input type="text" id="name" name="name" /></div> 

                    <div className="input"><label htmlFor="date" className="label">Date of Birth:</label>
                    <input type="text" id="date" name="date" /></div> 

                    <div className="input"><label htmlFor="nationality" className="label">Nationality:</label>
                    <input type="text" id="nationality" name="nationality" /></div> 

                    <div className="input"><label htmlFor="position" className="label">Position:</label>
                    <input type="text" id="position" name="position" /></div> 

                    <div className="input"><label htmlFor="playerImg" className="label">Player's image:</label>
                    <input type="text" id="playerImg" name="playerImg" /></div> 

                    <div className="input"><label htmlFor="available">Available:</label>
                    <input type="checkbox" id="available" name="available" /></div> 

                    <div className="input"><input className="btn" type="submit" value="Create Player"/></div> 
                </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New