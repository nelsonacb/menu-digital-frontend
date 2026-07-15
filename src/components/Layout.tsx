import type { ReactNode } from 'react';
import { WatermarkLogo } from './WatermarkLogo';
import { ServiceCharge } from './ServiceCharge';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen bg-[#DFCEBC] text-[#425340] relative font-sans'>
      <WatermarkLogo />
      <div className='container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-28'>
        {children}
      </div>
      <ServiceCharge />
    </div>
  );
};
