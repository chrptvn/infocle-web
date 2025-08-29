import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <footer class="bg-dark-neutral text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">InfoClé Solutions</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ 'FOOTER.COMPANY_DESCRIPTION' | translate }}
            </p>
          </div>
          
          <!-- Services -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ 'FOOTER.SERVICES_TITLE' | translate }}</h3>
            <ul class="space-y-2 text-gray-300">
              <li>{{ 'FOOTER.SERVICE_1' | translate }}</li>
              <li>{{ 'FOOTER.SERVICE_2' | translate }}</li>
              <li>{{ 'FOOTER.SERVICE_3' | translate }}</li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ 'FOOTER.CONTACT_TITLE' | translate }}</h3>
            <div class="space-y-2 text-gray-300">
              <p>contact@infocle-solutions.com</p>
              <p>+1 (555) 123-4567</p>
              <p>{{ 'FOOTER.ADDRESS' | translate }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
          <p class="text-gray-400">
            {{ 'FOOTER.COPYRIGHT' | translate }}
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}