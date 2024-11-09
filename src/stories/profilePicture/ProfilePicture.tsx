import React from 'react';

export interface ProfilePictureProps {
    imageUrl: string;
    size?: number; // Optional prop to customize the size of the profile picture
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, size = 52}) => {
    return (
        <img
            src={imageUrl}
            alt={"No ppf"}
            className="rounded-full"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProfilePicture;
