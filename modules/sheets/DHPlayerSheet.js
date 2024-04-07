export default class DHPlayerSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/dhvttjb/templates/sheets/player-sheet.html",
            classes: ["dhvttjb", "sheet", "player"]
        });
    }
}