// import Vue from 'vue'
// "use strict";
// Copy of node-poweredup/dist/node/index-browser
// it previously exported everything to window.PoweredUP, refactored to export PoweredUPBrowser

// const __importStar =
//   (this && this.__importStar) ||
//   function(mod) {
//     if (mod && mod.__esModule) return mod;
//     var result = {};
//     if (mod != null)
//       for (var k in mod)
//         if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
//     result["default"] = mod;
//     return result;
//   };
// Object.defineProperty(exports, "__esModule", { value: true });
const boostmovehub1 = require('node-poweredup/dist/node/boostmovehub')
// const Consts = __importStar(require("node-poweredup/dist/node/consts"));
const Consts = require('node-poweredup/dist/node/consts')
const duplotrainbase1 = require('node-poweredup/dist/node/duplotrainbase')
const hub1 = require('node-poweredup/dist/node/hub')
const poweredupBrowser1 = require('node-poweredup/dist/node/poweredup-browser')
const puphub1 = require('node-poweredup/dist/node/puphub')
const pupremote1 = require('node-poweredup/dist/node/pupremote')
const wedo2smarthub1 = require('node-poweredup/dist/node/wedo2smarthub')
const utils1 = require('node-poweredup/dist/node/utils')
// @ts-ignore
const PoweredUPBrowser = {
  PoweredUP: poweredupBrowser1.PoweredUP,
  Hub: hub1.Hub,
  WeDo2SmartHub: wedo2smarthub1.WeDo2SmartHub,
  BoostMoveHub: boostmovehub1.BoostMoveHub,
  PUPHub: puphub1.PUPHub,
  PUPRemote: pupremote1.PUPRemote,
  DuploTrainBase: duplotrainbase1.DuploTrainBase,
  Consts,
  isWebBluetooth: utils1.isWebBluetooth
}
const pup = new PoweredUPBrowser.PoweredUP()

export default ({ app }, inject) => {
  inject('poweredUp', PoweredUPBrowser)
  inject('pup', pup)
}
