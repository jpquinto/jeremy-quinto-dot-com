import axios from "axios";

const query = `
    query Publication {
        publication(host: "blog.jeremyquinto.com") {
            posts(first: 3) {
                edges {
                    node {
                        title
                        subtitle
                        coverImage {
                            url
                        }
                        brief
                        readTimeInMinutes
                        url
                        slug
                        tags {
                            name
                            slug
                        }
                        ogMetaData {
                            image
                        }
                        seo {
                            title
                            description
                        }
                        canonicalUrl
                        series {
                            name
                            slug
                            sortOrder
                        }
                        content {
                            markdown
                            html
                        }
                        id
                        publishedAt
                        updatedAt
                    }
                }
            }
        }
    }
`; 

export const fetchBlogs = async () => {
    try {
        const response = await axios.post("https://gql.hashnode.com/", { query }, {
            headers: {
                "Content-type": "application/json",
            }
        });
        const edges = response.data.data.publication.posts.edges;
        const posts = edges.map((edge: any) => edge.node);
        return posts;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};


