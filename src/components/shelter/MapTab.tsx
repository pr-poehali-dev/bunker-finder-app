import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Shelter } from './types';
import ShelterCard from './ShelterCard';

interface MapTabProps {
  shelters: Shelter[];
  onToggleFavorite: (id: number) => void;
}

const MapTab = ({ shelters, onToggleFavorite }: MapTabProps) => {
  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="relative h-[400px] bg-muted flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10" />
          <div className="relative text-center space-y-2">
            <Icon name="MapPin" size={48} className="mx-auto text-primary" />
            <p className="text-muted-foreground">Інтерактивна карта з точками сховищ</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-3">
        {shelters.slice(0, 3).map((shelter) => (
          <ShelterCard
            key={shelter.id}
            shelter={shelter}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MapTab;
