export default class DHItemSheet extends ItemSheet {
    get template() {
        return `./dhvttjb/templates/sheets/${this.item.data.type}-sheet.html`;
    };

    getData() {
        const data = super.getData();

        data.config = CONFIG.dhvttjb;

        return data;
    }
}