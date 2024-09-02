import { ColorPalette } from '@/components/color-palette';

export default function ColorsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>Color Theme</h1>
      <ColorPalette />
    </div>
  );
}
