import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "In the Covid-19 circumstance, my wife and I had a fantastic house-building experience. Brick & Bolt helped with the technical aspects and overall quality of the structure.",
    name: "Punith & Swathi",
    detail: "2400 sqft • G+1",
  },
  {
    text: "Me and my wife are extremely satisfied with the services and have been referring Brick & Bolt to all our family, friends, and co-workers.",
    name: "Ramachandrappa CM",
    detail: "1500 sqft • G+1",
  },
  {
    text: "As a first-timer, I was constantly concerned about pricing and construction issues. I was quite impressed with Brick & Bolt's pricing and efficiency.",
    name: "Akhil Kumar",
    detail: "1800 sqft • G",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Hear from our customers
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <Quote className="mb-3 h-6 w-6 text-primary/40" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-3 border-t border-border pt-3">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
