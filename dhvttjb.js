import {dhvttjb} from "./modules/config.mjs";
import {DHItemSheet} from "./modules/sheets/DHItemSheet.js";
import {DHPlayerSheet} from "./modules/sheets/DHPlayerSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/dhvttjb/templates/partials/character-stat-block.hbs"
    ];
    return loadTemplates(templatePaths);
};

Hooks.once("init", function() {
    console.log("dhvttjb | Initialising DaggerHeart Open Beta Test System by JBridgy");

    CONFIG.dhvttjb = dhvttjb;
    
    DocumentSheetConfig.unregisterSheet(Item, "core", ItemSheet);
    DocumentSheetConfig.registerSheet(Item, "dhvttjb", DHItemSheet, {makeDefault: true, label: "DHVTT Sheet"});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("dhvttjb", DHPlayerSheet, {makeDefault: true});

    preloadHandlebarsTemplates();
});