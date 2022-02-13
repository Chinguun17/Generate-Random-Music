// const listsDOM = document.querySelector('.lists')
// const loadingDOM = document.querySelector('.loading-text')

// listsDOM.addEventListener('click', async (e) => {
//     const el = e.target
//     if (el.parentElement.classList.contains('addSong-btn')) {
//       loadingDOM.style.visibility = 'visible'
//       const id = el.parentElement.dataset.id
//       const SongName = videoTitle.innerHTML
//       try {
//         await axios.post(`/grm/demo/lists/${id}`, {
//             songs: SongName
//         })
//         showLists()
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     loadingDOM.style.visibility = 'hidden'
//   })