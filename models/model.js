const mongoose = require('mongoose')

// const SongSchema = new mongoose.Schema({
//     SongName: {
//         type:String,
//         required:[true, 'must provide name'],
//         trim:true,
//         maxlength:[200, 'name cannot be more than 200 characters']
//     },
    
//     Link:String
// })

const ListSchema = new mongoose.Schema({
    ListName: {
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[200, 'name cannot be more than 200 characters']
    },
    songs: [{
        SongName:String, 
        Links:String 
    }]

})



module.exports = mongoose.model('List', ListSchema)


