/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {component as ProgressSteps} from './progress-steps.scenario.js';
import {ThemeProvider, LightTheme} from '../../index.js';

export const name = 'progress-steps-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div dir="rtl">
      <ProgressSteps />
    </div>
  </ThemeProvider>
);
