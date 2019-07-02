(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-campaign-campaign-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/content/pages/components/campaign/campaign.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/campaign.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/campaign.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/campaign.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/campaign.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/campaign.component.ts ***!
  \*************************************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignComponent = /** @class */ (function () {
    function CampaignComponent() {
    }
    CampaignComponent.prototype.ngOnInit = function () {
    };
    CampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-campaign',
            template: __webpack_require__(/*! ./campaign.component.html */ "./src/app/content/pages/components/campaign/campaign.component.html"),
            styles: [__webpack_require__(/*! ./campaign.component.scss */ "./src/app/content/pages/components/campaign/campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CampaignComponent);
    return CampaignComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/campaign.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/campaign.module.ts ***!
  \**********************************************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like/like.component */ "./src/app/content/pages/components/campaign/like/like.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share/share.component */ "./src/app/content/pages/components/campaign/share/share.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/review.component */ "./src/app/content/pages/components/campaign/review/review.component.ts");
/* harmony import */ var _like_create_like_create_like_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./like/create-like/create-like.component */ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.ts");
/* harmony import */ var _like_index_like_index_like_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./like/index-like/index-like.component */ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.ts");
/* harmony import */ var _review_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/create-review/create-review.component */ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.ts");
/* harmony import */ var _review_index_review_index_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/index-review/index-review.component */ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.ts");
/* harmony import */ var _share_create_share_create_share_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share/create-share/create-share.component */ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.ts");
/* harmony import */ var _share_index_share_index_share_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./share/index-share/index-share.component */ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./campaign.component */ "./src/app/content/pages/components/campaign/campaign.component.ts");
/* harmony import */ var _like_update_like_update_like_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./like/update-like/update-like.component */ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.ts");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_webbox_webbox_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/webbox/webbox.component */ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.ts");
/* harmony import */ var _dashboard_chart_chart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/chart/chart.component */ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.ts");
/* harmony import */ var _review_update_review_update_review_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./review/update-review/update-review.component */ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.ts");
/* harmony import */ var _share_update_share_update_share_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./share/update-share/update-share.component */ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    {
        path: '',
        component: _campaign_component__WEBPACK_IMPORTED_MODULE_16__["CampaignComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"]
            },
            {
                path: 'like',
                component: _like_like_component__WEBPACK_IMPORTED_MODULE_4__["LikeComponent"],
                children: [
                    {
                        path: 'create-like',
                        component: _like_create_like_create_like_component__WEBPACK_IMPORTED_MODULE_7__["CreateLikeComponent"]
                    },
                    {
                        path: 'index-like',
                        component: _like_index_like_index_like_component__WEBPACK_IMPORTED_MODULE_8__["IndexLikeComponent"],
                    },
                    {
                        path: ':id',
                        component: _like_update_like_update_like_component__WEBPACK_IMPORTED_MODULE_17__["UpdateLikeComponent"],
                    }
                ]
            },
            {
                path: 'review',
                component: _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"],
                children: [
                    {
                        path: 'create-review',
                        component: _review_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_9__["CreateReviewComponent"]
                    },
                    {
                        path: 'index-review',
                        component: _review_index_review_index_review_component__WEBPACK_IMPORTED_MODULE_10__["IndexReviewComponent"]
                    },
                    {
                        path: ':id',
                        component: _review_update_review_update_review_component__WEBPACK_IMPORTED_MODULE_22__["UpdateReviewComponent"]
                    }
                ]
            },
            {
                path: 'share',
                component: _share_share_component__WEBPACK_IMPORTED_MODULE_5__["ShareComponent"],
                children: [
                    {
                        path: 'create-share',
                        component: _share_create_share_create_share_component__WEBPACK_IMPORTED_MODULE_11__["CreateShareComponent"]
                    },
                    {
                        path: 'index-share',
                        component: _share_index_share_index_share_component__WEBPACK_IMPORTED_MODULE_12__["IndexShareComponent"]
                    },
                    {
                        path: ':id',
                        component: _share_update_share_update_share_component__WEBPACK_IMPORTED_MODULE_23__["UpdateShareComponent"]
                    }
                ]
            },
        ]
    }
];
var CampaignModule = /** @class */ (function () {
    function CampaignModule() {
    }
    CampaignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
            ],
            providers: [
                _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_18__["DataService"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _campaign_component__WEBPACK_IMPORTED_MODULE_16__["CampaignComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_4__["LikeComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_5__["ShareComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"],
                _like_index_like_index_like_component__WEBPACK_IMPORTED_MODULE_8__["IndexLikeComponent"],
                _review_index_review_index_review_component__WEBPACK_IMPORTED_MODULE_10__["IndexReviewComponent"],
                _share_index_share_index_share_component__WEBPACK_IMPORTED_MODULE_12__["IndexShareComponent"],
                _like_create_like_create_like_component__WEBPACK_IMPORTED_MODULE_7__["CreateLikeComponent"],
                _review_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_9__["CreateReviewComponent"],
                _share_create_share_create_share_component__WEBPACK_IMPORTED_MODULE_11__["CreateShareComponent"],
                _like_update_like_update_like_component__WEBPACK_IMPORTED_MODULE_17__["UpdateLikeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _dashboard_webbox_webbox_component__WEBPACK_IMPORTED_MODULE_20__["WebboxComponent"],
                _dashboard_chart_chart_component__WEBPACK_IMPORTED_MODULE_21__["ChartComponent"],
                _review_update_review_update_review_component__WEBPACK_IMPORTED_MODULE_22__["UpdateReviewComponent"],
                _share_update_share_update_share_component__WEBPACK_IMPORTED_MODULE_23__["UpdateShareComponent"],
                _share_update_share_update_share_component__WEBPACK_IMPORTED_MODULE_23__["UpdateShareComponent"],
            ]
        })
    ], CampaignModule);
    return CampaignModule;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/chart/chart.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-widget14\">\n\t<div class=\"m-widget14__header\">\n\t\t<h3 class=\"m-widget14__title\">\n\t\t\tThống kê chiến dịch\n\t\t</h3>\n\t\t<span class=\"m-widget14__desc\">\n\t\t\tHiển thị cho người dùng\n\t\t</span>\n\t</div>\n\t<ng-container>\n\t\t<canvas id=\"lineChart\"></canvas>\n\t\t<!-- <canvas id=\"shareChart\"></canvas>\n\t\t<canvas id=\"viewChart\"></canvas> -->\n\t</ng-container>\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/chart/chart.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/chart/chart.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        // tslint:disable-next-line:no-input-rename
        this.data = [];
        this.colorArr = [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(255, 159, 64, 0.3)'
        ];
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngOnChanges = function () {
        if (this.data.length !== 0) {
            this.setCharData();
        }
    };
    ChartComponent.prototype.getData = function () {
        this.likeData = this.data[0];
        this.shareData = this.data[1];
        this.viewData = this.data[2];
    };
    ChartComponent.prototype.setCharData = function () {
        this.getData();
        this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('lineChart', {
            type: 'line',
            data: {
                // tslint:disable-next-line:max-line-length
                labels: this.ChartTimeArr(this.likeData),
                datasets: [{
                        label: this.likeData.name,
                        data: this.ChartDataArr(this.likeData),
                        fill: true,
                        backgroundColor: this.colorArr[0],
                        borderColor: this.colorArr[0],
                        borderWidth: 2.5
                    },
                    {
                        label: this.shareData.name,
                        data: this.ChartDataArr(this.shareData),
                        fill: true,
                        backgroundColor: this.colorArr[1],
                        borderColor: this.colorArr[1],
                        borderWidth: 2.5
                    },
                    {
                        label: this.viewData.name,
                        data: this.ChartDataArr(this.viewData),
                        fill: true,
                        backgroundColor: this.colorArr[2],
                        borderColor: this.colorArr[2],
                        borderWidth: 2.5
                    }
                ]
            },
            options: {
                title: {
                    text: 'Biểu đồ tương tác',
                    display: false
                },
                responsive: true,
            }
        });
        // this.shareChart = new Chart('shareChart', {
        // 	type: 'line',
        // 	data: {
        // 		// tslint:disable-next-line:max-line-length
        // 		labels:  this.ChartTimeArr(this.shareData),
        // 		datasets: [{
        // 			label: this.shareData.name,
        // 			data: this.ChartDataArr(this.shareData),
        // 			fill: true,
        // 			backgroundColor: this.colorArr[1],
        // 			borderColor: this.colorArr[1],
        // 			borderWidth: 2.5
        // 		}]
        // 	},
        // 	options: {
        // 		title: {
        // 			text: 'Biểu đồ số lượng share',
        // 			display: true
        // 		},
        // 		scaleShowVerticalLines: false,
        // 		responsive: true
        // 	}
        // });
        // this.viewChart = new Chart('viewChart', {
        // 	type: 'line',
        // 	data: {
        // 		// tslint:disable-next-line:max-line-length
        // 		labels:  this.ChartTimeArr(this.viewData),
        // 		datasets: [{
        // 			label: this.viewData.name,
        // 			data: this.ChartDataArr(this.viewData),
        // 			fill: true,
        // 			backgroundColor: this.colorArr[2],
        // 			borderColor: this.colorArr[2],
        // 			borderWidth: 2.5
        // 		}]
        // 	},
        // 	options: {
        // 		title: {
        // 			text: 'Biểu đồ số lượng share',
        // 			display: true
        // 		},
        // 		scaleShowVerticalLines: false,
        // 		responsive: true
        // 	}
        // });
    };
    ChartComponent.prototype.ChartDataArr = function (arr) {
        // tslint:disable-next-line:prefer-const
        var rs = [];
        // tslint:disable-next-line:prefer-const
        var data = arr.data;
        data.forEach(function (item) {
            rs.push(item.amount);
        });
        return rs;
    };
    ChartComponent.prototype.ChartTimeArr = function (arr) {
        // tslint:disable-next-line:prefer-const
        var rs = [];
        // tslint:disable-next-line:prefer-const
        var data = arr.data;
        data.forEach(function (item) {
            // tslint:disable-next-line:prefer-const
            var time = new Date(item.time).toDateString();
            rs.push(time);
        });
        return rs;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('chartData'),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "data", void 0);
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/content/pages/components/campaign/dashboard/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"webboxData.length > 0\">\n  <m-webbox [webboxData]=\"webboxData\"></m-webbox>\n </div>\n <div class=\"container\" *ngIf=\"chartData.length > 0\">\n  <m-chart [chartData] = \"chartData\"></m-chart>\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/dashboard.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/dashboard.component.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_data) {
        this._data = _data;
        this.chartData = [];
        this.webboxData = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getwebboxData();
        this.getChartData();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    DashboardComponent.prototype.getwebboxData = function () {
        var _this = this;
        this.sub = this._data.getWebboxData().subscribe(function (webbox) {
            _this.webboxData = webbox;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.getChartData = function () {
        var _this = this;
        this.sub = this._data.getChartData().subscribe(function (data) {
            _this.chartData = data;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/content/pages/components/campaign/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"header-body\">\n    <!-- Card stats -->\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">{{campBox?.name | uppercase}}</h5>\n                <span class=\"h1 font-weight-bold mb-0\">{{campBox?.value}}</span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-success text-white rounded-circle shadow\">\n                  <i class=\"fas fa-users\" style=\"font-size:14px;\"></i>\n                </div>\n              </div>\n            </div>\n            <p class=\"mt-3 mb-0 text-muted text-sm\">\n              <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-right\"></i></span>\n              <span class=\"text-nowrap\">Đang thực hiện</span>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">{{likeBox?.name | uppercase}}</h5>\n                <span class=\"h1 font-weight-bold mb-0\">{{likeBox?.value | number: '1.0-3'}}</span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                  <i class=\"fas fa-thumbs-up\"></i>\n                </div>\n              </div>\n            </div>\n            <p class=\"mt-3 mb-0 text-muted text-sm\">\n              <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-right\"></i></span>\n              <span class=\"text-nowrap\">Đã thích</span>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">{{shareBox?.name | uppercase}}</h5>\n                <span class=\"h1 font-weight-bold mb-0\">{{shareBox?.value | number: '1.0-3'}}</span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                  <i class=\"fas fa-share-alt\"></i>\n                </div>\n              </div>\n            </div>\n            <p class=\"mt-3 mb-0 text-muted text-sm\">\n              <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-right\"></i></span>\n              <span class=\"text-nowrap\">Đã chia sẻ</span>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">{{viewBox?.name | uppercase}}</h5>\n                <span class=\"h1 font-weight-bold mb-0\">{{viewBox?.value | number: '1.0-3'}}</span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                  <i class=\"fas fa-eye\"></i>\n                </div>\n              </div>\n            </div>\n            <p class=\"mt-3 mb-0 text-muted text-sm\">\n              <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-right\"></i></span>\n              <span class=\"text-nowrap\">Đã xem</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  width: 3rem;\n  height: 3rem; }\n\n.icon i,\n.icon svg {\n  font-size: 2.25rem; }\n\n.icon + .icon-text {\n  width: calc(100% - 3rem - 1);\n  padding-left: 1rem; }\n\n.icon-xl {\n  width: 5rem;\n  height: 5rem; }\n\n.icon-xl i,\n.icon-xl svg {\n  font-size: 4.25rem; }\n\n.icon-xl + .icon-text {\n  width: calc(100% - $icon-size-xl - 1); }\n\n.icon-lg {\n  width: 4rem;\n  height: 4rem; }\n\n.icon-lg i,\n.icon-lg svg {\n  font-size: 3.25rem; }\n\n.icon-lg + .icon-text {\n  width: calc(100% - $icon-size-lg - 1); }\n\n.icon-sm {\n  width: 2rem;\n  height: 2rem; }\n\n.icon-sm i,\n.icon-sm svg {\n  font-size: 1.25rem; }\n\n.icon-sm + .icon-text {\n  width: calc(100% - $icon-size-sm - 1); }\n\n.icon-shape {\n  display: inline-flex;\n  padding: 12px;\n  text-align: center;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center; }\n\n.icon-shape i,\n.icon-shape svg {\n  font-size: 1.25rem; }\n\n.icon-shape.icon-lg i,\n.icon-shape.icon-lg svg {\n  font-size: 1.625rem; }\n\n.icon-shape.icon-sm i,\n.icon-shape.icon-sm svg {\n  font-size: .875rem; }\n\n.icon-shape svg {\n  width: 30px;\n  height: 30px; }\n\n.icon-shape-primary {\n  color: #2643e9;\n  background-color: rgba(138, 152, 235, 0.5); }\n\n.icon-shape-secondary {\n  color: #cfe3f1;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-success {\n  color: #1aae6f;\n  background-color: rgba(84, 218, 161, 0.5); }\n\n.icon-shape-info {\n  color: #03acca;\n  background-color: rgba(65, 215, 242, 0.5); }\n\n.icon-shape-warning {\n  color: #ff3709;\n  background-color: rgba(252, 140, 114, 0.5); }\n\n.icon-shape-danger {\n  color: #f80031;\n  background-color: rgba(247, 103, 131, 0.5); }\n\n.icon-shape-light {\n  color: #879cb0;\n  background-color: rgba(201, 207, 212, 0.5); }\n\n.icon-shape-dark {\n  color: #090c0e;\n  background-color: rgba(56, 63, 69, 0.5); }\n\n.icon-shape-default {\n  color: #091428;\n  background-color: rgba(35, 65, 116, 0.5); }\n\n.icon-shape-white {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-neutral {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-darker {\n  color: black;\n  background-color: rgba(26, 26, 26, 0.5); }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WebboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebboxComponent", function() { return WebboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webbox */ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebboxComponent = /** @class */ (function () {
    function WebboxComponent() {
        // tslint:disable-next-line:no-input-rename
        this.data = [];
        this.campBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"]('', '');
        this.likeBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"]('', '');
        this.shareBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"]('', '');
        this.viewBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"]('', '');
    }
    WebboxComponent.prototype.ngOnInit = function () {
    };
    WebboxComponent.prototype.ngOnChanges = function () {
        this.getData();
    };
    WebboxComponent.prototype.getData = function () {
        if (this.data.length !== 0) {
            this.campBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"](this.data[0].name, this.data[0].runningNum + '/' + this.data[0].totalNum);
            this.likeBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"](this.data[1].name, this.data[1].totalNum);
            this.shareBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"](this.data[2].name, this.data[2].totalNum);
            this.viewBox = new _webbox__WEBPACK_IMPORTED_MODULE_1__["webbox"](this.data[3].name, this.data[3].totalNum);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('webboxData'),
        __metadata("design:type", Array)
    ], WebboxComponent.prototype, "data", void 0);
    WebboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-webbox',
            template: __webpack_require__(/*! ./webbox.component.html */ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.html"),
            styles: [__webpack_require__(/*! ./webbox.component.scss */ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebboxComponent);
    return WebboxComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/dashboard/webbox/webbox.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/dashboard/webbox/webbox.ts ***!
  \******************************************************************************/
/*! exports provided: webbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webbox", function() { return webbox; });
// tslint:disable-next-line:class-name
var webbox = /** @class */ (function () {
    function webbox(name, value) {
        this.name = '';
        this.value = 0;
        this.name = name;
        this.value = value;
    }
    return webbox;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/create-like/create-like.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form (submit)=\"createLike()\" #formCreate=\"ngForm\">\r\n    <h1 >THÊM MỚI</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label for =\"nameCamp\">Tên chiến dịch : </label>\r\n        <input type=\"text\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Mời bạn nhập tên chiến dịch\" [(ngModel)]=\"nameCamp\" name=\"nameCamp\" required   >\r\n        <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"thongbao\">\r\n            <div [hidden]=\"!title.errors.required\">\r\n              <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n            </div>\r\n            <!-- <div [hidden]=\"!title.errors.minlength\">\r\n              Title must be at least 5 characters long.\r\n            </div>\r\n            <div [hidden]=\"!title.errors.maxlength\">\r\n              Title cannot be more than 30 characters long.\r\n            </div> -->\r\n          </div>\r\n      </div><br />\r\n      <div class=\"col-md-4\">\r\n        <label for=\"url\">Link chiến dịch : </label><input type=\"text\"  #url=\"ngModel\" class=\"form-control \" placeholder=\"Mời bạn nhập link chiến dịch\" [(ngModel)]=\"linkChiendich\" name=\"linkChiendich\" required pattern=\"https?://.+\" >\r\n        <div *ngIf=\"url.errors && (url.dirty || url.touched)\" class=\"thongbao\">\r\n            <div [hidden]=\"!url.errors.required\">\r\n              <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n            </div>\r\n            <div [hidden]=\"!url.errors.pattern\">\r\n              <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Phải là một đường dẫn hợp lệ\r\n            </div>\r\n          </div>\r\n      </div><br />\r\n      <div class=\"col-md-4\">\r\n        <label>Tổng số lượt like : </label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n          [(ngModel)]=\"currentLike\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n        <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!num.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!num.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n          </div>\r\n        </div>\r\n      </div><br />\r\n    </div>\r\n    <br />\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"formCreate.invalid\">Tạo mới</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/create-like/create-like.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/create-like/create-like.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateLikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLikeComponent", function() { return CreateLikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateLikeComponent = /** @class */ (function () {
    function CreateLikeComponent(data, _router, toastr) {
        this.data = data;
        this._router = _router;
        this.toastr = toastr;
    }
    CreateLikeComponent.prototype.ngOnInit = function () {
    };
    CreateLikeComponent.prototype.createLike = function (formCreate) {
        var _this = this;
        var data = {
            "nameCamp": this.nameCamp,
            "currentLike": this.currentLike,
            "linkChiendich": this.linkChiendich
        };
        this.data.createLike(data)
            .subscribe(function (data) {
            _this._router.navigateByUrl('campaign/like/index-like');
            _this.toastr.success('Chào bạn', 'Bạn đã thêm dữ liệu thành công');
        }, function (error) {
            console.log(error);
        });
    };
    ;
    CreateLikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-create-like',
            template: __webpack_require__(/*! ./create-like.component.html */ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.html"),
            styles: [__webpack_require__(/*! ./create-like.component.scss */ "./src/app/content/pages/components/campaign/like/create-like/create-like.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateLikeComponent);
    return CreateLikeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/index-like/index-like.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin-top:2em;\">DANH SÁCH LIKE</h1>\r\n<div class=\"form-group\">\r\n  <label>Tìm kiếm</label>\r\n  <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Mời bạn nhập vào ô tìm kiếm\">\r\n</div>\r\n<table class=\"table table-hover table-responsive-xs table-info\">\r\n  <thead class=\"thead-dark \">\r\n    <tr>\r\n      <th scope=\"col\">STT</th>\r\n      <th scope=\"col\">Tên chiến dịch</th>\r\n      <th scope=\"col\">Link chiến dịch</th>\r\n      <th scope=\"col\">Tổng like</th>\r\n      <th scope=\"col\">Số like ban đầu</th>\r\n      <th scope=\"col\">Số like mục tiêu</th>\r\n      <th scope=\"col\">Trạng thái</th>\r\n      <th scope=\"col\">Ngày tạo</th>\r\n      <th scope=\"col\">Thao tác</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"lstLike.length > 0\">\r\n    <tr *ngFor=\"let item of lstLike | filter:searchText | paginate:{itemsPerPage:10,currentPage:p};  index as i\">\r\n      <th scope=\"row\">{{i + 1 + (p-1)*10}}</th>\r\n      <td>{{item.nameCamp}}</td>\r\n      <td>{{item.linkChiendich}}</td>\r\n      <td>{{item.currentLike}}</td>\r\n      <td>{{item.beginLike}}</td>\r\n      <td>{{item.targetLike}}</td>\r\n      <td>{{item.status ? 'Đang chạy':'Hoàn thành' }}</td>\r\n      <td>{{item.createDate|date:\"dd/MM/yyyy\"}}</td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDetail(item?.id)\" ><i class=\"far fa-edit\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table >\r\n<pagination-controls *ngIf=\"lstLike.length > 0\" (pageChange)=\"p=$event\"></pagination-controls>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/index-like/index-like.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/index-like/index-like.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IndexLikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexLikeComponent", function() { return IndexLikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexLikeComponent = /** @class */ (function () {
    function IndexLikeComponent(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.lstLike = [];
        this.p = 1;
    }
    IndexLikeComponent.prototype.ngOnInit = function () {
        this.getLike();
    };
    IndexLikeComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    IndexLikeComponent.prototype.getLike = function () {
        var _this = this;
        this.subcription = this._data.getLike()
            .subscribe(function (data) {
            _this.lstLike = data;
        }, function (err) {
            console.log(err);
        });
    };
    IndexLikeComponent.prototype.onDetail = function (id) {
        this._router.navigateByUrl("/campaign/like/" + id);
    };
    IndexLikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-index-like',
            template: __webpack_require__(/*! ./index-like.component.html */ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.html"),
            styles: [__webpack_require__(/*! ./index-like.component.scss */ "./src/app/content/pages/components/campaign/like/index-like/index-like.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexLikeComponent);
    return IndexLikeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/like.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/like.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-sm-12\">\r\n      <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"index-like\" routerLinkActive=\"router-link-active\" >Danh sách chiến dịch</button>\r\n    </div>\r\n    \r\n    <div class=\"col-lg-6 col-sm-12\">\r\n      <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"create-like\" routerLinkActive=\"router-link-active\" >Tạo mới chiến dịch </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/like.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/like.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  background: red; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/like.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/like.component.ts ***!
  \**************************************************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/content/pages/components/campaign/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.scss */ "./src/app/content/pages/components/campaign/like/like.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/update-like/update-like.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form (submit)=\"updateLike();\" #formUpdate=\"ngForm\">\r\n  <h1>CẬP NHẬT</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <label for=\"nameCamp\">Tên chiến dịch</label>\r\n      <input type=\"text\" #title=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Mời bạn nhập tên chiến dịch\"\r\n        [(ngModel)]=\"nameCamp\" name=\"nameCamp\" required>\r\n      <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"thongbao\">\r\n        <div [hidden]=\"!title.errors.required\">\r\n          <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n        </div>\r\n        <!-- <div [hidden]=\"!title.errors.minlength\">\r\n            Title must be at least 5 characters long.\r\n          </div>\r\n          <div [hidden]=\"!title.errors.maxlength\">\r\n            Title cannot be more than 30 characters long.\r\n          </div> -->\r\n      </div>\r\n    </div> <br>\r\n    <div class=\"col-md-4\">\r\n      <label>Link chiến dịch</label><input data-placement=\"top\" title=\"Xin lỗi không thể sửa đường link chiến dịch\"\r\n        value=\"44\" type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"linkChiendich\" name=\"linkChiendich\"\r\n        [disabled]=true>\r\n    </div> <br>\r\n    <div class=\"col-md-4\">\r\n      <label>Tổng số lượt like</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n        [(ngModel)]=\"currentLike\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n      <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n        <div [hidden]=\"!num.errors.required\">\r\n          <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n        </div>\r\n        <div [hidden]=\"!num.errors.pattern\">\r\n          <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"formUpdate.invalid\" >Cập nhật </button>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/update-like/update-like.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/like/update-like/update-like.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateLikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLikeComponent", function() { return UpdateLikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateLikeComponent = /** @class */ (function () {
    function UpdateLikeComponent(_acRouter, _data, _router, toastr) {
        var _this = this;
        this._acRouter = _acRouter;
        this._data = _data;
        this._router = _router;
        this.toastr = toastr;
        this.lastValue = 0;
        this.idLike = this._acRouter.snapshot.params['id'];
        if (this.idLike) {
            this._data.detailLike(this.idLike).subscribe(function (data) {
                // console.log(data);
                _this.nameCamp = data.nameCamp;
                _this.linkChiendich = data.linkChiendich;
                _this.currentLike = data.currentLike;
                _this.lastValue = _this.currentLike;
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình tải dữ liệu', 'Tải dữ liệu bị lỗi');
            });
        }
    }
    UpdateLikeComponent.prototype.ngOnInit = function () {
    };
    UpdateLikeComponent.prototype.updateLike = function () {
        var _this = this;
        if (this.currentLike > this.lastValue) {
            var data = {
                'nameCamp': this.nameCamp,
                'currentLike': this.currentLike,
                'linkChiendich': this.linkChiendich
            };
            this._data.updateLike(this.idLike, data).subscribe(function (data) {
                _this._router.navigateByUrl('/campaign/like/index-like');
                _this.toastr.success('Dữ liệu đã được thay đổi trên hệ thống', 'Cập nhật dữ liệu thành công');
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
            });
        }
        else {
            this.toastr.error('Số like mục tiêu cần lớn hơn số like hiện có', 'Dữ liệu nhập vào không hợp lệ');
        }
    };
    UpdateLikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-update-like',
            template: __webpack_require__(/*! ./update-like.component.html */ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.html"),
            styles: [__webpack_require__(/*! ./update-like.component.scss */ "./src/app/content/pages/components/campaign/like/update-like/update-like.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UpdateLikeComponent);
    return UpdateLikeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/create-review/create-review.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form (submit)=\"createReview(formCreate)\" #formCreate=\"ngForm\">\r\n    <h1>THÊM MỚI</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <label>Tên chiến dịch</label>\r\n        <input type=\"text\" class=\"form-control\" #name=\"ngModel\" placeholder=\"Vui lòng nhập tên chiến dịch\"\r\n          [(ngModel)]=\"nameCamp\" name=\"name\" required>\r\n        <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!name.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <!-- <div [hidden]=\"!title.errors.minlength\">\r\n              Title must be at least 5 characters long.\r\n            </div>\r\n            <div [hidden]=\"!title.errors.maxlength\">\r\n              Title cannot be more than 30 characters long.\r\n            </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label for=\"url\">Link chiến dịch</label>\r\n        <input type=\"text\" placeholder=\"Vui lòng nhập đường dẫn chiến dịch\" #url=\"ngModel\"\r\n          class=\"form-control \" [(ngModel)]=\"linkChiendich\" name=\"linkChiendich\" required\r\n          pattern=\"https?://.+\">\r\n        <div *ngIf=\"url.errors && (url.dirty || url.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!url.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!url.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Phải là một đường dẫn hợp lệ\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label>Tổng số lượt review</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n          [(ngModel)]=\"currentShare\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n        <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!num.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!num.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <label for=\"exampleTextarea\">Nội dung đánh giá</label>\r\n    <textarea class=\"form-control\" id=\"exampleTextarea\" #title=\"ngModel\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\"\r\n      required minlength=\"10\" maxlength=\"30\"></textarea>\r\n    <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"thongbao\">\r\n      <div [hidden]=\"!title.errors.required\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n      </div>\r\n      <div [hidden]=\"!title.errors.minlength\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Nội dung đánh giá tối thiểu 10 kí tự\r\n      </div>\r\n      <div [hidden]=\"!title.errors.maxlength\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Nội dung đánh giá tối đa 30 kí tự\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"formCreate.invalid\">Tạo mới</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/create-review/create-review.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/create-review/create-review.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReviewComponent", function() { return CreateReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateReviewComponent = /** @class */ (function () {
    function CreateReviewComponent(_data, _router, toastr) {
        this._data = _data;
        this._router = _router;
        this.toastr = toastr;
    }
    CreateReviewComponent.prototype.ngOnInit = function () {
    };
    CreateReviewComponent.prototype.createReview = function (formCreate) {
        var _this = this;
        var data = {
            "nameCamp": this.nameCamp,
            "currentLike": this.currentShare,
            "content": this.content,
            "linkChiendich": this.linkChiendich
        };
        this._data.createReview(data)
            .subscribe(function (data) {
            _this._router.navigateByUrl('campaign/review/index-review');
            _this.toastr.success('Bạn đã thêm thành công!!!');
        }, function (error) {
            console.log(error);
        });
    };
    ;
    CreateReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-create-review',
            template: __webpack_require__(/*! ./create-review.component.html */ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.html"),
            styles: [__webpack_require__(/*! ./create-review.component.scss */ "./src/app/content/pages/components/campaign/review/create-review/create-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateReviewComponent);
    return CreateReviewComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/index-review/index-review.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"index-review\">\r\n<h1 style=\"margin-top:2em;\">DANH SÁCH REVIEW</h1>\r\n<div class=\"form-group\">\r\n  <label>Tìm kiếm</label>\r\n  <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Mời bạn nhập vào ô tìm kiếm\">\r\n</div>\r\n<table class=\"table table-hover table-responsive-xs table-info\">\r\n  <thead class=\"thead-dark \">\r\n    <tr>\r\n      <th scope=\"col\">STT</th>\r\n      <th scope=\"col\">Tên chiến dịch</th>\r\n      <th scope=\"col\">Link chiến dịch</th>\r\n      <th scope=\"col\">Số review hiện tại</th>\r\n      <th scope=\"col\">Số review ban đầu</th>\r\n      <th scope=\"col\">Số review mục tiêu</th>\r\n      <th scope=\"col\">Ngày tạo</th>\r\n      <th scope=\"col\">Trạng thái</th>\r\n      <th scope=\"col\">Thao tác</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"lstReview\">\r\n    <tr *ngFor=\"let item of lstReview|filter:searchText|paginate :{itemsPerPage:10,currentPage:p}; let i = index\">\r\n      <th scope=\"row\">{{i +1 + (p-1)*10}}</th>\r\n      <td>{{item.nameCamp}}</td>\r\n      <td>{{item.linkChiendich}}</td>\r\n      <td>{{item.currentReview}}</td>\r\n      <td>{{item.beginReview}}</td>\r\n      <td>{{item.targetReview}}</td>\r\n      <td>{{item.createDate|date:\"dd/MM/yyyy\"}}</td>\r\n      <td>{{item.status ? 'Đang chạy':'Hoàn thành' }}</td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDetail(item?.id)\" ><i class=\"far fa-edit\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls *ngIf=\"lstReview\" (pageChange)=\"p=$event\"></pagination-controls>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/index-review/index-review.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/index-review/index-review.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: IndexReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexReviewComponent", function() { return IndexReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexReviewComponent = /** @class */ (function () {
    function IndexReviewComponent(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.p = 1;
    }
    IndexReviewComponent.prototype.ngOnInit = function () {
        this.getReview();
    };
    IndexReviewComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    IndexReviewComponent.prototype.getReview = function () {
        var _this = this;
        this.subcription = this._data.getReview()
            .subscribe(function (data) {
            _this.lstReview = data;
        }, function (err) {
            console.log(err);
        });
    };
    IndexReviewComponent.prototype.onDetail = function (id) {
        this._router.navigateByUrl("/campaign/review/" + id);
    };
    IndexReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-index-review',
            template: __webpack_require__(/*! ./index-review.component.html */ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.html"),
            styles: [__webpack_require__(/*! ./index-review.component.scss */ "./src/app/content/pages/components/campaign/review/index-review/index-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexReviewComponent);
    return IndexReviewComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/review.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/review.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"index-review\" routerLinkActive=\"router-link-active\" >Danh sách chiến dịch  </button>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"create-review\" routerLinkActive=\"router-link-active\">Tạo mới chiến dịch  </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/review.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/review.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/review.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/review.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/content/pages/components/campaign/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/content/pages/components/campaign/review/review.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/update-review/update-review.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form (submit)=\"updateReview(formUpdate);\" #formUpdate=\"ngForm\">\r\n    <h1>CẬP NHẬT</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label>Tên chiến dịch</label>\r\n        <input type=\"text\" class=\"form-control\" #name=\"ngModel\" placeholder=\"Vui lòng nhập tên chiến dịch\"\r\n          [(ngModel)]=\"nameCamp\" name=\"name\" required>\r\n        <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!name.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <!-- <div [hidden]=\"!title.errors.minlength\">\r\n            Title must be at least 5 characters long.\r\n          </div>\r\n          <div [hidden]=\"!title.errors.maxlength\">\r\n            Title cannot be more than 30 characters long.\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>Link chiến dịch</label>\r\n        <input data-placement=\"top\" title=\"Xin lỗi không thể sửa đường link chiến dịch\" value=\"44\" disabled=\"true\"\r\n          type=\"text\" class=\"form-control \" [(ngModel)]=\"linkChiendich\" name=\"linkChiendich\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>Tổng số lượt review</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n          [(ngModel)]=\"currentReview\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n        <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!num.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!num.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <label for=\"exampleTextarea\">Nội dung đánh giá</label>\r\n    <textarea class=\"form-control\" id=\"exampleTextarea\" #title=\"ngModel\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\"\r\n      required minlength=\"10\" maxlength=\"30\"></textarea>\r\n    <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"thongbao\">\r\n      <div [hidden]=\"!title.errors.required\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n      </div>\r\n      <div [hidden]=\"!title.errors.minlength\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Nội dung đánh giá tối thiểu 10 kí tự\r\n      </div>\r\n      <div [hidden]=\"!title.errors.maxlength\">\r\n        <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Nội dung đánh giá tối đa 30 kí tự\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"formUpdate.invalid\">Cập nhật</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/update-review/update-review.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/review/update-review/update-review.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdateReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReviewComponent", function() { return UpdateReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateReviewComponent = /** @class */ (function () {
    function UpdateReviewComponent(_acRouter, _data, _router, toastr) {
        var _this = this;
        this._acRouter = _acRouter;
        this._data = _data;
        this._router = _router;
        this.toastr = toastr;
        this.lastValue = 0;
        this.idShare = this._acRouter.snapshot.params['id'];
        // get detail
        if (this.idShare) {
            this._data.detailReview(this.idShare).subscribe(function (data) {
                // console.log(data);
                _this.nameCamp = data.nameCamp;
                _this.currentReview = data.currentReview;
                _this.content = data.content;
                _this.linkChiendich = data.linkChiendich;
                _this.lastValue = _this.currentReview;
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
            });
        }
    }
    UpdateReviewComponent.prototype.ngOnInit = function () {
    };
    UpdateReviewComponent.prototype.updateReview = function () {
        var _this = this;
        if (this.currentReview > this.lastValue) {
            var data = {
                'nameCamp': this.nameCamp,
                'currentReview': this.currentReview,
                'content': this.content,
                'linkChiendich': this.linkChiendich
            };
            // tslint:disable-next-line:no-shadowed-variable
            this._data.updateReview(this.idShare, data).subscribe(function (data) {
                _this._router.navigateByUrl('/campaign/review/index-review');
                _this.toastr.success('Dữ liệu đã được thay đổi trên hệ thống', 'Cập nhật thành công!!!');
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
            });
        }
        else {
            this.toastr.error('Số review mục tiêu cần lớn hơn số review hiện có', 'Dữ liệu nhập vào không hợp lệ');
        }
    };
    UpdateReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-update-review',
            template: __webpack_require__(/*! ./update-review.component.html */ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.html"),
            styles: [__webpack_require__(/*! ./update-review.component.scss */ "./src/app/content/pages/components/campaign/review/update-review/update-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UpdateReviewComponent);
    return UpdateReviewComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/create-share/create-share.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form (submit)=\"createShare();\" #formCreate=\"ngForm\">\r\n    <h1>THÊM MỚI</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Tên chiến dịch</label>\r\n          <input type=\"text\" class=\"form-control\" #name=\"ngModel\" placeholder=\"Vui lòng nhập tên chiến dịch\"\r\n            [(ngModel)]=\"nameCamp\" name=\"name\" required>\r\n          <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"thongbao\">\r\n            <div [hidden]=\"!name.errors.required\">\r\n              <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n            </div>\r\n            <!-- <div [hidden]=\"!title.errors.minlength\">\r\n                Title must be at least 5 characters long.\r\n              </div>\r\n              <div [hidden]=\"!title.errors.maxlength\">\r\n                Title cannot be more than 30 characters long.\r\n              </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label for=\"url\">Link chiến dịch</label><input type=\"text\" #url=\"ngModel\" class=\"form-control\"\r\n          placeholder=\"Mời bạn nhập link chiến dịch\" [(ngModel)]=\"linkChiendich\" name=\"linkChiendich\" required\r\n          pattern=\"https?://.+\">\r\n        <div *ngIf=\"url.errors && (url.dirty || url.touched )\" class=\"thongbao\">\r\n          <div [hidden]=\"!url.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!url.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Phải là một đường dẫn hợp lệ\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"sel1\">Độ tuổi</label>\r\n          <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"age\" name=\"age\" required>\r\n            <option value=\"true\">Từ 18 đến 20 tuổi </option>\r\n            <option value=\"false\">Trên 20 tuổi</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"sel1\">Giới tính</label>\r\n          <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"sex\" name=\"sex\" required>\r\n            <option value=\"true\">Nam</option>\r\n            <option value=\"false\">Nữ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>Tổng số lượt review</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n          [(ngModel)]=\"currentShare\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n        <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!num.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!num.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"formCreate.invalid\">Tạo mới</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/create-share/create-share.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/create-share/create-share.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShareComponent", function() { return CreateShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateShareComponent = /** @class */ (function () {
    function CreateShareComponent(_router, data, toastr) {
        this._router = _router;
        this.data = data;
        this.toastr = toastr;
        this.create = [];
    }
    CreateShareComponent.prototype.ngOnInit = function () {
    };
    CreateShareComponent.prototype.createShare = function (formCreate) {
        var _this = this;
        var data = {
            "nameCamp": this.nameCamp,
            "currentShare": this.currentShare,
            "sex": this.sex,
            "age": this.age,
            "linkChiendich": this.linkChiendich
        };
        this.data.createShare(data)
            .subscribe(function (data) {
            _this._router.navigateByUrl('campaign/share/index-share');
            _this.toastr.success("Bạn đã thêm thành công");
        }, function (error) {
            console.log(error);
        });
    };
    CreateShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-create-share',
            template: __webpack_require__(/*! ./create-share.component.html */ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.html"),
            styles: [__webpack_require__(/*! ./create-share.component.scss */ "./src/app/content/pages/components/campaign/share/create-share/create-share.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateShareComponent);
    return CreateShareComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/index-share/index-share.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin-top:2em;\">DANH SÁCH SHARE</h1>\r\n<div class=\"form-group\">\r\n  <label>Tìm kiếm</label>\r\n  <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Mời bạn nhập vào ô tìm kiếm\">\r\n</div>\r\n<table class=\"table table-hover table-responsive-xs table-info table-responsive-xs\">\r\n  <thead class=\"thead-dark \">\r\n      <tr>\r\n        <th scope=\"col\">STT</th>\r\n        <th scope=\"col\">Tên chiến dịch</th>\r\n        <th scope=\"col\">Link chiến dịch</th>\r\n        <th scope=\"col\">Số share hiện tại</th>\r\n        <th scope=\"col\">Số share ban đầu</th>\r\n        <th scope=\"col\">Số share mục tiêu</th>\r\n        <th scope=\"col\">Ngày tạo</th>\r\n        <th scope=\"col\">Trạng thái</th>\r\n        <!-- <th scope=\"col\">Giới tính</th>\r\n        <th scope=\"col\">Độ tuổi</th> -->\r\n        <th scope=\"col\">Thao tác</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"lstShare.length > 0\">\r\n    <tr *ngFor=\"let item of lstShare |filter:searchText|paginate:{itemsPerPage:10,currentPage:p}; let i = index\">\r\n      <th scope=\"row\">{{i+1 + (p-1)*10}}</th>\r\n      <td>{{item.nameCamp}}</td>\r\n      <td>{{item.linkChiendich}}</td>\r\n      <td>{{item.currentShare}}</td>\r\n      <td>{{item.beginShare}}</td>\r\n      <td>{{item.targetShare}}</td>\r\n      <td>{{item.createDate|date:\"dd/MM/yyyy\"}}</td>\r\n      <td>{{item.status  ? 'Đang chạy':'Hoàn thành' }}</td>\r\n      <!-- <td>{{item.sex?\"Nam\":\"Nữ\"}}</td>\r\n      <td>{{item.age?\"Từ 18 đến 20 tuổi\":\"Từ 20 tuổi trở lên\"}}</td> -->\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDetail(item?.id)\" ><i class=\"far fa-edit\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls *ngIf=\"lstShare.length > 0\" (pageChange)=\"p=$event\"></pagination-controls>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/index-share/index-share.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/index-share/index-share.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IndexShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexShareComponent", function() { return IndexShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexShareComponent = /** @class */ (function () {
    function IndexShareComponent(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.lstShare = [];
        this.p = 1;
    }
    IndexShareComponent.prototype.ngOnInit = function () {
        this.getShare();
    };
    IndexShareComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    IndexShareComponent.prototype.getShare = function () {
        var _this = this;
        this.subcription = this._data.getShare()
            .subscribe(function (data) {
            _this.lstShare = data;
        }, function (err) {
            console.log(err);
        });
    };
    IndexShareComponent.prototype.onDetail = function (id) {
        this._router.navigateByUrl("/campaign/share/" + id);
    };
    IndexShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-index-share',
            template: __webpack_require__(/*! ./index-share.component.html */ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.html"),
            styles: [__webpack_require__(/*! ./index-share.component.scss */ "./src/app/content/pages/components/campaign/share/index-share/index-share.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexShareComponent);
    return IndexShareComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/share.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/share.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"index-share\" routerLinkActive=\"router-link-active\" >Danh sách chiến dịch  </button>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <button type=\"button\" class=\"btn  btn-outline-primary btn-block\" routerLink=\"create-share\" routerLinkActive=\"router-link-active\">Tạo mới chiến dịch </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/share.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/share.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/share.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/share.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/content/pages/components/campaign/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.scss */ "./src/app/content/pages/components/campaign/share/share.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/update-share/update-share.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (submit)=\"updateShare()\" #formUpdate=\"ngForm\">\r\n    <h1>CẬP NHẬT</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Tên chiến dịch</label>\r\n          <input type=\"text\" class=\"form-control\" #name=\"ngModel\" placeholder=\"Vui lòng nhập tên chiến dịch\"\r\n            [(ngModel)]=\"nameCamp\" name=\"name\" required>\r\n          <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"thongbao\">\r\n            <div [hidden]=\"!name.errors.required\">\r\n              <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n            </div>\r\n            <!-- <div [hidden]=\"!title.errors.minlength\">\r\n                Title must be at least 5 characters long.\r\n              </div>\r\n              <div [hidden]=\"!title.errors.maxlength\">\r\n                Title cannot be more than 30 characters long.\r\n              </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Link chiến dịch</label>\r\n            <input data-placement=\"top\" title=\"Xin lỗi không thể sửa đường link chiến dịch\" disabled=\"true\" value=\"44\" type=\"text\" class=\"form-control\" name=\"linkChiendich\" [(ngModel)]=\"linkChiendich\"\r\n              [ngModelOptions]=\"{standalone: true}\" >\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"sel1\">Độ tuổi</label>\r\n          <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"age\" [ngModelOptions]=\"{standalone: true}\" required>\r\n            <option value=\"true\">Từ 18 đến 20 tuổi </option>\r\n            <option value=\"false\">Trên 20 tuổi</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Giới tính</label>\r\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"sex\" [ngModelOptions]=\"{standalone: true}\" required>\r\n              <option value=\"true\">Nam</option>\r\n              <option value=\"false\">Nữ</option>\r\n            </select>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>Tổng số lượt review</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tổng số lượt bình luận\" #num=\"ngModel\"\r\n          [(ngModel)]=\"currentShare\" name=\"num\" required pattern=\"^[0-9]\\d*$\" />\r\n        <div *ngIf=\"num.errors && (num.dirty || num.touched)\" class=\"thongbao\">\r\n          <div [hidden]=\"!num.errors.required\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Xin vui lòng nhập đủ dữ liệu!\r\n          </div>\r\n          <div [hidden]=\"!num.errors.pattern\">\r\n            <i class=\"fa fa-times-circle\" style=\"color: red;size:12px\"></i> Chỉ được nhập số\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"formUpdate.invalid\">Cập nhật</button>\r\n  </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/update-share/update-share.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2em;\n  padding: 1em 3em 2.5em 3em; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/components/campaign/share/update-share/update-share.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UpdateShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShareComponent", function() { return UpdateShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services-FANPAGE/data.service */ "./src/app/services-FANPAGE/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateShareComponent = /** @class */ (function () {
    function UpdateShareComponent(_acRouter, _data, _router, fb, toastr) {
        var _this = this;
        this._acRouter = _acRouter;
        this._data = _data;
        this._router = _router;
        this.fb = fb;
        this.toastr = toastr;
        this.lastValue = 0;
        this.idShare = this._acRouter.snapshot.params["id"];
        // console.log(this.idShare); //Kiểm tra id tại console
        if (this.idShare) {
            this._data.detailShare(this.idShare).subscribe(function (data) {
                // console.log(data);  //Kiểm tra dữ liệu tại id đã chọn
                _this.nameCamp = data.nameCamp;
                _this.currentShare = data.currentShare;
                _this.sex = data.sex;
                _this.age = data.age;
                _this.linkChiendich = data.linkChiendich;
                _this.lastValue = _this.currentShare;
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
            });
        }
    }
    UpdateShareComponent.prototype.ngOnInit = function () {
    };
    UpdateShareComponent.prototype.updateShare = function () {
        var _this = this;
        var reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.form = this.fb.group({
            s_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(reg)]],
        });
        if (this.currentShare > this.lastValue) {
            var data = {
                "nameCamp": this.nameCamp,
                "currentShare": this.currentShare,
                "sex": this.sex,
                "age": this.age,
                "linkChiendich": this.linkChiendich,
            };
            this._data.updateShare(this.idShare, data).subscribe(function (data) {
                _this.toastr.success('Dữ liệu đã được thay đổi trên hệ thống', 'Cập nhật dữ liệu thành công');
                _this._router.navigateByUrl('/campaign/share/index-share');
            }, function (error) {
                _this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
            });
        }
        else {
            this.toastr.error('Số share mục tiêu cần lớn hơn số share hiện có', 'Dữ liệu nhập vào không hợp lệ');
        }
    };
    UpdateShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-update-share',
            template: __webpack_require__(/*! ./update-share.component.html */ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.html"),
            styles: [__webpack_require__(/*! ./update-share.component.scss */ "./src/app/content/pages/components/campaign/share/update-share/update-share.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_FANPAGE_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UpdateShareComponent);
    return UpdateShareComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-campaign-campaign-module.js.map