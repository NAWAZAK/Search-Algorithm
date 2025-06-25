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
  let filteredUser = user.filter(obj=>{
    if((obj.name.toLowerCase().includes(data.toLowerCase())) || (obj.email.toLowerCase().includes(data.toLowerCase()))){
      return obj
    }
  })
  displayUser(filteredUser)
}
searchBar.addEventListener('input', function(){
  filterUser(searchBar.value)
})


addUser('Shahin Akhtar', 'shahin1985@gamil.com')
addUser('Mohammad Nawaz Akhtar', 'mna2007@gamil.com')
addUser('Taneem Akhtar', 'taneem2014@gamil.com')
addUser('Md. Minhaj Akhtar', 'mna.bkp@gmail.com')
addUser('Nisar Ahmad Ashrafi', 'nisar@gmail.com')
addUser('Najma Begum', 'najmabegum@gmail.com')
addUser('Sudipta Paul', 'sudiptapaul@gmail.com')
addUser('Arup Ghosh', 'arupbts@gmail.com')
addUser('Sujal Halder', 'sijalhalder047@gmail.com')
addUser('Abhishek Chatterjee',  'abhishekchaterjee92@gmail.com')
addUser('Ankita Bose', 'ankitabose@gmail.com')
addUser('Raul Dasgupta', 'rauldasgupta@gmail.com')