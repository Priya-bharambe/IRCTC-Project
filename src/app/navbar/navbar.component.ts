import { Component, OnInit } from '@angular/core';
declare var ExternalJSFileFunction:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  callExternalJSFileFunction(){
    ExternalJSFileFunction();
  }

  constructor() { }

  ngOnInit(): void {
  }

  }

