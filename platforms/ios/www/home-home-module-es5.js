(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************/

    /*! exports provided: HTTP */

    /***/
    function node_modulesIonicNativeHttp__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HTTP", function () {
        return HTTP;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var HTTP =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTP, _super);

        function HTTP() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        HTTP.prototype.getBasicAuthHeader = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBasicAuthHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.useBasicAuth = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "useBasicAuth", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getHeaders = function (host) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getHeaders", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setHeader = function (host, header, value) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getDataSerializer = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setDataSerializer = function (serializer) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setCookie = function (url, cookie) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setCookie", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.clearCookies = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.removeCookies = function (url, cb) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getCookieString = function (url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCookieString", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getRequestTimeout = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setRequestTimeout = function (timeout) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getFollowRedirect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setFollowRedirect = function (follow) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setServerTrustMode = function (mode) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setServerTrustMode", {}, arguments);
        };

        HTTP.prototype.post = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", {}, arguments);
        };

        HTTP.prototype.get = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments);
        };

        HTTP.prototype.put = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", {}, arguments);
        };

        HTTP.prototype.patch = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", {}, arguments);
        };

        HTTP.prototype["delete"] = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", {}, arguments);
        };

        HTTP.prototype.head = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", {}, arguments);
        };

        HTTP.prototype.options = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", {}, arguments);
        };

        HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", {}, arguments);
        };

        HTTP.prototype.downloadFile = function (url, body, headers, filePath) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", {}, arguments);
        };

        HTTP.prototype.sendRequest = function (url, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", {}, arguments);
        };

        Object.defineProperty(HTTP.prototype, "ErrorCode", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "ErrorCode");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "ErrorCode", value);
          },
          enumerable: true,
          configurable: true
        });
        HTTP.pluginName = "HTTP";
        HTTP.plugin = "cordova-plugin-advanced-http";
        HTTP.pluginRef = "cordova.plugin.http";
        HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
        HTTP.platforms = ["Android", "iOS"];

        HTTP.ɵfac = function HTTP_Factory(t) {
          return ɵHTTP_BaseFactory(t || HTTP);
        };

        HTTP.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: HTTP,
          factory: function factory(t) {
            return HTTP.ɵfac(t);
          }
        });

        var ɵHTTP_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HTTP);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HTTP, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return HTTP;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQW1FbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXFCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFPQSxrQkFBRyxhQUFDLEdBQVcsRUFBRSxVQUFlLEVBQUUsT0FBWTtBQUsvQyxJQU9DLGtCQUFHLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0FBS3pDLElBT0Msb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFPRCxxQkFBTSxhQUFDLEdBQVcsRUFBRSxVQUFlLEVBQUUsT0FBWTtBQUsvQyxJQU9GLG1CQUFJLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0FBSy9DLElBT0Esc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFNcEQsSUFRRSx5QkFBVSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQTJCLEVBQUUsSUFBdUI7QUFNM0YsSUFPViwyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBZVosMEJBQVcsYUFDVCxHQUFXLEVBQ1gsT0FVQztBQUtNLDBCQS9SQSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEwQjtBQUlyQjtBQUFRO0FBQThCO0FBQ3RDO0FBQ0s7QUFDcUM7SUFwQnBDLElBQUksd0JBRGhCLFVBQVUsRUFBRSxRQUNBLElBQUk7Ozs7OzBCQUFFO0FBQUMsZUF4RXBCO0FBQUUsRUF3RXdCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRUUFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBIVFRQIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlIG9yIGEgbmVnYXRpdmUgaW50ZXJuYWwgZXJyb3IgY29kZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlYWRlcnMgb2YgdGhlIHJlc3BvbnNlLlxuICAgKi9cbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdGhlIGZpbmFsIFVSTCBvYnRhaW5lZCBhZnRlciBhbnkgcmVkaXJlY3RzLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSByZXNwb25zZS4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlc29sdmVzLlxuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIEVycm9yIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlamVjdHMuXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBIVFRQXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgLyBQaG9uZWdhcCBwbHVnaW4gZm9yIGNvbW11bmljYXRpbmcgd2l0aCBIVFRQIHNlcnZlcnMuIFN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBBZHZhbnRhZ2VzIG92ZXIgSmF2YXNjcmlwdCByZXF1ZXN0czpcbiAqIC0gU1NMIC8gVExTIFBpbm5pbmdcbiAqIC0gQ09SUyByZXN0cmljdGlvbnMgZG8gbm90IGFwcGx5XG4gKiAtIEhhbmRsaW5nIG9mIEhUVFAgY29kZSA0MDEgLSByZWFkIG1vcmUgYXQgW0lzc3VlIENCLTI0MTVdKGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ0ItMjQxNSlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEhUVFApIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5odHRwLmdldCgnaHR0cDovL2lvbmljLmlvJywge30sIHt9KVxuICogICAudGhlbihkYXRhID0+IHtcbiAqXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7IC8vIGRhdGEgcmVjZWl2ZWQgYnkgc2VydmVyXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlcnJvciA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cyk7XG4gKiAgICAgY29uc29sZS5sb2coZXJyb3IuZXJyb3IpOyAvLyBlcnJvciBtZXNzYWdlIGFzIHN0cmluZ1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmhlYWRlcnMpO1xuICpcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSFRUUFJlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSFRUUCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5odHRwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyB0aGUgaW50ZXJuYWwgZXJyb3IgY29kZXMgd2hpY2ggY2FuIGJlIHJldHVybmVkIGluIGEgSFRUUFJlc3BvbnNlIG9iamVjdC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgRXJyb3JDb2RlOiB7XG4gICAgR0VORVJJQzogbnVtYmVyO1xuICAgIFNTTF9FWENFUFRJT046IG51bWJlcjtcbiAgICBTRVJWRVJfTk9UX0ZPVU5EOiBudW1iZXI7XG4gICAgVElNRU9VVDogbnVtYmVyO1xuICAgIFVOU1VQUE9SVEVEX1VSTDogbnVtYmVyO1xuICAgIE5PVF9DT05ORUNURUQ6IG51bWJlcjtcbiAgICBQT1NUX1BST0NFU1NJTkdfRkFJTEVEOiBudW1iZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybSB7J0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYmFzZTY0RW5jb2RlZFVzZXJuYW1lQW5kUGFzc3dvcmQnfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJhc2ljQXV0aEhlYWRlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogeyBBdXRob3JpemF0aW9uOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgc2V0cyB1cCBhbGwgZnV0dXJlIHJlcXVlc3RzIHRvIHVzZSBCYXNpYyBIVFRQIGF1dGhlbnRpY2F0aW9uIHdpdGggdGhlIGdpdmVuIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVzZUJhc2ljQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgYSBnaXZlbiBob3N0bmFtZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybiBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciB0aGUgaG9zdG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRIZWFkZXJzKGhvc3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIGhlYWRlciBmb3IgYWxsIGZ1dHVyZSByZXF1ZXN0cy4gVGFrZXMgYSBob3N0bmFtZSwgYSBoZWFkZXIgYW5kIGEgdmFsdWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZSB0byBiZSB1c2VkIGZvciBzY29waW5nIHRoaXMgaGVhZGVyXG4gICAqIEBwYXJhbSBoZWFkZXIge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGhlYWRlclxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIZWFkZXIoaG9zdDogc3RyaW5nLCBoZWFkZXI6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QgYW5kIFBVVCByZXF1ZXN0cy5cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29uZmlndXJlZCBkYXRhIHNlcmlhbGl6ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREYXRhU2VyaWFsaXplcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCwgUFVUIGFuZCBQQVRDSCByZXF1ZXN0cy4gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAcGFyYW0gc2VyaWFsaXplciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplci5cbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCNzZXRkYXRhc2VyaWFsaXplclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERhdGFTZXJpYWxpemVyKHNlcmlhbGl6ZXI6ICd1cmxlbmNvZGVkJyB8ICdqc29uJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnIHwgJ3JhdycpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSBjb29raWUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gU2NvcGUgb2YgdGhlIGNvb2tpZVxuICAgKiBAcGFyYW0gY29va2llIHtzdHJpbmd9IFJGQyBjb21wbGlhbnQgY29va2llIHN0cmluZ1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENvb2tpZSh1cmw6IHN0cmluZywgY29va2llOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBjb29raWVzLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsZWFyQ29va2llcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb29raWVzIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlQ29va2llcyh1cmw6IHN0cmluZywgY2I6ICgpID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgY29va2llIHN0cmluZyBmb3IgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q29va2llU3RyaW5nKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyB0aGUgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJlcXVlc3RUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlIGluIHNlY29uZHMuXG4gICAqIEBwYXJhbSB0aW1lb3V0IHtudW1iZXJ9IFRoZSB0aW1lb3V0IGluIHNlY29uZHMuIERlZmF1bHQgNjBcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSZXF1ZXN0VGltZW91dCh0aW1lb3V0OiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgaWYgaXQgc2hvdWxkIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgdHJ1ZSBpZiBpdCBpcyBjb25maWd1cmVkIHRvIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZvbGxvd1JlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgaWYgaXQgc2hvdWxkIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseS5cbiAgICogQHBhcmFtIGZvbGxvdyB7Ym9vbGVhbn0gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgZm9sbG93aW5nIHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Rm9sbG93UmVkaXJlY3QoZm9sbG93OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgc2VydmVyIHRydXN0IG1vZGUsIGJlaW5nIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICogZGVmYXVsdDogZGVmYXVsdCBTU0wgdHJ1c3RzaGlwIGFuZCBob3N0bmFtZSB2ZXJpZmljYXRpb24gaGFuZGxpbmcgdXNpbmcgc3lzdGVtJ3MgQ0EgY2VydHM7XG4gICAqIGxlZ2FjeTogdXNlIGxlZ2FjeSBkZWZhdWx0IGJlaGF2aW9yICg8IDIuMC4zKSwgZXhjbHVkaW5nIHVzZXIgaW5zdGFsbGVkIENBIGNlcnRzIChvbmx5IGZvciBBbmRyb2lkKTtcbiAgICogbm9jaGVjazogZGlzYWJsZSBTU0wgY2VydGlmaWNhdGUgY2hlY2tpbmcgYW5kIGhvc3RuYW1lIHZlcmlmaWNhdGlvbiwgdHJ1c3RpbmcgYWxsIGNlcnRzIChtZWFudCB0byBiZSB1c2VkIG9ubHkgZm9yIHRlc3RpbmcgcHVycG9zZXMpO1xuICAgKiBwaW5uZWQ6IHRydXN0IG9ubHkgcHJvdmlkZWQgY2VydGlmaWNhdGVzO1xuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwI3NldHNlcnZlcnRydXN0bW9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBzZXJ2ZXIgdHJ1c3QgbW9kZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZXJ2ZXJUcnVzdE1vZGUobW9kZTogJ2RlZmF1bHQnIHwgJ2xlZ2FjeScgfCAnbm9jaGVjaycgfCAncGlubmVkJyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQVVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQQVRDSCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoZWFkKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gT1BUSU9OUyByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBsb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHJlcXVlc3RcbiAgICogQHBhcmFtIG9wdGlvbnMubWV0aG9kIHtzdHJpbmd9IHJlcXVlc3QgbWV0aG9kXG4gICAqIEBwYXJhbSBvcHRpb25zLmRhdGEge09iamVjdH0gcGF5bG9hZCB0byBiZSBzZW5kIHRvIHRoZSBzZXJ2ZXIgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMucGFyYW1zIHtPYmplY3R9IHF1ZXJ5IHBhcmFtcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgVVJMIChvbmx5IGFwcGxpY2FibGUgb24gZ2V0LCBoZWFkLCBkZWxldGUsIHVwbG9hZCBvciBkb3dubG9hZCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZXJpYWxpemVyIHtzdHJpbmd9IGRhdGEgc2VyaWFsaXplciB0byBiZSB1c2VkIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpLCBkZWZhdWx0cyB0byBnbG9iYWwgc2VyaWFsaXplciB2YWx1ZSwgc2VlIHNldERhdGFTZXJpYWxpemVyIGZvciBzdXBwb3J0ZWQgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLnRpbWVvdXQge251bWJlcn0gdGltZW91dCB2YWx1ZSBmb3IgdGhlIHJlcXVlc3QgaW4gc2Vjb25kcywgZGVmYXVsdHMgdG8gZ2xvYmFsIHRpbWVvdXQgdmFsdWVcbiAgICogQHBhcmFtIG9wdGlvbnMuaGVhZGVycyB7T2JqZWN0fSBoZWFkZXJzIG9iamVjdCAoa2V5IHZhbHVlIHBhaXIpLCB3aWxsIGJlIG1lcmdlZCB3aXRoIGdsb2JhbCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMuZmlsZVBhdGgge3N0cmluZ30gZmlsZSBwYXRoKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBhbmQgZG93bmxvYWQgc2VlIHVwbG9hZEZpbGUgYW5kIGRvd25sb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMubmFtZSB7c3RyaW5nfSBuYW1lKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBzZWUgdXBsb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VUeXBlIHtzdHJpbmd9IHJlc3BvbnNlIHR5cGUsIGRlZmF1bHRzIHRvIHRleHRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1ldGhvZDogJ2dldCcgfCAncG9zdCcgfCAncHV0JyB8ICdwYXRjaCcgfCAnaGVhZCcgfCAnZGVsZXRlJyB8ICdvcHRpb25zJyB8ICd1cGxvYWQnIHwgJ2Rvd25sb2FkJztcbiAgICAgIGRhdGE/OiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG4gICAgICBwYXJhbXM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH07XG4gICAgICBzZXJpYWxpemVyPzogJ2pzb24nIHwgJ3VybGVuY29kZWQnIHwgJ3V0ZjgnIHwgJ211bHRpcGFydCc7XG4gICAgICB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgaGVhZGVycz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgIGZpbGVQYXRoPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBuYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICByZXNwb25zZVR5cGU/OiAndGV4dCcgfCAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nO1xuICAgIH1cbiAgKTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <strong>Ready to create an app?</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" \n      href=\"https://ionicframework.com/docs/components\">UI Components</a>\n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n    </p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");

      var HomePage = function HomePage(http) {
        _classCallCheck(this, HomePage);

        this.http = http;
      };

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map