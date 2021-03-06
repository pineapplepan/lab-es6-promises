// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

const addImage = (img) => {
  let sectionTable = document.querySelector("#table");
  sectionTable.innerHTML += `<img src="public/images/${img}.jpg" alt="${img}"/>`;
};

// // Iteration 1 using callbacks
// addFood(steak[0], "#steak", () => {
//   // ... your code here
//   addFood(steak[1], "#steak", () => {});
// });

addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                // document.getElementById('table').innerHTML += '<img src="/lab-es6-promises/public/images/steak.jpg" />'
                addImage("steak");
              });
            });
          });
        });
      });
    });
  });
});

// const addImage = (img) =>
//   (document.querySelector(
//     "#table"
//   ).innerHTML += `<img src="public/images/${img}.jpg" alt="${img}"/>`);

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes");
});

// Iteration 3 using async and await

async function makeFood(step) {
  // ... your code here
}
makeFood(eachStep);
