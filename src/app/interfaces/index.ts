export interface NetworkFollowers {
   userName: string;
   socialNetworkIcon: string;
   followersNumber: string;
   followersType: string;
   variationNumber: number;
   borderColor: string;
}

export interface ViewsDay {
   viewType: 'Page Views' | 'Profile Views' | 'Likes' | 'Retweets' | 'Total Views';
   socialNetworkIcon: string;
   views: string;
   viewsVariation: number;
}
