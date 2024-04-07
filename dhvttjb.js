import { dhvttjb } from "./modules/config.js";
import DHItemSheet from "./modules/sheets/DHItemSheet.js";
import DHPlayerSheet from "./modules/sheets/DHPlayerSheet.js";

Hooks.once("init", function() {
    console.log("dhvttjb | Initialising DaggerHeart Open Beta Test System by JBridgy");

    CONFIG.dhvttjb = dhvttjb;
    
    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("dhvttjb", DHItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("dhvttjb", DHPlayerSheet, {makeDefault: true});
});