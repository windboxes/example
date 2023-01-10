import styled from './windboxes';



const logoLayoutClasses = styled('mb-10 flex align-center justify-center');

const logoClasses = 'w-[7rem] h-[7rem] m-5';
const viteLogoClasses = styled(logoClasses + ' hover:drop-shadow-[0_0_2em_#646cffaa]');
const reactLogoClasses = styled(logoClasses + ' hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[logo-spin_infinite_20s_linear]');

const titleClasses = styled('font-bold');
const cardClasses = styled('p-10');
const buttonClasses = styled('m-5 p-2 rounded-md border-2 border-transparent hover:bg-gray-50 hover:border-gray-200 active:bg-gray-100 duration-100');

const readTheDocsClasses = styled('text-[#888] mt-2');



export {
  logoLayoutClasses,
  viteLogoClasses,
  reactLogoClasses,
  titleClasses,
  cardClasses,
  buttonClasses,
  readTheDocsClasses,
}
