import Icon from '@/components/ui/icon';
import { Shelter } from './types';
import ShelterCard from './ShelterCard';

interface ShelterListTabProps {
  shelters: Shelter[];
  favoriteShelters: Shelter[];
  onToggleFavorite: (id: number) => void;
}

const ShelterListTab = ({ shelters, favoriteShelters, onToggleFavorite }: ShelterListTabProps) => {
  return (
    <div className="space-y-4">
      {favoriteShelters.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Icon name="Heart" size={20} className="text-primary" />
            Обрані сховища
          </h2>
          <div className="grid gap-3 mb-6">
            {favoriteShelters.map((shelter) => (
              <ShelterCard
                key={shelter.id}
                shelter={shelter}
                onToggleFavorite={onToggleFavorite}
                className="border-primary/50"
              />
            ))}
          </div>
        </div>
      )}

      <h2 className="text-lg font-semibold mb-3">Усі сховища поблизу</h2>
      <div className="grid gap-3">
        {shelters.map((shelter) => (
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

export default ShelterListTab;
