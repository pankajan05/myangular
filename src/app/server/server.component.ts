import {Component, Input} from '@angular/core';
import {Server} from '../shared/serve.model';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{color:white;}`]
})
export  class ServerComponent {
  @Input('Disk') server: Server;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online'? 'green' : 'red';
  }
}
