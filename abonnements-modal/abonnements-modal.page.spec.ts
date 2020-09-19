import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbonnementsModalPage } from './abonnements-modal.page';

describe('AbonnementsModalPage', () => {
  let component: AbonnementsModalPage;
  let fixture: ComponentFixture<AbonnementsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbonnementsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
