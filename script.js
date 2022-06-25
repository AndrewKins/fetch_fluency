// function logPost(id){
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) //need to use tempalte literals
//   .then(response => response.json())
//   .then((data) => {
//     const {title, body} = data //options constructor //use T/L to console.log
//     console.log(`Title: ${title},
//     Post: ${body}`)
//   });
// }
// logPost(1)

// function logUsers(){
// fetch(`https://jsonplaceholder.typicode.com/users`) //fetch from users url
//   .then(response => response.json())
//   .then(users => {
//     let userNamesOnly = users.map(function(user){
//       return user.name
//     })
//     console.log(userNamesOnly)
//   });
// }
// logUsers()

// function getBizUsers() {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(response => response.json())
//   .then(users => {
//     let userEmails = users.filter(function(user){
//       if(user.email.includes('biz')){
//         return user
//       }
//     })
//     // console.log(userEmails)
//     let bizUsersOnly = userEmails.map(function(user){
//       return user
//     })
//     console.log(bizUsersOnly)
//   })
// }
// getBizUsers()

// function longestPost(){
// fetch(`https://jsonplaceholder.typicode.com/posts`) //need to use tempalte literals
//   .then(response => response.json())
//   .then((postsArr) => {
//     let longestPost = postsArr[0];
//     for(let i = 1; i < postsArr.length; i++){
//       if(postsArr[i].body.length > longestPost.body.length){
//         longestPost = postsArr[i]
//       }
//     }
//     console.log(longestPost)
//     /*create a variable that will contain the current longest post
//     Iterate through, if the next post is greater than the current longest post
//     update the variable to equal that greater post
//     log the greatest post
//     */
//   });
// }
// longestPost()

// function getCompletedTasks() {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {
//     let todosChecker = todos.filter(function(todo){
//       if(todo.completed){
//         return todo
//       }
//     })
//     console.log(todosChecker)
//   })
// }
// getCompletedTasks()

// document.addEventListener('DOMContentLoaded', ()=>{ 

// function displayPhotos() {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(photos=> renderPhotos(photos))
    
// }
//   function renderPhotos(photos) {
//     console.log(photos)
//     const gridDiv = document.getElementById('photogrid')
//     for (let i = 0; i < gridDiv.children.length; i++) {
//       console.log(gridDiv.children[i].src = photos[i].thumbnailUrl);
//     }
//     console.log(gridDiv.children)
//     // for (const photo of photos) {
//     //   console.log(gridDiv.children)
//     // }
//   }
// displayPhotos()
// })


  // function findClosest() {
  //   fetch('https://jsonplaceholder.typicode.com/users') 
  //   .then(response => response.json())
  //   .then(users => getLocation(users))
  //   console.log
  // }
  //   function getLocation(users) {
  //     fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={5816fa42c76c229defd39785a6c0fff3')
  //     .then(res => res.json())
  //     .then(weatherapi => console.log(weatherapi))
  //       console.log(users)
  //   }
  // findClosest()


  // function numOfLongPosts() {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`) //need to use tempalte literals
  //     .then(response => response.json())
  //     .then((postsArr) => {
  //       console.log(postsArr, "original data")
  //      let filteredArray = postsArr.filter(function(posts){
  //        if(posts.body){
  //          return posts
  //        }
  //        console.log(posts, "this is post")
  //      })
  //      console.log(filteredArray, "relogged")
  //   })

  // }
  //   numOfLongPosts()

  // function getUserFromPost(title){
  //   fetch(`https://jsonplaceholder.typicode.com/posts/$`)
  //   .then(response => response.json())
  //   .then((dataSet) => {
  //     let titleSearch = dataSet.filter(function(data){
  //       if(title === data){
  //         return titleSearch
  //       }
  //       console.log(dataSet)
  //     })
  //   })
  // }
  // getUserFromPost()