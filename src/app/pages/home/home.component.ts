import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule, ReactiveFormsModule, CommonModule],
  template: `
    <div class="bg-gradient-to-br from-primary/5 to-primary/10">
      <!-- Hero Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
            {{ 'HOME.HERO.TITLE' | translate }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ 'HOME.HERO.SUBTITLE' | translate }}
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a routerLink="/contact" 
               class="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
              {{ 'HOME.HERO.CTA_QUOTE' | translate }}
            </a>
            <a href="#projects" 
               class="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all duration-200">
              {{ 'HOME.HERO.CTA_WORK' | translate }}
            </a>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section id="projects" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-dark-neutral mb-12">
            {{ 'HOME.PROJECTS.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- GymBro.ca -->
            <div class="bg-neutral rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <a href="https://gymbro.ca" target="_blank" rel="noopener noreferrer" class="block h-48 overflow-hidden cursor-pointer relative group">
                <img src="/assets/gymbro_thumb.webp" 
                     alt="GymBro.ca website screenshot" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 group-hover:from-black/10 group-hover:via-black/5 group-hover:to-black/20 transition-all duration-300"></div>
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                  {{ 'HOME.PROJECTS.GYMBRO.TITLE' | translate }}
                </h3>
                <p class="text-gray-600 mb-4">
                  {{ 'HOME.PROJECTS.GYMBRO.DESCRIPTION' | translate }}
                </p>
                <a href="https://gymbro.ca" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  {{ 'HOME.PROJECTS.GYMBRO.LINK' | translate }}
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- MinuteMail.co -->
            <div class="bg-neutral rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <a href="https://minutemail.co" target="_blank" rel="noopener noreferrer" class="block h-48 overflow-hidden cursor-pointer relative group">
                <img src="/assets/minutemail-thumb.webp" 
                     alt="MinuteMail.co website screenshot" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 group-hover:from-black/10 group-hover:via-black/5 group-hover:to-black/20 transition-all duration-300"></div>
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                  {{ 'HOME.PROJECTS.MINUTEMAIL.TITLE' | translate }}
                </h3>
                <p class="text-gray-600 mb-4">
                  {{ 'HOME.PROJECTS.MINUTEMAIL.DESCRIPTION' | translate }}
                </p>
                <a href="https://minutemail.co" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  {{ 'HOME.PROJECTS.MINUTEMAIL.LINK' | translate }}
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-16 bg-neutral">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-dark-neutral mb-12">
            {{ 'HOME.SERVICES.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Website Creation -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-neutral mb-2">
                {{ 'HOME.SERVICES.WEBSITE.TITLE' | translate }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ 'HOME.SERVICES.WEBSITE.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- Transactional Web Apps -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-neutral mb-2">
                {{ 'HOME.SERVICES.WEBAPP.TITLE' | translate }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ 'HOME.SERVICES.WEBAPP.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- SEO & Content -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-neutral mb-2">
                {{ 'HOME.SERVICES.SEO.TITLE' | translate }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ 'HOME.SERVICES.SEO.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- Cloud Hosting & Care -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-neutral mb-2">
                {{ 'HOME.SERVICES.HOSTING.TITLE' | translate }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ 'HOME.SERVICES.HOSTING.DESCRIPTION' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-dark-neutral mb-12">
            {{ 'HOME.PROCESS.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Discovery -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                {{ 'HOME.PROCESS.DISCOVERY.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.PROCESS.DISCOVERY.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- Design -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                {{ 'HOME.PROCESS.DESIGN.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.PROCESS.DESIGN.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- Build -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                {{ 'HOME.PROCESS.BUILD.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.PROCESS.BUILD.DESCRIPTION' | translate }}
              </p>
            </div>

            <!-- Launch & Care -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-neutral mb-2">
                {{ 'HOME.PROCESS.LAUNCH.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.PROCESS.LAUNCH.DESCRIPTION' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16 bg-neutral">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-dark-neutral mb-4">
              {{ 'HOME.CONTACT.TITLE' | translate }}
            </h2>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-8">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-dark-neutral mb-2">
                    {{ 'HOME.CONTACT.FORM.NAME' | translate }}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-dark-neutral mb-2">
                    {{ 'HOME.CONTACT.FORM.EMAIL' | translate }}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                </div>
              </div>

              <div class="mb-4">
                <label for="projectType" class="block text-sm font-medium text-dark-neutral mb-2">
                  {{ 'HOME.CONTACT.FORM.PROJECT_TYPE' | translate }}
                </label>
                <select 
                  id="projectType" 
                  formControlName="projectType"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                  <option value="website">{{ 'HOME.CONTACT.FORM.PROJECT_TYPES.WEBSITE' | translate }}</option>
                  <option value="ecommerce">{{ 'HOME.CONTACT.FORM.PROJECT_TYPES.ECOMMERCE' | translate }}</option>
                  <option value="other">{{ 'HOME.CONTACT.FORM.PROJECT_TYPES.OTHER' | translate }}</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-dark-neutral mb-2">
                  {{ 'HOME.CONTACT.FORM.MESSAGE' | translate }}
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
                {{ 'HOME.CONTACT.FORM.SUBMIT' | translate }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      projectType: ['website', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission here
      alert('Message sent successfully!');
      this.contactForm.reset();
      this.contactForm.patchValue({ projectType: 'static' });
    }
  }
}