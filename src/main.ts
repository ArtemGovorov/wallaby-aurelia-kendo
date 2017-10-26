import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import "kendo-ui";
import "kendo-ui/js/kendo.button";
import "kendo-ui/js/kendo.notification";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin("aurelia-kendoui-bridge");

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
