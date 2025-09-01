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
            <a routerLink="/" class="flex items-center hover:opacity-80 transition-opacity">
              <img src="/assets/infocle-logo.webp" alt="InfoClé Solutions" class="h-16 w-auto">
            </a>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-primary border-primary" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-dark-neutral hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary/30 transition-all">
              {{ 'NAVIGATION.HOME' | translate }}
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-primary border-primary"
               class="text-dark-neutral hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary/30 transition-all">
              {{ 'NAVIGATION.ABOUT' | translate }}
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-primary border-primary"
               class="text-dark-neutral hover:text-primary px-3 py-2 border-b-2 border-transparent hover:border-primary/30 transition-all">
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
                    class="text-dark-neutral hover:text-primary focus:outline-none focus:text-primary">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div [class]="'md:hidden overflow-hidden transition-all duration-300 ' + (mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0')">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-neutral rounded-lg mt-2">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-primary/10 text-primary"
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 rounded-md text-base font-medium text-dark-neutral hover:text-primary hover:bg-primary/5 transition-colors">
              {{ 'NAVIGATION.HOME' | translate }}
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-primary/10 text-primary"
               class="block px-3 py-2 rounded-md text-base font-medium text-dark-neutral hover:text-primary hover:bg-primary/5 transition-colors">
              {{ 'NAVIGATION.ABOUT' | translate }}
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-primary/10 text-primary"
               class="block px-3 py-2 rounded-md text-base font-medium text-dark-neutral hover:text-primary hover:bg-primary/5 transition-colors">
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