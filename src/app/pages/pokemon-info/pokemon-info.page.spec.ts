import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonInfoPage } from './pokemon-info.page';

describe('PokemonInfoPage', () => {
  let component: PokemonInfoPage;
  let fixture: ComponentFixture<PokemonInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
