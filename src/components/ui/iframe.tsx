"use client"

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    title: string
    iframeUrl: string
}


export const Iframe = ({ title, iframeUrl }: Props) => {
    const [loading, setLoading] = useState(true)

    return (
        <div className="relative w-full h-full">
            {loading && (
                <Skeleton className="absolute inset-0 z-10 rounded-lg" />
            )}

            <iframe
                src={iframeUrl}
                title={title}
                className="absolute top-10 left-0 right-0 bottom-0 w-full h-[calc(100%-2.5rem)] rounded-lg"
                loading="lazy"
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};
