import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
   selector: 'app-views-day',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './views-day.component.html',
   styleUrl: './views-day.component.scss',
})
export class ViewsDayComponent {
   @Input() viewType = '';
   @Input() socialNetworkIcon = '';
   @Input() views = '';
   @Input() viewsVariation = 0;
}
