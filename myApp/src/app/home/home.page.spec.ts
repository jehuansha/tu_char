import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { DjangoapiService } from '../conexion/djangoapi.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let DjangoapiServicet: DjangoapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    DjangoapiServicet = jasmine.createSpyObj('DjangoapiService ', {
      sumar:()=>{
        return 10
      }
    });
    

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('mostar suma', () => {
  //  const obj = new HomePage(DjangoapiServicet)
  //   obj.mostarSuma()
  //   expect(obj.mensaje).toBe("la suma es: 10");
  // }); 
});