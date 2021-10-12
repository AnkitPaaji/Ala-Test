(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["common"], {

        /***/
        "./src/app/services/product-details.service.ts":
            /*!*****************************************************!*\
              !*** ./src/app/services/product-details.service.ts ***!
              \*****************************************************/
            /*! exports provided: ProductDetailsService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() {
                    return ProductDetailsService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");



                //import { map } from 'rxjs/operators';
                //import { Subject, Observable, BehaviorSubject } from 'rxjs';

                var ProductDetailsService = /** @class */ (function() {
                    function ProductDetailsService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
                    }
                    ProductDetailsService.prototype.getProductData = function(slug, userId) {
                        var _this = this;
                        var url = this.baseURL + 'product/' + slug + '?token=' + (userId ? btoa(userId) : '');
                        if (localStorage.getItem("postal_code") != undefined && localStorage.getItem("postal_code") != '') {
                            url = url + '&postal_code=' + localStorage.getItem("postal_code");
                        }
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    /// Recently view
                    ProductDetailsService.prototype.getRecenlyViewData = function(slug, userId) {
                        var _this = this;
                        var url = this.baseURL + "recently-view?product_slug=" + slug + "&user_id=" + userId;
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    /// Recently view
                    ProductDetailsService.prototype.getRecenlyViewDataList = function(userId) {
                        var _this = this;
                        var url = this.baseURL + "get-recently-view-data?user_id=" + userId + '?version=' + Math.random();
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    ProductDetailsService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], ProductDetailsService);
                    return ProductDetailsService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/recipes.service.ts":
            /*!*********************************************!*\
              !*** ./src/app/services/recipes.service.ts ***!
              \*********************************************/
            /*! exports provided: RecipesService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "RecipesService", function() {
                    return RecipesService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");




                var RecipesService = /** @class */ (function() {
                    function RecipesService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
                    }
                    RecipesService.prototype.getRecipesData = function() {
                        var _this = this;
                        var url = this.baseURL + 'get-recipe-lists';
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    RecipesService.prototype.getRecipeDetailsData = function(id) {
                        var _this = this;
                        var url = this.baseURL + 'get-recipe-detail/' + id;
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    RecipesService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    RecipesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], RecipesService);
                    return RecipesService;
                }());



                /***/
            })

    }
]);
//# sourceMappingURL=common.js.map