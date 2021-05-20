{}


navigator.serviceWorker.register("/game/kolohe.js").then((registration)=> {
  console.log(registration.active)
})

navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
    const kolohe = registration.installing;
    kolohe.addEventListener("statechange", (event) => {
        console.log("state changed  to: ", event.target.state)  
    })
})

navigator.serviceWorker.register("/game/kolohe.js");

navigator.serviceWorker.ready.then(registration => {
  console.log("SW activated: ", registration.active)
})