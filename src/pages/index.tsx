import Tailwind from '@/components/Tailwind';

const Home = () => {
  return (
    <main className='bg-red-500'>
      <Tailwind />
      <div></div>
    </main>
  );
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default Home;
