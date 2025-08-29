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
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ 'ABOUT.VALUES.VALUE_1' | translate }}
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ 'ABOUT.VALUES.VALUE_2' | translate }}
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ 'ABOUT.VALUES.VALUE_3' | translate }}
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ 'ABOUT.TEAM.TITLE' | translate }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ 'ABOUT.TEAM.DESCRIPTION' | translate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}