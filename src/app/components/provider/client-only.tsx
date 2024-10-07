'use client';

import { ReactNode, useEffect, useState } from 'react';

interface IClientOnlyProps {
  children: ReactNode;
}

function ClientOnly({ children }: IClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}

export default ClientOnly;
