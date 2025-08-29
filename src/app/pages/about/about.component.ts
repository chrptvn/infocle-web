import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ 'ABOUT.TITLE' | translate }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ 'ABOUT.SUBTITLE' | translate }}
          </p>
        </div>

        <div class="prose prose-lg max-w-none">
          <div class="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ 'ABOUT.MISSION.TITLE' | translate }}
            </h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ 'ABOUT.MISSION.DESCRIPTION' | translate }}
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ 'ABOUT.VALUES.TITLE' | translate }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_1' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_2' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_3' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.VALUES.VALUE_4' | translate }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ 'ABOUT.APPROACH.TITLE' | translate }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ 'ABOUT.APPROACH.DESCRIPTION' | translate }}
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ 'ABOUT.EXPERTISE.TITLE' | translate }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_1' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_2' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_3' | translate }}</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                <span class="text-gray-600">{{ 'ABOUT.EXPERTISE.TECH_4' | translate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}