import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTAFooter = () => {
  return (
    <section className="bg-gradient-to-r from-banner-from to-banner-to py-12">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl font-heading">
          Want house plans?
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          Get in touch with our experts to find the perfect plan for your dream home.
        </p>
        <Button size="lg" className="mt-6 gap-2">
          <Phone className="h-4 w-4" />
          Contact Us
        </Button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <>
      <CTAFooter />
      <footer className="border-t border-border bg-card py-6">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 BricknBolt.com All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
