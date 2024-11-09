import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import Pepe from '../assets/pp.jpg';


const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        placeholder: 'Type something...',
        imageUrl: Pepe,
    },
};
