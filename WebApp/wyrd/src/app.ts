export class App {
  configureRouter(config,router) {
    config.title = "Aurelia";

    config.map([
      { route: ['','home'], name: 'home', moduleId: './components/home/home', nav: true, title: 'Home' },
      { route: 'about', name: 'about', moduleId: './components/about/about', nav: true, title: 'About' },
    ])
  }

  message = 'Hello World!';
}
