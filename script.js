let user = []
let displayArea = document.querySelector('.displayArea')

function addUser(username, userEmail) {
  let objUser = {
    name: username,
    email: userEmail,
    profileUrl: 'profile.png'
  }
  user.push(objUser)
  displayUser(user)
}

function displayUser(arr) {
  displayArea.innerHTML = ''
  arr.forEach((u) => {
    let userElem = document.createElement('div')
    userElem.className = 'user'
    userElem.innerHTML = `
    <img src="${u.profileUrl}" alt="profile" />
    <div class="userData">
      <div class="username">${u.name}</div>
      <div class="userEmail">${u.email}</div>
    </div>
    `
    displayArea.append(userElem)
  })
}

let searchBar = document.getElementById('searchBar')
function filterUser(data){
  console.log(data)
}
searchBar.addEventListener('input', function(){
  filterUser(searchBar.value)
})


addUser('Shahin Akhtar', 'shahin1985@gamil.com')
addUser('Mohammad Nawaz Akhtar', 'mna2007@gamil.com')
addUser('Taneem Akhtar', 'shahin2014@gamil.com')