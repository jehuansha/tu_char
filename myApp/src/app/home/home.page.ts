import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { IonAvatar } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;
  


  private animation!:Animation;
  constructor(private router: Router,private animationCtrl:AnimationController ) { }


  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
    .addElement(this.avatar.nativeElement)
    .duration(5000)
    .iterations(Infinity)
    .keyframes([
      {offset:0, transform:'translateX(0px)',opacity:'1'},
      {offset:0.25, transform:'translateX(100px)',opacity:'0.2'},
      {offset:0.50, transform:'translateX(0px)',opacity:'1'},
      {offset:0.75, transform:'translateX(-100px)',opacity:'0.2'},
      {offset:1, transform:'translateX(0px)',opacity:'1'},
    ])
  }

  playAvatar(){
    this.animation.play();
  }
  
}

