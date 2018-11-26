import {Component, HostListener, OnInit} from '@angular/core';
import {BottomSheetItem} from "../../models/bottomSheetItem";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rotateForce = 20;
  moveForce = 30;
  splash;
  documentHeight;
  documentWidth;

  bottomSheetOpen: boolean = false;
  bottomSheetItems: BottomSheetItem[] = [
    {
      name: 'Test',
      value: 'Test Value'
    }
  ];

  flip: boolean = false;
  flipType: string = 'flip-y';
  flipTimes: number =1;

  flipSpeed = 6;
  flipSpeedMin = 1;
  flipSpeedMax = 10;

  constructor() {

  }

  ngOnInit(): void {
    this.splash = document.getElementById('lion');
    this.documentHeight = document.body.clientHeight;
    this.documentWidth = document.body.clientWidth;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (event && this.splash && this.rotateForce && this.documentWidth && this.documentHeight) {
      let moveX = (event.pageX - this.documentWidth / 2) / (this.documentWidth / 2) * -this.moveForce;
      let moveY = (event.pageY - this.documentHeight / 2) / (this.documentHeight / 2) * -this.moveForce;

      let rotateY = (event.pageX / this.documentWidth * this.rotateForce * 2) - this.rotateForce;
      let rotateX = -((event.pageY / this.documentHeight * this.rotateForce * 2) - this.rotateForce);

      this.splash.style.left = moveX + 'px';
      this.splash.style.top = moveY + 'px';
      this.splash.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    }
  }

  bottomSheetClosed(event) {
    this.bottomSheetOpen = false;
  }

  toggleBottomSheet() {
    this.bottomSheetOpen = !this.bottomSheetOpen;
  }

  bottomSheetItemSelected(bottomSheetItem: BottomSheetItem){

  }
}
