export class DHPlayerSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/dhvttjb/templates/sheets/player-sheet.hbs",
            classes: ["dhvttjb", "sheet", "player"],
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        });
    };


    get template() {
        return `systems/dhvttjb/templates/sheets/${this.actor.type}-sheet.hbs`;
    };
}