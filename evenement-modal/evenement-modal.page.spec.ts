import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvenementModalPage } from './evenement-modal.page';

describe('EvenementModalPage', () => {
  let component: EvenementModalPage;
  let fixture: ComponentFixture<EvenementModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvenementModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
