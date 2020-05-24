export default class ProfileBuilder {
    #domComponent = $("<div class='profile-container'></div>");
    constructor(marker) {
        let _class = "profile-container";
        this.#domComponent = $(`<div class='${_class}'></div>`);
        if (marker != undefined && marker != null && marker != "") {
            this.#domComponent.attr(`data-${marker.key}`, marker.value);
        }

    }


    addPhoto(src) {
        let img = $(`<img src='${src}' class='profile-img'>`);
        this.#domComponent.append(img);
        return this;
    }

    addElement(key, text) {
        let domItem = $(`<div class='profile-item profile-${key}'></div>`)
            .html(`<p><span class='profile-item-key profile-item-${key}'>${key}</span> <span class='profile-item-value profile-item-${text}'>${text}</span></p>`);
        this.#domComponent.append(domItem);
        return this;
    }

    build() {
        return this.#domComponent;
    }
}