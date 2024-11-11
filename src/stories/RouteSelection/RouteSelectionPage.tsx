import React from 'react';
import RouteCard from "../RouteCard/RouteCard.tsx";
import RouteOptions from "../RouteOptions/RouteOptions.tsx";
import {LocationTag} from "../LocationTag/LocationTag.tsx";
import mapImage from '../../assets/map.png';
import profile from '../../assets/profile.jfif';
import Icon from "../Icon/Icon.tsx";
import ProfilePicture from "../ProfilePicture/ProfilePicture.tsx";
import tailwindConfig from "../../../tailwind.config.js"

export const RouteSelectionPage: React.FC = () => {
    return (
        <div className={"flex flex-col min-h-screen w-screen bg-cover bg-no-repeat pt-4 overflow-hidden"} style={{ backgroundImage: `url(${mapImage})` }}>
            <div className={"flex flex-row w-100 justify-between mx-4"}>
                <Icon variant={'arrowBack'} color={tailwindConfig.theme.colors.primary["700"]}/>
                <ProfilePicture imageUrl={profile} />
            </div>
            <div className={"mx-2 mt-8 mb-auto"}>
                <LocationTag locationName={"Times Square"}
                             locationAddress={"1560 Broadway, New York, NY 10036, United States"} variant={'floating'}/>
            </div>
            {/*<div*/}
            {/*    className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 bg-neutral-white shadow-lg rounded-t-2xl">*/}
            <div className={"-mb-32"}>
                <RouteOptions>
                    <RouteCard
                        roadItemPropsArray={[
                            {variant: 'bus', text: '200'},
                        ]}
                        time={"40 min"}
                        money={"$400"}
                    />
                    <RouteCard
                        roadItemPropsArray={[
                            {variant: 'bus', text: '200'},
                            {variant: 'bus', text: '300'},
                            {variant: 'walk'},
                        ]}
                        time={"45 min"}
                        money={"$350"}
                    />
                    <RouteCard
                        roadItemPropsArray={[
                            {variant: 'walk'},
                            {variant: 'bus', text: '400'},
                            {variant: 'bus', text: '500'},
                            {variant: 'bus', text: '600'},
                            {variant: 'walk'},
                        ]}
                        time={"50 min"}
                        money={"$600"}
                    />
                </RouteOptions>
            </div>
            {/*</div>*/}
        </div>
    );
};