import React, { useEffect } from 'react';
import { getStorybookUI } from '@storybook/react-native';
import { initFonts } from '../app/theme/fonts';
import '../../.ondevice/storybook.requires';

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: true,
});

function StorybookUIRoot() {
  useEffect(() => {
    (async () => {
      await initFonts(); // expo only
      // if (typeof __TEST__ === "undefined" || !__TEST__) {
      //   const Reactotron = require("../app/services/reactotron")
      //   const reactotron = new Reactotron.Reactotron()
      //   reactotron.setup()
      // }
    })();
  }, []);

  return <StorybookUI />;
}

export default StorybookUIRoot;
