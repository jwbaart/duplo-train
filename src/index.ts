import { PoweredUPBrowser } from "./index-browser";

const pup = new PoweredUPBrowser.PoweredUP();

pup.on("discover", async hub => {
  // Wait to discover hubs

  await hub.connect(); // Connect to hub
  console.log(`Connected to ${hub.name}!`);

//   hub.on("disconnect", () => {
//     console.log("Hub disconnected");
//   });

//   //   renderHub(hub);
});

const scan = function() {
  if (PoweredUPBrowser.isWebBluetooth) {
    console.log(`start scanning`);
    pup.scan(); // Start scanning for hubs
  } else {
    console.log(
      "Your browser does not support the Web Bluetooth specification."
    );
  }
};

scan();
