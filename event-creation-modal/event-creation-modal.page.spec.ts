import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventCreationModalPage } from './event-creation-modal.page';

describe('EventCreationModalPage', () => {
  let component: EventCreationModalPage;
  let fixture: ComponentFixture<EventCreationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventCreationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
