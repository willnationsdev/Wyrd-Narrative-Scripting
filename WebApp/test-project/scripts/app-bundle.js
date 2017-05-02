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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUFBO1FBbURBLENBQUM7UUF0QkMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFFekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ25CLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxNQUFNO2lCQUNkO2dCQUNELEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNoQixJQUFJLEVBQUUsT0FBTztvQkFDYixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUMsT0FBTztpQkFDZDthQUVKLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFSCxVQUFDO0lBQUQsQ0FuREEsQUFtREMsSUFBQTtJQW5EWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlckNvbmZpZ3VyYXRpb24sIFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbi8vaW1wb3J0ICogYXMgbmVvNGogZnJvbSAnbmVvNGotdHlwZXNjcmlwdCc7XG5pbXBvcnQge05lbzRqVXRpbGl0eX0gZnJvbSAnLi90b29scy93eXJkLW5lbzRqLXV0aWxpdHknO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICAvLyBUaGUgUm91dGVyIHJlc3BvbnNpYmxlIGZvciByZS1yb3V0aW5nIHdlYiB0cmFmZmljIHRvIHRoZSBBcHAuXG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuLypcbiAgLy8gVGhlIE5lbzRqIGRhdGFiYXNlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAvLyBEZWZpbmVzIGFjY2VzcyBtZXRob2RvbG9neSBhbmQgY3JlZGVudGlhbHMuXG4gIHB1YmxpYyBuZW80akNvbmZpZzogbmVvNGouSU5lbzRqQ29uZmlnID0ge1xuICAgIC8vIFRoZSBjcmVkZW50aWFscyB3aXRoIHdoaWNoIHRvIGFjY2VzcyB0aGUgbmVvNGogQVBJXG4gICAgYXV0aGVudGljYXRpb246IHtcbiAgICAgIHVzZXJuYW1lOiBcIm5lbzRqXCIsXG4gICAgICBwYXNzd29yZDogXCJuZW80alwiXG4gICAgfSxcbiAgICAvLyBUaGUgcHJvdG9jb2wgdXNlZCB0byBhY2Nlc3MgdGhlIG5lbzRqIG9iamVjdFxuICAgIHByb3RvY29sOiBuZW80ai5ORU80Sl9QUk9UT0NPTC5odHRwLFxuICAgIC8vIFRoZSBob3N0IGluIHdoaWNoIHRvIGZpbmQgdGhlIG5lbzRqIG9iamVjdFxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgLy8gVGhlIHBvcnQgaW4gd2hpY2ggdG8gZmluZCB0aGUgbmVvNGogb2JqZWN0XG4gICAgcG9ydDogNzQ3NFxuICB9O1xuKi9cblxuICAvL1xuICAvLyBjb25maWd1cmVSb3V0ZXJcbiAgLy8gXG4gIC8vIEBwYXJhbSBjb25maWcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHJvdXRlcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBBcHBcbiAgLy8gQHBhcmFtIHJvdXRlciBUaGUgcm91dGVyIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyB0aGUgZGVmaW5lZCByb3V0ZXMuXG4gIC8vXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKTogdm9pZCB7XG4gICAgY29uZmlnLnRpdGxlID0gXCJBdXJlbGlhXCI7XG5cbiAgICBjb25maWcubWFwKFtcbiAgICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCBcbiAgICAgICAgICBuYW1lOiAnaG9tZScsIFxuICAgICAgICAgIG1vZHVsZUlkOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZScsXG4gICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiAnSG9tZSdcbiAgICAgICAgfSxcbiAgICAgICAgeyByb3V0ZTogWydhYm91dCddLCBcbiAgICAgICAgICBuYW1lOiAnYWJvdXQnLFxuICAgICAgICAgIG1vZHVsZUlkOiAnLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JyxcbiAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgdGl0bGU6J0Fib3V0J1xuICAgICAgICB9XG5cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            .feature('resources');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('tools/wyrd-neo4j-utility',["require", "exports", "neo4j-typescript"], function (require, exports, neo4j) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Neo4jUtility = (function () {
        function Neo4jUtility() {
        }
        Neo4jUtility.query = function (config, request) {
            var cypherResponse = null;
            neo4j.connect(config).then(function (response) {
                console.log("Successfully connected");
                var myNode = {
                    firstName: "John",
                    lastName: "Doe"
                };
                neo4j.cypher(request).then(function (value) { cypherResponse = value; });
            });
            return cypherResponse;
        };
        return Neo4jUtility;
    }());
    exports.Neo4jUtility = Neo4jUtility;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzL3d5cmQtbmVvNGotdXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBaUJBLENBQUM7UUFoQmlCLGtCQUFLLEdBQW5CLFVBQW9CLE1BQTBCLEVBQUUsT0FBa0M7WUFDOUUsSUFBSSxjQUFjLEdBQStCLElBQUksQ0FBQztZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFFdEMsSUFBSSxNQUFNLEdBQVE7b0JBQ2QsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2lCQUNsQixDQUFDO2dCQUVGLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN0QixVQUFDLEtBQWlDLElBQU8sY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDakUsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMxQixDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLG9DQUFZIiwiZmlsZSI6InRvb2xzL3d5cmQtbmVvNGotdXRpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5lbzRqIGZyb20gXCJuZW80ai10eXBlc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmVvNGpVdGlsaXR5IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnkoY29uZmlnOiBuZW80ai5JTmVvNGpDb25maWcsIHJlcXVlc3Q6IG5lbzRqLklOZW80akN5cGhlclJlcXVlc3QpOiBuZW80ai5JTmVvNGpDeXBoZXJSZXNwb25zZSB7XHJcbiAgICAgICAgbGV0IGN5cGhlclJlc3BvbnNlOiBuZW80ai5JTmVvNGpDeXBoZXJSZXNwb25zZSA9IG51bGw7XHJcbiAgICAgICAgbmVvNGouY29ubmVjdChjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBteU5vZGU6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJEb2VcIlxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmVvNGouY3lwaGVyKHJlcXVlc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAodmFsdWU6IG5lbzRqLklOZW80akN5cGhlclJlc3BvbnNlKSA9PiB7IGN5cGhlclJlc3BvbnNlID0gdmFsdWU7IH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gY3lwaGVyUmVzcG9uc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

define('modules/neo4j-typescript/src/index.spec',["require", "exports", "chai", "./index", "mocha"], function (require, exports, chai, neo4j) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var should = chai.should();
    describe("Neo4j Typescript REST", function () {
        var neo4jConfig = {
            protocol: neo4j.NEO4J_PROTOCOL.http,
            host: "localhost",
            port: 7474,
            authentication: {
                username: "neo4j",
                password: "neo4j"
            },
            streaming: true
        };
        var badNeo4jConfig = JSON.parse(JSON.stringify(neo4jConfig));
        var requestOptions = neo4j.getRequestOptions();
        describe("#connect", function () {
            var connection = null;
            it("should fail to parse url endpoint", function (done) {
                badNeo4jConfig.host = null;
                neo4j.connect(badNeo4jConfig)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should establish a new connection", function (done) {
                neo4j.connect(neo4jConfig).
                    then(function (response) {
                    connection = response;
                    done();
                }).
                    catch(function (reason) {
                    done(reason);
                });
            });
            it("should return an existing connection", function (done) {
                neo4j.connect(neo4jConfig).
                    then(function (response) {
                    response.should.eql(connection);
                    done();
                }).
                    catch(function (reason) {
                    done(reason);
                });
            });
            it("should confirm a connection is present", function (done) {
                neo4j.isConnected().should.equal(true);
                done();
            });
            it("should unset the http request header to streaming", function () {
                neo4j.setStreaming(false);
                neo4j.isStreaming().should.equal(false);
            });
        });
        describe("#global graph functions", function () {
            it("should fail to return all graph relationship types due to request error.", function (done) {
                var goodBaseUrl = requestOptions.baseUrl;
                requestOptions.baseUrl = "WRONG";
                neo4j.getRelationshipTypes()
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    requestOptions.baseUrl = goodBaseUrl;
                    done();
                });
            });
            it("should return all graph relationship types", function (done) {
                neo4j.getRelationshipTypes()
                    .then(function (relationshipTypes) {
                    relationshipTypes.should.be.instanceOf(Array);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail to return all graph property keys due to request error.", function (done) {
                var goodBaseUrl = requestOptions.baseUrl;
                requestOptions.baseUrl = "WRONG";
                neo4j.getAllPropertyKeys()
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    requestOptions.baseUrl = goodBaseUrl;
                    done();
                });
            });
            it("should return all graph property keys", function (done) {
                neo4j.getAllPropertyKeys()
                    .then(function (propertyKeys) {
                    propertyKeys.should.be.instanceOf(Array);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should create a new index on label", function (done) {
                neo4j.createIndex("test", "testProperty")
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should list index just created by label", function (done) {
                neo4j.listIndexesForLabel("test")
                    .then(function (response) {
                    response[0].property_keys.should.contain("testProperty");
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should drop index just created on label", function (done) {
                neo4j.dropIndex("test", "testProperty")
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
        });
        describe("#Cypher query function", function () {
            it("should execute a valid cypher statement", function (done) {
                var validCypher = {
                    statements: [{
                            statement: "MATCH (n) RETURN n"
                        }]
                };
                neo4j.cypher(validCypher)
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should execute several valid cypher statements", function (done) {
                var validCypher = {
                    statements: [
                        {
                            statement: "MATCH (n) RETURN count(n)"
                        },
                        {
                            statement: "MATCH (x) RETURN x"
                        }
                    ]
                };
                neo4j.cypher(validCypher)
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should return cypher responses specified by 'ResultDataContents'", function (done) {
                var query = "MATCH (n) RETURN n LIMIT 3";
                var cypherRequest = {
                    statements: [{
                            statement: query,
                            resultDataContents: ["REST"]
                        }]
                };
                neo4j.cypher(cypherRequest)
                    .then(function (response) {
                    response.results[0].data[0].should.have.property("rest");
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail to execute an invalid cypher statement", function (done) {
                var invalidCypher = {
                    statements: [{
                            statement: "This is not valid"
                        }]
                };
                neo4j.cypher(invalidCypher)
                    .then(function (response) {
                    done(response);
                }).catch(function (reason) {
                    done();
                });
            });
        });
        describe("#Node level functions", function () {
            var id = null;
            it("should fail to create a new Node due to request error", function (done) {
                var goodBaseUrl = requestOptions.baseUrl;
                requestOptions.baseUrl = "WRONG";
                neo4j.createNode({ firstName: "Testing" })
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    requestOptions.baseUrl = goodBaseUrl;
                    done();
                });
            });
            it("should fail to create a new Node due to response error", function (done) {
                neo4j.createNode({ nested: { foo: "bar" } })
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should create a new Node", function (done) {
                neo4j.createNode({ firstName: "Testing" })
                    .then(function (response) {
                    response.metadata.id.should.be.above(0);
                    id = response.metadata.id;
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail to return newly created node due to request error", function (done) {
                var goodBaseUrl = requestOptions.baseUrl;
                requestOptions.baseUrl = "WRONG";
                neo4j.getNode(id)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    requestOptions.baseUrl = goodBaseUrl;
                    done();
                });
            });
            it("should return newly created node", function (done) {
                neo4j.getNode(id)
                    .then(function (response) {
                    response.metadata.id.should.equal(id);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should get the degree of the newly created node(0)", function (done) {
                neo4j.getNodeDegree(id)
                    .then(function (response) {
                    response.should.equal(0);
                    return neo4j.getNodeDegree(id, "all");
                })
                    .then(function (response) {
                    response.should.equal(0);
                    return neo4j.getNodeDegree(id, "all", "testing");
                })
                    .then(function (response) {
                    response.should.equal(0);
                    done();
                })
                    .catch(function (reason) { done(reason); });
            });
            it("should delete newly created node", function (done) {
                neo4j.deleteNode(id)
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail to delete node due to request error", function (done) {
                var goodBaseUrl = requestOptions.baseUrl;
                requestOptions.baseUrl = "WRONG";
                neo4j.deleteNode(id)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    requestOptions.baseUrl = goodBaseUrl;
                    done();
                });
            });
            it("should fail to delete non-existant node", function (done) {
                neo4j.deleteNode(id)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should not find deleted node", function (done) {
                neo4j.getNode(id)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
        });
        describe("#Property level functions", function () {
            var id = null;
            before(function (done) {
                neo4j.createNode({ firstName: "Testing" })
                    .then(function (response) {
                    id = response.metadata.id;
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            after(function (done) {
                neo4j.deleteNode(id)
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail to upsert a single node property", function (done) {
                neo4j.setProperty(id, "WRONG", "lastName", "Pennetta")
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should upsert a single node property", function (done) {
                neo4j.setProperty(id, "node", "lastName", "Pennetta")
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should upsert node properties", function (done) {
                var addedProperties = { newProperty: "My Property" };
                neo4j.updateProperties(id, "node", addedProperties)
                    .then(function (response) {
                    response.should.equal(true);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should get node properties", function (done) {
                neo4j.getProperties(id, "node")
                    .then(function (response) {
                    response.should.include.keys("newProperty");
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should get a single node property", function (done) {
                neo4j.getProperty(id, "newProperty", "node")
                    .then(function (response) {
                    response.should.equal("My Property");
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should fail on null property insert", function (done) {
                var myTestNullString = null;
                neo4j.setProperty(id, "node", "nullProperty", myTestNullString)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should fail on nested property insert.", function (done) {
                var myTestNestedObject = {
                    "foo": {
                        "bar": "baz"
                    }
                };
                neo4j.updateProperties(id, "node", myTestNestedObject)
                    .then(function (response) {
                    done(response);
                })
                    .catch(function (reason) {
                    done();
                });
            });
            it("should delete all properties on a node", function (done) {
                neo4j.deleteProperty(id, "newProperty", "node")
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should delete a single property on a node", function (done) {
                neo4j.deleteAllProperties(id, "node")
                    .then(function (response) {
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
        });
        describe("#Relationship level functions", function () {
            var sampleStartNode = null;
            var sampleEndNode = null;
            var sampleNewRelationship = null;
            before(function (done) {
                neo4j.createNode()
                    .then(function (response) {
                    sampleStartNode = response;
                    sampleStartNode.self.should.not.equal(null);
                    return neo4j.createNode();
                })
                    .then(function (response) {
                    sampleEndNode = response;
                    sampleEndNode.self.should.not.equal(null);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("Should create a new relationship", function (done) {
                neo4j.createRelationship(sampleStartNode, sampleEndNode, "MET", { createdDate: new Date().toISOString() })
                    .then(function (response) {
                    sampleNewRelationship = response;
                    sampleNewRelationship.self.should.not.equal(null);
                    sampleNewRelationship.self.should.be.a("string");
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("Should return newly created relationship", function (done) {
                neo4j.getRelationship(sampleNewRelationship.metadata.id)
                    .then(function (response) {
                    response.self.should.equal(sampleNewRelationship.self);
                    response.data.createdDate.should.not.equal(null);
                    done();
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should add a new property to newly created relationship", function (done) { done(); });
            it("should set all properties on newly created relationship", function (done) { done(); });
            it("should set a single property on newly created relationship", function (done) { done(); });
            it("should get all properties on newly created relationship", function (done) { done(); });
            it("should get a single property on newly created relationship", function (done) { done(); });
            it("should delete newly created relationship", function (done) {
                neo4j.deleteRelationship(sampleNewRelationship)
                    .then(function (response) {
                    done();
                    ;
                })
                    .catch(function (reason) {
                    done(reason);
                });
            });
            it("should get all relationships on node", function (done) { done(); });
            it("should get all incoming relationships on node", function (done) { done(); });
            it("should get all outgoing relationships on node", function (done) { done(); });
            it("should get all typed relationshipd on a node", function (done) { done(); });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmVvNGotdHlwZXNjcmlwdC9zcmMvaW5kZXguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFPQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFM0IsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1FBQ2hDLElBQUksV0FBVyxHQUF1QjtZQUNwQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJO1lBQ25DLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsY0FBYyxFQUFFO2dCQUNkLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsT0FBTzthQUNsQjtZQUNELFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUM7UUFDRixJQUFJLGNBQWMsR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxjQUFjLEdBQXdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXBFLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxVQUFTLElBQUk7Z0JBQ25ELGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQUMsUUFBUTtvQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxNQUFNO29CQUNaLElBQUksRUFBRSxDQUFBO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsVUFBUyxJQUFJO2dCQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcs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Q0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixFQUFFLENBQUMsK0NBQStDLEVBQUUsVUFBUyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixFQUFFLENBQUMsOENBQThDLEVBQUUsVUFBUyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1vZHVsZXMvbmVvNGotdHlwZXNjcmlwdC9zcmMvaW5kZXguc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm1vY2hhXCI7XG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gIFwiY2hhaVwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG5pbXBvcnQgKiBhcyBuZW80aiBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0ICogYXMgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuXG5sZXQgc2hvdWxkID0gY2hhaS5zaG91bGQoKTtcblxuZGVzY3JpYmUoXCJOZW80aiBUeXBlc2NyaXB0IFJFU1RcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCBuZW80akNvbmZpZzogbmVvNGouSU5lbzRqQ29uZmlnID0ge1xuICAgIHByb3RvY29sOiBuZW80ai5ORU80Sl9QUk9UT0NPTC5odHRwLFxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgcG9ydDogNzQ3NCxcbiAgICBhdXRoZW50aWNhdGlvbjoge1xuICAgICAgdXNlcm5hbWU6IFwibmVvNGpcIixcbiAgICAgIHBhc3N3b3JkOiBcIm5lbzRqXCJcbiAgICB9LFxuICAgIHN0cmVhbWluZzogdHJ1ZVxuICB9O1xuICBsZXQgYmFkTmVvNGpDb25maWc6IG5lbzRqLklOZW80akNvbmZpZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmVvNGpDb25maWcpKTtcbiAgbGV0IHJlcXVlc3RPcHRpb25zOiByZXF1ZXN0LkNvcmVPcHRpb25zID0gbmVvNGouZ2V0UmVxdWVzdE9wdGlvbnMoKTtcblxuICBkZXNjcmliZShcIiNjb25uZWN0XCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb25uZWN0aW9uID0gbnVsbDtcbiAgICBpdChcInNob3VsZCBmYWlsIHRvIHBhcnNlIHVybCBlbmRwb2ludFwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBiYWROZW80akNvbmZpZy5ob3N0ID0gbnVsbDtcbiAgICAgIG5lbzRqLmNvbm5lY3QoYmFkTmVvNGpDb25maWcpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBlc3RhYmxpc2ggYSBuZXcgY29ubmVjdGlvblwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5jb25uZWN0KG5lbzRqQ29uZmlnKS5cbiAgICAgICAgdGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25uZWN0aW9uID0gcmVzcG9uc2U7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KS5cbiAgICAgICAgY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgcmV0dXJuIGFuIGV4aXN0aW5nIGNvbm5lY3Rpb25cIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouY29ubmVjdChuZW80akNvbmZpZykuXG4gICAgICAgIHRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2hvdWxkLmVxbChjb25uZWN0aW9uKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pLlxuICAgICAgICBjYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBjb25maXJtIGEgY29ubmVjdGlvbiBpcyBwcmVzZW50XCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmlzQ29ubmVjdGVkKCkuc2hvdWxkLmVxdWFsKHRydWUpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIHVuc2V0IHRoZSBodHRwIHJlcXVlc3QgaGVhZGVyIHRvIHN0cmVhbWluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIG5lbzRqLnNldFN0cmVhbWluZyhmYWxzZSk7XG4gICAgICBuZW80ai5pc1N0cmVhbWluZygpLnNob3VsZC5lcXVhbChmYWxzZSk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZShcIiNnbG9iYWwgZ3JhcGggZnVuY3Rpb25zXCIsIGZ1bmN0aW9uKCkge1xuICAgIGl0KFwic2hvdWxkIGZhaWwgdG8gcmV0dXJuIGFsbCBncmFwaCByZWxhdGlvbnNoaXAgdHlwZXMgZHVlIHRvIHJlcXVlc3QgZXJyb3IuXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIGxldCBnb29kQmFzZVVybDogc3RyaW5nID0gcmVxdWVzdE9wdGlvbnMuYmFzZVVybDtcbiAgICAgIHJlcXVlc3RPcHRpb25zLmJhc2VVcmwgPSBcIldST05HXCI7XG4gICAgICBuZW80ai5nZXRSZWxhdGlvbnNoaXBUeXBlcygpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmJhc2VVcmwgPSBnb29kQmFzZVVybDtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIHJldHVybiBhbGwgZ3JhcGggcmVsYXRpb25zaGlwIHR5cGVzXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmdldFJlbGF0aW9uc2hpcFR5cGVzKClcbiAgICAgICAgLnRoZW4oKHJlbGF0aW9uc2hpcFR5cGVzKSA9PiB7XG4gICAgICAgICAgcmVsYXRpb25zaGlwVHlwZXMuc2hvdWxkLmJlLmluc3RhbmNlT2YoQXJyYXkpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGZhaWwgdG8gcmV0dXJuIGFsbCBncmFwaCBwcm9wZXJ0eSBrZXlzIGR1ZSB0byByZXF1ZXN0IGVycm9yLlwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgZ29vZEJhc2VVcmw6IHN0cmluZyA9IHJlcXVlc3RPcHRpb25zLmJhc2VVcmw7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5iYXNlVXJsID0gXCJXUk9OR1wiO1xuICAgICAgbmVvNGouZ2V0QWxsUHJvcGVydHlLZXlzKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdE9wdGlvbnMuYmFzZVVybCA9IGdvb2RCYXNlVXJsO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgcmV0dXJuIGFsbCBncmFwaCBwcm9wZXJ0eSBrZXlzXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmdldEFsbFByb3BlcnR5S2V5cygpXG4gICAgICAgIC50aGVuKChwcm9wZXJ0eUtleXMpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0eUtleXMuc2hvdWxkLmJlLmluc3RhbmNlT2YoQXJyYXkpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIG5ldyBpbmRleCBvbiBsYWJlbFwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5jcmVhdGVJbmRleChcInRlc3RcIiwgXCJ0ZXN0UHJvcGVydHlcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgbGlzdCBpbmRleCBqdXN0IGNyZWF0ZWQgYnkgbGFiZWxcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGoubGlzdEluZGV4ZXNGb3JMYWJlbChcInRlc3RcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VbMF0ucHJvcGVydHlfa2V5cy5zaG91bGQuY29udGFpbihcInRlc3RQcm9wZXJ0eVwiKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBkcm9wIGluZGV4IGp1c3QgY3JlYXRlZCBvbiBsYWJlbFwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5kcm9wSW5kZXgoXCJ0ZXN0XCIsIFwidGVzdFByb3BlcnR5XCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoXCIjQ3lwaGVyIHF1ZXJ5IGZ1bmN0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgIGl0KFwic2hvdWxkIGV4ZWN1dGUgYSB2YWxpZCBjeXBoZXIgc3RhdGVtZW50XCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIGxldCB2YWxpZEN5cGhlcjogbmVvNGouSU5lbzRqQ3lwaGVyUmVxdWVzdCA9IHtcbiAgICAgICAgc3RhdGVtZW50czogW3tcbiAgICAgICAgICBzdGF0ZW1lbnQ6IFwiTUFUQ0ggKG4pIFJFVFVSTiBuXCJcbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgICBuZW80ai5jeXBoZXIodmFsaWRDeXBoZXIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGV4ZWN1dGUgc2V2ZXJhbCB2YWxpZCBjeXBoZXIgc3RhdGVtZW50c1wiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgdmFsaWRDeXBoZXI6IG5lbzRqLklOZW80akN5cGhlclJlcXVlc3QgPSB7XG4gICAgICAgIHN0YXRlbWVudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQ6IFwiTUFUQ0ggKG4pIFJFVFVSTiBjb3VudChuKVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQ6IFwiTUFUQ0ggKHgpIFJFVFVSTiB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICBuZW80ai5jeXBoZXIodmFsaWRDeXBoZXIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIHJldHVybiBjeXBoZXIgcmVzcG9uc2VzIHNwZWNpZmllZCBieSAnUmVzdWx0RGF0YUNvbnRlbnRzJ1wiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgcXVlcnk6IHN0cmluZyA9IGBNQVRDSCAobikgUkVUVVJOIG4gTElNSVQgM2A7XG4gICAgICBsZXQgY3lwaGVyUmVxdWVzdDogbmVvNGouSU5lbzRqQ3lwaGVyUmVxdWVzdCA9IHtcbiAgICAgICAgc3RhdGVtZW50czogW3tcbiAgICAgICAgICBzdGF0ZW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgIHJlc3VsdERhdGFDb250ZW50czogW1wiUkVTVFwiXVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIG5lbzRqLmN5cGhlcihjeXBoZXJSZXF1ZXN0KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXNwb25zZS5yZXN1bHRzWzBdLmRhdGFbMF0uc2hvdWxkLmhhdmUucHJvcGVydHkoXCJyZXN0XCIpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgZmFpbCB0byBleGVjdXRlIGFuIGludmFsaWQgY3lwaGVyIHN0YXRlbWVudFwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgaW52YWxpZEN5cGhlcjogbmVvNGouSU5lbzRqQ3lwaGVyUmVxdWVzdCA9IHtcbiAgICAgICAgc3RhdGVtZW50czogW3tcbiAgICAgICAgICBzdGF0ZW1lbnQ6IFwiVGhpcyBpcyBub3QgdmFsaWRcIlxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIG5lbzRqLmN5cGhlcihpbnZhbGlkQ3lwaGVyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZShcIiNOb2RlIGxldmVsIGZ1bmN0aW9uc1wiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQ6IG51bWJlciA9IG51bGw7XG4gICAgaXQoXCJzaG91bGQgZmFpbCB0byBjcmVhdGUgYSBuZXcgTm9kZSBkdWUgdG8gcmVxdWVzdCBlcnJvclwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgZ29vZEJhc2VVcmw6IHN0cmluZyA9IHJlcXVlc3RPcHRpb25zLmJhc2VVcmw7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5iYXNlVXJsID0gXCJXUk9OR1wiO1xuICAgICAgbmVvNGouY3JlYXRlTm9kZSh7IGZpcnN0TmFtZTogXCJUZXN0aW5nXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdE9wdGlvbnMuYmFzZVVybCA9IGdvb2RCYXNlVXJsO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgZmFpbCB0byBjcmVhdGUgYSBuZXcgTm9kZSBkdWUgdG8gcmVzcG9uc2UgZXJyb3JcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouY3JlYXRlTm9kZSh7IG5lc3RlZDogeyBmb286IFwiYmFyXCIgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIG5ldyBOb2RlXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmNyZWF0ZU5vZGUoeyBmaXJzdE5hbWU6IFwiVGVzdGluZ1wiIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLm1ldGFkYXRhLmlkLnNob3VsZC5iZS5hYm92ZSgwKTtcbiAgICAgICAgICBpZCA9IHJlc3BvbnNlLm1ldGFkYXRhLmlkO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGZhaWwgdG8gcmV0dXJuIG5ld2x5IGNyZWF0ZWQgbm9kZSBkdWUgdG8gcmVxdWVzdCBlcnJvclwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgZ29vZEJhc2VVcmw6IHN0cmluZyA9IHJlcXVlc3RPcHRpb25zLmJhc2VVcmw7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5iYXNlVXJsID0gXCJXUk9OR1wiO1xuICAgICAgbmVvNGouZ2V0Tm9kZShpZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdE9wdGlvbnMuYmFzZVVybCA9IGdvb2RCYXNlVXJsO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgcmV0dXJuIG5ld2x5IGNyZWF0ZWQgbm9kZVwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5nZXROb2RlKGlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXNwb25zZS5tZXRhZGF0YS5pZC5zaG91bGQuZXF1YWwoaWQpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGdldCB0aGUgZGVncmVlIG9mIHRoZSBuZXdseSBjcmVhdGVkIG5vZGUoMClcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouZ2V0Tm9kZURlZ3JlZShpZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2hvdWxkLmVxdWFsKDApO1xuICAgICAgICAgIHJldHVybiBuZW80ai5nZXROb2RlRGVncmVlKGlkLCBcImFsbFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2hvdWxkLmVxdWFsKDApO1xuICAgICAgICAgIHJldHVybiBuZW80ai5nZXROb2RlRGVncmVlKGlkLCBcImFsbFwiLCBcInRlc3RpbmdcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLnNob3VsZC5lcXVhbCgwKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7IGRvbmUocmVhc29uKTsgfSk7XG4gICAgfSk7XG4gICAgaXQoYHNob3VsZCBkZWxldGUgbmV3bHkgY3JlYXRlZCBub2RlYCwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouZGVsZXRlTm9kZShpZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoYHNob3VsZCBmYWlsIHRvIGRlbGV0ZSBub2RlIGR1ZSB0byByZXF1ZXN0IGVycm9yYCwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbGV0IGdvb2RCYXNlVXJsOiBzdHJpbmcgPSByZXF1ZXN0T3B0aW9ucy5iYXNlVXJsO1xuICAgICAgcmVxdWVzdE9wdGlvbnMuYmFzZVVybCA9IFwiV1JPTkdcIjtcbiAgICAgIG5lbzRqLmRlbGV0ZU5vZGUoaWQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmJhc2VVcmwgPSBnb29kQmFzZVVybDtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KGBzaG91bGQgZmFpbCB0byBkZWxldGUgbm9uLWV4aXN0YW50IG5vZGVgLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5kZWxldGVOb2RlKGlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KGBzaG91bGQgbm90IGZpbmQgZGVsZXRlZCBub2RlYCwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouZ2V0Tm9kZShpZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKFwiI1Byb3BlcnR5IGxldmVsIGZ1bmN0aW9uc1wiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQ6IG51bWJlciA9IG51bGw7XG4gICAgYmVmb3JlKGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmNyZWF0ZU5vZGUoeyBmaXJzdE5hbWU6IFwiVGVzdGluZ1wiIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlkID0gcmVzcG9uc2UubWV0YWRhdGEuaWQ7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBhZnRlcihmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5kZWxldGVOb2RlKGlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGZhaWwgdG8gdXBzZXJ0IGEgc2luZ2xlIG5vZGUgcHJvcGVydHlcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouc2V0UHJvcGVydHkoaWQsIFwiV1JPTkdcIiwgXCJsYXN0TmFtZVwiLCBcIlBlbm5ldHRhXCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgdXBzZXJ0IGEgc2luZ2xlIG5vZGUgcHJvcGVydHlcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouc2V0UHJvcGVydHkoaWQsIFwibm9kZVwiLCBcImxhc3ROYW1lXCIsIFwiUGVubmV0dGFcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgdXBzZXJ0IG5vZGUgcHJvcGVydGllc1wiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBsZXQgYWRkZWRQcm9wZXJ0aWVzID0geyBuZXdQcm9wZXJ0eTogXCJNeSBQcm9wZXJ0eVwiIH07XG4gICAgICBuZW80ai51cGRhdGVQcm9wZXJ0aWVzKGlkLCBcIm5vZGVcIiwgYWRkZWRQcm9wZXJ0aWVzKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXNwb25zZS5zaG91bGQuZXF1YWwodHJ1ZSk7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGRvbmUocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJzaG91bGQgZ2V0IG5vZGUgcHJvcGVydGllc1wiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5nZXRQcm9wZXJ0aWVzKGlkLCBcIm5vZGVcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2hvdWxkLmluY2x1ZGUua2V5cyhcIm5ld1Byb3BlcnR5XCIpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGdldCBhIHNpbmdsZSBub2RlIHByb3BlcnR5XCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmdldFByb3BlcnR5KGlkLCBcIm5ld1Byb3BlcnR5XCIsIFwibm9kZVwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXNwb25zZS5zaG91bGQuZXF1YWwoXCJNeSBQcm9wZXJ0eVwiKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBmYWlsIG9uIG51bGwgcHJvcGVydHkgaW5zZXJ0XCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIGxldCBteVRlc3ROdWxsU3RyaW5nOiBzdHJpbmcgPSBudWxsO1xuICAgICAgbmVvNGouc2V0UHJvcGVydHkoaWQsIFwibm9kZVwiLCBcIm51bGxQcm9wZXJ0eVwiLCBteVRlc3ROdWxsU3RyaW5nKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KFwic2hvdWxkIGZhaWwgb24gbmVzdGVkIHByb3BlcnR5IGluc2VydC5cIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbGV0IG15VGVzdE5lc3RlZE9iamVjdDogYW55ID0ge1xuICAgICAgICBcImZvb1wiOiB7XG4gICAgICAgICAgXCJiYXJcIjogXCJiYXpcIlxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbmVvNGoudXBkYXRlUHJvcGVydGllcyhpZCwgXCJub2RlXCIsIG15VGVzdE5lc3RlZE9iamVjdClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBkZWxldGUgYWxsIHByb3BlcnRpZXMgb24gYSBub2RlXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmRlbGV0ZVByb3BlcnR5KGlkLCBcIm5ld1Byb3BlcnR5XCIsIFwibm9kZVwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBkZWxldGUgYSBzaW5nbGUgcHJvcGVydHkgb24gYSBub2RlXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmRlbGV0ZUFsbFByb3BlcnRpZXMoaWQsIFwibm9kZVwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKFwiI1JlbGF0aW9uc2hpcCBsZXZlbCBmdW5jdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNhbXBsZVN0YXJ0Tm9kZTogbmVvNGouSU5vZGUgPSBudWxsO1xuICAgIGxldCBzYW1wbGVFbmROb2RlOiBuZW80ai5JTm9kZSA9IG51bGw7XG4gICAgbGV0IHNhbXBsZU5ld1JlbGF0aW9uc2hpcDogbmVvNGouSVJlbGF0aW9uc2hpcCA9IG51bGw7XG5cbiAgICBiZWZvcmUoZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouY3JlYXRlTm9kZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNhbXBsZVN0YXJ0Tm9kZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHNhbXBsZVN0YXJ0Tm9kZS5zZWxmLnNob3VsZC5ub3QuZXF1YWwobnVsbCk7XG4gICAgICAgICAgcmV0dXJuIG5lbzRqLmNyZWF0ZU5vZGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2FtcGxlRW5kTm9kZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHNhbXBsZUVuZE5vZGUuc2VsZi5zaG91bGQubm90LmVxdWFsKG51bGwpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICBkb25lKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoXCJTaG91bGQgY3JlYXRlIGEgbmV3IHJlbGF0aW9uc2hpcFwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICBuZW80ai5jcmVhdGVSZWxhdGlvbnNoaXAoc2FtcGxlU3RhcnROb2RlLCBzYW1wbGVFbmROb2RlLCBcIk1FVFwiLCB7IGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2FtcGxlTmV3UmVsYXRpb25zaGlwID0gcmVzcG9uc2U7XG4gICAgICAgICAgc2FtcGxlTmV3UmVsYXRpb25zaGlwLnNlbGYuc2hvdWxkLm5vdC5lcXVhbChudWxsKTtcbiAgICAgICAgICBzYW1wbGVOZXdSZWxhdGlvbnNoaXAuc2VsZi5zaG91bGQuYmUuYShcInN0cmluZ1wiKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcIlNob3VsZCByZXR1cm4gbmV3bHkgY3JlYXRlZCByZWxhdGlvbnNoaXBcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgbmVvNGouZ2V0UmVsYXRpb25zaGlwKHNhbXBsZU5ld1JlbGF0aW9uc2hpcC5tZXRhZGF0YS5pZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2Uuc2VsZi5zaG91bGQuZXF1YWwoc2FtcGxlTmV3UmVsYXRpb25zaGlwLnNlbGYpO1xuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY3JlYXRlZERhdGUuc2hvdWxkLm5vdC5lcXVhbChudWxsKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBhZGQgYSBuZXcgcHJvcGVydHkgdG8gbmV3bHkgY3JlYXRlZCByZWxhdGlvbnNoaXBcIiwgZnVuY3Rpb24oZG9uZSkgeyBkb25lKCk7IH0pO1xuICAgIGl0KFwic2hvdWxkIHNldCBhbGwgcHJvcGVydGllcyBvbiBuZXdseSBjcmVhdGVkIHJlbGF0aW9uc2hpcFwiLCBmdW5jdGlvbihkb25lKSB7IGRvbmUoKTsgfSk7XG4gICAgaXQoXCJzaG91bGQgc2V0IGEgc2luZ2xlIHByb3BlcnR5IG9uIG5ld2x5IGNyZWF0ZWQgcmVsYXRpb25zaGlwXCIsIGZ1bmN0aW9uKGRvbmUpIHsgZG9uZSgpOyB9KTtcbiAgICBpdChcInNob3VsZCBnZXQgYWxsIHByb3BlcnRpZXMgb24gbmV3bHkgY3JlYXRlZCByZWxhdGlvbnNoaXBcIiwgZnVuY3Rpb24oZG9uZSkgeyBkb25lKCk7IH0pO1xuICAgIGl0KFwic2hvdWxkIGdldCBhIHNpbmdsZSBwcm9wZXJ0eSBvbiBuZXdseSBjcmVhdGVkIHJlbGF0aW9uc2hpcFwiLCBmdW5jdGlvbihkb25lKSB7IGRvbmUoKTsgfSk7XG4gICAgaXQoXCJzaG91bGQgZGVsZXRlIG5ld2x5IGNyZWF0ZWQgcmVsYXRpb25zaGlwXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIG5lbzRqLmRlbGV0ZVJlbGF0aW9uc2hpcChzYW1wbGVOZXdSZWxhdGlvbnNoaXApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRvbmUoKTs7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgZG9uZShyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcInNob3VsZCBnZXQgYWxsIHJlbGF0aW9uc2hpcHMgb24gbm9kZVwiLCBmdW5jdGlvbihkb25lKSB7IGRvbmUoKTsgfSk7XG4gICAgaXQoXCJzaG91bGQgZ2V0IGFsbCBpbmNvbWluZyByZWxhdGlvbnNoaXBzIG9uIG5vZGVcIiwgZnVuY3Rpb24oZG9uZSkgeyBkb25lKCk7IH0pO1xuICAgIGl0KFwic2hvdWxkIGdldCBhbGwgb3V0Z29pbmcgcmVsYXRpb25zaGlwcyBvbiBub2RlXCIsIGZ1bmN0aW9uKGRvbmUpIHsgZG9uZSgpOyB9KTtcbiAgICBpdChcInNob3VsZCBnZXQgYWxsIHR5cGVkIHJlbGF0aW9uc2hpcGQgb24gYSBub2RlXCIsIGZ1bmN0aW9uKGRvbmUpIHsgZG9uZSgpOyB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('modules/neo4j-typescript/src/index',["require", "exports", "url", "request"], function (require, exports, url, request) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    request.defaults({
        headers: {
            "Content-Type": "application/json"
        }
    });
    var NEO4J_PROTOCOL;
    (function (NEO4J_PROTOCOL) {
        NEO4J_PROTOCOL[NEO4J_PROTOCOL["http"] = 0] = "http";
        NEO4J_PROTOCOL[NEO4J_PROTOCOL["https"] = 1] = "https";
    })(NEO4J_PROTOCOL = exports.NEO4J_PROTOCOL || (exports.NEO4J_PROTOCOL = {}));
    ;
    var NEO4J_ENTITY_TYPES = ["node", "relationship"];
    var NEO4J_HTTP_METHODS = ["DELETE", "GET", "POST", "PUT"];
    var NEO4J_RELATIONSHIP_DIRECTION = ["all", "in", "out"];
    var NEO4J_STANDARD_PATHS = {
        config: "/db/data/",
        propertyKeys: "/db/data/propertykeys"
    };
    ;
    var connected = false;
    var streaming = false;
    var graphPaths = null;
    var relationshipTypes = [];
    var requestOptions = {};
    var dbConfigUrl = null;
    function connect(options) {
        var promise = new Promise(function (resolve, reject) {
            if (connected && graphPaths && url.parse(graphPaths.node).hostname === options.host) {
                return resolve(graphPaths);
            }
            streaming = options.streaming || streaming;
            if (streaming) {
                requestOptions.headers = requestOptions.headers || {};
                requestOptions.headers["X-Stream"] = true;
            }
            var dbConfigEndpointString = NEO4J_PROTOCOL[options.protocol] + "://" + options.host + ":" + options.port;
            dbConfigEndpointString = url.resolve(dbConfigEndpointString, NEO4J_STANDARD_PATHS.config);
            dbConfigUrl = url.parse(dbConfigEndpointString);
            requestOptions.method = "GET";
            requestOptions.port = options.port;
            if (options.authentication && typeof options.authentication.username === "string" && typeof options.authentication.password === "string") {
                requestOptions.auth = {
                    username: options.authentication.username,
                    password: options.authentication.password
                };
            }
            request.get(dbConfigEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject("Error requesting database config REST endpoint: " + err);
                }
                body = typeof body === "string" ? JSON.parse(body) : body;
                connected = true;
                graphPaths = body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.connect = connect;
    function getRelationshipTypes() {
        var promise = new Promise(function (resolve, reject) {
            request.get(graphPaths.relationship_types, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Invalid HTTP Response code returned: " + response.statusCode);
                }
                if (typeof body === "string") {
                    body = JSON.parse(body);
                }
                relationshipTypes = body;
                resolve(relationshipTypes);
            });
        });
        return promise;
    }
    exports.getRelationshipTypes = getRelationshipTypes;
    function getAllPropertyKeys() {
        var promise = new Promise(function (resolve, reject) {
            var getAllPropertyKeysEndpoint = dbConfigUrl.protocol + "//" + dbConfigUrl.hostname + ":" + dbConfigUrl.port + NEO4J_STANDARD_PATHS.propertyKeys;
            request.get(getAllPropertyKeysEndpoint, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode >= 400) {
                    reject("Invalid HTTP Response code returned: " + response.statusCode);
                }
                else {
                    body = typeof body === "string" ? JSON.parse(body) : body;
                    resolve(body);
                }
            });
        });
        return promise;
    }
    exports.getAllPropertyKeys = getAllPropertyKeys;
    function createIndex(label, propertyNames) {
        var promise = new Promise(function (resolve, reject) {
            var normalizedPropertyNamesArray = [];
            if (typeof propertyNames === "string") {
                normalizedPropertyNamesArray.push(propertyNames);
            }
            else {
                normalizedPropertyNamesArray = propertyNames;
            }
            var indexEndpointString = graphPaths.indexes + "/" + label;
            try {
                requestOptions.body = JSON.stringify({ "property_keys": normalizedPropertyNamesArray });
            }
            catch (ex) {
                reject(ex);
            }
            request.post(indexEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error creating index on label " + label + ". HTTP Status Code: " + response.statusCode + ". HTTP Body: " + body);
                }
                body = typeof body === "string" ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.createIndex = createIndex;
    function listIndexesForLabel(label) {
        var promise = new Promise(function (resolve, reject) {
            var indexEndpointString = graphPaths.indexes + "/" + label;
            request.get(indexEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error creating index on label " + label + ". HTTP Status Code: " + response.statusCode + ". HTTP Body: " + body);
                }
                body = typeof body === "string" ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.listIndexesForLabel = listIndexesForLabel;
    function dropIndex(label, propertyName) {
        var promise = new Promise(function (resolve, reject) {
            var indexEndpointString = graphPaths.indexes + "/" + label + "/" + propertyName;
            request.del(indexEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error creating index on label " + label + ". HTTP Status Code: " + response.statusCode + ". HTTP Body: " + body);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.dropIndex = dropIndex;
    function cypher(cypherStatements) {
        var promise = new Promise(function (resolve, reject) {
            var cypherEndpointString = graphPaths.transaction + "/commit";
            try {
                requestOptions.body = JSON.stringify(cypherStatements);
            }
            catch (ex) {
                reject(ex);
            }
            request.post(cypherEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200 && response.statusCode !== 201) {
                    reject();
                }
                body = typeof body === "string" ? JSON.parse(body) : body;
                if (body.errors.length > 0) {
                    reject(body.errors);
                }
                resolve(body);
            });
        });
        return promise;
    }
    exports.cypher = cypher;
    function getNode(id) {
        var promise = new Promise(function (resolve, reject) {
            var nodeEndpointString = graphPaths.node + "/" + id;
            request.get(nodeEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode >= 400) {
                    reject("Invalid HTTP Response code returned: " + response.statusCode);
                }
                body = typeof body === "string" ? JSON.parse(body) : body;
                var returnedNode = body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.getNode = getNode;
    function createNode(data) {
        var promise = new Promise(function (resolve, reject) {
            var nodeEndpointString = graphPaths.node;
            data = data || {};
            requestOptions.body = typeof data !== "string" ? JSON.stringify(data) : data;
            request.post(nodeEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 201) {
                    reject("Invalid HTTP Response when inserting Node: " + response.statusCode);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                var returnedNode = body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.createNode = createNode;
    function deleteNode(id) {
        var promise = new Promise(function (resolve, reject) {
            var nodeEndpointString = graphPaths.node + "/" + id;
            request.del(nodeEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode === 409) {
                    reject("All relationships for Node id " + id + " must be deleted prior to deleting node itself.");
                }
                if (response.statusCode !== 204) {
                    reject("Error deleting Node. HTTP Status code returned: " + response.statusCode);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.deleteNode = deleteNode;
    function getNodeDegree(nodeOrNodeId, direction, type) {
        var promise = new Promise(function (resolve, reject) {
            var degreeEndpointString = _getNeo4jEntityUrl(nodeOrNodeId, "node") + "/degree";
            direction = direction || "all";
            if (direction && NEO4J_RELATIONSHIP_DIRECTION.indexOf(direction) !== -1) {
                degreeEndpointString = url.resolve(degreeEndpointString + "/", direction);
            }
            else {
                reject("'direction' must be of value: " + NEO4J_RELATIONSHIP_DIRECTION);
            }
            if (type && typeof type === "string") {
                degreeEndpointString = url.resolve(degreeEndpointString + "/", type);
            }
            request.get(degreeEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error retrieving node degree. HTTP Status code returned: " + response.statusCode + ". HTTP body: " + body);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.getNodeDegree = getNodeDegree;
    function setProperty(entityOrEntityId, type, propertyName, data) {
        var promise = new Promise(function (resolve, reject) {
            var propertyEndpointString = null;
            try {
                propertyEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties/" + propertyName;
            }
            catch (ex) {
                reject(ex);
            }
            if (!data) {
                reject("Property cannot have null value.");
            }
            data = "\"" + data + "\"";
            requestOptions.body = data;
            request.put(propertyEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error setting property: " + propertyName + " on Node: " + _getNeo4jEntityId(entityOrEntityId) + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.setProperty = setProperty;
    function updateProperties(entityOrEntityId, type, data) {
        var promise = new Promise(function (resolve, reject) {
            var entityId = null;
            var propertiesEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties";
            if (typeof data !== "string") {
                try {
                    data = JSON.stringify(data);
                }
                catch (ex) {
                    reject(ex);
                }
            }
            requestOptions.body = data;
            request.put(propertiesEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error setting properties on Node: " + entityId + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.updateProperties = updateProperties;
    function getProperties(entityOrEntityId, type) {
        var promise = new Promise(function (resolve, reject) {
            var propertiesEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties";
            request.get(propertiesEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error getting properties on Node: " + _getNeo4jEntityId(entityOrEntityId) + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.getProperties = getProperties;
    function getProperty(entityOrEntityId, propertyName, type) {
        var promise = new Promise(function (resolve, reject) {
            var propertyEndpointString = null;
            try {
                propertyEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties/" + propertyName;
            }
            catch (ex) {
                reject(ex);
            }
            request.get(propertyEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error getting property " + propertyName + " on Node: " + _getNeo4jEntityId(entityOrEntityId) + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.getProperty = getProperty;
    function deleteProperty(entityOrEntityId, propertyName, type) {
        var promise = new Promise(function (resolve, reject) {
            var propertyEndpointString = null;
            try {
                propertyEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties/" + propertyName;
            }
            catch (ex) {
                reject(ex);
            }
            request.del(propertyEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error deleting property " + propertyName + " on Node: " + _getNeo4jEntityId(entityOrEntityId) + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.deleteProperty = deleteProperty;
    function deleteAllProperties(entityOrEntityId, type) {
        var promise = new Promise(function (resolve, reject) {
            var propertiesEndpointString = null;
            try {
                propertiesEndpointString = _getNeo4jEntityUrl(entityOrEntityId, type) + "/properties";
            }
            catch (ex) {
                reject(ex);
            }
            request.del(propertiesEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error deleting properties on Node: " + _getNeo4jEntityId(entityOrEntityId) + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.deleteAllProperties = deleteAllProperties;
    function getRelationship(relationshipId, direction, types) {
        var promise = new Promise(function (resolve, reject) {
            if (direction && NEO4J_RELATIONSHIP_DIRECTION.indexOf(direction) === -1) {
                reject("Relationship 'direction' must be of type: " + NEO4J_RELATIONSHIP_DIRECTION);
            }
            var relationshipEndpointString = url.resolve(dbConfigUrl.href, "relationship/" + relationshipId);
            request.get(relationshipEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 200) {
                    reject("Error getting relationship by ID " + relationshipId + ". Received HTTP status code: " + response.statusCode + ". HTTP body: " + body);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.getRelationship = getRelationship;
    function createRelationship(startNode, toNode, type, data) {
        var promise = new Promise(function (resolve, reject) {
            var relationshipStartEndpointString = null;
            var relationshipEndEndpointString = null;
            try {
                relationshipStartEndpointString = _getNeo4jEntityUrl(startNode, "node") + "/relationships";
                relationshipEndEndpointString = "" + _getNeo4jEntityUrl(toNode, "node");
            }
            catch (ex) {
                reject(ex);
            }
            var body = {
                to: relationshipEndEndpointString,
                type: type,
                data: data
            };
            try {
                body = JSON.stringify(body);
            }
            catch (ex) {
                reject(ex);
            }
            requestOptions.body = body;
            request.post(relationshipStartEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 201) {
                    reject("Error inserting relationship. received invalid HTTP status code: " + response.statusCode + ", and message: " + response.statusMessage);
                }
                body = typeof body === "string" && body.length > 0 ? JSON.parse(body) : body;
                resolve(body);
            });
        });
        return promise;
    }
    exports.createRelationship = createRelationship;
    function deleteRelationship(relationshipOrRelationshipId) {
        var promise = new Promise(function (resolve, reject) {
            var relationshipEndpointString = _getNeo4jEntityUrl(relationshipOrRelationshipId, "relationship");
            request.del(relationshipEndpointString, requestOptions, function (err, response, body) {
                if (err) {
                    reject(err);
                }
                if (response.statusCode !== 204) {
                    reject("Error deleting relationship. received invalid HTTP status code: " + response.statusCode + ", and message: " + response.statusMessage);
                }
                resolve(true);
            });
        });
        return promise;
    }
    exports.deleteRelationship = deleteRelationship;
    function isConnected() {
        return connected;
    }
    exports.isConnected = isConnected;
    function isStreaming() {
        return streaming;
    }
    exports.isStreaming = isStreaming;
    function setStreaming(reqStreaming) {
        return streaming = reqStreaming;
    }
    exports.setStreaming = setStreaming;
    function getRequestOptions() {
        return requestOptions;
    }
    exports.getRequestOptions = getRequestOptions;
    function _getNeo4jEntityUrl(entity, type) {
        if (typeof entity === "object") {
            if (entity.self) {
                return entity.self;
            }
            else {
                throw new TypeError("object must have property 'self'");
            }
        }
        else if (typeof entity === "string") {
            try {
                url.parse(entity);
            }
            catch (ex) {
                throw ex;
            }
            return entity;
        }
        else if (typeof entity === "number") {
            if (type === "node") {
                return graphPaths.node + "/" + entity;
            }
            else if (type === "relationship") {
                return dbConfigUrl + "/relationship/" + entity;
            }
            else {
                throw new TypeError();
            }
        }
        else {
            throw new TypeError("startNode must be of type: INode, string, number");
        }
    }
    function _getNeo4jEntityId(entityOrEntityId) {
        if (typeof entityOrEntityId === "object" && entityOrEntityId.hasOwnProperty("metadata")) {
            return entityOrEntityId.metadata.id;
        }
        else if (typeof entityOrEntityId === "number") {
            return entityOrEntityId;
        }
        else {
            throw new TypeError("Invalid entityOrEntityId type. Must be of type: INeo4jEntity or number");
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmVvNGotdHlwZXNjcmlwdC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBZUEsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNmLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7S0FDRixDQUFDLENBQUM7SUFNSCxJQUFZLGNBQThCO0lBQTFDLFdBQVksY0FBYztRQUFHLG1EQUFJLENBQUE7UUFBRSxxREFBSyxDQUFBO0lBQUMsQ0FBQyxFQUE5QixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUFnQjtJQUFBLENBQUM7SUFHM0MsSUFBTSxrQkFBa0IsR0FBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxJQUFNLGtCQUFrQixHQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEUsSUFBTSw0QkFBNEIsR0FBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEUsSUFBTSxvQkFBb0IsR0FBUTtRQUNoQyxNQUFNLEVBQUUsV0FBVztRQUNuQixZQUFZLEVBQUUsdUJBQXVCO0tBQ3RDLENBQUM7SUFvQkQsQ0FBQztJQW1GRixJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDL0IsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO0lBQy9CLElBQUksVUFBVSxHQUF3QixJQUFJLENBQUM7SUFDM0MsSUFBSSxpQkFBaUIsR0FBYSxFQUFFLENBQUM7SUFDckMsSUFBSSxjQUFjLEdBQXdCLEVBQUUsQ0FBQztJQUM3QyxJQUFJLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFNaEMsaUJBQXdCLE9BQXFCO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFD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Q0FBQyxDQUFDLE9BQU8sZ0JBQWdCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxJQUFJLFNBQVMsQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7SUFDSCxDQUFDIiwiZmlsZSI6Im1vZHVsZXMvbmVvNGotdHlwZXNjcmlwdC9zcmMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgVG9tIFBlbm5ldHRhIDx0cGVubmV0dGFAZ21haWwuY29tPlxuICogVE9ETzogRG9uJ3QgcmV1c2UgdGhlIHNhbWUgaW5zdGFuY2UgZm8gcmVxdWVzdE9wdGlvbnMgZm9yIGVhY2ggY2FsbC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSBcInVybFwiO1xuaW1wb3J0ICogYXMgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2xvYmFsIHJlcXVlc3QgbW9kdWxlIGRlZmF1bHRzLlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxucmVxdWVzdC5kZWZhdWx0cyh7XG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICB9XG59KTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdsb2JhbCBjb25zdGFudHMuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZW51bSBORU80Sl9QUk9UT0NPTCB7IGh0dHAsIGh0dHBzIH07XG5cbi8vIFRPRE86IENoYW5nZSB0byBlbnVtc1xuY29uc3QgTkVPNEpfRU5USVRZX1RZUEVTOiBzdHJpbmdbXSA9IFtcIm5vZGVcIiwgXCJyZWxhdGlvbnNoaXBcIl07XG5jb25zdCBORU80Sl9IVFRQX01FVEhPRFM6IHN0cmluZ1tdID0gW1wiREVMRVRFXCIsIFwiR0VUXCIsIFwiUE9TVFwiLCBcIlBVVFwiXTtcbmNvbnN0IE5FTzRKX1JFTEFUSU9OU0hJUF9ESVJFQ1RJT046IHN0cmluZ1tdID0gW1wiYWxsXCIsIFwiaW5cIiwgXCJvdXRcIl07XG5cbmNvbnN0IE5FTzRKX1NUQU5EQVJEX1BBVEhTOiBhbnkgPSB7XG4gIGNvbmZpZzogXCIvZGIvZGF0YS9cIixcbiAgcHJvcGVydHlLZXlzOiBcIi9kYi9kYXRhL3Byb3BlcnR5a2V5c1wiXG59O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RyaWN0eSBlbmZvcmNlZCBJbnRlcmZhY2VzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIElOZW80akludGVybmFsUGF0aHMge1xuICBleHRlbnNpb25zOiBhbnk7XG4gIG5vZGU6IHN0cmluZztcbiAgbm9kZV9pbmRleDogc3RyaW5nO1xuICByZWxhdGlvbnNoaXBfaW5kZXg6IHN0cmluZztcbiAgZXh0ZW5zaW9uc19pbmZvOiBzdHJpbmc7XG4gIHJlbGF0aW9uc2hpcF90eXBlczogc3RyaW5nO1xuICBiYXRjaDogc3RyaW5nO1xuICBjeXBoZXI6IHN0cmluZztcbiAgaW5kZXhlczogc3RyaW5nO1xuICBjb25zdHJhaW50czogc3RyaW5nO1xuICB0cmFuc2FjdGlvbjogc3RyaW5nO1xuICBub2RlX2xhYmVsczogc3RyaW5nO1xuICBuZW80al92ZXJzaW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElOZW80akNvbmZpZyB7XG4gIHByb3RvY29sOiBORU80Sl9QUk9UT0NPTDtcbiAgaG9zdDogc3RyaW5nO1xuICBwb3J0OiBudW1iZXI7XG4gIGF1dGhlbnRpY2F0aW9uPzogSU5lbzRqQXV0aENvbmZpZztcbiAgc3RyZWFtaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTmVvNGpBdXRoQ29uZmlnIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVzdWx0RGF0YUNvbnRlbnRzID0gXCJSRVNUXCIgfCBcInJvd1wiIHwgXCJncmFwaFwiIHwgXCJ3cm9uZ1wiO1xuZXhwb3J0IGludGVyZmFjZSBJTmVvNGpDeXBoZXJSZXF1ZXN0IHtcbiAgc3RhdGVtZW50czogW3tcbiAgICBzdGF0ZW1lbnQ6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzPzogYW55LFxuICAgIHJlc3VsdERhdGFDb250ZW50cz86IFJlc3VsdERhdGFDb250ZW50c1tdXG4gIH1dO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElOZW80akN5cGhlclJlc3BvbnNlIHtcbiAgcmVzdWx0czogW3tcbiAgICBjb2x1bW5zOiBzdHJpbmdbXSxcbiAgICBkYXRhOiBbe1xuICAgICAgcm93OiBhbnlbXVxuICAgIH1dXG4gIH1dXG4gIGVycm9yczogW3tcbiAgICBjb2RlPzogc3RyaW5nLFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgfV1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTmVvNGpJbmRleFJlc3BvbnNlIHtcbiAgcHJvcGVydHlfa2V5czogc3RyaW5nW10sXG4gIGxhYmVsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTmVvNGpFbnRpdHkge1xuICBleHRlbnNpb25zPzogYW55O1xuICBkYXRhPzogYW55O1xuICBwcm9wZXJ0eTogc3RyaW5nO1xuICBwcm9wZXJ0aWVzOiBzdHJpbmc7XG4gIHNlbGY6IHN0cmluZztcbiAgbWV0YWRhdGE6IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIGxhYmVscz86IHN0cmluZ1tdLFxuICAgIHR5cGU/OiBzdHJpbmdcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTm9kZSBleHRlbmRzIElOZW80akVudGl0eSB7XG4gIG91dGdvaW5nX3JlbGF0aW9uc2hpcHM6IHN0cmluZztcbiAgbGFiZWxzOiBzdHJpbmc7XG4gIGFsbF90eXBlZF9yZWxhdGlvbnNoaXBzOiBzdHJpbmc7XG4gIHRyYXZlcnNlOiBzdHJpbmc7XG4gIG91dGdvaW5nX3R5cGVkX3JlbGF0aW9uc2hpcHM6IHN0cmluZztcbiAgaW5jb21pbmdfcmVsYXRpb25zaGlwczogc3RyaW5nO1xuICBjcmVhdGVfcmVsYXRpb25zaGlwOiBzdHJpbmc7XG4gIHBhZ2VkX3RyYXZlcnNlOiBzdHJpbmc7XG4gIGFsbF9yZWxhdGlvbnNoaXBzOiBzdHJpbmc7XG4gIGluY29taW5nX3R5cGVkX3JlbGF0aW9uc2hpcHM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVsYXRpb25zaGlwIGV4dGVuZHMgSU5lbzRqRW50aXR5IHtcbiAgc3RhcnQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBlbmQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElSZXNwb25zZU9iamVjdCB7XG4gIGluY29taW5nTWVzc2FnZTogaHR0cC5JbmNvbWluZ01lc3NhZ2U7XG4gIGJvZHk6IGFueTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEludGVybmFsIG1vZHVsZSB2YXJpYWJsZXMuIENvbm5lY3Rpb24gc3RhdGUgcHJvcGVydGllcy5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBjb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBzdHJlYW1pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBncmFwaFBhdGhzOiBJTmVvNGpJbnRlcm5hbFBhdGhzID0gbnVsbDtcbmxldCByZWxhdGlvbnNoaXBUeXBlczogc3RyaW5nW10gPSBbXTtcbmxldCByZXF1ZXN0T3B0aW9uczogcmVxdWVzdC5Db3JlT3B0aW9ucyA9IHt9O1xubGV0IGRiQ29uZmlnVXJsOiB1cmwuVXJsID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0gIHtJTmVvNGpDb25maWd9IG9wdGlvbnNcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3Qob3B0aW9uczogSU5lbzRqQ29uZmlnKTogUHJvbWlzZTxJTmVvNGpJbnRlcm5hbFBhdGhzIHwgc3RyaW5nPiB7XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChjb25uZWN0ZWQgJiYgZ3JhcGhQYXRocyAmJiB1cmwucGFyc2UoZ3JhcGhQYXRocy5ub2RlKS5ob3N0bmFtZSA9PT0gb3B0aW9ucy5ob3N0KSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShncmFwaFBhdGhzKTtcbiAgICB9XG5cbiAgICBzdHJlYW1pbmcgPSBvcHRpb25zLnN0cmVhbWluZyB8fCBzdHJlYW1pbmc7XG4gICAgaWYgKHN0cmVhbWluZykge1xuICAgICAgcmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzW1wiWC1TdHJlYW1cIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBkYkNvbmZpZ0VuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBgJHtORU80Sl9QUk9UT0NPTFtvcHRpb25zLnByb3RvY29sXX06Ly8ke29wdGlvbnMuaG9zdH06JHtvcHRpb25zLnBvcnR9YDtcbiAgICBkYkNvbmZpZ0VuZHBvaW50U3RyaW5nID0gdXJsLnJlc29sdmUoZGJDb25maWdFbmRwb2ludFN0cmluZywgTkVPNEpfU1RBTkRBUkRfUEFUSFMuY29uZmlnKTtcbiAgICBkYkNvbmZpZ1VybCA9IHVybC5wYXJzZShkYkNvbmZpZ0VuZHBvaW50U3RyaW5nKTtcblxuICAgIHJlcXVlc3RPcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG4gICAgcmVxdWVzdE9wdGlvbnMucG9ydCA9IG9wdGlvbnMucG9ydDtcblxuICAgIGlmIChvcHRpb25zLmF1dGhlbnRpY2F0aW9uICYmIHR5cGVvZiBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLnVzZXJuYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLnBhc3N3b3JkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5hdXRoID0ge1xuICAgICAgICB1c2VybmFtZTogb3B0aW9ucy5hdXRoZW50aWNhdGlvbi51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMuYXV0aGVudGljYXRpb24ucGFzc3dvcmRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVxdWVzdC5nZXQoZGJDb25maWdFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgcmVxdWVzdGluZyBkYXRhYmFzZSBjb25maWcgUkVTVCBlbmRwb2ludDogJHtlcnJ9YCk7XG4gICAgICB9XG5cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiA/IEpTT04ucGFyc2UoYm9keSkgOiBib2R5O1xuXG4gICAgICBjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgZ3JhcGhQYXRocyA9IGJvZHk7XG4gICAgICByZXNvbHZlKGJvZHkpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyBQcm9taXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGlvbnNoaXBUeXBlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGxldCBwcm9taXNlOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0LmdldChncmFwaFBhdGhzLnJlbGF0aW9uc2hpcF90eXBlcywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICByZWplY3QoYEludmFsaWQgSFRUUCBSZXNwb25zZSBjb2RlIHJldHVybmVkOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9YCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgYm9keSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICB9XG4gICAgICByZWxhdGlvbnNoaXBUeXBlcyA9IGJvZHk7XG4gICAgICByZXNvbHZlKHJlbGF0aW9uc2hpcFR5cGVzKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb3BlcnR5S2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cbiAgbGV0IHByb21pc2U6IFByb21pc2U8c3RyaW5nW10+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBnZXRBbGxQcm9wZXJ0eUtleXNFbmRwb2ludDogc3RyaW5nID0gYCR7ZGJDb25maWdVcmwucHJvdG9jb2x9Ly8ke2RiQ29uZmlnVXJsLmhvc3RuYW1lfToke2RiQ29uZmlnVXJsLnBvcnR9JHtORU80Sl9TVEFOREFSRF9QQVRIUy5wcm9wZXJ0eUtleXN9YDtcbiAgICByZXF1ZXN0LmdldChnZXRBbGxQcm9wZXJ0eUtleXNFbmRwb2ludCwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICAgIHJlamVjdChgSW52YWxpZCBIVFRQIFJlc3BvbnNlIGNvZGUgcmV0dXJuZWQ6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiA/IEpTT04ucGFyc2UoYm9keSkgOiBib2R5O1xuICAgICAgICByZXNvbHZlKGJvZHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGV4IFNjaGVtYSBmdW5jdGlvbnNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmRleChsYWJlbDogc3RyaW5nLCBwcm9wZXJ0eU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8SU5lbzRqSW5kZXhSZXNwb25zZT4ge1xuICBsZXQgcHJvbWlzZTogUHJvbWlzZTxJTmVvNGpJbmRleFJlc3BvbnNlPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgbm9ybWFsaXplZFByb3BlcnR5TmFtZXNBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodHlwZW9mIHByb3BlcnR5TmFtZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWVzQXJyYXkucHVzaChwcm9wZXJ0eU5hbWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9ybWFsaXplZFByb3BlcnR5TmFtZXNBcnJheSA9IHByb3BlcnR5TmFtZXM7XG4gICAgfVxuXG4gICAgbGV0IGluZGV4RW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IGAke2dyYXBoUGF0aHMuaW5kZXhlc30vJHtsYWJlbH1gO1xuICAgIHRyeSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBcInByb3BlcnR5X2tleXNcIjogbm9ybWFsaXplZFByb3BlcnR5TmFtZXNBcnJheSB9KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcmVqZWN0KGV4KTtcbiAgICB9XG4gICAgcmVxdWVzdC5wb3N0KGluZGV4RW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgcmVqZWN0KGBFcnJvciBjcmVhdGluZyBpbmRleCBvbiBsYWJlbCAke2xhYmVsfS4gSFRUUCBTdGF0dXMgQ29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS4gSFRUUCBCb2R5OiAke2JvZHl9YCk7XG4gICAgICB9XG4gICAgICBib2R5ID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RJbmRleGVzRm9yTGFiZWwobGFiZWw6IHN0cmluZyk6IFByb21pc2U8SU5lbzRqSW5kZXhSZXNwb25zZT4ge1xuICBsZXQgcHJvbWlzZTogUHJvbWlzZTxJTmVvNGpJbmRleFJlc3BvbnNlPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgaW5kZXhFbmRwb2ludFN0cmluZzogc3RyaW5nID0gYCR7Z3JhcGhQYXRocy5pbmRleGVzfS8ke2xhYmVsfWA7XG4gICAgcmVxdWVzdC5nZXQoaW5kZXhFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICByZWplY3QoYEVycm9yIGNyZWF0aW5nIGluZGV4IG9uIGxhYmVsICR7bGFiZWx9LiBIVFRQIFN0YXR1cyBDb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIEJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiA/IEpTT04ucGFyc2UoYm9keSkgOiBib2R5O1xuICAgICAgcmVzb2x2ZShib2R5KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcEluZGV4KGxhYmVsOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGxldCBwcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBpbmRleEVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBgJHtncmFwaFBhdGhzLmluZGV4ZXN9LyR7bGFiZWx9LyR7cHJvcGVydHlOYW1lfWA7XG4gICAgcmVxdWVzdC5kZWwoaW5kZXhFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwNCkge1xuICAgICAgICByZWplY3QoYEVycm9yIGNyZWF0aW5nIGluZGV4IG9uIGxhYmVsICR7bGFiZWx9LiBIVFRQIFN0YXR1cyBDb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIEJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENZUEhFUiBGVFchISFcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBjeXBoZXIoY3lwaGVyU3RhdGVtZW50czogSU5lbzRqQ3lwaGVyUmVxdWVzdCk6IFByb21pc2U8SU5lbzRqQ3lwaGVyUmVzcG9uc2U+IHtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGN5cGhlckVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBgJHtncmFwaFBhdGhzLnRyYW5zYWN0aW9ufS9jb21taXRgO1xuICAgIHRyeSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoY3lwaGVyU3RhdGVtZW50cyk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHJlamVjdChleCk7XG4gICAgfVxuICAgIHJlcXVlc3QucG9zdChjeXBoZXJFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCAmJiByZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDEpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgICBib2R5ID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIGlmIChib2R5LmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlamVjdChib2R5LmVycm9ycyk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKGJvZHkpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOb2RlL1ZlcnRleCBmdW5jdGlvbnNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQHBhcmFtICB7bnVtYmVyfSBpZFxuICogQHJldHVybnMgUHJvbWlzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZShpZDogbnVtYmVyKTogUHJvbWlzZTxJTm9kZT4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgbm9kZUVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBgJHtncmFwaFBhdGhzLm5vZGV9LyR7aWR9YDtcbiAgICByZXF1ZXN0LmdldChub2RlRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID49IDQwMCkge1xuICAgICAgICByZWplY3QoYEludmFsaWQgSFRUUCBSZXNwb25zZSBjb2RlIHJldHVybmVkOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9YCk7XG4gICAgICB9XG4gICAgICBib2R5ID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIGxldCByZXR1cm5lZE5vZGU6IElOb2RlID0gYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cbi8qKlxuICogQHBhcmFtICB7YW55fSBkYXRhP1xuICogQHJldHVybnMgUHJvbWlzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShkYXRhPzogYW55KTogUHJvbWlzZTxJTm9kZT4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgbm9kZUVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBncmFwaFBhdGhzLm5vZGU7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgcmVxdWVzdE9wdGlvbnMuYm9keSA9IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuICAgIHJlcXVlc3QucG9zdChub2RlRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDEpIHtcbiAgICAgICAgcmVqZWN0KGBJbnZhbGlkIEhUVFAgUmVzcG9uc2Ugd2hlbiBpbnNlcnRpbmcgTm9kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfWApO1xuICAgICAgfVxuICAgICAgYm9keSA9IHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiICYmIGJvZHkubGVuZ3RoID4gMCA/IEpTT04ucGFyc2UoYm9keSkgOiBib2R5O1xuICAgICAgbGV0IHJldHVybmVkTm9kZTogSU5vZGUgPSBib2R5O1xuICAgICAgcmVzb2x2ZShib2R5KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAge251bWJlcn0gaWRcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU5vZGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgbm9kZUVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBgJHtncmFwaFBhdGhzLm5vZGV9LyR7aWR9YDtcbiAgICByZXF1ZXN0LmRlbChub2RlRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDkpIHtcbiAgICAgICAgcmVqZWN0KGBBbGwgcmVsYXRpb25zaGlwcyBmb3IgTm9kZSBpZCAke2lkfSBtdXN0IGJlIGRlbGV0ZWQgcHJpb3IgdG8gZGVsZXRpbmcgbm9kZSBpdHNlbGYuYCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjA0KSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgZGVsZXRpbmcgTm9kZS4gSFRUUCBTdGF0dXMgY29kZSByZXR1cm5lZDogJHtyZXNwb25zZS5zdGF0dXNDb2RlfWApO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZURlZ3JlZShub2RlT3JOb2RlSWQ6IElOb2RlIHwgbnVtYmVyLCBkaXJlY3Rpb24/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgZGVncmVlRW5kcG9pbnRTdHJpbmcgPSBgJHtfZ2V0TmVvNGpFbnRpdHlVcmwobm9kZU9yTm9kZUlkLCBcIm5vZGVcIil9L2RlZ3JlZWA7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IFwiYWxsXCI7XG4gICAgaWYgKGRpcmVjdGlvbiAmJiBORU80Sl9SRUxBVElPTlNISVBfRElSRUNUSU9OLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpIHtcbiAgICAgIGRlZ3JlZUVuZHBvaW50U3RyaW5nID0gdXJsLnJlc29sdmUoYCR7ZGVncmVlRW5kcG9pbnRTdHJpbmd9L2AsIGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdChgJ2RpcmVjdGlvbicgbXVzdCBiZSBvZiB2YWx1ZTogJHtORU80Sl9SRUxBVElPTlNISVBfRElSRUNUSU9OfWApO1xuICAgIH1cbiAgICBpZiAodHlwZSAmJiB0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZGVncmVlRW5kcG9pbnRTdHJpbmcgPSB1cmwucmVzb2x2ZShgJHtkZWdyZWVFbmRwb2ludFN0cmluZ30vYCwgdHlwZSlcbiAgICB9XG4gICAgcmVxdWVzdC5nZXQoZGVncmVlRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgcmVqZWN0KGBFcnJvciByZXRyaWV2aW5nIG5vZGUgZGVncmVlLiBIVFRQIFN0YXR1cyBjb2RlIHJldHVybmVkOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIGJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiAmJiBib2R5Lmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFByb3BlcnR5IGZ1bmN0aW9uc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5vZGVJZFxuICogQHBhcmFtICB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSAge251bWJlcnxzdHJpbmd8Ym9vbGVhbnxudW1iZXJbXXxzdHJpbmdbXXxib29sZWFuW119IGRhdGFcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGVudGl0eU9yRW50aXR5SWQ6IElOZW80akVudGl0eSB8IG51bWJlciwgdHlwZTogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGF0YTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcltdIHwgc3RyaW5nW10gfCBib29sZWFuW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHByb3BlcnR5RW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHByb3BlcnR5RW5kcG9pbnRTdHJpbmcgPSBgJHtfZ2V0TmVvNGpFbnRpdHlVcmwoZW50aXR5T3JFbnRpdHlJZCwgdHlwZSl9L3Byb3BlcnRpZXMvJHtwcm9wZXJ0eU5hbWV9YDtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcmVqZWN0KGV4KTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJlamVjdChgUHJvcGVydHkgY2Fubm90IGhhdmUgbnVsbCB2YWx1ZS5gKTtcbiAgICB9XG4gICAgZGF0YSA9IGBcIiR7ZGF0YX1cImA7XG4gICAgcmVxdWVzdE9wdGlvbnMuYm9keSA9IGRhdGE7XG4gICAgcmVxdWVzdC5wdXQocHJvcGVydHlFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwNCkge1xuICAgICAgICByZWplY3QoYEVycm9yIHNldHRpbmcgcHJvcGVydHk6ICR7cHJvcGVydHlOYW1lfSBvbiBOb2RlOiAke19nZXROZW80akVudGl0eUlkKGVudGl0eU9yRW50aXR5SWQpfS4gUmVjZWl2ZWQgSFRUUCBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS4gSFRUUCBib2R5OiAke2JvZHl9YCk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxuICogQHBhcmFtICB7bnVtYmVyfSBub2RlSWRcbiAqIEBwYXJhbSAge2FueX0gZGF0YVxuICogQHJldHVybnMgUHJvbWlzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvcGVydGllcyhlbnRpdHlPckVudGl0eUlkOiBJTmVvNGpFbnRpdHkgfCBudW1iZXIsIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBlbnRpdHlJZDogbnVtYmVyID0gbnVsbDtcblxuICAgIGxldCBwcm9wZXJ0aWVzRW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IGAke19nZXROZW80akVudGl0eVVybChlbnRpdHlPckVudGl0eUlkLCB0eXBlKX0vcHJvcGVydGllc2A7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gZGF0YTtcbiAgICByZXF1ZXN0LnB1dChwcm9wZXJ0aWVzRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDQpIHtcbiAgICAgICAgcmVqZWN0KGBFcnJvciBzZXR0aW5nIHByb3BlcnRpZXMgb24gTm9kZTogJHtlbnRpdHlJZH0uIFJlY2VpdmVkIEhUVFAgc3RhdHVzIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0uIEhUVFAgYm9keTogJHtib2R5fWApO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAge251bWJlcn0gbm9kZUlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKGVudGl0eU9yRW50aXR5SWQ6IElOZW80akVudGl0eSB8IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBwcm9wZXJ0aWVzRW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IGAke19nZXROZW80akVudGl0eVVybChlbnRpdHlPckVudGl0eUlkLCB0eXBlKX0vcHJvcGVydGllc2A7XG4gICAgcmVxdWVzdC5nZXQocHJvcGVydGllc0VuZHBvaW50U3RyaW5nLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgZ2V0dGluZyBwcm9wZXJ0aWVzIG9uIE5vZGU6ICR7X2dldE5lbzRqRW50aXR5SWQoZW50aXR5T3JFbnRpdHlJZCl9LiBSZWNlaXZlZCBIVFRQIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIGJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiAmJiBib2R5Lmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5vZGVJZFxuICogQHBhcmFtICB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5KGVudGl0eU9yRW50aXR5SWQ6IElOZW80akVudGl0eSB8IG51bWJlciwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcltdIHwgc3RyaW5nW10gfCBib29sZWFuW10+IHtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHByb3BlcnR5RW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHByb3BlcnR5RW5kcG9pbnRTdHJpbmcgPSBgJHtfZ2V0TmVvNGpFbnRpdHlVcmwoZW50aXR5T3JFbnRpdHlJZCwgdHlwZSl9L3Byb3BlcnRpZXMvJHtwcm9wZXJ0eU5hbWV9YDtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcmVqZWN0KGV4KTtcbiAgICB9XG4gICAgcmVxdWVzdC5nZXQocHJvcGVydHlFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICByZWplY3QoYEVycm9yIGdldHRpbmcgcHJvcGVydHkgJHtwcm9wZXJ0eU5hbWV9IG9uIE5vZGU6ICR7X2dldE5lbzRqRW50aXR5SWQoZW50aXR5T3JFbnRpdHlJZCl9LiBSZWNlaXZlZCBIVFRQIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIGJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiAmJiBib2R5Lmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5vZGVJZFxuICogQHBhcmFtICB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAqIEByZXR1cm5zIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KGVudGl0eU9yRW50aXR5SWQ6IElOZW80akVudGl0eSB8IG51bWJlciwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcHJvcGVydHlFbmRwb2ludFN0cmluZzogc3RyaW5nID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcHJvcGVydHlFbmRwb2ludFN0cmluZyA9IGAke19nZXROZW80akVudGl0eVVybChlbnRpdHlPckVudGl0eUlkLCB0eXBlKX0vcHJvcGVydGllcy8ke3Byb3BlcnR5TmFtZX1gO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZWplY3QoZXgpO1xuICAgIH1cbiAgICByZXF1ZXN0LmRlbChwcm9wZXJ0eUVuZHBvaW50U3RyaW5nLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjA0KSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgZGVsZXRpbmcgcHJvcGVydHkgJHtwcm9wZXJ0eU5hbWV9IG9uIE5vZGU6ICR7X2dldE5lbzRqRW50aXR5SWQoZW50aXR5T3JFbnRpdHlJZCl9LiBSZWNlaXZlZCBIVFRQIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIGJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5vZGVJZFxuICogQHJldHVybnMgUHJvbWlzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWxsUHJvcGVydGllcyhlbnRpdHlPckVudGl0eUlkOiBJTmVvNGpFbnRpdHkgfCBudW1iZXIsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcHJvcGVydGllc0VuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBwcm9wZXJ0aWVzRW5kcG9pbnRTdHJpbmcgPSBgJHtfZ2V0TmVvNGpFbnRpdHlVcmwoZW50aXR5T3JFbnRpdHlJZCwgdHlwZSl9L3Byb3BlcnRpZXNgO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZWplY3QoZXgpO1xuICAgIH1cbiAgICByZXF1ZXN0LmRlbChwcm9wZXJ0aWVzRW5kcG9pbnRTdHJpbmcsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDQpIHtcbiAgICAgICAgcmVqZWN0KGBFcnJvciBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIE5vZGU6ICR7X2dldE5lbzRqRW50aXR5SWQoZW50aXR5T3JFbnRpdHlJZCl9LiBSZWNlaXZlZCBIVFRQIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LiBIVFRQIGJvZHk6ICR7Ym9keX1gKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJlbGF0aW9uc2hpcCBmdW5jdGlvbnNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwSWQ6IG51bWJlciB8IElSZWxhdGlvbnNoaXAsIGRpcmVjdGlvbj86IHN0cmluZywgdHlwZXM/OiBzdHJpbmdbXSk6IFByb21pc2U8SVJlbGF0aW9uc2hpcD4ge1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uICYmIE5FTzRKX1JFTEFUSU9OU0hJUF9ESVJFQ1RJT04uaW5kZXhPZihkaXJlY3Rpb24pID09PSAtMSkge1xuICAgICAgcmVqZWN0KGBSZWxhdGlvbnNoaXAgJ2RpcmVjdGlvbicgbXVzdCBiZSBvZiB0eXBlOiAke05FTzRKX1JFTEFUSU9OU0hJUF9ESVJFQ1RJT059YCk7XG4gICAgfVxuICAgIGxldCByZWxhdGlvbnNoaXBFbmRwb2ludFN0cmluZzogc3RyaW5nID0gdXJsLnJlc29sdmUoZGJDb25maWdVcmwuaHJlZiwgYHJlbGF0aW9uc2hpcC8ke3JlbGF0aW9uc2hpcElkfWApO1xuICAgIHJlcXVlc3QuZ2V0KHJlbGF0aW9uc2hpcEVuZHBvaW50U3RyaW5nLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgZ2V0dGluZyByZWxhdGlvbnNoaXAgYnkgSUQgJHtyZWxhdGlvbnNoaXBJZH0uIFJlY2VpdmVkIEhUVFAgc3RhdHVzIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0uIEhUVFAgYm9keTogJHtib2R5fWApO1xuICAgICAgfVxuICAgICAgYm9keSA9IHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiICYmIGJvZHkubGVuZ3RoID4gMCA/IEpTT04ucGFyc2UoYm9keSkgOiBib2R5O1xuICAgICAgcmVzb2x2ZShib2R5KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVsYXRpb25zaGlwKHN0YXJ0Tm9kZTogSU5vZGUgfCBzdHJpbmcgfCBudW1iZXIsIHRvTm9kZTogSU5vZGUgfCBzdHJpbmcgfCBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBQcm9taXNlPElSZWxhdGlvbnNoaXA+IHtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHJlbGF0aW9uc2hpcFN0YXJ0RW5kcG9pbnRTdHJpbmc6IHN0cmluZyA9IG51bGw7XG4gICAgbGV0IHJlbGF0aW9uc2hpcEVuZEVuZHBvaW50U3RyaW5nOiBzdHJpbmcgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICByZWxhdGlvbnNoaXBTdGFydEVuZHBvaW50U3RyaW5nID0gYCR7X2dldE5lbzRqRW50aXR5VXJsKHN0YXJ0Tm9kZSwgXCJub2RlXCIpfS9yZWxhdGlvbnNoaXBzYDtcbiAgICAgIHJlbGF0aW9uc2hpcEVuZEVuZHBvaW50U3RyaW5nID0gYCR7X2dldE5lbzRqRW50aXR5VXJsKHRvTm9kZSwgXCJub2RlXCIpfWA7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHJlamVjdChleCk7XG4gICAgfVxuXG4gICAgbGV0IGJvZHk6IGFueSA9IHtcbiAgICAgIHRvOiByZWxhdGlvbnNoaXBFbmRFbmRwb2ludFN0cmluZyxcbiAgICAgIHR5cGUsXG4gICAgICBkYXRhXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZWplY3QoZXgpO1xuICAgIH1cbiAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gYm9keTtcbiAgICByZXF1ZXN0LnBvc3QocmVsYXRpb25zaGlwU3RhcnRFbmRwb2ludFN0cmluZywgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMSkge1xuICAgICAgICByZWplY3QoYEVycm9yIGluc2VydGluZyByZWxhdGlvbnNoaXAuIHJlY2VpdmVkIGludmFsaWQgSFRUUCBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfSwgYW5kIG1lc3NhZ2U6ICR7cmVzcG9uc2Uuc3RhdHVzTWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICAgIGJvZHkgPSB0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiAmJiBib2R5Lmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGJvZHkpIDogYm9keTtcbiAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPclJlbGF0aW9uc2hpcElkOiBudW1iZXIgfCBJUmVsYXRpb25zaGlwKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCByZWxhdGlvbnNoaXBFbmRwb2ludFN0cmluZzogc3RyaW5nID0gX2dldE5lbzRqRW50aXR5VXJsKHJlbGF0aW9uc2hpcE9yUmVsYXRpb25zaGlwSWQsIFwicmVsYXRpb25zaGlwXCIpO1xuICAgIHJlcXVlc3QuZGVsKHJlbGF0aW9uc2hpcEVuZHBvaW50U3RyaW5nLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjA0KSB7XG4gICAgICAgIHJlamVjdChgRXJyb3IgZGVsZXRpbmcgcmVsYXRpb25zaGlwLiByZWNlaXZlZCBpbnZhbGlkIEhUVFAgc3RhdHVzIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0sIGFuZCBtZXNzYWdlOiAke3Jlc3BvbnNlLnN0YXR1c01lc3NhZ2V9YCk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2R1bGUgQWNjZXNzb3IvTXV0YXRvciBmdW5jdGlvbnNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb25uZWN0ZWQ7XG59XG5cbi8qKlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJlYW1pbmcoKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdHJlYW1pbmc7XG59XG5cbi8qKlxuICogQHBhcmFtICB7Ym9vbGVhbn0gcmVxU3RyZWFtaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJlYW1pbmcocmVxU3RyZWFtaW5nOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdHJlYW1pbmcgPSByZXFTdHJlYW1pbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXF1ZXN0T3B0aW9ucygpOiByZXF1ZXN0LkNvcmVPcHRpb25zIHtcbiAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJpdmF0ZSBtb2R1bGUgZnVuY3Rpb25zXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfZ2V0TmVvNGpFbnRpdHlVcmwoZW50aXR5OiBJTmVvNGpFbnRpdHkgfCBzdHJpbmcgfCBudW1iZXIsIHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgZW50aXR5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKGVudGl0eS5zZWxmKSB7XG4gICAgICByZXR1cm4gZW50aXR5LnNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYG9iamVjdCBtdXN0IGhhdmUgcHJvcGVydHkgJ3NlbGYnYCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbnRpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0cnkge1xuICAgICAgdXJsLnBhcnNlKGVudGl0eSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgICByZXR1cm4gZW50aXR5O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbnRpdHkgPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJub2RlXCIpIHtcbiAgICAgIHJldHVybiBgJHtncmFwaFBhdGhzLm5vZGV9LyR7ZW50aXR5fWA7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlbGF0aW9uc2hpcFwiKSB7XG4gICAgICByZXR1cm4gYCR7ZGJDb25maWdVcmx9L3JlbGF0aW9uc2hpcC8ke2VudGl0eX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYHN0YXJ0Tm9kZSBtdXN0IGJlIG9mIHR5cGU6IElOb2RlLCBzdHJpbmcsIG51bWJlcmApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXROZW80akVudGl0eUlkKGVudGl0eU9yRW50aXR5SWQ6IElOZW80akVudGl0eSB8IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgZW50aXR5T3JFbnRpdHlJZCA9PT0gXCJvYmplY3RcIiAmJiBlbnRpdHlPckVudGl0eUlkLmhhc093blByb3BlcnR5KFwibWV0YWRhdGFcIikpIHtcbiAgICByZXR1cm4gZW50aXR5T3JFbnRpdHlJZC5tZXRhZGF0YS5pZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZW50aXR5T3JFbnRpdHlJZCA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBlbnRpdHlPckVudGl0eUlkO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgZW50aXR5T3JFbnRpdHlJZCB0eXBlLiBNdXN0IGJlIG9mIHR5cGU6IElOZW80akVudGl0eSBvciBudW1iZXJgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><nav><ul><li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li></ul><nav><router-view></router-view></nav></nav></template>"; });
define('text!components/about/about.html', ['module'], function(module) { module.exports = "<template><h1>ABOUT</h1></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h1>HOME</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map