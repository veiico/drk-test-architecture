"use client";

import { useState } from "react";

export function HeaderSearchClient() {
    const [turnedOn, setTurnedOn] = useState(false);

    return (
        <div className="flex items-center gap-4 bg-red-400 p-2">
            <input type="checkbox" checked={turnedOn} onChange={() => setTurnedOn(!turnedOn)} />
            <p>Turned on: {turnedOn ? "Yes" : "No"}</p>
        </div>
    );
}
