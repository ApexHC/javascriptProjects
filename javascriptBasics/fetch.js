// Example Fetch Request

/*
fetch('https://api.spacexdata.com/v5/launches/next')
    .then(response => {
        console.log(response); // when we console log we get status 200 (ok). 
        return response.json(); // When response comes back I want you to convert it to JSON format.
    })
    .then(jsonData => {
        console.log(jsonData) // when data returns in http response, the data comes to/from resides in the body of the request.  COnsole.log will allow us to take a look at it.  At this point, we take JSON data and present it to user in a meaningful way.
        document.getElementById('display-data').innerText = jsonData.innerText = jsonData.name;
    });
    */
// Example Fetch Request
/*
fetch('https://api.spacexdata.com/v5/launches/next')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(jsonData => {
    console.log(jsonData);
    document.getElementById('display-data').innerText = jsonData.name;
  });
*/
const baseURL = 'https://api.spacexdata.com';
let formElement = document.getElementById('search-form');
let listElement = document.getElementById('rocket-list');

function fetchRockets() {
    // Retrieve the rocket data with FETCH
    // Format the data that comes back
    // Present that data with DOM Elements
    fetch(`${ baseURL }/v4/rockets`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            for (let rocket of jsonData) {
                displayRocket(rocket);
            }
        })
}

function displayRocket(rocketData) {
    let rocketCard = document.createElement('li');
    let rocketTitle = document.createElement('h1');
    let rocketImage = document.createElement('img');
    let rocketDetail = document.createElement('p');
    rocketTitle.innerText = rocketData.name;
    rocketImage.src = rocketData.flickr_images[0];
    rocketDetail.innerText = rocketData.mass.lb;
    rocketCard.classList.add('rocket-card');
    rocketTitle.classList.add('rocket-title');
    rocketImage.classList.add('rocket-image');
    rocketDetail.classList.add('rocket-detail');
    rocketCard.appendChild(rocketTitle);
    rocketCard.appendChild(rocketImage);
    rocketCard.appendChild(rocketDetail);
    listElement.appendChild(rocketCard);
}

fetchRockets();