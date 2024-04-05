import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
   selector: 'app-header',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
   @ViewChild('switchDarkMode') switchDarkMode!: ElementRef<HTMLElement>;
   private htmlElement!: HTMLElement;

   ngAfterViewInit(): void {
      this.htmlElement = document.querySelector('html') as HTMLElement;

      if (localStorage.getItem('theme') === 'dark') {
         this.htmlElement.classList.add('darkMode');
         this.switchDarkMode.nativeElement.classList.add('dark');
      }
   }

   switchTheme(): void {
      this.switchDarkMode.nativeElement.classList.toggle('dark');
      this.htmlElement.classList.toggle('darkMode');

      if (this.htmlElement.classList.contains('darkMode')) {
         localStorage.setItem('theme', 'dark');
      } else {
         localStorage.setItem('theme', 'light');
      }
   }
}
