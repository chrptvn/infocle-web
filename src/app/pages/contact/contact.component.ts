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
          <div class="bg-white rounded-lg shadow-md p-8">
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
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'CONTACT.FORM.EMAIL' | translate }}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  [class.border-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ 'CONTACT.FORM.MESSAGE' | translate }}
                </label>
                <textarea 
                  id="message" 
                  rows="5" 
                  formControlName="message"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid"
                class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {{ 'CONTACT.FORM.SUBMIT' | translate }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-white rounded-lg shadow-md p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                {{ 'CONTACT.INFO.TITLE' | translate }}
              </h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-gray-600">contact@infocle-solutions.com</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span class="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-600">{{ 'CONTACT.INFO.ADDRESS' | translate }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                {{ 'CONTACT.HOURS.TITLE' | translate }}
              </h3>
              <div class="space-y-2 text-gray-600">
                <p>{{ 'CONTACT.HOURS.WEEKDAYS' | translate }}</p>
                <p>{{ 'CONTACT.HOURS.SATURDAY' | translate }}</p>
                <p>{{ 'CONTACT.HOURS.SUNDAY' | translate }}</p>
              </div>
            </div>
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
      email: ['', [Validators.required, Validators.email]],
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