import { useState } from "react";
import { ChevronRight, RotateCcw } from "lucide-react";

const filterCategories = [
  "Plot Dimensions (sq ft)",
  "House Budget",
  "Road Facing Direction",
  "Number of Floors",
  "Type of Construction",
  "Number of Bedrooms",
  "Vastu Compliant",
  "Special Requirement",
];

const FilterSidebar = () => {
  const [activeFilters, setActiveFilters] = useState(0);

  return (
    <aside className="w-full shrink-0 md:w-64">
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-foreground">
            Filters ({activeFilters})
          </span>
          <button
            onClick={() => setActiveFilters(0)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        </div>

        <div className="space-y-1">
          {filterCategories.map((category) => (
            <button
              key={category}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
            >
              {category}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
