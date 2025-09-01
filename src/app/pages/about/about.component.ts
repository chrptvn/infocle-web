import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Intro (Hero) -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-extrabold text-dark-neutral">
          {{ 'ABOUT.TITLE' | translate }}
        </h1>
        <p class="text-gray-600 text-center mt-3 max-w-3xl mx-auto text-lg">
          {{ 'ABOUT.SUBTITLE' | translate }}
        </p>
      </div>

      <!-- Cards Stack -->
      <div class="space-y-8">
        <!-- Mission Card -->
        <div class="bg-white rounded-xl shadow-md p-8">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary/80" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-semibold text-dark-neutral">
              {{ 'ABOUT.MISSION.TITLE' | translate }}
            </h2>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ 'ABOUT.MISSION.DESCRIPTION' | translate }}
          </p>
        </div>

        <!-- Values Card -->
        <div class="bg-white rounded-xl shadow-md p-8">
          <h2 class="text-2xl font-semibold text-dark-neutral mb-6">
            {{ 'ABOUT.VALUES.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_1' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_2' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_3' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_4' | translate }}</span>
            </div>
          </div>
        </div>

        <!-- Approach Card -->
        <div class="bg-white rounded-xl shadow-md p-8">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
            </div>
            <h2 class="text-2xl font-semibold text-dark-neutral">
              {{ 'ABOUT.APPROACH.TITLE' | translate }}
            </h2>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ 'ABOUT.APPROACH.DESCRIPTION' | translate }}
          </p>
        </div>

        <!-- Expertise Section -->
        <div class="bg-white rounded-xl shadow-md p-8">
          <h2 class="text-2xl font-semibold text-dark-neutral mb-6">
            {{ 'ABOUT.EXPERTISE.TITLE' | translate }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_1' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_2' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_3' | translate }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 text-primary/80 flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                </svg>
              </div>
              <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_4' | translate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}