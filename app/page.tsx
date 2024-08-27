import { ColorPalette } from '@/components/color-palette';
import Image from 'next/image';
import logo from '@/assets/wiseio-logo.png';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col space-y-2 items-center justify-between py-8 px-24'>
      <div className='flex flex-row space-x-2 items-center'>
        <div>Welcome to Wise IO</div>
      </div>
      <Image
        priority
        src={logo}
        alt='Wise IO Logo'
        width={400}
      />
      <ColorPalette />
    </div>
  );
}
