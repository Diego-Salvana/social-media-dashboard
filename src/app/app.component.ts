import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ViewsDayComponent } from './components/views-day/views-day.component';
import { NetworkFollowers, ViewsDay } from './interfaces';
import { socialNetworkList, viewsList } from './utils/dbMock';

@Component({
   selector: 'app-root',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [HeaderComponent, FollowersComponent, ViewsDayComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent {
   networkList: NetworkFollowers[] = socialNetworkList;
   viewsDayList: ViewsDay[] = viewsList;
}
