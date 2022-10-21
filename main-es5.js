function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ValidacoesCustomizadas/ProdutoPerecivelValidator.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ValidacoesCustomizadas/ProdutoPerecivelValidator.ts ***!
    \*********************************************************************/

  /*! exports provided: produtoPerecivelValidator */

  /***/
  function srcAppValidacoesCustomizadasProdutoPerecivelValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "produtoPerecivelValidator", function () {
      return produtoPerecivelValidator;
    });

    function produtoPerecivelValidator(control) {
      var _a, _b;

      var produtoPerecivel = (_a = control.get('ProdutoPerecivel')) === null || _a === void 0 ? void 0 : _a.value;
      var dataValidadade = (_b = control.get('DataValidade')) === null || _b === void 0 ? void 0 : _b.value;

      if (produtoPerecivel && dataValidadade.toString().length == 0) {
        return {
          produtoPerecivel: true
        };
      } else return null;
    }
    /***/

  },

  /***/
  "./src/app/ValidacoesCustomizadas/UnidadeValidator.ts":
  /*!************************************************************!*\
    !*** ./src/app/ValidacoesCustomizadas/UnidadeValidator.ts ***!
    \************************************************************/

  /*! exports provided: UnidadeValidator */

  /***/
  function srcAppValidacoesCustomizadasUnidadeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnidadeValidator", function () {
      return UnidadeValidator;
    });

    function UnidadeValidator(control) {
      var _a, _b;

      var unidadeMedida = (_a = control.get('unidadeMedida')) === null || _a === void 0 ? void 0 : _a.value;
      var quantidade = (_b = control.get('quantidade')) === null || _b === void 0 ? void 0 : _b.value;

      if ((unidadeMedida === null || unidadeMedida === void 0 ? void 0 : unidadeMedida.length) == 0 && (quantidade === null || quantidade === void 0 ? void 0 : quantidade.length) > 0) {
        return {
          unidadevalidator: true
        };
      } else return null;
    }
    /***/

  },

  /***/
  "./src/app/ValidacoesCustomizadas/dataFabricacaoValidator.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ValidacoesCustomizadas/dataFabricacaoValidator.ts ***!
    \*******************************************************************/

  /*! exports provided: dataFabricacaoValidator */

  /***/
  function srcAppValidacoesCustomizadasDataFabricacaoValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataFabricacaoValidator", function () {
      return dataFabricacaoValidator;
    });

    function dataFabricacaoValidator(control) {
      var _a, _b, _c, _d;

      if (((_a = control.get('DataValidade')) === null || _a === void 0 ? void 0 : _a.value) && ((_b = control.get('DataFabricacao')) === null || _b === void 0 ? void 0 : _b.value)) {
        var DataValidade = new Date((_c = control.get('DataValidade')) === null || _c === void 0 ? void 0 : _c.value);
        DataValidade.setDate(DataValidade.getDate() + 1);
        var DataFabricacao = new Date((_d = control.get('DataFabricacao')) === null || _d === void 0 ? void 0 : _d.value);
        DataFabricacao.setDate(DataFabricacao.getDate() + 1);

        if (DataFabricacao > DataValidade) {
          return {
            datafabricacao: true
          };
        }
      }

      return null;
    }
    /***/

  },

  /***/
  "./src/app/ValidacoesCustomizadas/dataValidadeValidator.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ValidacoesCustomizadas/dataValidadeValidator.ts ***!
    \*****************************************************************/

  /*! exports provided: dataValidadeValidator */

  /***/
  function srcAppValidacoesCustomizadasDataValidadeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataValidadeValidator", function () {
      return dataValidadeValidator;
    });

    function dataValidadeValidator(control) {
      if (control.value === null) return null;
      var dataValidade = new Date(control.value);
      dataValidade.setDate(dataValidade.getDate() + 1);

      if (dataValidade < new Date()) {
        return {
          dataValidade: true
        };
      } else return null;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cadastro/cadastro.component */
    "./src/app/cadastro/cadastro.component.ts");
    /* harmony import */


    var _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listagem/listagem.component */
    "./src/app/listagem/listagem.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/cadastro',
      pathMatch: 'full'
    }, {
      path: 'cadastro',
      component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["CadastroComponent"]
    }, {
      path: 'cadastro/:id',
      component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["CadastroComponent"]
    }, {
      path: 'listagem',
      component: _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_3__["ListagemComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css/dist/js/materialize */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Desafio Univali';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var elems = document.querySelectorAll('.sidenav');
          var instances = materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__["Sidenav"].init(elems);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 22,
      vars: 1,
      consts: [["id", "slide-out", 1, "sidenav", "sidenav-fixed"], [1, "user-view"], [1, "background"], ["src", "../../assets/img/logo.png", 1, "logo"], ["routerLinkActive", "active"], ["routerLink", "/cadastro"], [1, "material-icons"], ["routerLink", "/listagem"], ["href", "#", "data-target", "slide-out", 1, "sidenav-trigger"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cadastro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Listagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["header[_ngcontent-%COMP%], main[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n    padding-left: 350px;\r\n    padding-right: 50px;\r\n}\r\n\r\n@media only screen and (max-width : 992px) {\r\n\r\n    header[_ngcontent-%COMP%], main[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n.active[_ngcontent-%COMP%]{\r\n    background: #2e9f91 !important;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    margin-left: 35px;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n    position: inherit!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7OztRQUdJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcixcclxubWFpbixcclxuZm9vdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweCkge1xyXG5cclxuICAgIGhlYWRlcixcclxuICAgIG1haW4sXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICMyZTlmOTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cadastro/cadastro.component */
    "./src/app/cadastro/cadastro.component.ts");
    /* harmony import */


    var _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listagem/listagem.component */
    "./src/app/listagem/listagem.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-currency-mask */
    "./node_modules/ng2-currency-mask/__ivy_ngcc__/fesm2015/ng2-currency-mask.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");

    var maskConfig = {
      validation: false
    };
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a);

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(maskConfig), ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"], _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_6__["ListagemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"], _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_6__["ListagemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(maskConfig), ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cadastro/cadastro.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cadastro/cadastro.component.ts ***!
    \************************************************/

  /*! exports provided: CadastroComponent */

  /***/
  function srcAppCadastroCadastroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroComponent", function () {
      return CadastroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css/dist/js/materialize */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ValidacoesCustomizadas_dataValidadeValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ValidacoesCustomizadas/dataValidadeValidator */
    "./src/app/ValidacoesCustomizadas/dataValidadeValidator.ts");
    /* harmony import */


    var _ValidacoesCustomizadas_dataFabricacaoValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ValidacoesCustomizadas/dataFabricacaoValidator */
    "./src/app/ValidacoesCustomizadas/dataFabricacaoValidator.ts");
    /* harmony import */


    var _ValidacoesCustomizadas_ProdutoPerecivelValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ValidacoesCustomizadas/ProdutoPerecivelValidator */
    "./src/app/ValidacoesCustomizadas/ProdutoPerecivelValidator.ts");
    /* harmony import */


    var _ValidacoesCustomizadas_UnidadeValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ValidacoesCustomizadas/UnidadeValidator */
    "./src/app/ValidacoesCustomizadas/UnidadeValidator.ts");
    /* harmony import */


    var _produto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../produto.service */
    "./src/app/produto.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-currency-mask */
    "./node_modules/ng2-currency-mask/__ivy_ngcc__/fesm2015/ng2-currency-mask.js");

    function CadastroComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CadastroComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no maximo 50 caracter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CadastroComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Escolha a unidade de medida antes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CadastroComponent_div_34_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo data validade \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CadastroComponent_div_34_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "O produto se encontra vencido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CadastroComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data validade *");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CadastroComponent_div_34_span_4_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CadastroComponent_div_34_span_5_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_1_0 = null;
        var currVal_1 = (ctx_r3.formulario.controls.DataValidade == null ? null : ctx_r3.formulario.controls.DataValidade.errors == null ? null : ctx_r3.formulario.controls.DataValidade.errors.dataValidade) && ((tmp_1_0 = ctx_r3.formulario.get("DataValidade")) == null ? null : tmp_1_0.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formulario.errors == null ? null : ctx_r3.formulario.errors.produtoPerecivel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
      }
    }

    function CadastroComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data nao pode ser mais que a data de vencimento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        prefix: "R$ ",
        thousands: ".",
        decimal: ","
      };
    };

    var CadastroComponent = /*#__PURE__*/function () {
      function CadastroComponent(formBuilder, produtoService, route) {
        _classCallCheck(this, CadastroComponent);

        this.formBuilder = formBuilder;
        this.produtoService = produtoService;
        this.route = route;
        this.option = {
          prefix: ' ',
          thousands: '',
          decimal: ',',
          precision: '0',
          align: 'left'
        };
        this.mask = '0*,000';
      }

      _createClass(CadastroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.idProduto = Number(this.route.snapshot.paramMap.get('id'));
          console.log(">>>>>>>>>>>>>>>>>>>", this.idProduto);
          if (this.idProduto != 0) this.produtoService.obterProdutoPorId(this.idProduto - 1).then(function (x) {
            _this.formulario.setValue(x);
          })["catch"](function (x) {});
          this.formulario = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            unidadeMedida: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            quantidade: [],
            preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ProdutoPerecivel: ['', []],
            DataValidade: ['', [_ValidacoesCustomizadas_dataValidadeValidator__WEBPACK_IMPORTED_MODULE_3__["dataValidadeValidator"]]],
            DataFabricacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validators: [_ValidacoesCustomizadas_ProdutoPerecivelValidator__WEBPACK_IMPORTED_MODULE_5__["produtoPerecivelValidator"], _ValidacoesCustomizadas_dataFabricacaoValidator__WEBPACK_IMPORTED_MODULE_4__["dataFabricacaoValidator"], _ValidacoesCustomizadas_UnidadeValidator__WEBPACK_IMPORTED_MODULE_6__["UnidadeValidator"]]
          });
          $('input#input_text').characterCounter();
          $(document).ready(function () {
            materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_2__["updateTextFields"]();
          });
          var elems = document.querySelectorAll('select');
          materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_2__["FormSelect"].init(elems);
        }
      }, {
        key: "alterarMascaraUnidadeMedida",
        value: function alterarMascaraUnidadeMedida() {
          var _a;

          var unidadeMedida = (_a = this.formulario.get('unidadeMedida')) === null || _a === void 0 ? void 0 : _a.value;

          if (unidadeMedida == "Litro" || unidadeMedida == "Quilograma") {
            this.mask = '0*,000';
          } else {
            this.mask = '0*';
          }
        }
      }, {
        key: "cadastrarProduto",
        value: function cadastrarProduto() {
          var resource = JSON.stringify(this.formulario.value);
          if (this.idProduto == 0) this.produtoService.cadastrarProduto(resource);else this.produtoService.updateProduto(resource, this.idProduto - 1);
          this.formulario.reset();
        }
      }]);

      return CadastroComponent;
    }();

    CadastroComponent.ɵfac = function CadastroComponent_Factory(t) {
      return new (t || CadastroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_7__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    CadastroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CadastroComponent,
      selectors: [["app-cadastro"]],
      decls: 51,
      vars: 11,
      consts: [[3, "formGroup", "submit"], [1, "row"], [1, "input-field", "col", "s12"], ["id", "input_text", "type", "text", "data-length", "50", "formControlName", "nome"], ["for", "input_text", 1, "active"], ["class", "helper-text ", 4, "ngIf"], ["formControlName", "unidadeMedida", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "lt"], ["value", "kg"], ["value", "un"], ["id", "quantidadeId", "type", "text", "formControlName", "quantidade", 3, "mask"], ["for", "quantidadeId"], [1, "checkbox", "checkbox-circle"], ["type", "checkbox", "formControlName", "ProdutoPerecivel", 1, "filled-in"], ["class", "input-field col s12", 4, "ngIf"], ["id", "DataFabricacaoId", "type", "date", "formControlName", "DataFabricacao"], ["for", "DataFabricacaoId"], ["id", "precoId", "type", "text", "currencyMask", "", "formControlName", "preco", 3, "options"], ["for", "precoId"], [1, "btn-rigth"], ["type", "submit", 1, "btn", "btn-success", "btn-margin-rigth", 3, "disabled"], ["routerLink", "/listagem", 1, "btn", "btn-success", "btn-margin-rigth"], [1, "helper-text"], ["id", "DataValidadeId", "type", "date", "formControlName", "DataValidade"], ["for", "DataValidadeId"]],
      template: function CadastroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CadastroComponent_Template_form_submit_0_listener() {
            return ctx.cadastrarProduto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nome Produto *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CadastroComponent_span_6_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CadastroComponent_span_7_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CadastroComponent_Template_select_change_10_listener() {
            return ctx.alterarMascaraUnidadeMedida();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Escolha uma op\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Litro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quilograma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Unidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Unidade *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Quantidade *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CadastroComponent_span_25_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Produto perecivel?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CadastroComponent_div_34_Template, 6, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Data fabrica\xE7\xE3o *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CadastroComponent_span_39_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pre\xE7o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_1_0 = null;
          var currVal_1 = (ctx.formulario.controls.nome == null ? null : ctx.formulario.controls.nome.errors == null ? null : ctx.formulario.controls.nome.errors.required) && ((tmp_1_0 = ctx.formulario.get("nome")) == null ? null : tmp_1_0.touched);
          var tmp_2_0 = null;
          var currVal_2 = (ctx.formulario.controls.nome == null ? null : ctx.formulario.controls.nome.errors == null ? null : ctx.formulario.controls.nome.errors.maxlength) && ((tmp_2_0 = ctx.formulario.get("nome")) == null ? null : tmp_2_0.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mask", ctx.mask);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulario.errors == null ? null : ctx.formulario.errors.unidadevalidator);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formulario.controls.unidadeMedida.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulario.controls.ProdutoPerecivel.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulario.errors == null ? null : ctx.formulario.errors.datafabricacao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formulario.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
      styles: [".helper-text[_ngcontent-%COMP%]{\r\n    color:red\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlbHBlci10ZXh0e1xyXG4gICAgY29sb3I6cmVkXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cadastro',
          templateUrl: './cadastro.component.html',
          styleUrls: ['./cadastro.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _produto_service__WEBPACK_IMPORTED_MODULE_7__["ProdutoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/listagem/listagem.component.ts":
  /*!************************************************!*\
    !*** ./src/app/listagem/listagem.component.ts ***!
    \************************************************/

  /*! exports provided: ListagemComponent */

  /***/
  function srcAppListagemListagemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListagemComponent", function () {
      return ListagemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css/dist/js/materialize */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../produto.service */
    "./src/app/produto.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListagemComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListagemComponent_tr_23_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.mostrarModal(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.unidadeMedida);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantidade);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.preco);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 8, item_r1.DataValidade, "dd/MM/yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 11, item_r1.DataFabricacao, "dd/MM/yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cadastro/", i_r2 + 1, "");
      }
    }

    var ListagemComponent = /*#__PURE__*/function () {
      function ListagemComponent(produtoService, route) {
        _classCallCheck(this, ListagemComponent);

        this.produtoService = produtoService;
        this.route = route;
        this.listaProduto = [];
        this.dtOptions = {};
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ListagemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obterListaProduto();
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            language: {
              search: "pesquisar",
              paginate: {
                next: "Proximo",
                first: "Primeiro",
                last: "Ultimo",
                previous: "Anterior"
              },
              info: "Monstrando _START_ à _END_ de _TOTAL_ produtos",
              lengthMenu: "",
              zeroRecords: "Tabela vazia",
              infoEmpty: "",
              infoFiltered: ""
            }
          };
          var elems = document.querySelectorAll('.modal');
          materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__["Modal"].init(elems);
        }
      }, {
        key: "obterListaProduto",
        value: function obterListaProduto() {
          var _this2 = this;

          this.produtoService.obterListaProduto().then(function (lista) {
            _this2.listaProduto = lista;
            console.log(_this2.listaProduto);
          });
        }
      }, {
        key: "apagarProduto",
        value: function apagarProduto() {
          var _this3 = this;

          this.produtoService.apagarProdutoPorId(this.idproduto).then(function (mensagem) {
            console.log("deletar sucesso", _this3.idproduto, mensagem);

            _this3.obterListaProduto();

            _this3.closeModal();
          })["catch"](function (mensagem) {
            console.log("deletar erro", _this3.idproduto, mensagem);

            _this3.closeModal();
          });
        }
      }, {
        key: "mostrarModal",
        value: function mostrarModal(id) {
          this.idproduto = id;
          var elem = document.getElementById('modal1');
          var instance = materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__["Modal"].getInstance(elem);
          instance.open();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          var elem = document.getElementById('modal1');
          var instance = materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__["Modal"].getInstance(elem);
          this.dtOptions.destroy = true;
          instance.close();
          window.location.reload();
        }
      }, {
        key: "GetCar",
        value: function GetCar() {
          window.location.reload();
        }
      }]);

      return ListagemComponent;
    }();

    ListagemComponent.ɵfac = function ListagemComponent_Factory(t) {
      return new (t || ListagemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ListagemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListagemComponent,
      selectors: [["app-listagem"]],
      decls: 35,
      vars: 2,
      consts: [["routerLink", "/cadastro/", 1, "btn", "btn-rigth"], [1, "row"], [1, "col", "s12"], ["datatable", "", "id", "example", 1, "table", "row-border", "hover", "responsive-table", 3, "dtOptions"], [4, "ngFor", "ngForOf"], ["id", "modal1", 1, "modal"], [1, "modal-content"], [1, "modal-footer"], [1, "blue", "btn-margin-rigth", "btn", 3, "click"], [1, "modal-close", "btn", "btn-margin-rigth", 3, "click"], [1, "btn-margin-rigth", "red", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn-margin-rigth", "blue", "btn-small", 3, "routerLink"]],
      template: function ListagemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cadastrar novo produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unidade Medida");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pre\xE7o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Validade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Fabrica\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListagemComponent_tr_23_Template, 24, 14, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Aten\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Deseja realmente apagar o produto?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListagemComponent_Template_a_click_31_listener() {
            return ctx.apagarProduto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "apagar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListagemComponent_Template_a_click_33_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaProduto);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListagemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listagem',
          templateUrl: './listagem.component.html',
          styleUrls: ['./listagem.component.css']
        }]
      }], function () {
        return [{
          type: _produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/produto.service.ts":
  /*!************************************!*\
    !*** ./src/app/produto.service.ts ***!
    \************************************/

  /*! exports provided: ProdutoService */

  /***/
  function srcAppProdutoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutoService", function () {
      return ProdutoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProdutoService = /*#__PURE__*/function () {
      function ProdutoService() {
        _classCallCheck(this, ProdutoService);
      }

      _createClass(ProdutoService, [{
        key: "cadastrarProduto",
        value: function cadastrarProduto(produto) {
          var listaProdutos = JSON.parse(localStorage.getItem("listaProduto")) || [];
          listaProdutos.push(JSON.parse(produto));
          localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));
        }
      }, {
        key: "updateProduto",
        value: function updateProduto(produto, id) {
          var listaProdutos = JSON.parse(localStorage.getItem("listaProduto")) || [];
          listaProdutos[id] = JSON.parse(produto);
          localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));
        }
      }, {
        key: "obterProdutoPorId",
        value: function obterProdutoPorId(id) {
          return new Promise(function (resolve, reject) {
            var listaProdutos = JSON.parse(localStorage.getItem("listaProduto")) || [];
            if (listaProdutos.length > id) resolve(listaProdutos[id]);
            reject([]);
          });
        }
      }, {
        key: "obterListaProduto",
        value: function obterListaProduto() {
          return new Promise(function (resolve, reject) {
            var listaProdutos = [];
            listaProdutos = JSON.parse(localStorage.getItem("listaProduto"));
            resolve(listaProdutos);
          });
        }
      }, {
        key: "apagarProdutoPorId",
        value: function apagarProdutoPorId(id) {
          return new Promise(function (resolve, reject) {
            if (id >= 0) {
              var listaProdutos = JSON.parse(localStorage.getItem("listaProduto")) || [];
              listaProdutos.splice(id, 1);
              localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));
              resolve("Produto foi excluido com sucesso!");
            } else reject("Ocorreu um erro ao excluir produto");
          });
        }
      }]);

      return ProdutoService;
    }();

    ProdutoService.ɵfac = function ProdutoService_Factory(t) {
      return new (t || ProdutoService)();
    };

    ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProdutoService,
      factory: ProdutoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\teste\projetoUnivali\DesafioUnivali\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map