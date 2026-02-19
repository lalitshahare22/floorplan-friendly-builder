import { Tag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Floor plans only",
    price: "₹ 1",
    original: "₹ 2",
    features: ["2D Floor Plan Layout"],
    popular: false,
  },
  {
    name: "Package 1",
    price: "₹ 10",
    original: "₹ 20",
    features: ["Floor Plans", "Structural Drawings", "MEP Drawings"],
    popular: true,
  },
  {
    name: "Package 2",
    price: "₹ 12.5",
    original: "₹ 25",
    features: ["Floor Plans", "Structural Drawings", "MEP Drawings", "3D Elevations"],
    popular: false,
  },
  {
    name: "Package 3",
    price: "₹ 15",
    original: "₹ 30",
    features: ["Floor Plans", "Structural Drawings", "MEP Drawings", "3D Elevations", "Editable CAD File"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Our rates
        </h2>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
          <Tag className="h-4 w-4" />
          50% off
        </span>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Rate is per sqft
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-xl border p-6 transition-shadow hover:shadow-lg ${
              pkg.popular
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                Popular
              </span>
            )}
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {pkg.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
              <span className="text-sm text-muted-foreground line-through">{pkg.original}</span>
              <span className="text-xs text-muted-foreground">/sqft</span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              variant={pkg.popular ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
