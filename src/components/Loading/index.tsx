import React from 'react';

import { ContainerLoading, Loader } from './styles';

export function Loading() {
  return (
    <>
      <ContainerLoading>
        <Loader>
          <div></div>

          <div></div>
        </Loader>
      </ContainerLoading>
    </>
  );
}
