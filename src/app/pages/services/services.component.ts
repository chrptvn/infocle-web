import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ 'SERVICES.TITLE' | translate }}
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ 'SERVICES.SUBTITLE' | translate }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Website Creation -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.WEB_DEV.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.WEB_DEV.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- Transactional Web Apps -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.WEBAPP.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.WEBAPP.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- SEO & Content Strategy -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.SEO.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.SEO.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- Cloud Hosting & Care -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.HOSTING.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.HOSTING.DESCRIPTION' | translate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}