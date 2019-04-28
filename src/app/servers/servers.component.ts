import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output('screated')serverCreate = new EventEmitter<Server>();
  @Output('bpcreated')blueprintCreate = new EventEmitter<Server>();
  serverName = '';
  serverContent = '';
  serverType = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      } , 6000);
  }

  ngOnInit() {
  }

  addServer(Input: HTMLInputElement) {
    this.serverType = 'Server';
    this.serverName = Input.value;
    this.serverCreate.emit(new Server(this.serverName,this.serverType,this.serverContent));
  }

  addBlueprint(Input: HTMLInputElement) {
    this.serverType = 'Blueprint';
    this.serverName = Input.value;
    this.blueprintCreate.emit(new Server(this.serverName,this.serverType,this.serverContent));
  }
  //createServer(event:Event) {
  //  this.serverName = (<HTMLInputElement>event.target).value;
  //  console.log(event);
  //}
}
