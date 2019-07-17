import { PoweredUPBrowser } from "./index-browser";

const pup = new PoweredUPBrowser.PoweredUP();

pup.on("discover", async hub => {
  // Wait to discover hubs

  await hub.connect(); // Connect to hub
  console.log(`Connected to ${hub.name}!`, hub);

  hub.on("disconnect", () => {
    console.log("Hub disconnected");
  });

  renderHub(hub);

  doSomething(hub);
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

const doSomething = async (hub) => {
  console.log("Running motor B at speed 75");
  hub.setMotorSpeed("B", 75); // Start a motor attached to port B to run a 3/4 speed (75) indefinitely
  console.log("Running motor A at speed 100 for 2 seconds");
  await hub.setMotorSpeed("A", 100, 2000); // Run a motor attached to port A for 2 seconds at maximum speed (100) then stop
  await hub.sleep(1000); // Do nothing for 1 second
  console.log("Running motor A at speed -50 for 1 seconds");
  await hub.setMotorSpeed("A", -50, 1000); // Run a motor attached to port A for 1 second at 1/2 speed in reverse (-50) then stop
  await hub.sleep(1000); // Do nothing for 1 second
};

scan();
