import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import {
  RecoilRoot,
  useRecoilSnapshot,
} from 'recoil';

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log('Changed Atoms:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);
  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
