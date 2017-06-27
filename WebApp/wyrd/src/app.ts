import {RouterConfiguration, Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import * as neo4j from 'neo4j-typescript';
import {Neo4jUtility} from './tools/wyrd-neo4j-utility';

export class App {

  // The Router responsible for re-routing web traffic to the App.
  public router: Router;

/*
  // The Neo4j database configuration object.
  // Defines access methodology and credentials.
  //
  public neo4jConfig: neo4j.INeo4jConfig = {
    // The credentials with which to access the neo4j API
    authentication: {
      username: "neo4j",
      password: "neo4j"
    },
    // The protocol used to access the neo4j object
    protocol: neo4j.NEO4J_PROTOCOL.http,
    // The host in which to find the neo4j object
    host: "localhost",
    // The port in which to find the neo4j object
    port: 7474
  };
*/

  //
  // configureRouter
  // 
  // @param config The configuration for routers associated with the App
  // @param router The router responsible for managing the defined routes.
  //
  configureRouter(config: RouterConfiguration, router: Router): void {
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
          title:'About'
        }

    ]);

    this.router = router;
  }

}
