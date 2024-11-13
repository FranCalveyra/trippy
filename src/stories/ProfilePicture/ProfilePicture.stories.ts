import { Meta, StoryObj } from '@storybook/react';
import ProfilePicture, { ProfilePictureProps } from './ProfilePicture';
import Pepe from '../../assets/profile.jfif';

export default {
    title: 'Atoms/ProfilePicture',
    component: ProfilePicture,
    argTypes: {
        imageUrl: {
            control: 'text',
            description: 'URL of the user’s profile picture',
        },
        size: {
            control: 'number',
            description: 'Size of the profile picture in pixels',
        },
        altText: {
            control: 'text',
            description: 'Alt text for the profile picture',
        },
    },
} as Meta<ProfilePictureProps>;

// Template for creating stories
type Story = StoryObj<ProfilePictureProps>;

export const Example: Story = {
    args: {
        imageUrl: Pepe,
        size: 52,
    },
};
