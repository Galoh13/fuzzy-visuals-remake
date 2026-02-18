
export interface Photo {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Category {
  id: string;
  title: string;
  heroImage: string;
  photos: Photo[];
}
