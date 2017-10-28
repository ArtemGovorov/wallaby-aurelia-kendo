import { App } from '../../src/app';
import { Container } from "aurelia-dependency-injection";
import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as $ from "jquery";

let component;
let viewModel: App;
let container: Container;

describe('the app', () => {

  beforeEach(() => {
    container = new Container();

    viewModel = container.get(App);
    viewModel.message = "42";

    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView("<app></app>")
      .boundTo(viewModel);

    component.bootstrap(aurelia => {
      aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName("aurelia-kendoui-bridge"));
    });

  });

  afterEach(() => {
    try {
      component.dispose();
    } catch (error) {
    }

  });

  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });

  it('says hello too', done => {

    component.create(bootstrap).then(() => {
      console.log('viewModel.message' + viewModel.message);
      expect(viewModel.message).toBe('42');
      done();
    });
  });

  it('shows notifications', done => {
    spyOn(viewModel, "showNotification").and.callFake((logger, e) => {/**/ });
    component.create(bootstrap).then(() => {
      viewModel.showNotification("info");
      viewModel.showNotification("warning");
      viewModel.showNotification("error");

      expect(viewModel.showNotification).toHaveBeenCalledWith("info");
      expect(viewModel.showNotification).toHaveBeenCalledWith("warning");
      expect(viewModel.showNotification).toHaveBeenCalledWith("error");
      done();
    }).catch(e => { console.log(`L'erreur est:${e.toString()}`) });
  });

  it('shows notifications 2', done => {
    component.create(bootstrap).then(() => {
      spyOn(viewModel, "showNotification");
      viewModel.showNotification("info");
      viewModel.showNotification("warning");
      viewModel.showNotification("error");
      expect(viewModel.showNotification).toHaveBeenCalledWith("info");
      expect(viewModel.showNotification).toHaveBeenCalledWith("warning");
      expect(viewModel.showNotification).toHaveBeenCalledWith("error");
      done();
    }).catch(e => { console.log(`L'erreur dans show2 est:${e.toString()}`) });
  });
});
