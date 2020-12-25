import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "../assets/BridgeLabz New Logo.svg";
  url = "https://www.bridgelabz.com";
  //Specify userName as String Type
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz!!";
  }

  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
