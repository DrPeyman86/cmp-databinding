import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { ElementRef } from '@angular/core/src/linker/element_ref';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //EventEmitter is an angular object that allows you to emit your own events
  //EventEmitter is a generic type, which can be defined by <>
  //@Output decorator allows this object to be listened to from outside of this component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();//add () add the end to call the constructor() function of the EventEmitter object
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  //if you want to use an element before an event is emitted from the template, you can use @ViewChild and specify the name of
  //the element reference and set it as a property here in the .ts file
  //you can also @ViewChild(Cockpit) on a component which would give you access to the first occurance of the component sent as an argument
  //in the @ViewChild decorator
  //the @ViewChild will reference the element here in the ts, so we know it's a reference type property. so import it from the angular/core
  //serverContentInput is the local reference.
  @ViewChild('serverContentInput') serverContent: ElementRef;//we know this property is a reference type of that DOM elment. it is referencing
  //that element. to access the native element, you would do serverContentInput.nativeElement.value or whatever property you want

  constructor() { }

  ngOnInit() {
  }

  //you should as a good practice say the type of the argument you are sending if you are referencing an element.
  //nameinput we know it's HTMLInputElement.
  onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput);//the console will show this is a type of ElementRef, which is a reference of that element
    console.log(nameInput.value)
    this.serverCreated.emit({
      //serverName: this.newServerName, //this is if newServerName element in the template was used with two-way binding
      serverName: nameInput.value,//this is how it will look if you used references on a certain element
      serverContent: this.serverContent.nativeElement.value});//now when this component triggers this function, it will emit an event of the type
      //EventEmitter called serverCreated, which the parent component will be listening to
      //when using a reference type property with @ViewChild, you get access to the underlining properties of that element. It has a useful
      //property called NativeElement, which you can then use to get the value of the element
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput);
    this.bluePrintCreated.emit({
      //serverName: this.newServerName, //this is if newServerName element in the template was used with two-way binding
      serverName: nameInput.value,//this is how it will look if you used references on a certain element
      serverContent: this.serverContent.nativeElement.value});//now when this component triggers this function, it will emit an event of the type
    //EventEmitter called bluePrintCreated, which the parent component will be listening to
    //when using a reference type property with @ViewChild, you get access to the underlining properties of that element. It has a useful
      //property called NativeElement, which you can then use to get the value of the element
  }

}
