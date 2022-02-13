const express = require('express')
const router = express.Router();

const {getAllLists, getList, addList, deleteList, addSong} = require('../controllers/controllers')
//getAllSongs, addSong, deleteSong, 
router.route('/').get(getAllLists).post(addList)

router.route('/:id').get(getList).post(addSong).delete(deleteList)


// .get(getAllSongs).post(addSong)


module.exports = router


