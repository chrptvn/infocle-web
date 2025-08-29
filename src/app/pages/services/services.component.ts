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
          <!-- Web Development -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.WEB_DEV.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.WEB_DEV.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- Cloud Solutions -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.CLOUD.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.CLOUD.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- IT Consulting -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.CONSULTING.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.CONSULTING.DESCRIPTION' | translate }}
            </p>
          </div>

          <!-- Data Analytics -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              {{ 'SERVICES.DATA_ANALYTICS.TITLE' | translate }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ 'SERVICES.DATA_ANALYTICS.DESCRIPTION' | translate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}