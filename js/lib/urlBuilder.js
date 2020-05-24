import String from './extensions/stringExtensions.js'
export default class UrlBuilder {

    #url = new String().empty();
    #segmentSeparator = "/";
    #withQueryString = "?";
    #andwithQueryString = "&";

    constructor(baseUrl) {
        this.#url = baseUrl;
    }

    segment(segment) {
        this.#url += this._makeSegment(segment);
        return this;
    }

    withQueryString(key, value) {
        this.#url += this._makewithQueryString(key, value);
        return this;
    }

    build() {
        return this.#url;
    }

    _alreadyHaswithQueryString() {
        return this.#url.indexOf(this.#withQueryString) > 0;
    }

    _makeSegment(segment) {
        if (this._alreadyHaswithQueryString())
            throw new Error("Url building is invalid! Use segments before query string!!");
        return this.#segmentSeparator + segment;
    }

    _makewithQueryString(qStr, val) {
        if (this._alreadyHaswithQueryString())
            return this.#andwithQueryString.concat(qStr, "=", val);
        else
            return this.#withQueryString.concat(qStr, "=", val)
    }
}