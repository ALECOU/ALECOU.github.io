// This is where it all goes :)

function myFunction() {
 const menu = document.querySelector(".menu-mobile-bot");
  if (menu.id === "hidden") {
    menu.id -= "hidden";
  } else {
    menu.id = "hidden";
  }
}
