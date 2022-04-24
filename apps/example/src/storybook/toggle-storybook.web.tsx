/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */

import React, { useState, useEffect, PropsWithChildren } from 'react';
import * as QueryString from 'query-string';

interface StorybookQueryParams {
  storybook?: boolean;
}

export const ToggleStorybook = (props: PropsWithChildren<unknown>) => {
  const [StorybookUIRoot, setStorybookUIRoot] = useState<any>(null);
  const [queryParams, setQueryParams] = useState<StorybookQueryParams>({});

  useEffect(() => {
    if (__DEV__) {
      // Load the storybook UI once
      setStorybookUIRoot(() => require('./storybook.tsx').default);
    }
  }, []);

  useEffect(() => {
    if (__DEV__) {
      setQueryParams(QueryString.parse(window.location.search));
    }
  }, [window.location.search]);

  if (queryParams?.storybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : null;
  } else {
    return props.children;
  }
};
