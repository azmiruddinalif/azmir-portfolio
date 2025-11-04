export async function fetchBlogs({ page = 1, pageSize = 2 } = {}) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date_of_post:desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      data: data?.data || [],
      meta: data?.meta?.pagination || {},
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: [], meta: {} };
  }
}
