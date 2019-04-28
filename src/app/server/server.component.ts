import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {Server} from '../shared/serve.model';
import {collectExternalReferences} from '@angular/compiler';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{color:white;}`]
})
export  class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {
  @Input('Disk') server: Server;
  @Input() name: string;
  serverStatus = 'offline';
  @ViewChild('heading') Header: ElementRef;

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }
  ngDoCheck(): void {
    console.log('ngDocheck is called!');
    console.log('textContent: '+this.Header.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck is called!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheck is called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called!');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy is called!');
    console.log('textContent: '+this.Header.nativeElement.textContent);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online'? 'green' : 'red';
  }
}
