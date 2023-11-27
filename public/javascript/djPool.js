
// // <%- 
// // include('../partials/djCard.ejs', 
// // {
// //     djStatus : "Available", 
// //     djName : "Dj Messi", 
// //     djState: "Abuja", 
// //     djCountry : "Nigeria",
// //     djRating : 3.5,
// //     eventCount : 2,
// //     djPhoto : "assets/images/placeholderImages/djPlaceholder1.jpg" 
// // }) 
// // %>
// const djCardsContainer = document.getElementById("djPoolContainer");
// const djCollection = 
// async function loadDJcards()
// {
//     var djStatus = "";
//     var djName = "";
//     var djState = "";
//     var djCountry = "";
//     var djRating = "";
//     var eventCount = "";
//     var djPhoto = "";
//     console.log(allDJs);
// }

// window.addEventListener("load", function()
// {
//     loadDJcards();
// });

// function loadDJcards()
// {
//     var djStatus = "";
//     var djName = "";
//     var djState = "";
//     var djCountry = "";
//     var djRating = "";
//     var eventCount = "";
//     var djPhoto = "";
//     fetch('/djPoolPopulate')
//     .then(response => response.json())
//     .then(data => {
//       const dataList = document.getElementById('dataList');
//       data.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item.name;
//         dataList.appendChild(li);
//       });
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }