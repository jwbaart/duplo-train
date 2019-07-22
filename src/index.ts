import { PoweredUPBrowser } from "./poweredUpBrowser";

const pup = new PoweredUPBrowser.PoweredUP();

pup.on("discover", async hub => {
  // Wait to discover hubs

  await hub.connect(); // Connect to hub
  console.log(`Connected to ${hub.name}!`, hub);

  hub.on("disconnect", () => {
    console.log("Hub disconnected");
  });

  renderHub(hub);

  hub.playSound(hub, PoweredUPBrowser.Consts.DuploTrainBaseSound.BRAKE);
});

const scan = function() {
  //   if (PoweredUPBrowser.isWebBluetooth) {
  if (PoweredUPBrowser.isWebBluetooth) {
    console.log(`start scanning`);
    pup.scan(); // Start scanning for hubs
  } else {
    console.log(
      "Your browser does not support the Web Bluetooth specification."
    );
  }
};

const renderHub = function(hub) {
  const element = document.createElement("tr");
  element.setAttribute("id", `hub-${encodeURIComponent(hub.uuid)}`);
  element.innerHTML = `<td>${hub.name}</td><td>${
    PoweredUPBrowser.Consts.HubTypeNames[hub.type]
  }</td><td class="disconnect_btn"><a href="#" onclick="disconnect('${encodeURIComponent(
    hub.uuid
  )}');">Disconnect</a></td>`;
  document.getElementById("hubs").appendChild(element);
};

scan();
