export class DHItemSheet extends ItemSheet {
    get template() {
        return `systems/dhvttjb/templates/sheets/${this.item.data.type}-sheet.html`;
    };

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['dhvttjb', 'sheet', 'item'],
            width: 520,
            height: 480,
            tabs: [
                {
                    navSelector: '.sheet-tabs',
                    contentSelector: '.sheet-body',
                    initial: 'description'
                }
            ]
        });
    };

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.dhvttjb
        };
        return sheetData;
    };
}