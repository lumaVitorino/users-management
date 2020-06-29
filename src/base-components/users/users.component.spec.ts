import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';
import { User } from '@src/models/user';
import { EMPTY_ARRAY } from '@angular/core/src/view';

describe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UsersComponent
      ],
    }).compileComponents();
  }));

  it('should create users component', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const users = fixture.debugElement.componentInstance;
    expect(users).toBeTruthy();
  });

  it(`should have users collection`, () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const userComponent = fixture.debugElement.componentInstance;
    expect(userComponent.users).toEqual(EMPTY_ARRAY);
  })

});
