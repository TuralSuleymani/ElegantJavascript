export default class PaginationRender {
    #itemsPerPage = 6;
    #data = [];
    #totalPages = 0;
    constructor(dataRender) {
        this._dataRender = dataRender;
        this.#data = dataRender.getData();
        this.#totalPages = Math.ceil(this.#data.length / this.#itemsPerPage);
    }

    render(selector, page, ...props) {
        let from = (page - 1) * this.#itemsPerPage;
        let to = from + this.#itemsPerPage;
        let filteredData = this.#data.filter(x => x.id >= (from + 1) && x.id <= to);
        this._dataRender.setData(filteredData);
        this._dataRender.render(selector, ...props);
        this._renderPagination();
    }

    _renderPagination() {
        let paginationContainer = $("<div class='pagination-container'></div>");
        for (let i = 1; i <= this.#totalPages; i++) {
            let linkElement = $(`<a class='btn btn-pagination' href='?page=${i}'>${i}</a>`);
            paginationContainer.append(linkElement);
        }
        $(document.body).append(paginationContainer);
    }
}