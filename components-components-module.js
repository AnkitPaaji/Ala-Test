(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["components-components-module"], {

        /***/
        "./src/app/components/components-routing.module.ts":
            /*!*********************************************************!*\
              !*** ./src/app/components/components-routing.module.ts ***!
              \*********************************************************/
            /*! exports provided: ComponentsRoutingModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() {
                    return ComponentsRoutingModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _services_loin_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/loin-guard.service */ "./src/app/services/loin-guard.service.ts");




                var routes = [{
                        path: '',
                        loadChildren: './home/home.module#HomeModule'
                    },
                    {
                        path: 'faq',
                        loadChildren: './faq/faq.module#FaqModule'
                    },
                    {
                        path: 'contact-us',
                        loadChildren: './contact/contact.module#ContactModule'
                    },
                    {
                        path: 'cms',
                        loadChildren: './cms/cms.module#CmsModule'
                    },
                    {
                        path: 'cms/{slug}',
                        loadChildren: './cms/cms.module#CmsModule'
                    },
                    {
                        path: 'page',
                        loadChildren: './cms/cms.module#CmsModule'
                    },
                    {
                        path: 'page/{slug}',
                        loadChildren: './cms/cms.module#CmsModule'
                    },
                    {
                        path: 'products/:catSlug',
                        loadChildren: './product-list/product-list.module#ProductListModule'
                    },
                    {
                        path: 'products/:catSlug/:searchStr',
                        loadChildren: './product-list/product-list.module#ProductListModule'
                    },
                    {
                        path: 'product/:slug',
                        loadChildren: './product-details/product-details.module#ProductDetailsModule'
                    },
                    {
                        path: 'recipe-details/:id',
                        loadChildren: './recipe/recipe.module#RecipeModule'
                    },
                    {
                        path: 'cart',
                        loadChildren: './cart/cart.module#CartModule'
                    },
                    {
                        path: 'checkout-address',
                        loadChildren: './checkout-address/checkout-address.module#CheckoutAddressModule'
                    },
                    {
                        path: 'delivery-summary',
                        loadChildren: './delivery-summary/delivery-summary.module#DeliverySummaryModule'
                    },
                    {
                        path: 'payment',
                        loadChildren: './payment/payment.module#PaymentModule'
                    },
                    {
                        path: 'wallet-payment',
                        loadChildren: './walletPayment/walletPayment.module#WalletPaymentModule'
                    },
                    {
                        path: 'order-placed',
                        loadChildren: './order-placed/order-placed.module#OrderPlacedModule'
                    },
                    {
                        path: 'order-placed-online/:orderNumber',
                        loadChildren: './order-placed-online/order-placed-online.module#OrderPlacedOnlineModule'
                    },
                    {
                        path: 'payment-cancel/:orderNumber',
                        loadChildren: './payment-cancel/payment-cancel.module#PaymentCancelModule'
                    },
                    {
                        path: 'orders',
                        loadChildren: './orders/orders.module#OrdersModule',
                        canActivate: [_services_loin_guard_service__WEBPACK_IMPORTED_MODULE_3__["LoinGuardService"]]
                    },
                    {
                        path: 'recipes',
                        loadChildren: './recipes/recipes.module#RecipesModule'
                    },
                    {
                        path: 'track-order',
                        loadChildren: './track-order/track-order.module#TrackOrderModule'
                    },
                    {
                        path: 'account',
                        loadChildren: './account/account.module#AccountModule'
                    },
                    {
                        path: 'bulk-order',
                        loadChildren: './bulk/bulk.module#BulkModule'
                    }
                ];
                var ComponentsRoutingModule = /** @class */ (function() {
                    function ComponentsRoutingModule() {}
                    ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                        })
                    ], ComponentsRoutingModule);
                    return ComponentsRoutingModule;
                }());



                /***/
            }),

        /***/
        "./src/app/components/components.module.ts":
            /*!*************************************************!*\
              !*** ./src/app/components/components.module.ts ***!
              \*************************************************/
            /*! exports provided: ComponentsModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() {
                    return ComponentsModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var _components_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components-routing.module */ "./src/app/components/components-routing.module.ts");




                var ComponentsModule = /** @class */ (function() {
                    function ComponentsModule() {}
                    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            declarations: [],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _components_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsRoutingModule"],
                            ]
                        })
                    ], ComponentsModule);
                    return ComponentsModule;
                }());



                /***/
            })

    }
]);
//# sourceMappingURL=components-components-module.js.map