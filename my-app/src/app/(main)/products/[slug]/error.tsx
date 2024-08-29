'use client'

import { useEffect } from "react"

export default function Error({
    error, 
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error);
        
    }, [error]);

    return (
        <div>
            <h2 
                className="text-2xl font-bold"
            >
                Something went wrong terribly!
            </h2>
            <button
                onClick={
                    () => reset()
                }
                className="m-4 btn btn-outline btn-error"
            >
                Try Again
            </button>
        </div>
    )
}