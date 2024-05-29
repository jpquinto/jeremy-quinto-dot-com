export interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    coverImage: {
        url: string;
    };
    brief: string;
    readTimeInMinutes: number;
    url: string;
    slug: string;
    tags: {
        name: string;
        slug: string;
    }[];
    ogMetaData: {
        image: string;
    };
    seo: {
        title: string;
        description: string;
    };
    canonicalUrl: string;
    series: {
        name: string;
        slug: string;
        sortOrder: number;
    };
    content: {
        markdown: string;
        html: string;
    };
    publishedAt: string;
    updatedAt: string;
}

export interface Project {
    title: string;
    tagline: string;
    description: string;
    githubUrl?: string;
    websiteUrl?: string;
    images: {
        url: string;
    }[];
}