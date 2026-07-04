const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "./images/jane.png"
  },
  {
    "name" :""john Doe",
    "gender" : "Male",
    "image" : "./images/john.png"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
   document.getElementById("profile-img").src = users[curUserId].image;
    document.getElementById("card-name").innerText = users[curUserId].name;
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}

function getRandomUser()
{
  fetch("https://randomuser.me/api")
    .then(function (data){
      return data.json()
    })
    .then(function (parsedData){
      // console.log(parsedData)
      let gender = parsedData.results[0].gender;

      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first  + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      // gender
      document.getElementById("card-gender").innerText=gender;
      // name
      document.getElementById("card-name").innerText=name
      // img
      document.getElementById("profile-img").src=imageUrl

    })
}
  console.log("Hello from JS");
  alert("hello from js");