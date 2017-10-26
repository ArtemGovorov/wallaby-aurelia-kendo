import { App } from '../../src/app';
import { Container } from "aurelia-dependency-injection";
import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";
import { Aurelia } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

let component;
let viewModel: App;
let container: Container;

describe('the app', () => {

  beforeEach(() => {
    container = new Container();

    viewModel = container.get(App);
    viewModel.message = "42";

    component = StageComponent
      .withResources()
      .inView("<app></app>")
      .boundTo(viewModel);

    component.bootstrap(aurelia => {
      aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName("aurelia-webpack-plugin"))
        .plugin(PLATFORM.moduleName("aurelia-kendoui-bridge"));
    });

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
    spyOn(viewModel, "showNotification").and.callFake((logger, e) => {/**/});
    component.create(bootstrap).then(() => {
      expect(viewModel.showNotification("info")).toHaveBeenCalled();
      expect(viewModel.showNotification("warning")).toHaveBeenCalled();
      expect(viewModel.showNotification("error")).toHaveBeenCalled();
      done();
    });
  });
});
