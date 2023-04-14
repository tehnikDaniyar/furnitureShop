import * as flsFunctions from "./modules/functions.js";
import { forInputs } from "./modules/forInputs.js";
import { actions } from "./modules/actions.js";
import { swiper } from "./modules/mainSlider.js";
import { headerObserver } from "./modules/headerObserver.js";

flsFunctions.isWebp();
forInputs();
actions();
swiper();
headerObserver();

