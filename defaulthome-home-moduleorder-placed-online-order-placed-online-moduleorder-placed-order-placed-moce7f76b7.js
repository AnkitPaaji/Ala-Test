(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7"], {

        /***/
        "./node_modules/ngx-owl-carousel/index.js":
            /*!************************************************!*\
              !*** ./node_modules/ngx-owl-carousel/index.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                        d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                var __metadata = (this && this.__metadata) || function(k, v) {
                    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
                };

                function __export(m) {
                    for (var p in m)
                        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
                var core_1 = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                var common_1 = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                var owl_carousel_component_1 = __webpack_require__( /*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
                var owl_child_component_1 = __webpack_require__( /*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
                __export(__webpack_require__( /*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
                var OwlModule = (function() {
                    function OwlModule() {}
                    OwlModule = __decorate([
                        core_1.NgModule({
                            imports: [
                                common_1.CommonModule
                            ],
                            declarations: [
                                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
                            ],
                            exports: [
                                owl_carousel_component_1.OwlCarousel
                            ]
                        }),
                        __metadata('design:paramtypes', [])
                    ], OwlModule);
                    return OwlModule;
                }());
                exports.OwlModule = OwlModule;
                //# sourceMappingURL=index.js.map

                /***/
            }),

        /***/
        "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
            /*!*********************************************************************!*\
              !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                        d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                var __metadata = (this && this.__metadata) || function(k, v) {
                    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
                };
                var core_1 = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                var owl_child_component_1 = __webpack_require__( /*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
                var OwlCarousel = (function() {
                    function OwlCarousel(differs) {
                        this.differs = differs;
                        this.carouselClasses = '';
                        this.options = {};
                    }
                    Object.defineProperty(OwlCarousel.prototype, "items", {
                        set: function(coll) {
                            this._items = coll;
                            if (coll && !this.differ) {
                                this.differ = this.differs.find(coll).create(null);
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    OwlCarousel.prototype.ngDoCheck = function() {
                        if (this.differ) {
                            var changes = this.differ.diff(this._items);
                            if (changes) {
                                var changed_1 = false;
                                var changedFn = function() {
                                    changed_1 = true;
                                };
                                changes.forEachAddedItem(changedFn);
                                changes.forEachMovedItem(changedFn);
                                changes.forEachRemovedItem(changedFn);
                                if (changed_1) {
                                    this.reInit();
                                }
                            }
                        }
                    };
                    OwlCarousel.prototype.reInit = function() {
                        var _this = this;
                        if (this.$owlChild.$owl) {
                            this.$owlChild.$owl.css('display', 'none');
                        }
                        setTimeout(function() {
                            _this.$owlChild.destroyOwl();
                            if (_this.$owlChild.$owl) {
                                var itemLength = _this._items && _this._items.length;
                                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                                    _this.$owlChild.currentSlideIndex = itemLength;
                                }
                                _this.$owlChild.$owl.css('display', 'block');
                            }
                            _this.$owlChild.initOwl();
                        }, 0);
                    };
                    OwlCarousel.prototype.refresh = function() {
                        this.trigger('refresh.owl.carousel');
                    };
                    OwlCarousel.prototype.next = function(options) {
                        this.trigger('next.owl.carousel', options);
                    };
                    OwlCarousel.prototype.previous = function(options) {
                        this.trigger('prev.owl.carousel', options);
                    };
                    OwlCarousel.prototype.to = function(options) {
                        this.trigger('to.owl.carousel', options);
                    };
                    OwlCarousel.prototype.trigger = function(action, options) {
                        this.$owlChild.trigger(action, options);
                    };
                    __decorate([
                        core_1.ViewChild('owl'),
                        __metadata('design:type', owl_child_component_1.OwlChild)
                    ], OwlCarousel.prototype, "$owlChild", void 0);
                    __decorate([
                        core_1.Input(),
                        __metadata('design:type', Object)
                    ], OwlCarousel.prototype, "carouselClasses", void 0);
                    __decorate([
                        core_1.Input(),
                        __metadata('design:type', Object)
                    ], OwlCarousel.prototype, "options", void 0);
                    __decorate([
                        core_1.Input(),
                        __metadata('design:type', Array),
                        __metadata('design:paramtypes', [Array])
                    ], OwlCarousel.prototype, "items", null);
                    OwlCarousel = __decorate([
                        core_1.Component({
                            selector: 'owl-carousel',
                            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                                '<ng-content></ng-content></owl-carousel-child>',
                        }),
                        __metadata('design:paramtypes', [core_1.IterableDiffers])
                    ], OwlCarousel);
                    return OwlCarousel;
                }());
                exports.OwlCarousel = OwlCarousel;
                //# sourceMappingURL=owl-carousel.component.js.map

                /***/
            }),

        /***/
        "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
            /*!******************************************************************!*\
              !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                        d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                var __metadata = (this && this.__metadata) || function(k, v) {
                    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
                };
                var core_1 = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                var OwlChild = (function() {
                    function OwlChild(el) {
                        this.el = el;
                        this.owlClass = true;
                        this.options = {};
                        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
                            $ = jQuery;
                        }
                    }
                    OwlChild.prototype.ngOnInit = function() {
                        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
                            this.$owl = $(this.el.nativeElement);
                        }
                    };
                    OwlChild.prototype.ngAfterViewInit = function() {
                        this.initOwl();
                    };
                    OwlChild.prototype.initOwl = function() {
                        var _this = this;
                        if (this.$owl) {
                            var options = {};
                            Object.assign(options, this.options);
                            if (this.currentSlideIndex) {
                                options.startPosition = this.currentSlideIndex;
                            }
                            this.$owl.owlCarousel(options);
                            this.$owl.on('changed.owl.carousel', function(event) {
                                _this.currentSlideIndex = event.item.index;
                            });
                        }
                    };
                    OwlChild.prototype.trigger = function(action, options) {
                        if (this.$owl) {
                            this.$owl.trigger(action, options);
                        }
                    };
                    OwlChild.prototype.ngOnDestroy = function() {
                        this.destroyOwl();
                        delete this.$owl;
                    };
                    OwlChild.prototype.destroyOwl = function() {
                        if (this.$owl) {
                            this.$owl.trigger('destroy.owl.carousel')
                                .removeClass('owl-loaded owl-hidden')
                                .find('.owl-stage:empty, .owl-item:empty')
                                .remove();
                        }
                    };
                    __decorate([
                        core_1.HostBinding('class.owl-carousel'),
                        __metadata('design:type', Object)
                    ], OwlChild.prototype, "owlClass", void 0);
                    __decorate([
                        core_1.Input(),
                        __metadata('design:type', Object)
                    ], OwlChild.prototype, "options", void 0);
                    OwlChild = __decorate([
                        core_1.Component({
                            selector: 'owl-carousel-child',
                            template: '<ng-content></ng-content>'
                        }),
                        __metadata('design:paramtypes', [core_1.ElementRef])
                    ], OwlChild);
                    return OwlChild;
                }());
                exports.OwlChild = OwlChild;
                //# sourceMappingURL=owl-child.component.js.map

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/offer/offer.component.html":
            /*!*****************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/offer/offer.component.html ***!
              \*****************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<!--<div class=\"offerHolder\">-->\n    <!--<a href=\"javascript:;\" class=\"offerLink\">-->\n        <!--<img src=\"assets/images/offer-min.png\" />-->\n    <!--</a>-->\n    <!--<div class=\"container\">-->\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-md-6 align-self-center\">-->\n                <!--<h1 class=\"historia\">Get the App</h1>-->\n                <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>-->\n                <!--<br />-->\n                <!--<a href=\"javascript:;\" target=\"_blank\" class=\"appBadge\">-->\n                    <!--<img src=\"assets/images/google-play-badge.png\" />-->\n                <!--</a>-->\n                <!--<a href=\"javascript:;\" target=\"_blank\" class=\"appBadge\">-->\n                    <!--<img src=\"assets/images/app-store-badge.png\" />-->\n                <!--</a>-->\n            <!--</div>-->\n            <!--<div class=\"col-md-6 align-self-end\">-->\n                <!--<img src=\"assets/images/app-phones.png\" class=\"appImage\" />-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n<div class=\"offerHolder\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6 align-self-center\">\n        <h1 class=\"\">Get the App</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>\n        <br />\n        <!-- <p><b>&nbsp; &nbsp; Get a download link to your phone</b></p>\n        <div class=\"sendLinkHolder\">\n          <input placeholder=\"Enter phone number\" />\n          <button>SEND LINK</button>\n        </div>\n        <br /> -->\n        <a href=\"https://play.google.com/store/apps/details?id=com.app.alatrading\" target=\"_blank\" class=\"appBadge\">\n          <img src=\"assets/images/google-play-badge.png\" />\n        </a>\n        <a href=\"https://apps.apple.com/us/app/\" target=\"_blank\" class=\"appBadge\">\n          <img src=\"assets/images/app-store-badge.png\" />\n        </a>\n      </div>\n      <div class=\"col-md-6 align-self-end\">\n        <img src=\"assets/images/app-phones.png\" class=\"appImage\" />\n      </div>\n    </div>\n  </div>\n</div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/product-slider/product-slider.component.html":
            /*!***********************************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/product-slider/product-slider.component.html ***!
              \***********************************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div>\n    <p class=\"prListHeader\" *ngIf=\"title && productSection.length>0\">\n        <img *ngIf=\"title=='Today Special'\" [src]=\"titleIcon\" />\n        <img *ngIf=\"title=='Chicken/Mutton'\" [src]=\"titleIconTwo\" />\n        <img *ngIf=\"title=='Fish/Seafish'\" [src]=\"titleIconThree\" />\n        <img *ngIf=\"title=='Top Rated Products'\" [src]=\"titleIconFive\" />\n        <img *ngIf=\"title!='Today Special' && title!='Chicken/Mutton' && title!='Fish/Seafish' && title!='Top Rated Products'\" [src]=\"titleIconFour\" />\n        <ng-container *ngIf=\"title=='Today Special'\">Today's Special</ng-container>\n        <ng-container *ngIf=\"title !='Today Special'\"> {{title}} </ng-container>\n    </p>\n  <p *ngIf=\"!title && productSection.length>0\" class=\"prListHeader\">\n    <img [src]=\"titleIcon\" />\n    Suggested products\n  </p>\n    <owl-carousel\n        [options]='owlOptions'\n        [carouselClasses]=\"['owl-theme', 'row', 'sliding']\"\n        class=\"productSlider\" [items]=\"productSection\">\n        <div class=\"item\" *ngFor=\"let productListItem of productSection\">\n            <div class=\"prListItemOuter productIsNew\">\n                <div class=\"prListItem\">\n                  <ng-container *ngIf = \"productListItem?.discount_price > 0\">\n                    <ng-container *ngIf=\"((productListItem?.price - productListItem?.discount_price)*100)/productListItem?.price > 0\">\n                    </ng-container>\n                  </ng-container>\n                    <a [routerLink]=\"['/product',productListItem?.slug]\">\n                      <div class=\"prImageHolder bgLoader\">\n                        <img src=\"assets/images/slider-pl.png\" class=\"prImageHolderPlaceholder\" />\n                        <img *ngIf=\"productListItem?.path\"  [lazyLoad]=\"productListItem?.path\" defaultImage=\"assets/images/no_image.png\" alt=\"{{productListItem.title}}\" />\n                        <img *ngIf=\"productListItem?.images\" [lazyLoad]=\"productListItem?.images\" defaultImage=\"assets/images/no_image.png\" alt=\"{{productListItem.title}}\" />\n                        <span class=\"customizableTag\" *ngIf=\"productListItem?.customize !=null\">{{productListItem?.customize}}</span>\n                        <ng-container *ngIf = \"productListItem?.discount_price > 0\">\n                          <ng-container *ngIf=\"((productListItem?.price - productListItem?.discount_price)*100)/productListItem?.price > 0\">\n                            <div class=\"percentageDiv\">{{((productListItem?.price - productListItem?.discount_price)*100)/productListItem?.price | number:'2.0-0'}}% Off</div>\n                          </ng-container>\n                        </ng-container>\n                    </div>\n                    </a>\n\n                    <div class=\"prListItemContent\">\n\n                        <p class=\"productItemName\" [routerLink]=\"['/product',productListItem?.slug]\">{{ productListItem?.title }}<span class=\"newCode\">{{productListItem?.code}}</span></p>\n                        <p class=\"productDescription\" [routerLink]=\"['/product',productListItem?.slug]\">{{ productListItem?.smallDescription }}</p>\n                        <p class=\"prQty float-left\" *ngIf=\"productListItem?.measurement_type==0\">Gross Wt: {{productListItem?.new_gross_weight_in_grams}}</p>\n                        <p class=\"prQty float-left\" *ngIf=\"productListItem?.measurement_type==1\">Quantity: {{productListItem?.quantity}}</p>\n                        <p class=\"float-right prQty\" *ngIf=\"productListItem?.is_cutting==1\" >Net Wt: {{productListItem?.new_weight_in_grams}}</p>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"clearfix qtyPrice\" [routerLink]=\"['/product',productListItem?.slug]\">\n                          <ng-container *ngIf=\"productListItem?.discount_price > 0\">\n                            <div class=\"float-left\">\n                              <p class=\"prQty\">\n                              <span class=\"prQty\">\n                                <span>{{productListItem?.price | currency : 'INR'}}</span>\n                              </span>\n                              <ng-container *ngIf=\"productListItem?.measurement_type==0\">\n                                <i class=\"redPrice\">\n                                  {{productListItem?.discount_price | currency : 'INR'}}</i>/{{productListItem?.weight}}\n                              </ng-container>\n                              <ng-container *ngIf=\"productListItem?.measurement_type==1\">\n                                <i class=\"redPrice\">\n                                  {{productListItem?.discount_price | currency : 'INR'}}</i>\n                              </ng-container>\n                              </p>\n                            </div>\n                            <div class=\"float-right\">\n                              <ng-container *ngIf=\"productListItem?.stockIn!=true || productListItem?.stockIn==null\">\n                                <div class=\"outOfStockDiv\">Out of stock</div>\n                              </ng-container>\n                            </div>\n                            <div class=\"clearfix\"></div>\n\n                          </ng-container>\n\n                          <ng-container *ngIf=\"productListItem?.discount_price == 0 || productListItem?.discount_price == null\">\n                            <div class=\"float-left\">\n                              <p class=\"prQty\">\n                                <ng-container *ngIf=\"productListItem?.measurement_type==0\">\n                                  <i class=\"redPrice\">\n                                    {{productListItem?.price | currency : 'INR'}}</i>/{{productListItem?.weight}}\n                                </ng-container>\n                                <ng-container *ngIf=\"productListItem?.measurement_type==1\">\n                                  <i class=\"redPrice\">\n                                    {{productListItem?.price | currency : 'INR'}}</i>\n                                </ng-container>\n                              </p>\n                            </div>\n                            <div class=\"float-right\">\n                              <ng-container *ngIf=\"productListItem?.stockIn!=true || productListItem?.stockIn==null\">\n                                <div class=\"outOfStockDiv\">Out of stock</div>\n                              </ng-container>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                          </ng-container>\n                        </div>\n\n                        <div class=\"prListItemButtons\">\n                          <ng-container *ngIf=\"productListItem?.stockIn==true\">\n                          <a href=\"javascript:;\" class=\"btn btn-primary\" *ngIf=\"productListItem?.is_cutting==1\" (click)=\"addToCart(productListItem?.id, productListItem?.product_cutting_option_id)\" >ADD TO CART</a>\n                            <a href=\"javascript:;\" class=\"btn btn-primary\" *ngIf=\"productListItem?.is_cutting==0\" [routerLink]=\"['/product',productListItem?.slug]\">CUTTING OPTION</a>\n                          </ng-container>\n                          <ng-container *ngIf=\"productListItem?.stockIn!=true && userId!=null\">\n                            <a href=\"javascript:;\" class=\"btn btn-primary notifyBtn\" (click)=\"addNotify(productListItem?.id, 1,'')\">\n                              <img src=\"assets/images/icons/2097743.svg\">\n                              <span>NOTIFY ME</span>when available\n                            </a>\n                          </ng-container>\n                          <ng-container *ngIf=\"productListItem?.stockIn!=true && userId==null\">\n                            <a href=\"javascript:;\" class=\"btn btn-primary notifyBtn openLoginModal\">\n                              <img src=\"assets/images/icons/2097743.svg\">\n                              <span>NOTIFY ME</span>when available\n                            </a>\n                          </ng-container>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </owl-carousel>\n</div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-slider/recipe-slider.component.html":
            /*!*********************************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-slider/recipe-slider.component.html ***!
              \*********************************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"recipeItems.length>0\">\n    <div class=\"recipeSliderHolder\">\n        <h4 *ngIf=\"title\">{{title}}</h4>\n        <h4 *ngIf=\"!title\">Suggested recipes</h4>\n        <div class=\"gap20\"></div>\n        <div class=\"recipeSliderOuter\">\n            <owl-carousel\n                [options]='owlOptions'\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\"\n                class=\"productSlider\">\n                <div class=\"item\" *ngFor=\"let recipeItem of recipeItems\">\n                    <div class=\"recItem\">\n                        <!--<a href=\"javascript:;\" class=\"recItemImage\">-->\n                            <!--<img [src]=\"recipeItem.recImage\" class=\"recImage\" />-->\n                        <!--</a>-->\n                        <!--<div class=\"recItemContent\">-->\n                            <!--<h4>{{recipeItem.recName}}</h4>-->\n                            <!--<p><b>Prep time:</b> {{recipeItem.recPrepTime}}</p>-->\n                            <!--<p><b>Cook time:</b> {{recipeItem.recCookTime}}</p>-->\n                            <!--<p><b>Difficulty level:</b> {{recipeItem.recDifficultyLevel}}</p>-->\n                            <!--<div class=\"gap10\"></div>-->\n                            <!--<p><b>Ingredients: </b>{{recipeItem.recIngredients}}</p>-->\n                            <!--<div class=\"gap20\"></div>-->\n                            <!--<a href=\"javascript:;\" [routerLink]=\"['/recipe']\" class=\"btn btn-primary btn-block\">VIEW DETAILS</a>-->\n                        <!--</div>-->\n                      <a href=\"javascript:;\" class=\"recItemImage\">\n                        <img [src]=\"recipeItem?.image\" class=\"recImage\" />\n                      </a>\n                      <div class=\"recItemContent\">\n                        <h4>{{recipeItem?.title}}</h4>\n                        <p><b>Prep time:</b> {{recipeItem?.prep_time}}</p>\n                        <p><b>Cook time:</b> {{recipeItem?.cook_time}}</p>\n                        <p><b>Difficulty level:</b> {{recipeItem?.dif_label}}</p>\n                        <!--<div class=\"gap10\"></div>-->\n                        <!--<p><b>Ingredients: </b><span  [innerHtml]=\"recipeItem?.ingredients_description\"></span>-->\n                        <!--</p>-->\n                        <div class=\"gap20\"></div>\n                        <a href=\"javascript:;\" [routerLink]=\"['/recipe-details',recipeItem?.id]\" class=\"btn btn-primary btn-block\">VIEW DETAILS</a>\n                      </div>\n                    </div>\n                </div>\n            </owl-carousel>\n        </div>\n\n    </div>\n\n</div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/story/story.component.html":
            /*!*****************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/story/story.component.html ***!
              \*****************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div class=\"nStoryHold\">\n    <div class=\"container\">\n       <p class=\"prListHeader text-center\">The Quien's Way</p>\n        <div class=\"storyCols\">\n            <div class=\"storyCol\">\n                <div class=\"storyColInner\">\n                    <div>\n                        <h4 class=\"\">Fresh Naturally Grown </h4>\n                        <p>Unlike many other providers, we provide you fresh fish, not frozen.</p>\n                    </div>\n                    <img  lazyLoad=\"assets/images/os1.png\"  src=\"\" />\n                </div>\n            </div>\n            <div class=\"storyCol\">\n                <div class=\"storyColInner\">\n                    <img  lazyLoad=\"assets/images/os2-min.png\"  src=\"\" />\n                    <div>\n                        <h4 class=\"\">Order and track easily</h4>\n                        <p>Order easily through our website and app, with convenient delivery options and order tracing.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"storyCol\">\n                <div class=\"storyColInner\">\n                    <div>\n                        <h4 class=\"\">Convenient cutting and delivery options</h4>\n                        <p>Choose your favourite cut of the fish, and pick a convenient delivery time slot, for doorstep delivery.</p>\n                    </div>\n                    <img lazyLoad=\"assets/images/os4-min.png\" src=\"\" />\n                </div>\n            </div>\n            <div class=\"storyCol\">\n                <div class=\"storyColInner\">\n                    <img lazyLoad=\"assets/images/os3-min.png\" src=\"\" />\n                    <div>\n                        <h4 class=\"\">Hygienic Handling</h4>\n                        <p>Orders are processed and packed following safety precautions and strict standards</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"storyCol\">\n                <div class=\"storyColInner\">\n                    <div>\n                        <h4 class=\"\">Farm to fork</h4>\n                        <p>We deliver the best quality products from our farms to your kitchen, for great taste and freshness!</p>\n                    </div>\n                    <img lazyLoad=\"assets/images/os5-min.png\" src=\"\" />\n                </div>\n            </div>\n        </div>\n        <!--<div class=\"gap40\"></div>-->\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-sm-8 offset-sm-2\">-->\n                <!--<iframe class=\"storyVideo\" height=\"315\" src=\"https://www.youtube.com/embed/Du1fvhnRXcg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>-->\n            <!--</div>-->\n        <!--</div>-->\n    </div>\n</div>\n\n\n<!-- <div class=\"ALAWay grungeEdge\" style=\"background-image: url('assets/images/ALAway.jpg');\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3>Know the</h3>\n                <h2 class=\"historia\">Quien's Way</h2>\n                <div class=\"wayList\">\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way1.png');\">Naturally Grown </div>\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way2.png');\">Chemical Free</div>\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way3.png');\">Delivered Fresh</div>\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way4.png');\">All Payment Mode</div>\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way5.png');\">Halal Cut</div>\n                    <div class=\"wayItem\" style=\"background-image: url('assets/images/way6.png');\">Quick Food</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n");

                /***/
            }),

        /***/
        "./src/app/common-app-module/common-app-module.module.ts":
            /*!***************************************************************!*\
              !*** ./src/app/common-app-module/common-app-module.module.ts ***!
              \***************************************************************/
            /*! exports provided: CommonAppModuleModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "CommonAppModuleModule", function() {
                    return CommonAppModuleModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



                //import { ImagePreloaderDirective } from '../directives/image-preloader.directive';
                //import { BackgroundPreloaderDirective } from '../directives/background-preloader.directive';
                var CommonAppModuleModule = /** @class */ (function() {
                    function CommonAppModuleModule() {}
                    CommonAppModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            //declarations: [ImagePreloaderDirective,
                            //  BackgroundPreloaderDirective],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                            ],
                        })
                    ], CommonAppModuleModule);
                    return CommonAppModuleModule;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/offer/offer.component.scss":
            /*!***************************************************!*\
              !*** ./src/app/shared/offer/offer.component.scss ***!
              \***************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".offerHolder {\n  background: #f1f1f1;\n  padding: 0 0 0;\n  overflow: hidden;\n}\n.offerHolder a.offerLink {\n  display: block;\n}\n.offerHolder a.offerLink img {\n  width: 100%;\n}\n.offerHolder .appImage {\n  width: 100%;\n  position: relative;\n  bottom: -50px;\n}\n.offerHolder h1 {\n  font-size: 40px;\n}\n.offerHolder .appBadge {\n  display: inline-block;\n  margin-right: 10px;\n  transition: all 0.1s;\n}\n.offerHolder .appBadge:hover {\n  transform: scale(1.05);\n}\n.offerHolder .appBadge img {\n  height: 50px;\n}\n@media screen and (max-width: 768px) {\n  .offerHolder {\n    text-align: center;\n  }\n  .offerHolder .appImage {\n    width: 70%;\n    display: inline-block;\n  }\n  .offerHolder h1 {\n    margin-top: 40px;\n  }\n  .offerHolder .appBadge img {\n    height: 35px;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL29mZmVyL0U6XFxvZmZpY2VfcHJvamVjdFxcZmZiLW5nLW5ld1xcZmZiLW5nLW5ldy9zcmNcXGFwcFxcc2hhcmVkXFxvZmZlclxcb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9vZmZlci9vZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQW9CLGNBQUE7RUFBYyxnQkFBQTtBQ0d0QztBREZJO0VBQ0ksY0FBQTtBQ0lSO0FESFE7RUFDSSxXQUFBO0FDS1o7QURGSTtFQUNJLFdBQUE7RUFBVyxrQkFBQTtFQUFtQixhQUFBO0FDTXRDO0FESkk7RUFDSSxlQUFBO0FDTVI7QURKSTtFQUNJLHFCQUFBO0VBQXNCLGtCQUFBO0VBQWtCLG9CQUFBO0FDUWhEO0FEUFE7RUFDSSxzQkFBQTtBQ1NaO0FEUFE7RUFDSSxZQUFBO0FDU1o7QURKQTtFQUNJO0lBQ0ksa0JBQUE7RUNPTjtFRE5NO0lBQ0ksVUFBQTtJQUFXLHFCQUFBO0VDU3JCO0VEUE07SUFDSSxnQkFBQTtFQ1NWO0VETlU7SUFDSSxZQUFBO0lBQWEsU0FBQTtFQ1MzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL29mZmVyL29mZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmVySG9sZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO3BhZGRpbmc6MCAwIDA7b3ZlcmZsb3c6aGlkZGVuO1xuICAgIGEub2ZmZXJMaW5rIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFwcEltYWdlIHtcbiAgICAgICAgd2lkdGg6MTAwJTtwb3NpdGlvbjogcmVsYXRpdmU7Ym90dG9tOi01MHB4O1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG4gICAgLmFwcEJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDoxMHB4O3RyYW5zaXRpb246YWxsIC4xcztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLm9mZmVySG9sZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIC5hcHBJbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFwcEJhZGdlIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O21hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIub2ZmZXJIb2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAwIDAgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vZmZlckhvbGRlciBhLm9mZmVyTGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm9mZmVySG9sZGVyIGEub2ZmZXJMaW5rIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9mZmVySG9sZGVyIC5hcHBJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTUwcHg7XG59XG4ub2ZmZXJIb2xkZXIgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4ub2ZmZXJIb2xkZXIgLmFwcEJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLm9mZmVySG9sZGVyIC5hcHBCYWRnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4ub2ZmZXJIb2xkZXIgLmFwcEJhZGdlIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9mZmVySG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm9mZmVySG9sZGVyIC5hcHBJbWFnZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLm9mZmVySG9sZGVyIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIC5vZmZlckhvbGRlciAuYXBwQmFkZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */");

                /***/
            }),

        /***/
        "./src/app/shared/offer/offer.component.ts":
            /*!*************************************************!*\
              !*** ./src/app/shared/offer/offer.component.ts ***!
              \*************************************************/
            /*! exports provided: OfferComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "OfferComponent", function() {
                    return OfferComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


                var OfferComponent = /** @class */ (function() {
                    function OfferComponent() {}
                    OfferComponent.prototype.ngOnInit = function() {};
                    OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-offer',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./offer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/offer/offer.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./offer.component.scss */ "./src/app/shared/offer/offer.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], OfferComponent);
                    return OfferComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/product-slider/product-slider.component.scss":
            /*!*********************************************************************!*\
              !*** ./src/app/shared/product-slider/product-slider.component.scss ***!
              \*********************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".prListHeader {\n  font-size: 30px;\n  font-weight: 500;\n  color: #888;\n  margin-bottom: -5px;\n}\n.prListHeader img {\n  height: 40px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  opacity: 0.7;\n}\n.prListItemOuter {\n  padding: 20px 20px 25px;\n}\n.prListItemOuter .prListItem {\n  background: #FFF;\n  padding: 7px 7px 0;\n  border-radius: 22px;\n  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);\n}\n.prListItemOuter .prListItem .prImageHolder {\n  position: relative;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.prListItemOuter .prListItem .prImageHolder img {\n  border-radius: 15px;\n  width: 100%;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n.prListItemOuter .prListItem .prImageHolder img.prImageHolderPlaceholder {\n  width: 100%;\n  z-index: 1;\n  position: relative;\n}\n.prListItemOuter .prListItem .prImageHolder .customizableTag {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  background: #2b98ed;\n  padding: 5px 10px 5px 15px;\n  font-weight: 600;\n  color: #FFF;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 100px;\n  z-index: 10;\n}\n.prListItemOuter .prListItem .prImageHolder .customizableTag img {\n  height: 20px;\n  display: inline-block;\n  margin-right: 3px;\n  width: 20px;\n  position: relative;\n}\n.prListItemOuter .prListItem .prListItemContent {\n  padding: 0 10px;\n}\n.prListItemOuter .prListItem .prListItemContent .productItemName {\n  font-size: 18px;\n  font-weight: 600;\n  color: #444;\n  padding: 20px 0;\n  min-height: 85px;\n  margin: 0;\n  padding-bottom: 0;\n}\n.prListItemOuter .prListItem .prListItemContent .productDescription {\n  font-size: 14px;\n  color: #585858;\n}\n.prListItemOuter .prListItem .prListItemContent .qtyPrice p {\n  margin: 0;\n  font-weight: 500;\n  color: #2b98ed;\n  font-size: 18px;\n}\n@media screen and (max-width: 768px) {\n  .prListItemOuter .prListItem .prListItemContent .qtyPrice p {\n    font-size: 15px;\n  }\n}\n.prListItemOuter .prListItem .prListItemContent .qtyPrice p span {\n  text-decoration: line-through;\n  font-weight: 400;\n  color: #888;\n  font-size: 16px;\n  display: inline-block;\n  margin-right: 0px;\n}\n.prListItemOuter .prListItem .prListItemContent .prListItemButtons {\n  text-align: center;\n  position: relative;\n  top: 18px;\n}\n.prListItemOuter .prListItem .prListItemContent .prListItemButtons a {\n  display: inline-block;\n  margin: 0 5px;\n  width: calc(50% - 10px);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 11px 0;\n}\n@media screen and (max-width: 768px) {\n  .prListHeader {\n    font-size: 20px;\n  }\n\n  .hasCuttingOptions .prListItemOuter .prListItem .prListItemContent .prListItemButtons a {\n    width: calc(100% - 10px);\n  }\n}\n.prListItem {\n  position: relative;\n}\n.percentageDiv {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  color: #fff;\n  background-color: #d60606;\n  border-radius: 6px 0px 0px 6px;\n  z-index: 999;\n  padding: 1px 7px 2px 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.prQty {\n  margin-bottom: 0px;\n}\n.outOfStockDiv {\n  color: #d60606;\n  background-color: #ffffff;\n  border-radius: 6px;\n  z-index: 999;\n  padding: 1px 7px 2px 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #d60606;\n}\n.notifyBtn {\n  padding: 8px 10px 8px 30px !important;\n  background-color: #138ae6;\n  color: #ffffff;\n  line-height: 16px;\n  font-size: 13px !important;\n  border: 2px solid #138ae6;\n  border-radius: 100px;\n  width: 145px !important;\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 45px;\n}\n.notifyBtn:hover {\n  color: #585858;\n  border: 2px solid #138ae6;\n  background-color: #fafafa;\n}\n.notifyBtn img {\n  position: absolute;\n  left: 9px;\n  height: 22px;\n  -webkit-filter: invert(1);\n  filter: invert(1);\n  top: 9px;\n  opacity: 1;\n  width: auto !important;\n}\n.notifyBtn:hover img {\n  -webkit-filter: invert(0);\n  filter: invert(0);\n  opacity: 0.7;\n}\n.notifyBtn span {\n  display: block;\n  line-height: 11px;\n  margin-bottom: 1px;\n  font-weight: 600;\n  font-size: 15px;\n}\n.newCode {\n  font-size: 14px;\n  color: #138ae6;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3Qtc2xpZGVyL0U6XFxvZmZpY2VfcHJvamVjdFxcZmZiLW5nLW5ld1xcZmZiLW5nLW5ldy9zcmNcXGFwcFxcc2hhcmVkXFxwcm9kdWN0LXNsaWRlclxccHJvZHVjdC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0LXNsaWRlci9wcm9kdWN0LXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDSSxZQUFBO0VBQVkscUJBQUE7RUFBcUIsc0JBQUE7RUFBdUIsa0JBQUE7RUFBa0IsWUFBQTtBQ0tsRjtBREZBO0VBQ0ksdUJBQUE7QUNLSjtBREpJO0VBQ0ksZ0JBQUE7RUFBZ0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0IseUNBQUE7QUNTOUQ7QURSUTtFQUNJLGtCQUFBO0VBQW1CLDRCQUFBO0VBQTZCLDZCQUFBO0FDWTVEO0FEWFk7RUFDSSxtQkFBQTtFQUFvQixXQUFBO0VBQVcsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLE1BQUE7RUFBTSxPQUFBO0FDa0JuRjtBRGhCWTtFQUNJLFdBQUE7RUFBVyxVQUFBO0VBQVcsa0JBQUE7QUNvQnRDO0FEbEJZO0VBQWtCLGtCQUFBO0VBQW1CLALAQUE7RUFBUyxZQUFBO0VBQWEsbUJBQUE7RUFBb0IsMEJBQUE7RUFBMkIsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLGVBQUE7RUFBZ0IscUJBQUE7RUFBcUIsNkJBQUE7RUFBOEIsZ0NBQUE7RUFBaUMsV0FBQTtBQ2dDdlA7QUQvQmdCO0VBQUssWUFBQTtFQUFhLHFCQUFBO0VBQXNCLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxrQkFBQTtBQ3NDdEY7QURuQ1E7RUFBb0IsZUFBQTtBQ3NDNUI7QURyQ1k7RUFBa0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixXQUFBO0VBQVksZUFBQTtFQUFnQixnQkFBQTtFQUFpQixTQUFBO0VBQVMsaUJBQUE7QUM4Q3JIO0FEN0NZO0VBQXFCLGVBQUE7RUFBZSxjQUFBO0FDaURoRDtBRC9DZ0I7RUFBRyxTQUFBO0VBQVUsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGVBQUE7QUNxRDdEO0FEcERvQjtFQURKO0lBRVEsZUFBQTtFQ3VEdEI7QUFDRjtBRHREb0I7RUFBTSw2QkFBQTtFQUE4QixnQkFBQTtFQUFnQixXQUFBO0VBQVksZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FDOER4SDtBRDNEWTtFQUFvQixrQkFBQTtFQUFtQixrQkFBQTtFQUFtQixTQUFBO0FDZ0V0RTtBRC9EZ0I7RUFDSSxxQkFBQTtFQUFzQixhQUFBO0VBQWMsdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQixlQUFBO0FDc0VqSDtBRDVEQTtFQUNJO0lBQ0ksZUFBQTtFQzhETjs7RUR2RHNCO0lBQUcsd0JBQUE7RUMyRHpCO0FBQ0Y7QURwREE7RUFDSSxrQkFBQTtBQ3NESjtBRHBEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLALAQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3VESjtBRHBERTtFQUNFLGtCQUFBO0FDdURKO0FEckRBO0VBSUksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ3FESjtBRGpEQTtFQUNJLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDb0RKO0FEbERBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNxREo7QURqREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLALAQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNvREo7QURsREE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3FESjtBRGxEQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcURKO0FEbkRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3NESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0LXNsaWRlci9wcm9kdWN0LXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wckxpc3RIZWFkZXIge1xuICAgIC8vIGZvbnQtZmFtaWx5OiBcIlRoZSBIaXN0b3JpYSBEZW1vXCI7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIG1hcmdpbi1ib3R0b206LTVweDtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6NDBweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO21hcmdpbi1yaWdodDoxMHB4O29wYWNpdHk6IC43O1xuICAgIH1cbn1cbi5wckxpc3RJdGVtT3V0ZXIge1xuICAgIHBhZGRpbmc6MjBweCAyMHB4IDI1cHg7XG4gICAgLnByTGlzdEl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7cGFkZGluZzo3cHggN3B4IDA7Ym9yZGVyLXJhZGl1czogMjJweDtib3gtc2hhZG93OiAwIDdweCAyMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAucHJJbWFnZUhvbGRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt6LWluZGV4OiAyO3RvcDowO2xlZnQ6MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5wckltYWdlSG9sZGVyUGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7ei1pbmRleDogMTtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VzdG9taXphYmxlVGFnIHtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDA7Ym90dG9tOiAxMHB4O2JhY2tncm91bmQ6ICMyYjk4ZWQ7cGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHg7Zm9udC13ZWlnaHQ6IDYwMDtjb2xvcjogI0ZGRjtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IC41cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7ei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgaW1nIHtoZWlnaHQ6IDIwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDogM3B4O3dpZHRoOiAyMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByTGlzdEl0ZW1Db250ZW50IHtwYWRkaW5nOjAgMTBweDtcbiAgICAgICAgICAgIC5wcm9kdWN0SXRlbU5hbWUge2ZvbnQtc2l6ZTogMThweDtmb250LXdlaWdodDogNjAwO2NvbG9yOiAjNDQ0O3BhZGRpbmc6IDIwcHggMDttaW4taGVpZ2h0OiA4NXB4O21hcmdpbjowO3BhZGRpbmctYm90dG9tOjB9XG4gICAgICAgICAgICAucHJvZHVjdERlc2NyaXB0aW9uIHtmb250LXNpemU6MTRweDtjb2xvcjojNTg1ODU4fVxuICAgICAgICAgICAgLnF0eVByaWNlIHtcbiAgICAgICAgICAgICAgICBwIHttYXJnaW46IDA7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzJiOThlZDtmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiAjODg4O2ZvbnQtc2l6ZToxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDowcHg7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wckxpc3RJdGVtQnV0dG9ucyB7dGV4dC1hbGlnbjogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDAgNXB4O3dpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO2ZvbnQtd2VpZ2h0OiA1MDA7Zm9udC1zaXplOiAxNHB4O3BhZGRpbmc6IDExcHggMDtcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLnByTGlzdEhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmhhc0N1dHRpbmdPcHRpb25zIHtcbiAgICAgICAgLnByTGlzdEl0ZW1PdXRlciB7XG4gICAgICAgICAgICAucHJMaXN0SXRlbSB7XG4gICAgICAgICAgICAgICAgLnByTGlzdEl0ZW1Db250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgLnByTGlzdEl0ZW1CdXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge3dpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnByTGlzdEl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wZXJjZW50YWdlRGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjA2MDY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDBweCAwcHggNnB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwYWRkaW5nOiAxcHggN3B4IDJweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4gIC5wclF0eSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm91dE9mU3RvY2tEaXYge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBib3R0b206IDEwcHg7XG4gICAgLy8gbGVmdDogMDtcbiAgICBjb2xvcjogI2Q2MDYwNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcGFkZGluZzogMXB4IDdweCAycHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDYwNjA2O1xufVxuXG5cbi5ub3RpZnlCdG4ge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzOGFlNjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTM4YWU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAxNDVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuLm5vdGlmeUJ0bjpob3ZlciB7XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzEzOGFlNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG5cbi5ub3RpZnlCdG4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOXB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIHRvcDogOXB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5ub3RpZnlCdG46aG92ZXIgaW1nIHtcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDApO1xuICAgIGZpbHRlcjogaW52ZXJ0KDApO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLm5vdGlmeUJ0biBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubmV3Q29kZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMxMzhhZTY7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iLCIucHJMaXN0SGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cbi5wckxpc3RIZWFkZXIgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucHJMaXN0SXRlbU91dGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDI1cHg7XG59XG4ucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogN3B4IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3gtc2hhZG93OiAwIDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wckxpc3RJdGVtT3V0ZXIgLnByTGlzdEl0ZW0gLnBySW1hZ2VIb2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJJbWFnZUhvbGRlciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIC5wckltYWdlSG9sZGVyIGltZy5wckltYWdlSG9sZGVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJJbWFnZUhvbGRlciAuY3VzdG9taXphYmxlVGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmI5OGVkO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJJbWFnZUhvbGRlciAuY3VzdG9taXphYmxlVGFnIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wckxpc3RJdGVtT3V0ZXIgLnByTGlzdEl0ZW0gLnByTGlzdEl0ZW1Db250ZW50IHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJMaXN0SXRlbUNvbnRlbnQgLnByb2R1Y3RJdGVtTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogODVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5wckxpc3RJdGVtT3V0ZXIgLnByTGlzdEl0ZW0gLnByTGlzdEl0ZW1Db250ZW50IC5wcm9kdWN0RGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTg1ODU4O1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJMaXN0SXRlbUNvbnRlbnQgLnF0eVByaWNlIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMmI5OGVkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIC5wckxpc3RJdGVtQ29udGVudCAucXR5UHJpY2UgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4ucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIC5wckxpc3RJdGVtQ29udGVudCAucXR5UHJpY2UgcCBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4ucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIC5wckxpc3RJdGVtQ29udGVudCAucHJMaXN0SXRlbUJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxOHB4O1xufVxuLnByTGlzdEl0ZW1PdXRlciAucHJMaXN0SXRlbSAucHJMaXN0SXRlbUNvbnRlbnQgLnByTGlzdEl0ZW1CdXR0b25zIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDExcHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wckxpc3RIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5oYXNDdXR0aW5nT3B0aW9ucyAucHJMaXN0SXRlbU91dGVyIC5wckxpc3RJdGVtIC5wckxpc3RJdGVtQ29udGVudCAucHJMaXN0SXRlbUJ1dHRvbnMgYSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG59XG4ucHJMaXN0SXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBlcmNlbnRhZ2VEaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYwNjA2O1xuICBib3JkZXItcmFkaXVzOiA2cHggMHB4IDBweCA2cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgcGFkZGluZzogMXB4IDdweCAycHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJRdHkge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5vdXRPZlN0b2NrRGl2IHtcbiAgY29sb3I6ICNkNjA2MDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nOiAxcHggN3B4IDJweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNjA2MDY7XG59XG5cbi5ub3RpZnlCdG4ge1xuICBwYWRkaW5nOiA4cHggMTBweCA4cHggMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4YWU2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTM4YWU2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDE0NXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubm90aWZ5QnRuOmhvdmVyIHtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMzhhZTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5ub3RpZnlCdG4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5cHg7XG4gIGhlaWdodDogMjJweDtcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxKTtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIHRvcDogOXB4O1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZ5QnRuOmhvdmVyIGltZyB7XG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMCk7XG4gIGZpbHRlcjogaW52ZXJ0KDApO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5ub3RpZnlCdG4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5uZXdDb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzEzOGFlNjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iXX0= */");

                /***/
            }),

        /***/
        "./src/app/shared/product-slider/product-slider.component.ts":
            /*!*******************************************************************!*\
              !*** ./src/app/shared/product-slider/product-slider.component.ts ***!
              \*******************************************************************/
            /*! exports provided: ProductSliderComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ProductSliderComponent", function() {
                    return ProductSliderComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/login-registration.service */ "./src/app/services/login-registration.service.ts");
                /* harmony import */
                var _services_cart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/cart-service.service */ "./src/app/services/cart-service.service.ts");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./../../services/message.service */ "./src/app/services/message.service.ts");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








                var ProductSliderComponent = /** @class */ (function() {
                    function ProductSliderComponent(platformId, cart, auth, router, spinnerService, msgService) {
                        this.platformId = platformId;
                        this.cart = cart;
                        this.auth = auth;
                        this.router = router;
                        this.spinnerService = spinnerService;
                        this.msgService = msgService;
                        this.loggedIn = false;
                        this.userId = null;
                    }
                    ProductSliderComponent.prototype.ngOnInit = function() {
                        var _this = this;
                        this.titleIcon = 'assets/images/icons/today_special.svg';
                        this.titleIconTwo = 'assets/images/icons/chickenMutton.svg';
                        this.titleIconThree = 'assets/images/icons/fresh_fish.svg';
                        this.titleIconFour = 'assets/images/icons/related_products.svg';
                        this.titleIconFive = 'assets/images/icons/top_rated.svg';
                        this.owlOptions = {
                            dots: false,
                            navigation: true,
                            lazyLoad: true,
                            autoplay: false,
                            nav: true,
                            responsive: {
                                '0': {
                                    items: 1
                                },
                                '480': {
                                    items: 1
                                },
                                '768': {
                                    items: 2
                                },
                                '992': {
                                    items: 3
                                }
                            }
                        };
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                            $(".prImageHolder").each(function() {
                                $(this).height($(this).width() / 40 * 26);
                            });
                        }
                        if (this.auth.isAuthenticated()) {
                            this.loggedIn = true;
                            this.userId = this.auth.user();
                        }
                        this.auth.watch().subscribe(function(value) {
                            if (value == "false") {
                                _this.loggedIn = false;
                                _this.router.navigate(['/']);
                            } else if (value == "true") {
                                _this.loggedIn = true;
                                _this.userId = _this.auth.user();
                            }
                        });
                    };
                    ProductSliderComponent.prototype.addToCart = function(productId, productCuttingOptionId) {
                        var _this = this;
                        this.spinnerService.show();
                        this.cart.productCheckInStock(productId, productCuttingOptionId).then(function(resJson) {
                            var result = resJson;
                            if (result.success == false) {
                                if (result.error == 1 || result.error == 2) {
                                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(_this.platformId)) {
                                        $(".locationOverlay").fadeIn(200);
                                        $("body").addClass("noScroll");
                                        $(".selectLocation").slideDown();
                                        $(".mobileMenu").removeClass('mmShown');
                                        $(".mobileMenuOverlay").fadeOut(200);
                                        $("body").removeClass("noScroll");
                                    }
                                    _this.msgService.errMessage('Error', result.message, 'Ok');
                                    _this.spinnerService.hide();
                                } else {
                                    _this.msgService.errMessage('Error', result.message, 'Ok');
                                    _this.spinnerService.hide();
                                }
                            } else if (result.success == true) {
                                if (_this.loggedIn) {
                                    _this.spinnerService.show();
                                    _this.cart.addCart(productId, productCuttingOptionId, _this.userId).then(function(resJson) {
                                        var result = resJson;
                                        if (result.data.success == true) {
                                            //console.log(result);
                                            _this.cart.cartBroadCastTypeOne(result.data);
                                            _this.msgService.addToCartMessage();
                                            _this.spinnerService.hide();
                                        }
                                    }).catch(function(error) {
                                        return console.error(error);
                                    });
                                } else {
                                    _this.spinnerService.show();
                                    _this.cart.addCart(productId, productCuttingOptionId, null).then(function(resJson) {
                                        var result = resJson;
                                        if (result.data.success == true) {
                                            _this.cart.cartBroadCastTypeTwo(result);
                                            _this.msgService.addToCartMessage();
                                            _this.spinnerService.hide();
                                        }
                                    }).catch(function(error) {
                                        return console.error(error);
                                    });
                                }
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    ProductSliderComponent.prototype.addNotify = function(productId, productCuttingOptionId, comment) {
                        var _this = this;
                        if (comment === void 0) {
                            comment = null;
                        }
                        if (this.loggedIn) {
                            this.cart.addNoti(productId, productCuttingOptionId, this.userId, comment).then(function(resJson) {
                                var result = resJson;
                                if (result.success == true) {
                                    _this.msgService.addNotificationMessage(result.msg);
                                    _this.spinnerService.hide();
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        } else {
                            this.spinnerService.show();
                            this.cart.addNoti(productId, productCuttingOptionId, null, comment).then(function(resJson) {
                                var result = resJson;
                                if (result.success == true) {
                                    _this.msgService.addNotificationMessage(result.msg);
                                    _this.spinnerService.hide();
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        }
                    };
                    ProductSliderComponent.ctorParameters = function() {
                        return [{
                                type: Object,
                                decorators: [{
                                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                                    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ]
                                }]
                            },
                            {
                                type: _services_cart_service_service__WEBPACK_IMPORTED_MODULE_3__["CartServiceService"]
                            },
                            {
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
                            },
                            {
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]
                            },
                            {
                                type: _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
                            }
                        ];
                    };
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
                    ], ProductSliderComponent.prototype, "productSection", void 0);
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
                    ], ProductSliderComponent.prototype, "title", void 0);
                    ProductSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-product-slider',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./product-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/product-slider/product-slider.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./product-slider.component.scss */ "./src/app/shared/product-slider/product-slider.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object,
                            _services_cart_service_service__WEBPACK_IMPORTED_MODULE_3__["CartServiceService"],
                            _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
                            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
                        ])
                    ], ProductSliderComponent);
                    return ProductSliderComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/recipe-slider/recipe-slider.component.scss":
            /*!*******************************************************************!*\
              !*** ./src/app/shared/recipe-slider/recipe-slider.component.scss ***!
              \*******************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".recipeSliderHolder {\n  padding: 30px 50px;\n  background: #EEE;\n  border-radius: 10px;\n}\n.recipeSliderHolder .recipeSliderOuter {\n  margin: 0 -10px;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem {\n  border-radius: 20px;\n  overflow: hidden;\n  background: #FFF;\n  margin: 0 10px;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemImage {\n  display: block;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemImage .recImage {\n  width: 100%;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemContent {\n  padding: 15px;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemContent h4 {\n  margin-bottom: 10px;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemContent p {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.recipeSliderHolder .recipeSliderOuter .recItem .recItemContent p b {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JlY2lwZS1zbGlkZXIvRTpcXG9mZmljZV9wcm9qZWN0XFxmZmItbmctbmV3XFxmZmItbmctbmV3L3NyY1xcYXBwXFxzaGFyZWRcXHJlY2lwZS1zbGlkZXJcXHJlY2lwZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yZWNpcGUtc2xpZGVyL3JlY2lwZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixtQkFBQTtBQ0d0QztBREZJO0VBQ0ksZUFBQTtBQ0lSO0FESFE7RUFDSSxtQkFBQTtFQUFvQixnQkFBQTtFQUFpQixnQkFBQTtFQUFpQixjQUFBO0FDUWxFO0FEUFk7RUFDSSxjQUFBO0FDU2hCO0FEUmdCO0VBQ0ksV0FBQTtBQ1VwQjtBRFBZO0VBQ0ksYUFBQTtBQ1NoQjtBRFJnQjtFQUNJLG1CQUFBO0FDVXBCO0FEUmdCO0VBQ0ksZ0JBQUE7RUFBZ0IsZUFBQTtBQ1dwQztBRFZvQjtFQUNJLGdCQUFBO0FDWXhCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JlY2lwZS1zbGlkZXIvcmVjaXBlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGVTbGlkZXJIb2xkZXIge1xuICAgIHBhZGRpbmc6MzBweCA1MHB4O2JhY2tncm91bmQ6I0VFRTtib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5yZWNpcGVTbGlkZXJPdXRlciB7XG4gICAgICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICAgICAgLnJlY0l0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtvdmVyZmxvdzogaGlkZGVuO2JhY2tncm91bmQ6ICNGRkY7bWFyZ2luOjAgMTBweDtcbiAgICAgICAgICAgIC5yZWNJdGVtSW1hZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIC5yZWNJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlY0l0ZW1Db250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5yZWNpcGVTbGlkZXJIb2xkZXIge1xuICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNFRUU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucmVjaXBlU2xpZGVySG9sZGVyIC5yZWNpcGVTbGlkZXJPdXRlciB7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbi5yZWNpcGVTbGlkZXJIb2xkZXIgLnJlY2lwZVNsaWRlck91dGVyIC5yZWNJdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ucmVjaXBlU2xpZGVySG9sZGVyIC5yZWNpcGVTbGlkZXJPdXRlciAucmVjSXRlbSAucmVjSXRlbUltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucmVjaXBlU2xpZGVySG9sZGVyIC5yZWNpcGVTbGlkZXJPdXRlciAucmVjSXRlbSAucmVjSXRlbUltYWdlIC5yZWNJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJlY2lwZVNsaWRlckhvbGRlciAucmVjaXBlU2xpZGVyT3V0ZXIgLnJlY0l0ZW0gLnJlY0l0ZW1Db250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5yZWNpcGVTbGlkZXJIb2xkZXIgLnJlY2lwZVNsaWRlck91dGVyIC5yZWNJdGVtIC5yZWNJdGVtQ29udGVudCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVjaXBlU2xpZGVySG9sZGVyIC5yZWNpcGVTbGlkZXJPdXRlciAucmVjSXRlbSAucmVjSXRlbUNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZWNpcGVTbGlkZXJIb2xkZXIgLnJlY2lwZVNsaWRlck91dGVyIC5yZWNJdGVtIC5yZWNJdGVtQ29udGVudCBwIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");

                /***/
            }),

        /***/
        "./src/app/shared/recipe-slider/recipe-slider.component.ts":
            /*!*****************************************************************!*\
              !*** ./src/app/shared/recipe-slider/recipe-slider.component.ts ***!
              \*****************************************************************/
            /*! exports provided: RecipeSliderComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "RecipeSliderComponent", function() {
                    return RecipeSliderComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


                var RecipeSliderComponent = /** @class */ (function() {
                    //recipeItems = [
                    //  {
                    //    'recImage' : 'assets/images/rec1.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //  {
                    //    'recImage' : 'assets/images/rec2.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //  {
                    //    'recImage' : 'assets/images/rec3.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //  {
                    //    'recImage' : 'assets/images/rec1.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //  {
                    //    'recImage' : 'assets/images/rec2.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //  {
                    //    'recImage' : 'assets/images/rec3.webp',
                    //    'recName' : 'Masala fried pomphret',
                    //    'recPrepTime' : '15 mins',
                    //    'recCookTime' : '35 mins',
                    //    'recDifficultyLevel' : 'Easy',
                    //    'recIngredients' : '1 Pomfret, 2 tsp Ginger, 3 Garlic cloves, 1 Tbsp Oil, 1/2 Tbsp Turmeric powder, 1 tsp Red chilli powder, 1 Lemon (juiced)'
                    //  },
                    //];
                    function RecipeSliderComponent() {
                        this.owlOptions = {
                            dots: false,
                            navigation: true,
                            autoplay: false,
                            nav: true,
                            responsive: {
                                '0': {
                                    items: 1
                                },
                                '480': {
                                    items: 1
                                },
                                '768': {
                                    items: 2
                                },
                                '992': {
                                    items: 3
                                }
                            }
                        };
                    }
                    RecipeSliderComponent.prototype.ngOnInit = function() {};
                    RecipeSliderComponent.prototype.ngOnChanges = function() {
                        this.recipeItems = this.transData;
                        console.log('pppppppppppp', this.recipeItems);
                    };
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('recipeItems'),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
                    ], RecipeSliderComponent.prototype, "transData", void 0);
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
                    ], RecipeSliderComponent.prototype, "title", void 0);
                    RecipeSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-recipe-slider',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./recipe-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-slider/recipe-slider.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./recipe-slider.component.scss */ "./src/app/shared/recipe-slider/recipe-slider.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], RecipeSliderComponent);
                    return RecipeSliderComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/shared.module.ts":
            /*!*****************************************!*\
              !*** ./src/app/shared/shared.module.ts ***!
              \*****************************************/
            /*! exports provided: SharedModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "SharedModule", function() {
                    return SharedModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var _product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./product-slider/product-slider.component */ "./src/app/shared/product-slider/product-slider.component.ts");
                /* harmony import */
                var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
                /* harmony import */
                var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _story_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./story/story.component */ "./src/app/shared/story/story.component.ts");
                /* harmony import */
                var _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./offer/offer.component */ "./src/app/shared/offer/offer.component.ts");
                /* harmony import */
                var _recipe_slider_recipe_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./recipe-slider/recipe-slider.component */ "./src/app/shared/recipe-slider/recipe-slider.component.ts");
                /* harmony import */
                var _common_app_module_common_app_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../common-app-module/common-app-module.module */ "./src/app/common-app-module/common-app-module.module.ts");
                /* harmony import */
                var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");











                var SharedModule = /** @class */ (function() {
                    function SharedModule() {}
                    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            declarations: [_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_3__["ProductSliderComponent"], _story_story_component__WEBPACK_IMPORTED_MODULE_6__["StoryComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"], _recipe_slider_recipe_slider_component__WEBPACK_IMPORTED_MODULE_8__["RecipeSliderComponent"]],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _common_app_module_common_app_module_module__WEBPACK_IMPORTED_MODULE_9__["CommonAppModuleModule"],
                                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
                                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
                                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                            ],
                            exports: [
                                _product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_3__["ProductSliderComponent"],
                                _story_story_component__WEBPACK_IMPORTED_MODULE_6__["StoryComponent"],
                                _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"],
                                _recipe_slider_recipe_slider_component__WEBPACK_IMPORTED_MODULE_8__["RecipeSliderComponent"]
                            ]
                        })
                    ], SharedModule);
                    return SharedModule;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/story/story.component.scss":
            /*!***************************************************!*\
              !*** ./src/app/shared/story/story.component.scss ***!
              \***************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".ourStory {\n  padding: 50px 0;\n  background: #FFF;\n}\n.ourStory .container {\n  margin: 0 auto;\n}\n.storyCols {\n  margin-top: 25px;\n}\n.storyCols:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.storyCols .storyCol {\n  width: 20%;\n  float: left;\n}\n.storyCols .storyCol .storyColInner {\n  padding: 0 10px;\n  text-align: center;\n}\n.storyCols .storyCol .storyColInner h4 {\n  font-size: 18px;\n}\n.storyCols .storyCol .storyColInner p {\n  font-size: 13px;\n  color: #888;\n}\n.storyCols .storyCol .storyColInner img {\n  width: 100%;\n}\n.storyVideo {\n  width: 100%;\n  height: 400px;\n}\n.ALAWay {\n  padding: 100px 0;\n  background-position: center;\n  background-size: cover;\n}\n.ALAWay h3 {\n  color: #FFF;\n  margin: 0;\n}\n.ALAWay h2 {\n  color: #FFF;\n  margin: 10px 0;\n  font-size: 50px;\n}\n.ALAWay .container {\n  margin: 0 auto;\n}\n.ALAWay .wayItem {\n  height: 80px;\n  background-size: initial 80px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  height: 80px;\n  line-height: 80px;\n  font-weight: 600;\n  color: #FFF;\n  font-size: 20px;\n  padding-left: 100px;\n}\n@media screen and (max-width: 1170px) {\n  .storyVideo {\n    height: 338px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .storyCols {\n    margin-top: 25px;\n  }\n  .storyCols .storyCol {\n    width: 50%;\n    float: left;\n  }\n  .storyCols .storyCol .storyColInner {\n    text-align: left;\n    position: relative;\n    padding-left: 120px;\n    margin-bottom: 40px;\n  }\n  .storyCols .storyCol .storyColInner img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100px;\n    width: 100px;\n  }\n\n  .storyVideo {\n    height: 248px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .storyCols {\n    margin-top: 25px;\n  }\n  .storyCols .storyCol {\n    width: 100%;\n  }\n\n  .ALAWay {\n    background-position: left top;\n  }\n}\n.nStoryHold {\n  background: #f7f7f7;\n  margin-top: 50px;\n  text-align: center;\n  padding: 50px 0 !important;\n}\n@media screen and (max-width: 1200px) {\n  .nStoryHold {\n    margin: 0;\n  }\n}\n@media screen and (max-width: 992px) {\n  .nStoryHold {\n    margin: 0;\n    padding: 0;\n  }\n}\n.nStoryHold .container {\n  margin: 0 auto !important;\n}\n@media screen and (max-width: 992px) {\n  .nStoryHold .container {\n    margin: 0 auto !important;\n  }\n}\n.nStoryHold .stryImg {\n  width: 100%;\n}\n@media screen and (max-width: 1200px) {\n  .nStoryHold .stryImg {\n    width: 70%;\n  }\n}\n@media screen and (max-width: 992px) {\n  .nStoryHold .stryImg {\n    width: 70%;\n    margin-bottom: 45px;\n  }\n}\n.nStoryHold .storyText {\n  font-size: 15px;\n  opacity: 0.9;\n}\n.nStoryHold .storyInCols .storyIcon {\n  height: 120px;\n  width: 120px;\n  background-position: center;\n  background-size: 45%;\n  background-repeat: no-repeat;\n  border-radius: 100px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 1px rgba(0, 0, 0, 0.32) solid;\n  margin: 0 auto;\n}\n@media screen and (max-width: 768px) {\n  .nStoryHold .storyInCols .storyIcon {\n    background-color: transparent;\n    border: none;\n    height: 100px;\n    width: 100%;\n  }\n}\n.nStoryHold .storyInCols p {\n  font-weight: 600;\n}\n.nStoryHold .orgSteps div {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 10px;\n  background: rgba(255, 255, 255, 0.56);\n  padding: 5px 21px;\n  border-radius: 100px;\n  border: 1px rgba(0, 0, 0, 0.18) solid;\n}\n@media screen and (max-width: 768px) {\n  .nStoryHold .orgSteps div {\n    width: 100%;\n    margin-bottom: 10px;\n    text-align: left;\n  }\n}\n.nStoryHold .orgSteps div span {\n  content: \"1\";\n  display: inline-block;\n  background: #a70000;\n  width: 24px;\n  border-radius: 100px;\n  color: #FFF;\n  height: 24px;\n  position: relative;\n  left: -15px;\n}\n@media screen and (max-width: 992px) {\n  .nStoryHold .orgSteps div span {\n    text-align: center;\n  }\n}\n.nStoryHold .orgSteps img {\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n@media screen and (max-width: 992px) {\n  .nStoryHold .orgSteps img {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0b3J5L0U6XFxvZmZpY2VfcHJvamVjdFxcZmZiLW5nLW5ld1xcZmZiLW5nLW5ldy9zcmNcXGFwcFxcc2hhcmVkXFxzdG9yeVxcc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdG9yeS9zdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFBZSxnQkFBQTtBQ0VuQjtBRERJO0VBQ0ksY0FBQTtBQ0dSO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FERkk7RUFBUyxXQUFBO0VBQVcsY0FBQTtFQUFjLFdBQUE7QUNPdEM7QUROSTtFQUNJLFVBQUE7RUFBVSxXQUFBO0FDU2xCO0FEUlE7RUFDSSxlQUFBO0VBQWUsa0JBQUE7QUNXM0I7QURWWTtFQUNJLGVBQUE7QUNZaEI7QURWWTtFQUNJLGVBQUE7RUFBZ0IsV0FBQTtBQ2FoQztBRFhZO0VBQ0ksV0FBQTtBQ2FoQjtBRFBBO0VBQ0ksV0FBQTtFQUFXLGFBQUE7QUNXZjtBRFJBO0VBQ0ksZ0JBQUE7RUFBZ0IsMkJBQUE7RUFBNEIsc0JBQUE7QUNhaEQ7QURaSTtFQUNJLFdBQUE7RUFBVyxTQUFBO0FDZW5CO0FEYkk7RUFDSSxXQUFBO0VBQVcsY0FBQTtFQUFlLGVBQUE7QUNpQmxDO0FEZkk7RUFDSSxjQUFBO0FDaUJSO0FEZkk7RUFDSSxZQUFBO0VBQVksNkJBQUE7RUFBOEIsNEJBQUE7RUFBNkIsZ0NBQUE7RUFBaUMsWUFBQTtFQUFhLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLFdBQUE7RUFBVyxlQUFBO0VBQWdCLG1CQUFBO0FDMEIzTDtBRHRCQTtFQUNJO0lBQ0ksYUFBQTtFQ3lCTjtBQUNGO0FEdkJBO0VBQ0k7SUFDSSxnQkFBQTtFQ3lCTjtFRHhCTTtJQUNJLFVBQUE7SUFBVSxXQUFBO0VDMkJwQjtFRDFCVTtJQUNJLGdCQUFBO0lBQWlCLGtCQUFBO0lBQW1CLG1CQUFBO0lBQW9CLG1CQUFBO0VDK0J0RTtFRDlCYztJQUNJLGtCQUFBO0lBQW1CLE1BQUE7SUFBTyxPQUFBO0lBQVEsYUFBQTtJQUFjLFlBQUE7RUNvQ2xFOztFRDlCRTtJQUNJLGFBQUE7RUNpQ047QUFDRjtBRDlCQTtFQUNJO0lBQ0ksZ0JBQUE7RUNnQ047RUQvQk07SUFDSSxXQUFBO0VDaUNWOztFRDlCRTtJQUNJLDZCQUFBO0VDaUNOO0FBQ0Y7QUQ5QkE7RUFDSSxtQkFBQTtFQUFvQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQiwwQkFBQTtBQ21DNUQ7QURsQ0k7RUFGSjtJQUdRLFNBQUE7RUNxQ047QUFDRjtBRHBDSTtFQUxKO0lBTVEsU0FBQTtJQUFTLFVBQUE7RUN3Q2Y7QUFDRjtBRHZDSTtFQUNJLHlCQUFBO0FDeUNSO0FEeENRO0VBRko7SUFHUSx5QkFBQTtFQzJDVjtBQUNGO0FEekNJO0VBQ0ksV0FBQTtBQzJDUjtBRDFDUTtFQUZKO0lBR1EsVUFBQTtFQzZDVjtBQUNGO0FENUNRO0VBTEo7SUFNUSxVQUFBO0lBQVcsbUJBQUE7RUNnRHJCO0FBQ0Y7QUQ5Q0k7RUFDSSxlQUFBO0VBQWdCLFlBQUE7QUNpRHhCO0FEOUNRO0VBQ0ksYUFBQTtFQUFjLFlBQUE7RUFBYSwyQkFBQTtFQUE0QixvQkFBQTtFQUFxQiw0QkFBQTtFQUE2QixvQkFBQTtFQUFxQiwwQ0FBQTtFQUF1QyxxQ0FBQTtFQUFzQyxjQUFBO0FDd0R2TjtBRHZEWTtFQUZKO0lBR1EsNkJBQUE7SUFBNkIsWUFBQTtJQUFZLGFBQUE7SUFBYyxXQUFBO0VDNkRyRTtBQUNGO0FEM0RRO0VBQ0ksZ0JBQUE7QUM2RFo7QUR6RFE7RUFDSSxxQkFBQTtFQUFzQixzQkFBQTtFQUF1QixjQUFBO0VBQWUscUNBQUE7RUFBc0MsaUJBQUE7RUFBa0Isb0JBQUE7RUFBcUIscUNBQUE7QUNpRXJKO0FEaEVZO0VBRko7SUFHUSxXQUFBO0lBQVcsbUJBQUE7SUFBb0IsZ0JBQUE7RUNxRTdDO0FBQ0Y7QURwRVk7RUFDSSxZQUFBO0VBQWEscUJBQUE7RUFBc0IsbUJBQUE7RUFBb0IsV0FBQTtFQUFZLG9CQUFBO0VBQXFCLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsV0FBQTtBQzhFcEo7QUQ3RWdCO0VBRko7SUFHUSxrQkFBQTtFQ2dGbEI7QUFDRjtBRDdFUTtFQUNJLFlBQUE7RUFBWSxxQkFBQTtFQUFzQixzQkFBQTtBQ2lGOUM7QURoRlk7RUFGSjtJQUdRLGFBQUE7RUNtRmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdG9yeS9zdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXJTdG9yeXtcbiAgICBwYWRkaW5nOjUwcHggMDtiYWNrZ3JvdW5kOiNGRkY7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbn1cbi5zdG9yeUNvbHMge1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICAmOmFmdGVyIHtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztjbGVhcjpib3RoO31cbiAgICAuc3RvcnlDb2wge1xuICAgICAgICB3aWR0aDoyMCU7ZmxvYXQ6bGVmdDtcbiAgICAgICAgLnN0b3J5Q29sSW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0b3J5VmlkZW8ge1xuICAgIHdpZHRoOjEwMCU7aGVpZ2h0OjQwMHB4O1xufVxuXG4uZmZiV2F5IHtcbiAgICBwYWRkaW5nOjEwMHB4IDA7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaDMge1xuICAgICAgICBjb2xvcjojRkZGO21hcmdpbjowXG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6I0ZGRjttYXJnaW46IDEwcHggMDtmb250LXNpemU6IDUwcHg7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbiAgICAud2F5SXRlbSB7XG4gICAgICAgIGhlaWdodDo4MHB4O2JhY2tncm91bmQtc2l6ZTogaW5pdGlhbCA4MHB4O2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7aGVpZ2h0OiA4MHB4O2xpbmUtaGVpZ2h0OiA4MHB4O2ZvbnQtd2VpZ2h0OiA2MDA7Y29sb3I6I0ZGRjtmb250LXNpemU6IDIwcHg7cGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTE3MHB4KSB7XG4gICAgLnN0b3J5VmlkZW8ge1xuICAgICAgICBoZWlnaHQ6MzM4cHg7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCkge1xuICAgIC5zdG9yeUNvbHMge1xuICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XG4gICAgICAgIC5zdG9yeUNvbCB7XG4gICAgICAgICAgICB3aWR0aDo1MCU7ZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIC5zdG9yeUNvbElubmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O3Bvc2l0aW9uOiByZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6IDEyMHB4O21hcmdpbi1ib3R0b206NDBweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7aGVpZ2h0OiAxMDBweDt3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN0b3J5VmlkZW8ge1xuICAgICAgICBoZWlnaHQ6MjQ4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLnN0b3J5Q29scyB7XG4gICAgICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICAgICAgLnN0b3J5Q29sIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZmYldheSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgIH1cbn1cblxuLm5TdG9yeUhvbGQge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7bWFyZ2luLXRvcDogNTBweDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzo1MHB4IDAgIWltcG9ydGFudDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICBtYXJnaW46MDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCkge1xuICAgICAgICBtYXJnaW46MDtwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAgICAgICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3RyeUltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO21hcmdpbi1ib3R0b206NDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3RvcnlUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O29wYWNpdHk6IC45O1xuICAgIH1cbiAgICAuc3RvcnlJbkNvbHMge1xuICAgICAgICAuc3RvcnlJY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7d2lkdGg6IDEyMHB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6IDQ1JTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JvcmRlci1yYWRpdXM6IDEwMHB4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO2JvcmRlcjogMXB4IHJnYmEoMCwgMCwgMCwgMC4zMikgc29saWQ7bWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtoZWlnaHQ6IDEwMHB4O3dpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5vcmdTdGVwcyB7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTttYXJnaW46IDAgMTBweDtiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO3BhZGRpbmc6IDVweCAyMXB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O2JvcmRlcjogMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCkgc29saWQ7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOiAxMHB4O3RleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiMVwiO2Rpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiAjYTcwMDAwO3dpZHRoOiAyNHB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O2NvbG9yOiAjRkZGO2hlaWdodDogMjRweDtwb3NpdGlvbjogcmVsYXRpdmU7bGVmdDogLTE1cHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6MTVweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm91clN0b3J5IHtcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuLm91clN0b3J5IC5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN0b3J5Q29scyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uc3RvcnlDb2xzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuLnN0b3J5Q29scyAuc3RvcnlDb2wge1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zdG9yeUNvbHMgLnN0b3J5Q29sIC5zdG9yeUNvbElubmVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RvcnlDb2xzIC5zdG9yeUNvbCAuc3RvcnlDb2xJbm5lciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zdG9yeUNvbHMgLnN0b3J5Q29sIC5zdG9yeUNvbElubmVyIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuLnN0b3J5Q29scyAuc3RvcnlDb2wgLnN0b3J5Q29sSW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdG9yeVZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5mZmJXYXkge1xuICBwYWRkaW5nOiAxMDBweCAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uZmZiV2F5IGgzIHtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMDtcbn1cbi5mZmJXYXkgaDIge1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5mZmJXYXkgLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZmYldheSAud2F5SXRlbSB7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsIDgwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbiAgLnN0b3J5VmlkZW8ge1xuICAgIGhlaWdodDogMzM4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zdG9yeUNvbHMge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgLnN0b3J5Q29scyAuc3RvcnlDb2wge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnN0b3J5Q29scyAuc3RvcnlDb2wgLnN0b3J5Q29sSW5uZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuc3RvcnlDb2xzIC5zdG9yeUNvbCAuc3RvcnlDb2xJbm5lciBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC5zdG9yeVZpZGVvIHtcbiAgICBoZWlnaHQ6IDI0OHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3RvcnlDb2xzIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG4gIC5zdG9yeUNvbHMgLnN0b3J5Q29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mZmJXYXkge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICB9XG59XG4ublN0b3J5SG9sZCB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5TdG9yeUhvbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5TdG9yeUhvbGQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4ublN0b3J5SG9sZCAuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uU3RvcnlIb2xkIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uU3RvcnlIb2xkIC5zdHJ5SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5TdG9yeUhvbGQgLnN0cnlJbWcge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uU3RvcnlIb2xkIC5zdHJ5SW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIH1cbn1cbi5uU3RvcnlIb2xkIC5zdG9yeVRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5uU3RvcnlIb2xkIC5zdG9yeUluQ29scyAuc3RvcnlJY29uIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNDUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDAsIDAuMzIpIHNvbGlkO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uU3RvcnlIb2xkIC5zdG9yeUluQ29scyAuc3RvcnlJY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm5TdG9yeUhvbGQgLnN0b3J5SW5Db2xzIHAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm5TdG9yeUhvbGQgLm9yZ1N0ZXBzIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIHBhZGRpbmc6IDVweCAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KSBzb2xpZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uU3RvcnlIb2xkIC5vcmdTdGVwcyBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuLm5TdG9yeUhvbGQgLm9yZ1N0ZXBzIGRpdiBzcGFuIHtcbiAgY29udGVudDogXCIxXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2E3MDAwMDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5TdG9yeUhvbGQgLm9yZ1N0ZXBzIGRpdiBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5uU3RvcnlIb2xkIC5vcmdTdGVwcyBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uU3RvcnlIb2xkIC5vcmdTdGVwcyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

                /***/
            }),

        /***/
        "./src/app/shared/story/story.component.ts":
            /*!*************************************************!*\
              !*** ./src/app/shared/story/story.component.ts ***!
              \*************************************************/
            /*! exports provided: StoryComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "StoryComponent", function() {
                    return StoryComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


                var StoryComponent = /** @class */ (function() {
                    function StoryComponent() {}
                    StoryComponent.prototype.ngOnInit = function() {};
                    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-story',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/story/story.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./story.component.scss */ "./src/app/shared/story/story.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], StoryComponent);
                    return StoryComponent;
                }());



                /***/
            })

    }
]);
//# sourceMappingURL=default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7.js.map