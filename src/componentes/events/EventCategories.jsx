import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventCategories = ({ data, pageName }) => {
  return (
    <div className="event_categories">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref className="card">
            <Image alt={ev.title} src={ev.image} width={300} height={300} /> <h2>{ev.title}</h2> <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;
