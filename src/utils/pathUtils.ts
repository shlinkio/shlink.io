import { useRouter } from 'next/router';

export const useCurrentPath = () => {
  const { asPath } = useRouter();

  return asPath.replace(/\/$/, '');
};
