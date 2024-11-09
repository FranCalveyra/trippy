import type { Meta, StoryObj } from '@storybook/react';
import {QuickMessage} from "./QuickMessage.tsx";


const meta = {
  title: 'Atoms/QuickMessage',
  component: QuickMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuickMessage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    value: "Button"
  },
};
