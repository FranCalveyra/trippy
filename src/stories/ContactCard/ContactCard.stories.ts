import type { Meta, StoryObj } from '@storybook/react';
import { ContactCard } from './ContactCard';
import Pepe from '../../assets/profile.jfif';

const meta = {
    title: 'Organisms/ContactCard',
    component: ContactCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        name: 'Son',
        message: 'When are you arriving?',
        imageUrl: Pepe,
    },
};
