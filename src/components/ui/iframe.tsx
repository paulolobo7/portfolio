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
        <div className="relative h-full min-h-0 w-full overflow-hidden bg-background">
            {loading && (
                <Skeleton className="absolute inset-0 z-10" />
            )}

            <iframe
                src={iframeUrl}
                title={title}
                className="h-full w-full border-0 bg-background"
                loading="lazy"
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};
