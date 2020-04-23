import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HatPage } from './hat.page';

describe('HatPage', () => {
  let component: HatPage;
  let fixture: ComponentFixture<HatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
