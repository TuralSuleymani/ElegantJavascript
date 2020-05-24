import DataRender from './dataRender.js';
import ProfileBuilder from './profileBuilder.js'
export default class DOMRender extends DataRender {

    constructor(data) {
        super();
        this._data = data;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }

    _renderRecursively(obj, arr, root) {
        for (let key in obj) {
            if (typeof obj[key] == "object") {
                this._renderRecursively(obj[key], arr, key);
            }
            else {
                if (typeof root != "string") {
                    arr.set(key, obj[key]);
                }
                else {
                    arr.set(root + "-" + key, obj[key]);
                }
            }

        }

    }
    _makeSelector(obj) {
        let keyValuePair = {
            key: Object.keys(obj)[0],
            value: Object.values(obj)[0]
        }
        return keyValuePair;
    }
    _renderPartially(selector, ...props) {
        for (let dataItem of this._data) {
            let containerSelector = this._makeSelector(dataItem);
            let profile = new ProfileBuilder(containerSelector)
                .addPhoto('img/user.png');
            props.forEach((x) => {
                profile = profile.addElement(x, dataItem[x]);
            });
            $(selector).append(profile.build());
        }
    }
    _renderAll(selector) {
        let dictionary = new Map();
        for (let dataItem of this._data) {
            this._renderRecursively(dataItem, dictionary, this._data);
            let containerSelector = this._makeSelector(dataItem);
            let profile = new ProfileBuilder(containerSelector).addPhoto('img/user.png');
            dictionary.forEach((val, key) => {
                profile.addElement(key, val);
            });
            $(selector).append(profile.build());
        }

    }
    render(selector, ...props) {
        if (props.length == 0) {
            this._renderAll(selector);
        }
        else {
            this._renderPartially(selector, ...props);
        }

    }
}