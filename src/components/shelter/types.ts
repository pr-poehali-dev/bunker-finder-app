export interface Shelter {
  id: number;
  name: string;
  address: string;
  distance: number;
  capacity: number;
  hasGasMasks: boolean;
  hasFirstAid: boolean;
  lat: number;
  lng: number;
  isFavorite: boolean;
}
