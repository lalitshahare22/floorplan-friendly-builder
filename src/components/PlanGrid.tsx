import PlanCard from "./PlanCard";
import plan2030 from "@/assets/plan-20x30.jpg";
import plan3040 from "@/assets/plan-30x40.jpg";
import planCommercial from "@/assets/plan-commercial.jpg";
import planVastu from "@/assets/plan-vastu.jpg";

const plans = [
  { title: "20ft × 30ft plans", image: plan2030 },
  { title: "30ft × 40ft plans", image: plan3040 },
  { title: "Commercial house plans", image: planCommercial },
  { title: "Vaastu compliant plans", image: planVastu },
];

const PlanGrid = () => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
      {plans.map((plan) => (
        <PlanCard key={plan.title} {...plan} />
      ))}
    </div>
  );
};

export default PlanGrid;
