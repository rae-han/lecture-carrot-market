import '../styles/globals.css';
import { useForm } from 'react-hook-form';
import { SWRConfig } from 'swr';

import type { AppProps } from 'next/app';

interface FormData {}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { register } = useForm({
    mode: 'onChange',
  });

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
};

export default MyApp;
