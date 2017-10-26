import "kendo-ui";
import * as $ from "jquery";

export class App {
  message = 'Hello World!';

  constructor() {
    kendo.culture("en-US");
  }

  showNotification(type){
    const message = "This is a message!";
    if (type === "warning") {
      $("#staticNotification").data("kendoNotification").warning(message);
    }
    else{
      $("#staticNotification").data("kendoNotification").show(message, type);
    }
    console.log(`The type is: ${type}`);
  }
}
