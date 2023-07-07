import '../styles/globals.css';
import { useForm } from 'react-hook-form';

import type { AppProps } from 'next/app';

interface FormData {}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { register } = useForm({
    mode: 'onChange',
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
