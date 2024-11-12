import type { Meta, StoryObj } from '@storybook/react';
import { NotificationWarning } from './NotificationWarning';

const meta = {
    title: 'Organisms/NotificationWarning',
    component: NotificationWarning,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const warning: Story = {
    args: {
        iconVariant: 'warning',
        title: "Warning",
        description: "This is a warning notification",
    },
};
