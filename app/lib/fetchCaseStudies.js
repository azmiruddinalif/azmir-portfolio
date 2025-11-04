export async function fetchCaseStudies({
  page = 1,
  pageSize = 4,
  sortField = "date:desc",
  revalidate = 3600,
} = {}) {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=${sortField}`;

    const res = await fetch(url, { next: { revalidate } });

    if (!res.ok) {
      throw new Error(`Failed to fetch case studies: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      data: data?.data || [],
      meta: data?.meta?.pagination || {},
    };
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return { data: [], meta: {} };
  }
}
