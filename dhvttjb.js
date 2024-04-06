import {dhvttjb} from "./modules/config.js";
import DHItemSheet from "./modules/sheets/DHitemSheet.js";

Hooks.once("init", function() {
    console.log("dhvttjb | Initialising DaggerHeart Open Beta Test System by JBridgy");

    CONFIG.dhvttjb = dhvttjb;
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dhvttjb", DHItemSheet, {makeDefault: true});
});