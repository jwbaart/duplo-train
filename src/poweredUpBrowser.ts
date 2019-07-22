// "use strict";
// Copy of node-poweredup/dist/node/index-browser
// it previously exported everything to window.PoweredUP, refactored to export PoweredUPBrowser

var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
// Object.defineProperty(exports, "__esModule", { value: true });
const boostmovehub_1 = require("node-poweredup/dist/node/boostmovehub");
// const Consts = __importStar(require("node-poweredup/dist/node/consts"));
const Consts = require("node-poweredup/dist/node/consts");
const duplotrainbase_1 = require("node-poweredup/dist/node/duplotrainbase");
const hub_1 = require("node-poweredup/dist/node/hub");
const poweredup_browser_1 = require("node-poweredup/dist/node/poweredup-browser");
const puphub_1 = require("node-poweredup/dist/node/puphub");
const pupremote_1 = require("node-poweredup/dist/node/pupremote");
const wedo2smarthub_1 = require("node-poweredup/dist/node/wedo2smarthub");
const utils_1 = require("node-poweredup/dist/node/utils");
// @ts-ignore
export const PoweredUPBrowser = {
  PoweredUP: poweredup_browser_1.PoweredUP,
  Hub: hub_1.Hub,
  WeDo2SmartHub: wedo2smarthub_1.WeDo2SmartHub,
  BoostMoveHub: boostmovehub_1.BoostMoveHub,
  PUPHub: puphub_1.PUPHub,
  PUPRemote: pupremote_1.PUPRemote,
  DuploTrainBase: duplotrainbase_1.DuploTrainBase,
  Consts,
  isWebBluetooth: utils_1.isWebBluetooth
};

