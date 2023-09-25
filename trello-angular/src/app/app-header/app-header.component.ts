import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  Title?: string = undefined;

  storage = window.localStorage;

  loadName() {
    const value = this.storage.getItem('title');

    if (value !== null) {
      this.Title = " " + value;
    }else {
      this.Title = ' New board';
    }

    console.log(value);
    console.log(this.Title);
  }

  titleChange(event: any) {
    const value = event.target.value;
    this.storage.setItem('title', value);
    this.loadName();
  }
}
