// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Bring in controller functions (destructure methods)
const { 
    findAllPlayers,
    showNewView, 
    createNewPlayer,
    showOnePlayer,
    showEditView,
    updateOnePlayer,
    deleteOnePlayer, 
} = require('../controllers/playerController')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllPlayers)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOnePlayer)

// Setup "update" route
router.put('/:id', updateOnePlayer)

// Setup "create" route
router.post('/', createNewPlayer)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// // Setup "seed" route
// router.get('/seed', seedStarterData)

// // Setup "clear" routa
// router.get('/clear', clearData)

// Setup "show" route  
router.get('/:id', showOnePlayer)

module.exports = router
