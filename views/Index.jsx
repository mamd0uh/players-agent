const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { players } = this.props

        return (
            <DefaultLayout title="All players" group="players">
                    <h1>Latest Feeds</h1>
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

                    <section className="sec-partners" role="section">
      <hr />
      <h1>Our Partners</h1>
      <div className="row">

        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" />
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" />
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png" />
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" />
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png" />
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" />
        </div>
      </div>
    </section>


            </DefaultLayout>
        )
    }
}

module.exports = Index;