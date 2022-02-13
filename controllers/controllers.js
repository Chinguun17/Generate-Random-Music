// const Song = require('../models/model')

const List = require('../models/model')





const getAllLists = async (req, res) => {
    try {
        const lists = await List.find({})
        res.status(200).json({lists})
    } catch (error) {
        res.send(500).json({msg:error})
    }
}


const getList = async (req, res) => {
    try {
        const {id:listID} = req.params
        const list = await List.findOne({_id:listID})
        if(!list){
            return res.status(404).json({msg:'List not found!'})
        }
        res.status(200).json({list})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}




const deleteList = async (req, res) => {
    try {
        const {id:listID} = req.params
        const list = await List.findOneAndDelete({_id:listID})
        if(!list){
            return res.status(404).json({msg:error})
        }
        res.status(200).json({msg:listID})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}





const addList = async (req, res) => {
    try {
        const list = await List.create(req.body)
        res.status(201).json({list})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const addSong = async (req, res) => {
    try {
        const {id:listID} = req.params
        const list = await List.findOneAndUpdate({_id:listID}, req.body)
        if(!list){
            return res.status(404).json({msg:`No task with ID:${listID}`})

        }
        res.status(201).json({msg:'Song is added to the list'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports= {
    // getAllSongs, 
    // addSong,
    // deleteSong,
    getAllLists,
    getList,
    // getAllSongs,
    addList,
    addSong,
    deleteList
}