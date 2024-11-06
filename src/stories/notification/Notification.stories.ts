import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification.tsx';

const meta = {
    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        variant: 'default',
        iconVariant: 'warning',
        title: "Stroke in Av. Cordoba",
        description: "There is a stroke in Av. Cordoba",
    },
};

export const extended: Story = {
    args: {
        variant: 'extended',
        iconVariant: 'warning',
        title: "Stroke in Av. Cordoba",
        description: "There is a stroke in Av. Cordoba because of an incident with a car. " +
            "The situation unfolded around 10 AM when a vehicle, speeding in heavy traffic, " +
            "lost control and collided with a motorcycle. The force of the impact caused the " +
            "motorcycle to crash into a nearby streetlight, while the car veered off the road " +
            "and struck a parked van. The driver of the car, a middle-aged man, was rushed to " +
            "the hospital with multiple injuries, including a concussion and broken ribs.",
    },
};
