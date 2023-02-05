import EventCategories from "@/src/componentes/events/EventCategories";
const EventCategoriesPage = ({ data, pageName }) => {
  return <EventCategories data={data} pageName={pageName} />;
};
export default EventCategoriesPage;

export async function getStaticPaths() {
  const { events_categories } = await import("data/data.json");
  const allPaths = events_categories.map((eventCategory) => {
    return {
      params: {
        categories: eventCategory.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.categories;
  const { allEvents } = await import("data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return { props: { data, pageName: id } };
}
