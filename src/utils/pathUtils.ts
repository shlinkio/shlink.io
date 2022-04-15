import { useRouter } from 'next/router';

export const useCurrentPath = () => {
  const { asPath } = useRouter();
  const [path = ''] = asPath.split('#');

  return path.replace(/\/$/, '');
};
