import { FileText, Layers, Wrench, Box, File, PenTool } from "lucide-react";

const offerings = [
  { icon: FileText, title: "Floor Plans", desc: "A top-view layout showing room sizes, placements, and flow within your space." },
  { icon: Layers, title: "Structural Drawings", desc: "Detailed designs for the building's foundation, beams, columns, and structural safety." },
  { icon: Wrench, title: "MEP Drawings", desc: "Plans for Mechanical, Electrical, and Plumbing systems to ensure functionality." },
  { icon: Box, title: "3D Elevations", desc: "A realistic, three-dimensional view of how your building will look from the outside." },
  { icon: File, title: "PDF Files", desc: "A read-only format of your project files, easy to share and view across devices." },
  { icon: PenTool, title: "Editable CAD File", desc: "The original, modifiable version of your project for future updates or changes." },
];

const WeOffer = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          We Offer
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-heading">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
