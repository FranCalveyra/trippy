import type { Meta, StoryObj } from '@storybook/react';
import { ContactCard } from './ContactCard';
import Pepe from '../assets/pp.jpg';

const meta = {
    title: 'Components/ContactCard',
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
        name: 'Dad',
        message: 'Have you left school?',
        imageUrl: Pepe,
    },
};
