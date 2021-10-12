(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
            /*!**************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
              \**************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<ng4-loading-spinner> </ng4-loading-spinner>\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/core/change-password/change-password.component.html":
            /*!***********************************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/change-password/change-password.component.html ***!
              \***********************************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div class=\"gap100\"></div>\n<div class=\"container\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-5\">\n      <div class=\"loginHolder\">\n        <div class=\"loginTabHolder\">\n          <a href=\"javascript:;\" class=\"active\">Change Password</a>\n        </div>\n        <div class=\"loginTabContent\">\n          <div class=\"loginTabInner\">\n            <form (ngSubmit)=\"submitChangePasswordForm()\" id=\"changePasswordForm\">\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/padlock.svg\"/>\n                <input type=\"password\" placeholder=\"Enter your old password\" id=\"old_password\" name=\"old_password\"\n                       [(ngModel)]=\"change_password.old_password\" required/>\n              </div>\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/padlock.svg\"/>\n                <input type=\"password\" placeholder=\"Enter your new password\" id=\"new_password\" name=\"new_password\"\n                       [(ngModel)]=\"change_password.new_password\" required/>\n              </div>\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/padlock.svg\"/>\n                <input type=\"password\" placeholder=\"Retype your password\" id=\"re_new_password\" name=\"re_new_password\"\n                       [(ngModel)]=\"change_password.re_new_password\" required/>\n              </div>\n              <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg\">Update</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 offset-md-1\">\n      <img src=\"assets/images/login-img.webp\" class=\"loginImg\"/>\n    </div>\n  </div>\n</div>\n<div class=\"gap100\"></div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
            /*!*****************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
              \*****************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<footer class=\"footer\" lazyLoad=\"assets/images/footer-bg.jpg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"footerCol\">\n                    <p class=\"footerColHeader\">Contact Information</p>\n                    <div class=\"footerContactInfo\">\n                        <div class=\"footerContactInfoItem\">\n                            <img src=\"assets/images/icons/placeholder.svg\" />\n                            <div>\n                                Ala Trading Co, <br>\n                                Sector - 13, Dwarka, New Delhi - 110078\n                            </div>\n                        </div>\n                        <div class=\"footerContactInfoItem\">\n                            <img src=\"assets/images/icons/telephone.svg\" />\n                            <div *ngIf=\"settingObj\">\n                              <a class=\"white\" href=\"tel:{{settingObj.phone}}\">\n                                {{settingObj.phone}} (9:00am to 7:00pm) (Call for Order)\n                              </a>\n                            </div>\n                        </div>\n                        <div class=\"footerContactInfoItem\">\n                            <!-- <img src=\"assets/images/icons/whatsapp.svg\" /> -->\n                            <img src=\"assets/images/icons/telephone.svg\" />\n                            <div *ngIf=\"settingObj\">\n                              <a class=\"white\" href=\"tel:{{settingObj.whatsapp_phone}}\">\n                                {{settingObj.whatsapp_phone}} (9:00am to 7:00pm) (Query)\n                              </a>\n                            </div>\n                        </div>\n                        <div class=\"footerContactInfoItem\">\n                            <img lazyload=\"assets/images/icons/envelope.svg\" src=\"\" />\n                            <div>\n                                info@alatrading.in\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"footerCol\">\n                    <p class=\"footerColHeader\">Useful Links</p>\n                    <div class=\"footerLinksHolder\">\n                        <a [routerLink]=\"['/page/about-us']\">About us</a>\n                        <!-- <a [routerLink]=\"['/page/delivery-packaging-weight']\">Delivery, Packaging and Weight</a> -->\n                        <a [routerLink]=\"['/contact-us']\">Contact us</a>\n                        <a [routerLink]=\"['/page/why-fresh-fish-Ala Trading']\">Why Quien's</a>\n                        <a [routerLink]=\"['/page/refer-and-earn']\">Refer and Earn </a>\n                        <a [routerLink]=\"['/page/offers']\">Offers </a>\n                        <a href=\"javascript:;\" (click)=\"ratingsCaller()\">Ratings</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"footerCol\">\n                    <p class=\"footerColHeader\">Information</p>\n                    <div class=\"footerLinksHolder\">\n                        <a [routerLink]=\"['/page/certificate']\">FSSAI Certificate</a>\n                        <a [routerLink]=\"['/page/privacy-policy']\">Privacy Policy</a>\n                        <a [routerLink]=\"['/faq']\">FAQ'S</a>\n                        <a [routerLink]=\"['/page/terms-of-services']\">Terms Of Services</a>\n                        <!-- <a [routerLink]=\"['/page/store-credit']\">Store Credit T&C</a> -->\n                        <a [routerLink]=\"['/page/wallet']\">Wallet T&C </a>\n                        <a [routerLink]=\"['/page/telecall-order']\">Telecall Order T&C </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"footerCol\">\n                    <p class=\"footerColHeader\">Social Media</p>\n                    <div class=\"footerSocial\">\n                        <!-- <a href=\"javascript;\" (click)=\"openSocialLink(settingObj,1);\"><img src=\"assets/images/icons/facebook-letter-logo.svg\" /></a>\n                        <a href=\"javascript;\" (click)=\"openSocialLink(settingObj,2);\"><img src=\"assets/images/icons/twitter-logo-silhouette.svg\" /></a>\n                        <a href=\"javascript;\" (click)=\"openSocialLink(settingObj,3);\"><img src=\"assets/images/icons/instagram-logo.svg\" /></a> -->\n                        <a href=\"https://www.facebook.com/alatrading/\" (click)=\"openSocialLink(settingObj,1);\"><img src=\"assets/images/icons/facebook-letter-logo.svg\" /></a>\n                        <a href=\"https://twitter.com/Basketish\" (click)=\"openSocialLink(settingObj,2);\"><img src=\"assets/images/icons/twitter-logo-silhouette.svg\" /></a>\n                        <a href=\"https://www.instagram.com/alatrading/\" (click)=\"openSocialLink(settingObj,3);\"><img src=\"assets/images/icons/instagram-logo.svg\" /></a>\n                    </div>\n                    <br />\n                    <p class=\"footerColHeader\">We accept</p>\n                    <img lazyLoad=\"assets/images/payment-options.png\" class=\"paymentOptions\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"footerDivider\"></div>\n      <ng-container *ngIf=\"content\">\n        <div class=\"footerContentItem\" [innerHtml]=\"content.body\"></div>\n      </ng-container>\n    </div>\n    <div class=\"copyrightText\">\n        &copy; Copyright 2020 by Quien's. All Rights Reserved.\n    </div>\n</footer>\n\n\n<div class=\"ratingsContWrapper\">\n    <div class=\"reviewContInner\">\n      <div class=\"reviewContent\">\n        <div class=\"timeSlotHeader\">\n          <h2 class=\"locSelHeaer\">Overall Ratings</h2>\n          <a href=\"javascript:;\" class=\"closeTimeSlot closeRevMod\"><img src=\"assets/images/icons/close.svg\"/></a>\n        </div>\n        <div class=\"reviewContBody rvwGlobalContBody\" *ngIf=\"ratingData\">\n            <div class=\"reviewGStarCount\">\n                <span>{{overallRating}}</span><img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n            </div>\n            <div class=\"reviewTotCount\">\n                <div class=\"revTotCountItem\">\n                    <span class=\"rtiHead\">5</span>\n                    <img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n                    <div class=\"bar\"><div class=\"barFill barFillGreen\" [ngStyle]=\"{'width':  ratingData.starFive + '%'}\"></div></div>\n                    <span class=\"rtiHeadCount\">{{ratingData.starFiveCount}}</span>\n                </div>\n                <div class=\"revTotCountItem\">\n                    <span class=\"rtiHead\">4</span>\n                    <img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n                    <div class=\"bar\"><div class=\"barFill barFillGreen\" [ngStyle]=\"{'width':  ratingData.starFour + '%'}\"></div></div>\n                    <span class=\"rtiHeadCount\">{{ratingData.starFourCount}}</span>\n                </div>\n                <div class=\"revTotCountItem\">\n                    <span class=\"rtiHead\">3</span>\n                    <img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n                    <div class=\"bar\"><div class=\"barFill barFillGreen\" [ngStyle]=\"{'width':  ratingData.starThree + '%'}\"></div></div>\n                    <span class=\"rtiHeadCount\">{{ratingData.starThreeCount}}</span>\n                </div>\n                <div class=\"revTotCountItem\">\n                    <span class=\"rtiHead\">2</span>\n                    <img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n                    <div class=\"bar\"><div class=\"barFill barFillYellow\" [ngStyle]=\"{'width':  ratingData.starTwo + '%'}\"></div></div>\n                    <span class=\"rtiHeadCount\">{{ratingData.starTwoCount}}</span>\n                </div>\n                <div class=\"revTotCountItem\">\n                    <span class=\"rtiHead\">1</span>\n                    <img src=\"assets/images/icons/star-straight.svg\" alt=\"\">\n                    <div class=\"bar\"><div class=\"barFill barFillRed\" [ngStyle]=\"{'width':  ratingData.starOne + '%'}\"></div></div>\n                    <span class=\"rtiHeadCount\">{{ratingData.starOneCount}}</span>\n                </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ratingsContWrapperOverlay\"></div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
            /*!*****************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
              \*****************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<header>\n  <div class=\"container-fluid\">\n    <div class=\"headerInfo clearfix\">\n      <div class=\"float-left\">\n        <div>\n          <b *ngIf=\"settingObj\">\n            <img src=\"assets/images/icons/phone.svg\" class=\"headerInfoCallIcon\">\n            <a class=\"black\" href=\"tel:{{settingObj.phone}}\">\n              {{settingObj.phone}} (9:00am to 7:00pm) (Call for Order)\n            </a>\n          </b>\n          <span class=\"offDayDeclaration\" *ngIf=\"regionId==1\">NO DELIVERY ON TUESDAY ( ONLINE ORDER ACCEPTED )</span>\n          <br>\n          <b *ngIf=\"settingObj\">\n            <img src=\"assets/images/icons/phone.svg\" class=\"headerInfoCallIcon\">\n            <a class=\"black\" href=\"tel:{{settingObj.phone}}\">\n              {{settingObj.whatsapp_phone}} (9:00am to 7:00pm) (Query)\n            </a>\n          </b>\n        </div>\n      </div>\n      <div class=\"float-right\">\n        <!--<a class=\"topNavBulkOrder\" [routerLink]=\"['/bulk-order']\">BULK ORDER</a>-->\n        <span>Download the app</span>\n        <div class=\"downloadApp\"><a href=\"https://apps.apple.com/us/app/\" target=\"_blank\"><img src=\"assets/images/icons/apple.svg\" class=\"appStoreIcons\"/> App Store</a></div>\n        <div class=\"downloadApp\"><a href=\"https://play.google.com/store/apps/details?id=com.app.alatrading\" target=\"_blank\"><img src=\"assets/images/icons/google-play.svg\" class=\"appStoreIcons\"/> Play Store</a></div>\n        <br>\n        <div class=\"text-right\">\n          <span class=\"locSelectedName\" *ngIf=\"siteRegion=='1'\"> Delhi</span>\n          <span class=\"locSelectedName\" *ngIf=\"siteRegion=='2'\"> Noida</span>&nbsp;&nbsp;\n          <a href=\"javascript:void(0);\" class=\"topNavBulkOrder\" (click)=\"openBulkOrder();\">BULK ORDER</a>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <nav class=\"container-fluid clearfix headerNav\">\n\n    <div class=\"headerMenuSmLinksHolder\">\n        <!-- <a class=\"headerMenuSmCart\" [routerLink]=\"['/cart']\"> -->\n\n        <!-- <a class=\"headerMenuLocation\">\n          <img src=\"assets/images/icons/map-pointer.svg\"/>\n        </a> -->\n        <a href=\"javascript:;\" class=\"mobsearchCaller\" (click)=\"openSearchBox()\"><img src=\"assets/images/icons/search.svg\"/></a>\n        <a href=\"javascript:;\" *ngIf=\"showCart==true\" class=\"headerMenuSmCart openCart\">\n          <label>\n            <img src=\"assets/images/icons/bag.svg\" class=\"btn-icon\"/>\n            <span class=\"navButtonLabel\">{{totalItems}}</span>\n          </label>\n        </a>\n        <a class=\"headerMenuSm\">\n          <img src=\"assets/images/icons/menu-button.svg\"/>\n        </a>\n    </div>\n\n\n    <div class=\"float-left\">\n      <a href=\"javascript:;\" class=\"headerLogo\" [routerLink]=\"['/']\">\n        <img src=\"assets/images/logo.png\" alt=\"Quien's\"/>\n      </a>\n      <div class=\"navSearch hideSearchOnMob\">\n        <form (ngSubmit)=\"submitSearchForm()\" id=\"submitSearchForm\">\n          <div class=\"navSearchInner\">\n          <div class=\"navSearchText\">\n            <img src=\"assets/images/icons/search.svg\" class=\"navSearchIcon\"/>\n            <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"search.productName\" name=\"productName\"/>\n          </div>\n\n          <div class=\"deliveryLoc\">\n            <div class=\"deliveryLocIn\">\n              <div *ngIf=\"showPostalCode\">\n                <img src=\"assets/images/icons/map-pointer.svg\"/>\n                Deliver here <ng-container *ngIf=\"showPostalCode\">{{showPostalCode}}</ng-container>\n              </div>\n              <div>\n                <p class=\"deliveryLocation\">{{selectCurrentAddress}}\n                </p>\n                <img src=\"assets/images/icons/caret-down.svg\" class=\"navCaretDown\"/>\n              </div>\n            </div>\n          </div>\n\n          <button class=\"searchSubmit\" type=\"submit\"\n                  style=\"background-image: url('assets/images/icons/right-arrow-forward-blue.svg');\"></button>\n        </div>\n        </form>\n      </div>\n\n      <!-- <a href=\"javascript:;\" class=\"openDeliveryCaller\"> open delivery</a> -->\n      <!-- <a href=\"javascript:;\" id=\"timeSlotOpen\"> open time slot</a> -->\n    </div>\n    <div class=\"float-right\">\n      <div class=\"navRight\">\n        <div class=\"navButtons\">\n          <!-- <a *ngIf=\"cartData.length==0\" href=\"javascript:;\" class=\"btn btn-primary\" (click)=\"regionCaller()\">Select City</a> 29.01.21 -->\n          <a href=\"javascript:;\" *ngIf=\"showCart==true\" class=\"btn btn-primary openCart\">&nbsp;\n            &nbsp;\n            CART\n            <label>\n              <img src=\"assets/images/icons/bag.svg\" class=\"btn-icon\"/>\n              <span class=\"navButtonLabel\">{{totalItems}}</span>\n            </label>\n            &nbsp;\n          </a>\n          <a href=\"javascript:;\" class=\"btn btn-primary openLoginModal\" *ngIf=\"!loggedIn\">&nbsp; LOGIN &nbsp;</a>\n        </div>\n        <a href=\"javascript:;\" [routerLink]=\"['/account']\" class=\"userMenu usermanuCustom\" *ngIf=\"loggedIn\">\n          <div class=\"userMenuIn\" [style.background-image]=\"'url(' + profileImgPreview +')'\">\n          </div><span class=\"acntHoldName\">My Account</span>\n          <div class=\"userMenuDrop\">\n            <div class=\"userMenuDropIn\">\n              <a href=\"javascript:;\" [routerLink]=\"['/account']\">Account</a>\n              <a href=\"javascript:;\" [routerLink]=\"['/orders']\">Orders</a>\n              <!--<a href=\"javascript:;\" [routerLink]=\"['/change-password']\">Change Password</a>-->\n              <a href=\"javascript:;\" (click)=\"logout()\">Logout</a>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n<!-- for mobiel search -->\n    <div class=\"navSearchSm\">\n      <form (ngSubmit)=\"submitSearchForm()\" id=\"submitSearchForm\">\n        <div class=\"navSearchInner\">\n        <div class=\"navSearchText\">\n          <!-- <img src=\"assets/images/icons/search.svg\" class=\"navSearchIcon\"/> -->\n          <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"search.productName\" name=\"productName\"/>\n        </div>\n        <button class=\"searchSubmit\" type=\"submit\"\n                style=\"background-image: url('assets/images/icons/right-arrow-forward-blue.svg');\"></button>\n      </div>\n      </form>\n    </div>\n  </nav>\n  <nav class=\"mainNav\">\n    <div class=\"mainNavInner\">\n      <div *ngFor=\"let catMenu of categoriesMenu\"><!--navItems-->\n        <!--<a href=\"javascript:;\" [ngClass]=\"{'heroParent': true}\" (click)=\"searchProductNav(catMenu?.slug);\">{{\n          catMenu?.title }}</a>-->\n        <a href=\"javascript:;\" [ngClass]=\"{'heroParent': true}\" [routerLink]=\"['/products/'+catMenu?.slug]\">{{\n          catMenu?.title }}</a>\n        <!--<div class=\"heroMenu\">\n          <div class=\"heroMenuHeader\">{{ catMenu?.title }}</div>\n          <div class=\"heroMenuContent\">\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let product of catMenu?.productItem\">\n                <a href=\"javascript:;\" class=\"heroItemLink\" [routerLink]=\"['/product',product?.slug]\">\n                  <span class=\"heroItemImage\"\n                        [ngStyle]=\"{'background-image': 'url(' + product?.defaultImage + ')'}\"></span>\n                  <p class=\"heroItemName\">{{ product.title }}</p>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>-->\n      </div>\n\n      <!--<div>\n        <a href=\"javascript:;\" [routerLink]=\"['/recipes']\" [ngClass]=\"{'heroParent': false}\">Recipes</a>\n      </div>-->\n    </div>\n  </nav>\n</header>\n\n<div class=\"mobileMenu\">\n  <div class=\"mmUser\">\n    <div style=\"background-image: url('assets/images/icons/go-back-left-arrow.svg')\" class=\"closeMm\"></div>\n\n    <!-- <div class=\"userMenu\" *ngIf=\"loggedIn\">\n      <div class=\"userMenuIn\" [style.background-image]=\"'url(' + profileImgPreview +')'\">\n      </div> -->\n\n\n    <div class=\"mmUserImage\" *ngIf=\"loggedIn\"\n    [style.background-image]=\"'url(' + profileImgPreview +')'\"></div>\n    <ng-container *ngIf=\"!loggedIn\">\n      <div>\n        <a href=\"javascript:;\" class=\"btn btn-primary openLoginModal\">LOGIN</a>\n      </div>\n    </ng-container>\n    <div *ngIf=\"loggedIn\" class=\"mmUserName\">{{newProfileName}}</div>\n    <a *ngIf=\"loggedIn\" href=\"javascript:;\" [routerLink]=\"['/account']\" class=\"mmUserViewProfile\" >View Profile</a>\n  </div>\n  <div class=\"navLocation\">\n    <div><img src=\"assets/images/icons/map-pointer.svg\"> Deliver here <ng-container *ngIf=\"showPostalCode\">{{showPostalCode}}</ng-container></div>\n    <div>\n      <p class=\"deliveryLocation\">{{selectCurrentAddress}} <img class=\"navCaretDown\"\n                                                                src=\"assets/images/icons/caret-down.svg\">\n      </p>\n    </div>\n  </div>\n  <div class=\"gap10\"></div>\n  <div class=\"mmItems\">\n    <ng-container *ngFor=\"let catMenu of categoriesMenu\">\n      <div>\n        <a href=\"javascript:;\" [routerLink]=\"['/products',catMenu?.slug]\">{{\n          catMenu?.title }}</a>\n      </div>\n    </ng-container>\n    <!-- <div>\n      <a href=\"javascript:;\" [routerLink]=\"['/recipes']\">Recipes</a>\n    </div> -->\n  </div>\n  <hr/>\n  <div class=\"mmItems\">\n    <ng-container *ngIf=\"!loggedIn\">\n      <div>\n        <a href=\"javascript:;\" class=\"btn btn-primary openLoginModal\" [routerLink]=\"['/account']\">LOGIN</a>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"loggedIn\">\n      <div>\n        <a href=\"javascript:;\" [routerLink]=\"['/account']\">Account</a>\n      </div>\n      <div>\n        <a href=\"javascript:;\" [routerLink]=\"['/orders']\">Orders</a>\n      </div>\n      <div>\n        <a href=\"javascript:;\" (click)=\"logout()\">Logout</a>\n      </div>\n    </ng-container>\n  </div>\n  <hr/>\n  <div class=\"container-fluid mmContactNumbers\">\n    <div class=\"row\" *ngIf=\"settingObj\">\n      <div class=\"col-md-6\">\n        <a href=\"tel:{{settingObj.phone}}\">\n          <img src=\"assets/images/icons/phone-receiver.svg\"/> {{settingObj.phone}} (10:00am - 9:00pm)\n        </a>\n      </div>\n      <!-- <div class=\"col-6\">\n        <a href=\"javascript:;\">\n          <img src=\"assets/images/icons/whatsapp.svg\"/> +91-881-063-6196\n        </a>\n      </div> -->\n    </div>\n  </div>\n  <p class=\"tuesdayDisclaimer\">NO DELIVERY ON TUESDAY ( ONLINE ORDER ACCEPTED )</p>\n  <div class=\"menuAppBadgesHolder\">\n    <!-- <div class=\"row\">\n      <div class=\"col-6\">\n        <a href=\"javascript:;\">\n          <img src=\"assets/images/app-store-badge.png\"/>\n        </a>\n      </div>\n      <div class=\"col-6\">\n        <a href=\"javascript:;\">\n          <img src=\"assets/images/google-play-badge.png\"/>\n        </a>\n      </div>\n    </div> -->\n    <div class=\"container-fluid\">\n      <a *ngIf=\"cartData.length==0\" href=\"javascript:;\" class=\"btn btn-primary btn-sm\" (click)=\"regionCaller()\">Select City</a>\n      <div class=\"gap10\"></div>\n      <a href=\"javascript:void(0);\" class=\"btn btn-block btn-outline-primary btn-sm\" (click)=\"openBulkOrder();\">BULK ORDER</a>\n    </div>\n  </div>\n</div>\n<div class=\"mobileMenuOverlay\"></div>\n\n<div class=\"selectLocation\">\n  <div class=\"selectLocationInner\">\n    <div class=\"selectLocationContent\">\n      <div class=\"selectLocationHeader\">\n        Choose delivery location\n        <a href=\"javascript:;\" class=\"closeSelectLocation\" (click)=\"closeLocationModal();\"><img src=\"assets/images/icons/close.svg\"/></a>\n      </div>\n      <div class=\"selectLocationCitiesHolder\" *ngIf=\"siteRegion=='1'\">\n        <a href=\"javascript:;\" class=\"active\">Delhi (Central)</a>\n        <a href=\"javascript:;\">Delhi (North West)</a>\n        <a href=\"javascript:;\">Delhi (West)</a>\n        <a href=\"javascript:;\">Delhi (South West)</a>\n        <a href=\"javascript:;\">Delhi (South)</a>\n        <a href=\"javascript:;\">Gurgaon (Spanish Court)</a>\n        <a href=\"javascript:;\">Gurgaon</a>\n        <a href=\"javascript:;\">Gurgaon (Sun City & City Court)</a>\n        <a href=\"javascript:;\">Gurgaon (Eros City)</a>\n        <!-- <a href=\"javascript:;\">Chandigarh</a>\n        <a href=\"javascript:;\">Panchkula</a>\n        <a href=\"javascript:;\">Mohali</a>\n        <a href=\"javascript:;\">Mumbai</a>\n        <a href=\"javascript:;\">Pune</a>\n        <a href=\"javascript:;\">Chennai</a> -->\n      </div>\n      <div class=\"selectLocationCitiesHolder\" *ngIf=\"siteRegion=='2'\">\n        <a href=\"javascript:;\" class=\"active\">South Noida</a>\n        <a href=\"javascript:;\">North Noida</a>\n        <a href=\"javascript:;\">Salt Lake</a>\n        <a href=\"javascript:;\">New Town</a>\n        <a href=\"javascript:;\">Howrah</a>\n        <!-- <a href=\"javascript:;\">Chandigarh</a>\n        <a href=\"javascript:;\">Panchkula</a>\n        <a href=\"javascript:;\">Mohali</a>\n        <a href=\"javascript:;\">Mumbai</a>\n        <a href=\"javascript:;\">Pune</a>\n        <a href=\"javascript:;\">Chennai</a> -->\n      </div>\n      <div class=\"selectLocationInput\">\n        <div class=\"locationInputHolder\">\n\n          <div class=\"ng-autocomplete\">\n            <ng-autocomplete\n              [data]=\"data\"\n              [searchKeyword]=\"keyword\"\n              (selected)='selectEvent($event)'\n              (inputChanged)='onChangeSearch($event)'\n              (inputFocused)='onFocused($event)'\n              [itemTemplate]=\"itemTemplate\"\n              [(ngModel)]=\"pinCodeCurrent\"\n              placeHolder=\"Search Postal Code...\"\n              autocomplete=\"off\">\n            </ng-autocomplete>\n\n            <ng-template #itemTemplate let-item>\n              <a [innerHTML]=\"item.code_new\"></a>\n            </ng-template>\n          </div>\n\n          <img src=\"assets/images/icons/search.svg\"/>\n        </div>\n        <a href=\"javascript:;\" class=\"getGPS\" (click)=\"fetchCurrentLocation();\"><img\n          src=\"assets/images/icons/gps-fixed-indicator.svg\"/> GPS</a>\n      </div>\n      <ng-container *ngIf=\"errorText\">\n        <div class=\"loc-error\" style=\"display:block;color: rgb(255, 255, 255);font-size: 14px; background: rgb(224, 25, 48);border-radius: 0px 0px 4px 4px;\n    padding: 15px 40px;border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;\">\n          <img src=\"https://d2407na1z3fc0t.cloudfront.net/Banner/loc-err.png\" alt=\"\">Unfortunately, We do not serve your locality\n        </div>\n      </ng-container>\n\n    </div>\n  </div>\n</div>\n<div class=\"locationOverlay\"></div>\n\n<diV class=\"loginModal\">\n  <div class=\"lmInner\">\n    <a href=\"javascript:;\" class=\"closeLM\">\n      <img src=\"assets/images/icons/close.svg\"/>\n    </a>\n    <div class=\"lmIn\">\n      <div class=\"loginFlItem lmflImg\" style=\"background-image: url('assets/images/login-img.png')\">\n      </div>\n      <div class=\"loginFlItem lmflContent\">\n        <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1\">\n            <app-login-inner></app-login-inner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</diV>\n<diV class=\"loginModalOverlay\"></diV>\n\n<div class=\"cartModal\">\n  <div class=\"cartInner\">\n    <a href=\"javascript:;\" class=\"closeCart\">\n      <img src=\"assets/images/icons/close.svg\"/>\n    </a>\n    <div class=\"cartIn\" *ngIf=\"totalItems>0\">\n      <div class=\"cartTop\">\n\n        <div class=\"clearfix\">\n          <div class=\"float-left\">\n            <h2 class=\"pageCrtHeader\">Cart</h2>\n          </div>\n          <div class=\"float-right\">\n          </div>\n        </div>\n\n        <div class=\"cartItems\">\n          <ng-container *ngIf=\"settingObj.cod==0 && needAmountForFreeDelivery && shippingCost!=0\">\n            <div class=\"freeDelProgressHolder\">\n              <div class=\"fdHdr\">{{needAmountForFreeDelivery| currency:\"&#8377;\"}} away from FREE SHIPPING</div>\n              <div class=\"freeDelProgressIn\">\n                <div class=\"freeDelProgressMin\">₹0</div>\n                <div class=\"freeDelProgressBar\">\n                  <span style=\"width:50%;\"></span>\n                </div>\n                <div class=\"freeDelProgressMax\">{{minCodAmount| currency:\"&#8377;\"}}</div>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container>\n            <p style=\"color: #F00!important;\" *ngIf=\"regionId==1\">We are currently not accepting COD due to Covid-19 outbreak.</p>\n          </ng-container>\n          <ng-container *ngFor=\"let cartItem of cartData ; let i = index\">\n            <div class=\"cartItem\" *ngIf=\"cartItem?.product_id!=null\">\n              <a href=\"javascript:;\" class=\"cartItemImage\"\n                 [ngStyle]=\"{'background-image': 'url(' + cartItem?.product_details?.product_cutting_option?.defaultImage + ')'}\" title=\"{{ cartItem?.product_details?.product_cutting_option?.name }}\"></a>\n              <div class=\"cartContent row align-items-start\">\n                <div class=\"col-md-7\">\n                  <!-- <a [routerLink]=\"['/product',cartItem?.product_details?.slug]\" class=\"cartItemName\">{{ cartItem?.product_details?.product_cutting_option?.name\n                    }}</a> -->\n                    <p class=\"cartItemName\">{{ cartItem?.product_details?.product_cutting_option?.name\n                    }}</p>\n                  <div *ngIf=\"cartItem.comment!='' && cartItem.comment!='null'\" class=\"customNoteOnCart\">Note: <span>{{cartItem.comment}}</span></div>\n                  <a href=\"javascript:;\" class=\"removeCartItem\"\n                     (click)=\"removeCartItem(cartItem?.product_id,cartItem?.product_cutting_option_id);\">REMOVE</a>\n\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"cartItemCountHold\">\n                    <button href=\"javascript:;\" class=\"cartCountLess\"\n                            (click)=\"quantityUpdate(cartItem?.product_id,cartItem?.product_cutting_option_id,cartItem?.quantity,0,i);\" [disabled]=\"updateDisabled\" >-</button>\n                    <input type=\"number\" [(ngModel)]=\"cartItem.quantity\" min=\"1\" (input)=\"quantityUpdate(cartItem?.product_id,cartItem?.product_cutting_option_id,cartItem?.quantity,3,i);\" [disabled]=\"true\" />\n                    <button href=\"javascript:;\" class=\"cartCountMore\"\n                       (click)=\"quantityUpdate(cartItem?.product_id,cartItem?.product_cutting_option_id,cartItem?.quantity,1,i);\" [disabled]=\"updateDisabled\">+</button>\n                  </div>\n                  <p class=\"cartItemPrice\">Subtotal: <span>{{ cartItem?.itemTotalPrice | currency:\"&#8377;\"}}</span></p>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"cartBottom\">\n\n        \n        <ng-container *ngIf=\"settingObj.coupon==1 && siteRegion==1\">\n          <div class=\"gap10\"></div>\n          <div class=\"couponHolder\" *ngIf=\"apply_coupon_code==''\">\n            <input type=\"text\" placeholder=\"Enter Coupon code\" name=\"coupon_code\" [(ngModel)]=\"coupon_code\" autocomplete=\"off\"/>\n            <button (click)=\"applyCouponCode(1);\">APPLY</button>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"settingObj.coupon_Noida==1 && siteRegion==2\">\n          <div class=\"gap10\"></div>\n          <div class=\"couponHolder\" *ngIf=\"apply_coupon_code==''\">\n            <input type=\"text\" placeholder=\"Enter Coupon code\" name=\"coupon_code\" [(ngModel)]=\"coupon_code\" autocomplete=\"off\"/>\n            <button (click)=\"applyCouponCode(1);\">APPLY</button>\n          </div>\n        </ng-container>\n\n        <div class=\"gap10\"></div>\n\n        <div class=\"cartDetails\">\n          <div class=\"row alignCenter\">\n            <div class=\"col-sm-8\">\n              <div class=\"cartTot\">\n                <p>Total: {{ totalPrice | currency:\"&#8377;\" }}</p>\n                <small class=\"delCh\" *ngIf=\"shippingCost!=0\">Delivery charge ({{deliveryChargeMsg}}): {{ shippingCost | currency:\"&#8377;\" }}</small>\n                <small *ngIf=\"shippingCost==0\">Delivery charge: {{ shippingCost | currency:\"&#8377;\" }}</small>\n\n                <div class=\"clearfix\" *ngIf=\"couponPrice>0\">\n                  <div class=\"\">\n                    <small class=\"coupon\" *ngIf=\"couponPrice>0\" (click)=\"applyCouponCode(0);\">Coupon applied  ({{apply_coupon_code}})  (-){{couponPrice | currency:\"&#8377;\"}}</small>\n                  </div>\n                  <div class=\"\">\n                    <a href=\"javascript:;\" class=\"removeCoupon\" (click)=\"applyCouponCode(0);\">Remove Coupon</a>\n                  </div>\n                </div>\n                <p>Final Price: {{ finalPrice | currency:\"&#8377;\" }}</p>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <ng-container *ngIf=\"gloceryFlag==0\">\n                <ng-container *ngIf=\"(totalPrice-couponPrice)>=\n                  settingObj.shipping_min_amount\">\n                  <ng-container *ngIf=\"totalPrice>0 && loggedIn==true\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg gotoSelectAddress btnCheckout\"\n                     (click)=\"checkOutAddress();\">CHECKOUT</a>\n                  </ng-container>\n\n                  <ng-container *ngIf=\"totalPrice<0.01 && loggedIn==true\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg\" disabled>CHECKOUT</a>\n                  </ng-container>\n\n                  <ng-container *ngIf=\"!loggedIn\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg toggleLoginModal\">CHECKOUT</a>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"gloceryFlag==1\">\n                <ng-container *ngIf=\"(totalPrice-couponPrice)>=\n                  groceryMinAmount\">\n                  <ng-container *ngIf=\"totalPrice>0 && loggedIn==true\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg gotoSelectAddress btnCheckout\"\n                    (click)=\"checkOutAddress();\">CHECKOUT</a>\n                  </ng-container>\n\n                  <ng-container *ngIf=\"totalPrice<0.01 && loggedIn==true\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg\" disabled>CHECKOUT</a>\n                  </ng-container>\n\n                  <ng-container *ngIf=\"!loggedIn\">\n                    <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg toggleLoginModal\">CHECKOUT</a>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"gloceryFlag==0\">\n                <ng-container  *ngIf=\"(totalPrice-couponPrice)<\n                settingObj.shipping_min_amount\">\n                <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg gotoSelectAddress btnCheckout\" [routerLink]=\"['/']\">ADD MORE PRODUCT</a>\n\n              </ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"gloceryFlag==1\">\n                <ng-container  *ngIf=\"(totalPrice-couponPrice)<\n                  groceryMinAmount\">\n                  <a href=\"javascript:;\" class=\"btn btn-primary btn-block btn-lg gotoSelectAddress btnCheckout\" [routerLink]=\"['/']\">ADD MORE PRODUCT</a>\n              </ng-container>\n              </ng-container>\n\n\n            </div>\n\n            <div class=\"col-sm-12\">\n              <ng-container *ngIf=\"gloceryFlag==0\">\n                <ng-container  *ngIf=\"(totalPrice-couponPrice)<\n                settingObj.shipping_min_amount\">\n                <p style=\"color: #F00!important;\">We are currently not accepting order less then amount {{settingObj.shipping_min_amount | currency:\"&#8377;\"}}.</p>\n              </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"gloceryFlag==1\">\n                <ng-container  *ngIf=\"(totalPrice-couponPrice)<\n                  groceryMinAmount\">\n                <p style=\"color: #F00!important;\">We are currently not accepting order less then amount {{groceryMinAmount | currency:\"&#8377;\"}} for only grocery  purchase.</p>\n              </ng-container>\n              </ng-container>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"empty_cart_wrap\" *ngIf=\"totalItems==0\">\n      <img src=\"assets/images/empty-cart.svg\"/>\n      <p>Your cart is empty</p>\n    </div>\n  </div>\n</div>\n<div class=\"cartModalOverlay\"></div>\n\n<div class=\"bulkOrderModal\">\n  <div class=\"boInner\">\n    <a href=\"javascript:;\" class=\"closeBo\" (click)=\"dismissBulkOrder();\">\n      <img src=\"assets/images/icons/close.svg\"/>\n    </a>\n    <div class=\"boIn\">\n      <div class=\"boTop\" style=\"background-image: url('assets/images/icons/bulk.svg');\"></div>\n      <div class=\"boBottom\">\n        <p class=\"boHeader\">Bulk order</p>\n\n        <div class=\"boPhone\" *ngIf=\"pageStatus == 'otp'\">\n          <form (ngSubmit)=\"submitGenerateOtpForm()\" id=\"generateOtpForm\">\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/profile.svg\"/>\n                <input type=\"text\" placeholder=\"Enter your phone number\" id=\"generate_otp_phone\" name=\"phone\" maxlength=\"10\"\n                       [(ngModel)]=\"generate_otp.phone\" required/>\n              </div>\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">GET OTP</button>\n          </form>\n        </div>\n\n        <div class=\"boOtp\" *ngIf=\"pageStatus == 'verifyOtp'\">\n          <form (ngSubmit)=\"submitOtp()\" id=\"submitOtp\">\n          <div class=\"customForm\">\n            <img src=\"assets/images/icons/profile.svg\"/>\n            <input type=\"text\" placeholder=\"Enter your phone number\" id=\"otp_login_phone\" name=\"phone\"\n                   [(ngModel)]=\"bulkOrderObj.phone\" required/>\n          </div>\n          <div class=\"customForm\">\n            <img src=\"assets/images/icons/padlock.svg\"/>\n            <input type=\"password\" placeholder=\"Enter OTP\" id=\"otp_login_otp\" name=\"otp\"\n                   [(ngModel)]=\"bulkOrderObj.otp\" required />\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">VERIFY TO PROCEED</button>\n          </form>\n\n          <div class=\"gap10\"></div>\n          <div class=\"otpMoreOpt clearfix\">\n            <div class=\"float-left\">\n              <a href=\"javascript:;\" (click)=\"gotoPhoneNum()\">CHANGE PHONE NUMBER</a>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"boOrder\" *ngIf=\"pageStatus == 'submitBulkOrder'\">\n          <form (ngSubmit)=\"submitBulkOrder()\" id=\"submitBulkOrder\">\n          <div class=\"customForm\">\n            <img src=\"assets/images/icons/product.svg\"/>\n            <input type=\"text\" placeholder=\"Product name\" id=\"product_name\" name=\"product_name\"\n                   [(ngModel)]=\"bulkOrderObj.product_name\" required/>\n          </div>\n          <div class=\"customForm\">\n            <img src=\"assets/images/icons/quantity.svg\"/>\n            <input type=\"number\" placeholder=\"Quantity (Min 10kg)\" id=\"quantity\" name=\"quantity\"\n                   [(ngModel)]=\"bulkOrderObj.quantity\" min=\"10\" max=\"100\" required/>\n          </div>\n          <div class=\"customForm\">\n            <img src=\"assets/images/icons/date.svg\"/>\n            <my-date-picker readonly placeholder=\"Date of delivery\" name=\"deliveryDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"bulkOrderObj.delivery_date\" required></my-date-picker>\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">PLACE ORDER</button>\n          </form>\n          <div class=\"gap10\"></div>\n          <div class=\"otpMoreOpt clearfix\">\n            <div class=\"float-left\">\n              <a href=\"javascript:;\" (click)=\"gotoPhoneNum()\">CHANGE PHONE NUMBER</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"bulkOrderOverlay\"></div>\n\n\n<!-- Time Slot Modal -->\n\n<div class=\"timeSlotWrapper\">\n  <div class=\"timeSlotInner\">\n    <a href=\"javascript:;\" class=\"closeTimeSlot\"><img src=\"assets/images/icons/close.svg\"/></a>\n    <div class=\"timeSlotContent\">\n      <img lazyload=\"assets/images/time_slot_modal_img.png\" src=\"\" alt=\"\" class=\"timeSlotImg\">\n      <div class=\"timeSlotHeader\">\n        <h2 class=\"float-left\">Available Delivery Slot</h2>\n        <div class=\"timeSlotPostalInputHolder text-right\">\n          <label>Postal Code : {{showPostalCode}}</label>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"selectASlot selectASlotModal\">\n        <div class=\"slotHolder\">\n          <ng-container *ngIf=\"!slots || slots.length==0\">\n            <p style=\"color: #F00!important;\">{{slotMsg}}</p>\n          </ng-container>\n          <div class=\"slotRow\">\n            <div class=\"slotCol\" *ngFor=\"let slot of slots; let i = index\">\n                <div class=\"slotItem\" >\n                  <img src=\"{{slot.icon}}\"/>\n                  <div>{{slot.text+ \" (\" + slot.day_name + \")\"}} </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"timeSlotOverlay\"></div>\n\n<!-- Review Modal -->\n\n\n\n\n<!-- <div class=\"DeliveryAvailableModal\">\n  <div class=\"timeSlotInner\">\n    <a href=\"javascript:;\" class=\"DeliveryAvail\"><img src=\"assets/images/icons/close.svg\"/></a>\n    <div class=\"DeliveryContent\">\n      <img src=\"assets/images/delivery_modal_img.png\" alt=\"\" class=\"DeliveryBannertImg\">\n      <h1 class=\"delHeader text-center\">Live Delivery Updates - Bangalore</h1>\n      <h3 class=\"delSubHead text-center\">As of today, We are delivering in the following areas in Bangalore</h3>\n      <div class=\"gap20\"></div>\n      <div class=\"prInfoPointsHolder\">\n        <div>\n          <h4>Bell Road</h4>\n          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit, totam id omnis itaque repellendus quasi consectetur quisquam, ab laborum enim animi tempora architecto ipsam maxime, voluptate corrupti dignissimos recusandae!</p>\n        </div>\n      </div>\n      <div class=\"prInfoPointsHolder\">\n        <div>\n          <h4>Bell Road</h4>\n          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit, totam id omnis itaque repellendus quasi consectetur quisquam, ab laborum enim animi tempora architecto ipsam maxime, voluptate corrupti dignissimos recusandae!</p>\n        </div>\n      </div>\n      <div class=\"prInfoPointsHolder\">\n        <div>\n          <h4>Bell Road</h4>\n          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit, totam id omnis itaque repellendus quasi consectetur quisquam, ab laborum enim animi tempora architecto ipsam maxime, voluptate corrupti dignissimos recusandae!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"DeliveryAvailableModalOverlay\"></div> -->\n\n<a *ngIf=\"loggedIn &&  settingObj.referral==1 && referralCode!=''\" href=\"javascript:;\" class=\"shareReferCaller\" (click)=\"openRefBox()\"><img lazyLoad=\"assets/images/icons/refer.svg\" src=\"\" alt=\"\"> Refer & Earn</a>\n<div class=\"shareReferHolder\">\n  <a href=\"javascript:;\" class=\"rightCloseArrow\" (click)=\"closeRefBox()\"><img lazyLoad=\"assets/images/icons/right-arrow.png\" src=\"\" alt=\"\"></a>\n  <img class=\"refIcon\" lazyLoad=\"assets/images/icons/refer-blue.png\" src=\"\" alt=\"\">\n  <h4>Refer and Earn</h4>\n  <p>Earn {{settingObj?.referral_amount}} points by sharing your unique referral code with friends and family</p>\n  <!-- <div class=\"refereCode\"><input class=\"refereCode\" readonly type=\"text\" value=\"{{referralCode}}\" #userinput> <button (click)=\"copyReferral(userinput)\" class=\"copy\">\n    Copy Code</button></div> -->\n    <div  class=\"refercodeWrap\"><input class=\"refereCode\" readonly=\"\" type=\"text\" value=\"{{referralCode}}\" #userinput><button (click)=\"copyReferral(referralCodeWithMessage)\" class=\"copy\"> <img src=\"assets/images/icons/sheet.svg\"></button></div>\n    <!-- <input type=\"tel\" value=\"{{referralCode}}\" #userinput> -->\n  <p>You will earn points, once referral place first order using referral code</p>\n  <a class=\"learnMore\" (click)=\"closeRefBox()\" [routerLink]=\"['/page/refer-and-earn']\">Learn more</a>\n  <br>\n</div>\n\n<div class=\"reviewContWrapper\">\n  <div class=\"reviewContInner\">\n    <div class=\"reviewContent\">\n      <div class=\"timeSlotHeader\">\n        <h2 class=\"locSelHeaer\">Please select your city</h2>\n        <a href=\"javascript:;\" class=\"closeTimeSlot closeRevMod\"><img src=\"assets/images/icons/close.svg\"/></a>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"reviewContBody locSelBody\">\n        <a href=\"javascript:;\" class=\"locSelector {{siteRegion=='1' ? 'active':''}}\" (click)=\"changeRegion('1')\">\n          <img lazyLoad=\"assets/images/india-gate.png\" src=\"\" alt=\"Delhi\" class=\"locPlImg\">\n          <span class=\"plName\">Delhi</span>\n        </a>\n        <a href=\"javascript:;\" class=\"locSelector {{siteRegion=='2' ? 'active':''}}\" (click)=\"changeRegion('2')\">\n          <img lazyLoad=\"assets/images/victoria.png\" alt=\"Noida\" class=\"locPlImg\">\n          <span class=\"plName\">Noida</span>\n        </a>\n        <!-- <div class=\"downloadApp\"><a href=\"javascript:;\" (click)=\"changeRegion('1')\"> Delhi</a></div>\n        <div class=\"downloadApp\"><a href=\"javascript:;\" (click)=\"changeRegion('2')\">Noida</a></div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"reviewContWrapperOverlay\"></div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/core/login-inner/login-inner.component.html":
            /*!***************************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/login-inner/login-inner.component.html ***!
              \***************************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div class=\"loginHolder\">\n  <div class=\"loginTabHolder\">\n    <a href=\"javascript:;\" *ngIf=\"showLoginArea == true\" [ngClass]=\"pageStatus == 'login' ? 'active' : ''\"\n       (click)=\"gotoLogin()\">LOGIN</a>\n    <a href=\"javascript:;\" *ngIf=\"showRegisterArea == true\" [ngClass]=\"pageStatus == 'register' ? 'active' : ''\"\n       (click)=\"gotoRegister()\">REGISTER</a>\n    <a href=\"javascript:;\" *ngIf=\"showOTPArea == true\" [ngClass]=\"pageStatus == 'otp' ? 'active' : ''\"\n       (click)=\"gotoOTP()\">Login with OTP</a>\n  </div>\n  <div class=\"loginTabContent\">\n    <div class=\"loginTabInner\" *ngIf=\"pageStatus == 'login'\">\n      <form (ngSubmit)=\"submitLoginForm()\" id=\"loginForm\">\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/profile.svg\"/>\n          <input type=\"text\" placeholder=\"Enter your email or phone number\" id=\"login_email\" name=\"email\"\n                 [(ngModel)]=\"login.email\" required/>\n        </div>\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/padlock.svg\"/>\n          <input type=\"password\" placeholder=\"Enter your password\" id=\"login_password\" name=\"password\"\n                 [(ngModel)]=\"login.password\" required/>\n        </div>\n        <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg\">LOGIN</button>\n      </form>\n      <div class=\"orDivider\">\n        - Or Login With -\n      </div>\n      <div class=\"row socialLogin\">\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg\"><img\n            src=\"assets/images/icons/mobile-phone.svg\"/>OTP LOGIN\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-primary btn-lg fb-bg\"><img\n            src=\"assets/images/icons/facebook-logo.svg\"/>FACEBOOK\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg tw-bg\"><img\n            src=\"assets/images/icons/twitter.svg\"/>TWITTER\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg g-bg\"><img\n            src=\"assets/images/icons/google.svg\"/>GOOGLE\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"loginTabInner\" *ngIf=\"pageStatus == 'register'\">\n      <form (ngSubmit)=\"submitRegisterForm()\" id=\"registerForm\">\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/profile.svg\"/>\n          <input type=\"text\" placeholder=\"Enter your full name\" id=\"registration_name\" name=\"name\"\n                 [(ngModel)]=\"register.name\" required/>\n        </div>\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/profile.svg\"/>\n          <input type=\"text\" placeholder=\"Enter your email\" id=\"registration_email\" name=\"email\"\n                 [(ngModel)]=\"register.email\" required/>\n        </div>\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/profile.svg\"/>\n          <input type=\"text\" placeholder=\"Enter your phone number\" id=\"registration_phone\" name=\"phone\"\n                 [(ngModel)]=\"register.phone\" required/>\n        </div>\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/padlock.svg\"/>\n          <input type=\"password\" placeholder=\"Enter your password\" id=\"register_password\" name=\"password\"\n                 [(ngModel)]=\"register.password\" required/>\n        </div>\n        <div class=\"customForm\">\n          <img src=\"assets/images/icons/padlock.svg\"/>\n          <input type=\"password\" placeholder=\"Retype your password\" id=\"register_confirm_password\"\n                 name=\"confirm_password\" [(ngModel)]=\"register.confirm_password\" required/>\n        </div>\n        <button class=\"btn btn-block btn-primary btn-lg\" type=\"submit\">Register</button>\n      </form>\n      <div class=\"orDivider\">\n        - Or Login With -\n      </div>\n\n      <div class=\"row socialLogin\">\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg\"><img\n            src=\"assets/images/icons/mobile-phone.svg\"/>OTP LOGIN\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-primary btn-lg fb-bg\"><img\n            src=\"assets/images/icons/facebook-logo.svg\"/>FACEBOOK\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg tw-bg\"><img\n            src=\"assets/images/icons/twitter.svg\"/>TWITTER\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-block btn-success btn-lg g-bg\"><img\n            src=\"assets/images/icons/google.svg\"/>GOOGLE\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"loginTabInner\" *ngIf=\"pageStatus == 'otp'\">\n\n        <div class=\"otpStep1\">\n          <form (ngSubmit)=\"submitGenerateOtpForm()\" id=\"generateOtpForm\">\n            <div class=\"customForm\">\n              <img src=\"assets/images/icons/smartphone.svg\"/>\n              <input type=\"text\" placeholder=\"Enter your phone number\" id=\"generate_otp_phone\" name=\"phone\" maxlength=\"10\"\n                     [(ngModel)]=\"generate_otp.phone\" required/>\n            </div>\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">PROCEED</button><!--(click)=\"gotoEnterOTP()\"-->\n          </form>\n        </div>\n\n        <div class=\"otpStep2\">\n          <form (ngSubmit)=\"submitOtpLoginForm()\" id=\"submitOtpLoginForm\">\n\n            <div class=\"customForm\">\n              <img src=\"assets/images/icons/smartphone.svg\"/>\n              <input type=\"text\" placeholder=\"Enter your phone number\" id=\"otp_login_phone\" name=\"phone\"\n                      [(ngModel)]=\"otp_login.phone\" readonly required/>\n            </div>\n            <div class=\"customForm\">\n              <img src=\"assets/images/icons/padlock.svg\"/>\n              <input type=\"password\" placeholder=\"Enter OTP\" id=\"otp_login_otp\" name=\"otp\"\n                      [(ngModel)]=\"otp_login.otp\" required/>\n            </div>\n\n\n\n            <!--<div class=\"customForm\">-->\n              <!--<img src=\"assets/images/icons/profile.svg\"/>-->\n              <!--<input type=\"text\" placeholder=\"Enter your name\" required/>-->\n            <!--</div>-->\n            <ng-container *ngIf=\"userObject && userObject?.email==''\">\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/profile.svg\">\n                <input placeholder=\"Enter your name\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"otp_login.name\" required>\n              </div>\n\n              <div class=\"customForm\">\n                <img src=\"assets/images/icons/envelope-of-white-paper.svg\">\n                <input placeholder=\"Enter email\" type=\"email\"  id=\"email\" name=\"email\" [(ngModel)]=\"otp_login.email\" required>\n              </div>\n\n              <div class=\"customForm\" *ngIf=\"settingObj.referral==1\">\n                <img src=\"assets/images/icons/refer.svg\"/>\n                <input type=\"text\" placeholder=\"Referral code name\" id=\"used_referral_code\" name=\"used_referral_code\" [(ngModel)]=\"otp_login.used_referral_code\" />\n              </div>\n            </ng-container>\n\n\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">LOGIN</button>\n\n            <div class=\"gap10\"></div>\n            <div class=\"otpMoreOpt clearfix\">\n              <div class=\"float-left\">\n                <a href=\"javascript:;\" (click)=\"gotoPhoneNum()\" class=\"termCondLink\">CHANGE PHONE NUMBER</a>\n              </div>\n              <div class=\"float-right\">\n                <a href=\"javascript:;\" (click)=\"submitGenerateOtpForm()\" *ngIf=\"timeLeft==0\" class=\"termCondLink\">RESEND OTP</a>\n                <span class=\"otpCouter\" *ngIf=\"timeLeft>0\">{{timeLeft}} Seconds Left....</span>\n              </div>\n              <div class=\"clearfix\"></div>\n              <!-- <div class=\"float-left\">\n                <input [disabled]=\"isDisabledTerms\" checked=\"checked\" type=\"checkbox\" id=\"Checkbox0\" name=\"cCheckbox0\" (change)=\"checkSelected(checkBox[0].label)\">By signing in you are agreed to our <a href=\"javascript:;\" (click)=\"openTerms()\">Terms and Conditions</a>\n              </div> -->\n              <label class=\"container\">By signing in you are agreed to our <a class=\"termCondLink\" href=\"javascript:;\" (click)=\"openTerms()\">Terms and Conditions</a>\n                <input type=\"checkbox\" checked=\"checked\" [disabled]=\"isDisabledTerms\" id=\"Checkbox0\" name=\"cCheckbox0\" (change)=\"checkSelected(checkBox[0].label)\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n\n          </form>\n        </div>\n\n        <!-- <div class=\"otpStep3\">\n\n            <div class=\"customForm\">\n              <img src=\"assets/images/icons/profile.svg\"/>\n              <input type=\"text\" placeholder=\"Enter your name\" required/>\n            </div>\n            <div class=\"customForm\">\n              <img src=\"assets/images/icons/envelope-of-white-paper.svg\"/>\n              <input type=\"text\" placeholder=\"Enter email\" required/>\n            </div>\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">SUBMIT TO PROCEED</button>\n\n        </div> -->\n\n    </div>\n  </div>\n</div>\n");

                /***/
            }),

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/core/login/login.component.html":
            /*!***************************************************************************************!*\
              !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/login/login.component.html ***!
              \***************************************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("<div class=\"gap100\"></div>\n<div class=\"container\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-md-5\">\n            <app-login-inner></app-login-inner>\n        </div>\n        <div class=\"col-md-5 offset-md-1\">\n            <img src=\"assets/images/login-img.webp\" class=\"loginImg\" />\n        </div>\n    </div>\n</div>\n<div class=\"gap100\"></div>");

                /***/
            }),

        /***/
        "./node_modules/tslib/tslib.es6.js":
            /*!*****************************************!*\
              !*** ./node_modules/tslib/tslib.es6.js ***!
              \*****************************************/
            /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__extends", function() {
                    return __extends;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__assign", function() {
                    return __assign;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__rest", function() {
                    return __rest;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__decorate", function() {
                    return __decorate;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__param", function() {
                    return __param;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__metadata", function() {
                    return __metadata;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__awaiter", function() {
                    return __awaiter;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__generator", function() {
                    return __generator;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__createBinding", function() {
                    return __createBinding;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__exportStar", function() {
                    return __exportStar;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__values", function() {
                    return __values;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__read", function() {
                    return __read;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__spread", function() {
                    return __spread;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() {
                    return __spreadArrays;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__await", function() {
                    return __await;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() {
                    return __asyncGenerator;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() {
                    return __asyncDelegator;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__asyncValues", function() {
                    return __asyncValues;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() {
                    return __makeTemplateObject;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__importStar", function() {
                    return __importStar;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__importDefault", function() {
                    return __importDefault;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() {
                    return __classPrivateFieldGet;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() {
                    return __classPrivateFieldSet;
                });
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation.

                Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.

                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */
                /* global Reflect, Promise */

                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({
                                __proto__: []
                            }
                            instanceof Array && function(d, b) {
                                d.__proto__ = b;
                            }) ||
                        function(d, b) {
                            for (var p in b)
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                        };
                    return extendStatics(d, b);
                };

                function __extends(d, b) {
                    extendStatics(d, b);

                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                }

                var __assign = function() {
                    __assign = Object.assign || function __assign(t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s)
                                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                        return t;
                    }
                    return __assign.apply(this, arguments);
                }

                function __rest(s, e) {
                    var t = {};
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                            t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === "function")
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                                t[p[i]] = s[p[i]];
                        }
                    return t;
                }

                function __decorate(decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                        d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                }

                function __param(paramIndex, decorator) {
                    return function(target, key) {
                        decorator(target, key, paramIndex);
                    }
                }

                function __metadata(metadataKey, metadataValue) {
                    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
                }

                function __awaiter(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }

                function __generator(thisArg, body) {
                    var _ = {
                            label: 0,
                            sent: function() {
                                if (t[0] & 1) throw t[1];
                                return t[1];
                            },
                            trys: [],
                            ops: []
                        },
                        f, y, t, g;
                    return g = {
                        next: verb(0),
                        "throw": verb(1),
                        "return": verb(2)
                    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                        return this;
                    }), g;

                    function verb(n) {
                        return function(v) {
                            return step([n, v]);
                        };
                    }

                    function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        while (_) try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            if (y = 0, t) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [6, e];
                            y = 0;
                        } finally {
                            f = t = 0;
                        }
                        if (op[0] & 5) throw op[1];
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }
                }

                function __createBinding(o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }

                function __exportStar(m, exports) {
                    for (var p in m)
                        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
                }

                function __values(o) {
                    var s = typeof Symbol === "function" && Symbol.iterator,
                        m = s && o[s],
                        i = 0;
                    if (m) return m.call(o);
                    if (o && typeof o.length === "number") return {
                        next: function() {
                            if (o && i >= o.length) o = void 0;
                            return {
                                value: o && o[i++],
                                done: !o
                            };
                        }
                    };
                    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
                }

                function __read(o, n) {
                    var m = typeof Symbol === "function" && o[Symbol.iterator];
                    if (!m) return o;
                    var i = m.call(o),
                        r, ar = [],
                        e;
                    try {
                        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
                    } catch (error) {
                        e = {
                            error: error
                        };
                    } finally {
                        try {
                            if (r && !r.done && (m = i["return"])) m.call(i);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    return ar;
                }

                function __spread() {
                    for (var ar = [], i = 0; i < arguments.length; i++)
                        ar = ar.concat(__read(arguments[i]));
                    return ar;
                }

                function __spreadArrays() {
                    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                    for (var r = Array(s), k = 0, i = 0; i < il; i++)
                        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                            r[k] = a[j];
                    return r;
                };

                function __await(v) {
                    return this instanceof __await ? (this.v = v, this) : new __await(v);
                }

                function __asyncGenerator(thisArg, _arguments, generator) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var g = generator.apply(thisArg, _arguments || []),
                        i, q = [];
                    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                        return this;
                    }, i;

                    function verb(n) {
                        if (g[n]) i[n] = function(v) {
                            return new Promise(function(a, b) {
                                q.push([n, v, a, b]) > 1 || resume(n, v);
                            });
                        };
                    }

                    function resume(n, v) {
                        try {
                            step(g[n](v));
                        } catch (e) {
                            settle(q[0][3], e);
                        }
                    }

                    function step(r) {
                        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                    }

                    function fulfill(value) {
                        resume("next", value);
                    }

                    function reject(value) {
                        resume("throw", value);
                    }

                    function settle(f, v) {
                        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
                    }
                }

                function __asyncDelegator(o) {
                    var i, p;
                    return i = {}, verb("next"), verb("throw", function(e) {
                        throw e;
                    }), verb("return"), i[Symbol.iterator] = function() {
                        return this;
                    }, i;

                    function verb(n, f) {
                        i[n] = o[n] ? function(v) {
                            return (p = !p) ? {
                                value: __await(o[n](v)),
                                done: n === "return"
                            } : f ? f(v) : v;
                        } : f;
                    }
                }

                function __asyncValues(o) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var m = o[Symbol.asyncIterator],
                        i;
                    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                        return this;
                    }, i);

                    function verb(n) {
                        i[n] = o[n] && function(v) {
                            return new Promise(function(resolve, reject) {
                                v = o[n](v), settle(resolve, reject, v.done, v.value);
                            });
                        };
                    }

                    function settle(resolve, reject, d, v) {
                        Promise.resolve(v).then(function(v) {
                            resolve({
                                value: v,
                                done: d
                            });
                        }, reject);
                    }
                }

                function __makeTemplateObject(cooked, raw) {
                    if (Object.defineProperty) {
                        Object.defineProperty(cooked, "raw", {
                            value: raw
                        });
                    } else {
                        cooked.raw = raw;
                    }
                    return cooked;
                };

                function __importStar(mod) {
                    if (mod && mod.__esModule) return mod;
                    var result = {};
                    if (mod != null)
                        for (var k in mod)
                            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                    result.default = mod;
                    return result;
                }

                function __importDefault(mod) {
                    return (mod && mod.__esModule) ? mod : {
                        default: mod
                    };
                }

                function __classPrivateFieldGet(receiver, privateMap) {
                    if (!privateMap.has(receiver)) {
                        throw new TypeError("attempted to get private field on non-instance");
                    }
                    return privateMap.get(receiver);
                }

                function __classPrivateFieldSet(receiver, privateMap, value) {
                    if (!privateMap.has(receiver)) {
                        throw new TypeError("attempted to set private field on non-instance");
                    }
                    privateMap.set(receiver, value);
                    return value;
                }


                /***/
            }),

        /***/
        "./src/$$_lazy_route_resource lazy recursive":
            /*!**********************************************************!*\
              !*** ./src/$$_lazy_route_resource lazy namespace object ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var map = {
                    "./account/account.module": [
                        "./src/app/components/account/account.module.ts",
                        "account-account-module"
                    ],
                    "./bulk/bulk.module": [
                        "./src/app/components/bulk/bulk.module.ts",
                        "bulk-bulk-module"
                    ],
                    "./cart/cart.module": [
                        "./src/app/components/cart/cart.module.ts",
                        "cart-cart-module"
                    ],
                    "./checkout-address/checkout-address.module": [
                        "./src/app/components/checkout-address/checkout-address.module.ts",
                        "checkout-address-checkout-address-module"
                    ],
                    "./cms/cms.module": [
                        "./src/app/components/cms/cms.module.ts",
                        "cms-cms-module"
                    ],
                    "./components/components.module": [
                        "./src/app/components/components.module.ts",
                        "components-components-module"
                    ],
                    "./contact/contact.module": [
                        "./src/app/components/contact/contact.module.ts",
                        "contact-contact-module"
                    ],
                    "./delivery-summary/delivery-summary.module": [
                        "./src/app/components/delivery-summary/delivery-summary.module.ts",
                        "delivery-summary-delivery-summary-module"
                    ],
                    "./faq/faq.module": [
                        "./src/app/components/faq/faq.module.ts",
                        "faq-faq-module"
                    ],
                    "./home/home.module": [
                        "./src/app/components/home/home.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "default~home-home-module~product-list-product-list-module~recipe-recipe-module",
                        "common",
                        "home-home-module"
                    ],
                    "./order-placed-online/order-placed-online.module": [
                        "./src/app/components/order-placed-online/order-placed-online.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "order-placed-online-order-placed-online-module"
                    ],
                    "./order-placed/order-placed.module": [
                        "./src/app/components/order-placed/order-placed.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "order-placed-order-placed-module"
                    ],
                    "./orders/orders.module": [
                        "./src/app/components/orders/orders.module.ts",
                        "orders-orders-module"
                    ],
                    "./payment-cancel/payment-cancel.module": [
                        "./src/app/components/payment-cancel/payment-cancel.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "payment-cancel-payment-cancel-module"
                    ],
                    "./payment/payment.module": [
                        "./src/app/components/payment/payment.module.ts",
                        "payment-payment-module"
                    ],
                    "./product-details/product-details.module": [
                        "./src/app/components/product-details/product-details.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "common",
                        "product-details-product-details-module"
                    ],
                    "./product-list/product-list.module": [
                        "./src/app/components/product-list/product-list.module.ts",
                        "default~home-home-module~product-list-product-list-module~recipe-recipe-module",
                        "product-list-product-list-module"
                    ],
                    "./recipe/recipe.module": [
                        "./src/app/components/recipe/recipe.module.ts",
                        "default~home-home-module~order-placed-online-order-placed-online-module~order-placed-order-placed-mo~ce7f76b7",
                        "default~home-home-module~product-list-product-list-module~recipe-recipe-module",
                        "common",
                        "recipe-recipe-module"
                    ],
                    "./recipes/recipes.module": [
                        "./src/app/components/recipes/recipes.module.ts",
                        "common",
                        "recipes-recipes-module"
                    ],
                    "./track-order/track-order.module": [
                        "./src/app/components/track-order/track-order.module.ts",
                        "track-order-track-order-module"
                    ],
                    "./walletPayment/walletPayment.module": [
                        "./src/app/components/walletPayment/walletPayment.module.ts",
                        "walletPayment-walletPayment-module"
                    ]
                };

                function webpackAsyncContext(req) {
                    if (!__webpack_require__.o(map, req)) {
                        return Promise.resolve().then(function() {
                            var e = new Error("Cannot find module '" + req + "'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        });
                    }

                    var ids = map[req],
                        id = ids[0];
                    return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
                        return __webpack_require__(id);
                    });
                }
                webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                    return Object.keys(map);
                };
                webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
                module.exports = webpackAsyncContext;

                /***/
            }),

        /***/
        "./src/app/_helpers/error.interceptor.ts":
            /*!***********************************************!*\
              !*** ./src/app/_helpers/error.interceptor.ts ***!
              \***********************************************/
            /*! exports provided: ErrorInterceptor */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() {
                    return ErrorInterceptor;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../services/login-registration.service */ "./src/app/services/login-registration.service.ts");






                var ErrorInterceptor = /** @class */ (function() {
                    function ErrorInterceptor(authenticationService, router) {
                        this.authenticationService = authenticationService;
                        this.router = router;
                    }
                    ErrorInterceptor.prototype.intercept = function(request, next) {
                        var _this = this;
                        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function(err) {
                            if (err.status === 403) {
                                // auto logout if 401 response returned from api
                                _this.authenticationService.logout();
                                _this.router.navigate(['/']);
                            }
                            var error = err.error.message || err.statusText;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                        }));
                    };
                    ErrorInterceptor.ctorParameters = function() {
                        return [{
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__["LoginRegistrationService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
                            }
                        ];
                    };
                    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_registration_service__WEBPACK_IMPORTED_MODULE_5__["LoginRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
                    ], ErrorInterceptor);
                    return ErrorInterceptor;
                }());



                /***/
            }),

        /***/
        "./src/app/_helpers/fake-backend.ts":
            /*!******************************************!*\
              !*** ./src/app/_helpers/fake-backend.ts ***!
              \******************************************/
            /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() {
                    return FakeBackendInterceptor;
                });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() {
                    return fakeBackendProvider;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





                var FakeBackendInterceptor = /** @class */ (function() {
                    function FakeBackendInterceptor() {}
                    FakeBackendInterceptor.prototype.intercept = function(request, next) {
                        var testUser = {
                            id: 1,
                            username: 'test',
                            password: 'test',
                            firstName: 'Test',
                            lastName: 'User'
                        };
                        // wrap in delayed observable to simulate server api call
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function() {
                                // authenticate
                                if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                                    if (request.body.username === testUser.username && request.body.password === testUser.password) {
                                        // if login details are valid return 200 OK with a fake jwt token
                                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                                            status: 200,
                                            body: {
                                                token: 'fake-jwt-token'
                                            }
                                        }));
                                    } else {
                                        // else return 400 bad request
                                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                                            error: {
                                                message: 'Username or password is incorrect'
                                            }
                                        });
                                    }
                                }
                                // get users
                                if (request.url.endsWith('/api/users') && request.method === 'GET') {
                                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                                    if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                                            status: 200,
                                            body: [testUser]
                                        }));
                                    } else {
                                        // return 401 not authorised if token is null or invalid
                                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                                            error: {
                                                message: 'Unauthorised'
                                            }
                                        });
                                    }
                                }
                                // pass through any requests not handled above
                                return next.handle(request);
                            }))
                            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
                    };
                    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], FakeBackendInterceptor);
                    return FakeBackendInterceptor;
                }());

                var fakeBackendProvider = {
                    // use fake backend in place of Http service for backend-less development
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: FakeBackendInterceptor,
                    multi: true
                };


                /***/
            }),

        /***/
        "./src/app/_helpers/index.ts":
            /*!***********************************!*\
              !*** ./src/app/_helpers/index.ts ***!
              \***********************************/
            /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() {
                    return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
                });

                /* harmony import */
                var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() {
                    return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
                });

                /* harmony import */
                var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() {
                    return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"];
                });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() {
                    return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"];
                });







                /***/
            }),

        /***/
        "./src/app/_helpers/jwt.interceptor.ts":
            /*!*********************************************!*\
              !*** ./src/app/_helpers/jwt.interceptor.ts ***!
              \*********************************************/
            /*! exports provided: JwtInterceptor */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() {
                    return JwtInterceptor;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/login-registration.service */ "./src/app/services/login-registration.service.ts");



                var JwtInterceptor = /** @class */ (function() {
                    function JwtInterceptor(authService) {
                        this.authService = authService;
                    }
                    JwtInterceptor.prototype.intercept = function(request, next) {
                        // add authorization header with jwt token if available
                        var currentUser = localStorage.getItem('token');
                        if (currentUser) {
                            request = request.clone({
                                setHeaders: {
                                    Authorization: "Bearer " + currentUser
                                }
                            });
                        }
                        return next.handle(request);
                    };
                    JwtInterceptor.ctorParameters = function() {
                        return [{
                            type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]
                        }];
                    };
                    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]])
                    ], JwtInterceptor);
                    return JwtInterceptor;
                }());



                /***/
            }),

        /***/
        "./src/app/app-routing.module.ts":
            /*!***************************************!*\
              !*** ./src/app/app-routing.module.ts ***!
              \***************************************/
            /*! exports provided: AppRoutingModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() {
                    return AppRoutingModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _core_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
                /* harmony import */
                var _core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./core/change-password/change-password.component */ "./src/app/core/change-password/change-password.component.ts");
                /* harmony import */
                var _services_loin_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./services/loin-guard.service */ "./src/app/services/loin-guard.service.ts");






                var routes = [{
                        path: '',
                        loadChildren: './components/components.module#ComponentsModule'
                    },
                    {
                        path: 'login',
                        component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                    },
                    {
                        path: 'change-password',
                        component: _core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"],
                        canActivate: [_services_loin_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoinGuardService"]]
                    },
                    {
                        path: '**',
                        //redirectTo: '/external/404'
                        redirectTo: '/'
                    }
                ];
                var AppRoutingModule = /** @class */ (function() {
                    function AppRoutingModule() {}
                    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                                onSameUrlNavigation: 'reload'
                            })],
                            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                        })
                    ], AppRoutingModule);
                    return AppRoutingModule;
                }());



                /***/
            }),

        /***/
        "./src/app/app.component.scss":
            /*!************************************!*\
              !*** ./src/app/app.component.scss ***!
              \************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

                /***/
            }),

        /***/
        "./src/app/app.component.ts":
            /*!**********************************!*\
              !*** ./src/app/app.component.ts ***!
              \**********************************/
            /*! exports provided: AppComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "AppComponent", function() {
                    return AppComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
                /* harmony import */
                var _services_cart_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./services/cart-service.service */ "./src/app/services/cart-service.service.ts");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







                var AppComponent = /** @class */ (function() {
                    function AppComponent(platformId, window, router, titleService, metaService, cart) {
                        this.platformId = platformId;
                        this.window = window;
                        this.router = router;
                        this.titleService = titleService;
                        this.metaService = metaService;
                        this.cart = cart;
                        this.title = 'ALA';
                    }
                    AppComponent.prototype.ngOnInit = function() {
                        var _this = this;
                        this.titleService.setTitle("Quien's:Fresh Fish, Chicken, Mutton Online Home Delivery in Delhi.  ");
                        this.metaService.addTags([{
                                name: 'title',
                                content: "Quien's:Fresh Fish, Chicken, Mutton Online Home Delivery in Delhi.  "
                            },
                            {
                                name: 'keywords',
                                content: "Fish, fresh fish, buy fish online, Hilsa Fish, Rohu fish, Pomfret Fish, Chital Fish, Tiger Prawn, White Prawn, Crab, White Pomfret, Tangra Fish, Topshe Fish, Koi Fish, Kajali Fish, Salmon Fish, Blue Swimming Crab, Surmai Steak, Yellow Fin Tuna, Atlantic Salmon, Black Pomfret, Mutton Keema, Bata Fish, Pabda Fish, Tilapia Fish, Folui Fish, Ayar Fish, River Sole, Chicken, Kadaknath Chicken"
                            },
                            {
                                name: 'description',
                                content: "Quien's is your one-stop fresh fish and meat delivery shop at Delhi.  .You will get the Fresh Fish, Exotic Fish,Seafood, Meat,Ready to Eat, Ready to Fry, Marinated Fish & meat as well as grocery delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Fish, Seafood, Chicken, mutton & Marinated items. All our products are 100% Halal and Completely hygienic, natural and healthy. Once you've experienced Quien's, you'll forget the older ways of buying Fish and Meat."
                            },
                            {
                                name: 'abstract',
                                content: "Quien's is your one-stop fresh fish and meat delivery shop at Delhi.  ."
                            },
                            {
                                name: 'robots',
                                content: 'index, follow'
                            },
                            {
                                name: 'copyright',
                                content: 'Copyright https://www.alatrading.in All Rights Reserved'
                            },
                            {
                                name: 'author',
                                content: 'Ala Trading Co.'
                            },
                            {
                                name: 'distribution',
                                content: 'Global'
                            },
                            {
                                name: 'rating',
                                content: 'General'
                            },
                            {
                                name: 'geo.placename',
                                content: 'India'
                            },
                            {
                                name: 'geo.position',
                                content: '28.643999;77.118530'
                            },
                            {
                                name: 'geo.region',
                                content: 'In-'
                            },
                            {
                                name: 'ICBM',
                                content: '28.643999;77.118530'
                            },
                            {
                                name: 'mobile-web-app-capable',
                                content: 'true'
                            },
                            {
                                property: 'og:image',
                                content: 'https://www.alatrading.in/assets/images/og_image.jpg'
                            },
                            {
                                property: 'og:image:width',
                                content: '1200'
                            },
                            {
                                property: 'og:image:height',
                                content: '630'
                            },
                            {
                                property: 'og:image:alt',
                                content: 'Buy Fresh Fish, chicken, mutton and grocery online in Delhi.   region and get delivered at your doorstep'
                            },
                            {
                                property: 'og:description',
                                content: "Quien's is your one-stop fresh fish and meat delivery shop at Delhi.  .You will get the Fresh Fish, Exotic Fish,Seafood, Meat,Ready to Eat, Ready to Fry, Marinated Fish & meat as well as grocery delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Fish, Seafood, Chicken, mutton & Marinated items. All our products are 100% Halal and Completely hygienic, natural and healthy. Once you've experienced Quien's, you'll forget the older ways of buying Fish and Meat."
                            },
                            {
                                property: 'og:type',
                                content: "website"
                            },
                            {
                                property: 'og:url',
                                content: "https://www.alatrading.in"
                            },
                            {
                                property: 'og:title',
                                content: "Quien's:Fresh Fish, Chicken, Mutton Online Home Delivery in Delhi.  "
                            }
                        ]);
                        this.router.events.subscribe(function(res) {
                            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(_this.platformId)) {
                                    _this.window.scrollTo(0, 0);
                                }
                            }
                        });
                        // Allows for ngOnInit to be called on routing to the same routing Component since we will never reuse a route
                        this.router.routeReuseStrategy.shouldReuseRoute = function() {
                            return false;
                        };
                        this.cart.getSettingData().then(function(resJson) {
                            var result = resJson;
                            if (result.success == "true") {
                                _this.settingObj = result.setting;
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    AppComponent.ctorParameters = function() {
                        return [{
                                type: Object,
                                decorators: [{
                                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                                    args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"], ]
                                }]
                            },
                            {
                                type: Window,
                                decorators: [{
                                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                                    args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["WINDOW"], ]
                                }]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
                            },
                            {
                                type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
                            },
                            {
                                type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
                            },
                            {
                                type: _services_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"]
                            }
                        ];
                    };
                    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                            selector: 'app-root',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["WINDOW"])),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Window,
                            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
                            _services_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"]
                        ])
                    ], AppComponent);
                    return AppComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/app.module.ts":
            /*!*******************************!*\
              !*** ./src/app/app.module.ts ***!
              \*******************************/
            /*! exports provided: AppModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "AppModule", function() {
                    return AppModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */ "./src/app/app-routing.module.ts");
                /* harmony import */
                var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
                /* harmony import */
                var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
                /* harmony import */
                var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./_helpers */ "./src/app/_helpers/index.ts");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__);
                /* harmony import */
                var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./core/core.module */ "./src/app/core/core.module.ts");
                /* harmony import */
                var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
                /* harmony import */
                var ngx_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ngx-seo */ "./node_modules/ngx-seo/fesm5/ngx-seo.js");
                /* harmony import */
                var angular_gtag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! angular-gtag */ "./node_modules/angular-gtag/esm5/angular-gtag.js");

















                var AppModule = /** @class */ (function() {
                    function AppModule() {}
                    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                            declarations: [
                                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                            ],
                            imports: [
                                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
                                    appId: 'ALA'
                                }),
                                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__["NgtUniversalModule"],
                                _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
                                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__["Ng4LoadingSpinnerModule"].forRoot(),
                                ngx_seo__WEBPACK_IMPORTED_MODULE_15__["JsonLdModule"],
                                angular_gtag__WEBPACK_IMPORTED_MODULE_16__["GtagModule"].forRoot({
                                    trackingId: 'AW-807710496',
                                    trackPageviews: true
                                })
                            ],
                            providers: [{
                                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"],
                                    multi: true,
                                },
                                {
                                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"],
                                    multi: true
                                },
                                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]
                            ],
                            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                        })
                    ], AppModule);
                    return AppModule;
                }());



                /***/
            }),

        /***/
        "./src/app/core/change-password/change-password.component.scss":
            /*!*********************************************************************!*\
              !*** ./src/app/core/change-password/change-password.component.scss ***!
              \*********************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".loginImg {\n  width: 100%;\n  border-radius: 100%;\n  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);\n}\n\n.gap100 {\n  height: 20px;\n}\n\n@media screen and (max-width: 768px) {\n  .loginImg {\n    display: none !important;\n  }\n}\n\n.loginHolder .loginTabHolder a {\n  height: 70px;\n  line-height: 70px;\n  font-weight: 500;\n  color: #CCC;\n  font-size: 16px;\n  position: relative;\n  transition: all 0.1s;\n  display: inline-block;\n  margin-right: 50px;\n}\n\n.loginHolder .loginTabHolder a:hover {\n  text-decoration: none;\n}\n\n.loginHolder .loginTabHolder a:after {\n  position: absolute;\n  left: 0;\n  bottom: 2px;\n  right: 0;\n  background: #CCC;\n  border-radius: 100px;\n  transition: all 0.1s;\n  content: \"\";\n}\n\n.loginHolder .loginTabHolder a.active {\n  color: #000;\n  font-size: 20px;\n}\n\n.loginHolder .loginTabHolder a.active:after {\n  background: #000;\n  height: 4px;\n}\n\n.loginHolder .loginTabContent {\n  padding-top: 25px;\n}\n\n.loginHolder .loginTabContent .orDivider {\n  text-align: center;\n  font-style: italic;\n  color: #AAA;\n  margin: 15px 0;\n}\n\n.loginHolder .loginTabContent .btn {\n  font-size: 18px;\n  padding: 17px 0;\n  font-weight: 600;\n}\n\n.loginHolder .loginTabContent .socialLogin {\n  margin: 0 -5px;\n}\n\n.loginHolder .loginTabContent .socialLogin .col-sm-6 {\n  padding: 0 5px;\n}\n\n.loginHolder .loginTabContent .socialLogin .col-sm-6 .btn {\n  font-size: 14px;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.loginHolder .loginTabContent .socialLogin .col-sm-6 .btn img {\n  position: absolute;\n  left: 0;\n  height: 18px;\n  left: 20px;\n  top: 17px;\n}\n\n@media screen and (max-width: 768px) {\n  .loginHolder .loginTabHolder a {\n    height: 40px !important;\n    line-height: 40px;\n    margin-right: 25px;\n  }\n  .loginHolder .loginTabContent .btn {\n    font-size: 14px;\n    padding: 10px 0;\n    font-weight: 600;\n  }\n  .loginHolder .loginTabContent .socialLogin .col-sm-6 .btn {\n    padding: 5px 0 !important;\n    font-size: 14px;\n    padding: 10px 0;\n    margin-bottom: 10px;\n    position: relative;\n  }\n  .loginHolder .loginTabContent .socialLogin .col-sm-6 .btn img {\n    top: 7px;\n    left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jaGFuZ2UtcGFzc3dvcmQvRTpcXG9mZmljZV9wcm9qZWN0XFxmZmItbmctbmV3XFxmZmItbmctbmV3L3NyY1xcYXBwXFxjb3JlXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUFXLG1CQUFBO0VBQW9CLDBDQUFBO0FDR2pDOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0U7SUFDRSx3QkFBQTtFQ0tGO0FBQ0Y7O0FERUk7RUFDRSxZQUFBO0VBQWEsaUJBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsV0FBQTtFQUFXLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsb0JBQUE7RUFBbUIscUJBQUE7RUFBcUIsa0JBQUE7QUNRNUk7O0FEUE07RUFDRSxxQkFBQTtBQ1NSOztBRFBNO0VBQ0Usa0JBQUE7RUFBbUIsT0FBQTtFQUFRLFdBQUE7RUFBVyxRQUFBO0VBQVMsZ0JBQUE7RUFBZ0Isb0JBQUE7RUFBcUIsb0JBQUE7RUFBbUIsV0FBQTtBQ2dCL0c7O0FEYkk7RUFDRSxXQUFBO0VBQVcsZUFBQTtBQ2dCakI7O0FEZk07RUFDRSxnQkFBQTtFQUFnQixXQUFBO0FDa0J4Qjs7QURkRTtFQUNFLGlCQUFBO0FDZ0JKOztBRGZJO0VBQ0Usa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsV0FBQTtFQUFXLGNBQUE7QUNvQnZEOztBRGxCSTtFQUNFLGVBQUE7RUFBZ0IsZUFBQTtFQUFnQixnQkFBQTtBQ3NCdEM7O0FEcEJJO0VBQ0UsY0FBQTtBQ3NCTjs7QURyQk07RUFDRSxjQUFBO0FDdUJSOztBRHRCUTtFQUNFLGVBQUE7RUFBZ0IsZUFBQTtFQUFlLG1CQUFBO0VBQW9CLGtCQUFBO0FDMkI3RDs7QUQxQlU7RUFDRSxrQkFBQTtFQUFtQixPQUFBO0VBQVEsWUFBQTtFQUFhLFVBQUE7RUFBVyxTQUFBO0FDZ0MvRDs7QUR4QkE7RUFHTTtJQUNFLHVCQUFBO0lBQXdCLGlCQUFBO0lBQWtCLGtCQUFBO0VDMkJoRDtFRHZCSTtJQUNFLGVBQUE7SUFBZ0IsZUFBQTtJQUFnQixnQkFBQTtFQzJCdEM7RUR2QlE7SUFDRSx5QkFBQTtJQUlBLGVBQUE7SUFBZ0IsZUFBQTtJQUFlLG1CQUFBO0lBQW9CLGtCQUFBO0VDeUI3RDtFRDVCVTtJQUNFLALAQUE7SUFBUSxVQUFBO0VDK0JwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luSW1nIHtcbiAgd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOiAxMDAlO2JveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwwLDAsLjIpO1xufVxuLmdhcDEwMCB7XG4gIGhlaWdodDoyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luSW1nIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG4kdGhlbWVCbHVlOiAjMmI5OGVkO1xuLmxvZ2luSG9sZGVyIHtcbiAgLmxvZ2luVGFiSG9sZGVyIHtcbiAgICBhIHtcbiAgICAgIGhlaWdodDogNzBweDtsaW5lLWhlaWdodDogNzBweDtmb250LXdlaWdodDogNTAwO2NvbG9yOiNDQ0M7Zm9udC1zaXplOiAxNnB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt0cmFuc2l0aW9uOmFsbCAuMXM7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjUwcHg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO2JvdHRvbToycHg7cmlnaHQ6IDA7YmFja2dyb3VuZDojQ0NDO2JvcmRlci1yYWRpdXM6IDEwMHB4O3RyYW5zaXRpb246YWxsIC4xcztjb250ZW50OlwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGEuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiMwMDA7Zm9udC1zaXplOjIwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDojMDAwO2hlaWdodDogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubG9naW5UYWJDb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xuICAgIC5vckRpdmlkZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc3R5bGU6IGl0YWxpYztjb2xvcjojQUFBO21hcmdpbjoxNXB4IDA7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O3BhZGRpbmc6IDE3cHggMDtmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuc29jaWFsTG9naW4ge1xuICAgICAgbWFyZ2luOiAwIC01cHg7XG4gICAgICAuY29sLXNtLTYge1xuICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7cGFkZGluZzoxNXB4IDA7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO2hlaWdodDogMThweDtsZWZ0OiAyMHB4O3RvcDoxN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW5Ib2xkZXIge1xuICAgIC5sb2dpblRhYkhvbGRlciB7XG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6IDQwcHg7bWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW5UYWJDb250ZW50IHtcbiAgICAgIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7cGFkZGluZzogMTBweCAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAuc29jaWFsTG9naW4ge1xuICAgICAgICAuY29sLXNtLTYge1xuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgcGFkZGluZzo1cHggMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgdG9wOjdweDtsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O3BhZGRpbmc6MTBweCAwO21hcmdpbi1ib3R0b206IDEwcHg7cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmxvZ2luSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdhcDEwMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luSW1nIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYSB7XG4gIGhlaWdodDogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQ0NDO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkhvbGRlciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkhvbGRlciBhOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDJweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgY29udGVudDogXCJcIjtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYS5hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkhvbGRlciBhLmFjdGl2ZTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogNHB4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5vckRpdmlkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNBQUE7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTdweCAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLnNvY2lhbExvZ2luIHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG4ubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAuc29jaWFsTG9naW4gLmNvbC1zbS02IHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAuc29jaWFsTG9naW4gLmNvbC1zbS02IC5idG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLnNvY2lhbExvZ2luIC5jb2wtc20tNiAuYnRuIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDE3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYSB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG4gIC5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAuc29jaWFsTG9naW4gLmNvbC1zbS02IC5idG4ge1xuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAuc29jaWFsTG9naW4gLmNvbC1zbS02IC5idG4gaW1nIHtcbiAgICB0b3A6IDdweDtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG59Il19 */");

                /***/
            }),

        /***/
        "./src/app/core/change-password/change-password.component.ts":
            /*!*******************************************************************!*\
              !*** ./src/app/core/change-password/change-password.component.ts ***!
              \*******************************************************************/
            /*! exports provided: ChangePasswordComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() {
                    return ChangePasswordComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/login-registration.service */ "./src/app/services/login-registration.service.ts");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);







                var ChangePasswordComponent = /** @class */ (function() {
                    function ChangePasswordComponent(loginRegisterService, activeRouter, spinnerService) {
                        this.loginRegisterService = loginRegisterService;
                        this.activeRouter = activeRouter;
                        this.spinnerService = spinnerService;
                        this.change_password = {
                            "old_password": "",
                            "new_password": "",
                            "re_new_password": ""
                        };
                    }
                    ChangePasswordComponent.prototype.ngOnInit = function() {};
                    ChangePasswordComponent.prototype.submitChangePasswordForm = function() {
                        var _this = this;
                        if (this.change_password.old_password == '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Please enter your old password'
                            });
                            return false;
                        }
                        if (this.change_password.new_password == '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Please enter your new password'
                            });
                            return false;
                        }
                        if (this.change_password.re_new_password == '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Please enter confirm password same as new password'
                            });
                            return false;
                        }
                        if (this.change_password.new_password.length < 8 || this.change_password.new_password != this.change_password.re_new_password) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Please enter password & confirm password as a same min 8 character long'
                            });
                            return false;
                        }
                        this.spinnerService.show();
                        this.loginRegisterService.changePassword(this.change_password)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    _this.loginRegisterService.setLogin();
                                    _this.spinnerService.hide();
                                    var timerInterval_1;
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                        title: 'Your Password Change Successfully',
                                        type: 'success',
                                        showCancelButton: false,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Ok',
                                        timer: 2000,
                                        onBeforeOpen: function() {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
                                        },
                                        onClose: function() {
                                            clearInterval(timerInterval_1);
                                        }
                                    }).then(function(result) {
                                        if (result.value) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
                                        }
                                    });
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: response.msg
                                    });
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    ChangePasswordComponent.ctorParameters = function() {
                        return [{
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
                            },
                            {
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]
                            }
                        ];
                    };
                    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-change-password',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/change-password/change-password.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./change-password.component.scss */ "./src/app/core/change-password/change-password.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
                    ], ChangePasswordComponent);
                    return ChangePasswordComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/core/core.module.ts":
            /*!*************************************!*\
              !*** ./src/app/core/core.module.ts ***!
              \*************************************/
            /*! exports provided: CoreModule */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "CoreModule", function() {
                    return CoreModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
                /* harmony import */
                var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./header/header.component */ "./src/app/core/header/header.component.ts");
                /* harmony import */
                var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./login/login.component */ "./src/app/core/login/login.component.ts");
                /* harmony import */
                var _login_inner_login_inner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./login-inner/login-inner.component */ "./src/app/core/login-inner/login-inner.component.ts");
                /* harmony import */
                var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
                /* harmony import */
                var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./change-password/change-password.component */ "./src/app/core/change-password/change-password.component.ts");
                /* harmony import */
                var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
                /* harmony import */
                var mydatepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! mydatepicker */ "./node_modules/mydatepicker/index.js");
                /* harmony import */
                var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");













                var CoreModule = /** @class */ (function() {
                    function CoreModule() {}
                    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _login_inner_login_inner_component__WEBPACK_IMPORTED_MODULE_7__["LoginInnerComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"]],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutocompleteLibModule"],
                                mydatepicker__WEBPACK_IMPORTED_MODULE_11__["MyDatePickerModule"],
                                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__["LazyLoadImageModule"],
                            ],
                            exports: [
                                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"]
                            ]
                        })
                    ], CoreModule);
                    return CoreModule;
                }());



                /***/
            }),

        /***/
        "./src/app/core/footer/footer.component.scss":
            /*!***************************************************!*\
              !*** ./src/app/core/footer/footer.component.scss ***!
              \***************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".footerNews {\n  position: relative;\n  margin: 55px 0 25px;\n}\n.footerNews img {\n  width: 100%;\n}\n.footerNews .footerNewsContent {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: \"center\";\n}\n.footerNews .footerNewsContent .footerNewsContentInner {\n  width: 60%;\n  text-align: left;\n  margin: 0 auto;\n}\n.footerNews .footerNewsContent .footerNewsContentInner p {\n  font-size: 28px;\n  color: #FFF;\n  font-weight: bold;\n  margin: 0;\n}\n.footerNews .footerNewsContent .footerNewsContentInner p.theHistoriaDemo {\n  font-family: \"The Historia Demo\";\n  font-weight: normal;\n  font-size: 60px;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm {\n  background: #FFF;\n  padding: 2px;\n  border-radius: 100px;\n  width: 60%;\n  padding-right: 100px;\n  position: relative;\n  min-height: 50px;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  height: 46px;\n  display: inline-block;\n  color: #FFF;\n  border: none;\n  background: #19acec;\n  border-radius: 100px;\n  font-size: 14px;\n  font-weight: 500;\n  width: 100px;\n  cursor: pointer;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button:hover {\n  opacity: 0.8;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button:focus {\n  outline: none;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm input {\n  display: inline-block;\n  width: calc(98%);\n  height: 46px;\n  border: none;\n  background: none;\n  line-height: 46px;\n  text-indent: 20px;\n  color: #444;\n}\n.footerNews .footerNewsContent .footerNewsContentInner .subscribeForm input:focus {\n  outline: none;\n}\n.footer {\n  background-color: #000;\n  padding: 80px 0;\n  margin-top: 0;\n}\n.footer .footerColHeader {\n  font-weight: 500;\n  color: #FFF;\n  font-size: 20px;\n}\n.footer .footerLinksHolder a {\n  font-weight: 400;\n  color: #FFF;\n  font-size: 15px;\n  display: block;\n  margin-bottom: 20px;\n  line-height: 18px;\n  transition: all 0.2s;\n}\n.footer .footerLinksHolder a:hover {\n  text-decoration: none;\n  letter-spacing: 0.4px;\n}\n.footer .footerContactInfoItem {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n}\n.footer .footerContactInfoItem img {\n  width: 21px;\n  position: absolute;\n  left: 0;\n  top: 1px;\n}\n.footer .footerContactInfoItem div {\n  font-size: 14px;\n  color: #FFF;\n  font-weight: 400;\n}\n.footer .footerSocial a {\n  display: inline-block;\n  margin-right: 25px;\n  vertical-align: middle;\n}\n.footer .footerSocial a img {\n  display: inline-block;\n  height: 28px;\n}\n.footer .footerDivider {\n  margin: 15px 0;\n  height: 1px;\n  background: #FFF;\n  opacity: 0.4;\n}\n.footer .footerContentItem {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #FFF;\n  margin-bottom: 10px;\n  opacity: 1;\n}\n.footer .copyrightText {\n  font-size: 14px;\n  color: #FFF;\n  text-align: center;\n  position: relative;\n  top: 25px;\n}\n.footer .paymentOptions {\n  max-width: 100%;\n}\n@media screen and (max-width: 992px) {\n  .footerNews {\n    position: relative;\n    margin: 25px 0;\n  }\n  .footerNews img {\n    width: 100%;\n  }\n  .footerNews .footerNewsContent {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: \"center\";\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner {\n    width: 60%;\n    text-align: left;\n    margin: 0 auto;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner p {\n    font-size: 21px;\n    color: #FFF;\n    font-weight: bold;\n    margin: 0 0 -10px;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner p.theHistoriaDemo {\n    font-family: \"The Historia Demo\";\n    font-weight: normal;\n    font-size: 44px;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm {\n    background: #FFF;\n    padding: 2px;\n    border-radius: 100px;\n    width: 60%;\n    padding-right: 100px;\n    position: relative;\n    min-height: 50px;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button {\n    position: absolute;\n    right: 2px;\n    top: 2px;\n    height: 46px;\n    display: inline-block;\n    color: #FFF;\n    border: none;\n    background: #19acec;\n    border-radius: 100px;\n    font-size: 14px;\n    font-weight: 500;\n    width: 100px;\n    cursor: pointer;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button:hover {\n    opacity: 0.8;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm button:focus {\n    outline: none;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm input {\n    display: inline-block;\n    width: calc(98%);\n    height: 46px;\n    border: none;\n    background: none;\n    line-height: 46px;\n    text-indent: 20px;\n    color: #444;\n  }\n  .footerNews .footerNewsContent .footerNewsContentInner .subscribeForm input:focus {\n    outline: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .footerNews img {\n    display: none;\n  }\n  .footerNews .footerNewsContent {\n    position: relative;\n  }\n  .footerNews .footerNewsContentInner {\n    margin: 0;\n    width: 90% !important;\n  }\n  .footerNews .footerNewsContentInner p {\n    color: #000 !important;\n  }\n  .footerNews .footerNewsContentInner .subscribeForm {\n    width: 100% !important;\n    background: #f7f7f7 !important;\n  }\n}\n.ratingsContWrapperOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n.ratingsContWrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n.ratingsContWrapper img.rvwBanImg {\n  width: 150px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.ratingsContWrapper .revLine {\n  margin-bottom: 10px;\n}\n.ratingsContWrapper .revComment {\n  width: 100%;\n  height: 100px;\n  resize: none;\n  border-radius: 10px;\n  background-color: #f3f3f3;\n  border: none;\n  margin-top: 15px;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.ratingsContWrapper .revComment:focus {\n  outline: none;\n}\n.ratingsContWrapper .revLine h4 {\n  font-size: 20px;\n  margin: 0;\n  color: #138ae6;\n}\n.ratingsContWrapper .revStarWrap svg {\n  width: 20px;\n  height: 20px;\n  fill: #c5c5c5;\n  cursor: pointer;\n}\n.ratingsContWrapper .revStarWrap svg:hover {\n  fill: #f90;\n}\n.ratingsContWrapper .revStarWrap span {\n  display: inline-block;\n  margin-right: 6px;\n}\n.ratingsContWrapper .revStarWrap span.active svg {\n  fill: #f90;\n}\n.ratingsContWrapper .revStarWrap span.clickedActive svg {\n  fill: #f90;\n}\n.ratingsContWrapper .reviewContBody {\n  padding: 20px;\n}\n.ratingsContWrapper .reviewContInner {\n  width: 500px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 98vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.ratingsContWrapper .reviewContInner .closeTimeSlot {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n}\n.ratingsContWrapper .reviewContInner .closeTimeSlot img {\n  height: 15px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: 500;\n  position: relative;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 43%;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .timeSlotImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding-top: 10px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a.active {\n  color: #FFF;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .selectLocationInput {\n  position: relative;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n.ratingsContWrapper .reviewContInner .reviewContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.ratingsContWrapper .reviewContInner .slotCol {\n  display: inline-block;\n  vertical-align: top;\n  width: 33.33% !important;\n}\n@media screen and (max-width: 576px) {\n  .ratingsContWrapper .reviewContInner .slotCol {\n    width: 50% !important;\n  }\n}\n.ratingsContWrapper .reviewContInner .slotCol .slotItem {\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.7;\n  transform: scale(1);\n  transition: all 0.2s;\n  border: 1px #DDD solid;\n  padding: 10px 0;\n  background: #EEE;\n  min-height: 125px;\n  margin: 0 5px 10px;\n}\n.ratingsContWrapper .reviewContInner .slotCol .slotItem:hover {\n  background: #FFF;\n}\n.ratingsContWrapper .reviewContInner .slotCol .slotItem img {\n  height: 40px;\n  -webkit-filter: grayscale(100%);\n}\n.ratingsContWrapper .reviewContInner .slotCol .slotItem div {\n  text-align: center;\n  font-weight: 500;\n}\n.ratingsContWrapper .reviewContInner .slotCol.active .slotItem {\n  background: #FFF;\n  transform: scale(1);\n  border-color: #2b98ed;\n  opacity: 1;\n  color: #2b98ed;\n}\n.ratingsContWrapper .reviewContInner .slotCol.active .slotItem img {\n  -webkit-filter: grayscale(0%);\n}\n.rvwGlobalContBody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rvwGlobalContBody .reviewGStarCount {\n  width: 40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rvwGlobalContBody .reviewGStarCount span {\n  font-size: 40px;\n  font-weight: 600;\n  margin-right: 5px;\n}\n.rvwGlobalContBody .reviewGStarCount img {\n  height: 30px;\n}\n.rvwGlobalContBody .reviewTotCount {\n  width: 60%;\n  padding-left: 30px;\n  border-left: 2px solid #dedede;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .rtiHead {\n  font-size: 20px;\n  margin-right: 0px;\n  line-height: 24px;\n  color: #424242;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem img {\n  height: 13px;\n  margin-right: 4px;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .bar {\n  width: 72%;\n  height: 7px;\n  border-radius: 100px;\n  background-color: #eaeaea;\n  position: relative;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .bar .barFill {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 100px;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .bar .barFill.barFillGreen {\n  background-color: #009747;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .bar .barFill.barFillYellow {\n  background-color: #ffae00;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .bar .barFill.barFillRed {\n  background-color: #ff0000;\n}\n.rvwGlobalContBody .reviewTotCount .revTotCountItem .rtiHeadCount {\n  font-size: 15px;\n  color: #a7a7a7;\n  width: 10%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvRTpcXG9mZmljZV9wcm9qZWN0XFxmZmItbmctbmV3XFxmZmItbmctbmV3L3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFBbUIsbUJBQUE7QUNFdkI7QURESTtFQUFLLFdBQUE7QUNJVDtBREhJO0VBQ0ksa0JBQUE7RUFBbUIsT0FBQTtFQUFRLE1BQUE7RUFBTSxRQUFBO0VBQVMsU0FBQTtFQUFTLGFBQUE7RUFBYSxtQkFBQTtFQUFvQix5QkFBQTtBQ1k1RjtBRFhRO0VBQ0ksVUFBQTtFQUFVLGdCQUFBO0VBQWlCLGNBQUE7QUNldkM7QURkWTtFQUFHLGVBQUE7RUFBZ0IsV0FBQTtFQUFXLGlCQUFBO0VBQWtCLFNBQUE7QUNvQjVEO0FEbkJZO0VBQW1CLGdDQUFBO0VBQWlDLG1CQUFBO0VBQW1CLGVBQUE7QUN3Qm5GO0FEdkJZO0VBQ0ksZ0JBQUE7RUFBaUIsWUFBQTtFQUFZLG9CQUFBO0VBQXFCLFVBQUE7RUFBVSxvQkFBQTtFQUFvQixrQkFBQTtFQUFrQixnQkFBQTtBQytCbEg7QUQ5QmdCO0VBQ0ksa0JBQUE7RUFBbUIsVUFBQTtFQUFXLALAQUE7RUFBUyxZQUFBO0VBQWEscUJBQUE7RUFBc0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixvQkFBQTtFQUFxQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLFlBQUE7RUFBYSxlQUFBO0FDNEM5TTtBRDNDb0I7RUFBUyxZQUFBO0FDOEM3QjtBRDdDb0I7RUFBUyxhQUFBO0FDZ0Q3QjtBRDlDZ0I7RUFDSSxxQkFBQTtFQUFzQixnQkFBQTtFQUFpQixZQUFBO0VBQWEsWUFBQTtFQUFhLGdCQUFBO0VBQWlCLGlCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLFdBQUE7QUN1RDFJO0FE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QSxVQUFBO0VBQ0EsaUJBQUE7QUMrTWhCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlck5ld3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW46NTVweCAwIDI1cHg7XG4gICAgaW1nIHt3aWR0aDoxMDAlfVxuICAgIC5mb290ZXJOZXdzQ29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO3RvcDowO3JpZ2h0OiAwO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDpcImNlbnRlclwiO1xuICAgICAgICAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciB7XG4gICAgICAgICAgICB3aWR0aDo2MCU7dGV4dC1hbGlnbjogbGVmdDttYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgcCB7Zm9udC1zaXplOiAyOHB4O2NvbG9yOiNGRkY7Zm9udC13ZWlnaHQ6IGJvbGQ7bWFyZ2luOjA7fVxuICAgICAgICAgICAgcC50aGVIaXN0b3JpYURlbW8ge2ZvbnQtZmFtaWx5OiAnVGhlIEhpc3RvcmlhIERlbW8nO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6IDYwcHh9XG4gICAgICAgICAgICAuc3Vic2NyaWJlRm9ybSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtwYWRkaW5nOjJweDtib3JkZXItcmFkaXVzOiAxMDBweDt3aWR0aDo2MCU7cGFkZGluZy1yaWdodDoxMDBweDtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAycHg7dG9wOiAycHg7aGVpZ2h0OiA0NnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztjb2xvcjogI0ZGRjtib3JkZXI6IG5vbmU7YmFja2dyb3VuZDogIzE5YWNlYztib3JkZXItcmFkaXVzOiAxMDBweDtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDUwMDt3aWR0aDogMTAwcHg7Y3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtvcGFjaXR5OiAuODt9XG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge291dGxpbmU6IG5vbmU7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogY2FsYyg5OCUpO2hlaWdodDogNDZweDtib3JkZXI6IG5vbmU7YmFja2dyb3VuZDogbm9uZTtsaW5lLWhlaWdodDogNDZweDt0ZXh0LWluZGVudDogMjBweDtjb2xvcjojNDQ0O1xuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtwYWRkaW5nOjgwcHggMDttYXJnaW4tdG9wOiAwO1xuICAgIC5mb290ZXJDb2xIZWFkZXIge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO2NvbG9yOiAjRkZGO2ZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmZvb3RlckxpbmtzSG9sZGVyIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO2NvbG9yOiNGRkY7Zm9udC1zaXplOjE1cHg7ZGlzcGxheTpibG9jazttYXJnaW4tYm90dG9tOiAyMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O3RyYW5zaXRpb246YWxsIC4ycztcbiAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTtsZXR0ZXItc3BhY2luZzogLjRweDt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3RlckNvbnRhY3RJbmZvSXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6IDMwcHg7bWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIxcHg7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDA7dG9wOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtjb2xvcjogI0ZGRjtmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXJTb2NpYWwge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6MjVweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgaW1nIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7aGVpZ2h0OjI4cHg7fVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXJEaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luOjE1cHggMDtoZWlnaHQ6MXB4O2JhY2tncm91bmQ6I0ZGRjtvcGFjaXR5OiAuNDtcbiAgICB9XG4gICAgLmZvb3RlckNvbnRlbnRJdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAvL3Age1xuICAgICAgICAvLyAgICBjb2xvcjojRkZGO2ZvbnQtc2l6ZToxNHB4O29wYWNpdHk6IC44O1xuICAgICAgICAvL31cbiAgICAgICAgLy9wLmZvb3RlckNvbnRlbnRIZWFkZXIge1xuICAgICAgICAvLyAgICBmb250LXNpemU6IDIwcHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6I0ZGRjttYXJnaW4tYm90dG9tOjEwcHg7b3BhY2l0eTogMTtcbiAgICAgICAgLy99XG4gICAgfVxuICAgIC5jb3B5cmlnaHRUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7Y29sb3I6I0ZGRjt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOjI1cHg7XG4gICAgfVxuICAgIC5wYXltZW50T3B0aW9ucyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAuZm9vdGVyTmV3cyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW46MjVweCAwO1xuICAgICAgICBpbWcge3dpZHRoOjEwMCV9XG4gICAgICAgIC5mb290ZXJOZXdzQ29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6MDtyaWdodDogMDtib3R0b206MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIC5mb290ZXJOZXdzQ29udGVudElubmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDo2MCU7dGV4dC1hbGlnbjogbGVmdDttYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIHAge2ZvbnQtc2l6ZTogMjFweDtjb2xvcjogI0ZGRjtmb250LXdlaWdodDogYm9sZDttYXJnaW46IDAgMCAtMTBweDt9XG4gICAgICAgICAgICAgICAgcC50aGVIaXN0b3JpYURlbW8ge2ZvbnQtZmFtaWx5OiAnVGhlIEhpc3RvcmlhIERlbW8nO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6IDQ0cHh9XG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZUZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO3BhZGRpbmc6MnB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O3dpZHRoOjYwJTtwYWRkaW5nLXJpZ2h0OjEwMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMnB4O3RvcDogMnB4O2hlaWdodDogNDZweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Y29sb3I6ICNGRkY7Ym9yZGVyOiBub25lO2JhY2tncm91bmQ6ICMxOWFjZWM7Ym9yZGVyLXJhZGl1czogMTAwcHg7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA1MDA7d2lkdGg6IDEwMHB4O2N1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge29wYWNpdHk6IC44O31cbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge291dGxpbmU6IG5vbmU7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogY2FsYyg5OCUpO2hlaWdodDogNDZweDtib3JkZXI6IG5vbmU7YmFja2dyb3VuZDogbm9uZTtsaW5lLWhlaWdodDogNDZweDt0ZXh0LWluZGVudDogMjBweDtjb2xvcjojNDQ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5mb290ZXJOZXdzIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlck5ld3NDb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7d2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YnNjcmliZUZvcm0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLnJhdGluZ3NDb250V3JhcHBlck92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTogMDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTt6LWluZGV4OiAxMDAxO2Rpc3BsYXk6bm9uZTtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO3JpZ2h0OjA7dG9wOjA7dGV4dC1hbGlnbjogY2VudGVyO3otaW5kZXg6IDEwMDI7ZGlzcGxheTogbm9uZTtcbiAgICBpbWcucnZ3QmFuSW1nIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5yZXZMaW5lIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLnJldkNvbW1lbnQgeyBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAmOmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmV2TGluZSBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzEzOGFlNjtcbiAgICB9XG4gICAgLnJldlN0YXJXcmFwIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZpbGw6ICNjNWM1YzU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnJldlN0YXJXcmFwIHN2Zzpob3ZlciB7XG4gICAgICAgIGZpbGw6ICNmOTA7XG4gICAgfVxuICAgIC5yZXZTdGFyV3JhcCBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG4gICAgLnJldlN0YXJXcmFwIHNwYW4uYWN0aXZlIHN2ZyB7XG4gICAgICAgIGZpbGw6ICNmOTA7XG4gICAgfVxuICAgIC5yZXZTdGFyV3JhcCBzcGFuLmNsaWNrZWRBY3RpdmUgc3ZnIHtcbiAgICAgICAgZmlsbDogI2Y5MDtcbiAgICB9XG4gICAgLnJldmlld0NvbnRCb2R5IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLnJldmlld0NvbnRJbm5lciB7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA5OHZoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5jbG9zZVRpbWVTbG90IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMjBweDt0b3A6IDE1cHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDoxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yZXZpZXdDb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0ZXh0LWFsaWduOmxlZnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC50aW1lU2xvdEhlYWRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQ0NDtmb250LXNpemU6MThweDtwYWRkaW5nOjEwcHggMjBweDtmb250LXdlaWdodDogNTAwO3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzEzOGFlNjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZVNsb3RQb3N0YWxJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aW1lU2xvdEltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDExcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDtjb2xvcjogIzU1NTtib3JkZXItcmFkaXVzOiAxMDBweDtmb250LXNpemU6IDE0cHg7bWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNGRkY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MjBweDtwYWRkaW5nLXJpZ2h0OjIyMHB4O1xuICAgICAgICAgICAgICAgIGltZyB7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTVweDt0b3A6IDM4cHg7bGVmdDogMzlweDtvcGFjaXR5OiAuNTt6LWluZGV4OiAxMDAwMDt9XG4gICAgICAgICAgICAgICAgLmxvY2F0aW9uSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDt0ZXh0LWluZGVudDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiNBQUE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0TG9jYXRpb25JbnB1dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ2V0R1BTIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7YmFja2dyb3VuZDogI0ZBRkFGQTtoZWlnaHQ6IDUwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAxODBweDtsaW5lLWhlaWdodDogNTBweDt0b3A6IDIwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjNTU1O2ZvbnQtd2VpZ2h0OiA1MDA7Ym9yZGVyOjFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTtib3JkZXItY29sb3I6I0JCQn1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTRweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6LTFweDttYXJnaW4tcmlnaHQ6NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG90Q29sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MzMuMzMlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbG90SXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAuNzt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNpdGlvbjphbGwgLjJzO2JvcmRlcjoxcHggI0RERCBzb2xpZDtwYWRkaW5nOjEwcHggMDtiYWNrZ3JvdW5kOiNFRUU7bWluLWhlaWdodDoxMjVweDttYXJnaW46MCA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRkZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7LXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zbG90Q29sLmFjdGl2ZSB7XG4gICAgICAgICAgICAuc2xvdEl0ZW0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0cmFuc2Zvcm06IHNjYWxlKDEpO2JvcmRlci1jb2xvcjojMmI5OGVkO29wYWNpdHk6IDE7Y29sb3I6IzJiOThlZDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ydndHbG9iYWxDb250Qm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5yZXZpZXdHU3RhckNvdW50IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJldmlld1RvdENvdW50IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgIC5yZXZUb3RDb3VudEl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAucnRpSGVhZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC5iYXJGaWxsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICYuYmFyRmlsbEdyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk3NDc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5iYXJGaWxsWWVsbG93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFlMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5iYXJGaWxsUmVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucnRpSGVhZENvdW50IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhN2E3YTc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZm9vdGVyTmV3cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1NXB4IDAgMjVweDtcbn1cbi5mb290ZXJOZXdzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogXCJjZW50ZXJcIjtcbn1cbi5mb290ZXJOZXdzIC5mb290ZXJOZXdzQ29udGVudCAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciB7XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIHAge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIHAudGhlSGlzdG9yaWFEZW1vIHtcbiAgZm9udC1mYW1pbHk6IFwiVGhlIEhpc3RvcmlhIERlbW9cIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5mb290ZXJOZXdzIC5mb290ZXJOZXdzQ29udGVudCAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciAuc3Vic2NyaWJlRm9ybSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycHg7XG4gIHRvcDogMnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzE5YWNlYztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgLnN1YnNjcmliZUZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgLnN1YnNjcmliZUZvcm0gaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDk4JSk7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5mb290ZXIgLmZvb3RlckNvbEhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9vdGVyIC5mb290ZXJMaW5rc0hvbGRlciBhIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5mb290ZXIgLmZvb3RlckxpbmtzSG9sZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbi5mb290ZXIgLmZvb3RlckNvbnRhY3RJbmZvSXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvb3RlciAuZm9vdGVyQ29udGFjdEluZm9JdGVtIGltZyB7XG4gIHdpZHRoOiAyMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMXB4O1xufVxuLmZvb3RlciAuZm9vdGVyQ29udGFjdEluZm9JdGVtIGRpdiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9vdGVyIC5mb290ZXJTb2NpYWwgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmZvb3RlciAuZm9vdGVyU29jaWFsIGEgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uZm9vdGVyIC5mb290ZXJEaXZpZGVyIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uZm9vdGVyIC5mb290ZXJDb250ZW50SXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4uZm9vdGVyIC5jb3B5cmlnaHRUZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjVweDtcbn1cbi5mb290ZXIgLnBheW1lbnRPcHRpb25zIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyTmV3cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG4gIC5mb290ZXJOZXdzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IFwiY2VudGVyXCI7XG4gIH1cbiAgLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMCAtMTBweDtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgcC50aGVIaXN0b3JpYURlbW8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRoZSBIaXN0b3JpYSBEZW1vXCI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gIH1cbiAgLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5mb290ZXJOZXdzIC5mb290ZXJOZXdzQ29udGVudCAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciAuc3Vic2NyaWJlRm9ybSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogMnB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMxOWFjZWM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgLnN1YnNjcmliZUZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgLmZvb3Rlck5ld3MgLmZvb3Rlck5ld3NDb250ZW50IC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgLnN1YnNjcmliZUZvcm0gaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogY2FsYyg5OCUpO1xuICAgIGhlaWdodDogNDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICB0ZXh0LWluZGVudDogMjBweDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQgLmZvb3Rlck5ld3NDb250ZW50SW5uZXIgLnN1YnNjcmliZUZvcm0gaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXJOZXdzIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZm9vdGVyTmV3cyAuZm9vdGVyTmV3c0NvbnRlbnRJbm5lciBwIHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb290ZXJOZXdzIC5mb290ZXJOZXdzQ29udGVudElubmVyIC5zdWJzY3JpYmVGb3JtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudDtcbiAgfVxufVxuLnJhdGluZ3NDb250V3JhcHBlck92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDAxO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmF0aW5nc0NvbnRXcmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIGltZy5ydndCYW5JbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldkxpbmUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2Q29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldkNvbW1lbnQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2TGluZSBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzEzOGFlNjtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldlN0YXJXcmFwIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6ICNjNWM1YzU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldlN0YXJXcmFwIHN2Zzpob3ZlciB7XG4gIGZpbGw6ICNmOTA7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZTdGFyV3JhcCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldlN0YXJXcmFwIHNwYW4uYWN0aXZlIHN2ZyB7XG4gIGZpbGw6ICNmOTA7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZTdGFyV3JhcCBzcGFuLmNsaWNrZWRBY3RpdmUgc3ZnIHtcbiAgZmlsbDogI2Y5MDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRCb2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLmNsb3NlVGltZVNsb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE1cHg7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLmNsb3NlVGltZVNsb3QgaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90SGVhZGVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90SGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQzJTtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAudGltZVNsb3RQb3N0YWxJbnB1dEhvbGRlciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMxMzhhZTY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgLnRpbWVTbG90UG9zdGFsSW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAudGltZVNsb3RJbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHggMTFweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNGRkY7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIyMHB4O1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM4cHg7XG4gIGxlZnQ6IDM5cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgei1pbmRleDogMTAwMDA7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIC5sb2NhdGlvbklucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjQUFBO1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5zZWxlY3RMb2NhdGlvbklucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAuZ2V0R1BTOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItY29sb3I6ICNCQkI7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLmdldEdQUyBpbWcge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnNsb3RDb2wge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sIC5zbG90SXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI0VFRTtcbiAgbWluLWhlaWdodDogMTI1cHg7XG4gIG1hcmdpbjogMCA1cHggMTBweDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbCAuc2xvdEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuLnJhdGluZ3NDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sIC5zbG90SXRlbSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4ucmF0aW5nc0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnNsb3RDb2wgLnNsb3RJdGVtIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbC5hY3RpdmUgLnNsb3RJdGVtIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm9yZGVyLWNvbG9yOiAjMmI5OGVkO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzJiOThlZDtcbn1cbi5yYXRpbmdzQ29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbC5hY3RpdmUgLnNsb3RJdGVtIGltZyB7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufVxuXG4ucnZ3R2xvYmFsQ29udEJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3R1N0YXJDb3VudCB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJ2d0dsb2JhbENvbnRCb2R5IC5yZXZpZXdHU3RhckNvdW50IHNwYW4ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJ2d0dsb2JhbENvbnRCb2R5IC5yZXZpZXdHU3RhckNvdW50IGltZyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RlZGVkZTtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQgLnJldlRvdENvdW50SXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQgLnJldlRvdENvdW50SXRlbSAucnRpSGVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQgLnJldlRvdENvdW50SXRlbSBpbWcge1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLnJ2d0dsb2JhbENvbnRCb2R5IC5yZXZpZXdUb3RDb3VudCAucmV2VG90Q291bnRJdGVtIC5iYXIge1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQgLnJldlRvdENvdW50SXRlbSAuYmFyIC5iYXJGaWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4ucnZ3R2xvYmFsQ29udEJvZHkgLnJldmlld1RvdENvdW50IC5yZXZUb3RDb3VudEl0ZW0gLmJhciAuYmFyRmlsbC5iYXJGaWxsR3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NzQ3O1xufVxuLnJ2d0dsb2JhbENvbnRCb2R5IC5yZXZpZXdUb3RDb3VudCAucmV2VG90Q291bnRJdGVtIC5iYXIgLmJhckZpbGwuYmFyRmlsbFllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFlMDA7XG59XG4ucnZ3R2xvYmFsQ29udEJvZHkgLnJldmlld1RvdENvdW50IC5yZXZUb3RDb3VudEl0ZW0gLmJhciAuYmFyRmlsbC5iYXJGaWxsUmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cbi5ydndHbG9iYWxDb250Qm9keSAucmV2aWV3VG90Q291bnQgLnJldlRvdENvdW50SXRlbSAucnRpSGVhZENvdW50IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2E3YTdhNztcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */");

                /***/
            }),

        /***/
        "./src/app/core/footer/footer.component.ts":
            /*!*************************************************!*\
              !*** ./src/app/core/footer/footer.component.ts ***!
              \*************************************************/
            /*! exports provided: FooterComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "FooterComponent", function() {
                    return FooterComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../services/content.service */ "./src/app/services/content.service.ts");
                /* harmony import */
                var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../services/order.service */ "./src/app/services/order.service.ts");






                var FooterComponent = /** @class */ (function() {
                    function FooterComponent(spinnerService, _content, ActivatedRoute, orderService) {
                        this.spinnerService = spinnerService;
                        this._content = _content;
                        this.ActivatedRoute = ActivatedRoute;
                        this.orderService = orderService;
                        this.slug = "footer";
                        this.settingObj = JSON.parse(localStorage.getItem("settingObj"));
                    }
                    FooterComponent.prototype.ngOnInit = function() {
                        var _this = this;
                        //noinspection TypeScriptValidateTypes
                        this._content.getContentDetails(this.slug).then(function(response) {
                            var result = response;
                            if (result.success == true) {
                                _this.content = result.content;
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                        this.spinnerService.hide();
                    };
                    FooterComponent.prototype.openSocialLink = function(settingObj, type) {
                        if (type == 1)
                            window.open(settingObj.facebook_url, "_blank");
                        if (type == 2)
                            window.open(settingObj.twitter_url, "_blank");
                        if (type == 3)
                            window.open(settingObj.instagram_url, "_blank");
                    };
                    // ratingsCaller()
                    // {
                    //   $(".ratingsContWrapperOverlay").fadeIn(200);
                    //   $("body").addClass("noScroll");
                    //   $(".ratingsContWrapper").slideDown();
                    //   $(".closeRevMod").click(function () {
                    //     $(".ratingsContWrapperOverlay").fadeOut(200);
                    //     $("body").removeClass("noScroll");
                    //     $(".ratingsContWrapper").slideUp();
                    //   });
                    //   $(".ratingsContWrapperOverlay").click(function () {
                    //     $(this).fadeOut(200);
                    //     $("body").removeClass("noScroll");
                    //     $(".ratingsContWrapper").slideUp();
                    //   })
                    // }
                    FooterComponent.prototype.ratingsCallerModal = function() {
                        $(".ratingsContWrapperOverlay").fadeIn(200);
                        $("body").addClass("noScroll");
                        $(".ratingsContWrapper").slideDown();
                        $(".closeRevMod").click(function() {
                            $(".ratingsContWrapperOverlay").fadeOut(200);
                            $("body").removeClass("noScroll");
                            $(".ratingsContWrapper").slideUp();
                        });
                        $(".ratingsContWrapperOverlay").click(function() {
                            $(this).fadeOut(200);
                            $("body").removeClass("noScroll");
                            $(".ratingsContWrapper").slideUp();
                        });
                    };
                    FooterComponent.prototype.ratingsCaller = function() {
                        var _this = this;
                        this.spinnerService.show();
                        this.orderService.getRatingData().then(function(resJson) {
                            var result = resJson;
                            if (result.success == true) {
                                _this.overallRating = result.overallRating;
                                _this.ratingData = result.outputRatingPercentage;
                                _this.spinnerService.hide();
                                _this.ratingsCallerModal();
                                console.log(result);
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    FooterComponent.ctorParameters = function() {
                        return [{
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]
                            },
                            {
                                type: _services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
                            },
                            {
                                type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
                            }
                        ];
                    };
                    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-footer',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"],
                            _services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
                            _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
                        ])
                    ], FooterComponent);
                    return FooterComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/core/header/header.component.scss":
            /*!***************************************************!*\
              !*** ./src/app/core/header/header.component.scss ***!
              \***************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = ("header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: #FFF;\n}\n\n.headerInfo {\n  background: #f5fbff;\n  font-size: 14px;\n  color: #000;\n  opacity: 0.85;\n  padding: 10px 0;\n  transition: all 0.2s;\n}\n\n.headerInfo .offDayDeclaration {\n  color: #a70000;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.headerInfo .headerInfoCallIcon {\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.headerInfo .appStoreIcons {\n  height: 16px;\n  display: inline-block;\n  vertical-align: text-bottom;\n  margin-left: 15px;\n  position: relative;\n  top: -2px;\n}\n\n.headerInfo .downloadApp {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.headerInfo .topNavBulkOrder {\n  display: inline-block;\n  background: #FFF;\n  padding: 4px 7px;\n  color: #138ae6;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  margin-right: 7px;\n  margin-top: -3px;\n  border: 1px #138ae6 solid;\n}\n\n.headerInfo .topNavBulkOrder:hover {\n  background: #138ae6;\n  text-decoration: none;\n  color: #FFF;\n}\n\n.headerNav .headerMenuSmLinksHolder {\n  display: none;\n}\n\n.headerNav .headerMenuSm {\n  display: none;\n}\n\n.headerNav .headerMenuSmCart {\n  display: none;\n}\n\n.headerNav .headerLogo img {\n  height: 82px;\n  margin: 4px 0;\n  transition: all 0.1s;\n}\n\n.headerNav .headerLogo {\n  display: inline-block;\n  width: 110px;\n  text-align: center;\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .headerLogo {\n    width: auto;\n  }\n}\n\n.headerNav .navSearch {\n  display: inline-block;\n  margin-left: 15px;\n  padding: 13px 0;\n}\n\n.headerNav .navSearchInner {\n  display: inline-block;\n  background: #f2f2f2;\n  border: 2px #f2f2f2 solid;\n  border-radius: 100px;\n  position: relative;\n}\n\n.headerNav select {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background: #FFF;\n  height: 50px;\n  background: #2b98ed;\n  border-radius: 100px;\n  color: #FFF;\n  padding: 0 20px;\n  width: calc(100% + 45px);\n}\n\n.headerNav .navSearchInnerSelect {\n  background: #138ae6;\n  border-radius: 100px;\n  padding-right: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  position: relative;\n}\n\n.headerNav .navSearchInnerSelect:after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 6px 6px 0 6px;\n  border-color: #FFF transparent transparent transparent;\n  position: absolute;\n  right: 18px;\n  top: 21px;\n}\n\n.headerNav .navSearchText {\n  display: inline-block;\n}\n\n.headerNav .navSearchText input {\n  display: inline-block;\n  vertical-align: middle;\n  background: none;\n  border: none;\n  width: 500px;\n}\n\n@media screen and (max-width: 1400px) {\n  .headerNav .navSearchText input {\n    width: 300px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .headerNav .navSearchText input {\n    width: 210px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .headerNav .navSearchText input {\n    width: initial;\n  }\n}\n\n.headerNav .navSearchText input:focus {\n  outline: none;\n}\n\n.headerNav .navSearchIcon {\n  display: inline-block;\n  height: 15px;\n  vertical-align: middle;\n  margin: 0 10px;\n  opacity: 0.5;\n}\n\n.headerNav .searchSubmit {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: none;\n  vertical-align: middle;\n  border-radius: 100px;\n  background-color: #2b98ed;\n  background-repeat: no-repeat;\n  background-size: 35%;\n  background-position: center;\n  cursor: pointer;\n  border: 1px #4ba8f0 solid;\n  background-color: #FFF;\n}\n\n.headerNav .searchSubmit:hover {\n  background-color: #138ae6;\n  color: #FFF;\n  background-image: url('right-arrow-forward.svg') !important;\n}\n\n.headerNav .searchSubmit:focus {\n  outline: none;\n}\n\n.headerNav .navRight {\n  height: 90px;\n  display: flex;\n  align-items: center;\n}\n\n@media screen and (max-width: 1100px) {\n  .headerNav .navRight {\n    height: initial;\n    padding-bottom: 10px;\n    justify-content: center;\n  }\n}\n\n.headerNav .navRight > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.headerNav .navCart a {\n  position: relative;\n}\n\n.headerNav .navCart a span {\n  position: absolute;\n  background: #138ae6;\n  color: #FFF;\n  font-weight: bold;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 12px;\n  border-radius: 100px;\n  top: -18px;\n  right: -2px;\n}\n\n.headerNav .navCart img {\n  height: 25px;\n  margin: 0 20px;\n}\n\n.headerNav .navButtons {\n  margin-left: 10px;\n}\n\n.headerNav .navButtons a {\n  margin: 0 5px;\n  font-weight: 600;\n  font-size: 14px;\n  padding: 10px 16px;\n  position: relative;\n}\n\n.headerNav .navButtons a label {\n  margin-bottom: 0;\n  position: relative;\n  cursor: pointer;\n}\n\n.headerNav .navButtons a label img {\n  height: 22px;\n  margin: 0 0 0 5px;\n  top: -4px;\n}\n\n.headerNav .userMenu {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n}\n\n.headerNav .userMenu .userMenuIn {\n  display: inline-block;\n  height: 45px;\n  border-radius: 100px;\n  position: relative;\n  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  cursor: pointer;\n  width: 45px;\n  background-size: cover;\n}\n\n.headerNav .userMenu .userMenuIn > div {\n  height: 45px;\n  border-radius: 100px;\n  background: #138ae6;\n  color: #FFF;\n  text-align: center;\n  line-height: 45px;\n  font-weight: 500;\n  font-size: 17px;\n  width: 45px;\n}\n\n.headerNav .userMenu .userMenuIn span {\n  height: 45px;\n  line-height: 45px;\n  display: inline-block;\n  font-weight: 500;\n  color: #444;\n  font-size: 14px;\n}\n\n.headerNav .userMenu .userMenuIn:hover {\n  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);\n}\n\n.headerNav .userMenu .userMenuDrop {\n  position: absolute;\n  right: 0;\n  top: 45px;\n  width: 150px;\n  padding-top: 10px;\n  display: none;\n  z-index: 1000;\n}\n\n.headerNav .userMenu .userMenuDrop .userMenuDropIn {\n  background: #FFF;\n  padding: 10px 0;\n  border-radius: 10px;\n  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);\n}\n\n.headerNav .userMenu .userMenuDrop .userMenuDropIn a {\n  display: block;\n  color: #444;\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.headerNav .userMenu .userMenuDrop .userMenuDropIn a:hover {\n  text-decoration: none;\n  color: #138ae6;\n}\n\n.headerNav .userMenu:hover .userMenuDrop {\n  display: block;\n}\n\n.headerNav .deliveryLoc {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 10px;\n  position: relative;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .deliveryLoc {\n    margin-left: 10px;\n  }\n}\n\n.headerNav .deliveryLoc:before {\n  content: \"\";\n  display: inline-block;\n  top: 5px;\n  bottom: 5px;\n  width: 1px;\n  left: -20px;\n  background: #DDD;\n  position: absolute;\n}\n\n.headerNav .deliveryLoc .deliveryLocIn div {\n  color: #888;\n  font-size: 14px;\n}\n\n.headerNav .deliveryLoc .deliveryLocIn div img {\n  height: 12px;\n  display: inline-block;\n  margin-right: 2px;\n  opacity: 0.7;\n  vertical-align: middle;\n  position: relative;\n  top: -2px;\n}\n\n.headerNav .deliveryLoc .deliveryLocIn div .deliveryLocation {\n  margin: 0;\n  font-size: 15px;\n  color: #252525;\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .deliveryLoc .deliveryLocIn div .deliveryLocation {\n    font-size: 13px;\n  }\n}\n\n.headerNav .deliveryLoc .deliveryLocIn div .deliveryLocation img {\n  height: 10px;\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.mainNav {\n  background: #138ae6;\n  text-align: center;\n}\n\n.mainNav .mainNavInner {\n  display: inline-block;\n  position: relative;\n}\n\n.mainNav .mainNavInner > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.mainNav .mainNavInner > div a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.mainNav .mainNavInner > div .heroMenu {\n  padding: 20px;\n  position: absolute;\n  background: #FFF;\n  border: 3px #000 solid;\n  border-radius: 20px;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  text-align: left;\n  display: none;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuHeader {\n  color: #000;\n  font-weight: 500;\n  font-size: 25px;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuContent {\n  margin-top: 15px;\n  max-height: 50vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuContent .heroItemLink {\n  display: block;\n  padding-left: 80px;\n  min-height: 60px;\n  position: relative;\n  margin: 15px 0;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuContent .heroItemLink .heroItemImage {\n  width: 60px;\n  height: 60px;\n  border-radius: 10px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-size: cover;\n  background-position: center;\n  background-color: #FF0;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuContent .heroItemLink .heroItemName {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  color: #000;\n  line-height: 19px;\n}\n\n.mainNav .mainNavInner > div .heroMenu .heroMenuContent .heroItemLink .heroItemCount {\n  font-size: 14px;\n  color: #888;\n  margin: 0;\n}\n\n.mainNav .mainNavInner > div:hover .heroMenu {\n  display: block;\n}\n\n.mainNav .mainNavInner > div > a {\n  font-size: 13px;\n  color: #FFF;\n  text-transform: uppercase;\n  font-weight: 500;\n  vertical-align: text-top;\n  padding: 15px 10px;\n  display: inline-block;\n  position: relative;\n  transition: all 0.2s;\n}\n\n@media screen and (max-width: 768px) {\n  .mainNav .mainNavInner > div > a {\n    padding: 7px 10px;\n  }\n}\n\n.mainNav .mainNavInner > div > a:hover {\n  text-decoration: none;\n  opacity: 0.92;\n}\n\n.navLocation {\n  display: inline-block;\n  vertical-align: middle;\n  background: #138ae6;\n  color: #FFF;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.navLocation img {\n  height: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -2px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n\n.navLocation .deliveryLocation {\n  margin: 0;\n}\n\n.navLocation .navCaretDown {\n  height: 11px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n\n.mobileMenu {\n  width: 90%;\n  position: fixed;\n  right: -90%;\n  top: 0;\n  bottom: 0;\n  background: #FFF;\n  z-index: 1000;\n  transition: all 0.2s;\n}\n\n.mobileMenu .mmUser {\n  position: relative;\n  padding-left: 120px;\n  min-height: 40px;\n  margin: 15px 0;\n}\n\n.mobileMenu .mmUser .mmUserImage {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  left: 60px;\n  top: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.mobileMenu .mmUser .mmUserName {\n  font-size: 16px;\n  font-weight: 500;\n  color: #222;\n}\n\n.mobileMenu .mmUser .mmUserViewProfile {\n  font-size: 13px;\n  font-weight: 400;\n  color: #888;\n}\n\n.mobileMenu .mmUser .closeMm {\n  width: 60px;\n  height: 40px;\n  vertical-align: center;\n  background-position: center;\n  background-size: 25%;\n  display: inline-block;\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0;\n}\n\n.mobileMenu.mmShown {\n  right: 0;\n  overflow: auto;\n}\n\n.mobileMenuOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  display: none;\n}\n\n.mobileMenu .navLocation {\n  width: 96%;\n  margin: 0 auto;\n  display: block;\n  border-radius: 3px;\n  background: #eef3ff;\n  color: #000;\n}\n\n.mobileMenu .navLocation img {\n  -webkit-filter: contrast(1.75);\n          filter: contrast(1.75);\n}\n\n.mobileMenu .mmItems {\n  padding: 0 1%;\n}\n\n.mobileMenu .mmItems div {\n  background: #fdfdfd;\n  width: 48%;\n  display: inline-block;\n  margin: 0 1%;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.mobileMenu .mmItems div a {\n  display: block;\n  font-size: 13px;\n  color: #656565;\n  padding: 7px 12px;\n  border: 1px #f1f1f1 solid;\n  border-radius: 5px;\n}\n\n.mobileMenu .mmItems div a .myOrderCount {\n  display: inline-block;\n  padding: 0px 6px 2px;\n  vertical-align: middle;\n  background: #3AE;\n  color: #FFF;\n  font-weight: bold;\n  border-radius: 2px;\n  margin-left: 5px;\n}\n\n.mobileMenu .mmContactNumbers {\n  margin: 0 -2px;\n}\n\n.mobileMenu .mmContactNumbers .row {\n  margin: 0 -11px;\n}\n\n.mobileMenu .mmContactNumbers .col-6 {\n  padding: 0 2px;\n}\n\n.mobileMenu .mmContactNumbers a {\n  background: #ededed;\n  color: #444;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 7px 8px;\n  border-radius: 4px;\n  display: block;\n  width: 100%;\n}\n\n.mobileMenu .mmContactNumbers a img {\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\n\n.mobileMenu .tuesdayDisclaimer {\n  color: #F00;\n  text-align: center;\n  font-size: 13px;\n  margin: 8px 0;\n  padding: 0 10px;\n}\n\n.mobileMenu .menuAppBadgesHolder .row {\n  margin: 5px 0;\n}\n\n.mobileMenu .menuAppBadgesHolder .col-6 {\n  padding: 0 5px;\n}\n\n.mobileMenu .menuAppBadgesHolder a {\n  display: block;\n}\n\n.mobileMenu .menuAppBadgesHolder img {\n  width: 100%;\n}\n\n.locationOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n\n.selectLocation {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n\n.selectLocation .selectLocationInner {\n  width: 800px;\n  display: inline-block;\n  max-width: 95%;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 20px;\n  font-weight: 500;\n  position: relative;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationHeader .closeSelectLocation {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationHeader .closeSelectLocation img {\n  height: 15px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .selectLocationInput {\n  position: relative;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n\n.selectLocation .selectLocationInner .selectLocationContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n\n.headerScrolled .headerInfo {\n  padding: 2px 0;\n}\n\n.headerScrolled .headerInfo .topNavBulkOrder {\n  border-radius: 0;\n}\n\n.headerScrolled .headerNav {\n  /*position: fixed;top:0;left:0;right:0;background:#FFF;z-index: 51;*/\n  height: 64px;\n}\n\n@media screen and (max-width: 768px) {\n  .headerScrolled .headerNav {\n    height: auto !important;\n  }\n}\n\n.headerScrolled .headerNav .navSearch {\n  padding: 4px 0;\n}\n\n.headerScrolled .headerNav .navRight {\n  height: 64px;\n}\n\n.headerScrolled .headerNav .headerLogo img {\n  height: 56px;\n  margin: 4px 0;\n}\n\n.headerScrolled .mainNav {\n  /*position: fixed;top:64px;left:0;right:0;z-index: 50;box-shadow: 0 0 10px rgba(0,0,0,.5);*/\n  background: #138ae6 !important;\n}\n\n.headerScrolled .mainNav .mainNavInner > div a {\n  padding: 8px 10px;\n}\n\n@media screen and (max-width: 1105px) {\n  .headerNav .float-left {\n    float: none !important;\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 1105px) and (max-width: 576px) {\n  .headerNav .float-left {\n    text-align: left;\n    padding-left: 10px;\n    display: flex;\n    align-items: center;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .headerNav .float-left .navRight {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .headerNav .float-right {\n    float: none !important;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .selectLocationCitiesHolder {\n    display: block !important;\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .headerNav {\n    position: relative;\n  }\n  .headerNav .navSearchInnerSelect {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .headerMenuSmLinksHolder {\n    position: absolute;\n    right: 8px;\n    top: 20px;\n    display: inline-block;\n  }\n  .headerNav .headerMenuSmLinksHolder a {\n    display: inline-block;\n    width: 24px;\n    text-align: center;\n    vertical-align: middle;\n    height: 24px;\n    margin: 0 3px;\n    opacity: 0.7;\n  }\n  .headerNav .headerMenuSm {\n    display: inline-block;\n    transform: scale(0.75, 1);\n  }\n  .headerNav .headerMenuSm img {\n    height: 21px;\n  }\n  .headerNav .headerMenuSmCart {\n    display: inline-block;\n    color: #FFF;\n    position: relative;\n  }\n  .headerNav .headerMenuSmCart img {\n    filter: invert(100);\n    -webkit-filter: invert(100);\n    height: 21px;\n  }\n  .headerNav .headerMenuSmCart span {\n    color: #FFF;\n    top: 5px;\n    left: -5px;\n    text-align: center;\n  }\n  .headerNav .headerMenuLocation img {\n    height: 21px;\n  }\n  .headerNav .headerLogo img {\n    height: 48px;\n    transition: all 0.2s;\n  }\n  .headerNav .navSearchInnerSelect {\n    display: none;\n  }\n  .headerNav .navSearch {\n    width: calc(100% - 100px);\n    margin-left: 5px;\n    transition: all 0.2s;\n  }\n}\n\n@media screen and (max-width: 576px) and (max-width: 576px) {\n  .headerNav .navSearch {\n    width: calc(100% - 10px);\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .navSearchText {\n    width: calc(100vw - 140px);\n  }\n}\n\n@media screen and (max-width: 576px) and (max-width: 576px) {\n  .headerNav .navSearchText {\n    width: calc(100vw - 10px);\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .navSearchText input {\n    width: calc(100% - 35px);\n    height: 40px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .searchSubmit {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    right: 2px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerNav .navRight {\n    display: block;\n    transition: all 0.2s;\n  }\n  .headerNav .navRight .navLocation {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .navSearchInner {\n    width: 100%;\n    text-align: left;\n  }\n  .navSearchInner .navSearchText {\n    width: 100% !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .navLocation {\n    font-size: 12px;\n  }\n  .navLocation div {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 10px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerInfo, .mainNav, .navRight {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .getGPS {\n    width: 100px !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .locationInputHolder {\n    padding-right: 125px !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .headerLogo img {\n    height: 40px !important;\n    transition: all 0.2s;\n  }\n}\n\n.loginModalOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1002;\n  display: none;\n}\n\n.loginModal .lmInner {\n  position: fixed;\n  top: 0;\n  right: -40vw;\n  bottom: 0;\n  width: 40vw;\n  background: #FFF;\n  transition: all 0.4s;\n  z-index: 1003;\n}\n\n.loginModal .lmInner .closeLM {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 55px;\n  padding: 16px 20px;\n  opacity: 0.8;\n}\n\n.loginModal .lmInner .closeLM:hover {\n  opacity: 1;\n}\n\n.loginModal .lmInner .lmIn {\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  bottom: 50px;\n  left: 50px;\n  display: flex;\n  flex-direction: column;\n}\n\n.loginModal .lmInner .lmIn .lmflImg {\n  flex-grow: 1;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.loginModal.lmShown .lmInner {\n  right: 0;\n}\n\n.bulkOrderOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1004;\n  display: none;\n}\n\n.bulkOrderModal .boInner {\n  position: fixed;\n  top: 0;\n  right: -40vw;\n  bottom: 0;\n  width: 40vw;\n  background: #FFF;\n  transition: all 0.4s;\n  z-index: 1005;\n}\n\n.bulkOrderModal .boInner .closeBo {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 55px;\n  padding: 16px 20px;\n  opacity: 0.8;\n}\n\n.bulkOrderModal .boInner .closeBo:hover {\n  opacity: 1;\n}\n\n.bulkOrderModal .boInner .boIn {\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  bottom: 50px;\n  left: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.bulkOrderModal .boInner .boIn .boTop {\n  flex-grow: 1;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.bulkOrderModal .boInner .boIn .boBottom .boHeader {\n  color: #000;\n  font-size: 20px;\n  height: 70px;\n  line-height: 70px;\n  font-weight: 500;\n  position: relative;\n  transition: all 0.1s;\n  display: inline-block;\n  margin-right: 50px;\n}\n\n.bulkOrderModal .boInner .boIn .boBottom .boHeader:after {\n  position: absolute;\n  left: 0;\n  bottom: 2px;\n  right: 0;\n  background: #CCC;\n  border-radius: 100px;\n  transition: all 0.1s;\n  content: \"\";\n  background: #000;\n  height: 4px;\n}\n\n.bulkOrderModal .btn {\n  font-size: 18px;\n  padding: 17px 0;\n  font-weight: 600;\n}\n\n.bulkOrderModal.boShown .boInner {\n  right: 0;\n}\n\n.cartModalOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1004;\n  display: none;\n}\n\n.cartModal .cartInner {\n  position: fixed;\n  top: 0;\n  right: -40vw;\n  bottom: 0;\n  width: 40vw;\n  background: #FFF;\n  transition: all 0.4s;\n  z-index: 1005;\n}\n\n@media screen and (max-width: 1200px) {\n  .cartModal .cartInner {\n    right: -55vw;\n    width: 55vw;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .cartModal .cartInner {\n    position: fixed;\n    right: -80vw;\n    top: 0;\n    bottom: 0;\n    width: 80vw;\n    background: #fff;\n    transition: all 0.4s;\n    z-index: 1005;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .cartModal .cartInner {\n    right: -90vw;\n    top: 0;\n    bottom: 0;\n    width: 90vw;\n  }\n}\n\n.cartModal .cartInner .closeCart {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 55px;\n  padding: 16px 20px;\n  opacity: 0.8;\n}\n\n.cartModal .cartInner .closeCart:hover {\n  opacity: 1;\n}\n\n.cartModal .cartInner .cartIn {\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  bottom: 50px;\n  left: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 1200px) {\n  .cartModal .cartInner .cartIn {\n    right: 20px;\n    left: 20px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .cartModal .cartInner .cartIn {\n    right: 10px;\n    left: 10px;\n  }\n}\n\n.cartModal .cartInner .cartIn .cartTop {\n  align-self: flex-start;\n  width: 100%;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem {\n  position: relative;\n  padding-left: 60px;\n  min-height: 50px;\n  margin: 10px 0;\n  border-bottom: 1px #EEE solid;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem:last-child {\n  border: none;\n  margin-bottom: 0;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemImage {\n  height: 50px;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  border-radius: 10px;\n  background-size: cover;\n  background-position: center;\n  display: inline-block;\n  width: 50px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemName {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #444;\n  display: block;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemUnitPrice {\n  font-size: 14px;\n  color: #888;\n  margin: 0;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemUnitPrice span {\n  color: #8bc34a;\n  font-weight: bold;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .removeCartItem {\n  color: #F00;\n  font-size: 13px;\n  display: inline-block;\n  padding: 0;\n  font-weight: 500;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemPrice {\n  text-align: center;\n  font-size: 16px;\n}\n\n@media screen and (max-width: 768px) {\n  .cartModal .cartInner .cartIn .cartTop .cartItem .cartItemPrice {\n    text-align: left;\n    font-size: 16px;\n    margin-top: 6px;\n  }\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemPrice span {\n  color: #8bc34a;\n  font-weight: bold;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold {\n  text-align: center;\n}\n\n@media screen and (max-width: 768px) {\n  .cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold {\n    text-align: left;\n    margin-top: 10px;\n  }\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold a {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 20px;\n  color: #444;\n  border: 1px #888 solid;\n  border-radius: 100px;\n  vertical-align: middle;\n  opacity: 0.5;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold a:hover {\n  text-decoration: none;\n  opacity: 1;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold button {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  color: #444;\n  border: 1px #888 solid;\n  border-radius: 100px;\n  vertical-align: middle;\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 767px) {\n  .cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold button {\n    width: 25px;\n    height: 25px;\n    line-height: 20px;\n  }\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold button:hover {\n  text-decoration: none;\n  opacity: 1;\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold input {\n  display: inline-block;\n  width: 80px;\n  vertical-align: middle;\n  margin: 0 5px;\n  border-radius: 5px;\n  border: 1px #AAA solid;\n  text-align: center;\n  color: #777;\n}\n\n@media screen and (max-width: 1450px) {\n  .cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold input {\n    width: 55px;\n  }\n}\n\n.cartModal .cartInner .cartIn .cartTop .cartItem .cartItemCountHold input:focus {\n  border-color: #888;\n  outline: none;\n}\n\n.cartModal .cartInner .cartIn .cartBottpom {\n  align-self: flex-end;\n  width: 100%;\n}\n\n.cartModal .cartInner .cartIn .cartTot p {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.cartModal .cartInner .cartIn .cartTot small {\n  font-size: 15px;\n  color: #888;\n  color: #2b98ed;\n}\n\n.cartModal .cartInner .cartIn .cartTot small.delCh {\n  color: #ff3b00;\n}\n\n.cartModal .cartInner .cartIn .cartTot .removeCoupon {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 3px 10px;\n  border-radius: 30px;\n  background-color: #ff3b00;\n  display: inline-block;\n  margin: 5px 0 5px;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n}\n\n.cartModal .cartInner .cartIn .cartTot .removeCoupon:hover {\n  text-decoration: none;\n  background-color: #fff;\n  color: #ff3b00;\n  border: 1px solid #ff3b00;\n}\n\n.cartModal .cartInner .cartIn .couponHolder {\n  padding-right: 100px;\n}\n\n.cartModal .cartInner .cartIn .couponHolder input {\n  width: 100%;\n}\n\n.cartModal.cartShown .cartInner {\n  right: 0;\n}\n\n.btnCheckout {\n  font-size: 16px;\n}\n\n@media screen and (max-width: 1400px) {\n  .btnCheckout {\n    font-size: 15px;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .cartItem {\n    padding-left: 80px;\n  }\n  .cartItem .cartItemImage {\n    width: 65px;\n    height: 65px;\n  }\n  .cartItem .cartItemCountHold {\n    text-align: left;\n  }\n  .cartItem .cartItemPrice {\n    text-align: left;\n  }\n\n  .couponHolder {\n    margin-top: 20px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .loginModal .lmInner {\n    right: -100vw;\n    width: 100vw;\n  }\n  .loginModal .lmInner .lmIn {\n    top: 10px;\n    right: 10px;\n    bottom: 10px;\n    left: 10px;\n  }\n  .loginModal .lmInner .lmIn .lmflImg {\n    display: none;\n  }\n  .loginModal .lmInner .closeLM {\n    left: initial;\n    right: 0;\n    z-index: 10;\n  }\n}\n\n.empty_cart_wrap {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.empty_cart_wrap img {\n  width: 150px;\n  margin-bottom: 30px;\n}\n\n.empty_cart_wrap p {\n  font-size: 30px;\n  color: #868a8c;\n}\n\n.ng-autocomplete {\n  width: 100% !important;\n}\n\n.autocomplete-container {\n  box-shadow: 0 !important;\n}\n\n.autocomplete-container .input-container input {\n  display: block !important;\n  width: 100% !important;\n  height: 50px !important;\n  border-radius: 100px !important;\n  border: 1px #DDD solid !important;\n  text-indent: 50px !important;\n}\n\n.coupon {\n  cursor: pointer;\n}\n\n.customNoteOnCart {\n  font-size: 14px;\n  font-style: italic;\n  color: #9c9c9c;\n  font-weight: 600;\n}\n\n.customNoteOnCart span {\n  font-style: normal;\n  color: #444;\n}\n\n.couponAppliedInfo {\n  display: block;\n  text-align: center;\n  padding: 6px 0;\n  background: #eaffe1;\n  border: 1px #addcad solid;\n  border-radius: 5px;\n  color: #080;\n  margin: 5px 0;\n}\n\n.couponAppliedInfo small {\n  color: #2b98ed;\n}\n\n.headertodaybtn {\n  border: none !important;\n  margin-top: 10px;\n  padding-right: 10px;\n}\n\n.cartItems {\n  height: calc(100vh - 350px);\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 576px) {\n  .cartItems {\n    height: calc(100vh - 370px);\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .cartTot {\n    margin-bottom: 5px;\n  }\n}\n\n.cartBottom {\n  padding: 10px 0;\n}\n\n.selectASlot {\n  padding: 15px;\n  border: 1px #EEE solid;\n  border-radius: 10px;\n}\n\n.selectASlot .selectSlotHeader {\n  margin-bottom: 5px;\n  font-size: 16px;\n}\n\n.selectASlot .selectSlotHeader span {\n  color: #F00;\n  font-weight: 500;\n}\n\n.selectASlot .slotHolder {\n  display: table;\n  width: 100%;\n}\n\n.selectASlot .slotHolder .slotRow {\n  display: block;\n}\n\n.selectASlot .slotHolder .slotRow .slotCol {\n  display: inline-block;\n  vertical-align: top;\n  width: 25%;\n}\n\n@media screen and (max-width: 576px) {\n  .selectASlot .slotHolder .slotRow .slotCol {\n    width: 50%;\n  }\n}\n\n.selectASlot .slotHolder .slotRow .slotCol .slotItem {\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.7;\n  transform: scale(1);\n  transition: all 0.2s;\n  border: 1px #DDD solid;\n  padding: 10px 0;\n  background: #EEE;\n  min-height: 125px;\n  margin: 0 5px 10px;\n}\n\n.selectASlot .slotHolder .slotRow .slotCol .slotItem:hover {\n  background: #FFF;\n}\n\n.selectASlot .slotHolder .slotRow .slotCol .slotItem img {\n  height: 40px;\n  -webkit-filter: grayscale(100%);\n}\n\n.selectASlot .slotHolder .slotRow .slotCol .slotItem div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.selectASlot .slotHolder .slotRow .slotCol.active .slotItem {\n  background: #FFF;\n  transform: scale(1);\n  border-color: #2b98ed;\n  opacity: 1;\n  color: #2b98ed;\n}\n\n.selectASlot .slotHolder .slotRow .slotCol.active .slotItem img {\n  -webkit-filter: grayscale(0%);\n}\n\n.selectASlotModal {\n  border: 0 !important;\n}\n\n.timeSlotOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n\n.timeSlotWrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n\n.timeSlotWrapper .timeSlotInner {\n  width: 500px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 98vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.timeSlotWrapper .timeSlotInner .closeTimeSlot {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n}\n\n.timeSlotWrapper .timeSlotInner .closeTimeSlot img {\n  height: 15px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: 500;\n  position: relative;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 43%;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .timeSlotImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding-top: 10px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .selectLocationInput {\n  position: relative;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n\n.timeSlotWrapper .timeSlotInner .timeSlotContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol {\n  display: inline-block;\n  vertical-align: top;\n  width: 33.33% !important;\n}\n\n@media screen and (max-width: 576px) {\n  .timeSlotWrapper .timeSlotInner .slotCol {\n    width: 50% !important;\n  }\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol .slotItem {\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.7;\n  transform: scale(1);\n  transition: all 0.2s;\n  border: 1px #DDD solid;\n  padding: 10px 0;\n  background: #EEE;\n  min-height: 125px;\n  margin: 0 5px 10px;\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol .slotItem:hover {\n  background: #FFF;\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol .slotItem img {\n  height: 40px;\n  -webkit-filter: grayscale(100%);\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol .slotItem div {\n  text-align: center;\n  font-weight: 500;\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol.active .slotItem {\n  background: #FFF;\n  transform: scale(1);\n  border-color: #2b98ed;\n  opacity: 1;\n  color: #2b98ed;\n}\n\n.timeSlotWrapper .timeSlotInner .slotCol.active .slotItem img {\n  -webkit-filter: grayscale(0%);\n}\n\n.usermanuCustom {\n  border: 1px solid #138ae6;\n  border-radius: 30px;\n  padding: 5px 10px 5px 5px;\n  height: 47px;\n  position: relative;\n  cursor: pointer;\n}\n\n.usermanuCustom .userMenuIn {\n  height: 36px !important;\n  width: 36px !important;\n}\n\n.usermanuCustom .acntHoldName {\n  font-size: 15px;\n  display: inline-block;\n  margin-left: 7px;\n  position: relative;\n  top: -14px;\n  color: #138ae6;\n  font-weight: 500;\n}\n\n.navSearchSm {\n  position: absolute;\n  width: 100% !important;\n  top: 70px;\n  left: 0;\n  right: 0;\n  display: none;\n  transition: unset !important;\n}\n\n.navSearchSm .navSearchInner {\n  border-radius: 0;\n  padding: 4px 10px;\n}\n\n@media screen and (max-width: 576px) {\n  .hideSearchOnMob {\n    width: calc(100% - 153px) !important;\n  }\n  .hideSearchOnMob .navSearchText {\n    display: none;\n  }\n  .hideSearchOnMob .searchSubmit {\n    display: none;\n  }\n  .hideSearchOnMob .deliveryLoc {\n    display: block !important;\n    width: 100%;\n  }\n  .hideSearchOnMob .deliveryLoc::before {\n    display: none;\n  }\n  .hideSearchOnMob .navCaretDown {\n    top: -12px !important;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .hideSearchOnMob {\n    width: calc(100% - 153px) !important;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .hideSearchOnMob .deliveryLoc {\n    margin-left: 7px !important;\n  }\n  .hideSearchOnMob .deliveryLocation {\n    font-size: 12px !important;\n  }\n  .hideSearchOnMob .navCaretDown {\n    top: -2px !important;\n  }\n}\n\n.mobsearchCaller img {\n  width: 21px;\n}\n\n.downloadApp a {\n  color: #000;\n}\n\n.reviewContWrapperOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n  display: none;\n}\n\n.reviewContWrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n  z-index: 1002;\n  display: none;\n}\n\n.reviewContWrapper img.rvwBanImg {\n  width: 150px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.reviewContWrapper .revLine {\n  margin-bottom: 10px;\n}\n\n.reviewContWrapper .revComment {\n  width: 100%;\n  height: 100px;\n  resize: none;\n  border-radius: 10px;\n  background-color: #f3f3f3;\n  border: none;\n  margin-top: 15px;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.reviewContWrapper .revComment:focus {\n  outline: none;\n}\n\n.reviewContWrapper .revLine h4 {\n  font-size: 20px;\n  margin: 0;\n  color: #138ae6;\n}\n\n.reviewContWrapper .revStarWrap svg {\n  width: 20px;\n  height: 20px;\n  fill: #c5c5c5;\n  cursor: pointer;\n}\n\n.reviewContWrapper .revStarWrap svg:hover {\n  fill: #f90;\n}\n\n.reviewContWrapper .revStarWrap span {\n  display: inline-block;\n  margin-right: 6px;\n}\n\n.reviewContWrapper .revStarWrap span.active svg {\n  fill: #f90;\n}\n\n.reviewContWrapper .revStarWrap span.clickedActive svg {\n  fill: #f90;\n}\n\n.reviewContWrapper .reviewContBody {\n  padding: 20px;\n}\n\n.reviewContWrapper .reviewContInner {\n  width: 500px;\n  display: inline-block;\n  max-width: 95%;\n  position: relative;\n  max-height: 98vh;\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.reviewContWrapper .reviewContInner .closeTimeSlot {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n}\n\n.reviewContWrapper .reviewContInner .closeTimeSlot img {\n  height: 15px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent {\n  background: #FFF;\n  text-align: left;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotHeader {\n  color: #444;\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: 500;\n  position: relative;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotHeader h2 {\n  font-size: 24px;\n  line-height: 46px;\n  margin-bottom: 0;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder {\n  float: right;\n  width: 43%;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder label {\n  font-size: 18px;\n  color: #138ae6;\n  text-align: left;\n  display: inline-block;\n  line-height: 47px;\n  margin-bottom: 0;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotPostalInputHolder .timeSlotPostalInput {\n  float: right;\n  height: 45px;\n  width: 290px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 15px;\n  background-color: #f9f9f9;\n  display: inline-block;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .timeSlotImg {\n  width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding-top: 10px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a {\n  display: inline-block;\n  padding: 3px 11px;\n  border: 1px #DDD solid;\n  color: #555;\n  border-radius: 100px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a:hover {\n  text-decoration: none;\n  border-color: #138ae6;\n  color: #138ae6;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .selectLocationCitiesHolder a.active {\n  background: #138ae6;\n  color: #FFF;\n  border-color: #138ae6;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .locationInputHolder {\n  position: relative;\n  padding: 20px;\n  padding-right: 220px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .locationInputHolder img {\n  position: absolute;\n  height: 15px;\n  top: 38px;\n  left: 39px;\n  opacity: 0.5;\n  z-index: 10000;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .locationInputHolder .locationInput {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px #DDD solid;\n  text-indent: 50px;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .locationInputHolder .locationInput:focus {\n  outline: none;\n  border-color: #AAA;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .selectLocationInput {\n  position: relative;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .getGPS {\n  position: absolute;\n  right: 20px;\n  background: #FAFAFA;\n  height: 50px;\n  display: inline-block;\n  width: 180px;\n  line-height: 50px;\n  top: 20px;\n  border-radius: 100px;\n  text-align: center;\n  color: #555;\n  font-weight: 500;\n  border: 1px #DDD solid;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .getGPS:hover {\n  text-decoration: none;\n  border-color: #BBB;\n}\n\n.reviewContWrapper .reviewContInner .reviewContent .getGPS img {\n  height: 14px;\n  display: inline-block;\n  vertical-align: center;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n\n.reviewContWrapper .reviewContInner .slotCol {\n  display: inline-block;\n  vertical-align: top;\n  width: 33.33% !important;\n}\n\n@media screen and (max-width: 576px) {\n  .reviewContWrapper .reviewContInner .slotCol {\n    width: 50% !important;\n  }\n}\n\n.reviewContWrapper .reviewContInner .slotCol .slotItem {\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.7;\n  transform: scale(1);\n  transition: all 0.2s;\n  border: 1px #DDD solid;\n  padding: 10px 0;\n  background: #EEE;\n  min-height: 125px;\n  margin: 0 5px 10px;\n}\n\n.reviewContWrapper .reviewContInner .slotCol .slotItem:hover {\n  background: #FFF;\n}\n\n.reviewContWrapper .reviewContInner .slotCol .slotItem img {\n  height: 40px;\n  -webkit-filter: grayscale(100%);\n}\n\n.reviewContWrapper .reviewContInner .slotCol .slotItem div {\n  text-align: center;\n  font-weight: 500;\n}\n\n.reviewContWrapper .reviewContInner .slotCol.active .slotItem {\n  background: #FFF;\n  transform: scale(1);\n  border-color: #2b98ed;\n  opacity: 1;\n  color: #2b98ed;\n}\n\n.reviewContWrapper .reviewContInner .slotCol.active .slotItem img {\n  -webkit-filter: grayscale(0%);\n}\n\n.btnExWidth {\n  min-width: 100px;\n}\n\n.btnGroup .btn-primary {\n  margin-right: 20px;\n}\n\n.locSelector {\n  display: inline-block;\n  margin-right: 15px;\n  transition: all 0.1s ease;\n  opacity: 0.7;\n}\n\n.locSelector:hover {\n  transform: scale(1.05);\n  text-decoration: none;\n  opacity: 1;\n}\n\n.locSelector.active {\n  transform: scale(1.05);\n  text-decoration: none;\n  opacity: 1;\n}\n\n.locSelector:hover .plName {\n  text-decoration: none;\n  color: #138ae6;\n}\n\n.locSelector.active .plName {\n  text-decoration: none;\n  color: #138ae6;\n}\n\n.locSelector:last-child {\n  margin-right: 0;\n}\n\n.locSelBody {\n  text-align: center;\n}\n\n.locPlImg {\n  width: 150px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.plName {\n  font-size: 18px;\n  color: #909090;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.locSelHeaer {\n  font-size: 24px !important;\n  text-align: center;\n  margin-bottom: 0 !important;\n  line-height: 24px !important;\n  padding: 0 30px;\n  color: #646464;\n}\n\n.locSelectedName {\n  background-color: #138ae6;\n  border: 1px solid #138ae6;\n  border-radius: 3px;\n  padding: 3px 7px;\n  color: #ffffff;\n  font-weight: 600;\n  margin-top: 1px;\n  display: inline-block;\n}\n\n.deliveryLocation {\n  width: 90%;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  top: 3px;\n  font-size: 13px !important;\n}\n\n.rewardholder {\n  position: fixed;\n  bottom: 70px;\n  right: 20px;\n  width: 150px;\n  height: 100px;\n  border-radius: 30px;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 17px;\n  color: #2b98ed;\n  padding: 20px;\n  border: 3px solid #2b98ed;\n  font-size: 16px;\n  font-weight: 500;\n  box-shadow: 0px 0px 17px rgba(43, 152, 237, 0.66);\n  z-index: 9999;\n  transition: all 0.2s ease;\n}\n\n.rewardholder:hover {\n  text-decoration: none;\n  right: 30px;\n}\n\n.rewardholder::after {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  bottom: 30px;\n  border-left: 20px solid #2b98ed;\n  border-right: 10px solid transparent;\n  border-bottom: 15px solid #2b98ed00;\n  border-top: 15px solid #2b98ed00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvRTpcXG9mZmljZV9wcm9qZWN0XFxmZmItbmctbmV3XFxmZmItbmctbmV3L3NyY1xcYXBwXFxjb3JlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksZUFBQTtFQUFnQixNQUFBO0VBQU0sT0FBQTtFQUFPLALAQUE7RUFBUSxhQUFBO0VBQWMsZ0JBQUE7QUNFdkQ7O0FEQUE7RUFDSSxtQkFBQTtFQUFtQixlQUFBO0VBQWdCLFdBQUE7RUFBVyxhQUFBO0VBQWEsZUFBQTtFQUFlLG9CQUFBO0FDUTlFOztBRFBJO0VBQW9CLGNBQUE7RUFBYyxxQkFBQTtFQUFzQixpQkFBQTtBQ1k1RDs7QURYSTtFQUFzQixZQUFBO0VBQVkscUJBQUE7RUFBcUIsc0JBQUE7QUNnQjNEOztBRGZJO0VBQWlCLFlBQUE7RUFBWSxxQkFBQTtFQUFxQiwyQkFBQTtFQUE0QixpQkFBQTtFQUFrQixrQkFBQTtFQUFtQixTQUFBO0FDdUJ2SDs7QUR0Qkk7RUFBYyxxQkFBQTtFQUFzQixtQkFBQTtBQzBCeEM7O0FEekJJO0VBQ0kscUJBQUE7RUFBc0IsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsY0FkcEQ7RUFjc0UsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixxQkFBQTtFQUFxQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixnQkFBQTtFQUFpQix5QkFBQTtBQ3FDOUw7O0FEcENRO0VBQ0ksbUJBZks7RUFlc0IscUJBQUE7RUFBc0IsV0FBQTtBQ3dDN0Q7O0FEbkNJO0VBQTBCLGFBQUE7QUN1QzlCOztBRHRDSTtFQUFlLGFBQUE7QUN5Q25COztBRHhDSTtFQUFtQixhQUFBO0FDMkN2Qjs7QUQxQ0k7RUFBaUIsWUFBQTtFQUFZLGFBQUE7RUFBYyxvQkFBQTtBQytDL0M7O0FEOUNJO0VBQ0kscUJBQUE7RUFBcUIs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O0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUN1M0JKOztBRHQzQkk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUN3M0JSOztBRHIzQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FDdzNCSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVtZUJsdWU6ICMxMzhhZTY7XG4kdGhlbWVCbHVlSG92ZXI6ICMxMzhhZTY7XG4kdGhlbWVSZWQ6ICMxMzhhZTY7XG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6IDEwMDA7YmFja2dyb3VuZDojRkZGO1xufVxuLmhlYWRlckluZm8ge1xuICAgIGJhY2tncm91bmQ6I2Y1ZmJmZjtmb250LXNpemU6IDE0cHg7Y29sb3I6IzAwMDtvcGFjaXR5OiAuODU7cGFkZGluZzoxMHB4IDA7dHJhbnNpdGlvbjphbGwgLjJzO1xuICAgIC5vZmZEYXlEZWNsYXJhdGlvbiB7Y29sb3I6I2E3MDAwMDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7fVxuICAgIC5oZWFkZXJJbmZvQ2FsbEljb24gIHtoZWlnaHQ6MTRweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbiAgICAuYXBwU3RvcmVJY29ucyAge2hlaWdodDoxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTttYXJnaW4tbGVmdDogMTVweDtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOi0ycHg7fVxuICAgIC5kb3dubG9hZEFwcCB7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiB0b3B9XG4gICAgLnRvcE5hdkJ1bGtPcmRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiAjRkZGO3BhZGRpbmc6IDRweCA3cHg7Y29sb3I6ICR0aGVtZUJsdWU7Zm9udC1zaXplOiAxMnB4O2ZvbnQtd2VpZ2h0OiA1MDA7bGV0dGVyLXNwYWNpbmc6IC41cHg7Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbi1yaWdodDogN3B4O21hcmdpbi10b3A6IC0zcHg7Ym9yZGVyOjFweCAkdGhlbWVCbHVlIHNvbGlkO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6JHRoZW1lQmx1ZUhvdmVyO3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjojRkZGO1xuICAgICAgICB9XG4gICAgfVxufVxuLmhlYWRlck5hdiB7XG4gICAgLmhlYWRlck1lbnVTbUxpbmtzSG9sZGVyIHtkaXNwbGF5OiBub25lO31cbiAgICAuaGVhZGVyTWVudVNtIHtkaXNwbGF5Om5vbmV9XG4gICAgLmhlYWRlck1lbnVTbUNhcnQge2Rpc3BsYXk6IG5vbmU7fVxuICAgIC5oZWFkZXJMb2dvIGltZyB7aGVpZ2h0OjgycHg7bWFyZ2luOiA0cHggMDt0cmFuc2l0aW9uOiBhbGwgLjFzO31cbiAgICAuaGVhZGVyTG9nbyB7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjExMHB4O3RleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdlNlYXJjaCB7ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1sZWZ0OiAxNXB4O3BhZGRpbmc6MTNweCAwO31cbiAgICAubmF2U2VhcmNoSW5uZXIge2Rpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiAjZjJmMmYyO2JvcmRlcjogMnB4ICNmMmYyZjIgc29saWQ7Ym9yZGVyLXJhZGl1czogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO31cbiAgICBzZWxlY3Qge2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO2JveC1zaGFkb3c6IG5vbmU7YmFja2dyb3VuZDogI0ZGRjtoZWlnaHQ6IDUwcHg7YmFja2dyb3VuZDogIzJiOThlZDtib3JkZXItcmFkaXVzOiAxMDBweDtjb2xvcjogI0ZGRjtwYWRkaW5nOiAwIDIwcHg7d2lkdGg6IGNhbGMoMTAwJSArIDQ1cHgpO31cbiAgICAubmF2U2VhcmNoSW5uZXJTZWxlY3Qge2JhY2tncm91bmQ6ICR0aGVtZUJsdWU7Ym9yZGVyLXJhZGl1czogMTAwcHg7cGFkZGluZy1yaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7b3ZlcmZsb3c6IGhpZGRlbjtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDA7aGVpZ2h0OiAwO2JvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4O2JvcmRlci1jb2xvcjogI0ZGRiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDE4cHg7dG9wOiAyMXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uYXZTZWFyY2hUZXh0IHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxuICAgIC5uYXZTZWFyY2hUZXh0IGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7YmFja2dyb3VuZDogbm9uZTtib3JkZXI6IG5vbmU7d2lkdGg6NTAwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICAgICAgd2lkdGg6MjEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgd2lkdGg6aW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzIHtvdXRsaW5lOm5vbmV9XG4gICAgfVxuICAgIC5uYXZTZWFyY2hJY29uIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7aGVpZ2h0OjE1cHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTttYXJnaW46IDAgMTBweDtvcGFjaXR5OiAuNTt9XG4gICAgLnNlYXJjaFN1Ym1pdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7Ym9yZGVyOiBub25lO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ym9yZGVyLXJhZGl1czogMTAwcHg7YmFja2dyb3VuZC1jb2xvcjogIzJiOThlZDtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogMzUlO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7Ym9yZGVyOiAxcHggIzRiYThmMCBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XG4gICAgICAgICY6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMxMzhhZTY7Y29sb3I6ICNGRkY7YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LWZvcndhcmQuc3ZnJykgIWltcG9ydGFudDt9XG4gICAgICAgICY6Zm9jdXMge291dGxpbmU6IG5vbmU7fVxuICAgIH1cbiAgICAubmF2UmlnaHQge2hlaWdodDo5MHB4O2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTAwcHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdlJpZ2h0ID4gZGl2IHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlfVxuICAgIC5uYXZDYXJ0IHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIHNwYW4ge3Bvc2l0aW9uOiBhYnNvbHV0ZTtiYWNrZ3JvdW5kOiAkdGhlbWVCbHVlO2NvbG9yOiAjRkZGO2ZvbnQtd2VpZ2h0OiBib2xkO2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMjRweDtoZWlnaHQ6IDI0cHg7dGV4dC1hbGlnbjogY2VudGVyO2xpbmUtaGVpZ2h0OiAyNHB4O2ZvbnQtc2l6ZTogMTJweDtib3JkZXItcmFkaXVzOiAxMDBweDt0b3A6IC0xOHB4O3JpZ2h0OiAtMnB4O31cbiAgICAgICAgfVxuICAgICAgICBpbWcge2hlaWdodDoyNXB4O21hcmdpbjowIDIwcHg7fVxuICAgIH1cbiAgICAubmF2QnV0dG9ucyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7Zm9udC13ZWlnaHQ6IDYwMDtmb250LXNpemU6IDE0cHg7cGFkZGluZzogMTBweCAxNnB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7cG9zaXRpb246IHJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMnB4O21hcmdpbjowIDAgMCA1cHg7dG9wOi00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC51c2VyTWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAudXNlck1lbnVJbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7aGVpZ2h0OiA0NXB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtib3gtc2hhZG93OiAwIDBweCA5cHggcmdiYSgwLDAsMCwuMSk7dHJhbnNpdGlvbjphbGwgLjJzO2N1cnNvcjogcG9pbnRlcjt3aWR0aDo0NXB4O2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7YmFja2dyb3VuZDogIzEzOGFlNjtjb2xvcjogI0ZGRjt0ZXh0LWFsaWduOiBjZW50ZXI7bGluZS1oZWlnaHQ6IDQ1cHg7Zm9udC13ZWlnaHQ6IDUwMDtmb250LXNpemU6IDE3cHg7d2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7bGluZS1oZWlnaHQ6IDQ1cHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6IzQ0NDtmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDE1cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJNZW51RHJvcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6MDt0b3A6NDVweDt3aWR0aDoxNTBweDtwYWRkaW5nLXRvcDoxMHB4O2Rpc3BsYXk6bm9uZTt6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgLnVzZXJNZW51RHJvcEluIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7cGFkZGluZzoxMHB4IDA7Ym9yZGVyLXJhZGl1czogMTBweDtib3gtc2hhZG93OiAwIDBweCAxNXB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztjb2xvcjogIzQ0NDtmb250LXNpemU6IDE0cHg7cGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiR0aGVtZUJsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAudXNlck1lbnVEcm9wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5kZWxpdmVyeUxvYyB7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7cGFkZGluZy1yaWdodDoxMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW4tbGVmdDoyMHB4O2N1cnNvcjpwb2ludGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDpcIlwiO2Rpc3BsYXk6IGlubGluZS1ibG9jazt0b3A6NXB4O2JvdHRvbTo1cHg7d2lkdGg6MXB4O2xlZnQ6LTIwcHg7YmFja2dyb3VuZDojREREO3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZGVsaXZlcnlMb2NJbiB7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGNvbG9yOiM4ODg7Zm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDoycHg7b3BhY2l0eTogLjc7dmVydGljYWwtYWxpZ246IG1pZGRsZTtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOi0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7Zm9udC1zaXplOjE1cHg7Y29sb3I6IzI1MjUyNTtcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1sZWZ0OjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYWluTmF2IHtcbiAgICBiYWNrZ3JvdW5kOiR0aGVtZVJlZDt0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAubWFpbk5hdklubmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvTWVudSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtiYWNrZ3JvdW5kOiAjRkZGO2JvcmRlcjogM3B4ICMwMDAgc29saWQ7Ym9yZGVyLXJhZGl1czogMjBweDt6LWluZGV4OiAxMDA7bGVmdDogMDtyaWdodDogMDt0ZXh0LWFsaWduOmxlZnQ7ZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgIC5oZXJvTWVudUhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6IDUwMDtmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oZXJvTWVudUNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7bWF4LWhlaWdodDo1MHZoO292ZXJmbG93LXk6IGF1dG87b3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAuaGVyb0l0ZW1MaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO3BhZGRpbmctbGVmdDogODBweDttaW4taGVpZ2h0OjYwcHg7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjE1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZXJvSXRlbUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtoZWlnaHQ6NjBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6MDt0b3A6MDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlcm9JdGVtTmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NTAwO21hcmdpbjowO2NvbG9yOiMwMDA7bGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVyb0l0ZW1Db3VudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7Y29sb3I6Izg4ODttYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC5oZXJvTWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+IGEuaGVyb1BhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGVudDpcIlwiO3dpZHRoOiAwO2hlaWdodDogMDtib3JkZXItc3R5bGU6IHNvbGlkO2JvcmRlci13aWR0aDogMCAxMHB4IDEycHggMTBweDtib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQ7bGVmdDpjYWxjKDUwJSAtIDEwcHgpO2JvdHRvbTowcHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7Y29sb3I6ICNGRkY7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXdlaWdodDogNTAwO3ZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtwYWRkaW5nOiAxNXB4IDEwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC4ycztcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtvcGFjaXR5OiAuOTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5uYXZMb2NhdGlvbiB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtiYWNrZ3JvdW5kOiR0aGVtZUJsdWU7Y29sb3I6I0ZGRjtwYWRkaW5nOiA1cHggMTBweDtib3JkZXItcmFkaXVzOiA1cHg7Y3Vyc29yOnBvaW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OjEzcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTJweDtmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICB9XG4gICAgLmRlbGl2ZXJ5TG9jYXRpb24ge21hcmdpbjowO31cbiAgICAubmF2Q2FyZXREb3duIHtoZWlnaHQ6IDExcHg7ZmlsdGVyOiBpbnZlcnQoMTAwJSk7fVxufVxuXG4ubW9iaWxlTWVudSB7XG4gICAgd2lkdGg6OTAlO3Bvc2l0aW9uOiBmaXhlZDtyaWdodDotOTAlO3RvcDowO2JvdHRvbTowO2JhY2tncm91bmQ6I0ZGRjt6LWluZGV4OiAxMDAwO3RyYW5zaXRpb246YWxsIC4ycztcbiAgICAubW1Vc2VyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmctbGVmdDogMTIwcHg7bWluLWhlaWdodDogNDBweDttYXJnaW46MTVweCAwO1xuICAgICAgICAubW1Vc2VySW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6NDBweDtoZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOiA1MCU7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6NjBweDt0b3A6MDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubW1Vc2VyTmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjojMjIyO1xuICAgICAgICB9XG4gICAgICAgIC5tbVVzZXJWaWV3UHJvZmlsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7Zm9udC13ZWlnaHQ6IDQwMDtjb2xvcjojODg4O1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZU1tIHtcbiAgICAgICAgICAgIHdpZHRoOjYwcHg7aGVpZ2h0OiA0MHB4O3ZlcnRpY2FsLWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtc2l6ZTogMjUlO2Rpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLm1vYmlsZU1lbnUubW1TaG93biB7cmlnaHQ6MDtvdmVyZmxvdzphdXRvfVxuLm1vYmlsZU1lbnVPdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwO2Rpc3BsYXk6bm9uZTtcbn1cblxuLm1vYmlsZU1lbnUge1xuICAgIC5uYXZMb2NhdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5NiU7bWFyZ2luOiAwIGF1dG87ZGlzcGxheTogYmxvY2s7Ym9yZGVyLXJhZGl1czogM3B4O2JhY2tncm91bmQ6ICNlZWYzZmY7Y29sb3I6ICMwMDA7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuNzUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tbUl0ZW1zIHtcbiAgICAgICAgcGFkZGluZzogMCAxJTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7d2lkdGg6IDQ4JTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luOiAwIDElO3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tYm90dG9tOjRweDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO2ZvbnQtc2l6ZTogMTNweDtjb2xvcjogIzY1NjU2NTtwYWRkaW5nOiA3cHggMTJweDtib3JkZXI6IDFweCAjZjFmMWYxIHNvbGlkO2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAubXlPcmRlckNvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDBweCA2cHggMnB4O3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7YmFja2dyb3VuZDogIzNBRTtjb2xvcjogI0ZGRjtmb250LXdlaWdodDogYm9sZDtib3JkZXItcmFkaXVzOiAycHg7bWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1tQ29udGFjdE51bWJlcnMge1xuICAgICAgICBtYXJnaW46IDAgLTJweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTExcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbC02IHtcbiAgICAgICAgICAgIHBhZGRpbmc6MCAycHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO2NvbG9yOiAjNDQ0O2ZvbnQtc2l6ZTogMTJweDtmb250LXdlaWdodDogNTAwO3BhZGRpbmc6IDdweCA4cHg7Ym9yZGVyLXJhZGl1czogNHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE1cHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7cG9zaXRpb246IHJlbGF0aXZlO3RvcDotM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50dWVzZGF5RGlzY2xhaW1lciB7XG4gICAgICAgIGNvbG9yOiNGMDA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjEzcHg7bWFyZ2luOjhweCAwOyBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuICAgIC5tZW51QXBwQmFkZ2VzSG9sZGVyIHtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb2wtNiB7XG4gICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5sb2NhdGlvbk92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTogMDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTt6LWluZGV4OiAxMDAxO2Rpc3BsYXk6bm9uZTtcbn1cbi5zZWxlY3RMb2NhdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7cmlnaHQ6MDt0b3A6MDt0ZXh0LWFsaWduOiBjZW50ZXI7ei1pbmRleDogMTAwMjtkaXNwbGF5OiBub25lO1xuICAgIC5zZWxlY3RMb2NhdGlvbklubmVyIHtcbiAgICAgICAgd2lkdGg6ODAwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDojRkZGO3RleHQtYWxpZ246bGVmdDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgLnNlbGVjdExvY2F0aW9uSGVhZGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDQ0O2ZvbnQtc2l6ZToxOHB4O3BhZGRpbmc6MjBweDtmb250LXdlaWdodDogNTAwO3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAuY2xvc2VTZWxlY3RMb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMjBweDt0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOiAzcHggMTFweDtib3JkZXI6IDFweCAjREREIHNvbGlkO2NvbG9yOiAjNTU1O2JvcmRlci1yYWRpdXM6IDEwMHB4O2ZvbnQtc2l6ZTogMTRweDttYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO2JvcmRlci1jb2xvcjokdGhlbWVCbHVlO2NvbG9yOiR0aGVtZUJsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiR0aGVtZUJsdWU7Y29sb3I6I0ZGRjtib3JkZXItY29sb3I6JHRoZW1lQmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9jYXRpb25JbnB1dEhvbGRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoyMHB4O3BhZGRpbmctcmlnaHQ6MjIwcHg7XG4gICAgICAgICAgICAgICAgaW1nIHtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiAxNXB4O3RvcDogMzhweDtsZWZ0OiAzOXB4O29wYWNpdHk6IC41O3otaW5kZXg6IDEwMDAwO31cbiAgICAgICAgICAgICAgICAubG9jYXRpb25JbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO2hlaWdodDogNTBweDtib3JkZXItcmFkaXVzOiAxMDBweDtib3JkZXI6IDFweCAjREREIHNvbGlkO3RleHQtaW5kZW50OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtib3JkZXItY29sb3I6I0FBQTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3RMb2NhdGlvbklucHV0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5nZXRHUFMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMjBweDtiYWNrZ3JvdW5kOiAjRkFGQUZBO2hlaWdodDogNTBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDE4MHB4O2xpbmUtaGVpZ2h0OiA1MHB4O3RvcDogMjBweDtib3JkZXItcmFkaXVzOiAxMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICM1NTU7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXI6MXB4ICNEREQgc29saWQ7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7dGV4dC1kZWNvcmF0aW9uOiBub25lO2JvcmRlci1jb2xvcjojQkJCfVxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDotMXB4O21hcmdpbi1yaWdodDo1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyU2Nyb2xsZWQge1xuICAgIC5oZWFkZXJJbmZvIHtcbiAgICAgICAgcGFkZGluZzoycHggMDtcbiAgICAgICAgLnRvcE5hdkJ1bGtPcmRlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRlck5hdiB7XG4gICAgICAgIC8qcG9zaXRpb246IGZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I0ZGRjt6LWluZGV4OiA1MTsqL1xuICAgICAgICBoZWlnaHQ6NjRweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5uYXZTZWFyY2gge3BhZGRpbmc6IDRweCAwO31cbiAgICAgICAgLm5hdlJpZ2h0IHtoZWlnaHQ6NjRweDt9XG4gICAgICAgIC5oZWFkZXJMb2dvIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O21hcmdpbjogNHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1haW5OYXYge1xuICAgICAgICAvKnBvc2l0aW9uOiBmaXhlZDt0b3A6NjRweDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OiA1MDtib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLC41KTsqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWVSZWQgIWltcG9ydGFudDtcbiAgICAgICAgLm1haW5OYXZJbm5lciB7XG4gICAgICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICAgICAgYSB7cGFkZGluZzo4cHggMTBweH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpIHtcbiAgICAuaGVhZGVyTmF2IC5mbG9hdC1sZWZ0IHtcbiAgICAgICAgZmxvYXQ6bm9uZSAhaW1wb3J0YW50O3RleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZSaWdodCB7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJOYXYgLmZsb2F0LXJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDt0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAuaGVhZGVyTmF2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubmF2U2VhcmNoSW5uZXJTZWxlY3Qge2Rpc3BsYXk6bm9uZTt9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLmhlYWRlck5hdiB7XG4gICAgICAgIC5oZWFkZXJNZW51U21MaW5rc0hvbGRlciB7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiA4cHg7dG9wOiAyMHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XG4gICAgICAgIC5oZWFkZXJNZW51U21MaW5rc0hvbGRlciBhIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDI0cHg7dGV4dC1hbGlnbjogY2VudGVyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7aGVpZ2h0OiAyNHB4O21hcmdpbjogMCAzcHg7b3BhY2l0eTouN31cbiAgICAgICAgLmhlYWRlck1lbnVTbSB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEpO1xuICAgICAgICAgICAgaW1nIHtoZWlnaHQ6MjFweDt9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlck1lbnVTbUNhcnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO2NvbG9yOiNGRkY7cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDApO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwKTtoZWlnaHQ6MjFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiNGRkY7dG9wOjVweDtsZWZ0Oi01cHg7dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJNZW51TG9jYXRpb24ge1xuICAgICAgICAgICAgaW1nIHtoZWlnaHQ6MjFweDt9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxvZ28ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7dHJhbnNpdGlvbjphbGwgLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZTZWFyY2hJbm5lclNlbGVjdCB7ZGlzcGxheTpub25lO31cbiAgICAgICAgLm5hdlNlYXJjaCB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO21hcmdpbi1sZWZ0OiA1cHg7dHJhbnNpdGlvbjphbGwgLjJzO1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubmF2U2VhcmNoVGV4dHtcbiAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwdncgLSAxNDBweCk7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDB2dyAtIDEwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtoZWlnaHQ6NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoU3VibWl0IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O2hlaWdodDogNDBweDtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAubmF2UmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOmFsbCAuMnM7XG4gICAgICAgICAgICAubmF2TG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2U2VhcmNoSW5uZXIge1xuICAgICAgICB3aWR0aDoxMDAlO3RleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC5uYXZTZWFyY2hUZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZMb2NhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogdG9wO21hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJJbmZvLC5tYWluTmF2LC5uYXZSaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmdldEdQUyB7XG4gICAgICAgIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTI1cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLmhlYWRlckxvZ28ge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjphbGwgLjJzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9naW5Nb2RhbE92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTogMDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTt6LWluZGV4OiAxMDAyO2Rpc3BsYXk6bm9uZTtcbn1cbi5sb2dpbk1vZGFsIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7b3ZlcmZsb3c6IGhpZGRlbjt6LWluZGV4OiAxMDA7XG4gICAgLmxtSW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6LTQwdnc7Ym90dG9tOjA7d2lkdGg6NDB2dztiYWNrZ3JvdW5kOiNGRkY7dHJhbnNpdGlvbjphbGwgLjRzO3otaW5kZXg6IDEwMDM7XG4gICAgICAgIC5jbG9zZUxNIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7d2lkdGg6IDU1cHg7cGFkZGluZzogMTZweCAyMHB4O29wYWNpdHk6IC44O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubG1JbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjUwcHg7cmlnaHQ6NTBweDtib3R0b206NTBweDtsZWZ0OjUwcHg7ZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxtZmxJbWcge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YmFja2dyb3VuZC1zaXplOiBjb250YWluO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG1mbENvbnRlbnQge31cbiAgICAgICAgfVxuICAgIH1cbn1cbi5sb2dpbk1vZGFsLmxtU2hvd24ge1xuICAgIC5sbUlubmVyIHtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICB9XG59XG5cbi5idWxrT3JkZXJPdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwNDtkaXNwbGF5Om5vbmU7XG59XG4uYnVsa09yZGVyTW9kYWwge1xuICAgIC5ib0lubmVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO3RvcDowO3JpZ2h0Oi00MHZ3O2JvdHRvbTowO3dpZHRoOjQwdnc7YmFja2dyb3VuZDojRkZGO3RyYW5zaXRpb246YWxsIC40czt6LWluZGV4OiAxMDA1O1xuICAgICAgICAuY2xvc2VCbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO3dpZHRoOiA1NXB4O3BhZGRpbmc6IDE2cHggMjBweDtvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJvSW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3RvcDo1MHB4O3JpZ2h0OjUwcHg7Ym90dG9tOjUwcHg7bGVmdDo1MHB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5ib1RvcCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib0JvdHRvbSB7XG4gICAgICAgICAgICAgICAgLmJvSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7Zm9udC1zaXplOiAyMHB4O2hlaWdodDogNzBweDtsaW5lLWhlaWdodDogNzBweDtmb250LXdlaWdodDogNTAwO3Bvc2l0aW9uOiByZWxhdGl2ZTt0cmFuc2l0aW9uOiBhbGwgMC4xcztkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO2JvdHRvbTogMnB4O3JpZ2h0OiAwO2JhY2tncm91bmQ6ICNDQ0M7Ym9yZGVyLXJhZGl1czogMTAwcHg7dHJhbnNpdGlvbjogYWxsIDAuMXM7Y29udGVudDogXCJcIjtiYWNrZ3JvdW5kOiAjMDAwO2hlaWdodDogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7cGFkZGluZzogMTdweCAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuLmJ1bGtPcmRlck1vZGFsLmJvU2hvd24ge1xuICAgIC5ib0lubmVyIHtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICB9XG59XG5cbi5jYXJ0TW9kYWxPdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwNDtkaXNwbGF5Om5vbmU7XG59XG4uY2FydE1vZGFsIHtcbiAgICAuY2FydElubmVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO3RvcDowO3JpZ2h0Oi00MHZ3O2JvdHRvbTowO3dpZHRoOjQwdnc7YmFja2dyb3VuZDojRkZGO3RyYW5zaXRpb246YWxsIC40czt6LWluZGV4OiAxMDA1O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIHJpZ2h0Oi01NXZ3O1xuICAgICAgICAgICAgd2lkdGg6IDU1dnc7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6LTgwdnc7IHRvcDogMDsgYm90dG9tOiAwOyB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgICAgICAgICAgei1pbmRleDogMTAwNTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgcmlnaHQ6LTkwdnc7IHRvcDogMDsgYm90dG9tOiAwOyB3aWR0aDogOTB2dztcbiAgICAgICAgfVxuICAgICAgICAuY2xvc2VDYXJ0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7d2lkdGg6IDU1cHg7cGFkZGluZzogMTZweCAyMHB4O29wYWNpdHk6IC44O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FydEluIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6NTBweDtyaWdodDo1MHB4O2JvdHRvbTo1MHB4O2xlZnQ6NTBweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC5jYXJ0VG9wIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O3dpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgLmNhcnRJdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmctbGVmdDogNjBweDttaW4taGVpZ2h0OjUwcHg7bWFyZ2luOjEwcHggMDtib3JkZXItYm90dG9tOjFweCAjRUVFIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7bWFyZ2luLWJvdHRvbTowO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0SXRlbUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OjA7dG9wOjBweDtib3JkZXItcmFkaXVzOiAxMHB4O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjUwcHg7Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEl0ZW1OYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjojNDQ0O2Rpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRJdGVtVW5pdFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtjb2xvcjojODg4O21hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzhiYzM0YTtmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2FydEl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I0YwMDtmb250LXNpemU6IDEzcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6MDtmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0SXRlbVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM4YmMzNGE7Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRJdGVtQ291bnRIb2xkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAzMHB4O2hlaWdodDogMzBweDt0ZXh0LWFsaWduOiBjZW50ZXI7bGluZS1oZWlnaHQ6IDI0cHg7Zm9udC1zaXplOiAyMHB4O2NvbG9yOiAjNDQ0O2JvcmRlcjogMXB4ICM4ODggc29saWQ7Ym9yZGVyLXJhZGl1czogMTAwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTtvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO29wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDMwcHg7aGVpZ2h0OiAzMHB4O3RleHQtYWxpZ246IGNlbnRlcjtsaW5lLWhlaWdodDogMjRweDtmb250LXNpemU6IDE4cHg7Y29sb3I6ICM0NDQ7Ym9yZGVyOiAxcHggIzg4OCBzb2xpZDtib3JkZXItcmFkaXVzOiAxMDBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO29wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO29wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogODBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO21hcmdpbjogMCA1cHg7Ym9yZGVyLXJhZGl1czogNXB4O2JvcmRlcjogMXB4ICNBQUEgc29saWQ7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiM3Nzc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6Izg4ODtvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FydEJvdHRwb20ge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO3dpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJ0VG90IHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMjBweDtmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtjb2xvcjojODg4O2NvbG9yOiAjMmI5OGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzbWFsbC5kZWxDaCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYzYjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVtb3ZlQ291cG9uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNiMDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjNiMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzYjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdXBvbkhvbGRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxMDBweDtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmNhcnRNb2RhbC5jYXJ0U2hvd24ge1xuICAgIC5jYXJ0SW5uZXIge1xuICAgICAgICByaWdodDowO1xuICAgIH1cbn1cbi5idG5DaGVja291dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XG4gICAgLmNhcnRJdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICAuY2FydEl0ZW1JbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDo2NXB4O2hlaWdodDo2NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJ0SXRlbUNvdW50SG9sZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJ0SXRlbVByaWNlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvdXBvbkhvbGRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAubG9naW5Nb2RhbCB7XG4gICAgICAgIC5sbUlubmVyIHtcbiAgICAgICAgICAgIHJpZ2h0Oi0xMDB2dzt3aWR0aDoxMDB2dztcbiAgICAgICAgICAgIC5sbUluIHtcbiAgICAgICAgICAgICAgICB0b3A6MTBweDtyaWdodDoxMHB4O2JvdHRvbToxMHB4O2xlZnQ6MTBweDtcbiAgICAgICAgICAgICAgICAubG1mbEltZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlTE0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6aW5pdGlhbDtyaWdodDowO3otaW5kZXg6IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZW1wdHlfY2FydF93cmFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lbXB0eV9jYXJ0X3dyYXAgaW1nIHtcbiAgd2lkdGg6MTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbn1cblxuLmVtcHR5X2NhcnRfd3JhcCBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzg2OGE4Yztcbn1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODBweCkge1xuLy8gICAgIC5kZWxpdmVyeUxvYyB7XG4vLyAgICAgICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vIH1cblxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAhaW1wb3J0YW50O1xufVxuXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQgIWltcG9ydGFudDtcbiAgdGV4dC1pbmRlbnQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuXG4uY291cG9ueyBjdXJzb3I6IHBvaW50ZXI7fVxuLmN1c3RvbU5vdGVPbkNhcnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtmb250LXN0eWxlOiBpdGFsaWM7Y29sb3I6ICM5YzljOWM7Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcGFuIHtmb250LXN0eWxlOiBub3JtYWw7Y29sb3I6ICM0NDQ7fVxufVxuXG4uY291cG9uQXBwbGllZEluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA2cHggMDtiYWNrZ3JvdW5kOiAjZWFmZmUxO2JvcmRlcjogMXB4ICNhZGRjYWQgc29saWQ7Ym9yZGVyLXJhZGl1czogNXB4O2NvbG9yOiAjMDgwO21hcmdpbjogNXB4IDA7XG4gICAgc21hbGwge2NvbG9yOiAjMmI5OGVkO31cbn1cblxuLmhlYWRlcnRvZGF5YnRue2JvcmRlcjpub25lICFpbXBvcnRhbnQ7bWFyZ2luLXRvcDogMTBweDtwYWRkaW5nLXJpZ2h0OiAxMHB4O31cblxuLmNhcnRJdGVtc3tcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM3MHB4KTtcbiAgICB9XG59XG5cbi5jYXJ0VG90IHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4uY2FydEJvdHRvbSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuLnNlbGVjdEFTbG90IHtcbiAgICBwYWRkaW5nOjE1cHg7Ym9yZGVyOjFweCAjRUVFIHNvbGlkO2JvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLnNlbGVjdFNsb3RIZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtmb250LXNpemU6MTZweDtcbiAgICAgICAgc3BhbiB7XG5cbiAgICAgICAgICAgIGNvbG9yOiNGMDA7Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xvdEhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6dGFibGU7d2lkdGg6MTAwJTtcbiAgICAgICAgLnNsb3RSb3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAuc2xvdENvbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDt3aWR0aDoyNSU7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNsb3RJdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAuNzt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNpdGlvbjphbGwgLjJzO2JvcmRlcjoxcHggI0RERCBzb2xpZDtwYWRkaW5nOjEwcHggMDtiYWNrZ3JvdW5kOiNFRUU7bWluLWhlaWdodDoxMjVweDttYXJnaW46MCA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDstd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC13ZWlnaHQ6IDUwMDtmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2xvdENvbC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIC5zbG90SXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0cmFuc2Zvcm06IHNjYWxlKDEpO2JvcmRlci1jb2xvcjojMmI5OGVkO29wYWNpdHk6IDE7Y29sb3I6IzJiOThlZDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnNlbGVjdEFTbG90TW9kYWwge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5cblxuXG4udGltZVNsb3RPdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206IDA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDogMTAwMTtkaXNwbGF5Om5vbmU7XG59XG4udGltZVNsb3RXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtyaWdodDowO3RvcDowO3RleHQtYWxpZ246IGNlbnRlcjt6LWluZGV4OiAxMDAyO2Rpc3BsYXk6IG5vbmU7XG4gICAgLnRpbWVTbG90SW5uZXIge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LWhlaWdodDogOTh2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAuY2xvc2VUaW1lU2xvdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7dG9wOiAxNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGltZVNsb3RDb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0ZXh0LWFsaWduOmxlZnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC50aW1lU2xvdEhlYWRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQ0NDtmb250LXNpemU6MThweDtwYWRkaW5nOjEwcHggMjBweDtmb250LXdlaWdodDogNTAwO3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzEzOGFlNjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZVNsb3RQb3N0YWxJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aW1lU2xvdEltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDExcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDtjb2xvcjogIzU1NTtib3JkZXItcmFkaXVzOiAxMDBweDtmb250LXNpemU6IDE0cHg7bWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItY29sb3I6JHRoZW1lQmx1ZTtjb2xvcjokdGhlbWVCbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDokdGhlbWVCbHVlO2NvbG9yOiNGRkY7Ym9yZGVyLWNvbG9yOiR0aGVtZUJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MjBweDtwYWRkaW5nLXJpZ2h0OjIyMHB4O1xuICAgICAgICAgICAgICAgIGltZyB7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTVweDt0b3A6IDM4cHg7bGVmdDogMzlweDtvcGFjaXR5OiAuNTt6LWluZGV4OiAxMDAwMDt9XG4gICAgICAgICAgICAgICAgLmxvY2F0aW9uSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7Ym9yZGVyOiAxcHggI0RERCBzb2xpZDt0ZXh0LWluZGVudDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiNBQUE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0TG9jYXRpb25JbnB1dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ2V0R1BTIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7YmFja2dyb3VuZDogI0ZBRkFGQTtoZWlnaHQ6IDUwcHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAxODBweDtsaW5lLWhlaWdodDogNTBweDt0b3A6IDIwcHg7Ym9yZGVyLXJhZGl1czogMTAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjNTU1O2ZvbnQtd2VpZ2h0OiA1MDA7Ym9yZGVyOjFweCAjREREIHNvbGlkO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTtib3JkZXItY29sb3I6I0JCQn1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTRweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6LTFweDttYXJnaW4tcmlnaHQ6NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG90Q29sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MzMuMzMlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbG90SXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAuNzt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNpdGlvbjphbGwgLjJzO2JvcmRlcjoxcHggI0RERCBzb2xpZDtwYWRkaW5nOjEwcHggMDtiYWNrZ3JvdW5kOiNFRUU7bWluLWhlaWdodDoxMjVweDttYXJnaW46MCA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRkZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7LXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zbG90Q29sLmFjdGl2ZSB7XG4gICAgICAgICAgICAuc2xvdEl0ZW0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjt0cmFuc2Zvcm06IHNjYWxlKDEpO2JvcmRlci1jb2xvcjojMmI5OGVkO29wYWNpdHk6IDE7Y29sb3I6IzJiOThlZDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udXNlcm1hbnVDdXN0b217XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEzOGFlNjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnVzZXJNZW51SW4ge1xuICAgICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFjbnRIb2xkTmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTE0cHg7XG4gICAgICAgIGNvbG9yOiAjMTM4YWU2O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cblxuXG4ubmF2U2VhcmNoU20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAubmF2U2VhcmNoSW5uZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICB9XG59XG4uaGlkZVNlYXJjaE9uTW9iIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTUzcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIC5uYXZTZWFyY2hUZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaFN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZGVsaXZlcnlMb2Mge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZDYXJldERvd24ge1xuICAgICAgICAgICAgdG9wOiAtMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTNweCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgLmRlbGl2ZXJ5TG9jIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZGVsaXZlcnlMb2NhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubmF2Q2FyZXREb3duIHtcbiAgICAgICAgICAgIHRvcDogLTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLm1vYnNlYXJjaENhbGxlciBpbWd7XG4gICAgd2lkdGg6IDIxcHg7XG59XG4uZG93bmxvYWRBcHAgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG5cblxuLnJldmlld0NvbnRXcmFwcGVyT3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOiAwO2xlZnQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO3otaW5kZXg6IDEwMDE7ZGlzcGxheTpub25lO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtyaWdodDowO3RvcDowO3RleHQtYWxpZ246IGNlbnRlcjt6LWluZGV4OiAxMDAyO2Rpc3BsYXk6IG5vbmU7XG4gICAgaW1nLnJ2d0JhbkltZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAucmV2TGluZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5yZXZDb21tZW50IHsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJldkxpbmUgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMxMzhhZTY7XG4gICAgfVxuICAgIC5yZXZTdGFyV3JhcCBzdmcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmaWxsOiAjYzVjNWM1O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5yZXZTdGFyV3JhcCBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiAjZjkwO1xuICAgIH1cbiAgICAucmV2U3RhcldyYXAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuICAgIC5yZXZTdGFyV3JhcCBzcGFuLmFjdGl2ZSBzdmcge1xuICAgICAgICBmaWxsOiAjZjkwO1xuICAgIH1cbiAgICAucmV2U3RhcldyYXAgc3Bhbi5jbGlja2VkQWN0aXZlIHN2ZyB7XG4gICAgICAgIGZpbGw6ICNmOTA7XG4gICAgfVxuICAgIC5yZXZpZXdDb250Qm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5yZXZpZXdDb250SW5uZXIge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LWhlaWdodDogOTh2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAuY2xvc2VUaW1lU2xvdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDIwcHg7dG9wOiAxNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmV2aWV3Q29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7dGV4dC1hbGlnbjpsZWZ0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAudGltZVNsb3RIZWFkZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0NDQ7Zm9udC1zaXplOjE4cHg7cGFkZGluZzoxMHB4IDIwcHg7Zm9udC13ZWlnaHQ6IDUwMDtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aW1lU2xvdFBvc3RhbElucHV0SG9sZGVyIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzJTtcbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMzhhZTY7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWVTbG90UG9zdGFsSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGltZVNsb3RJbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO2ZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDNweCAxMXB4O2JvcmRlcjogMXB4ICNEREQgc29saWQ7Y29sb3I6ICM1NTU7Ym9yZGVyLXJhZGl1czogMTAwcHg7Zm9udC1zaXplOiAxNHB4O21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ym9yZGVyLWNvbG9yOiR0aGVtZUJsdWU7Y29sb3I6JHRoZW1lQmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6JHRoZW1lQmx1ZTtjb2xvcjojRkZGO2JvcmRlci1jb2xvcjokdGhlbWVCbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjIwcHg7cGFkZGluZy1yaWdodDoyMjBweDtcbiAgICAgICAgICAgICAgICBpbWcge3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDE1cHg7dG9wOiAzOHB4O2xlZnQ6IDM5cHg7b3BhY2l0eTogLjU7ei1pbmRleDogMTAwMDA7fVxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbklucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7d2lkdGg6IDEwMCU7aGVpZ2h0OiA1MHB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O2JvcmRlcjogMXB4ICNEREQgc29saWQ7dGV4dC1pbmRlbnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojQUFBO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdExvY2F0aW9uSW5wdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdldEdQUyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAyMHB4O2JhY2tncm91bmQ6ICNGQUZBRkE7aGVpZ2h0OiA1MHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTgwcHg7bGluZS1oZWlnaHQ6IDUwcHg7dG9wOiAyMHB4O2JvcmRlci1yYWRpdXM6IDEwMHB4O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzU1NTtmb250LXdlaWdodDogNTAwO2JvcmRlcjoxcHggI0RERCBzb2xpZDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Ym9yZGVyLWNvbG9yOiNCQkJ9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOi0xcHg7bWFyZ2luLXJpZ2h0OjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2xvdENvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wO3dpZHRoOjMzLjMzJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2xvdEl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O3RleHQtYWxpZ246IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7b3BhY2l0eTogLjc7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246YWxsIC4ycztib3JkZXI6MXB4ICNEREQgc29saWQ7cGFkZGluZzoxMHB4IDA7YmFja2dyb3VuZDojRUVFO21pbi1oZWlnaHQ6MTI1cHg7bWFyZ2luOjAgNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4Oy13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2xvdENvbC5hY3RpdmUge1xuICAgICAgICAgICAgLnNsb3RJdGVtIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkY7dHJhbnNmb3JtOiBzY2FsZSgxKTtib3JkZXItY29sb3I6IzJiOThlZDtvcGFjaXR5OiAxO2NvbG9yOiMyYjk4ZWQ7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuRXhXaWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmJ0bkdyb3VwIC5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubG9jU2VsZWN0b3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4ubG9jU2VsZWN0b3I6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG59XG4ubG9jU2VsZWN0b3IuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmxvY1NlbGVjdG9yOmhvdmVyIC5wbE5hbWUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzEzOGFlNjtcbn1cbi5sb2NTZWxlY3Rvci5hY3RpdmUgLnBsTmFtZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMTM4YWU2O1xufVxuLmxvY1NlbGVjdG9yOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbi5sb2NTZWxCb2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9jUGxJbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBsTmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5sb2NTZWxIZWFlciB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBjb2xvcjogIzY0NjQ2NDtcbn1cbi5sb2NTZWxlY3RlZE5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzhhZTY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEzOGFlNjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLnJld2FyZGhvbGRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjb2xvcjogIzJiOThlZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyYjk4ZWQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IHJnYmEoNDMsIDE1MiwgMjM3LCAwLjY2KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgfVxufVxuLnJld2FyZGhvbGRlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMzBweDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzJiOThlZDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjMmI5OGVkMDA7XG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCAjMmI5OGVkMDA7XG59IiwiaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4uaGVhZGVySW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmNWZiZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuODU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uaGVhZGVySW5mbyAub2ZmRGF5RGVjbGFyYXRpb24ge1xuICBjb2xvcjogI2E3MDAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5oZWFkZXJJbmZvIC5oZWFkZXJJbmZvQ2FsbEljb24ge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5oZWFkZXJJbmZvIC5hcHBTdG9yZUljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuLmhlYWRlckluZm8gLmRvd25sb2FkQXBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmhlYWRlckluZm8gLnRvcE5hdkJ1bGtPcmRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgY29sb3I6ICMxMzhhZTY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBib3JkZXI6IDFweCAjMTM4YWU2IHNvbGlkO1xufVxuLmhlYWRlckluZm8gLnRvcE5hdkJ1bGtPcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5oZWFkZXJOYXYgLmhlYWRlck1lbnVTbUxpbmtzSG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJOYXYgLmhlYWRlck1lbnVTbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyTmF2IC5oZWFkZXJNZW51U21DYXJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJOYXYgLmhlYWRlckxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA4MnB4O1xuICBtYXJnaW46IDRweCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5oZWFkZXJOYXYgLmhlYWRlckxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuaGVhZGVyTG9nbyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5oZWFkZXJOYXYgLm5hdlNlYXJjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDEzcHggMDtcbn1cbi5oZWFkZXJOYXYgLm5hdlNlYXJjaElubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXI6IDJweCAjZjJmMmYyIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlck5hdiBzZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzJiOThlZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0NXB4KTtcbn1cbi5oZWFkZXJOYXYgLm5hdlNlYXJjaElubmVyU2VsZWN0IHtcbiAgYmFja2dyb3VuZDogIzEzOGFlNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlck5hdiAubmF2U2VhcmNoSW5uZXJTZWxlY3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xuICB0b3A6IDIxcHg7XG59XG4uaGVhZGVyTmF2IC5uYXZTZWFyY2hUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCBpbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCBpbnB1dCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCBpbnB1dCB7XG4gICAgd2lkdGg6IDIxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyTmF2IC5uYXZTZWFyY2hUZXh0IGlucHV0IHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgfVxufVxuLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaGVhZGVyTmF2IC5uYXZTZWFyY2hJY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uaGVhZGVyTmF2IC5zZWFyY2hTdWJtaXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjk4ZWQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzUlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggIzRiYThmMCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi5oZWFkZXJOYXYgLnNlYXJjaFN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LWZvcndhcmQuc3ZnXCIpICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyTmF2IC5zZWFyY2hTdWJtaXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmhlYWRlck5hdiAubmF2UmlnaHQge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmhlYWRlck5hdiAubmF2UmlnaHQge1xuICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlck5hdiAubmF2UmlnaHQgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaGVhZGVyTmF2IC5uYXZDYXJ0IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyTmF2IC5uYXZDYXJ0IGEgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzEzOGFlNjtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHRvcDogLTE4cHg7XG4gIHJpZ2h0OiAtMnB4O1xufVxuLmhlYWRlck5hdiAubmF2Q2FydCBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhlYWRlck5hdiAubmF2QnV0dG9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmhlYWRlck5hdiAubmF2QnV0dG9ucyBhIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJOYXYgLm5hdkJ1dHRvbnMgYSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlck5hdiAubmF2QnV0dG9ucyBhIGxhYmVsIGltZyB7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIHRvcDogLTRweDtcbn1cbi5oZWFkZXJOYXYgLnVzZXJNZW51IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyTmF2IC51c2VyTWVudSAudXNlck1lbnVJbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDBweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5oZWFkZXJOYXYgLnVzZXJNZW51IC51c2VyTWVudUluID4gZGl2IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzEzOGFlNjtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDQ1cHg7XG59XG4uaGVhZGVyTmF2IC51c2VyTWVudSAudXNlck1lbnVJbiBzcGFuIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlck5hdiAudXNlck1lbnUgLnVzZXJNZW51SW46aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5oZWFkZXJOYXYgLnVzZXJNZW51IC51c2VyTWVudURyb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQ1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uaGVhZGVyTmF2IC51c2VyTWVudSAudXNlck1lbnVEcm9wIC51c2VyTWVudURyb3BJbiB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uaGVhZGVyTmF2IC51c2VyTWVudSAudXNlck1lbnVEcm9wIC51c2VyTWVudURyb3BJbiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLmhlYWRlck5hdiAudXNlck1lbnUgLnVzZXJNZW51RHJvcCAudXNlck1lbnVEcm9wSW4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG4uaGVhZGVyTmF2IC51c2VyTWVudTpob3ZlciAudXNlck1lbnVEcm9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyTmF2IC5kZWxpdmVyeUxvYyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuZGVsaXZlcnlMb2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uaGVhZGVyTmF2IC5kZWxpdmVyeUxvYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDFweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJhY2tncm91bmQ6ICNEREQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5oZWFkZXJOYXYgLmRlbGl2ZXJ5TG9jIC5kZWxpdmVyeUxvY0luIGRpdiB7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaGVhZGVyTmF2IC5kZWxpdmVyeUxvYyAuZGVsaXZlcnlMb2NJbiBkaXYgaW1nIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuLmhlYWRlck5hdiAuZGVsaXZlcnlMb2MgLmRlbGl2ZXJ5TG9jSW4gZGl2IC5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMjUyNTI1O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuZGVsaXZlcnlMb2MgLmRlbGl2ZXJ5TG9jSW4gZGl2IC5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbi5oZWFkZXJOYXYgLmRlbGl2ZXJ5TG9jIC5kZWxpdmVyeUxvY0luIGRpdiAuZGVsaXZlcnlMb2NhdGlvbiBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1haW5OYXYge1xuICBiYWNrZ3JvdW5kOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbk5hdiAubWFpbk5hdklubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbk5hdiAubWFpbk5hdklubmVyID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiAuaGVyb01lbnUge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlcjogM3B4ICMwMDAgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWFpbk5hdiAubWFpbk5hdklubmVyID4gZGl2IC5oZXJvTWVudSAuaGVyb01lbnVIZWFkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiAuaGVyb01lbnUgLmhlcm9NZW51Q29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tYWluTmF2IC5tYWluTmF2SW5uZXIgPiBkaXYgLmhlcm9NZW51IC5oZXJvTWVudUNvbnRlbnQgLmhlcm9JdGVtTGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4ubWFpbk5hdiAubWFpbk5hdklubmVyID4gZGl2IC5oZXJvTWVudSAuaGVyb01lbnVDb250ZW50IC5oZXJvSXRlbUxpbmsgLmhlcm9JdGVtSW1hZ2Uge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwO1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiAuaGVyb01lbnUgLmhlcm9NZW51Q29udGVudCAuaGVyb0l0ZW1MaW5rIC5oZXJvSXRlbU5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiAuaGVyb01lbnUgLmhlcm9NZW51Q29udGVudCAuaGVyb0l0ZW1MaW5rIC5oZXJvSXRlbUNvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdjpob3ZlciAuaGVyb01lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluTmF2IC5tYWluTmF2SW5uZXIgPiBkaXYgPiBhIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluTmF2IC5tYWluTmF2SW5uZXIgPiBkaXYgPiBhIHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgfVxufVxuLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuOTI7XG59XG5cbi5uYXZMb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogIzEzOGFlNjtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZMb2NhdGlvbiBpbWcge1xuICBoZWlnaHQ6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuLm5hdkxvY2F0aW9uIC5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgbWFyZ2luOiAwO1xufVxuLm5hdkxvY2F0aW9uIC5uYXZDYXJldERvd24ge1xuICBoZWlnaHQ6IDExcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuXG4ubW9iaWxlTWVudSB7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IC05MCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5tb2JpbGVNZW51IC5tbVVzZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLm1vYmlsZU1lbnUgLm1tVXNlciAubW1Vc2VySW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubW9iaWxlTWVudSAubW1Vc2VyIC5tbVVzZXJOYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMjtcbn1cbi5tb2JpbGVNZW51IC5tbVVzZXIgLm1tVXNlclZpZXdQcm9maWxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzg4ODtcbn1cbi5tb2JpbGVNZW51IC5tbVVzZXIgLmNsb3NlTW0ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLm1vYmlsZU1lbnUubW1TaG93biB7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vYmlsZU1lbnVPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlTWVudSAubmF2TG9jYXRpb24ge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2VlZjNmZjtcbiAgY29sb3I6ICMwMDA7XG59XG4ubW9iaWxlTWVudSAubmF2TG9jYXRpb24gaW1nIHtcbiAgZmlsdGVyOiBjb250cmFzdCgxLjc1KTtcbn1cbi5tb2JpbGVNZW51IC5tbUl0ZW1zIHtcbiAgcGFkZGluZzogMCAxJTtcbn1cbi5tb2JpbGVNZW51IC5tbUl0ZW1zIGRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIHdpZHRoOiA0OCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tb2JpbGVNZW51IC5tbUl0ZW1zIGRpdiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICBib3JkZXI6IDFweCAjZjFmMWYxIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW9iaWxlTWVudSAubW1JdGVtcyBkaXYgYSAubXlPcmRlckNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHggNnB4IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogIzNBRTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubW9iaWxlTWVudSAubW1Db250YWN0TnVtYmVycyB7XG4gIG1hcmdpbjogMCAtMnB4O1xufVxuLm1vYmlsZU1lbnUgLm1tQ29udGFjdE51bWJlcnMgLnJvdyB7XG4gIG1hcmdpbjogMCAtMTFweDtcbn1cbi5tb2JpbGVNZW51IC5tbUNvbnRhY3ROdW1iZXJzIC5jb2wtNiB7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLm1vYmlsZU1lbnUgLm1tQ29udGFjdE51bWJlcnMgYSB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vYmlsZU1lbnUgLm1tQ29udGFjdE51bWJlcnMgYSBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG4ubW9iaWxlTWVudSAudHVlc2RheURpc2NsYWltZXIge1xuICBjb2xvcjogI0YwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5tb2JpbGVNZW51IC5tZW51QXBwQmFkZ2VzSG9sZGVyIC5yb3cge1xuICBtYXJnaW46IDVweCAwO1xufVxuLm1vYmlsZU1lbnUgLm1lbnVBcHBCYWRnZXNIb2xkZXIgLmNvbC02IHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ubW9iaWxlTWVudSAubWVudUFwcEJhZGdlc0hvbGRlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubW9iaWxlTWVudSAubWVudUFwcEJhZGdlc0hvbGRlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvY2F0aW9uT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3RMb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDAyO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOTUlO1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5zZWxlY3RMb2NhdGlvbiAuc2VsZWN0TG9jYXRpb25Jbm5lciAuc2VsZWN0TG9jYXRpb25Db250ZW50IC5zZWxlY3RMb2NhdGlvbkhlYWRlciB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RMb2NhdGlvbiAuc2VsZWN0TG9jYXRpb25Jbm5lciAuc2VsZWN0TG9jYXRpb25Db250ZW50IC5zZWxlY3RMb2NhdGlvbkhlYWRlciAuY2xvc2VTZWxlY3RMb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTVweDtcbn1cbi5zZWxlY3RMb2NhdGlvbiAuc2VsZWN0TG9jYXRpb25Jbm5lciAuc2VsZWN0TG9jYXRpb25Db250ZW50IC5zZWxlY3RMb2NhdGlvbkhlYWRlciAuY2xvc2VTZWxlY3RMb2NhdGlvbiBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4IDExcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQgLnNlbGVjdExvY2F0aW9uQ2l0aWVzSG9sZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzEzOGFlNjtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMTM4YWU2O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjMTM4YWU2O1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIyMHB4O1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzhweDtcbiAgbGVmdDogMzlweDtcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5zZWxlY3RMb2NhdGlvbiAuc2VsZWN0TG9jYXRpb25Jbm5lciAuc2VsZWN0TG9jYXRpb25Db250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIC5sb2NhdGlvbklucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICB0ZXh0LWluZGVudDogNTBweDtcbn1cbi5zZWxlY3RMb2NhdGlvbiAuc2VsZWN0TG9jYXRpb25Jbm5lciAuc2VsZWN0TG9jYXRpb25Db250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIC5sb2NhdGlvbklucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjQUFBO1xufVxuLnNlbGVjdExvY2F0aW9uIC5zZWxlY3RMb2NhdGlvbklubmVyIC5zZWxlY3RMb2NhdGlvbkNvbnRlbnQgLnNlbGVjdExvY2F0aW9uSW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuZ2V0R1BTIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxODBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuZ2V0R1BTOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItY29sb3I6ICNCQkI7XG59XG4uc2VsZWN0TG9jYXRpb24gLnNlbGVjdExvY2F0aW9uSW5uZXIgLnNlbGVjdExvY2F0aW9uQ29udGVudCAuZ2V0R1BTIGltZyB7XG4gIGhlaWdodDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5oZWFkZXJTY3JvbGxlZCAuaGVhZGVySW5mbyB7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuLmhlYWRlclNjcm9sbGVkIC5oZWFkZXJJbmZvIC50b3BOYXZCdWxrT3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmhlYWRlclNjcm9sbGVkIC5oZWFkZXJOYXYge1xuICAvKnBvc2l0aW9uOiBmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNGRkY7ei1pbmRleDogNTE7Ki9cbiAgaGVpZ2h0OiA2NHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlclNjcm9sbGVkIC5oZWFkZXJOYXYge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4uaGVhZGVyU2Nyb2xsZWQgLmhlYWRlck5hdiAubmF2U2VhcmNoIHtcbiAgcGFkZGluZzogNHB4IDA7XG59XG4uaGVhZGVyU2Nyb2xsZWQgLmhlYWRlck5hdiAubmF2UmlnaHQge1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uaGVhZGVyU2Nyb2xsZWQgLmhlYWRlck5hdiAuaGVhZGVyTG9nbyBpbWcge1xuICBoZWlnaHQ6IDU2cHg7XG4gIG1hcmdpbjogNHB4IDA7XG59XG4uaGVhZGVyU2Nyb2xsZWQgLm1haW5OYXYge1xuICAvKnBvc2l0aW9uOiBmaXhlZDt0b3A6NjRweDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OiA1MDtib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLC41KTsqL1xuICBiYWNrZ3JvdW5kOiAjMTM4YWU2ICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyU2Nyb2xsZWQgLm1haW5OYXYgLm1haW5OYXZJbm5lciA+IGRpdiBhIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAuaGVhZGVyTmF2IC5mbG9hdC1sZWZ0IHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuZmxvYXQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTA1cHgpIHtcbiAgLmhlYWRlck5hdiAuZmxvYXQtbGVmdCAubmF2UmlnaHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTA1cHgpIHtcbiAgLmhlYWRlck5hdiAuZmxvYXQtcmlnaHQge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJOYXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuaGVhZGVyTmF2IC5uYXZTZWFyY2hJbm5lclNlbGVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuaGVhZGVyTWVudVNtTGlua3NIb2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOHB4O1xuICAgIHRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmhlYWRlck5hdiAuaGVhZGVyTWVudVNtTGlua3NIb2xkZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAuaGVhZGVyTmF2IC5oZWFkZXJNZW51U20ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEpO1xuICB9XG4gIC5oZWFkZXJOYXYgLmhlYWRlck1lbnVTbSBpbWcge1xuICAgIGhlaWdodDogMjFweDtcbiAgfVxuICAuaGVhZGVyTmF2IC5oZWFkZXJNZW51U21DYXJ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oZWFkZXJOYXYgLmhlYWRlck1lbnVTbUNhcnQgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDApO1xuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwKTtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gIH1cbiAgLmhlYWRlck5hdiAuaGVhZGVyTWVudVNtQ2FydCBzcGFuIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyTmF2IC5oZWFkZXJNZW51TG9jYXRpb24gaW1nIHtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gIH1cbiAgLmhlYWRlck5hdiAuaGVhZGVyTG9nbyBpbWcge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICAuaGVhZGVyTmF2IC5uYXZTZWFyY2hJbm5lclNlbGVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyTmF2IC5uYXZTZWFyY2gge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyTmF2IC5uYXZTZWFyY2gge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNDBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAubmF2U2VhcmNoVGV4dCBpbnB1dCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlck5hdiAuc2VhcmNoU3VibWl0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWFkZXJOYXYgLm5hdlJpZ2h0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICAuaGVhZGVyTmF2IC5uYXZSaWdodCAubmF2TG9jYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubmF2U2VhcmNoSW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLm5hdlNlYXJjaElubmVyIC5uYXZTZWFyY2hUZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubmF2TG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubmF2TG9jYXRpb24gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlckluZm8sIC5tYWluTmF2LCAubmF2UmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmdldEdQUyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sb2NhdGlvbklucHV0SG9sZGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyTG9nbyBpbWcge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG59XG4ubG9naW5Nb2RhbE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDAyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9naW5Nb2RhbCAubG1Jbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogLTQwdnc7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDQwdnc7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB6LWluZGV4OiAxMDAzO1xufVxuLmxvZ2luTW9kYWwgLmxtSW5uZXIgLmNsb3NlTE0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTVweDtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4ubG9naW5Nb2RhbCAubG1Jbm5lciAuY2xvc2VMTTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubG9naW5Nb2RhbCAubG1Jbm5lciAubG1JbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxvZ2luTW9kYWwgLmxtSW5uZXIgLmxtSW4gLmxtZmxJbWcge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmxvZ2luTW9kYWwubG1TaG93biAubG1Jbm5lciB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYnVsa09yZGVyT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idWxrT3JkZXJNb2RhbCAuYm9Jbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogLTQwdnc7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDQwdnc7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB6LWluZGV4OiAxMDA1O1xufVxuLmJ1bGtPcmRlck1vZGFsIC5ib0lubmVyIC5jbG9zZUJvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDU1cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgb3BhY2l0eTogMC44O1xufVxuLmJ1bGtPcmRlck1vZGFsIC5ib0lubmVyIC5jbG9zZUJvOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5idWxrT3JkZXJNb2RhbCAuYm9Jbm5lciAuYm9JbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYnVsa09yZGVyTW9kYWwgLmJvSW5uZXIgLmJvSW4gLmJvVG9wIHtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5idWxrT3JkZXJNb2RhbCAuYm9Jbm5lciAuYm9JbiAuYm9Cb3R0b20gLmJvSGVhZGVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uYnVsa09yZGVyTW9kYWwgLmJvSW5uZXIgLmJvSW4gLmJvQm90dG9tIC5ib0hlYWRlcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAycHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogNHB4O1xufVxuLmJ1bGtPcmRlck1vZGFsIC5idG4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDE3cHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ1bGtPcmRlck1vZGFsLmJvU2hvd24gLmJvSW5uZXIge1xuICByaWdodDogMDtcbn1cblxuLmNhcnRNb2RhbE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDA0O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC00MHZ3O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0MHZ3O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgei1pbmRleDogMTAwNTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FydE1vZGFsIC5jYXJ0SW5uZXIge1xuICAgIHJpZ2h0OiAtNTV2dztcbiAgICB3aWR0aDogNTV2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnRNb2RhbCAuY2FydElubmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IC04MHZ3O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB6LWluZGV4OiAxMDA1O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FydE1vZGFsIC5jYXJ0SW5uZXIge1xuICAgIHJpZ2h0OiAtOTB2dztcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNsb3NlQ2FydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1NXB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2xvc2VDYXJ0OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiB7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4ge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCAjRUVFIHNvbGlkO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0gLmNhcnRJdGVtSW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0gLmNhcnRJdGVtTmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0gLmNhcnRJdGVtVW5pdFByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbVVuaXRQcmljZSBzcGFuIHtcbiAgY29sb3I6ICM4YmMzNGE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5yZW1vdmVDYXJ0SXRlbSB7XG4gIGNvbG9yOiAjRjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIC5jYXJ0SXRlbSAuY2FydEl0ZW1QcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbVByaWNlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIC5jYXJ0SXRlbSAuY2FydEl0ZW1QcmljZSBzcGFuIHtcbiAgY29sb3I6ICM4YmMzNGE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbUNvdW50SG9sZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIC5jYXJ0SXRlbSAuY2FydEl0ZW1Db3VudEhvbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbUNvdW50SG9sZCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXI6IDFweCAjODg4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbUNvdW50SG9sZCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbUNvdW50SG9sZCBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlcjogMXB4ICM4ODggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0gLmNhcnRJdGVtQ291bnRIb2xkIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvcCAuY2FydEl0ZW0gLmNhcnRJdGVtQ291bnRIb2xkIGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIC5jYXJ0SXRlbSAuY2FydEl0ZW1Db3VudEhvbGQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4ICNBQUEgc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3Nzc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcbiAgLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3AgLmNhcnRJdGVtIC5jYXJ0SXRlbUNvdW50SG9sZCBpbnB1dCB7XG4gICAgd2lkdGg6IDU1cHg7XG4gIH1cbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG9wIC5jYXJ0SXRlbSAuY2FydEl0ZW1Db3VudEhvbGQgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM4ODg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydEJvdHRwb20ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvdCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY2FydFRvdCBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4ODg7XG4gIGNvbG9yOiAjMmI5OGVkO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3Qgc21hbGwuZGVsQ2gge1xuICBjb2xvcjogI2ZmM2IwMDtcbn1cbi5jYXJ0TW9kYWwgLmNhcnRJbm5lciAuY2FydEluIC5jYXJ0VG90IC5yZW1vdmVDb3Vwb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2IwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweCAwIDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmNhcnRNb2RhbCAuY2FydElubmVyIC5jYXJ0SW4gLmNhcnRUb3QgLnJlbW92ZUNvdXBvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZjNiMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjNiMDA7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY291cG9uSG9sZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG4uY2FydE1vZGFsIC5jYXJ0SW5uZXIgLmNhcnRJbiAuY291cG9uSG9sZGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJ0TW9kYWwuY2FydFNob3duIC5jYXJ0SW5uZXIge1xuICByaWdodDogMDtcbn1cblxuLmJ0bkNoZWNrb3V0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5idG5DaGVja291dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jYXJ0SXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICB9XG4gIC5jYXJ0SXRlbSAuY2FydEl0ZW1JbWFnZSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG4gIC5jYXJ0SXRlbSAuY2FydEl0ZW1Db3VudEhvbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmNhcnRJdGVtIC5jYXJ0SXRlbVByaWNlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNvdXBvbkhvbGRlciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luTW9kYWwgLmxtSW5uZXIge1xuICAgIHJpZ2h0OiAtMTAwdnc7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG4gIC5sb2dpbk1vZGFsIC5sbUlubmVyIC5sbUluIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgLmxvZ2luTW9kYWwgLmxtSW5uZXIgLmxtSW4gLmxtZmxJbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxvZ2luTW9kYWwgLmxtSW5uZXIgLmNsb3NlTE0ge1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn1cbi5lbXB0eV9jYXJ0X3dyYXAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVtcHR5X2NhcnRfd3JhcCBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5lbXB0eV9jYXJ0X3dyYXAgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM4NjhhOGM7XG59XG5cbi5uZy1hdXRvY29tcGxldGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgIWltcG9ydGFudDtcbn1cblxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkICFpbXBvcnRhbnQ7XG4gIHRleHQtaW5kZW50OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3Vwb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b21Ob3RlT25DYXJ0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjOWM5YzljO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmN1c3RvbU5vdGVPbkNhcnQgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5jb3Vwb25BcHBsaWVkSW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWFmZmUxO1xuICBib3JkZXI6IDFweCAjYWRkY2FkIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMDgwO1xuICBtYXJnaW46IDVweCAwO1xufVxuLmNvdXBvbkFwcGxpZWRJbmZvIHNtYWxsIHtcbiAgY29sb3I6ICMyYjk4ZWQ7XG59XG5cbi5oZWFkZXJ0b2RheWJ0biB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FydEl0ZW1zIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzUwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcnRJdGVtcyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJ0VG90IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuLmNhcnRCb3R0b20ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5zZWxlY3RBU2xvdCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4ICNFRUUgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VsZWN0QVNsb3QgLnNlbGVjdFNsb3RIZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWxlY3RBU2xvdCAuc2VsZWN0U2xvdEhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICNGMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2VsZWN0QVNsb3QgLnNsb3RIb2xkZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0QVNsb3QgLnNsb3RIb2xkZXIgLnNsb3RSb3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWxlY3RBU2xvdCAuc2xvdEhvbGRlciAuc2xvdFJvdyAuc2xvdENvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDI1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWxlY3RBU2xvdCAuc2xvdEhvbGRlciAuc2xvdFJvdyAuc2xvdENvbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLnNlbGVjdEFTbG90IC5zbG90SG9sZGVyIC5zbG90Um93IC5zbG90Q29sIC5zbG90SXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI0VFRTtcbiAgbWluLWhlaWdodDogMTI1cHg7XG4gIG1hcmdpbjogMCA1cHggMTBweDtcbn1cbi5zZWxlY3RBU2xvdCAuc2xvdEhvbGRlciAuc2xvdFJvdyAuc2xvdENvbCAuc2xvdEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuLnNlbGVjdEFTbG90IC5zbG90SG9sZGVyIC5zbG90Um93IC5zbG90Q29sIC5zbG90SXRlbSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4uc2VsZWN0QVNsb3QgLnNsb3RIb2xkZXIgLnNsb3RSb3cgLnNsb3RDb2wgLnNsb3RJdGVtIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNlbGVjdEFTbG90IC5zbG90SG9sZGVyIC5zbG90Um93IC5zbG90Q29sLmFjdGl2ZSAuc2xvdEl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3JkZXItY29sb3I6ICMyYjk4ZWQ7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMmI5OGVkO1xufVxuLnNlbGVjdEFTbG90IC5zbG90SG9sZGVyIC5zbG90Um93IC5zbG90Q29sLmFjdGl2ZSAuc2xvdEl0ZW0gaW1nIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG59XG5cbi5zZWxlY3RBU2xvdE1vZGFsIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lU2xvdE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDAxO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGltZVNsb3RXcmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLmNsb3NlVGltZVNsb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE1cHg7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC5jbG9zZVRpbWVTbG90IGltZyB7XG4gIGhlaWdodDogMTVweDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnRpbWVTbG90Q29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC50aW1lU2xvdEhlYWRlciB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC50aW1lU2xvdEhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MyU7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC50aW1lU2xvdFBvc3RhbElucHV0SG9sZGVyIC50aW1lU2xvdFBvc3RhbElucHV0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAyOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLnRpbWVTbG90SW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnRpbWVTbG90Q29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4IDExcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG4gIGNvbG9yOiAjMTM4YWU2O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIyMHB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM4cHg7XG4gIGxlZnQ6IDM5cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgei1pbmRleDogMTAwMDA7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5sb2NhdGlvbklucHV0SG9sZGVyIC5sb2NhdGlvbklucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjQUFBO1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5zZWxlY3RMb2NhdGlvbklucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAudGltZVNsb3RDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnRpbWVTbG90Q29udGVudCAuZ2V0R1BTOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItY29sb3I6ICNCQkI7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC50aW1lU2xvdENvbnRlbnQgLmdldEdQUyBpbWcge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAuc2xvdENvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDMzLjMzJSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRpbWVTbG90V3JhcHBlciAudGltZVNsb3RJbm5lciAuc2xvdENvbCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC5zbG90Q29sIC5zbG90SXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI0VFRTtcbiAgbWluLWhlaWdodDogMTI1cHg7XG4gIG1hcmdpbjogMCA1cHggMTBweDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnNsb3RDb2wgLnNsb3RJdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnNsb3RDb2wgLnNsb3RJdGVtIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnNsb3RDb2wgLnNsb3RJdGVtIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50aW1lU2xvdFdyYXBwZXIgLnRpbWVTbG90SW5uZXIgLnNsb3RDb2wuYWN0aXZlIC5zbG90SXRlbSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGJvcmRlci1jb2xvcjogIzJiOThlZDtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICMyYjk4ZWQ7XG59XG4udGltZVNsb3RXcmFwcGVyIC50aW1lU2xvdElubmVyIC5zbG90Q29sLmFjdGl2ZSAuc2xvdEl0ZW0gaW1nIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG59XG5cbi51c2VybWFudUN1c3RvbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzhhZTY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XG4gIGhlaWdodDogNDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXNlcm1hbnVDdXN0b20gLnVzZXJNZW51SW4ge1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcbn1cbi51c2VybWFudUN1c3RvbSAuYWNudEhvbGROYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTRweDtcbiAgY29sb3I6ICMxMzhhZTY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXZTZWFyY2hTbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdG9wOiA3MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5uYXZTZWFyY2hTbSAubmF2U2VhcmNoSW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhpZGVTZWFyY2hPbk1vYiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1M3B4KSAhaW1wb3J0YW50O1xuICB9XG4gIC5oaWRlU2VhcmNoT25Nb2IgLm5hdlNlYXJjaFRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpZGVTZWFyY2hPbk1vYiAuc2VhcmNoU3VibWl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlU2VhcmNoT25Nb2IgLmRlbGl2ZXJ5TG9jIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oaWRlU2VhcmNoT25Nb2IgLmRlbGl2ZXJ5TG9jOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpZGVTZWFyY2hPbk1vYiAubmF2Q2FyZXREb3duIHtcbiAgICB0b3A6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5oaWRlU2VhcmNoT25Nb2Ige1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTNweCkgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhpZGVTZWFyY2hPbk1vYiAuZGVsaXZlcnlMb2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZVNlYXJjaE9uTW9iIC5kZWxpdmVyeUxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZVNlYXJjaE9uTW9iIC5uYXZDYXJldERvd24ge1xuICAgIHRvcDogLTJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tb2JzZWFyY2hDYWxsZXIgaW1nIHtcbiAgd2lkdGg6IDIxcHg7XG59XG5cbi5kb3dubG9hZEFwcCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5yZXZpZXdDb250V3JhcHBlck92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDAxO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmV2aWV3Q29udFdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZXZpZXdDb250V3JhcHBlciBpbWcucnZ3QmFuSW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldkxpbmUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZDb21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZDb21tZW50OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2TGluZSBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzEzOGFlNjtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2U3RhcldyYXAgc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmlsbDogI2M1YzVjNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZTdGFyV3JhcCBzdmc6aG92ZXIge1xuICBmaWxsOiAjZjkwO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZTdGFyV3JhcCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2U3RhcldyYXAgc3Bhbi5hY3RpdmUgc3ZnIHtcbiAgZmlsbDogI2Y5MDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2U3RhcldyYXAgc3Bhbi5jbGlja2VkQWN0aXZlIHN2ZyB7XG4gIGZpbGw6ICNmOTA7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRCb2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5jbG9zZVRpbWVTbG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNXB4O1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLmNsb3NlVGltZVNsb3QgaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC50aW1lU2xvdEhlYWRlciB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90SGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC50aW1lU2xvdFBvc3RhbElucHV0SG9sZGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDMlO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMTM4YWU2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLnRpbWVTbG90UG9zdGFsSW5wdXRIb2xkZXIgLnRpbWVTbG90UG9zdGFsSW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC50aW1lU2xvdEltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHggMTFweDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAuc2VsZWN0TG9jYXRpb25DaXRpZXNIb2xkZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMTM4YWU2O1xuICBjb2xvcjogIzEzOGFlNjtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5zZWxlY3RMb2NhdGlvbkNpdGllc0hvbGRlciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzhhZTY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICMxMzhhZTY7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjIwcHg7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAubG9jYXRpb25JbnB1dEhvbGRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAzOHB4O1xuICBsZWZ0OiAzOXB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4ICNEREQgc29saWQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnJldmlld0NvbnRlbnQgLmxvY2F0aW9uSW5wdXRIb2xkZXIgLmxvY2F0aW9uSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNBQUE7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAucmV2aWV3Q29udGVudCAuc2VsZWN0TG9jYXRpb25JbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5nZXRHUFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggI0RERCBzb2xpZDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5nZXRHUFM6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI0JCQjtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5yZXZpZXdDb250ZW50IC5nZXRHUFMgaW1nIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbCAuc2xvdEl0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXI6IDFweCAjREREIHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNFRUU7XG4gIG1pbi1oZWlnaHQ6IDEyNXB4O1xuICBtYXJnaW46IDAgNXB4IDEwcHg7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbCAuc2xvdEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuLnJldmlld0NvbnRXcmFwcGVyIC5yZXZpZXdDb250SW5uZXIgLnNsb3RDb2wgLnNsb3RJdGVtIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sIC5zbG90SXRlbSBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucmV2aWV3Q29udFdyYXBwZXIgLnJldmlld0NvbnRJbm5lciAuc2xvdENvbC5hY3RpdmUgLnNsb3RJdGVtIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm9yZGVyLWNvbG9yOiAjMmI5OGVkO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzJiOThlZDtcbn1cbi5yZXZpZXdDb250V3JhcHBlciAucmV2aWV3Q29udElubmVyIC5zbG90Q29sLmFjdGl2ZSAuc2xvdEl0ZW0gaW1nIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG59XG5cbi5idG5FeFdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmJ0bkdyb3VwIC5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvY1NlbGVjdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmxvY1NlbGVjdG9yOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9jU2VsZWN0b3IuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9jU2VsZWN0b3I6aG92ZXIgLnBsTmFtZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG5cbi5sb2NTZWxlY3Rvci5hY3RpdmUgLnBsTmFtZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxMzhhZTY7XG59XG5cbi5sb2NTZWxlY3RvcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubG9jU2VsQm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvY1BsSW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBsTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM5MDkwOTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sb2NTZWxIZWFlciB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBjb2xvcjogIzY0NjQ2NDtcbn1cblxuLmxvY1NlbGVjdGVkTmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzhhZTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzhhZTY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZGVsaXZlcnlMb2NhdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucmV3YXJkaG9sZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDcwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzJiOThlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzJiOThlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggcmdiYSg0MywgMTUyLCAyMzcsIDAuNjYpO1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnJld2FyZGhvbGRlcjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi5yZXdhcmRob2xkZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzJiOThlZDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICMyYjk4ZWQwMDtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCAjMmI5OGVkMDA7XG59Il19 */");

                /***/
            }),

        /***/
        "./src/app/core/header/header.component.ts":
            /*!*************************************************!*\
              !*** ./src/app/core/header/header.component.ts ***!
              \*************************************************/
            /*! exports provided: HeaderComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() {
                    return HeaderComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/login-registration.service */ "./src/app/services/login-registration.service.ts");
                /* harmony import */
                var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/category.service */ "./src/app/services/category.service.ts");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _services_cart_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../services/cart-service.service */ "./src/app/services/cart-service.service.ts");
                /* harmony import */
                var _services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../services/location.service */ "./src/app/services/location.service.ts");
                /* harmony import */
                var _services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../services/message.service */ "./src/app/services/message.service.ts");
                /* harmony import */
                var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












                var HeaderComponent = /** @class */ (function() {
                    //if (orderNumber != '' || orderNumber!=undefined) {
                    function HeaderComponent(platformId, auth, spinnerService, categoryService, router, activeRouter, cart, location, msgService, cookieService) {
                        var _this = this;
                        this.platformId = platformId;
                        this.auth = auth;
                        this.spinnerService = spinnerService;
                        this.categoryService = categoryService;
                        this.router = router;
                        this.activeRouter = activeRouter;
                        this.cart = cart;
                        this.location = location;
                        this.msgService = msgService;
                        this.cookieService = cookieService;
                        this.loggedIn = false;
                        this.userId = null;
                        this.coupon_code = '';
                        this.couponPrice = 0;
                        this.cartData = [];
                        this.finalPrice = 0;
                        this.totalItems = 0;
                        this.shippingCost = 0;
                        this.selectCurrentAddress = 'Search Location';
                        this.keyword = 'code';
                        this.errorText = false;
                        this.showCart = true;
                        this.pageStatus = 'otp';
                        this.updateDisabled = false;
                        this.newProfileName = '';
                        this.deliveryChargeMsg = '';
                        this.referralCode = '';
                        this.referralCodeWithMessage = '';
                        this.myDatePickerOptions = {
                            // other options...
                            dateFormat: 'dd/mm/yyyy',
                            //disableDateRanges:[{begin: {year: 1971, month: 1, day: 1}, end: {year: this.paymentDateObj.getFullYear(), month: this.paymentDateObj.getMonth() + 1, day: this.paymentDateObj.getDate()}}],
                            /*disableDays:[
                             {year: 2019, month: 1, day: 24},
                             {year: 2019, month: 1, day: 25}
                             ],*/
                            disableWeekends: false,
                        };
                        this.defaultLocation = {
                            code: "110016",
                            country_name: "India",
                            country_code: "IND",
                            state_title: "Delhi",
                            zone_name: "Delhi (South)",
                            cod: 0,
                            title: "GREEN PARK MARKET",
                            code_new: "110016 ( GREEN PARK MARKET ) "
                        };
                        this.defaultLocationTwo = {
                            code: "700086",
                            code_new: "700086",
                            country_name: "India",
                            country_code: "IND",
                            state_title: "West Bengal",
                            zone_name: "Noida (S & N)",
                            cod: 1,
                            title: ""
                        };
                        this.slots = [];
                        this.groceryMinAmount = 599;
                        this.search = {
                            "category": "all",
                            "productName": ""
                        };
                        router.events.subscribe(function(event) {
                            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                                if (event.url === '/payment') {
                                    _this.showCart = false;
                                } else {
                                    _this.showCart = true;
                                }
                                if (event.url == '/delivery-summary' || event.url == '/checkout-address' || event.url == '/payment' || event.url == '/order-placed' || event.url == '/' || event.url == '/home') {
                                    _this.search = {
                                        "category": "all",
                                        "productName": ""
                                    };
                                }
                                ////////  New Eplement for slot modal
                                if (event.url === '/' || event.url === '/home') {
                                    // this.cookieValue = this.cookieService.get('modalValue');
                                    // if(this.cookieValue)
                                    // {
                                    // }
                                    // $(".timeSlotOverlay").fadeIn(200);
                                    // $("body").addClass("noScroll");
                                    // $(".timeSlotWrapper").slideDown();
                                    // if($(".timeSlotWrapper").slideDown())
                                    // {
                                    //   this.cookieService.set( 'modalValue', 'true' );
                                    // }
                                    // $(".closeTimeSlot").click(function(){
                                    //   $(".timeSlotOverlay").fadeOut(200);
                                    //   $("body").removeClass("noScroll");
                                    //   $(".timeSlotWrapper").slideUp();
                                    // })
                                    // $(".timeSlotOverlay").click(function(){
                                    //   $(this).fadeOut(200);
                                    //   $("body").removeClass("noScroll");
                                    //   $(".timeSlotWrapper").slideUp();
                                    // })
                                    if ((localStorage.getItem("postal_code") != null)) {
                                        console.log(_this.showPostalCode);
                                        _this.deliverySlots(_this.showPostalCode);
                                    }
                                }
                                ////// End
                                if (event.url == '/' || event.url == '/home') {
                                    if ((localStorage.getItem("closeRegion") == null)) {
                                        // this.regionCaller(); // 29.01.21
                                    }
                                }
                            }
                        });
                        this.showPostalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        if (localStorage.getItem('profilePicture') != null) {
                            this.profileImgPreview = localStorage.getItem('profilePicture');
                        }
                        if (this.loggedIn == true) {
                            this.getLoginUserDetails();
                        }
                        /////// This Area for COD option open or not /////////////
                        this.settingObj = JSON.parse(localStorage.getItem("settingObj"));
                        if (this.settingObj) {
                            if (this.minCodAmount > this.finalPrice) {
                                if (this.settingObj != null)
                                    this.settingObj.cod = 0;
                                // this.needAmountForFreeDelivery = (this.minCodAmount - (this.totalPrice + this.shippingCost));
                                this.needAmountForFreeDelivery = (this.minCodAmount - (this.totalPrice));
                                //percentageNeedAmountForFreeDelivery
                            } else {
                                if (this.settingObj != null)
                                    this.settingObj.cod = 1;
                            }
                        }
                        //else
                        //{
                        //  this.settingObj.cod = 1;
                        //}
                        ////// This Area For Bulk Order //////////
                        this.generate_otp = {
                            phone: ''
                        };
                        this.bulkOrderObj = {
                            phone: '',
                            otp: '',
                            product_name: '',
                            quantity: 10,
                            delivery_date: null
                        };
                        /// This Code update for urgent purpose, need to comment this code
                        if (localStorage.getItem("postal_code") == '' || localStorage.getItem("postal_code") == undefined || localStorage.getItem("postal_code") == null) {
                            this.selectEvent(this.defaultLocation);
                        }
                        //// For Localstorage  ///////
                        if (localStorage.getItem('region') == null) {
                            localStorage.setItem('region', '1');
                            this.siteRegion = localStorage.getItem('region');
                            // this.selectEvent(this.defaultLocation);
                        }
                        if (localStorage.getItem('region') != null) {
                            this.siteRegion = localStorage.getItem('region');
                        }
                        //// For cookie ///////
                        // if(this.cookieService.get('region')==null ||  this.cookieService.get('region')=='') {
                        //   this.cookieService.set('region', '1', null, null, null, null, null);
                        //   //this.siteRegion = localStorage.getItem('region');
                        //   this.siteRegionCookie = this.cookieService.get('region');
                        //   this.selectEvent(this.defaultLocation);
                        // }
                        // if( this.cookieService.get('region')!=null ||  this.cookieService.get('region')!='') {
                        //   //this.siteRegion = localStorage.getItem('region');
                        //   this.siteRegionCookie = this.cookieService.get('region');
                        // }
                    }
                    HeaderComponent.prototype.ngOnInit = function() {
                        //this.givingRevFunction();
                        var _this = this;
                        this.getSettingData();
                        if (this.auth.isAuthenticated()) {
                            this.loggedIn = true;
                            this.userId = this.auth.user();
                            this.userToken = this.auth.getToken();
                            // alert("here");
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
                        this.auth.watchProfilePicture().subscribe(function(value) {
                            _this.profileImgPreview = localStorage.setItem('profilePicture', value);
                            if (localStorage.getItem('profilePicture')) {
                                _this.profileImgPreview = localStorage.getItem('profilePicture');
                            }
                            // this.profileImgPreview = value;
                        });
                        if (localStorage.getItem('profilePicture') != null) {
                            this.profileImgPreview = localStorage.getItem('profilePicture');
                        }
                        this.auth.watchPostalCode().subscribe(function(value) {
                            _this.showPostalCode = value;
                            _this.location.getPinSearch(_this.showPostalCode).then(function(response) {
                                var result = response;
                                if (result.success == true) {
                                    var newArea = localStorage.getItem("selectCurrentAddress");
                                    _this.selectCurrentAddress = (result.data[0].title != null) ? newArea : result.data[0].zone_name + ', ' + result.data[0].state_title;
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        });
                        var token = '';
                        if (this.userToken != null && this.userToken != 'null') {
                            token = this.userToken;
                        } else {
                            token = localStorage.getItem("cartToken");
                        }
                        //alert(token);
                        this.cart.cartAllProduct(token);
                        this.cart.watch().subscribe(function(data) {
                            _this.cartData = data.cartContent;
                            _this.totalPrice = data.totalPrice;
                            _this.totalItems = data.totalProductItemInCart;
                            _this.shippingCost = data.shippingCost;
                            _this.couponPrice = data.coupon_price;
                            _this.finalPrice = data.finalPrice;
                            _this.apply_coupon_code = data.coupon_code;
                            _this.coupon_code = data.coupon_code;
                            _this.userWalletAmount = data.userWalletAmount;
                            _this.deliveryChargeMsg = data.deliveryChargeMsg;
                            _this.gloceryFlag = data.groceryFlag;
                            if (_this.loggedIn == true) {
                                _this.getLoginUserDetails();
                            }
                            /////// This Area for COD option open or not /////////////
                            if (_this.minCodAmount > _this.finalPrice) {
                                if (_this.settingObj != null)
                                    _this.settingObj.cod = 0;
                                //this.needAmountForFreeDelivery = (this.minCodAmount - (this.totalPrice + this.shippingCost));
                                _this.needAmountForFreeDelivery = (_this.minCodAmount - (_this.totalPrice));
                            }
                            //else
                            //{
                            //  this.settingObj.cod = 1;
                            //}
                            if (_this.cartData.length > 0) {
                                _this.regionId = _this.cartData[0].region_id;
                            }
                        });
                        console.log('kkkkk', this.cartData.length);
                        this.getCategoryData();
                        this.getCategoryMenuData();
                        if (localStorage.getItem("postal_code") == undefined || localStorage.getItem("postal_code") == '') {
                            /*$(".locationOverlay").fadeIn(200);
                            $("body").addClass("noScroll");
                            $(".selectLocation").slideDown();*/
                        } else {
                            //alert("here");
                            this.selectCurrentAddress = localStorage.getItem("selectCurrentAddress");
                            //console.log(this.selectCurrentAddress);
                        }
                        this.location.watch().subscribe(function(value) {
                            _this.selectCurrentAddress = localStorage.getItem("selectCurrentAddress");
                        });
                        // $("#timeSlotOpen").click(function(){
                        //   $(".timeSlotOverlay").fadeIn(200);
                        //   $("body").addClass("noScroll");
                        //   $(".timeSlotWrapper").slideDown();
                        // });
                        // $(".timeSlotOverlay").fadeIn(200);
                        // $("body").addClass("noScroll");
                        // $(".timeSlotWrapper").slideDown();
                        // $(".closeTimeSlot").click(function(){
                        //   $(".timeSlotOverlay").fadeOut(200);
                        //   $("body").removeClass("noScroll");
                        //   $(".timeSlotWrapper").slideUp();
                        // })
                        // $(".timeSlotOverlay").click(function(){
                        //   $(this).fadeOut(200);
                        //   $("body").removeClass("noScroll");
                        //   $(".timeSlotWrapper").slideUp();
                        // })
                        // $(".openDeliveryCaller").click(function(){
                        //   alert("here")
                        //  $(".DeliveryAvailableModalOverlay").fadeIn(200);
                        //  $("body").addClass("noScroll");
                        //  $(".DeliveryAvailableModal").slideDown();
                        // });
                        // $(".DeliveryAvail").click(function(){
                        //   $(".DeliveryAvailableModalOverlay").fadeOut(200);
                        //   $("body").removeClass("noScroll");
                        //   $(".DeliveryAvailableModal").slideUp();
                        // });
                        // $(".DeliveryAvailableModalOverlay").click(function(){
                        //   $(this).fadeOut(200);
                        //   $("body").removeClass("noScroll");
                        //   $(".DeliveryAvailableModal").slideUp();
                        // })
                    };
                    HeaderComponent.prototype.logout = function() {
                        var _this = this;
                        this.spinnerService.show();
                        this.auth.getLogout()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    _this.auth.logout();
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Log out', 'You are logged out', 'Ok');
                                    localStorage.removeItem("slot_id");
                                    localStorage.removeItem("cartSelectedAddressId");
                                    localStorage.removeItem("cartSelectedPincode");
                                    localStorage.removeItem("orderNumber");
                                    localStorage.removeItem("oldOrderNumber");
                                    localStorage.removeItem("postal_code");
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("new_delivery_date");
                                    localStorage.removeItem("userName");
                                    localStorage.removeItem("profilePicture");
                                    _this.cart.cartAllProduct(localStorage.getItem("cartToken"));
                                    _this.cart.watch().subscribe(function(data) {
                                        _this.cartData = data.cartContent;
                                        _this.totalPrice = data.totalPrice;
                                        _this.totalItems = data.totalProductItemInCart;
                                        _this.shippingCost = data.shippingCost;
                                    });
                                } else if (response.success == false) {
                                    localStorage.removeItem("slot_id");
                                    localStorage.removeItem("cartSelectedAddressId");
                                    localStorage.removeItem("cartSelectedPincode");
                                    localStorage.removeItem("orderNumber");
                                    localStorage.removeItem("oldOrderNumber");
                                    localStorage.removeItem("postal_code");
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("new_delivery_date");
                                    localStorage.removeItem("userName");
                                    localStorage.removeItem("profilePicture");
                                    _this.cart.cartAllProduct(localStorage.getItem("cartToken"));
                                    _this.cart.watch().subscribe(function(data) {
                                        _this.cartData = data.cartContent;
                                        _this.totalPrice = data.totalPrice;
                                        _this.totalItems = data.totalProductItemInCart;
                                        _this.shippingCost = data.shippingCost;
                                    });
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    HeaderComponent.prototype.getCategoryMenuData = function() {
                        var _this = this;
                        this.spinnerService.show();
                        //noinspection TypeScriptValidateTypes
                        this.categoryService.getCategoryMenuData().then(function(response) {
                            var result = response;
                            if (result.success == true) {
                                _this.categoriesMenu = result.data.categories;
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.removeCartItem = function(productId, productCuttingOptionId) {
                        var _this = this;
                        this.spinnerService.show();
                        var result = confirm("Are you sure you want to remove product from cart?");
                        if (result) {
                            //Logic to delete the item
                            this.cart.removeCart(productId, productCuttingOptionId).then(function(response) {
                                var result = response;
                                _this.cart.cartBroadCastTypeOne(result);
                                _this.msgService.removeCartMessage();
                                _this.spinnerService.hide();
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        } else {
                            this.spinnerService.hide();
                        }
                    };
                    HeaderComponent.prototype.quantityUpdate = function(productId, productCuttingOptionId, quantity, type, index) {
                        var _this = this;
                        this.spinnerService.show();
                        this.updateDisabled = true;
                        if (type == 1) {
                            quantity = parseInt(quantity) + 1;
                        }
                        if (type == 0) {
                            quantity = parseInt(quantity) - 1;
                            if (quantity <= 0) {
                                quantity = 1;
                            }
                        }
                        this.cartData[index].quantity = quantity;
                        if (type == 3) {
                            if ((isNaN(quantity) || quantity == "")) {
                                this.msgService.errMessage('Error', 'Please enter valid quantity', 'Ok');
                                this.spinnerService.hide();
                                quantity = 1;
                                this.cartData[index].quantity = quantity;
                            }
                            if (quantity < 0 || quantity == 0) {
                                quantity = 1;
                                this.cartData[index].quantity = quantity;
                            } else {
                                this.cartData[index].quantity = parseInt(quantity);
                            }
                        }
                        if (quantity > 1000 || quantity == 1001) {
                            this.msgService.errMessage('Error', 'Maximum one thousand quantity to add the shopping cart.', 'Ok');
                            quantity = 1000;
                            this.cartData[index].quantity = quantity;
                        }
                        //noinspection TypeScriptValidateTypes
                        this.cart.updateCartQuantity(productId, productCuttingOptionId, quantity).then(function(response) {
                            var result = response;
                            // console.log(result)
                            /////// This Area for COD option open or not /////////////
                            _this.settingObj = JSON.parse(localStorage.getItem("settingObj"));
                            if (_this.settingObj) {
                                if (_this.minCodAmount > result.finalPrice) {
                                    if (_this.settingObj != null)
                                        _this.settingObj.cod = 0;
                                    // this.needAmountForFreeDelivery = (this.minCodAmount - (this.totalPrice + this.shippingCost));
                                    _this.needAmountForFreeDelivery = (_this.minCodAmount - (result.totalPrice));
                                    //percentageNeedAmountForFreeDelivery
                                } else {
                                    if (_this.settingObj != null)
                                        _this.settingObj.cod = 1;
                                }
                            }
                            _this.cart.cartBroadCastTypeOne(result);
                            _this.updateDisabled = false;
                            //this.spinnerService.hide();
                        }).catch(function(error) {
                            return console.error(error);
                        });
                        // this.spinnerService.hide();
                    };
                    HeaderComponent.prototype.getCategoryData = function() {
                        var _this = this;
                        this.spinnerService.show();
                        //noinspection TypeScriptValidateTypes
                        this.categoryService.getCategoryData().then(function(response) {
                            var result = response;
                            if (result.success == true) {
                                _this.categories = result.categories;
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.getLocationData = function() {
                        var _this = this;
                        this.spinnerService.show();
                        //noinspection TypeScriptValidateTypes
                        this.location.getPosition().then(function(response) {
                            var result = response;
                            _this.getAddressData(result.lat, result.lng);
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.getAddressData = function(lat, long) {
                        var _this = this;
                        //noinspection TypeScriptValidateTypes
                        this.location.getAddressData(lat, long).then(function(response) {
                            var result = response;
                            if (result.results[0].components.postcode != undefined) {
                                _this.spinnerService.show();
                                _this.location.getPinSearch(result.results[0].components.postcode).then(function(response) {
                                    var resultNew = response;
                                    if (resultNew.success == true) {
                                        localStorage.setItem("postal_code", resultNew.data[0].code);
                                        localStorage.setItem("selectCurrentAddress", resultNew.data[0].zone_name + ', ' + resultNew.data[0].state_title);
                                        var domain = "alatrading.in";
                                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(_this.platformId)) {
                                            domain = window.location.hostname;
                                            if (domain == "www.alatrading.in") {
                                                domain = "alatrading.in";
                                            }
                                        }
                                        _this.cookieService.set("postal_code", resultNew.data[0].code, (new Date().getTime() + 3600 * 24 * 365), "/", domain);
                                        _this.cookieService.set("postal_code", resultNew.data[0].zone_name + ', ' + resultNew.data[0].state_title, (new Date().getTime() + 3600 * 24 * 365), "/", domain);
                                        _this.pinCodeCurrent = result.results[0].components.postcode;
                                        _this.errorText = false;
                                        _this.spinnerService.hide();
                                        if (_this.router.url != '/delivery-summary' && _this.router.url != '/checkout-address' && _this.router.url != '/payment' && _this.router.url != '/order-placed' && _this.router.url != '/account') {
                                            location.reload();
                                        }
                                    } else if (resultNew.success == false) {
                                        _this.errorText = true;
                                        _this.data = [];
                                        _this.pinCodeCurrent = result.results[0].components.postcode;
                                        _this.spinnerService.hide();
                                    } else {
                                        _this.errorText = true;
                                        _this.data = [];
                                        _this.spinnerService.hide();
                                    }
                                }).catch(function(error) {
                                    return console.error(error);
                                });
                            } else {
                                _this.errorText = true;
                                _this.data = [];
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.fetchCurrentLocation = function() {
                        this.getLocationData();
                    };
                    HeaderComponent.prototype.selectEvent = function(item) {
                        var _this = this;
                        if (this.router.url === '/delivery-summary' || this.router.url === '/checkout-address' || this.router.url === '/payment') {
                            this.msgService.errMessage('Error', 'You have not permission to set postal code', 'Ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.errorText = false;
                        localStorage.setItem("postal_code", item.code);
                        var domain = "alatrading.in";
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(this.platformId)) {
                            domain = window.location.hostname;
                            if (domain == "www.alatrading.in") {
                                domain = "alatrading.in";
                            }
                        }
                        this.cookieService.set("postal_code", item.code, (new Date().getTime() + 3600 * 24 * 365), "/", domain);
                        //// new code 15.05.20
                        var zone_area = '';
                        if (item.title) {
                            zone_area = item.title;
                        } else
                            zone_area = item.zone_name;
                        localStorage.setItem("selectCurrentAddress", zone_area + ', ' + item.state_title);
                        this.selectCurrentAddress = item.zone_name + ', ' + item.state_title;
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(this.platformId)) {
                            $(".locationOverlay").fadeOut(200);
                            $("body").removeClass("noScroll");
                            $(".selectLocation").slideUp();
                        }
                        var locationData = {
                            postal_code: item.code,
                            address: this.selectCurrentAddress
                        };
                        this.location.setLocation(locationData);
                        //// Cart data shipping charge update //////
                        var token = '';
                        if (this.userToken != null && this.userToken != 'null') {
                            token = this.userToken;
                        } else {
                            token = localStorage.getItem("cartToken");
                        }
                        this.cart.cartAllProduct(token);
                        this.cart.watch().subscribe(function(data) {
                            _this.cartData = data.cartContent;
                            _this.totalPrice = data.totalPrice;
                            //this.totalItems = this.cartData.length;
                            _this.totalItems = data.totalProductItemInCart;
                            //this.totalItems = data.totalItemQuantity;
                            _this.shippingCost = data.shippingCost;
                            _this.couponPrice = data.coupon_price;
                            _this.finalPrice = data.finalPrice;
                            _this.apply_coupon_code = data.coupon_code;
                            _this.coupon_code = data.coupon_code;
                            _this.userWalletAmount = data.userWalletAmount;
                            // if(this.router.url != '/delivery-summary' && this.router.url != '/checkout-address' && this.router.url != '/payment' && this.router.url != '/order-placed' &&  this.router.url != '/account') {
                            //   if (isPlatformBrowser(this.platformId)) {
                            //     location.reload();
                            //   }
                            if (_this.router.url != '/delivery-summary' && _this.router.url != '/checkout-address' && _this.router.url != '/payment' && _this.router.url != '/order-placed') {
                                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(_this.platformId)) {
                                    location.reload();
                                }
                            }
                            if (_this.minCodAmount > _this.finalPrice) {
                                if (_this.settingObj != null)
                                    _this.settingObj.cod = 0;
                                _this.needAmountForFreeDelivery = (_this.minCodAmount - (_this.totalPrice));
                            } else {
                                if (_this.settingObj != null)
                                    _this.settingObj.cod = 1;
                            }
                        });
                    };
                    HeaderComponent.prototype.onChangeSearch = function(val) {
                        var _this = this;
                        //alert(val);
                        if (val != '') {
                            this.spinnerService.show();
                            this.location.getPinSearch(val).then(function(response) {
                                var result = response;
                                if (result.success == true) {
                                    // Modified for onblur postal code select
                                    if (result.data.length == 1 && val.length == 6) {
                                        _this.selectEvent(result.data[0]);
                                    }
                                    /// End
                                    _this.data = result.data;
                                    _this.errorText = false;
                                    _this.spinnerService.hide();
                                } else if (result.success == false) {
                                    _this.errorText = true;
                                    _this.data = [];
                                    _this.spinnerService.hide();
                                } else {
                                    _this.errorText = true;
                                    _this.data = [];
                                    _this.spinnerService.hide();
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        } else {
                            this.data = [];
                            this.errorText = false;
                        }
                    };
                    HeaderComponent.prototype.closeLocationModal = function() {
                        this.data = [];
                        this.pinCodeCurrent = '';
                        this.errorText = false;
                    };
                    HeaderComponent.prototype.onFocused = function(e) {
                        // do something when input is focused
                    };
                    HeaderComponent.prototype.applyCouponCode = function(type) {
                        var _this = this;
                        var coupon = '';
                        switch (type) {
                            case 0:
                                coupon = 'NO';
                                this.coupon_code = '';
                                break;
                            case 1:
                                if (this.coupon_code == '' || this.coupon_code == undefined) {
                                    coupon = 'NO';
                                } else {
                                    coupon = this.coupon_code;
                                }
                                break;
                        }
                        if (this.loggedIn) {
                            this.spinnerService.show();
                            this.cart.addCouponInCart(coupon, this.userId).then(function(response) {
                                var result = response;
                                if (result.data.success == true) {
                                    if (result.data.coupon_code == '' && type != 0) {
                                        _this.msgService.errMessage('Error', 'Please apply valid coupon code', 'Ok');
                                    }
                                    _this.cart.cartBroadCastTypeOne(result.data);
                                    _this.spinnerService.hide();
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        } else {
                            this.spinnerService.show();
                            this.cart.addCouponInCart(coupon, null).then(function(response) {
                                var result = response;
                                if (result.data.success == true) {
                                    if (result.data.coupon_code == '' && type != 0) {
                                        _this.msgService.errMessage('Error', 'Please apply valid coupon code', 'Ok');
                                    }
                                    _this.cart.cartBroadCastTypeTwo(result);
                                    _this.spinnerService.hide();
                                }
                            }).catch(function(error) {
                                return console.error(error);
                            });
                        }
                    };
                    HeaderComponent.prototype.submitSearchForm = function() {
                        if (this.search.category != '' && this.search.productName != '') {
                            var productName = btoa(unescape(encodeURIComponent(this.search.productName)));
                            this.router.navigateByUrl('/products/' + this.search.category + '/' + productName);
                        } else if (this.search.category != '') {
                            this.router.navigateByUrl('/products/' + this.search.category);
                        }
                    };
                    HeaderComponent.prototype.getLoginUserDetails = function() {
                        var _this = this;
                        this.spinnerService.show();
                        this.auth.getLoginUserDetails().then(function(resJson) {
                            var result = resJson;
                            if (result.success == true) {
                                _this.profileImgPreview = result.data.image;
                                _this.newProfileName = result.data.name;
                                _this.referralCode = result.data.referral_code;
                                _this.referralCodeWithMessage = "Get a discount for first-time order by using code - " + _this.referralCode + " on registration. Place an order from https://bit.ly/3bRC50n or from our mobile App (Android - https://rb.gy/3hqtan or IOS - https://rb.gy/1bml3e)";
                                console.log(result);
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.getSettingData = function() {
                        var _this = this;
                        this.cart.getSettingData().then(function(resJson) {
                            var result = resJson;
                            if (result.success == "true") {
                                localStorage.setItem('settingObj', JSON.stringify(result.setting));
                                _this.settingObj = result.setting;
                                _this.minCodAmount = _this.settingObj.cod_min_amount;
                                _this.spinnerService.hide();
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    HeaderComponent.prototype.searchProductNav = function(slug) {
                        this.search.category = slug;
                        this.router.navigateByUrl('/products/' + slug);
                    };
                    HeaderComponent.prototype.openBulkOrder = function() {
                        // alert("here");
                    };
                    HeaderComponent.prototype.dismissBulkOrder = function() {
                        this.generate_otp = {
                            phone: ''
                        };
                        this.bulkOrderObj = {
                            phone: '',
                            product_name: '',
                            quantity: 10,
                            delivery_date: null
                        };
                        this.pageStatus = "otp";
                    };
                    HeaderComponent.prototype.submitGenerateOtpForm = function() {
                        var _this = this;
                        if ((isNaN(this.generate_otp.phone) || this.generate_otp.phone == "")) {
                            this.msgService.errMessage('Error', 'Please enter your phone number', 'ok');
                            return false;
                        }
                        if (this.generate_otp.phone.length < 10) {
                            this.msgService.errMessage('Error', 'Please enter correct phone number', 'ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.auth.generateBulkOtp(this.generate_otp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    _this.spinnerService.hide();
                                    _this.msgService.successMessage('OTP', 'OTP has been sent successfully. Please check your phone.', 'ok');
                                    _this.bulkOrderObj.phone = _this.generate_otp.phone;
                                    _this.apiOtp = response.otp;
                                    _this.pageStatus = "verifyOtp";
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', 'Please enter your valid phone.', 'ok');
                                    return false;
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    HeaderComponent.prototype.submitOtp = function() {
                        if ((isNaN(this.bulkOrderObj.phone) || this.bulkOrderObj.phone == "")) {
                            this.msgService.errMessage('Error', 'Please enter your phone number', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.phone.length < 10) {
                            this.msgService.errMessage('Error', 'Please enter correct phone number', 'ok');
                            return false;
                        }
                        if ((isNaN(this.bulkOrderObj.otp) || this.bulkOrderObj.otp == "")) {
                            this.msgService.errMessage('Error', 'Please enter your otp', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.otp != this.apiOtp) {
                            this.msgService.errMessage('Error', 'Please enter valid otp', 'ok');
                            return false;
                        } else {
                            this.pageStatus = 'submitBulkOrder';
                        }
                    };
                    HeaderComponent.prototype.submitBulkOrder = function() {
                        var _this = this;
                        if (this.bulkOrderObj.product_name == "") {
                            this.msgService.errMessage('Error', 'Please enter product name', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.quantity == "" || isNaN(this.bulkOrderObj.quantity)) {
                            this.msgService.errMessage('Error', 'Please enter valid quantity', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.quantity < 10) {
                            this.msgService.errMessage('Error', 'Quantity not accept less than 10 KG for Bulk Order', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.quantity > 100) {
                            this.msgService.errMessage('Error', 'Quantity not accept grater than 100 KG for Bulk Order', 'ok');
                            return false;
                        }
                        if (this.bulkOrderObj.delivery_date == null) {
                            this.msgService.errMessage('Error', 'Please enter Delivery Date', 'ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.auth.bulkOrderSave(this.bulkOrderObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    _this.spinnerService.hide();
                                    _this.dismissBulkOrder();
                                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(_this.platformId)) {
                                        $(".bulkOrderOverlay").fadeOut();
                                        $(".bulkOrderModal").removeClass("boShown");
                                        $("body").removeClass("noScroll");
                                    }
                                    _this.msgService.successMessage('Success', 'Thank You for submitting bulk order. One of our representatives will get in touch with you shortly..', 'ok');
                                    _this.router.navigateByUrl('/');
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', response.message, 'ok');
                                    return false;
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    HeaderComponent.prototype.gotoPhoneNum = function() {
                        this.generate_otp = {
                            phone: ''
                        };
                        this.bulkOrderObj = {
                            phone: '',
                            product_name: '',
                            quantity: 10,
                            delivery_date: null
                        };
                        this.pageStatus = "otp";
                    };
                    HeaderComponent.prototype.deliverySlots = function(code, date) {
                        var _this = this;
                        if (date === void 0) {
                            date = '';
                        }
                        this.spinnerService.show();
                        this.location.getDeliverySlot(code, date).then(function(resJsn) {
                            var response = resJsn;
                            if (response.success == true) {
                                _this.slotMsg = response.msg;
                                if (response.data && response.data.length > 0) {
                                    _this.slots = response.data;
                                    console.log(_this.slots);
                                    // this.deliverySlotId = slotValue.id;
                                    // this.slotText = slotValue.text + " (" +slotValue.day_name+")";
                                    // localStorage.setItem("slot_id", this.deliverySlotId);
                                } else {
                                    _this.slots = [];
                                }
                            } else if (response.success == false) {
                                _this.slots = [];
                                _this.msgService.errMessage('Error', 'Pin code not available. Please other one....', 'Ok');
                            }
                        }).catch(function(error) {
                            return console.error(error);
                        });
                    };
                    // open searchModal on mobile screen
                    HeaderComponent.prototype.openSearchBox = function() {
                        // alert('hi');
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformBrowser"])(this.platformId)) {
                            $(".navSearchSm").slideToggle();
                        }
                        // $(".mobsearchCaller").click(function(){
                        //   $(".navSearchSm").slideToggle();
                        // })
                    };
                    HeaderComponent.prototype.openRefBox = function() {
                        $('.shareReferHolder').addClass("showRef");
                    };;
                    HeaderComponent.prototype.closeRefBox = function() {
                        $('.shareReferHolder').removeClass("showRef");
                    };
                    HeaderComponent.prototype.copyReferral = function(val) {
                        // inputElement.select();
                        // console.log(inputElement)
                        // document.execCommand('copy');
                        // inputElement.setSelectionRange(0, 0);
                        // this.msgService.successMessage('Success', 'Referral code copied', 'ok');
                        // this.closeRefBox();
                        var selBox = document.createElement('textarea');
                        selBox.style.position = 'fixed';
                        selBox.style.left = '0';
                        selBox.style.top = '0';
                        selBox.style.opacity = '0';
                        selBox.value = val;
                        document.body.appendChild(selBox);
                        selBox.focus();
                        selBox.select();
                        document.execCommand('copy');
                        document.body.removeChild(selBox);
                        this.msgService.successMessage('Success', 'Referral code copied', 'ok');
                        this.closeRefBox();
                    };
                    HeaderComponent.prototype.regionCaller = function() {
                        $(".reviewContWrapperOverlay").fadeIn(200);
                        $("body").addClass("noScroll");
                        $(".reviewContWrapper").slideDown();
                        $(".closeRevMod").click(function() {
                            $(".reviewContWrapperOverlay").fadeOut(200);
                            $("body").removeClass("noScroll");
                            $(".reviewContWrapper").slideUp();
                        });
                        $(".reviewContWrapperOverlay").click(function() {
                            $(this).fadeOut(200);
                            $("body").removeClass("noScroll");
                            $(".reviewContWrapper").slideUp();
                        });
                    };
                    // givingRevFunction(){
                    //   $('.starSpan').mouseover(function(){
                    //     $(this).addClass('active');
                    //     $(this).prevAll().addClass('active');
                    //     $(this).nextAll().removeClass('active');
                    //   });
                    //   $('.starSpan').mouseout(function(){
                    //     $(this).nextAll().removeClass('active');
                    //     $(this).prevAll().removeClass('active');
                    //     $(this).removeClass('active');
                    //   });
                    // }
                    HeaderComponent.prototype.changeRegion = function(regionId) {
                        localStorage.setItem("region", regionId);
                        if (regionId == 1) {
                            this.selectEvent(this.defaultLocation);
                            localStorage.setItem("closeRegion", '1');
                            //location.reload();
                        }
                        if (regionId == 2) {
                            this.selectEvent(this.defaultLocationTwo);
                            localStorage.setItem("closeRegion", '1');
                            //location.reload();
                        }
                    };
                    HeaderComponent.prototype.checkOutAddress = function() {
                        // this.router.navigate(['/checkout-address'])
                        // .then(() => {
                        //   window.location.reload();
                        // });
                        this.router.navigate(['/checkout-address']);
                    };
                    HeaderComponent.ctorParameters = function() {
                        return [{
                                type: Object,
                                decorators: [{
                                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                                    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ]
                                }]
                            },
                            {
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]
                            },
                            {
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]
                            },
                            {
                                type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
                            },
                            {
                                type: _services_cart_service_service__WEBPACK_IMPORTED_MODULE_7__["CartServiceService"]
                            },
                            {
                                type: _services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"]
                            },
                            {
                                type: _services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]
                            },
                            {
                                type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
                            }
                        ];
                    };
                    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-header',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object,
                            _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"],
                            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
                            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
                            _services_cart_service_service__WEBPACK_IMPORTED_MODULE_7__["CartServiceService"],
                            _services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"],
                            _services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
                            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
                        ])
                    ], HeaderComponent);
                    return HeaderComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/core/login-inner/login-inner.component.scss":
            /*!*************************************************************!*\
              !*** ./src/app/core/login-inner/login-inner.component.scss ***!
              \*************************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".loginHolder .loginTabHolder a {\n  height: 70px;\n  line-height: 70px;\n  font-weight: 500;\n  color: #CCC;\n  font-size: 16px;\n  position: relative;\n  transition: all 0.1s;\n  display: inline-block;\n  margin-right: 50px;\n}\n.loginHolder .loginTabHolder a:hover {\n  text-decoration: none;\n}\n.loginHolder .loginTabHolder a:after {\n  position: absolute;\n  left: 0;\n  bottom: 2px;\n  right: 0;\n  background: #CCC;\n  border-radius: 100px;\n  transition: all 0.1s;\n  content: \"\";\n}\n.loginHolder .loginTabHolder a.active {\n  color: #000;\n  font-size: 20px;\n}\n.loginHolder .loginTabHolder a.active:after {\n  background: #000;\n  height: 4px;\n}\n.loginHolder .loginTabContent {\n  padding-top: 25px;\n}\n.loginHolder .loginTabContent .orDivider {\n  text-align: center;\n  font-style: italic;\n  color: #AAA;\n  margin: 15px 0;\n}\n.loginHolder .loginTabContent .btn {\n  font-size: 18px;\n  padding: 17px 0;\n  font-weight: 600;\n}\n.loginHolder .loginTabContent .socialLogin {\n  margin: 0 -5px;\n}\n.loginHolder .loginTabContent .socialLogin .col-sm-6 {\n  padding: 0 5px;\n}\n.loginHolder .loginTabContent .socialLogin .col-sm-6 .btn {\n  font-size: 14px;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  position: relative;\n}\n.loginHolder .loginTabContent .socialLogin .col-sm-6 .btn img {\n  position: absolute;\n  left: 0;\n  height: 18px;\n  left: 20px;\n  top: 17px;\n}\n.loginHolder .loginTabContent .otpStep1 {\n  display: block;\n}\n.loginHolder .loginTabContent .otpStep2 {\n  display: none;\n}\n.loginHolder .loginTabContent .otpStep3 {\n  display: none;\n}\n.loginHolder .loginTabContent .otpMoreOpt a {\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 15px;\n  color: #444;\n  font-weight: 500;\n}\n.loginHolder .loginTabContent .otpMoreOpt a:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 768px) {\n  .loginHolder .loginTabHolder a {\n    height: 40px !important;\n    line-height: 40px;\n    margin-right: 25px;\n  }\n  .loginHolder .loginTabContent .btn {\n    font-size: 14px;\n    padding: 10px 0;\n    font-weight: 600;\n  }\n  .loginHolder .loginTabContent .socialLogin .col-sm-6 .btn {\n    padding: 5px 0 !important;\n    font-size: 14px;\n    padding: 10px 0;\n    margin-bottom: 10px;\n    position: relative;\n  }\n  .loginHolder .loginTabContent .socialLogin .col-sm-6 .btn img {\n    top: 7px;\n    left: 15px;\n  }\n}\n.termCondLink {\n  color: #2898ed !important;\n  text-decoration: none !important;\n  display: inline-block !important;\n  transition: all 0.3s ease;\n}\n.termCondLink:hover {\n  color: #0966ad !important;\n}\n/* The container */\n.container {\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  line-height: 17px;\n  margin-top: 6px;\n}\n/* Hide the browser's default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.container:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: #2898ed;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dpbi1pbm5lci9FOlxcb2ZmaWNlX3Byb2plY3RcXGZmYi1uZy1uZXdcXGZmYi1uZy1uZXcvc3JjXFxhcHBcXGNvcmVcXGxvZ2luLWlubmVyXFxsb2dpbi1pbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sb2dpbi1pbm5lci9sb2dpbi1pbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLFlBQUE7RUFBYSxpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixXQUFBO0VBQVcsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixvQkFBQTtFQUFtQixxQkFBQTtFQUFxQixrQkFBQTtBQ01sSjtBRExZO0VBQ0kscUJBQUE7QUNPaEI7QURMWTtFQUNJLGtCQUFBO0VBQW1CLE9BQUE7RUFBUSxXQUFBO0VBQVcsUUFBQTtFQUFTLGdCQUFBO0VBQWdCLG9CQUFBO0VBQXFCLG9CQUFBO0VBQW1CLFdBQUE7QUNjdkg7QURYUTtFQUNJLFdBQUE7RUFBVyxlQUFBO0FDY3ZCO0FEYlk7RUFDSSxnQkFBQTtFQUFnQixXQUFBO0FDZ0JoQztBRFpJO0VBQ0ksaUJBQUE7QUNjUjtBRGJRO0VBQ0ksa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsV0FBQTtFQUFXLGNBQUE7QUNrQjdEO0FEaEJRO0VBQ0ksZUFBQTtFQUFnQixlQUFBO0VBQWdCLGdCQUFBO0FDb0I1QztBRGxCUTtFQUNJLGNBQUE7QUNvQlo7QURuQlk7RUFDSSxjQUFBO0FDcUJoQjtBRHBCZ0I7RUFDSSxlQUFBO0VBQWdCLGVBQUE7RUFBZSxtQkFBQTtFQUFvQixrQkFBQTtBQ3lCdkU7QUR4Qm9CO0VBQ0ksa0JBQUE7RUFBbUIsT0FBQTtFQUFRLFlBQUE7RUFBYSxVQUFBO0VBQVcsU0FBQTtBQzhCM0U7QUR6QlE7RUFBVyxjQUFBO0FDNEJuQjtBRDNCUTtFQUFXLGFBQUE7QUM4Qm5CO0FEN0JRO0VBQVcsYUFBQTtBQ2dDbkI7QUQ5Qlk7RUFDSSxxQkFBQTtFQUFzQixrQkFBQTtFQUFrQixlQUFBO0VBQWdCLFdBQUE7RUFBVyxnQkFBQTtBQ29DbkY7QURuQ2dCO0VBQ0ksMEJBQUE7QUNxQ3BCO0FEOUJBO0VBR1k7SUFDSSx1QkFBQTtJQUF3QixpQkFBQTtJQUFrQixrQkFBQTtFQ2lDeEQ7RUQ3QlU7SUFDSSxlQUFBO0lBQWdCLGVBQUE7SUFBZ0IsZ0JBQUE7RUNpQzlDO0VEN0JrQjtJQUNJLHlCQUFBO0lBSUEsZUFBQTtJQUFnQixlQUFBO0lBQWUsbUJBQUE7SUFBb0Isa0JBQUE7RUMrQnpFO0VEbENzQjtJQUNJLALAQUE7SUFBUSxVQUFBO0VDcUNsQztBQUNGO0FENUJBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUM4Qko7QUQ3Qkk7RUFDSSx5QkFBQTtBQytCUjtBRDNCQSxrQkFBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUM4Qko7QUQzQkUsd0NBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQzhCSjtBRDNCRSw2QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUM4Qko7QUQzQkUsK0NBQUE7QUFDQTtFQUNFLHNCQUFBO0FDOEJKO0FEM0JFLHdEQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQzhCSjtBRDNCRSw2REFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzhCSjtBRDNCRSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQzhCSjtBRDNCRSxrQ0FBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLALAQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQzhCSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9naW4taW5uZXIvbG9naW4taW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWVCbHVlOiAjMmI5OGVkO1xuLmxvZ2luSG9sZGVyIHtcbiAgICAubG9naW5UYWJIb2xkZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtsaW5lLWhlaWdodDogNzBweDtmb250LXdlaWdodDogNTAwO2NvbG9yOiNDQ0M7Zm9udC1zaXplOiAxNnB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt0cmFuc2l0aW9uOmFsbCAuMXM7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjUwcHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDtib3R0b206MnB4O3JpZ2h0OiAwO2JhY2tncm91bmQ6I0NDQztib3JkZXItcmFkaXVzOiAxMDBweDt0cmFuc2l0aW9uOmFsbCAuMXM7Y29udGVudDpcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7Zm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7aGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luVGFiQ29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOjI1cHg7XG4gICAgICAgIC5vckRpdmlkZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc3R5bGU6IGl0YWxpYztjb2xvcjojQUFBO21hcmdpbjoxNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7cGFkZGluZzogMTdweCAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbExvZ2luIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuICAgICAgICAgICAgLmNvbC1zbS02IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7cGFkZGluZzoxNXB4IDA7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDtoZWlnaHQ6IDE4cHg7bGVmdDogMjBweDt0b3A6MTdweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3RwU3RlcDEge2Rpc3BsYXk6YmxvY2s7fVxuICAgICAgICAub3RwU3RlcDIge2Rpc3BsYXk6bm9uZTt9XG4gICAgICAgIC5vdHBTdGVwMyB7ZGlzcGxheTpub25lO31cbiAgICAgICAgLm90cE1vcmVPcHQge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZTogMTVweDtjb2xvcjojNDQ0O2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dpbkhvbGRlciB7XG4gICAgICAgIC5sb2dpblRhYkhvbGRlciB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtsaW5lLWhlaWdodDogNDBweDttYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luVGFiQ29udGVudCB7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7cGFkZGluZzogMTBweCAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29jaWFsTG9naW4ge1xuICAgICAgICAgICAgICAgIC5jb2wtc20tNiB7XG4gICAgICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6N3B4O2xlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7cGFkZGluZzoxMHB4IDA7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZXJtQ29uZExpbmsge1xuICAgIGNvbG9yOiAjMjg5OGVkICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwOTY2YWQgIWltcG9ydGFudDtcbiAgICB9ICAgIFxufVxuXG4vKiBUaGUgY29udGFpbmVyICovXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuICAuY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG4gIFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbiAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg5OGVkO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGxlZnQ6IDdweDtcbiAgICB0b3A6IDNweDtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH0iLCIubG9naW5Ib2xkZXIgLmxvZ2luVGFiSG9sZGVyIGEge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0NDQztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAycHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubG9naW5Ib2xkZXIgLmxvZ2luVGFiSG9sZGVyIGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJIb2xkZXIgYS5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDRweDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4ubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAub3JEaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjQUFBO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5idG4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDE3cHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5zb2NpYWxMb2dpbiB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLnNvY2lhbExvZ2luIC5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLnNvY2lhbExvZ2luIC5jb2wtc20tNiAuYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5zb2NpYWxMb2dpbiAuY29sLXNtLTYgLmJ0biBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMThweDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAxN3B4O1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLm90cFN0ZXAxIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9naW5Ib2xkZXIgLmxvZ2luVGFiQ29udGVudCAub3RwU3RlcDIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLm90cFN0ZXAzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5vdHBNb3JlT3B0IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5vdHBNb3JlT3B0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luSG9sZGVyIC5sb2dpblRhYkhvbGRlciBhIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIH1cbiAgLmxvZ2luSG9sZGVyIC5sb2dpblRhYkNvbnRlbnQgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5zb2NpYWxMb2dpbiAuY29sLXNtLTYgLmJ0biB7XG4gICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5sb2dpbkhvbGRlciAubG9naW5UYWJDb250ZW50IC5zb2NpYWxMb2dpbiAuY29sLXNtLTYgLmJ0biBpbWcge1xuICAgIHRvcDogN3B4O1xuICAgIGxlZnQ6IDE1cHg7XG4gIH1cbn1cbi50ZXJtQ29uZExpbmsge1xuICBjb2xvcjogIzI4OThlZCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4udGVybUNvbmRMaW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwOTY2YWQgIWltcG9ydGFudDtcbn1cblxuLyogVGhlIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg5OGVkO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogN3B4O1xuICB0b3A6IDNweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */");

                /***/
            }),

        /***/
        "./src/app/core/login-inner/login-inner.component.ts":
            /*!***********************************************************!*\
              !*** ./src/app/core/login-inner/login-inner.component.ts ***!
              \***********************************************************/
            /*! exports provided: LoginInnerComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoginInnerComponent", function() {
                    return LoginInnerComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/login-registration.service */ "./src/app/services/login-registration.service.ts");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
                /* harmony import */
                var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var _services_cart_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../services/cart-service.service */ "./src/app/services/cart-service.service.ts");
                /* harmony import */
                var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../services/message.service */ "./src/app/services/message.service.ts");








                var LoginInnerComponent = /** @class */ (function() {
                    function LoginInnerComponent(loginRegisterService, activeRouter, spinnerService, cart, msgService) {
                        this.loginRegisterService = loginRegisterService;
                        this.activeRouter = activeRouter;
                        this.spinnerService = spinnerService;
                        this.cart = cart;
                        this.msgService = msgService;
                        this.pageStatus = 'otp';
                        this.cartData = [];
                        this.totalItems = 0;
                        this.shippingCost = 0;
                        this.showLoginArea = false;
                        this.showRegisterArea = false;
                        this.showOTPArea = true;
                        this.timeLeft = 60;
                        this.login = {
                            "email": "",
                            "password": "",
                            "token": localStorage.getItem("cartToken")
                        };
                        this.register = {
                            "name": "",
                            "email": "",
                            "password": "",
                            "confirm_password": "",
                            "phone": "",
                            "token": localStorage.getItem("cartToken")
                        };
                        this.generate_otp = {
                            phone: ''
                        };
                        this.otp_login = {
                            phone: '',
                            otp: '',
                            token: localStorage.getItem("cartToken"),
                            name: '',
                            email: '',
                            used_referral_code: ''
                        };
                    }
                    LoginInnerComponent.prototype.ngOnInit = function() {
                        this.settingObj = JSON.parse(localStorage.getItem("settingObj"));
                        this.isDisabledTerms = true;
                    };
                    LoginInnerComponent.prototype.gotoLogin = function() {
                        this.pageStatus = 'login';
                    };
                    LoginInnerComponent.prototype.gotoRegister = function() {
                        this.pageStatus = 'register';
                    };
                    LoginInnerComponent.prototype.gotoOTP = function() {
                        this.pageStatus = 'otp';
                    };
                    LoginInnerComponent.prototype.gotoEnterOTP = function() {
                        $(".otpStep1").slideUp(200);
                        $(".otpStep2").slideDown(200);
                    };
                    LoginInnerComponent.prototype.gotoPhoneNum = function() {
                        $(".otpStep1").slideDown(200);
                        $(".otpStep2").slideUp(200);
                    };
                    LoginInnerComponent.prototype.submitLoginForm = function() {
                        var _this = this;
                        if (this.login.email != '') {
                            if (isNaN(this.login.email)) {
                                if ((!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(this.login.email))) {
                                    this.msgService.errMessage('Error', 'Please enter a valid email', 'ok');
                                    return false;
                                }
                            } else {
                                var checkEmail = /^\d{10}$/;
                                if (!this.login.email.match(checkEmail)) {
                                    this.msgService.errMessage('Error', 'Please enter a valid phone number', 'ok');
                                    return false;
                                }
                            }
                        } else {
                            this.msgService.errMessage('Error', 'Please enter a valid email or phone number', 'ok');
                            return false;
                        }
                        if (this.login.password == "" || this.login.password.length < 5) {
                            this.msgService.errMessage('Error', 'Please enter your password', 'ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.loginRegisterService.postLogin({
                                'username': this.login.email,
                                'password': this.login.password,
                                "token": localStorage.getItem("cartToken")
                            })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    localStorage.setItem("token", response.security_token);
                                    localStorage.setItem("cartToken", null);
                                    localStorage.setItem("userName", response.user.name);
                                    _this.loginRegisterService.setLogin();
                                    $(".loginModalOverlay").fadeOut();
                                    $(".loginModal").removeClass("lmShown");
                                    $("body").removeClass("noScroll");
                                    _this.spinnerService.hide();
                                    _this.msgService.successMessage('Success', 'You are logged in', 'ok');
                                    _this.cart.cartAllProduct(localStorage.getItem("token"));
                                    _this.cart.watch().subscribe(function(data) {
                                        _this.cartData = data.cartContent;
                                        _this.totalPrice = data.totalPrice;
                                        _this.shippingCost = data.shippingCost;
                                        //this.finalPrice = data.finalPrice;
                                        _this.totalItems = _this.cartData.length;
                                    });
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', 'Please enter your valid email or phone and password', 'ok');
                                    return false;
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    LoginInnerComponent.prototype.submitRegisterForm = function() {
                        var _this = this;
                        if (this.register.name == "") {
                            this.msgService.errMessage('Error', 'Please enter your full name', 'ok');
                            return false;
                        }
                        if (this.register.email == "" || (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(this.register.email))) {
                            this.msgService.errMessage('Error', 'Please enter your email', 'ok');
                            return false;
                        }
                        if ((isNaN(this.register.phone) || this.register.phone == "")) {
                            this.msgService.errMessage('Error', 'Please enter your phone number', 'ok');
                            return false;
                        }
                        if (this.register.phone.length < 10) {
                            this.msgService.errMessage('Error', 'Please enter correct phone number', 'ok');
                            return false;
                        }
                        if (this.register.password == '') {
                            this.msgService.errMessage('Error', 'Please enter a password min 8 character long', 'ok');
                            return false;
                        }
                        if (this.register.confirm_password == '') {
                            this.msgService.errMessage('Error', 'Please enter confirm password same as password', 'ok');
                            return false;
                        }
                        if (this.register.password.length < 8 || this.register.password != this.register.confirm_password) {
                            this.msgService.errMessage('Error', 'Enter password and confirm password must be 8 characters long and same', 'ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.loginRegisterService.postRegister(this.register)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    localStorage.setItem("token", response.security_token);
                                    localStorage.setItem("cartToken", null);
                                    localStorage.setItem("userName", response.user.name);
                                    _this.loginRegisterService.setLogin();
                                    $(".loginModalOverlay").fadeOut();
                                    $(".loginModal").removeClass("lmShown");
                                    $("body").removeClass("noScroll");
                                    _this.spinnerService.hide();
                                    _this.msgService.successMessage('Success', 'You are logged in', 'ok');
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', 'Oops...', 'ok');
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    LoginInnerComponent.prototype.submitGenerateOtpForm = function() {
                        var _this = this;
                        if ((isNaN(this.generate_otp.phone) || this.generate_otp.phone == "")) {
                            this.msgService.errMessage('Error', 'Please enter your phone number', 'ok');
                            return false;
                        }
                        if (this.generate_otp.phone.length < 10) {
                            this.msgService.errMessage('Error', 'Please enter correct phone number', 'ok');
                            return false;
                        }
                        this.spinnerService.show();
                        this.loginRegisterService.generateOtp(this.generate_otp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    _this.spinnerService.hide();
                                    _this.msgService.successMessage('OTP', 'OTP has been sent successfully. Please check your phone.', 'ok');
                                    $(".otpStep1").slideUp(200);
                                    $(".otpStep2").slideDown(200);
                                    _this.otp_login.phone = _this.generate_otp.phone;
                                    _this.userObject = response.user;
                                    _this.startTimer();
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', 'Please enter your valid email or phone.', 'ok');
                                    return false;
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    LoginInnerComponent.prototype.submitOtpLoginForm = function() {
                        var _this = this;
                        //console.log(this.userObject);
                        //return false;
                        if ((isNaN(this.otp_login.phone) || this.otp_login.phone == "")) {
                            this.msgService.errMessage('Error', 'Please enter your phone number', 'ok');
                            return false;
                        }
                        if (this.otp_login.phone.length < 10) {
                            this.msgService.errMessage('Error', 'Please enter correct phone number', 'ok');
                            return false;
                        }
                        if ((isNaN(this.otp_login.otp) || this.generate_otp.otp == "")) {
                            this.msgService.errMessage('Error', 'Please enter your otp', 'ok');
                            return false;
                        }
                        if (this.userObject.email == '') {
                            if (this.otp_login.name == '') {
                                this.msgService.errMessage('Error', 'Name is required', 'Ok');
                                return false;
                            }
                            if (this.otp_login.email == '') {
                                this.msgService.errMessage('Error', 'Email is required', 'Ok');
                                return false;
                            }
                            if (this.otp_login.email == "" || (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(this.otp_login.email))) {
                                this.msgService.errMessage('Error', 'Please enter your email', 'ok');
                                return false;
                            }
                        } else {
                            this.otp_login.email = this.userObject.email;
                            this.otp_login.name = this.userObject.name;
                            //this.otp_login.used_referral_code = this.userObject.used_referral_code;
                        }
                        //console.log(this.otp_login);
                        //return false;
                        this.spinnerService.show();
                        // '&token=' + localStorage.getItem("cartToken")
                        console.log(localStorage.getItem("cartToken"));
                        //return false;
                        this.otp_login.token = localStorage.getItem("cartToken");
                        this.loginRegisterService.otpLogin(this.otp_login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function(response) {
                                if (response.success == true) {
                                    localStorage.setItem("token", response.security_token);
                                    //  localStorage.setItem("cartToken", response.security_token);
                                    localStorage.setItem("cartToken", null);
                                    localStorage.setItem("userName", response.user.name);
                                    _this.loginRegisterService.setLogin();
                                    _this.loginRegisterService.profilePictureBroadCast(response.user.image);
                                    $(".loginModalOverlay").fadeOut();
                                    $(".loginModal").removeClass("lmShown");
                                    $("body").removeClass("noScroll");
                                    _this.otp_login = {
                                        phone: '',
                                        otp: '',
                                        token: ''
                                    };
                                    $(".otpStep2").slideUp(200);
                                    $(".otpStep1").slideDown(200);
                                    _this.spinnerService.hide();
                                    _this.msgService.successMessage('Success', 'You are logged in', 'ok');
                                    _this.cart.cartAllProduct(localStorage.getItem("token"));
                                    _this.cart.watch().subscribe(function(data) {
                                        _this.cartData = data.cartContent;
                                        _this.totalPrice = data.totalPrice;
                                        _this.shippingCost = data.shippingCost;
                                        //this.finalPrice = data.finalPrice;
                                        _this.totalItems = _this.cartData.length;
                                    });
                                } else if (response.success == false) {
                                    _this.spinnerService.hide();
                                    _this.msgService.errMessage('Error', response.msg, 'ok');
                                    return false;
                                }
                            }, function(error) {
                                console.log('Error ....');
                            });
                    };
                    LoginInnerComponent.prototype.startTimer = function() {
                        var _this = this;
                        this.timeLeft = 60;
                        this.interval = setInterval(function() {
                            if (_this.timeLeft > 0) {
                                _this.timeLeft--;
                            }
                            //} else {
                            //  this.timeLeft = 60;
                            //}
                        }, 1000);
                    };
                    //pauseTimer() {
                    //  clearInterval(this.interval);
                    //}
                    LoginInnerComponent.prototype.openTerms = function() {
                        window.open('https://www.alatrading.in/page/terms-of-services', "_blank");
                    };
                    LoginInnerComponent.ctorParameters = function() {
                        return [{
                                type: _services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"]
                            },
                            {
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
                            },
                            {
                                type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]
                            },
                            {
                                type: _services_cart_service_service__WEBPACK_IMPORTED_MODULE_6__["CartServiceService"]
                            },
                            {
                                type: _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
                            }
                        ];
                    };
                    LoginInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-login-inner',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login-inner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/login-inner/login-inner.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login-inner.component.scss */ "./src/app/core/login-inner/login-inner.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_registration_service__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrationService"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
                            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
                            _services_cart_service_service__WEBPACK_IMPORTED_MODULE_6__["CartServiceService"],
                            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
                        ])
                    ], LoginInnerComponent);
                    return LoginInnerComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/core/login/login.component.scss":
            /*!*************************************************!*\
              !*** ./src/app/core/login/login.component.scss ***!
              \*************************************************/
            /*! exports provided: default */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */
                __webpack_exports__["default"] = (".loginImg {\n  width: 100%;\n  border-radius: 100%;\n  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);\n}\n\n.gap100 {\n  height: 20px;\n}\n\n@media screen and (max-width: 768px) {\n  .loginImg {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dpbi9FOlxcb2ZmaWNlX3Byb2plY3RcXGZmYi1uZy1uZXdcXGZmYi1uZy1uZXcvc3JjXFxhcHBcXGNvcmVcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFBVyxtQkFBQTtFQUFvQiwwQ0FBQTtBQ0duQzs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJO0lBQ0ksd0JBQUE7RUNLTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkltZyB7XG4gICAgd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOiAxMDAlO2JveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwwLDAsLjIpO1xufVxuLmdhcDEwMCB7XG4gICAgaGVpZ2h0OjIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dpbkltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLmxvZ2luSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdhcDEwMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luSW1nIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

                /***/
            }),

        /***/
        "./src/app/core/login/login.component.ts":
            /*!***********************************************!*\
              !*** ./src/app/core/login/login.component.ts ***!
              \***********************************************/
            /*! exports provided: LoginComponent */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoginComponent", function() {
                    return LoginComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


                var LoginComponent = /** @class */ (function() {
                    function LoginComponent() {}
                    LoginComponent.prototype.ngOnInit = function() {};
                    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: 'app-login',
                            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/login/login.component.html")).default,
                            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.scss */ "./src/app/core/login/login.component.scss")).default]
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], LoginComponent);
                    return LoginComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/services/cart-service.service.ts":
            /*!**************************************************!*\
              !*** ./src/app/services/cart-service.service.ts ***!
              \**************************************************/
            /*! exports provided: CartServiceService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "CartServiceService", function() {
                    return CartServiceService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");





                var CartServiceService = /** @class */ (function() {
                    function CartServiceService(http) {
                        this.http = http;
                        this.cartChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
                    }
                    CartServiceService.prototype.watch = function() {
                        return this.cartChange.asObservable();
                    };
                    CartServiceService.prototype.cartBroadCastTypeOne = function(data) {
                        this.cartChange.next(data);
                    };
                    CartServiceService.prototype.cartBroadCastTypeTwo = function(data) {
                        this.cartChange.next(data.data);
                        localStorage.setItem("cartToken", data.token);
                    };
                    CartServiceService.prototype.addCart = function(productId, productCuttingOptionId, userId, comment) {
                        var _this = this;
                        if (comment === void 0) {
                            comment = null;
                        }
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        var comment = ((comment != null || comment != '') ? comment : '');
                        // alert(postalCode);
                        //var url = this.baseURL + "cart-detail?token=" + userToken+'&postal_code='+postalCode;
                        if (productId) {
                            var that = this;
                            if (userId == null || userId == undefined) {
                                console.log("not_login");
                                var url = this.baseURL + "add-cart?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&token=' + localStorage.getItem("cartToken") + '&postal_code=' + postalCode + '&comment=' + comment + '&version=' + Math.random();
                                if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                    url = url + '&region_id=' + localStorage.getItem("region");
                                }
                                //alert(url);
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
                            } else {
                                console.log("login");
                                var that = this;
                                var url = this.baseURL + "add-cart?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&token=' + localStorage.getItem("token") + '&postal_code=' + postalCode + '&comment=' + comment + '&version=' + Math.random();
                                if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                    url = url + '&region_id=' + localStorage.getItem("region");
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
                            }
                        }
                    };
                    CartServiceService.prototype.addNoti = function(productId, productCuttingOptionId, userId, comment) {
                        var _this = this;
                        if (comment === void 0) {
                            comment = null;
                        }
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        var comment = ((comment != null || comment != '') ? comment : '');
                        // alert(postalCode);
                        //var url = this.baseURL + "cart-detail?token=" + userToken+'&postal_code='+postalCode;
                        if (productId) {
                            var that = this;
                            if (userId == null || userId == undefined) {
                                console.log("not_login");
                                var url = this.baseURL + "add-notification?product_id=" + productId + '&token=' + localStorage.getItem("cartToken") + '&postal_code=' + postalCode;
                                //alert(url);
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
                            } else {
                                console.log("login");
                                var that = this;
                                var url = this.baseURL + "add-notification?product_id=" + productId + '&token=' + localStorage.getItem("token") + '&postal_code=' + postalCode;
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
                            }
                        }
                    };
                    CartServiceService.prototype.productCheckInStock = function(productId, productCuttingOptionId) {
                        var _this = this;
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        if (productId) {
                            var that = this;
                            var that = this;
                            var url = this.baseURL + "check-in-stock?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&postal_code=' + postalCode;
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
                        }
                    };
                    CartServiceService.prototype.addCouponInCart = function(couponCode, userId) {
                        var _this = this;
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        //var url = this.baseURL + "cart-detail?token=" + userToken+'&postal_code='+postalCode;
                        if (couponCode) {
                            var that = this;
                            if (userId == null) {
                                var url = this.baseURL + "add-cart?coupon_code=" + couponCode + '&token=' + localStorage.getItem("cartToken") + '&postal_code=' + postalCode;
                                if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                    url = url + '&region_id=' + localStorage.getItem("region");
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
                            } else {
                                var that = this;
                                var url = this.baseURL + "add-cart?coupon_code=" + couponCode + '&token=' + localStorage.getItem("token") + '&postal_code=' + postalCode;
                                if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                    url = url + '&region_id=' + localStorage.getItem("region");
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
                            }
                        }
                    };
                    CartServiceService.prototype.removeCart = function(productId, productCuttingOptionId) {
                        var _this = this;
                        //alert("herennnn");
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        //var url = this.baseURL + "cart-detail?token=" + userToken+'&postal_code='+postalCode;
                        if (localStorage.getItem("cartToken") != '' && localStorage.getItem("cartToken") != 'null' && localStorage.getItem("cartToken") != null) {
                            var url = this.baseURL + "remove-cart?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&token=' + localStorage.getItem("cartToken") + '&postal_code=' + postalCode + '&version=' + Math.random();
                            if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                url = url + '&region_id=' + localStorage.getItem("region");
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
                        } else {
                            var url = this.baseURL + "remove-cart?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&token=' + localStorage.getItem("token") + '&postal_code=' + postalCode + '&version=' + Math.random();
                            if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                                url = url + '&region_id=' + localStorage.getItem("region");
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
                        }
                    };
                    CartServiceService.prototype.updateCartQuantity = function(productId, productCuttingOptionId, quantity) {
                        var _this = this;
                        var cartSelectedAddressId = '';
                        if (localStorage.getItem("cartSelectedAddressId") != undefined) {
                            cartSelectedAddressId = localStorage.getItem("cartSelectedAddressId");
                        }
                        var token = null;
                        if (localStorage.getItem("cartToken") != '' && localStorage.getItem("cartToken") != 'null' && localStorage.getItem("cartToken") != null) {
                            token = localStorage.getItem("cartToken");
                        } else {
                            token = localStorage.getItem("token");
                        }
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        //var url = this.baseURL + "cart-detail?token=" + userToken+'&postal_code='+postalCode;
                        var url = this.baseURL + "update-quantity?product_id=" + productId + '&product_cutting_option_id=' + productCuttingOptionId + '&quantity=' + quantity + "&token=" + token + '&postal_code=' + postalCode + '&version=' + Math.random();
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '&region_id=' + localStorage.getItem("region");
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
                    /*cartAllProduct(newUserToken) {
      var that = this;
      var postalCode = ((localStorage.getItem("postal_code")!=null)?localStorage.getItem("postal_code"):'');
  
      var callUrl = this.baseURL + "cart-detail?token=" + newUserToken+'&postal_code='+postalCode;
  
      return this.http.get<any>(callUrl);
    }*/
                    CartServiceService.prototype.cartAllProduct = function(newUserToken) {
                        var _this = this;
                        var that = this;
                        var postalCode = ((localStorage.getItem("postal_code") != null) ? localStorage.getItem("postal_code") : '');
                        var url = this.baseURL + "cart-detail?token=" + newUserToken + '&postal_code=' + postalCode;
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '&region_id=' + localStorage.getItem("region");
                        }
                        //return this.http.get<any>(callUrl);
                        /*.pipe(map((response:any) => {
                          return response;
                        }));*/
                        /*.subscribe(
                          data => {
                            console.log("Success response");
                            this.cartChange.next(data);
                          },
                          error => {
                            console.log('Error: Cart items is empty ....');
                          }
                        );*/
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    console.log("Success response");
                                    resolve(res);
                                    that.cartChange.next(res);
                                }, function(msg) {
                                    console.log("Error response");
                                    reject(msg);
                                });
                        });
                        console.log('Return promise');
                        return promise;
                    };
                    CartServiceService.prototype.cartSummary = function(userToken, order_customer_address_id) {
                        var _this = this;
                        var that = this;
                        var url = this.baseURL + "cart-summary?token=" + userToken + "?order_customer_address_id=" + order_customer_address_id;
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                    that.cartChange.next(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    CartServiceService.prototype.getSettingData = function() {
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
                    CartServiceService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    CartServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], CartServiceService);
                    return CartServiceService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/category.service.ts":
            /*!**********************************************!*\
              !*** ./src/app/services/category.service.ts ***!
              \**********************************************/
            /*! exports provided: CategoryService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "CategoryService", function() {
                    return CategoryService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");




                var CategoryService = /** @class */ (function() {
                    function CategoryService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
                    }
                    CategoryService.prototype.getCategoryData = function() {
                        var _this = this;
                        var url = this.baseURL + 'get-categories';
                        if (localStorage.getItem("postal_code") != undefined && localStorage.getItem("postal_code") != '') {
                            url = url + '?postal_code=' + localStorage.getItem("postal_code");
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
                    CategoryService.prototype.getCategoryBySlug = function(slug) {
                        var _this = this;
                        var url = this.baseURL + 'get-category/' + slug;
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
                    CategoryService.prototype.getCategoryMenuData = function() {
                        var _this = this;
                        var url = this.baseURL + 'get-menu-item';
                        if (localStorage.getItem("postal_code") != undefined && localStorage.getItem("postal_code") != '') {
                            url = url + '?postal_code=' + localStorage.getItem("postal_code");
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
                    CategoryService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], CategoryService);
                    return CategoryService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/content.service.ts":
            /*!*********************************************!*\
              !*** ./src/app/services/content.service.ts ***!
              \*********************************************/
            /*! exports provided: ContentService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ContentService", function() {
                    return ContentService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");





                var ContentService = /** @class */ (function() {
                    function ContentService(_http) {
                        this._http = _http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
                    }
                    ContentService.prototype.getContentDetails = function(slug) {
                        var _this = this;
                        var url = this.baseURL + "cms/" + slug;
                        var promise = new Promise(function(resolve, reject) {
                            _this._http.get(url)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    ContentService.prototype.getFaqDetails = function() {
                        var _this = this;
                        var httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/xml',
                                'Authorization': 'jwt-token',
                                'Access-Control-Allow-Origin': '*'
                            })
                        };
                        var url = this.baseURL + "faq";
                        var promise = new Promise(function(resolve, reject) {
                            _this._http.get(url, httpOptions)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    ContentService.prototype.postContact = function(contact) {
                        return this._http.post(this.baseURL + 'contact-us', contact)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    ContentService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    ContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], ContentService);
                    return ContentService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/location.service.ts":
            /*!**********************************************!*\
              !*** ./src/app/services/location.service.ts ***!
              \**********************************************/
            /*! exports provided: LocationService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LocationService", function() {
                    return LocationService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");





                var LocationService = /** @class */ (function() {
                    function LocationService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
                        this.locationChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    }
                    LocationService.prototype.watch = function() {
                        return this.locationChange.asObservable();
                    };
                    LocationService.prototype.locationBroadCast = function(data) {
                        this.locationChange.next(data);
                    };
                    LocationService.prototype.getLocation = function() {
                        return localStorage.getItem("postal_code");
                    };
                    LocationService.prototype.setLocation = function(data) {
                        this.locationChange.next(data);
                    };
                    LocationService.prototype.getAddressData = function(lat, long) {
                        var _this = this;
                        var url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=c7f79eb19b2f4c488bf09606bd2e6589';
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
                    LocationService.prototype.getPosition = function() {
                        return new Promise(function(resolve, reject) {
                            navigator.geolocation.getCurrentPosition(function(resp) {
                                resolve({
                                    lng: resp.coords.longitude,
                                    lat: resp.coords.latitude
                                });
                            }, function(err) {
                                reject(err);
                            });
                        });
                    };
                    LocationService.prototype.getPinSearch = function(pinSearchString) {
                        var _this = this;
                        var url = this.baseURL + 'get-address-by-pin?postal_code=' + pinSearchString;
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '&region=' + localStorage.getItem("region");
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
                    LocationService.prototype.getDeliverySlot = function(pinCode, date) {
                        var _this = this;
                        if (date === void 0) {
                            date = '';
                        }
                        if (date == '')
                            var url = this.baseURL + 'check-delivery/' + pinCode;
                        else
                            var url = this.baseURL + 'check-delivery/' + pinCode + '?date=' + date;
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
                    LocationService.prototype.getOrderSummery = function(orderCustomerAddressId) {
                        var _this = this;
                        var url = this.baseURL + 'order-summary?order_customer_address_id=' + orderCustomerAddressId;
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '&region_id=' + localStorage.getItem("region");
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
                    LocationService.prototype.getRemoveAddress = function(orderCustomerAddressId) {
                        var _this = this;
                        var url = this.baseURL + 'remove-address/' + orderCustomerAddressId;
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
                    LocationService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], LocationService);
                    return LocationService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/login-registration.service.ts":
            /*!********************************************************!*\
              !*** ./src/app/services/login-registration.service.ts ***!
              \********************************************************/
            /*! exports provided: LoginRegistrationService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoginRegistrationService", function() {
                    return LoginRegistrationService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");
                /* harmony import */
                var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");







                var LoginRegistrationService = /** @class */ (function() {
                    function LoginRegistrationService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL;
                        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
                        this.loginChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                        this.postalCodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                        this.loggedIn = false;
                        this.userID = null;
                        this.token = null;
                        this.userData = null;
                    }
                    LoginRegistrationService.prototype.watchProfilePicture = function() {
                        return this.profilePicture.asObservable();
                    };
                    LoginRegistrationService.prototype.profilePictureBroadCast = function(data) {
                        this.profilePicture.next(data);
                    };
                    LoginRegistrationService.prototype.watchPostalCode = function() {
                        return this.postalCodeChange.asObservable();
                    };
                    LoginRegistrationService.prototype.postalCodeBroadCast = function(data) {
                        this.postalCodeChange.next(data);
                    };
                    LoginRegistrationService.prototype.isAuthenticated = function() {
                        var token = localStorage.getItem('token');
                        if (!token || token == null || token == "" || token == "null") {
                            this.loggedIn = false;
                        } else {
                            // Check whether the token is expired and return
                            // true or false
                            this.loggedIn = !this.jwtHelper.isTokenExpired(token);
                            if (this.loggedIn) {
                                var decoded = this.jwtHelper.decodeToken(token);
                                if (decoded) {
                                    this.userID = decoded.sub;
                                    this.token = token;
                                    this.userData = decoded.details;
                                }
                            }
                        }
                        return this.loggedIn;
                    };
                    LoginRegistrationService.prototype.getToken = function() {
                        return this.token;
                    };
                    LoginRegistrationService.prototype.getUserData = function() {
                        return this.userData;
                    };
                    LoginRegistrationService.prototype.user = function() {
                        if (this.isAuthenticated()) {
                            return this.userID;
                        } else {
                            this.logout();
                        }
                    };
                    LoginRegistrationService.prototype.login = function(router, url) {
                        if (router)
                            router.navigate(['/login', url]);
                    };
                    LoginRegistrationService.prototype.setLogin = function() {
                        if (this.isAuthenticated()) {
                            this.loginChange.next(this.loggedIn.toString());
                        }
                    };
                    LoginRegistrationService.prototype.getLogin = function() {
                        return this.loggedIn;
                    };
                    LoginRegistrationService.prototype.getLogout = function() {
                        return this.http.post(this.baseURL + 'logout', {
                                'token': localStorage.getItem('token')
                            })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.watch = function() {
                        return this.loginChange.asObservable();
                    };
                    LoginRegistrationService.prototype.postLogin = function(loginObj) {
                        return this.http.post(this.baseURL + 'login', loginObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.postRegister = function(registerObj) {
                        return this.http.post(this.baseURL + 'register', registerObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    /*postUpdate(updateObj:Object) {
                     return this.http.post<any>(this.baseURL + 'api/update', {updateObj: updateObj})
                     .pipe(map((res:any) => {
                     return res;
                     }));
                     }*/
                    /*getValue(id:number) {
                     return this.http.get<any>(this.baseURL + 'api/update' + id)
                     .pipe(map((res:any) => {
                     return res;
                     // login successful if there's a jwt token in the response
                     }));
                     }*/
                    LoginRegistrationService.prototype.logout = function() {
                        localStorage.setItem("token", null);
                        localStorage.setItem("cartToken", 'ALADEMOTOKEN');
                        this.loggedIn = false;
                        this.token = null;
                        this.loginChange.next(this.loggedIn.toString());
                    };
                    LoginRegistrationService.prototype.changePassword = function(changePasswordObj) {
                        return this.http.post(this.baseURL + 'change-password', changePasswordObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.profileUpdateSubmit = function(profileUpdateObj) {
                        return this.http.post(this.baseURL + 'update-profile', profileUpdateObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.getUserAddress = function() {
                        var _this = this;
                        var url = this.baseURL + "get-user-address?token=" + localStorage.getItem("token");
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '&region=' + localStorage.getItem("region");
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
                    LoginRegistrationService.prototype.getLoginUserDetails = function() {
                        var _this = this;
                        var url = this.baseURL + "login-user-details";
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
                    LoginRegistrationService.prototype.addAddressSubmit = function(addressObj) {
                        return this.http.post(this.baseURL + 'add-address', addressObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.editAddressSubmit = function(addressObj, id) {
                        return this.http.post(this.baseURL + 'update-address/' + id, addressObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.generateOtp = function(generateOtpObj) {
                        return this.http.post(this.baseURL + 'generate-otp', generateOtpObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.otpLogin = function(otpLoginObj) {
                        return this.http.post(this.baseURL + 'sign-in', otpLoginObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    ///// This area for bulk order //////
                    LoginRegistrationService.prototype.generateBulkOtp = function(generateOtpObj) {
                        return this.http.post(this.baseURL + 'generate-bulk-otp', generateOtpObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.bulkOrderSave = function(bulkOrderObj) {
                        return this.http.post(this.baseURL + 'submit-bulk-order', bulkOrderObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    LoginRegistrationService.prototype.getRestrictionInactivePincode = function(code) {
                        var _this = this;
                        var url = this.baseURL + "restriction-inactive-pincode?token=" + localStorage.getItem("token") + '&postal_code=' + code;
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
                    LoginRegistrationService.prototype.redeemPointToWalletBalace = function() {
                        var _this = this;
                        var url = this.baseURL + "point-redeem-to-wallet";
                        if (localStorage.getItem("region") != undefined && localStorage.getItem("region") != '') {
                            url = url + '?region_id=' + localStorage.getItem("region");
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
                    LoginRegistrationService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    LoginRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], LoginRegistrationService);
                    return LoginRegistrationService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/loin-guard.service.ts":
            /*!************************************************!*\
              !*** ./src/app/services/loin-guard.service.ts ***!
              \************************************************/
            /*! exports provided: LoinGuardService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoinGuardService", function() {
                    return LoinGuardService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
                /* harmony import */
                var _login_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./login-registration.service */ "./src/app/services/login-registration.service.ts");


                /*import { CanActivate } from '@angular/router';
                import { JwtHelperService } from '@auth0/angular-jwt';*/


                var LoinGuardService = /** @class */ (function() {
                    function LoinGuardService(router, auth) {
                        this.router = router;
                        this.auth = auth;
                    }
                    /*private jwtHelper = new JwtHelperService();
    private loginUser=false;
  
    canActivate()
    {
      return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }*/
                    LoinGuardService.prototype.canActivate = function(route, state) {
                        if (this.auth.isAuthenticated()) {
                            return true;
                        } else {
                            this.router.navigate(["/"]);
                            return false;
                        }
                    };
                    LoinGuardService.ctorParameters = function() {
                        return [{
                                type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
                            },
                            {
                                type: _login_registration_service__WEBPACK_IMPORTED_MODULE_3__["LoginRegistrationService"]
                            }
                        ];
                    };
                    LoinGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_registration_service__WEBPACK_IMPORTED_MODULE_3__["LoginRegistrationService"]])
                    ], LoinGuardService);
                    return LoinGuardService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/message.service.ts":
            /*!*********************************************!*\
              !*** ./src/app/services/message.service.ts ***!
              \*********************************************/
            /*! exports provided: MessageService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "MessageService", function() {
                    return MessageService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);

                ///<reference path="../../../node_modules/sweetalert2/sweetalert2.d.ts"/>


                var MessageService = /** @class */ (function() {
                    function MessageService() {
                        this.head = "";
                        this.text = "";
                        this.btnText = "";
                    }
                    MessageService.prototype.errMessage = function(head, text, btnText) {
                        this.head = head;
                        this.text = text;
                        this.btnText = btnText;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.head,
                            text: this.text,
                            type: 'error',
                            confirmButtonText: this.btnText,
                            confirmButtonColor: '#CC0000',
                            timer: 3000
                        });
                    };
                    MessageService.prototype.removeCartMessage = function() {
                        // Swal.fire({title: 'Error', text: 'Item removed successfully', type: 'warning', confirmButtonText: 'Ok', confirmButtonColor: '#CC0000', timer: 3000});
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Success',
                            text: 'Item removed successfully',
                            type: 'success',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#2fbf40',
                            timer: 3000
                        });
                    };
                    MessageService.prototype.successMessage = function(head, text, btnText) {
                        this.head = head;
                        this.text = text;
                        this.btnText = btnText;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.head,
                            text: this.text,
                            type: 'success',
                            confirmButtonText: this.btnText,
                            confirmButtonColor: '#2fbf40',
                            timer: 3000
                        });
                    };
                    MessageService.prototype.addToCartMessage = function() {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Success',
                            text: 'Added to your cart successfully',
                            type: 'success',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#2fbf40',
                            timer: 3000
                        });
                    };
                    MessageService.prototype.addNotificationMessage = function(msg) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Success',
                            text: msg,
                            type: 'success',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#2fbf40',
                            timer: 3000
                        });
                    };
                    MessageService.prototype.successMessage1 = function(text) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file!',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, delete it!',
                            cancelButtonText: 'No, keep it',
                            timer: 3000
                        }).then(function(result) {
                            if (result.value) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                                // For more information about handling dismissals please visit
                                // https://sweetalert2.github.io/#handling-dismissals
                            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                            }
                        });
                    };
                    MessageService.prototype.cancelOrderMessage = function() {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Are you sure?',
                            text: 'Are you sure want to cancel this order?',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, Cancel it!',
                            cancelButtonText: 'No, keep it',
                            timer: 30000
                        }).then(function(result) {
                            if (result.value) {
                                return result.value;
                            }
                        });
                    };
                    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
                    ], MessageService);
                    return MessageService;
                }());



                /***/
            }),

        /***/
        "./src/app/services/order.service.ts":
            /*!*******************************************!*\
              !*** ./src/app/services/order.service.ts ***!
              \*******************************************/
            /*! exports provided: OrderService */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "OrderService", function() {
                    return OrderService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../environments/environment */ "./src/environments/environment.ts");





                var OrderService = /** @class */ (function() {
                    function OrderService(http) {
                        this.http = http;
                        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
                    }
                    OrderService.prototype.temporaryOrderSaveData = function(orderObj) {
                        // return this.http.post<any>(this.baseURL + 'temporary-order-save', orderObj)
                        //   .pipe(map((res:any) => {
                        //     return res;
                        //   }));
                        return this.http.post(this.baseURL + 'latest-order-save', orderObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    //latest-order-save
                    OrderService.prototype.orderSaveData = function(orderObj) {
                        return this.http.post(this.baseURL + 'order-save', orderObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    OrderService.prototype.orderSaveCodData = function(orderObj) {
                        return this.http.post(this.baseURL + 'order-save-cod', orderObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    OrderService.prototype.getOrderData = function(userToken) {
                        var _this = this;
                        var that = this;
                        var header = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                                .set('Authorization', 'Basic ' + userToken)
                        };
                        var url = this.baseURL + "order-detail";
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url, header)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    OrderService.prototype.getOldOrderForReviewData = function(userToken) {
                        var _this = this;
                        var that = this;
                        var header = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                                .set('Authorization', 'Basic ' + userToken)
                        };
                        var url = this.baseURL + "order-review-data";
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url, header)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    OrderService.prototype.skipOrderReview = function(userToken, orderNumber) {
                        var _this = this;
                        var that = this;
                        var header = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                                .set('Authorization', 'Basic ' + userToken)
                        };
                        var url = this.baseURL + "order-review-skip?order_number=" + orderNumber;
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url, header)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    OrderService.prototype.submitOrderReview = function(userToken, reviewObj) {
                        var that = this;
                        var header = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                                .set('Authorization', 'Basic ' + userToken)
                        };
                        var url = this.baseURL + "submit-order-review";
                        return this.http.post(url, reviewObj)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    OrderService.prototype.getOrderResponse = function(orderNumber) {
                        var _this = this;
                        var that = this;
                        var url = this.baseURL + "order-response?orderNumber=" + orderNumber;
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
                    OrderService.prototype.cancelOrder = function(orderNumber, token) {
                        var _this = this;
                        var that = this;
                        var header = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                                .set('Authorization', 'Basic ' + token)
                        };
                        var url = this.baseURL + "cancel-order?order_number=" + orderNumber;
                        var promise = new Promise(function(resolve, reject) {
                            _this.http.get(url, header)
                                .toPromise()
                                .then(function(res) {
                                    resolve(res);
                                }, function(msg) {
                                    reject(msg);
                                });
                        });
                        return promise;
                    };
                    OrderService.prototype.ajaxWalletBalance = function() {
                        // return this.http.post<any>(this.baseURL + 'temporary-order-save', orderObj)
                        //   .pipe(map((res:any) => {
                        //     return res;
                        //   }));
                        return this.http.post(this.baseURL + 'ajax-wallet-total', {})
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(res) {
                                return res;
                            }));
                    };
                    OrderService.prototype.getRatingData = function() {
                        var _this = this;
                        var url = this.baseURL + 'get-overall-rating-feed';
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
                    OrderService.ctorParameters = function() {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                            providedIn: 'root'
                        }),
                        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
                    ], OrderService);
                    return OrderService;
                }());



                /***/
            }),

        /***/
        "./src/environments/environment.ts":
            /*!*****************************************!*\
              !*** ./src/environments/environment.ts ***!
              \*****************************************/
            /*! exports provided: environment */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "environment", function() {
                    return environment;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                // This file can be replaced during build by using the `fileReplacements` array.
                // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
                // The list of file replacements can be found in `angular.json`.

                var environment = {
                    production: false,
                    // baseURL: 'https://system.alatrading.in/api/v1/',
                    // baseURL: 'http://localhost/ALA-dev/public/api/v1/',
                    //  baseURL: 'https://www.webappfactory.co/ALAdev/public/api/v1/',
                    //  siteURL: 'http://webappfactory.co/ALAdev/public/'
                    // baseURL: 'https://system.alatrading.in/api/v1/',
                    // siteURL: 'https://system.alatrading.in/'
                    baseURL: 'https://system.alatrading.in/api/v1/',
                    siteURL: 'https://system.alatrading.in/'
                };
                /*
                 * For easier debugging in development mode, you can import the following file
                 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
                 *
                 * This import should be commented out in production mode because it will have a negative impact
                 * on performance if an error is thrown.
                 */
                // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


                /***/
            }),

        /***/
        "./src/main.ts":
            /*!*********************!*\
              !*** ./src/main.ts ***!
              \*********************/
            /*! no exports provided */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
                /* harmony import */
                var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");





                if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
                }
                document.addEventListener('DOMContentLoaded', function() {
                    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                        .catch(function(err) {
                            return console.error(err);
                        });
                });


                /***/
            }),

        /***/
        0:
            /*!***************************!*\
              !*** multi ./src/main.ts ***!
              \***************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__( /*! E:\office_project\ALA-ng-new\ALA-ng-new\src\main.ts */ "./src/main.ts");


                /***/
            })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main.js.map