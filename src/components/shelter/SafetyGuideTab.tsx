import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const SafetyGuideTab = () => {
  return (
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
  );
};

export default SafetyGuideTab;
