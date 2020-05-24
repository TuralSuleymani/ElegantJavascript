import UrlBuilder from '../urlBuilder.js'
//most used param, so as prototype
UrlBuilder.prototype.id = function (id) {
    return this.segment(id);
}

UrlBuilder.prototype.posts = function () {
    return this.segment("posts");
}

UrlBuilder.prototype.comments = function () {
    return this.segment("comments");
}

UrlBuilder.prototype.users = function () {
    return this.segment("users");
}

export { UrlBuilder }