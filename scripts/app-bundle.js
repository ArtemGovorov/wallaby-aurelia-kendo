define('app',["require", "exports", "jquery", "kendo-ui"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
            kendo.culture("en-US");
        }
        App.prototype.showNotification = function (type) {
            var message = "This is a message!";
            if (type === "warning") {
                $("#staticNotification").data("kendoNotification").warning(message);
            }
            else {
                $("#staticNotification").data("kendoNotification").show(message, type);
            }
            console.log("The type is: " + type);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUdFO1lBRkEsWUFBTyxHQUFHLGNBQWMsQ0FBQztZQUd2QixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRCw4QkFBZ0IsR0FBaEIsVUFBaUIsSUFBSTtZQUNuQixJQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RFLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDSCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pFLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixJQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0gsVUFBQztJQUFELENBakJBLEFBaUJDLElBQUE7SUFqQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwia2VuZG8tdWlcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBtZXNzYWdlID0gJ0hlbGxvIFdvcmxkISc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAga2VuZG8uY3VsdHVyZShcImVuLVVTXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd05vdGlmaWNhdGlvbih0eXBlKXtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgaXMgYSBtZXNzYWdlIVwiO1xyXG4gICAgaWYgKHR5cGUgPT09IFwid2FybmluZ1wiKSB7XHJcbiAgICAgICQoXCIjc3RhdGljTm90aWZpY2F0aW9uXCIpLmRhdGEoXCJrZW5kb05vdGlmaWNhdGlvblwiKS53YXJuaW5nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJChcIiNzdGF0aWNOb3RpZmljYXRpb25cIikuZGF0YShcImtlbmRvTm90aWZpY2F0aW9uXCIpLnNob3cobWVzc2FnZSwgdHlwZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgVGhlIHR5cGUgaXM6ICR7dHlwZX1gKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment", "kendo-ui", "kendo-ui/js/kendo.button", "kendo-ui/js/kendo.notification"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin("aurelia-kendoui-bridge");
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xyXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCBcImtlbmRvLXVpXCI7XHJcbmltcG9ydCBcImtlbmRvLXVpL2pzL2tlbmRvLmJ1dHRvblwiO1xyXG5pbXBvcnQgXCJrZW5kby11aS9qcy9rZW5kby5ub3RpZmljYXRpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKVxyXG4gICAgLnBsdWdpbihcImF1cmVsaWEta2VuZG91aS1icmlkZ2VcIik7XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xyXG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcclxuICB9XHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"aurelia-kendoui-bridge/button/button\"></require><require from=\"aurelia-kendoui-bridge/notification/notification\"></require><div id=\"errorDisplay\" class=\"alert\"><ak-notification id=\"staticNotification\" k-append-to=\"#errorDisplay\" k-button.bind=\"true\" k-hide-on-click.bind=\"false\" k-auto-hide-after=\"0\" k-widget.bind=\"staticNotification\"></ak-notification></div><h1>${message}</h1><button id=\"info\" click.delegate=\"showNotification($event.target.id)\">Information</button> <button id=\"error\" click.delegate=\"showNotification($event.target.id)\">Error</button> <button id=\"warning\" click.delegate=\"showNotification($event.target.id)\">Success</button></template>"; });
//# sourceMappingURL=app-bundle.js.map