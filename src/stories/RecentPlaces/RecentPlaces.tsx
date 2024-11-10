import React from "react";
import CardPaper from "../CardPaper/CardPaper.tsx";
import {LocationTag} from "../LocationTag/LocationTag.tsx";

interface RecentPlacesProps {
    children: React.ReactElement<typeof LocationTag>[]
}

const RecentPlaces = ({children}: RecentPlacesProps) => {
    return <CardPaper text={"Recent Places"}>{children}</CardPaper>
}

export default RecentPlaces
