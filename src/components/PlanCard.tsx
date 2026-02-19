import { ArrowRight } from "lucide-react";

interface PlanCardProps {
  title: string;
  image: string;
}

const PlanCard = ({ title, image }: PlanCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-primary py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          View Plans
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
