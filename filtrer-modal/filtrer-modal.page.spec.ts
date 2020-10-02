import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltrerModalPage } from './filtrer-modal.page';

describe('FiltrerModalPage', () => {
  let component: FiltrerModalPage;
  let fixture: ComponentFixture<FiltrerModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrerModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrerModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
