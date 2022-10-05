// Loading our Model of player
const Player = require('../models/player')

// Bring in seed data
const seed = require('../models/seed')

// ROUTE     GET /players    (index)
const findAllPlayers = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Player.find({}, (err, foundPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { players: foundPlayer })
        }
    })
}

// ROUTE      GET /players/new    (new)
const showNewView = (req, res) => {     
    // res.send('<form>Create Player Profile</form>')
    res.render('New')
}

// ROUTE     POST /players     (create)
const createNewPlayer = (req, res) => {
    if (req.body.available === "on") {
        req.body.available = true
    } else {
        req.body.available = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Player.create(req.body, (err, createdPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/players')
        }
    })
}


// // ROUTE       GET /players/seed      (seed)
// const seedStarterData = (req, res) => {
//     // Delete all remaining documents (if there are any)
//     Player.deleteMany({}, (err, deletedPlayers) => {
//         if (err) {
//             res.status(400).json(err)
//         } else {
//             console.log('deleted data.')
//             console.log(seed.players)
//             // Data has been successfully deleted
//             // Now use seed data to repopulate the database
//             Player.create(seed.players, (err, createdPlayer) => {
//                 if (err) {
//                     res.status(400).json(err)
//                 } else {
//                     res.status(200).redirect('/')
//                 }
//             })
//         }
//     })
// }

// ROUTE     GET /players/:id     (show)
const showOnePlayer = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Player.findById(req.params.id, (err, foundPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { player: foundPlayer })
        }
    })
}


// ROUTE      GET /players/:id/edit     (edit)
const showEditView = (req, res) => {
    Player.findById(req.params.id, (err, foundPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { player: foundPlayer })
        }
    })
}

// ROUTE     PUT /players/:id       (update)
const updateOnePlayer = (req, res) => {

    if (req.body.available === "on" || req.body.available === true) {
        req.body.available = true
    } else {
        req.body.available = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundPlayer or updatedPlayer)
    Player.findByIdAndUpdate(req.params.id, req.body, (err, foundPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/players/${req.params.id}`)
        }
    })
}

//Hire Player
const hirePlayer = (req,res) => {
            console.log("working 2")
    Player.findOneAndUpdate({_id: req.params.id},{'available' : false}, (err, updatedProduct) => {
        console.log("Working")
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/players/${req.params.id}`)
        }
    })
}

// ROUTE       DELETE /players/:id      (destroy)
const deleteOnePlayer = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a player at index! (in DB)')
    
    Player.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/players')
        }
    })
}

// const clearData = (req, res) => {
//     // Delete all documents (if there are any)
//     Player.deleteMany({}, (err, deletePlayers) => {
//         if (err) {
//             res.status(400).json(err)
//         } else {
//             res.status(200).redirect('/')
//         }
//     })
// }

module.exports = {
    findAllPlayers,
    showNewView, 
    createNewPlayer,
    showOnePlayer,
    showEditView,
    updateOnePlayer,
    hirePlayer,
    deleteOnePlayer, 
}