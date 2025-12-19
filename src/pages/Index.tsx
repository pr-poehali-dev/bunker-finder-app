import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Shelter {
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
                  <Card key={shelter.id} className="hover:shadow-md transition-shadow">
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
                          onClick={() => toggleFavorite(shelter.id)}
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
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {favoriteShelters.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Heart" size={20} className="text-primary" />
                    Обрані сховища
                  </h2>
                  <div className="grid gap-3 mb-6">
                    {favoriteShelters.map((shelter) => (
                      <Card key={shelter.id} className="border-primary/50">
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
                              variant="default"
                              size="icon"
                              onClick={() => toggleFavorite(shelter.id)}
                            >
                              <Icon name="Heart" size={20} />
                            </Button>
                          </div>
                          <Button className="w-full mt-4 gap-2" size="lg">
                            <Icon name="Navigation" size={18} />
                            Прокласти маршрут
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="text-lg font-semibold mb-3">Усі сховища поблизу</h2>
              <div className="grid gap-3">
                {shelters.map((shelter) => (
                  <Card key={shelter.id} className="hover:shadow-md transition-shadow">
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
                          onClick={() => toggleFavorite(shelter.id)}
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
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guide" className="mt-0">
            <div className="space-y-4">
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="AlertTriangle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Правила безпеки</CardTitle>
                      <CardDescription>Важлива інформація для виживання</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="gasmask" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Wind" size={24} className="text-secondary" />
                      <span className="font-semibold">Як користуватись протигазом</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Перевірка перед використанням:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Перевірте цілісність маски та фільтра</li>
                        <li>Переконайтесь, що немає тріщин чи пошкоджень</li>
                        <li>Перевірте термін придатності фільтра</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Як одягати:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Затримайте дихання</li>
                        <li>Вставте підборіддя в маску</li>
                        <li>Натягніть маску на обличчя знизу вгору</li>
                        <li>Затягніть ремінці для щільного прилягання</li>
                        <li>Видихніть різко, щоб вигнати повітря</li>
                        <li>Перевірте щільність прилягання</li>
                      </ol>
                    </div>
                    <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Важливо:</strong> Маска має щільно прилягати до обличчя без зазорів. Якщо у вас
                        борода, протигаз може працювати неефективно.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="firstaid" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Cross" size={24} className="text-primary" />
                      <span className="font-semibold">Як користуватись аптечкою</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Вміст стандартної аптечки:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Бинти та стерильні пов'язки</li>
                        <li>Джгут для зупинки кровотечі</li>
                        <li>Антисептики (перекис, йод)</li>
                        <li>Знеболюючі препарати</li>
                        <li>Ножиці та пінцет</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Перша допомога при кровотечі:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Промийте рану чистою водою</li>
                        <li>Обробіть антисептиком</li>
                        <li>Накладіть стерильну пов'язку</li>
                        <li>При сильній кровотечі - накладіть джгут вище рани</li>
                        <li>Зафіксуйте час накладання джгута</li>
                      </ol>
                    </div>
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Термінова допомога:</strong> При серйозних пораненнях негайно викличте медичну
                        допомогу. Джгут можна тримати не більше 1-2 годин.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shelter" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="ShieldAlert" size={24} className="text-accent" />
                      <span className="font-semibold">Поведінка в укритті</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Що робити при тривозі:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Зберігайте спокій та не панікуйте</li>
                        <li>Візьміть документи, воду, ліки</li>
                        <li>Вимкніть газ, електрику перед виходом</li>
                        <li>Рухайтесь до найближчого сховища</li>
                        <li>Дотримуйтесь вказівок персоналу</li>
                      </ol>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">У сховищі:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                        <li>Розташуйтесь у відведеному місці</li>
                        <li>Не блокуйте проходи та виходи</li>
                        <li>Економте воду та їжу</li>
                        <li>Підтримуйте порядок</li>
                        <li>Слухайте офіційні повідомлення</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Пам'ятайте:</strong> Не виходьте з укриття до офіційного сигналу про відбій тривоги.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emergency" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={24} className="text-primary" />
                      <span className="font-semibold">Екстрені контакти</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Ambulance" size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Швидка допомога</p>
                            <p className="text-sm text-muted-foreground">Медична допомога</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold">103</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Phone" size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Служба порятунку</p>
                            <p className="text-sm text-muted-foreground">ДСНС</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold">101</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Shield" size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Поліція</p>
                            <p className="text-sm text-muted-foreground">Правоохоронні органи</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold">102</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="AlertCircle" size={24} className="text-primary" />
                          <div>
                            <p className="font-medium">Єдина служба</p>
                            <p className="text-sm text-muted-foreground">Всі екстрені служби</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold">112</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
