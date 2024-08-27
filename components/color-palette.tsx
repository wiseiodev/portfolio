import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Card } from '@/components/ui/card';

export function ColorPalette() {
  const colorSets = [
    { name: 'Light Mode', className: '' },
    { name: 'Dark Mode', className: 'dark' },
  ];

  const colors = [
    { name: 'Primary', variable: '--primary' },
    { name: 'Secondary', variable: '--secondary' },
    { name: 'Accent', variable: '--accent' },
    { name: 'Background', variable: '--background' },
    { name: 'Foreground', variable: '--foreground' },
    { name: 'Chart 1', variable: '--chart-1' },
    { name: 'Chart 2', variable: '--chart-2' },
    { name: 'Chart 3', variable: '--chart-3' },
    { name: 'Chart 4', variable: '--chart-4' },
    { name: 'Chart 5', variable: '--chart-5' },
  ];

  return (
    <Tabs
      defaultValue='Light Mode'
      className='w-full'>
      <TabsList className='grid w-full grid-cols-2'>
        {colorSets.map((set) => (
          <TabsTrigger
            key={set.name}
            value={set.name}>
            {set.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {colorSets.map((set) => (
        <TabsContent
          key={set.name}
          value={set.name}>
          <div className={`space-y-6 p-4 ${set.className}`}>
            <h2 className='text-2xl font-bold'>{set.name} Colors</h2>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {colors.map((color) => (
                <Card
                  key={color.name}
                  className='p-4'>
                  <div className='flex items-center space-x-4'>
                    <div
                      className='h-16 w-16 rounded-md'
                      style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                      aria-label={`Color swatch for ${color.name}`}
                    />
                    <div>
                      <h3 className='font-semibold'>{color.name}</h3>
                      <p className='text-sm text-muted-foreground'>
                        var({color.variable})
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
