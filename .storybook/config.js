import { load, addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts';
import { DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
    docs: DocsPage,
});

//add on context for styled-components theme
addDecorator(withContexts(contexts));

load(require.context('../stories', true, /\.stories\.(js|tsx|mdx)$/), module);
