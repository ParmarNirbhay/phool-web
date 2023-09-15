//     function setNewImage(e){
//       console.log(e.target.id);
//       if(e.target.id=="bmg"){
//         document.getElementById("bmg").src="./assets/asset 15.jpeg"
//       }
//       else if(e.target.id="cmg"){
//         document.getElementById("cmg").src="./assets/asset 15.jpeg"
//       }
//       else if(e.target.id="omg"){
//         document.getElementById("omg").src="./assets/asset 15.jpeg"
// }



// else(e.target.if="amg"){
//   document.getElementById("amg").src="./assets/asset 15.jpeg"
// }
      
      
//     }
//     function setOldImage(e){
//       if(e.target.id=="bmg"){
//         document.getElementById("bmg").src="./assets/asset 14.jpeg"
//       }
//       else if(e.target.id="cmg"){
//         document.getElementById("cmg").src="./assets/asset 14.jpeg"
//       }
//       else if(e.target.id="omg"){
//         document.getElementById("omg").src="./assets/asset 14.jpeg"
// }





// else(e.target.if="amg"){
//   document.getElementById("amg").src="./assets/asset 14.jpeg"
// }
    
function setNewImage(e, newImg){
    // document.getElementById("bmg").src="./assets/asset 11.jpeg"
    e.src=newImg;
  }
  function setOldImage(e,old){
    // document.getElementById("bmg").src="./assets/asset 14.jpeg"
    e.src=old;
  }
  function setNewImage(e,){
    // document.getElementById("cmg").src="./assets/asset 10.jpeg"
    e.src="./assets/asset 14.jpeg"
  }
  function setOldImage(e){
    // document.getElementById("cmg").src="./assets/asset 14.jpeg"
    e.src="./assets/asset 11.jpeg"
  }
//   function setNewImage(){
//     document.getElementById("bmg").src="./assets/asset 11.jpeg"
//   }
//   function setOldImage(){
//     document.getElementById("bmg").src="./assets/asset 14.jpeg"
//   }

  function setImg(e){
    console.log("working");
    if(1){
    document.getElementById("img").src="./assets/asset 12.jpeg"
  }

  else if(2){
    document.getElementById("img").src="./assets/asset 13.jpeg"
  }
  else if(3){
    document.getElementById("img").src="./assets/asset 14.jpeg"
  }
  else {
    document.getElementById("img").src="./assets/asset 11.jpeg"
  }
}