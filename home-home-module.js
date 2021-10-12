(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["home-home-module"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
            /*!*******************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
              \*******************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<!-- <div class=\"deliveruSlotHead\" *ngIf=\"slotValueList\" > -->\n\t<!-- <div class=\"tagName\">\n\t\t<p class=\"orderBfr\">Order before:</p>\n\t\t<p class=\"dlvrSltHead\">Delivery slots:</p>\n\t</div> -->\n\t<!-- <a href=\"javascript:;\" class=\"btn btn-primary notifyBtn\" (click)=\"openSlotChart();\">View slot chart\n\t</a> -->\n\t<!-- <div class=\"slotTime\" *ngFor=\"let slotV of slotValueList;let i = index\">\n\t\t<span>{{slotV?.orderSlot}}</span><br>\n\t\t<div class=\"timeHolder\">{{slotV?.text}}</div>\n\t</div> -->\n<!-- </div> -->\n\n<div class=\"homeContent\">\n\t<a *ngIf=\"slotValueList\" href=\"javascript:;\" class=\"btn btn-primary notifyBtn timeSlotHomeBtn\" (click)=\"openSlotChart();\">Order Timing\n\t</a>\n\t<!-- Loader Begins -->\n\t<div class=\"globalLoaderBgHold\">\n\t\t<div class=\"container\">\n\t\t\t<img src=\"assets/images/web-min.png\" class=\"glWeb\" />\n\t\t\t<img src=\"assets/images/app-min.png\" class=\"glApp\" />\n\t\t</div>\n\t</div>\n\t<!-- Loader Ends -->\n\n  <div class=\"\"  infiniteScroll [infiniteScrollDistance]=\"3\" [infiniteScrollThrottle]=\"150\" (scrolled)=\"onScroll()\">\n\n\t<ng-container *ngFor=\"let content of homePageData;let i = index\">\n\t\t<div class=\"homeBanner\" *ngIf=\"content?.type=='Banner'\">\n\t\t\t<owl-carousel\n\t\t\t  [options]=\"{items: 1, dots: true, navigation: false, lazyLoad:true,autoplay: true}\"\n\t\t\t  [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" [items]=\"content?.banners\">\n\n\t\t\t  <div class=\"item\" *ngFor=\"let image of content?.banners;let j = index\">\n\t\t\t\t<div class=\"homeBannerItem\">\n\t\t\t\t  <img [lazyLoad]=\"image.path\" alt=\"Quien's\"  defaultImage=\"assets/images/banner-placeholder.png\"/>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</owl-carousel>\n\t\t  </div>\n\t</ng-container>\n\n    <ng-container *ngFor=\"let content of homePageData;let i = index\">\n      <div class=\"container\">\n\t      <div class=\"homeCategories\" *ngIf=\"content?.type=='Category'\">\n\t        <div class=\"row\">\n\t          <div class=\"col-6 col-sm-6 col-md-3 col-lg-3 homeCategoriesCol\" *ngFor=\"let category of content?.categories;let k = index\">\n\t            <a href=\"javascript:;\" class=\"homecategoryItem homecategoryItemCustom bgLoader\" [routerLink]=\"['/products',category?.slug]\">\n\t              <div class=\"homecategoryItemInner\" [lazyLoad]=\"category?.path\" role=\"img\" [attr.aria-label]=\"category.title\"></div>\n\t              <span>{{category?.title}}</span>\n\t            </a>\n\t          </div>\n\t        </div>\n\t      </div>\n      </div>\n\t</ng-container>\n\n\t<!-- START BANNER AREA -->\n\t<div class=\"container\">\n\t\t<ng-container *ngFor=\"let content of homePageData;let i = index\">\n\t\t\t<ng-container *ngIf=\"content?.type=='Flex'\">\n\t\t\t\t<ng-container *ngFor=\"let flexData of content?.flexes;let j = index\">\n\t\t\t\t<a href=\"javascript:;\" class=\"offerLink openDeliveryCaller\" (click)=\"flexClick(i);\">\n\t\t\t\t\t<img [lazyLoad]=\"flexData.path\"  defaultImage=\"assets/images/banner_holder.png\" />\n\t\t\t\t</a>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\t</div>\n\t<!-- <div class=\"gap10\"></div> -->\n\n\t<ng-container *ngFor=\"let content of homePageData;let i = index\">\n\t\t<div class=\"container\">\n\t\t<ng-container *ngIf=\"content?.type=='Product'\">\n\t        <app-product-slider [productSection]=\"content?.products\" [title]=\"content?.title\"></app-product-slider>\n\t\t  </ng-container>\n\t\t</div>\n\t</ng-container>\n\n    <div class=\"container\">\n\t    <ng-container *ngIf=\"recentDataLIst?.length>0\">\n\t      <app-product-slider [productSection]=\"recentDataLIst\" [title]=\"recentlyTitle\"></app-product-slider>\n\t    </ng-container>\n\n\t\t<ng-container *ngFor=\"let content of homePageData;let i = index\">\n\t\t  <ng-container *ngIf=\"content?.type=='Recipe'\">\n\t\t    <app-recipe-slider [recipeItems]=\"content?.recipes\"  [title]=\"content?.title\"></app-recipe-slider>\n\t\t  </ng-container>\n\t\t</ng-container>\n\t</div>\n\t<!-- END -->\n  </div>\n  <app-story></app-story>\n  <app-offer></app-offer>\n\n</div>\n<div class=\"DeliveryAvailableModal\">\n\t<div class=\"timeSlotInner\">\n\t  <a href=\"javascript:;\" class=\"DeliveryAvail\"><img src=\"assets/images/icons/close.svg\"/></a>\n\t  <div class=\"DeliveryContent\">\n\t\t<img   lazyLoad=\"assets/images/delivery_modal_img.png\"  src=\"\" alt=\"Quien's Delivery\" class=\"DeliveryBannertImg\">\n\t\t<h1 class=\"delHeader text-center\">Live Delivery Updates - Delhi-NCR</h1>\n\t\t<h3 class=\"delSubHead text-center\">As of today, We are delivering in the following areas in Delhi-NCR</h3>\n\t\t<div class=\"gap20\"></div>\n\t\t<ng-container *ngFor=\"let areaName of areaList;\">\n\t\t\t<div class=\"prInfoPointsHolder\">\n\t\t\t\t<div>\n\t\t\t\t  <h4>{{areaName.title}}</h4>\n\t\t\t\t  <p>\n\t\t\t\t\t  <ng-container *ngFor=\"let areaNew of areaName.area;\">\n\t\t\t\t\t\t{{areaNew.title}},\n\t\t\t\t\t  </ng-container>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t</ng-container>\n\t  </div>\n\t</div>\n  </div>\n  <div class=\"DeliveryAvailableModalOverlay\"></div>\n  <!-- <div class=\"deliveruSlotHead\" *ngIf=\"slotValueList\" > -->\n  <div class=\"slotChartModal\">\n\t<div class=\"timeSlotInner\" *ngIf=\"slotValueList\">\n\t  <a href=\"javascript:;\" class=\"DeliveryAvail slotClick\"><img src=\"assets/images/icons/close.svg\"/></a>\n\t  <div class=\"DeliveryContent\">\n\t\t<p [innerHtml]=\"slotValueList.slot_chart\"></p>\n\t  </div>\n\t</div>\n  </div>\n  <div class=\"slotChartModalOverlay\"></div>\n  <ng-container *ngIf=\"loggedIn &&  settingObj.rewardSetting\">\n\t<ng-container  *ngIf=\"settingObj.rewardSetting.status==1\">\n\t  <a href=\"javascript:;\" [routerLink]=\"['/account']\" class=\"rewardholder\">\n\t\t<span>Redeem Your Reward Points</span>\n\t  </a>\n\t</ng-container>\n  </ng-container>\n\n  \n");

                /***/
            }),

        /***/
        "./src/app/components/home/home-routing.module.ts":
            /*!********************************************************!*\
              !*** ./src/app/components/home/home-routing.module.ts ***!
              \********************************************************/
            /*! exports provided: HomeRoutingModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() {
                    return HomeRoutingModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./home.component */ "./src/app/components/home/home.component.ts");




                //noinspection TypeScriptValidateTypes
                var routes = [{
                        path: '',
                        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                    },
                    {
                        path: 'home',
                        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                    }
                ];
                var HomeRoutingModule = /** @class */ (function() {
                    function HomeRoutingModule() {}
                    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                        })
                    ], HomeRoutingModule);
                    return HomeRoutingModule;
                }());



                /***/
            }),

        /***/
        "./src/app/components/home/home.component.scss":
            /*!*****************************************************!*\
              !*** ./src/app/components/home/home.component.scss ***!
              \*****************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".homeContent {\n  background-size: 100%;\n  background-position: center top;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.homeContent .homeBanner {\n  border-radius: 0px;\n  border: none;\n  overflow: hidden;\n  margin-top: 15px;\n  background: #FFF;\n  overflow: hidden;\n  position: relative;\n}\n.homeContent .homeBanner:before {\n  content: \"\";\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: #EEE;\n  -webkit-animation: bannerLoader 0.5s infinite;\n          animation: bannerLoader 0.5s infinite;\n}\n@-webkit-keyframes bannerLoader {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@keyframes bannerLoader {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.homeContent .homeBanner owl-carousel .item img {\n  width: 100%;\n}\n@media screen and (max-width: 580px) {\n  .homeContent .homeBanner owl-carousel .item img {\n    width: 100%;\n    height: 110px;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n@media screen and (max-width: 440px) {\n  .homeContent .homeBanner owl-carousel .item img {\n    width: 100%;\n  }\n}\n.homeContent .homeBanner owl-carousel owl-carousel-child {\n  margin: 0;\n}\n.homeContent .homeCategories {\n  margin-top: 40px;\n}\n.homeContent .homeCategories .homeCategoriesCol {\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.homeContent .homeCategories .homecategoryItem {\n  margin-bottom: 15px;\n  position: relative;\n  display: block;\n  transition: all 0.2s;\n  border-radius: 15px;\n  background: #FFF;\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeCategories .homecategoryItem {\n    margin-bottom: 10px;\n  }\n}\n.homeContent .homeCategories .homecategoryItem:hover {\n  transform: scale(1.05);\n}\n.homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n  background-position: center;\n  background-size: cover;\n  border-radius: 15px;\n  border: 5px rgba(209, 235, 241, 0.83) solid;\n  box-shadow: 0 0 19px 0px rgba(0, 0, 0, 0.25);\n  z-index: 1;\n  position: relative;\n  height: 200px;\n}\n@media screen and (max-width: 1200px) {\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 210px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 250px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 210px;\n  }\n}\n@media screen and (max-width: 400px) {\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 170px;\n  }\n}\n.homeContent .homeCategories .homecategoryItem span {\n  position: absolute;\n  left: 5px;\n  bottom: 20px;\n  color: #FFF;\n  font-weight: bold;\n  padding: 13px 20px;\n  background: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  z-index: 2;\n}\n.homeContent .homeCategories .homecategoryItem span:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -5px;\n  width: 5px;\n  display: inline-block;\n  background: #2b98ed;\n}\n.homeContent .homeCategories .homecategoryItemCustom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.homeContent .homeCategories .homecategoryItemCustom .homecategoryItemInner {\n  width: 100%;\n}\n.homeContent .homeCategories .homecategoryItemCustom span {\n  position: absolute;\n  left: unset !important;\n  bottom: 5px;\n  color: #FFF;\n  font-weight: bold;\n  padding: 5px 16px;\n  background: rgba(19, 138, 230, 0.84);\n  font-size: 13px;\n  z-index: 2;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeCategories .homecategoryItemCustom span {\n    bottom: 0;\n  }\n}\n.homeContent .homeCategories .homecategoryItemCustom span:after {\n  content: \"\";\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeBanner {\n    border-radius: 0;\n    border: none;\n    margin-top: 6px;\n  }\n\n  .homeContent .homeCategories {\n    margin-top: 10px !important;\n  }\n  .homeContent .homeCategories .row {\n    margin: 0 -5px;\n  }\n  .homeContent .homeCategories .row > div {\n    padding: 0 5px;\n  }\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 150px;\n    border-radius: 7px;\n    border: 0px rgba(209, 235, 241, 0.83) solid;\n  }\n}\n@media screen and (max-width: 768px) and (max-width: 768px) {\n  .homeContent .homeCategories .homecategoryItem .homecategoryItemInner {\n    height: 120px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeCategories .homecategoryItem span {\n    left: 0;\n    padding: 9px 6px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .homeContent .homeCategories {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .prListHeader img {\n    height: 30px;\n    position: relative;\n    top: -4px;\n  }\n}\n.headerNav .searchSubmit {\n  background-size: 35%;\n}\n.DeliveryAvailableModalOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n.DeliveryAvailableModal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n.DeliveryAvailableModal .timeSlotInner {\n  width: 800px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 99vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryAvail {\n  position: absolute;\n  right: 8px;\n  top: 0px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryAvail img {\n  height: 15px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 50px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 20px;\n  font-weight: 500;\n  position: relative;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 53%;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .DeliveryBannertImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationInput {\n  position: relative;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.DeliveryAvailableModalOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n.DeliveryAvailableModal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n.DeliveryAvailableModal .timeSlotInner {\n  width: 800px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 99vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryAvail {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryAvail img {\n  height: 15px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 50px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 20px;\n  font-weight: 500;\n  position: relative;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 53%;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .DeliveryBannertImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .selectLocationInput {\n  position: relative;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n.DeliveryAvailableModal .timeSlotInner .DeliveryContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.prInfoPointsHolder {\n  margin: -5px 0 10px;\n}\n.prInfoPointsHolder h4 {\n  font-size: 17px;\n}\n.prInfoPointsHolder p {\n  font-size: 13px;\n}\n.prInfoPointsHolder div {\n  margin-left: 35px;\n  position: relative;\n  padding: 5px 0;\n  color: #888;\n}\n.prInfoPointsHolder div:after {\n  content: \"\";\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: -32px;\n  top: 10px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-image: url('check-symbol.svg');\n}\n.delHeader {\n  font-size: 24px;\n}\n.delSubHead {\n  font-size: 18px;\n}\n.deliveruSlotHead {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  padding: 10px 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n}\n.deliveruSlotHead .tagName {\n  text-align: left;\n  margin-right: 10px;\n}\n.deliveruSlotHead .orderBfr {\n  font-size: 14px;\n  color: #777777;\n  line-height: 15px;\n  margin-bottom: 2px;\n  vertical-align: super;\n  display: inline-block;\n}\n.deliveruSlotHead .dlvrSltHead {\n  font-size: 18px;\n  color: #000000;\n  line-height: 15px;\n  margin-bottom: 0px;\n  font-weight: 600;\n}\n.deliveruSlotHead .slotTime {\n  text-align: left;\n  margin-right: 10px;\n  line-height: 10px;\n}\n.deliveruSlotHead .slotTime:last-child {\n  margin-right: 0;\n}\n.deliveruSlotHead .slotTime span {\n  font-size: 15px;\n  color: #ffab44;\n  font-weight: 600;\n  line-height: 12px;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.deliveruSlotHead .slotTime .timeHolder {\n  padding: 9px 6px;\n  border: 1px solid #c9e8cd;\n  background-color: #f8fff9;\n  color: #5bb167;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  border-radius: 5px;\n}\n.slotChartModalOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n.slotChartModal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n.slotChartModal .timeSlotInner {\n  width: 1000px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 99vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.slotChartModal .timeSlotInner .DeliveryAvail {\n  position: absolute;\n  right: 15px;\n  top: 0px;\n}\n.slotChartModal .timeSlotInner .DeliveryAvail img {\n  height: 15px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 28px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 20px;\n  font-weight: 500;\n  position: relative;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 53%;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .DeliveryBannertImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .selectLocationInput {\n  position: relative;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n.slotChartModal .timeSlotInner .DeliveryContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.timeSlotHomeBtn {\n  position: fixed;\n  right: 0;\n  top: 220px;\n  z-index: 999;\n  color: #ffffff !important;\n  background: #138ae6 !important;\n  border-color: #2b98ed !important;\n  z-index: 999;\n}\n.timeSlotHomeBtn:hover {\n  color: #138ae6 !important;\n  background: #ffffff !important;\n  border-color: #2b98ed !important;\n}\n.rewardholder {\n  position: fixed;\n  bottom: 70px;\n  right: 20px;\n  width: 140px;\n  height: 70px;\n  border-radius: 20px;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 17px;\n  color: #2b98ed;\n  padding: 20px;\n  border: 3px solid #2b98ed;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0px 0px 17px rgba(43, 152, 237, 0.66);\n  z-index: 100;\n  transition: all 0.2s ease;\n}\n.rewardholder:hover {\n  text-decoration: none;\n  right: 30px;\n}\n.rewardholder::after {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  bottom: 20px;\n  border-left: 15px solid #2b98ed;\n  border-right: 15px solid transparent;\n  border-bottom: 12px solid #2b98ed00;\n  border-top: 12px solid #2b98ed00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0U6XFxvZmZpY2VfcHJvamVjdFxcZmZiLW5nLW5ld1xcZmZiLW5nLW5ldy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FER0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQVNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QUNSTjtBRFBNO0VBQ0U7SUFDRSxPQUFBO0VDU1I7RURQTTtJQUNFLFVBQUE7RUNTUjtBQUNGO0FEZk07RUFDRTtJQUNFLE9BQUE7RUNTUjtFRFBNO0lBQ0UsVUFBQTtFQ1NSO0FBQ0Y7QURJUTtFQUNFLFdBQUE7QUNGVjtBREdVO0VBRkY7SUFHTSxXQUFBO0lBRUEsYUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7RUNEWjtBQUNGO0FERVU7RUFSRjtJQVNNLFdBQUE7RUNDWjtBQUNGO0FER007RUFDRSxTQUFBO0FDRFI7QURLRTtFQUNFLGdCQUFBO0FDSEo7QURJSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElJO0VBQ0UsbUJBQUE7RUFJQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBREZNO0VBRkY7SUFHSSxtQkFBQTtFQ0tOO0FBQ0Y7QURETTtFQUNFLHNCQUFBO0FDR1I7QURDTTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxt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RUFBYSxxQkFBQTtFQUFzQixZQUFBO0VBQWEsaUJBQUE7RUFBa0IsU0FBQTtFQUFVLG9CQUFBO0VBQXFCLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxnQkFBQTtFQUFpQixzQkFBQTtBQ21PbE47QURsT2M7RUFBUyxxQkFBQTtFQUFzQixrQkFBQTtBQ3NPN0M7QURyT2M7RUFDSSxZQUFBO0VBQVkscUJBQUE7RUFBcUIsc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsU0FBQTtFQUFTLGlCQUFBO0FDNE90RztBRHBPQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDdU9GO0FEck9BO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDd09GO0FEdE9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDeU9GO0FEeE9FO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDME9OO0FEdk9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtBQzBPRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lQmx1ZTogIzEzOGFlNjtcbiR0aGVtZUJsdWVIb3ZlcjogIzEzOGFlNjtcbiR0aGVtZVJlZDogIzEzOGFlNjtcbi5ob21lQ29udGVudCB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuaG9tZUJhbm5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBAa2V5ZnJhbWVzIGJhbm5lckxvYWRlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiNFRUU7XG4gICAgICBhbmltYXRpb246IGJhbm5lckxvYWRlciAuNXMgaW5maW5pdGU7XG4gICAgfVxuICAgIG93bC1jYXJvdXNlbCB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODBweCkge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0xMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ0MHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTIwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG93bC1jYXJvdXNlbC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvbWVDYXRlZ29yaWVzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIC5ob21lQ2F0ZWdvcmllc0NvbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICB9XG4gICAgLmhvbWVjYXRlZ29yeUl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgfVxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAuaG9tZWNhdGVnb3J5SXRlbUlubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDVweCByZ2JhKDIwOSwgMjM1LCAyNDEsIDAuODMpIHNvbGlkO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XG4gICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjk4ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmhvbWVjYXRlZ29yeUl0ZW1DdXN0b20ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIC5ob21lY2F0ZWdvcnlJdGVtSW5uZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAxMzgsIDIzMCwgMC44NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVDb250ZW50IHtcbiAgICAuaG9tZUJhbm5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICB9XG4gIC5ob21lQ29udGVudCB7XG4gICAgLmhvbWVDYXRlZ29yaWVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDAgLTVweDtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaG9tZWNhdGVnb3J5SXRlbSB7XG4gICAgICAgIC5ob21lY2F0ZWdvcnlJdGVtSW5uZXIge1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgIGJvcmRlcjogMHB4IHJnYmEoMjA5LCAyMzUsIDI0MSwgMC44Mykgc29saWQ7XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogOXB4IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvbWVDb250ZW50IHtcbiAgICAuaG9tZUNhdGVnb3JpZXMge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gIH1cbiAgLnByTGlzdEhlYWRlciBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICB9XG59XG4uaGVhZGVyTmF2IC5zZWFyY2hTdWJtaXQge2JhY2tncm91bmQtc2l6ZTogMzUlfVxuXG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwMTtkaXNwbGF5Om5vbmU7XG59XG5cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7cmlnaHQ6MDt0b3A6MDt0ZXh0LWFsaWduOiBjZW50ZXI7ei1pbmRleDogMTAwMjtkaXNwbGF5OiBub25lO1xuICAudGltZVNsb3RJbm5lciB7XG4gICAgICB3aWR0aDo4MDBweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6IDk1JTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1heC1oZWlnaHQ6IDk5dmg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIC5EZWxpdmVyeUF2YWlsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDhweDt0b3A6IDBweDtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAuRGVsaXZlcnlDb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7dGV4dC1hbGlnbjpsZWZ0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7cGFkZGluZzogNTBweDtcbiAgICAgICAgICAudGltZVNsb3RIZWFkZXIge1xuICAgICAgICAgICAgICBjb2xvcjojNDQ0O2ZvbnQtc2l6ZToxOHB4O3BhZGRpbmc6MjBweDtmb250LXdlaWdodDogNTAwO3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aW1lU2xvdFBvc3RhbElucHV0SG9sZGVyIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICB3aWR0aDogNTMlO1xuICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzEzOGFlNjtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGltZVNsb3RQb3N0YWxJbnB1dCB7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLkRlbGl2ZXJ5QmFubmVydEltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO2ZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDExcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDtjb2xvcjogIzU1NTtib3JkZXItcmFkaXVzOiAxMDBweDtmb250LXNpemU6IDE0cHg7bWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO2JvcmRlci1jb2xvcjokdGhlbWVCbHVlO2NvbG9yOiR0aGVtZUJsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYS5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDokdGhlbWVCbHVlO2NvbG9yOiNGRkY7Ym9yZGVyLWNvbG9yOiR0aGVtZUJsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjIwcHg7cGFkZGluZy1yaWdodDoyMjBweDtcbiAgICAgICAgICAgICAgaW1nIHtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiAxNXB4O3RvcDogMzhweDtsZWZ0OiAzOXB4O29wYWNpdHk6IC41O3otaW5kZXg6IDEwMDAwO31cbiAgICAgICAgICAgICAgLmxvY2F0aW9uSW5wdXQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7d2lkdGg6IDEwMCU7aGVpZ2h0OiA1MHB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O2JvcmRlcjogMXB4ICNEREQgc29saWQ7dGV4dC1pbmRlbnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiNBQUE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlbGVjdExvY2F0aW9uSW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdldEdQUyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMjBweDtiYWNrZ3JvdW5kOiAjRkFGQUZBO2hlaWdodDogNTBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDE4MHB4O2xpbmUtaGVpZ2h0OiA1MHB4O3RvcDogMjBweDtib3JkZXItcmFkaXVzOiAxMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICM1NTU7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXI6MXB4ICNEREQgc29saWQ7XG4gICAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTtib3JkZXItY29sb3I6I0JCQn1cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoxNHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDotMXB4O21hcmdpbi1yaWdodDo1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwMTtkaXNwbGF5Om5vbmU7XG59XG5cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7cmlnaHQ6MDt0b3A6MDt0ZXh0LWFsaWduOiBjZW50ZXI7ei1pbmRleDogMTAwMjtkaXNwbGF5OiBub25lO1xuICAudGltZVNsb3RJbm5lciB7XG4gICAgICB3aWR0aDo4MDBweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6IDk1JTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1heC1oZWlnaHQ6IDk5dmg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIC5EZWxpdmVyeUF2YWlsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7dG9wOiAxNXB4O1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDoxNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5EZWxpdmVyeUNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0ZXh0LWFsaWduOmxlZnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgIC50aW1lU2xvdEhlYWRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiM0NDQ7Zm9udC1zaXplOjE4cHg7cGFkZGluZzoyMHB4O2ZvbnQtd2VpZ2h0OiA1MDA7cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MyU7XG4gICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTM4YWU2O1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50aW1lU2xvdFBvc3RhbElucHV0IHtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuRGVsaXZlcnlCYW5uZXJ0SW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOiAzcHggMTFweDtib3JkZXI6IDFweCAjREREIHNvbGlkO2NvbG9yOiAjNTU1O2JvcmRlci1yYWRpdXM6IDEwMHB4O2ZvbnQtc2l6ZTogMTRweDttYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ym9yZGVyLWNvbG9yOiR0aGVtZUJsdWU7Y29sb3I6JHRoZW1lQmx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiR0aGVtZUJsdWU7Y29sb3I6I0ZGRjtib3JkZXItY29sb3I6JHRoZW1lQmx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubG9jYXRpb25JbnB1dEhvbGRlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MjBweDtwYWRkaW5nLXJpZ2h0OjIyMHB4O1xuICAgICAgICAgICAgICBpbWcge3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDE1cHg7dG9wOiAzOHB4O2xlZnQ6IDM5cHg7b3BhY2l0eTogLjU7ei1pbmRleDogMTAwMDA7fVxuICAgICAgICAgICAgICAubG9jYXRpb25JbnB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDt0ZXh0LWluZGVudDogNTBweDtcbiAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtib3JkZXItY29sb3I6I0FBQTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VsZWN0TG9jYXRpb25JbnB1dCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2V0R1BTIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAyMHB4O2JhY2tncm91bmQ6ICNGQUZBRkE7aGVpZ2h0OiA1MHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTgwcHg7bGluZS1oZWlnaHQ6IDUwcHg7dG9wOiAyMHB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzU1NTtmb250LXdlaWdodDogNTAwO2JvcmRlcjoxcHggI0RERCBzb2xpZDtcbiAgICAgICAgICAgICAgJjpob3ZlciB7dGV4dC1kZWNvcmF0aW9uOiBub25lO2JvcmRlci1jb2xvcjojQkJCfVxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOi0xcHg7bWFyZ2luLXJpZ2h0OjVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG5cbi5wckluZm9Qb2ludHNIb2xkZXIge1xuICBtYXJnaW46IC01cHggMCAxMHB4O1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBkaXYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7cG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmc6IDVweCAwO2NvbG9yOiAjODg4O1xuICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDE0cHg7aGVpZ2h0OiAxNHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAtMzJweDt0b3A6IDEwcHg7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9jaGVjay1zeW1ib2wuc3ZnJyk7XG4gICAgICB9XG4gIH1cbn1cblxuLmRlbEhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5kZWxTdWJIZWFkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cbi5kZWxpdmVydVNsb3RIZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLnRhZ05hbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5vcmRlckJmciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5kbHZyU2x0SGVhZCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5zbG90VGltZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogI2ZmYWI0NDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLnRpbWVIb2xkZXIge1xuICAgICAgcGFkZGluZzogOXB4IDZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWU4Y2Q7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmZmY5O1xuICAgICAgY29sb3I6ICM1YmIxNjc7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc2xvdENoYXJ0TW9kYWxPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOiAwO2xlZnQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO3otaW5kZXg6IDEwMDE7ZGlzcGxheTpub25lO1xufVxuXG4uc2xvdENoYXJ0TW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtyaWdodDowO3RvcDowO3RleHQtYWxpZ246IGNlbnRlcjt6LWluZGV4OiAxMDAyO2Rpc3BsYXk6IG5vbmU7XG4gIC50aW1lU2xvdElubmVyIHtcbiAgICAgIHdpZHRoOjEwMDBweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6IDk1JTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1heC1oZWlnaHQ6IDk5dmg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIC5EZWxpdmVyeUF2YWlsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDE1cHg7dG9wOiAwcHg7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLkRlbGl2ZXJ5Q29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDojRkZGO3RleHQtYWxpZ246bGVmdDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O3BhZGRpbmc6IDI4cHg7XG4gICAgICAgICAgLnRpbWVTbG90SGVhZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IzQ0NDtmb250LXNpemU6MThweDtwYWRkaW5nOjIwcHg7Zm9udC13ZWlnaHQ6IDUwMDtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUzJTtcbiAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMzhhZTY7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpbWVTbG90UG9zdGFsSW5wdXQge1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5EZWxpdmVyeUJhbm5lcnRJbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDNweCAxMXB4O2JvcmRlcjogMXB4ICNEREQgc29saWQ7Y29sb3I6ICM1NTU7Ym9yZGVyLXJhZGl1czogMTAwcHg7Zm9udC1zaXplOiAxNHB4O21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItY29sb3I6JHRoZW1lQmx1ZTtjb2xvcjokdGhlbWVCbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6JHRoZW1lQmx1ZTtjb2xvcjojRkZGO2JvcmRlci1jb2xvcjokdGhlbWVCbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoyMHB4O3BhZGRpbmctcmlnaHQ6MjIwcHg7XG4gICAgICAgICAgICAgIGltZyB7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTVweDt0b3A6IDM4cHg7bGVmdDogMzlweDtvcGFjaXR5OiAuNTt6LWluZGV4OiAxMDAwMDt9XG4gICAgICAgICAgICAgIC5sb2NhdGlvbklucHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO2hlaWdodDogNTBweDtib3JkZXItcmFkaXVzOiAxMDBweDtib3JkZXI6IDFweCAjREREIHNvbGlkO3RleHQtaW5kZW50OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojQUFBO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWxlY3RMb2NhdGlvbklucHV0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgfVxuICAgICAgICAgIC5nZXRHUFMge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7YmFja2dyb3VuZDogI0ZBRkFGQTtoZWlnaHQ6IDUwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAxODBweDtsaW5lLWhlaWdodDogNTBweDt0b3A6IDIwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjNTU1O2ZvbnQtd2VpZ2h0OiA1MDA7Ym9yZGVyOjFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAmOmhvdmVyIHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Ym9yZGVyLWNvbG9yOiNCQkJ9XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MTRweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6LTFweDttYXJnaW4tcmlnaHQ6NXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cblxuLnRpbWVTbG90SG9tZUJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjIwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzEzOGFlNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyYjk4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuLnRpbWVTbG90SG9tZUJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjMTM4YWU2ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMmI5OGVkICFpbXBvcnRhbnQ7XG59XG4ucmV3YXJkaG9sZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDcwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMmI5OGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMmI5OGVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCByZ2JhKDQzLCAxNTIsIDIzNywgMC42Nik7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICByaWdodDogMzBweDtcbiAgfVxufVxuLnJld2FyZGhvbGRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjMmI5OGVkO1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgIzJiOThlZDAwO1xuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkICMyYjk4ZWQwMDtcbn1cblxuIiwiLmhvbWVDb250ZW50IHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZUNvbnRlbnQgLmhvbWVCYW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWVDb250ZW50IC5ob21lQmFubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjRUVFO1xuICBhbmltYXRpb246IGJhbm5lckxvYWRlciAwLjVzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBiYW5uZXJMb2FkZXIge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG4uaG9tZUNvbnRlbnQgLmhvbWVCYW5uZXIgb3dsLWNhcm91c2VsIC5pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmhvbWVDb250ZW50IC5ob21lQmFubmVyIG93bC1jYXJvdXNlbCAuaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIC5ob21lQ29udGVudCAuaG9tZUJhbm5lciBvd2wtY2Fyb3VzZWwgLml0ZW0gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmhvbWVDb250ZW50IC5ob21lQmFubmVyIG93bC1jYXJvdXNlbCBvd2wtY2Fyb3VzZWwtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVDYXRlZ29yaWVzQ29sIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cbi5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbSAuaG9tZWNhdGVnb3J5SXRlbUlubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDVweCByZ2JhKDIwOSwgMjM1LCAyNDEsIDAuODMpIHNvbGlkO1xuICBib3gtc2hhZG93OiAwIDAgMTlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0gLmhvbWVjYXRlZ29yeUl0ZW1Jbm5lciB7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbSAuaG9tZWNhdGVnb3J5SXRlbUlubmVyIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIC5ob21lY2F0ZWdvcnlJdGVtIC5ob21lY2F0ZWdvcnlJdGVtSW5uZXIge1xuICAgIGhlaWdodDogMjEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0gLmhvbWVjYXRlZ29yeUl0ZW1Jbm5lciB7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxufVxuLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIGJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB6LWluZGV4OiAyO1xufVxuLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbSBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC01cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzJiOThlZDtcbn1cbi5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW1DdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbUN1c3RvbSAuaG9tZWNhdGVnb3J5SXRlbUlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIC5ob21lY2F0ZWdvcnlJdGVtQ3VzdG9tIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogNXB4O1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAxMzgsIDIzMCwgMC44NCk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIC5ob21lY2F0ZWdvcnlJdGVtQ3VzdG9tIHNwYW4ge1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAuaG9tZWNhdGVnb3J5SXRlbUN1c3RvbSBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVDb250ZW50IC5ob21lQmFubmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cblxuICAuaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyAucm93IHtcbiAgICBtYXJnaW46IDAgLTVweDtcbiAgfVxuICAuaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIC5yb3cgPiBkaXYge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG4gIC5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0gLmhvbWVjYXRlZ29yeUl0ZW1Jbm5lciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiAwcHggcmdiYSgyMDksIDIzNSwgMjQxLCAwLjgzKSBzb2xpZDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZUNvbnRlbnQgLmhvbWVDYXRlZ29yaWVzIC5ob21lY2F0ZWdvcnlJdGVtIC5ob21lY2F0ZWdvcnlJdGVtSW5uZXIge1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lQ29udGVudCAuaG9tZUNhdGVnb3JpZXMgLmhvbWVjYXRlZ29yeUl0ZW0gc3BhbiB7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiA5cHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVDb250ZW50IC5ob21lQ2F0ZWdvcmllcyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByTGlzdEhlYWRlciBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICB9XG59XG4uaGVhZGVyTmF2IC5zZWFyY2hTdWJtaXQge1xuICBiYWNrZ3JvdW5kLXNpemU6IDM1JTtcbn1cblxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWxPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTAwMTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDk5dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUF2YWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB0b3A6IDBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUF2YWlsIGltZyB7XG4gIGhlaWdodDogMTVweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90SGVhZGVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RIZWFkZXIgaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUzJTtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciAudGltZVNsb3RQb3N0YWxJbnB1dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMjkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICB0ZXh0LWluZGVudDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuRGVsaXZlcnlCYW5uZXJ0SW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAxMXB4O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzEzOGFlNjtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMjBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzhweDtcbiAgbGVmdDogMzlweDtcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciAubG9jYXRpb25JbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI0FBQTtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uSW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmdldEdQUzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjQkJCO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuZ2V0R1BTIGltZyB7XG4gIGhlaWdodDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciB7XG4gIHdpZHRoOiA4MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA5OXZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlBdmFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTVweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUF2YWlsIGltZyB7XG4gIGhlaWdodDogMTVweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90SGVhZGVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RIZWFkZXIgaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUzJTtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciAudGltZVNsb3RQb3N0YWxJbnB1dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMjkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICB0ZXh0LWluZGVudDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuRGVsaXZlcnlCYW5uZXJ0SW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAxMXB4O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzEzOGFlNjtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMjBweDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzhweDtcbiAgbGVmdDogMzlweDtcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciAubG9jYXRpb25JbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI0FBQTtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnNlbGVjdExvY2F0aW9uSW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uRGVsaXZlcnlBdmFpbGFibGVNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi5EZWxpdmVyeUF2YWlsYWJsZU1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmdldEdQUzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjQkJCO1xufVxuLkRlbGl2ZXJ5QXZhaWxhYmxlTW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuZ2V0R1BTIGltZyB7XG4gIGhlaWdodDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wckluZm9Qb2ludHNIb2xkZXIge1xuICBtYXJnaW46IC01cHggMCAxMHB4O1xufVxuLnBySW5mb1BvaW50c0hvbGRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5wckluZm9Qb2ludHNIb2xkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wckluZm9Qb2ludHNIb2xkZXIgZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGNvbG9yOiAjODg4O1xufVxuLnBySW5mb1BvaW50c0hvbGRlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMycHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stc3ltYm9sLnN2Z1wiKTtcbn1cblxuLmRlbEhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmRlbFN1YkhlYWQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kZWxpdmVydVNsb3RIZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kZWxpdmVydVNsb3RIZWFkIC50YWdOYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmRlbGl2ZXJ1U2xvdEhlYWQgLm9yZGVyQmZyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc3Nzc3NztcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGVsaXZlcnVTbG90SGVhZCAuZGx2clNsdEhlYWQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRlbGl2ZXJ1U2xvdEhlYWQgLnNsb3RUaW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cbi5kZWxpdmVydVNsb3RIZWFkIC5zbG90VGltZTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmRlbGl2ZXJ1U2xvdEhlYWQgLnNsb3RUaW1lIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZhYjQ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZGVsaXZlcnVTbG90SGVhZCAuc2xvdFRpbWUgLnRpbWVIb2xkZXIge1xuICBwYWRkaW5nOiA5cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzllOGNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmZmY5O1xuICBjb2xvcjogIzViYjE2NztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsb3RDaGFydE1vZGFsT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbG90Q2hhcnRNb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDAyO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA5OXZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5QXZhaWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDBweDtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlBdmFpbCBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyOHB4O1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90SGVhZGVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90SGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC50aW1lU2xvdFBvc3RhbElucHV0SG9sZGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTMlO1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgLnRpbWVTbG90UG9zdGFsSW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5EZWxpdmVyeUJhbm5lcnRJbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHggMTFweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMTM4YWU2O1xuICBjb2xvcjogIzEzOGFlNjtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjIwcHg7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAzOHB4O1xuICBsZWZ0OiAzOXB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnNsb3RDaGFydE1vZGFsIC50aW1lU2xvdElubmVyIC5EZWxpdmVyeUNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNBQUE7XG59XG4uc2xvdENoYXJ0TW9kYWwgLnRpbWVTbG90SW5uZXIgLkRlbGl2ZXJ5Q29udGVudCAuc2VsZWN0TG9jYXRpb25JbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5nZXRHUFM6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI0JCQjtcbn1cbi5zbG90Q2hhcnRNb2RhbCAudGltZVNsb3RJbm5lciAuRGVsaXZlcnlDb250ZW50IC5nZXRHUFMgaW1nIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRpbWVTbG90SG9tZUJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjIwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzEzOGFlNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyYjk4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4udGltZVNsb3RIb21lQnRuOmhvdmVyIHtcbiAgY29sb3I6ICMxMzhhZTYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyYjk4ZWQgIWltcG9ydGFudDtcbn1cblxuLnJld2FyZGhvbGRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA3MHB4O1xuICByaWdodDogMjBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzJiOThlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzJiOThlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggcmdiYSg0MywgMTUyLCAyMzcsIDAuNjYpO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucmV3YXJkaG9sZGVyOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICByaWdodDogMzBweDtcbn1cblxuLnJld2FyZGhvbGRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjMmI5OGVkO1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgIzJiOThlZDAwO1xuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkICMyYjk4ZWQwMDtcbn0iXX0= */");

                /***/
            }),

        /***/
        "./src/app/components/home/home.component.ts":
            /*!***************************************************!*\
              !*** ./src/app/components/home/home.component.ts ***!
              \***************************************************/
            /*! exports provided: HomeComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "HomeComponent", function() {
                    return HomeComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/home-service.service */ "./src/app/services/home-service.service.ts");
                /* harmony import */
                var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/location.service */ "./src/app/services/location.service.ts");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../services/login-registration.service */ "./src/app/services/login-registration.service.ts");
                /* harmony import */
                var _services_product_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../services/product-details.service */ "./src/app/services/product-details.service.ts");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










                var HomeComponent = /** @class */ (function() {
                    function HomeComponent(platformId, homeService, spinnerService, location, auth, productDetailsService, cookieService, router) {
                        this.platformId = platformId;
                        this.homeService = homeService;
                        this.spinnerService = spinnerService;
                        this.location = location;
                        this.auth = auth;
                        this.productDetailsService = productDetailsService;
                        this.cookieService = cookieService;
                        this.router = router;
                        this.homePageData = [];
                        this.pageNumber = 1;
                        this.userId = null;
                        this.loggedIn = false;
                    }
                    HomeComponent.prototype.ngOnInit = function() {
                        var _this = this;
                        if (this.auth.isAuthenticated()) {
                            this.loggedIn = true;
                            this.userId = this.auth.user();
                            // alert("here");
                        }
                        this.settingObj = JSON.parse(localStorage.getItem("settingObj"));
                        /*
                         * Location is set active on home page
                         */
                        /*$(".locationOverlay").fadeIn(200);
                        $("body").addClass("noScroll");
                        $(".selectLocation").slideDown();*/
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                            $(".homeBanner").height($(".homeBanner").width() / 12 * 5);
                        }
                        this.spinnerService.show();
                        this.getSlotList();
                        // this.location.setLocation();
                        this.location.watch().subscribe(function(value) {
                            //this.homeService.getHomePageData(1,this.userId).then((resJson)=> {
                            //  let result = (resJson as any);
                            //  if (result.success == true) {
                            //    this.totalData = result.data;
                            //    this.homePageData = this.totalData.data;
                            //    this.recentlyTitle  = "Related to items you've viewed";
                            //    this.recentDataLIst = result.recentlyViewData;
                            //    this.spinnerService.hide();
                            //  }
                            //}).catch((error) => console.error(error));
                            // alert(value)
                            if (_this.auth.isAuthenticated()) {
                                _this.userId = _this.auth.user();
                                _this.homeService.getHomePageData(1, _this.userId).then(function(resJson) {
                                    var result = resJson;
                                    if (result.success == true) {
                                        //globalLoaderBgHold
                                        $(".globalLoaderBgHold").remove();
                                        _this.totalData = result.data;
                                        _this.homePageData = _this.totalData.data;
                                        _this.recentlyTitle = "Related to items you've viewed";
                                        _this.recentDataLIst = result.recentlyViewData;
                                        _this.spinnerService.hide();
                                    }
                                }).catch(function(error) {
                                    return console.error(error);
                                });
                                //alert(this.userId);
                                // this.getRecenlyViewDataList(this.userId);
                                // this.getRecenlyView(this.slug,this.userId);
                                //alert(this.userId+this.slug);
                            } else {
                                _this.homeService.getHomePageData(1, _this.userId).then(function(resJson) {
                                    var result = resJson;
                                    if (result.success == true) {
                                        $(".globalLoaderBgHold").remove();
                                        _this.totalData = result.data;
                                        _this.homePageData = _this.totalData.data;
                                        _this.recentlyTitle = "Related to items you've viewed";
                                        _this.recentDataLIst = result.recentlyViewData;
                                        _this.spinnerService.hide();
                                    }
                                }).catch(function(error) {
                                    return console.error(error);
                                });
                            }
                        });
                        /* this.cart.cartAllProduct(token);
                         this.cart.watch().subscribe((data)=> {
                           this.cartData = data.cartContent;
                           this.totalPrice = data.totalPrice;
                           this.totalItems = this.cartData.length;
                           //this.totalItems = data.totalItemQuantity;
                           this.shippingCost = data.shippingCost;
                         });*/
                        console.log(this.homePageData);
                        //noinspection TypeScriptValidateTypes
                        if (this.homePageData.length == 0) {
                            console.log("no home page feed so fetching data");
                            console.log(this.homePageData);
                            if (this.auth.isAuthenticated()) {
                                this.userId = this.auth.user();
                                this.homeService.getHomePageData(1, this.userId).then(function(resJson) {
                                    var result = resJson;
                                    if (result.success == true) {
                                        $(".globalLoaderBgHold").remove();
                                        _this.totalData = result.data;
                                        _this.homePageData = _this.totalData.data;
                                        _this.recentlyTitle = "Related to items you've viewed";
                                        _this.recentDataLIst = result.recentlyViewData;
                                        _this.spinnerService.hide();
                                    }
                                }).catch(function(error) {
                                    return console.error(error);
                                });
                                //alert(this.userId);
                                // this.getRecenlyViewDataList(this.userId);
                                // this.getRecenlyView(this.slug,this.userId);
                                //alert(this.userId+this.slug);
                            } else {
                                this.homeService.getHomePageData(1, this.userId).then(function(resJson) {
                                    var result = resJson;
                                    if (result.success == true) {
                                        $(".globalLoaderBgHold").remove();
                                        _this.totalData = result.data;
                                        _this.homePageData = _this.totalData.data;
                                        _this.recentlyTitle = "Related to items you've viewed";
                                        _this.recentDataLIst = result.recentlyViewData;
                                        _this.spinnerService.hide();
                                    }
                                }).catch(function(error) {
                                    return console.error(error);
                                });
                            }
                        }
                        if (this.areaList == null || this.areaList.length == 0)
                            this.getAllDeliveryLocation();
                    };
                    HomeComponent.prototype.ngAfterViewInit = function() {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                            window.scrollTo(0, 0);
                        }
                    };
                    HomeComponent.prototype.flexClick = function(index) {
                        var regionId = localStorage.getItem("region");
                        if (regionId == '1') {
                            if (index == 6) {
                                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                                    $(".DeliveryAvailableModalOverlay").fadeIn(200);
                                    $("body").addClass("noScroll");
                                    $(".DeliveryAvailableModal").slideDown();
                                    $(".DeliveryAvail").click(function() {
                                        $(".DeliveryAvailableModalOverlay").fadeOut(200);
                                        $("body").removeClass("noScroll");
                                        $(".DeliveryAvailableModal").slideUp();
                                    });
                                    $(".DeliveryAvailableModalOverlay").click(function() {
                                        $(this).fadeOut(200);
                                        $("body").removeClass("noScroll");
                                        $(".DeliveryAvailableModal").slideUp();
                                    });
                                }
                            }
                            if (index == 7) {
                                this.router.navigateByUrl('/page/offers');
                            }
                        }
                        if (regionId == '2') {
                            this.router.navigateByUrl('/page/offers');
                        }
                    };
                    HomeComponent.prototype.openSlotChart = function() {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                            $(".slotChartModalOverlay").fadeIn(200);
                            $("body").addClass("noScroll");
                            $(".slotChartModal").slideDown();
                            $(".slotClick").click(function() {
                                $(".slotChartModalOverlay").fadeOut(200);
                                $("body").removeClass("noScroll");
                                $(".slotChartModal").slideUp();
                            });
                            $(".slotChartModalOverlay").click(function() {
                                $(this).fadeOut(200);
                                $("body").removeClass("noScroll");
                                $(".slotChartModal").slideUp();
                            });
                        }
                    };
                    HomeComponent.prototype.getData = function(page) {
                        var _this = this;
                        this.spinnerService.show();
                        //noinspection TypeScriptValidateTypes
                        this.homeService.getHomePageData(page, this.userId).then(function(resJson) {
                            var result = resJson;
                            if (result.success == true) {
                                $(".globalLoaderBgHold").remove();
                                _this.totalData = result.data;
                                var data = _this.totalData.data;
                                _this.recentlyTitle = "Related to items you've viewed";
                                _this.recentDataLIst = result.recentlyViewData;
                                var that = _this;
                                data.forEach(function(element) {
                                    that.homePageData.push(element);
                                    that.spinnerService.hide();
                                });
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HomeComponent.prototype.onScroll = function() {
                        var loading = true;
                        this.pageNumber = this.pageNumber + 1;
                        if (this.totalData != undefined && this.totalData.last_page != undefined) {
                            if (this.totalData.last_page < this.pageNumber) {
                                var loading = false;
                            }
                        }
                        if (loading == true) {
                            this.getData(this.pageNumber);
                        }
                    };
                    //// This function using for recently view /////
                    HomeComponent.prototype.getRecenlyViewDataList = function(userId) {
                        var _this = this;
                        this.spinnerService.show();
                        this.productDetailsService.getRecenlyViewDataList(userId).then(function(resJson) {
                            var result = resJson;
                            if (result.success == true) {
                                _this.recentlyTitle = "Related to items you've viewed";
                                _this.recentDataLIst = result.data;
                                console.log(_this.recentDataLIst);
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HomeComponent.prototype.getSlotList = function() {
                        var _this = this;
                        this.spinnerService.show();
                        this.homeService.getSlotInformation().then(function(resJson) {
                            var result = resJson;
                            console.log(result, 2222222);
                            if (result.pincode) {
                                _this.slotValueList = result.pincode;
                                // console.log(this.slotValueList);
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HomeComponent.prototype.getAllDeliveryLocation = function() {
                        var _this = this;
                        this.spinnerService.show();
                        this.homeService.getAllDeliveryLocationData().then(function(resJson) {
                            var result = resJson;
                            if (result.success == true) {
                                _this.recentlyTitle = "Related to items you've viewed";
                                _this.areaList = result.zones;
                                //console.log(this.areaList);
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HomeComponent.ctorParameters = function() {
                        return [{
                                type: Object,
                                decorators: [{
                                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                                    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ]
                                }]
                            },
                            {
                                type: _services_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"]
                            },
                            {
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]
                            },
                            {
                                type: _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]
                            },
                            {
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__["LoginRegistrationService"]
                            },
                            {
                                type: _services_product_details_service__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsService"]
                            },
                            {
                                type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
                            }
                        ];
                    };
                    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-home',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object,
                            _services_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"],
                            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
                            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
                            _services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__["LoginRegistrationService"],
                            _services_product_details_service__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsService"],
                            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
                        ])
                    ], HomeComponent);
                    return HomeComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/components/home/home.module.ts":
            /*!************************************************!*\
              !*** ./src/app/components/home/home.module.ts ***!
              \************************************************/
            /*! exports provided: HomeModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "HomeModule", function() {
                    return HomeModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./home-routing.module */ "./src/app/components/home/home-routing.module.ts");
                /* harmony import */
                var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./home.component */ "./src/app/components/home/home.component.ts");
                /* harmony import */
                var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
                /* harmony import */
                var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
                /* harmony import */
                var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
                /* harmony import */
                var _common_app_module_common_app_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../common-app-module/common-app-module.module */ "./src/app/common-app-module/common-app-module.module.ts");
                /* harmony import */
                var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");










                var HomeModule = /** @class */ (function() {
                    function HomeModule() {}
                    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            declarations: [
                                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
                            ],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _common_app_module_common_app_module_module__WEBPACK_IMPORTED_MODULE_8__["CommonAppModuleModule"],
                                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"],
                                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
                                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageModule"]
                            ]
                        })
                    ], HomeModule);
                    return HomeModule;
                }());



                /***/
            }),

        /***/
        "./src/app/services/home-service.service.ts":
            /*!**************************************************!*\
              !*** ./src/app/services/home-service.service.ts ***!
              \**************************************************/
            /*! exports provided: HomeServiceService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() {
                    return HomeServiceService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");
                /* harmony import */
                var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





                var HomeServiceService = /** @class */ (function() {
                    function HomeServiceService(http, cookieService) {
                        this.http = http;
                        this.cookieService = cookieService;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
                    }
                    HomeServiceService.prototype.getHomePageData = function(page, userId) {
                        var _this = this;
                        if (userId === void 0) {
                            userId = '';
                        }
                        var url = this.baseURL + 'home?type=web&user_id=' + userId;
                        if (page > 1) {
                            url = this.baseURL + 'home?type=web&user_id=' + userId + '&page=' + page;
                        }
                        if (localStorage.getItem("postal_code") && localStorage.getItem("postal_code") != '') {
                            url = this.baseURL + 'home?type=web&user_id=' + userId + '&postal_code=' + localStorage.getItem("postal_code") + '&page=' + page;
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
                    HomeServiceService.prototype.getSettingData = function() {
                        var _this = this;
                        var that = this;
                        var url = this.baseURL + "setting";
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
                    HomeServiceService.prototype.getAllDeliveryLocationData = function() {
                        var _this = this;
                        var that = this;
                        var url = this.baseURL + "pincode-areas";
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
                    HomeServiceService.prototype.getSlotInformation = function() {
                        var _this = this;
                        if (localStorage.getItem("postal_code") && localStorage.getItem("postal_code") != '') {
                            var url = this.baseURL + 'slot-information-for-customer/' + localStorage.getItem("postal_code");
                        } else
                            var url = this.baseURL + 'slot-information-for-customer';
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
                    HomeServiceService.ctorParameters = function() {
                        return [{
                                type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                            },
                            {
                                type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
                            }
                        ];
                    };
                    HomeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
                    ], HomeServiceService);
                    return HomeServiceService;
                }());



                /***/
            })

    }
]);
//# sourceMappingURL=home-home-module.js.map