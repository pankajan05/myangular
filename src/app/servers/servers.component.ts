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
  serverStatus = "No server was created";
  serverName = 'testserver';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      } , 6000);
  }

  ngOnInit() {
  }

  onClick(){
    this.serverStatus = this.serverName+ " was  created successfully.";
    this.serverCreated = true;
  }

  createServer(event:Event) {

    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
