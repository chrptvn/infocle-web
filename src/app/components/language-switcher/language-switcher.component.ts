import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <button (click)="toggleDropdown()" 
              class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
        <span>{{ currentLanguage?.label }}</span>
        <svg class="w-4 h-4 transform transition-transform" 
             [class.rotate-180]="dropdownOpen"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div [class]="'absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ' + (dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none')">
        <div class="py-1">
          <button *ngFor="let lang of languages"
                  (click)="switchLanguage(lang.code)"
                  [class]="'block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ' + (currentLanguage?.code === lang.code ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700')">
            {{ lang.label }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class LanguageSwitcherComponent {
  private translate = inject(TranslateService);
  
  dropdownOpen = false;
  
  languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];
  
  currentLanguage = this.languages[0];

  constructor() {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    // Check for stored language preference
    const storedLang = localStorage.getItem('language');
    if (storedLang && this.languages.find(lang => lang.code === storedLang)) {
      this.switchLanguage(storedLang);
    }
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  switchLanguage(langCode: string): void {
    this.translate.use(langCode);
    this.currentLanguage = this.languages.find(lang => lang.code === langCode) || this.languages[0];
    localStorage.setItem('language', langCode);
    this.dropdownOpen = false;
  }
}