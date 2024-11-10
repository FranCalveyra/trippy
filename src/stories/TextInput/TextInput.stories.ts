import type { Meta, StoryObj } from '@storybook/react';
import {TextInput} from "./TextInput.tsx";

const meta = {
  title: 'Organisms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Some text",
    placeholder: "Write something",
    value: ""
  },
};
