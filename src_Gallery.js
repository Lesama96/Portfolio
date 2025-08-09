import React from "react";

const galleryItems = [
  {
    title: "Project One",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Project Two",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Project Three",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    link: "#"
  }
];

export default function Gallery() {
  return (
    <div className="gallery">
      {galleryItems.map((item, idx) => (
        <a className="gallery-item" href={item.link} key={idx} target="_blank" rel="noopener noreferrer">
          <img src={item.img} alt={item.title} />
          <span>{item.title}</span>
        </a>
      ))}
    </div>
  );
}