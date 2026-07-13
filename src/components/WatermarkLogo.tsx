import logoImg from '../assets/logo-v2.png';

export const WatermarkLogo = () => {
  return (
    <img
      src={logoImg}
      alt='Logo'
      className='fixed bottom-4 right-4 w-28 opacity-20 pointer-events-none select-none z-50'
    />
  );
};
