import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface lift {
    id: string,
    name: string,
    capacity: number,
    elevationGain: number,
    night: boolean,
    status: string,
    trailAccess: [
        {
            id: string,
            name: string, 
            status: string,
            difficulty: string,
            groomed: boolean,
            night: boolean,
            trees: boolean
        }
    ]
}

async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();
}

export default async function Page() {

    const data = await getData();
    console.log(data[0]);

    return (
        <main>
            <h1>Lift Status Info</h1>
            {/* {JSON.stringify(data)} */}
            <table>
                <thead>
                    <tr>
                        <th>Lift Name</th>
                        <th>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((lift: lift) => {
                        return (
                            <tr key={lift.id}>
                                <td>{lift.name}</td>
                                <td>{lift.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}