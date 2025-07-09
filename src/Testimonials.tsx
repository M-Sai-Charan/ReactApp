import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Aarav & Meera",
        text: "One Look Photography captured our wedding like a fairytale. Every emotion, every detail, perfectly preserved!",
        photo: require("../src/assets/gallery/image1.jpg"),
    },
    {
        name: "Neha Sharma",
        text: "The team was incredibly professional and warm. The candid shots they clicked are my favorite memories!",
        photo: require("../src/assets/gallery/image2.jpg"),
    },
    {
        name: "Rahul & Pooja",
        text: "From the pre-wedding shoot to the reception — flawless execution. Highly recommended!",
        photo: require("../src/assets/gallery/image3.jpg"),
    },
    {
        name: "Ishaan Verma",
        text: "Their creativity blew us away. The edits and moments they captured were truly cinematic.",
        photo: require("../src/assets/gallery/image4.jpg"),
    },
    {
        name: "Simran & Aryan",
        text: "Every friend and family member loved the album. It's art more than photography!",
        photo: require("../src/assets/gallery/image5.jpg"),
    },
    {
        name: "Kavya Patel",
        text: "The professionalism and communication made us feel so comfortable throughout. Thank you!",
        photo: require("../src/assets/gallery/image7.jpg"),
    },
];

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.offsetWidth * 0.8;
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const autoScroll = () => {
            interval = setInterval(() => {
                if (containerRef.current) {
                    containerRef.current.scrollBy({ left: 320, behavior: "smooth" });

                    const maxScroll =
                        containerRef.current.scrollWidth - containerRef.current.clientWidth;

                    if (
                        Math.ceil(containerRef.current.scrollLeft) >= maxScroll
                    ) {
                        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                    }
                }
            }, 4000);
        };

        autoScroll();

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-heading">What Our Clients Say</h2>

            <div className="scroll-buttons">
                <button onClick={() => scroll("left")}>&larr;</button>
                <button onClick={() => scroll("right")}>&rarr;</button>
            </div>

            <div className="testimonials-container" ref={containerRef}>
                {testimonials.map((item, i) => (
                    <div className="testimonial-card fade-in" key={i}>
                        <img src={item.photo} alt={item.name} className="client-photo" />
                        <p className="feedback">
                            {item.text}
                        </p>
                        <p className="client-name">— {item.name}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Testimonials;
