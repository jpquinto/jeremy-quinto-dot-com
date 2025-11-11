
import axios from "axios";

const query = `
    query Publication {
        publication(host: "blog.jeremyquinto.com") {
            series(slug: "spotify-project") {
                posts(first: 10) {
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
    }
`;

export const fetchSpotifyProjectBlogs = async () => {
  try {
    const response = await axios.post(
      "https://gql.hashnode.com/",
      { query },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const edges = response.data.data.publication.series.posts.edges;
    const posts = edges.map((edge: any) => edge.node);

    console.log(posts);

    // Sort by sortOrder (which represents the order in the series, oldest first)
    // If sortOrder is not available, fall back to publishedAt
    const sortedPosts = posts.sort((a: any, b: any) => {
      if (
        a.series?.sortOrder !== undefined &&
        b.series?.sortOrder !== undefined
      ) {
        return a.series.sortOrder - b.series.sortOrder;
      }
      return (
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    });

    return sortedPosts;
  } catch (error) {
    console.error("Error fetching Spotify Project blogs:", error);
    return [];
  }
};
