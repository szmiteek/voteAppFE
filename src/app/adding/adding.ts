import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person, PersonType } from './person.model';
import { HttpService } from '../http';

@Component({
  selector: 'app-adding',
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './adding.html',
  styleUrl: './adding.scss',
})
export class Adding implements OnInit {
  personForm!: FormGroup;
  personType = PersonType

  constructor(private fb: FormBuilder, private httpService: HttpService) {

  }
  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.personForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      type: [this.personType.CANDIDATES, [Validators.required]]
    });
  }

  resetForm() {
    this.personForm.reset({
      firstName: '',
      lastName: '',
      type: this.personType.CANDIDATES
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const person: Person = {
        firstName: this.personForm.get("firstName")?.value,
        lastName: this.personForm.get("lastName")?.value
      }
      this.httpService.addPerson(person, this.personForm.get("type")?.value).subscribe((data: any) => {
        alert(data.message);

      })
      this.resetForm()
    } else {
      this.personForm.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.personForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}
