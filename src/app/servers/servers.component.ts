import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `<h5>I am pankajan</h5>`,
  templateUrl: './servers.component.html',
  //styles: [`h5{
  //  color: green ;
  //}`]
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      } , 2000);
  }

  ngOnInit() {
  }

}
