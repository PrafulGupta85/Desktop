import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Tour of Heros";

  showMsg = true;
  switchValue = 1;
  readMe() {
    console.log("Message is Displayed");
  }

  colorVal = "lightpink";
  bgColorVal = "grey";

  users = [
    { userId: 10, userName: "Jhon" },
    { userId: 20, userName: "Michael" },
    { userId: 30, userName: "Patrik" },
    { userId: 40, userName: "Peter" },
    { userId: 50, userName: "Robert" },
    { userId: 60, userName: "Simon" },
    { userId: 70, userName: "Travis" },
  ];
}
