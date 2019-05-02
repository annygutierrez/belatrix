import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, AvatarComponent, MenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.menu = [{ name: 'test', id: 4 }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
