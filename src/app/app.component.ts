import { Component } from '@angular/core';
import {Server} from './shared/serve.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Server[] = [ new Server('testserver', 'Blueprint', 'This is created for test purpose')];
  serverCreated = false;
  serverStatus = 'No server was created';

  serverCreate(server: Server) {
    this.serverCreated = true;
    this.servers.push(server);
    this.serverStatus = server.serverType + ' was  created successfully.';
  }

  blueprintCreate(server: Server) {
    this.serverCreated = true;
    this.servers.push(server);
    this.serverStatus = server.serverType + ' was  created successfully.';
  }

  OnChangeFirst() {
    this.servers[0].serverName = 'changed!';
    console.log('click');
  }
  OndeleteFirst() {
    this.servers.pop();
  }
}
