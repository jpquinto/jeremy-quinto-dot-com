'use client';

import { usePathname } from "next/navigation";

interface SEOProps {
    title: string;
    description: string;
}

export const SEO = ({
    title,
    description,
}: SEOProps) => {

    return (
        <head>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" key="x-ua-compatible"/>
            <meta
                name="DC.subject"
                lang="en"
                content={description}
            />
            <meta name="DC.rights" content="Jeremy Quinto" />
            <meta name="DC.creator" content="Jeremy Quinto" />
            <meta name="DC.title" lang="en" content={title} />
            <link rel="canonical" href='https://jeremyquinto.com' />
        </head>
    )
}