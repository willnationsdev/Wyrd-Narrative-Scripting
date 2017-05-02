define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Aurelia";
            config.map([
                { route: ['', 'home'],
                    name: 'home',
                    moduleId: './components/home/home',
                    nav: true,
                    title: 'Home'
                },
                { route: ['about'],
                    name: 'about',
                    moduleId: './components/about/about',
                    nav: true,
                    title: 'About'
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUFBO1FBb0RBLENBQUM7UUF0QkMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFFekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ25CLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxNQUFNO2lCQUNkO2dCQUNELEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNoQixJQUFJLEVBQUUsT0FBTztvQkFDYixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUMsT0FBTztpQkFDZDthQUVKLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFSCxVQUFDO0lBQUQsQ0FwREEsQUFvREMsSUFBQTtJQXBEWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlckNvbmZpZ3VyYXRpb24sIFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge05lbzRqVXRpbGl0eX0gZnJvbSAnLi93eXJkLW5lbzRqLXV0aWxpdHknO1xyXG4vL2ltcG9ydCAqIGFzIG5lbzRqIGZyb20gJ25lbzRqLXR5cGVzY3JpcHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblxyXG4gIC8vIFRoZSBSb3V0ZXIgcmVzcG9uc2libGUgZm9yIHJlLXJvdXRpbmcgd2ViIHRyYWZmaWMgdG8gdGhlIEFwcC5cclxuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIC8qXHJcbiAgLy8gVGhlIE5lbzRqIGRhdGFiYXNlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxyXG4gIC8vIERlZmluZXMgYWNjZXNzIG1ldGhvZG9sb2d5IGFuZCBjcmVkZW50aWFscy5cclxuICAvL1xyXG4gIHB1YmxpYyBuZW80akNvbmZpZzogbmVvNGouSU5lbzRqQ29uZmlnID0ge1xyXG4gICAgLy8gVGhlIGNyZWRlbnRpYWxzIHdpdGggd2hpY2ggdG8gYWNjZXNzIHRoZSBuZW80aiBBUElcclxuICAgIGF1dGhlbnRpY2F0aW9uOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIm5lbzRqXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIm5lbzRqXCJcclxuICAgIH0sXHJcbiAgICAvLyBUaGUgcHJvdG9jb2wgdXNlZCB0byBhY2Nlc3MgdGhlIG5lbzRqIG9iamVjdFxyXG4gICAgcHJvdG9jb2w6IG5lbzRqLk5FTzRKX1BST1RPQ09MLmh0dHAsXHJcbiAgICAvLyBUaGUgaG9zdCBpbiB3aGljaCB0byBmaW5kIHRoZSBuZW80aiBvYmplY3RcclxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbiAgICAvLyBUaGUgcG9ydCBpbiB3aGljaCB0byBmaW5kIHRoZSBuZW80aiBvYmplY3RcclxuICAgIHBvcnQ6IDc0NzRcclxuICB9O1xyXG4gICovXHJcblxyXG4gIC8vXHJcbiAgLy8gY29uZmlndXJlUm91dGVyXHJcbiAgLy8gXHJcbiAgLy8gQHBhcmFtIGNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBmb3Igcm91dGVycyBhc3NvY2lhdGVkIHdpdGggdGhlIEFwcFxyXG4gIC8vIEBwYXJhbSByb3V0ZXIgVGhlIHJvdXRlciByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGRlZmluZWQgcm91dGVzLlxyXG4gIC8vXHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpOiB2b2lkIHtcclxuICAgIGNvbmZpZy50aXRsZSA9IFwiQXVyZWxpYVwiO1xyXG5cclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgXHJcbiAgICAgICAgICBuYW1lOiAnaG9tZScsIFxyXG4gICAgICAgICAgbW9kdWxlSWQ6ICcuL2NvbXBvbmVudHMvaG9tZS9ob21lJyxcclxuICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgIHRpdGxlOiAnSG9tZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcm91dGU6IFsnYWJvdXQnXSwgXHJcbiAgICAgICAgICBuYW1lOiAnYWJvdXQnLFxyXG4gICAgICAgICAgbW9kdWxlSWQ6ICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnLFxyXG4gICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgdGl0bGU6J0Fib3V0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .router()
            .history()
            .eventAggregator();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLEVBQUU7YUFDUixPQUFPLEVBQUU7YUFDVCxlQUFlLEVBQUUsQ0FBQztRQUVyQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWpCRCw4QkFpQkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXHJcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKVxyXG4gICAgLnJvdXRlcigpXHJcbiAgICAuaGlzdG9yeSgpXHJcbiAgICAuZXZlbnRBZ2dyZWdhdG9yKCk7XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xyXG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcclxuICB9XHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('welcome',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Welcome = (function () {
        function Welcome() {
        }
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUFzQixDQUFDO1FBQUQsY0FBQztJQUFELENBQXRCLEFBQXVCLElBQUE7SUFBViwwQkFBTyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlbGNvbWUge30iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('components/about/about',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
        }
        return About;
    }());
    exports.About = About;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUFvQixDQUFDO1FBQUQsWUFBQztJQUFELENBQXBCLEFBQXFCLElBQUE7SUFBUixzQkFBSyIsImZpbGUiOiJjb21wb25lbnRzL2Fib3V0L2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFib3V0IHt9Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('components/home/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFBbUIsQ0FBQztRQUFELFdBQUM7SUFBRCxDQUFuQixBQUFvQixJQUFBO0lBQVAsb0JBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSG9tZSB7fSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('wyrd-neo4j-utility',["require", "exports", "neo4j-typescript"], function (require, exports, neo4j) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Neo4jUtility = (function () {
        function Neo4jUtility() {
        }
        Neo4jUtility.query = function (config, request) {
            var response;
            neo4j.connect(config).then(function (response) {
                console.log("Successfully connected");
                var myNode = {
                    firstName: "John",
                    lastName: "Doe"
                };
                response = neo4j.cypher(request);
            });
            return response;
        };
        return Neo4jUtility;
    }());
    exports.Neo4jUtility = Neo4jUtility;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd5cmQtbmVvNGotdXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBZUEsQ0FBQztRQWRpQixrQkFBSyxHQUFuQixVQUFvQixNQUEwQixFQUFFLE9BQWtDO1lBQzlFLElBQUksUUFBb0MsQ0FBQztZQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFFdEMsSUFBSSxNQUFNLEdBQVE7b0JBQ2QsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2lCQUNsQixDQUFDO2dCQUVGLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWZBLEFBZUMsSUFBQTtJQWZZLG9DQUFZIiwiZmlsZSI6Ind5cmQtbmVvNGotdXRpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5lbzRqIGZyb20gXCJuZW80ai10eXBlc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmVvNGpVdGlsaXR5IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnkoY29uZmlnOiBuZW80ai5JTmVvNGpDb25maWcsIHJlcXVlc3Q6IG5lbzRqLklOZW80akN5cGhlclJlcXVlc3QpOiBuZW80ai5JTmVvNGpDeXBoZXJSZXNwb25zZSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBuZW80ai5JTmVvNGpDeXBoZXJSZXNwb25zZTtcclxuICAgICAgICBuZW80ai5jb25uZWN0KGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG15Tm9kZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIkRvZVwiXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZSA9IG5lbzRqLmN5cGhlcihyZXF1ZXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><nav><ul><li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li></ul><nav><router-view></router-view></nav></nav></template>"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template><h1>Welcome</h1></template>"; });
define('text!components/about/about.html', ['module'], function(module) { module.exports = "<template><h1>ABOUT</h1></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h1>HOME</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map