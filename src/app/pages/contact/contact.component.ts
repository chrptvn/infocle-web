import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
    <div class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ 'CONTACT.TITLE' | translate }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ 'CONTACT.SUBTITLE' | translate }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-md p-8 mx-auto max-w-2xl lg:max-w-none">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">
              {{ 'CONTACT.FORM.TITLE' | translate }}
            </h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'CONTACT.FORM.NAME' | translate }}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'HOME.CONTACT.FORM.EMAIL_OR_PHONE' | translate }}
                </label>
                <input 
                  type="text" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
              </div>

              <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'CONTACT.FORM.SUBJECT' | translate }}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  [class.border-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'CONTACT.FORM.MESSAGE' | translate }}
                </label>
                <textarea 
                  id="message" 
                  rows="4" 
                  formControlName="message"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid"
                class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {{ 'CONTACT.FORM.SUBMIT' | translate }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission here
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}