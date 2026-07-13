import branchImg from '../assets/branch.png';

export const BranchImage = () => {
  return (
    <div className='hidden md:flex md:justify-center md:items-center'>
      <img
        src={branchImg}
        alt='Rama decorativa'
        className='w-32 md:w-auto md:max-h-[70vh] object-contain'
      />
    </div>
  );
};
