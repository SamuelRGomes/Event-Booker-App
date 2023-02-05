import EventDetails from "@/src/componentes/events/EventDetails";
const EventPage = ({ data }) => {
  return <EventDetails data={data} />;
};
export default EventPage;
export async function getStaticPaths() {
  const { allEvents } = await import("data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        categories: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.filter((eventData) => eventData.id === id);

  return {
    props: { data: eventData[0] },
  };
}
