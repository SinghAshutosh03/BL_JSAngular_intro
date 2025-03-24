import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Required for ngModel (UC4)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],  // Import FormsModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
