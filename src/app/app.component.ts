import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KMart';
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  searchClicked() {

  }

}
