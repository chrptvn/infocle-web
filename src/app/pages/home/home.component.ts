import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <div class="bg-gradient-to-br from-primary/5 to-primary/10 min-h-[calc(100vh-200px)]">
      <!-- Hero Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ 'HOME.HERO.TITLE' | translate }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ 'HOME.HERO.SUBTITLE' | translate }}
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a routerLink="/services" 
               class="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
              {{ 'HOME.HERO.CTA_SERVICES' | translate }}
            </a>
            <a routerLink="/contact" 
               class="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all duration-200">
              {{ 'HOME.HERO.CTA_CONTACT' | translate }}
            </a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            {{ 'HOME.FEATURES.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ 'HOME.FEATURES.INNOVATION.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.FEATURES.INNOVATION.DESCRIPTION' | translate }}
              </p>
            </div>
            
            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ 'HOME.FEATURES.PERFORMANCE.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.FEATURES.PERFORMANCE.DESCRIPTION' | translate }}
              </p>
            </div>
            
            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ 'HOME.FEATURES.SECURITY.TITLE' | translate }}
              </h3>
              <p class="text-gray-600">
                {{ 'HOME.FEATURES.SECURITY.DESCRIPTION' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {}