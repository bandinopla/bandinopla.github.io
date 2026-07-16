export enum Category {
  Games = "Games",
  Editors = "Editors",
  Libraries = "Libraries",

  Animations = "Animations",
  Concept = "Concept",
  Modeling = "3D Modeling",
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

export interface FeaturedInfo {
  whereUrl: string;
  projectUrl: string;
  when: string;
  comments: string;
  verb: string;
  what: string;
  screenshotUrl: string;
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
  featured?: FeaturedInfo;
}
