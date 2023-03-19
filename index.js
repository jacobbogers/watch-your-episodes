function(evt) {
    var newPage = this.getNewPage(nav, $(evt.target));
    if (this.validNewPage(newPage)) {
        this._clicked = true;
        this.paginate(newPage);
    } evt.preventDefault();
}

function(page) {
    var itemRange, pageInterval;
    itemRange = this.updateItems(page);
    pageInterval = this.updatePages(page);
    this._currentPageNum = page;
    if ($.isFunction(this.options.callback))
        this.callback(page, itemRange, pageInterval);
    this.updatePause();
}