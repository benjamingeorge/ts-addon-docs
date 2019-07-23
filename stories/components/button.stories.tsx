import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../src/components/button/Button';

storiesOf('Components | Button', module)
    .addParameters({ component: Button })
    .add('Primary', () => <Button>Primary Button</Button>)
    .add('Outline', () => <Button fill="outline">Outline Button</Button>)
    .add('Text', () => <Button fill="text">Text Button</Button>);
