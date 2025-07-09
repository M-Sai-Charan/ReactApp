import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  { label: "Photos Captured", value: 10000, suffix: "+" },
  { label: "Events Covered", value: 500, suffix: "+" },
  { label: "Happy Couples", value: 300, suffix: "+" },
  { label: "Cities Reached", value: 20, suffix: "+" }, ,
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
];

const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000;
    let increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <h2 className="stats-heading">Our Journey in Numbers</h2>
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-box" key={idx}>
            {visible && <h3 className="stat-number"><StatCounter value={stat.value} suffix={stat.suffix} /></h3>}
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
