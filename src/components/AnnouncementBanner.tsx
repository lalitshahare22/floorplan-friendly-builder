const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-banner-from to-banner-to py-2.5 text-center">
      <p className="text-sm font-medium text-foreground">
        Floor plans starting at <span className="font-bold">₹ 1 per sqft</span>
        <span className="mx-2">•</span>
        Vastu compliant designs available
        <span className="mx-2">•</span>
        Editable files available
      </p>
    </div>
  );
};

export default AnnouncementBanner;
