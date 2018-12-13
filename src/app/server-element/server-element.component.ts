import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy } from '@angular/core';
//import { ViewEncapsulation } from '@angular/compiler/src/core';

//encapsulation is for how elements are viewed in the browser. by default angular Cli encapsulates elements in its own component, 
//meaning styling .css for elements will not be used outside of this component. Angular will define custom attribute names to make them
//unique to the rest of the DOM elements. 
//but viewEncapsulation.None will not make any of the targeted elements in the .css file unique for this component alone, so if a <label> tag
//is defined in .css file, any label tag defined in any of the DOM will also be targeted.
//the default encapsulation is encapsulation: ViewEncapsulation.Emulated. Although you do not need to write this since its default behavior
//ViewEncapsulated.Native uses the shadow DOM technology which is not supported by all browsers
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated//None,Native
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  //add the @Input decorater in front of a property to make it accessible from the parent component, parent component being app.component.ts. 
  //otherwise, app.component.ts would not know what element is inside its .ts or .html file
  //if you want to Alias a property outside of the current component, you can Alias it by inside the parentheses add as string value of what 
  //you want the name of the property for the outside to be.
  //you can then add a serverElement in app-component and it will bind that object to a property called "srvElement" defined in app.component.html
  //so that it will set element object properties as new server/blueprints are being added
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;//can be set from outside with @Input


  constructor() { console.log('constructor called') }

  //ngOnChanges - is the only lifecycle hook that receives argument. argument is "changes" which is of type simpleChanges that needs to be imported
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called,', changes)
  }
  
  ngOnInit() {
    console.log('ngOnInt callled');
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called')
  }
 
  ngAfterContentChecked() {
    console.log('AfterContenChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
