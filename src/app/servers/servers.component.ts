import { Component, OnInit } from '@angular/core';
import {Server} from '../shared/serve.model';

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
  serverName = '';
  serverContent = '';
  serverCreated = false;
  servers: Server[] = [ new Server('testserver', 'Blueprint', 'This is created for test purpose')];
  serverType = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      } , 6000);
  }

  ngOnInit() {
  }

  addServer() {
    this.serverCreated = true;
    this.serverType = 'Server';
    this.servers.push(new Server(this.serverName,this.serverType,this.serverContent));
    this.serverStatus = this.serverType + " was  created successfully.";
  }

  addBlueprint() {
    this.serverCreated = true;
    this.serverType = 'Blueprint';
    this.servers.push(new Server(this.serverName,this.serverType,this.serverContent));
    this.serverStatus = this.serverType + " was  created successfully.";
  }

  //createServer(event:Event) {
  //  this.serverName = (<HTMLInputElement>event.target).value;
  //  console.log(event);
  //}
}
