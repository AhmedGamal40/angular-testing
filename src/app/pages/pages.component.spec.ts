import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement  } from '@angular/core'
import { PagesComponent } from './pages.component';
import { TestService } from '../test.service';
import { By } from '@angular/platform-browser';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let testDemo: TestService;
  let num : DebugElement ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesComponent]

    });
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    testDemo = TestBed.inject(TestService)
    num = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing name is String', () => {
    expect(component.name).toBe('Ahmed');
  });

  it('testing Called The testDemo in this component', () => {
    spyOn(testDemo,'getTestVale')
    component.ngOnInit()
    expect(testDemo.getTestVale).toHaveBeenCalled()
    expect(testDemo.getTestVale).toHaveBeenCalledTimes(1);
  });

  it('testing click  on  increse ', () => {
    let onClick = num.query(By.css('#increse'))
    onClick.triggerEventHandler('click')
    expect(component.counter).toBe(1);

  });

  it('testing click  on  decrese ', () => {
    let onClick = num.query(By.css('#decrese'))
    onClick.triggerEventHandler('click')
    expect(component.counter).toBe(-1);

  });

    it('testing value of counter', ()=>{
      let span = num.query(By.css('span'))
      let onClick = num.query(By.css('#increse'))
    onClick.triggerEventHandler('click')
    fixture.detectChanges();
      expect(span.nativeElement.textContent).toEqual('0')
    })

});
