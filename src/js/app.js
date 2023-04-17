import * as flsFunctions from "./modules/functions.js";
import { forInputs } from "./modules/forInputs.js";
import { actions } from "./modules/actions.js";
import { swiperMain } from "./modules/mainSlider.js";
import { headerObserver } from "./modules/headerObserver.js";
import { swiperRooms } from "./modules/roomsSlider.js";
import { swiperTips } from "./modules/tipsSlider.js";

flsFunctions.isWebp();
forInputs();
actions();
swiperMain();
headerObserver();
swiperRooms();
swiperTips();