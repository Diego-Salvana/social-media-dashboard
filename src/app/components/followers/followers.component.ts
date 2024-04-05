import { CommonModule } from '@angular/common';
import {
   AfterViewInit,
   ChangeDetectionStrategy,
   Component,
   ElementRef,
   Input,
   Renderer2,
   ViewChild,
} from '@angular/core';

@Component({
   selector: 'app-followers',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [CommonModule],
   templateUrl: './followers.component.html',
   styleUrl: './followers.component.scss',
})
export class FollowersComponent implements AfterViewInit {
   @Input() socialNetworkIcon = '';
   @Input() userName = '';
   @Input() followers = '';
   @Input() description = '';
   @Input() followersVariation = 0;
   @Input() borderColor = '';
   @ViewChild('borderTop') borderTop!: ElementRef<HTMLElement>;

   constructor(private renderer: Renderer2) {}

   ngAfterViewInit() {
      const borderElement = this.borderTop.nativeElement;

      this.renderer.setStyle(borderElement, 'background', this.borderColor);
   }
}
