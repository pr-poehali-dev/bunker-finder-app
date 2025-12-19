import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Shelter } from './types';

interface ShelterCardProps {
  shelter: Shelter;
  onToggleFavorite: (id: number) => void;
  className?: string;
}

const ShelterCard = ({ shelter, onToggleFavorite, className = '' }: ShelterCardProps) => {
  return (
    <Card className={`hover:shadow-md transition-shadow ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-start gap-2 mb-2">
              <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{shelter.name}</h3>
                <p className="text-sm text-muted-foreground">{shelter.address}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="outline" className="gap-1">
                <Icon name="Navigation" size={14} />
                {shelter.distance} км
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Icon name="Users" size={14} />
                {shelter.capacity} осіб
              </Badge>
              {shelter.hasGasMasks && (
                <Badge variant="secondary" className="gap-1">
                  <Icon name="Wind" size={14} />
                  Протигази
                </Badge>
              )}
              {shelter.hasFirstAid && (
                <Badge variant="secondary" className="gap-1">
                  <Icon name="Cross" size={14} />
                  Аптечка
                </Badge>
              )}
            </div>
          </div>
          <Button
            variant={shelter.isFavorite ? 'default' : 'outline'}
            size="icon"
            onClick={() => onToggleFavorite(shelter.id)}
          >
            <Icon name={shelter.isFavorite ? 'Heart' : 'HeartOff'} size={20} />
          </Button>
        </div>
        <Button className="w-full mt-4 gap-2" size="lg">
          <Icon name="Navigation" size={18} />
          Прокласти маршрут
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShelterCard;
