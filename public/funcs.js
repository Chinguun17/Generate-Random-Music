const listsDOM = document.querySelector('.lists')
const formDOM = document.querySelector('.list-form')
const listInputDOM = document.querySelector('.list-input')
const loadingDOM = document.querySelector('.loading-text')
const formAlertDOM = document.querySelector('.form-alert')
const songsDom = document.querySelector('.single-song')


const showLists = async () => {
    loadingDOM.style.visibility = 'visible'
    try {
        const {
            data: {lists},
        } = await axios.get(`/grm/demo/lists`)
        if(lists.length < 1){
            listsDOM.innerHTML = '<h5 class="empty-list">You do not have any lists yet...<h5>'
            loadingDOM.style.visibility = 'hidden'
            return
        }
        const allLists = lists
            .map((list) => {
                const { _id:listID, ListName} = list
                return`<div class="single-song">
                <h5>${ListName}</h5>
                <div class="song-links">

                <a href="task.html?id=${listID}"  class="edit-link">
                <i class="fas fa-edit"></i>
                </a>
                <button type="button" class="delete-btn" data-id="${listID}">
                    <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="addSong-btn" data-id="${listID}">
                    <i class="fas fa-plus-circle"></i>
                </button>
                
                </div>
                </div>`
            }).join("")
        listsDOM.innerHTML = allLists
    } catch (error) {
        listsDOM.innerHTML = 
        '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
    loadingDOM.style.visibility = 'hidden'
}

showLists()

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const ListName = listInputDOM.value
    try {
        await axios.post('/grm/demo/lists', {ListName})
        listInputDOM.value =""
        showLists()
    } catch (error) {
        console.log(error)
    }
})

listsDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.parentElement.classList.contains('delete-btn')) {
      loadingDOM.style.visibility = 'visible'
      const id = el.parentElement.dataset.id
      try {
        await axios.delete(`/grm/demo/lists/${id}`)
        showLists()
      } catch (error) {
        console.log(error)
      }
    }
    if (el.parentElement.classList.contains('addSong-btn')) {
        loadingDOM.style.visibility = 'visible'
        const id = el.parentElement.dataset.id
        try {
            const songName = videoTitle.innerHTML
            
            if(songName == ""){   
                loadingDOM.style.visibility = 'hidden'            
                return 
            }
            
            // const {
            //     data:{list}
            // } = await axios.get(`/grm/demo/lists/${id}`)
               

            await axios.post(`/grm/demo/lists/${id}`,{$addToSet:{
            songs:[{SongName:songName, Links:songName}]}
        },
            {new:true}
            )
        
        } catch (error) {
          console.log(error)
        }
      }
    loadingDOM.style.visibility = 'hidden'
  })







//   ('click', async(e) => {
//     e.preventDefault()
//     const el = e.target
//     if (el.parentElement.classList.contains('addSong-btn')){
//         loadingDOM.style.visibility = 'visible'
//         const id = el.parentElement.dataset.id
//         const SongName = videoTitle.innerHTML
//         try {
//             await axios.post(`/grm/demo/lists/${id}`, {SongName})
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     loadingDOM.style.visibility = 'hidden'
// })









