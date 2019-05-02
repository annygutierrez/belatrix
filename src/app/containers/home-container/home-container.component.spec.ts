import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { HeaderComponent } from '../../containers/header/header.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../containers/footer/footer.component';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { HomeContainerComponent } from './home-container.component';
import { SectionOneComponent } from '../../components/section-one/section-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ HomeContainerComponent, HeaderComponent, SectionOneComponent, BodyComponent, FooterComponent, AvatarComponent, MenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
