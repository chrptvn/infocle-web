import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, LanguageSwitcherComponent],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-200">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              InfoClé Solutions
            </a>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-blue-600 border-blue-600" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 border-b-2 border-transparent hover:border-blue-200 transition-all">
              {{ 'NAVIGATION.HOME' | translate }}
            </a>
            <a routerLink="/services" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 border-b-2 border-transparent hover:border-blue-200 transition-all">
              {{ 'NAVIGATION.SERVICES' | translate }}
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 border-b-2 border-transparent hover:border-blue-200 transition-all">
              {{ 'NAVIGATION.ABOUT' | translate }}
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 border-b-2 border-transparent hover:border-blue-200 transition-all">
              {{ 'NAVIGATION.CONTACT' | translate }}
            </a>
          </div>

          <!-- Language Switcher -->
          <div class="flex items-center">
            <app-language-switcher></app-language-switcher>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div [class]="'md:hidden overflow-hidden transition-all duration-300 ' + (mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0')">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-100 text-blue-700"
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              {{ 'NAVIGATION.HOME' | translate }}
            </a>
            <a routerLink="/services" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-100 text-blue-700"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              {{ 'NAVIGATION.SERVICES' | translate }}
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-100 text-blue-700"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              {{ 'NAVIGATION.ABOUT' | translate }}
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-100 text-blue-700"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              {{ 'NAVIGATION.CONTACT' | translate }}
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}