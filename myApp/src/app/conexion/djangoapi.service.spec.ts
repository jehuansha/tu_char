import { TestBed } from '@angular/core/testing';

import { DjangoapiService } from './djangoapi.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('DjangoapiService', () => {
  let service: DjangoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),HttpClientModule,IonicStorageModule.forRoot()]
    });
    service = TestBed.inject(DjangoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
