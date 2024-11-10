import CardPaper from "../CardPaper/CardPaper.tsx";
import RouteCard from "../RouteCard/RouteCard.tsx";
import React from "react";

interface RouteOptionsProps {
    children: React.ReactElement<typeof RouteCard>[]
}

const RouteOptions = ({children}: RouteOptionsProps) => {
    return <CardPaper text={"Routes"}>{children}</CardPaper>
}

export default RouteOptions
