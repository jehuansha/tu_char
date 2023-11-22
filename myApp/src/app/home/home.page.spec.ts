
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DjangoapiService } from '../conexion/djangoapi.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let djangoApiService: DjangoapiService;

  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(),HttpClientModule,IonicStorageModule.forRoot()],
      providers: [DjangoapiService]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    djangoApiService = TestBed.inject(DjangoapiService);
    
    spyOn(djangoApiService, 'sumar').and.returnValue(9);

  
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('doSumar() OK', () => {
    component.entrada.numero1=4;
    component.entrada.numero2=5;
    component.doSumar();
    expect(component.mensaje).toBe("La suma es: 9");
  });  
});