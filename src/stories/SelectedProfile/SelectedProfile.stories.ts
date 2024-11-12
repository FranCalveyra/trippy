import type { Meta, StoryObj } from '@storybook/react';
import SelectedProfile from './SelectedProfile';

const meta: Meta<typeof SelectedProfile> = {
    title: 'Atoms/SelectedProfile',
    component: SelectedProfile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectedProfile>;

export const Default: Story = {};
