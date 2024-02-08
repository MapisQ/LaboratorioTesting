import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('greetings', () => {
    const fixture = TestBed.createComponent(GreetingsComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('componente Greeting')));
    expect(fixture.nativeElement.textConent);

  });
});
