import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  imgUrl: string = "https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75";  // Add the image URL
  userName: string = "";
  errorMessage: string = "";
  openWebsite(): void {
    window.open("https://www.bridgelabz.com", "_blank");  // Opens in a new tab
  }

  validateName(): void {
    if (this.userName.length < 3) {
      this.errorMessage = "Name must be at least 3 characters long.";
    } else if (!/^[A-Z]/.test(this.userName)) {
      this.errorMessage = "Name must start with a capital letter.";
    } else {
      this.errorMessage = ""; // No errors
    }
  }

  

}

