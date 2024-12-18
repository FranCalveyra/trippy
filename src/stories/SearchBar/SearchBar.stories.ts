import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import Pepe from '../../assets/profile.jfif';


const meta: Meta<typeof SearchBar> = {
    title: 'Organisms/SearchBar',
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
