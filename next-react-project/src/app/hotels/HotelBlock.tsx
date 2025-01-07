"use client";

import Image from "next/image";

export default function HotelBlock({ id, name, capacity }: { id: string, name: string, capacity: number }) {
    const imageLoader = ({src}: {src: string}) => {
        return `./hotels/${src}.jpeg`
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Capacity: {capacity}</p>
            <Image src={id} width={300} height={300} alt={name} loader={imageLoader} />
        </div>
    )
}