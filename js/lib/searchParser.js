export default class SearchParser {
    #key = null;
    constructor(key) {
        this._searchContent = location.search;
        this.#key = key == undefined ? "page" : key;
    }

    get Key() {
        return this._searchContent.substring(1, this._searchContent.indexOf("="));
    }

    get Value() {
        let searchValue = this._searchContent.substr(this._searchContent.indexOf("=") + 1);
        if (this.Key == this.#key) {
            let value = 1;
            if (searchValue != null && searchValue != undefined) {
                value = parseInt(searchValue);
            }
            return value;
        }
        else
            return 1;
    }

    isPaginatable() {
        return this.Key == this.#key;
    }
}