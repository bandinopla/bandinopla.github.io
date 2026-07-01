export enum Category {
  Games = "Games",
  Editors = "Editors",
  Libraries = "Libraries",

  Animations = "Animations",
  Concept = "Concept",
}

export interface MediaLink {
  caption: string;
  url: string;
  description?: string;
  launch?: boolean;
}

export interface GalleryImage {
  url: string;
  caption?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  heroCoverUrl?: string;
  gallery?: GalleryImage[];
  youtubeVideoUrl?: string;
  shortDescription: string;
  longDescription: string;
  category: Category;
  links: MediaLink[];
}
