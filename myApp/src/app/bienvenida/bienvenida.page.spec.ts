import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BienvenidaPage } from './bienvenida.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { DjangoapiService } from '../conexion/djangoapi.service';

describe('BienvenidaPage', () => {
  let component: BienvenidaPage;
  let fixture: ComponentFixture<BienvenidaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),HttpClientModule,IonicStorageModule.forRoot(),RouterTestingModule],
      declarations: [BienvenidaPage],
      providers: [DjangoapiService]
    }).compileComponents();
    fixture = TestBed.createComponent(BienvenidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
