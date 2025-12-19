import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Shelter } from '@/components/shelter/types';
import MapTab from '@/components/shelter/MapTab';
import ShelterListTab from '@/components/shelter/ShelterListTab';
import SafetyGuideTab from '@/components/shelter/SafetyGuideTab';

const Index = () => {
  const [shelters, setShelters] = useState<Shelter[]>([
    {
      id: 1,
      name: 'Убежище № 1',
      address: 'ул. Шевченко, 25',
      distance: 0.3,
      capacity: 150,
      hasGasMasks: true,
      hasFirstAid: true,
      lat: 50.4501,
      lng: 30.5234,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Метро "Крещатик"',
      address: 'Майдан Независимости',
      distance: 0.5,
      capacity: 500,
      hasGasMasks: true,
      hasFirstAid: true,
      lat: 50.4501,
      lng: 30.5234,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Подземный паркинг ТРЦ',
      address: 'бул. Леси Украинки, 34',
      distance: 0.8,
      capacity: 200,
      hasGasMasks: false,
      hasFirstAid: true,
      lat: 50.4501,
      lng: 30.5234,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Убежище № 7',
      address: 'просп. Победы, 12',
      distance: 1.2,
      capacity: 300,
      hasGasMasks: true,
      hasFirstAid: true,
      lat: 50.4501,
      lng: 30.5234,
      isFavorite: true,
    },
  ]);

  const [activeTab, setActiveTab] = useState('map');

  const toggleFavorite = (id: number) => {
    setShelters(
      shelters.map((shelter) =>
        shelter.id === id ? { ...shelter, isFavorite: !shelter.isFavorite } : shelter
      )
    );
  };

  const favoriteShelters = shelters.filter((s) => s.isFavorite);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="ShieldAlert" size={32} />
              <div>
                <h1 className="text-xl font-bold">Безпечне місце</h1>
                <p className="text-xs opacity-90">Найближчі сховища</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="gap-2">
              <Icon name="Bell" size={18} />
              <span className="hidden sm:inline">Тривога</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-[88px] z-40 bg-background border-b">
          <div className="container mx-auto px-4">
            <TabsList className="w-full grid grid-cols-3 h-14">
              <TabsTrigger value="map" className="gap-2">
                <Icon name="Map" size={20} />
                <span className="hidden sm:inline">Карта</span>
              </TabsTrigger>
              <TabsTrigger value="list" className="gap-2">
                <Icon name="List" size={20} />
                <span className="hidden sm:inline">Список</span>
              </TabsTrigger>
              <TabsTrigger value="guide" className="gap-2">
                <Icon name="BookOpen" size={20} />
                <span className="hidden sm:inline">Інструкції</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <TabsContent value="map" className="mt-0">
            <MapTab shelters={shelters} onToggleFavorite={toggleFavorite} />
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <ShelterListTab
              shelters={shelters}
              favoriteShelters={favoriteShelters}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="guide" className="mt-0">
            <SafetyGuideTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
