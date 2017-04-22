import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AddPersonComponent } from './addPersonComponent';
import { PersonService } from '../services/PersonService'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('AddPersonComponent (templateUrl)', () => {

  let comp: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule, ReactiveFormsModule, CommonModule, FormsModule
      ],
      declarations: [AddPersonComponent], // declare the test component, 
      providers: [PersonService],
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
  });

  it('submit button is rendered', () => {
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("#submit"));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(de.attributes["type"]).toContain('submit');
  });

  it('rendered controls - firstname, lastname and age', () => {
    comp = fixture.componentInstance;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css("#firstname")).attributes["id"]).toContain('firstname');

    expect(fixture.debugElement.query(By.css("#lastname")).attributes["id"]).toContain('lastname');

    expect(fixture.debugElement.query(By.css("#age")).attributes["id"]).toContain('age');
  });

});
