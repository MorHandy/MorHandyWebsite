export const phoneDisplay = "(443) 203-3578";
export const phoneHref = "tel:+14432033578";
export const email = "Service@Morhandy.com";
export const calendlyUrl =
  "https://calendly.com/morhandy-service-call/estimate";
export const calendlyEmbedUrl =
  "https://calendly.com/morhandy-service-call/estimate?hide_event_type_details=1&hide_gdpr_banner=1";

export const trustPoints = [
  "Licensed & insured",
  "Fast scheduling",
  "Transparent pricing",
  "Locally owned",
  "Quality workmanship",
];

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  headline: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  bullets: string[];
  problems: string[];
  outcomes: string[];
  metaTitle: string;
  metaDescription: string;
  gallery?: { src: string; alt: string; title: string }[];
};

export const services: Service[] = [
  {
    slug: "general-repair-services",
    title: "General Repair Services",
    navTitle: "General Repairs",
    headline: "Reliable Repairs Without The Hassle",
    kicker: "Professional handyman services in Maryland",
    description:
      "Mor Handy helps Maryland homeowners clear the repair list with careful troubleshooting, clean workmanship, and communication that keeps the project moving.",
    image: "/images/services/general-handyman-services.png",
    imageAlt:
      "Mor Handy general repair service installing door hardware in a Maryland home",
    icon: "toolbox",
    bullets: [
      "Door and window repairs",
      "Furniture assembly",
      "Shelving and fixture installation",
      "Trim repairs and punch-list work",
      "Small repairs completed in one visit",
    ],
    problems: [
      "Loose handrails, doors, and hardware",
      "Minor damage that keeps getting postponed",
      "Multiple small jobs that need one reliable visit",
    ],
    outcomes: [
      "Safer, better-functioning rooms",
      "Finished to-do lists",
      "A home that feels cared for again",
    ],
    metaTitle: "General Repair Services Maryland | Mor Handy",
    metaDescription:
      "Book Mor Handy for general repair services in Maryland. Door repairs, fixtures, shelving, trim, punch lists, and more.",
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    navTitle: "Electrical",
    headline: "Safe Electrical Improvements For Your Home",
    kicker: "Lighting, fans, outlets, and small electrical upgrades",
    description:
      "From replacing outdated fixtures to installing ceiling fans, Mor Handy handles practical electrical improvements that make your home safer and easier to use.",
    image: "/images/services/electrical-residential-repair.webp",
    imageAlt:
      "Electrician working on residential wiring for Mor Handy electrical services",
    icon: "bolt",
    bullets: [
      "Ceiling fan installation",
      "Light fixture replacement",
      "Outlet and switch replacement",
      "Smart home device setup",
      "General electrical improvements",
    ],
    problems: [
      "Outdated fixtures",
      "Poor room lighting",
      "Loose switches and outlets",
    ],
    outcomes: [
      "Cleaner, brighter spaces",
      "Improved daily convenience",
      "Professional installation and testing",
    ],
    metaTitle: "Electrical Services Maryland | Mor Handy",
    metaDescription:
      "Mor Handy provides Maryland electrical services for fans, lighting, outlets, switches, and practical home upgrades.",
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    navTitle: "Plumbing",
    headline: "Fast Plumbing Solutions For Your Home",
    kicker: "Fixture repairs and minor plumbing service",
    description:
      "Small plumbing problems can become expensive when ignored. Mor Handy handles common plumbing repairs and replacements before they turn into bigger home damage.",
    image: "/images/services/plumbing-repair-services.png",
    imageAlt:
      "Mor Handy plumbing service repairing a toilet fixture in a Maryland bathroom",
    icon: "water",
    bullets: [
      "Leaky faucet repair",
      "Toilet repairs",
      "Fixture installation",
      "Sink repairs",
      "Minor drain and water line issues",
    ],
    problems: [
      "Leaks under sinks or around fixtures",
      "Running toilets and weak flushes",
      "Old faucets that need upgrading",
    ],
    outcomes: [
      "Less wasted water",
      "Cleaner fixtures",
      "Problems handled before water damage spreads",
    ],
    metaTitle: "Plumbing Services Maryland | Mor Handy",
    metaDescription:
      "Need plumbing services in Maryland? Mor Handy handles faucet repair, toilet repairs, fixtures, sinks, and minor plumbing work.",
  },
  {
    slug: "appliance-repairs",
    title: "Appliance Repairs",
    navTitle: "Appliance Repairs",
    headline: "Keep Essential Home Systems Running",
    kicker: "Appliance and HVAC support for everyday problems",
    description:
      "Mor Handy helps homeowners troubleshoot practical appliance and comfort issues, including filter changes, basic maintenance, and repair coordination when a specialist is required.",
    image: "/images/services/hvac-appliance-repair.png",
    imageAlt:
      "Mor Handy appliance and HVAC repair service checking outdoor equipment",
    icon: "fan",
    bullets: [
      "Air filter replacement",
      "HVAC maintenance checks",
      "Basic appliance troubleshooting",
      "Vent and airflow checks",
      "Maintenance recommendations",
    ],
    problems: [
      "Weak airflow",
      "High utility bills",
      "Dirty filters and neglected equipment",
    ],
    outcomes: [
      "Cleaner airflow",
      "Better comfort",
      "Clear next steps before small issues grow",
    ],
    metaTitle: "Appliance Repair Maryland | HVAC Help | Mor Handy",
    metaDescription:
      "Mor Handy provides appliance repair support, HVAC filter service, airflow checks, and home comfort maintenance in Maryland.",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    navTitle: "Painting",
    headline: "Refresh Your Home With Professional Painting",
    kicker: "Interior, exterior, touch-ups, and prep work",
    description:
      "A careful paint job makes rooms feel finished. Mor Handy handles preparation, touch-ups, drywall prep, trim painting, and full interior or exterior painting projects.",
    image: "/images/services/interior-painting-prep.webp",
    imageAlt:
      "Painting tools and prep materials ready for a professional home painting project",
    icon: "paint",
    bullets: [
      "Interior painting",
      "Exterior painting",
      "Trim painting",
      "Touch-ups",
      "Surface repair and prep",
    ],
    problems: [
      "Scuffed walls",
      "Old color schemes",
      "Paint damage around high-traffic areas",
    ],
    outcomes: [
      "Cleaner rooms",
      "Better curb appeal",
      "Surfaces protected with proper prep",
    ],
    metaTitle: "Painting Services Maryland | Mor Handy",
    metaDescription:
      "Mor Handy provides painting services in Maryland, including interior painting, exterior painting, trim, touch-ups, and prep.",
  },
  {
    slug: "carpentry-services",
    title: "Carpentry Services",
    navTitle: "Carpentry",
    headline: "Custom Woodwork And Repairs Built To Last",
    kicker: "Trim, shelving, deck, fence, and wood repairs",
    description:
      "Our carpentry services combine craftsmanship and practical repair experience for wood features that need to look good and hold up to daily use.",
    image: "/images/services/carpentry-woodwork-service.webp",
    imageAlt:
      "Carpenter measuring wood for Mor Handy carpentry services in Maryland",
    icon: "ruler",
    bullets: [
      "Custom shelving",
      "Trim work",
      "Fence repairs",
      "Deck repairs",
      "Wood restoration",
    ],
    problems: [
      "Damaged trim",
      "Loose deck boards",
      "Fence sections that need repair",
    ],
    outcomes: [
      "Stronger wood features",
      "Cleaner finished details",
      "Repairs that match the home",
    ],
    metaTitle: "Carpentry Services Maryland | Mor Handy",
    metaDescription:
      "Mor Handy delivers carpentry services in Maryland, including trim, shelving, fence repairs, deck repairs, and wood restoration.",
  },
  {
    slug: "drywall-services",
    title: "Drywall Services",
    navTitle: "Drywall",
    headline: "Smooth Drywall Repairs That Disappear",
    kicker: "Patches, dents, holes, texture, and paint-ready prep",
    description:
      "Drywall damage changes how a room feels. Mor Handy repairs holes, dents, cracks, and damaged sections with clean finishing so the wall is ready for paint.",
    image: "/images/services/drywall-patch-repair.webp",
    imageAlt:
      "Drywall patch compound being applied over mesh for Mor Handy drywall repair",
    icon: "wall",
    bullets: [
      "Hole patching",
      "Crack repairs",
      "Water-damage section repair",
      "Texture matching",
      "Paint-ready sanding",
    ],
    problems: [
      "Wall holes from hardware or accidents",
      "Cracks near corners and seams",
      "Uneven patches from prior repairs",
    ],
    outcomes: [
      "Cleaner walls",
      "Paint-ready surfaces",
      "Rooms that feel finished again",
    ],
    metaTitle: "Drywall Services Maryland | Mor Handy",
    metaDescription:
      "Book drywall services in Maryland for holes, cracks, damaged wall sections, texture matching, and paint-ready repair.",
  },
  {
    slug: "landscaping-services",
    title: "Landscaping Services",
    navTitle: "Landscaping",
    headline: "Outdoor Maintenance That Protects Curb Appeal",
    kicker: "Seasonal cleanup, trimming, and practical yard care",
    description:
      "Mor Handy helps homeowners keep outdoor spaces tidy, safe, and easier to maintain with practical landscaping support and seasonal property care.",
    image: "/images/services/maryland-landscaping-services.png",
    imageAlt:
      "Mor Handy landscaping service trimming a Maryland residential yard",
    icon: "leaf",
    bullets: [
      "Seasonal cleanup",
      "Trimming and edging",
      "Small landscape improvements",
      "Mulch refreshes",
      "Exterior maintenance coordination",
    ],
    problems: [
      "Overgrown beds and edges",
      "Seasonal debris",
      "Curb appeal slipping between major projects",
    ],
    outcomes: [
      "Neater exterior presentation",
      "Safer walkways and edges",
      "Less weekend maintenance stress",
    ],
    metaTitle: "Landscaping Services Maryland | Mor Handy",
    metaDescription:
      "Mor Handy provides landscaping services in Maryland for cleanup, trimming, edging, mulch refreshes, and seasonal exterior care.",
  },
  {
    slug: "seasonal-maintenance",
    title: "Seasonal Maintenance",
    navTitle: "Seasonal Maintenance",
    headline: "Stay Ahead Of Costly Home Problems",
    kicker: "Quarterly maintenance, inspections, and reminders",
    description:
      "The Mor Handy HomeCare approach helps homeowners catch small issues early through seasonal maintenance, property checks, and repair planning.",
    image: "/images/services/seasonal-home-maintenance.png",
    imageAlt:
      "Mor Handy seasonal maintenance service cleaning gutters during winter",
    icon: "calendar",
    bullets: [
      "Quarterly home checkups",
      "Gutter and exterior checks",
      "Filter replacement reminders",
      "Priority scheduling",
      "Annual property report",
    ],
    problems: [
      "Repairs discovered too late",
      "Seasonal tasks piling up",
      "No clear maintenance plan",
    ],
    outcomes: [
      "Fewer surprise repairs",
      "Better home protection",
      "A year-round maintenance partner",
    ],
    metaTitle: "Seasonal Home Maintenance Maryland | Mor Handy",
    metaDescription:
      "Protect your Maryland home with Mor Handy seasonal maintenance, quarterly checkups, reminders, and priority scheduling.",
  },
  {
    slug: "carpet-cleaning-and-restoration",
    title: "Carpet Cleaning & Restoration",
    navTitle: "Carpet Cleaning",
    headline: "Professional Carpet Cleaning & Restoration",
    kicker: "Deep cleaning, stain removal, and carpet restoration",
    description:
      "Restore the look, feel, and freshness of your carpets. Mor Handy provides deep carpet cleaning and restoration services to remove tough stains, odors, and ground-in dirt, bringing life back to your floors.",
    image: "/images/services/carpet-cleaning/IMG_1780.jpg",
    imageAlt: "Professional carpet cleaning and restoration service in Maryland",
    icon: "sparkles",
    bullets: [
      "Deep steam cleaning",
      "Stain and odor removal",
      "High-traffic area restoration",
      "Pet stain treatments",
      "Carpet sanitization",
    ],
    problems: [
      "Stubborn stains and ground-in dirt",
      "Lingering pet odors",
      "Worn, matted high-traffic areas",
    ],
    outcomes: [
      "Fresher, cleaner carpets",
      "Extended carpet lifespan",
      "A healthier home environment",
    ],
    metaTitle: "Carpet Cleaning & Restoration Maryland | Mor Handy",
    metaDescription:
      "Mor Handy provides professional carpet cleaning and restoration services in Maryland. Deep cleaning, stain removal, and odor treatments.",
    gallery: [
      {
        src: "/images/services/carpet-cleaning/IMG_1780.jpg",
        alt: "Carpeted stairs before and after deep cleaning and restoration",
        title: "Carpet Stair Restoration",
      },
      {
        src: "/images/services/carpet-cleaning/IMG_1781.jpg",
        alt: "Professional carpet cleaning process on a stairway",
        title: "Deep Stain Removal",
      },
      {
        src: "/images/services/carpet-cleaning/IMG_4021.jpg",
        alt: "Freshly cleaned carpet in an empty room",
        title: "Full Room Carpet Cleaning",
      },
      {
        src: "/images/services/carpet-cleaning/IMG_6963.jpg",
        alt: "Professional carpet cleaning equipment and solutions being used in a bedroom",
        title: "Professional Carpet Care",
      },
    ],
  },
];

export const primaryServices = services.slice(0, 8);

export type ServiceArea = {
  slug: string;
  name: string;
  label: string;
  region: string;
  intro: string;
  landmarks: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "baltimore-city",
    name: "Baltimore City",
    label: "Urban homes and rowhouses",
    region: "Baltimore, MD",
    intro:
      "Mor Handy helps Baltimore City homeowners handle repairs, updates, and maintenance in rowhomes, condos, townhomes, and single-family properties.",
    landmarks: ["Federal Hill", "Canton", "Fells Point", "Charles Village"],
  },
  {
    slug: "baltimore-county",
    name: "Baltimore County",
    label: "Suburban repair support",
    region: "Baltimore County, MD",
    intro:
      "From older homes to busy family properties, Baltimore County homeowners call Mor Handy for punch lists, fixtures, drywall, plumbing, electrical, and seasonal care.",
    landmarks: ["Towson", "Pikesville", "Parkville", "Owings Mills"],
  },
  {
    slug: "maryland-city",
    name: "Maryland City",
    label: "Fast local scheduling",
    region: "Maryland City, MD",
    intro:
      "Mor Handy supports Maryland City homeowners with home repair visits, small upgrades, and practical maintenance that keeps the property moving.",
    landmarks: ["Laurel", "Brock Bridge", "Russett", "Fort Meade corridor"],
  },
  {
    slug: "southern-maryland",
    name: "Southern Maryland",
    label: "Whole-home maintenance",
    region: "Southern Maryland",
    intro:
      "Southern Maryland homes often need a mix of exterior upkeep, seasonal care, and interior repairs. Mor Handy brings one reliable team for the full list.",
    landmarks: ["Waldorf", "La Plata", "Prince Frederick", "Lexington Park"],
  },
  {
    slug: "virginia",
    name: "Virginia",
    label: "Regional service requests",
    region: "Northern Virginia",
    intro:
      "For select Virginia service requests, Mor Handy helps homeowners and property owners coordinate reliable repair and maintenance support.",
    landmarks: ["Alexandria", "Arlington", "Fairfax", "Woodbridge"],
  },
  {
    slug: "anne-arundel-county",
    name: "Anne Arundel County",
    label: "Coastal and suburban homes",
    region: "Anne Arundel County, MD",
    intro:
      "Mor Handy serves Anne Arundel County with repair, maintenance, and improvement work for homes near the water, town centers, and suburban communities.",
    landmarks: ["Severna Park", "Crofton", "Pasadena", "Odenton"],
  },
  {
    slug: "annapolis",
    name: "Annapolis",
    label: "Historic home care",
    region: "Annapolis, MD",
    intro:
      "Annapolis homes need careful repair work, especially around older details, exterior maintenance, and fixtures. Mor Handy keeps projects organized and clean.",
    landmarks: ["Downtown Annapolis", "Eastport", "West Annapolis", "Parole"],
  },
  {
    slug: "washington",
    name: "Washington",
    label: "Metro-area service",
    region: "Washington, DC",
    intro:
      "Mor Handy supports select Washington-area projects where homeowners need dependable repair help, fixture upgrades, and maintenance coordination.",
    landmarks: ["Capitol Hill", "Takoma", "Brookland", "Chevy Chase"],
  },
  {
    slug: "catonsville",
    name: "Catonsville",
    label: "Established home repairs",
    region: "Catonsville, MD",
    intro:
      "Catonsville homeowners use Mor Handy for general repairs, drywall fixes, fixture installs, painting prep, and ongoing property maintenance.",
    landmarks: ["Frederick Road", "Paradise", "Arbutus", "Patapsco Valley"],
  },
  {
    slug: "sykesville",
    name: "Sykesville",
    label: "Quiet, reliable upkeep",
    region: "Sykesville, MD",
    intro:
      "Mor Handy helps Sykesville homeowners keep up with repair lists, seasonal tasks, exterior maintenance, and interior improvements.",
    landmarks: ["Main Street", "Eldersburg", "Piney Run", "Freedom Park"],
  },
  {
    slug: "glen-burnie",
    name: "Glen Burnie",
    label: "Practical repair visits",
    region: "Glen Burnie, MD",
    intro:
      "Glen Burnie residents call Mor Handy for quick scheduling, punch-list repairs, plumbing fixtures, drywall repairs, electrical updates, and home maintenance.",
    landmarks: ["Ferndale", "Harundale", "South Gate", "Marley Station"],
  },
  {
    slug: "frederick",
    name: "Frederick",
    label: "Interior and exterior care",
    region: "Frederick, MD",
    intro:
      "Mor Handy serves Frederick-area homeowners who need trustworthy home repair, maintenance, painting, carpentry, and seasonal property help.",
    landmarks: ["Downtown Frederick", "Ballenger Creek", "Urbana", "Walkersville"],
  },
];

export const reviews = [
  {
    name: "Tanya R.",
    location: "Baltimore County",
    text: "Mor Handy handled a full repair list in one visit and explained every step before starting. The communication was the difference.",
    service: "General repairs",
  },
  {
    name: "David M.",
    location: "Annapolis",
    text: "They fixed drywall, replaced fixtures, and left the house clean. It felt like hiring a real home maintenance partner.",
    service: "Drywall and fixtures",
  },
  {
    name: "Alicia B.",
    location: "Glen Burnie",
    text: "Fast scheduling, fair pricing, and the technician respected our home. We booked the next seasonal checklist before they left.",
    service: "Seasonal maintenance",
  },
];

export const faqs = [
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Mor Handy provides free estimates for most residential repair, maintenance, and improvement projects. For larger scopes, photos and project details help us give faster guidance.",
  },
  {
    question: "How quickly can Mor Handy schedule service?",
    answer:
      "Scheduling depends on the project size and current route availability, but Mor Handy prioritizes fast communication and clear arrival windows so homeowners are not left waiting.",
  },
  {
    question: "Can you handle multiple repairs in one visit?",
    answer:
      "Yes. Many customers book Mor Handy to complete a full punch list, including fixtures, drywall, plumbing, hardware, painting prep, and small carpentry items in a single visit.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Mor Handy serves Baltimore City, Baltimore County, Anne Arundel County, Annapolis, Glen Burnie, Catonsville, Sykesville, Frederick, Southern Maryland, Maryland City, Washington, and select Virginia requests.",
  },
  {
    question: "Do you offer recurring maintenance plans?",
    answer:
      "Yes. The Mor Handy HomeCare plan is designed for homeowners who want seasonal checkups, maintenance reminders, priority scheduling, and a simpler way to protect the property year-round.",
  },
  {
    question: "Do you provide materials?",
    answer:
      "Mor Handy can supply many common materials or install materials you already purchased. Your estimate will clarify what is included so there are no surprises.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Mor Handy operates as a professional home repair and maintenance company. Contact the team directly for current insurance, licensing, and project-specific requirements.",
  },
  {
    question: "How do I book service?",
    answer:
      "You can call (443) 203-3578, email Service@Morhandy.com, or use the online booking calendar to schedule an estimate.",
  },
];

export const articleFaqs = [
  {
    question: "How often should I change my air filter in Maryland?",
    answer:
      "Most Maryland homes should change a standard HVAC air filter every 60 to 90 days. Homes with pets, allergies, heavy dust, renovation work, or high system use may need a new filter every 30 to 45 days.",
  },
  {
    question: "Can a dirty air filter increase my electric bill?",
    answer:
      "Yes. A clogged filter restricts airflow, forcing your HVAC system to run longer to heat or cool the home. That extra run time can raise energy use and make comfort problems worse.",
  },
  {
    question: "What are the signs my air filter is dirty?",
    answer:
      "Common signs include weak airflow, more dust on surfaces, allergy flare-ups, musty smells near vents, longer heating or cooling cycles, and higher utility bills without a clear reason.",
  },
  {
    question: "What MERV rating should I use at home?",
    answer:
      "Many homes do well with MERV 8 to MERV 11 filters, but the right choice depends on your HVAC system. Very restrictive filters can reduce airflow if the system is not designed for them.",
  },
  {
    question: "Can Mor Handy replace my filter during a maintenance visit?",
    answer:
      "Yes. Mor Handy can replace filters, check airflow, review basic maintenance needs, and help set reminders so filter changes do not get missed.",
  },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: "air-filter-change",
    title: "How Often To Change Air Filter In Maryland",
    description: "A practical guide for Maryland homeowners on when to change HVAC air filters, warning signs, maintenance cadence, and when to schedule service.",
    image: "/images/articles/air-filter-needs-change.jpg",
    imageAlt: "Five signs your air filter needs a change",
  },
  {
    slug: "general-repairs-dmv",
    title: "General Handyman Repairs in the DMV",
    description: "The ultimate guide to home maintenance, tackling your punch list, and finding reliable general handyman services in the DMV area.",
    image: "/images/services/general-handyman-services.png",
    imageAlt: "Mor Handy general repair service",
  },
  {
    slug: "electrical-improvements-maryland",
    title: "Safe Electrical Upgrades for Maryland Homes",
    description: "Learn about the top electrical improvements for residential properties in Maryland, including lighting, fans, and safety upgrades.",
    image: "/images/services/electrical-residential-repair.webp",
    imageAlt: "Electrician working on residential wiring",
  },
  {
    slug: "plumbing-repair-guide-dmv",
    title: "Quick Plumbing Repairs to Prevent Water Damage in the DMV",
    description: "Don't let small leaks turn into major floods. Discover essential plumbing repairs and maintenance tips for DMV area homes.",
    image: "/images/services/plumbing-repair-services.png",
    imageAlt: "Mor Handy plumbing service",
  },
  {
    slug: "appliance-hvac-maintenance-dmv",
    title: "Essential HVAC and Appliance Maintenance in Maryland",
    description: "Keep your home systems running smoothly with this comprehensive guide to appliance troubleshooting and HVAC maintenance.",
    image: "/images/services/hvac-appliance-repair.png",
    imageAlt: "Mor Handy appliance and HVAC repair",
  },
  {
    slug: "professional-painting-dmv",
    title: "Interior and Exterior Painting Guide for the DMV Area",
    description: "Refresh your property's look and protect its surfaces with our ultimate guide to professional residential painting in the DMV.",
    image: "/images/services/interior-painting-prep.webp",
    imageAlt: "Painting tools and prep materials",
  },
  {
    slug: "carpentry-woodwork-maryland",
    title: "Custom Carpentry and Wood Repairs Built to Last in Maryland",
    description: "From custom shelving to deck and fence repairs, learn how quality carpentry adds lasting value to your Maryland home.",
    image: "/images/services/carpentry-woodwork-service.webp",
    imageAlt: "Carpenter measuring wood",
  },
  {
    slug: "drywall-repair-dmv",
    title: "Seamless Drywall Patching and Repairs in the DMV",
    description: "Everything you need to know about patching holes, fixing cracks, and achieving a paint-ready finish with professional drywall services.",
    image: "/images/services/drywall-patch-repair.webp",
    imageAlt: "Drywall patch compound being applied",
  },
  {
    slug: "landscaping-cleanup-maryland",
    title: "Seasonal Landscaping and Exterior Cleanup in Maryland",
    description: "Boost your curb appeal and protect your property with this guide to seasonal yard cleanup and landscaping maintenance.",
    image: "/images/services/maryland-landscaping-services.png",
    imageAlt: "Mor Handy landscaping service",
  },
  {
    slug: "seasonal-home-maintenance-dmv",
    title: "The Ultimate Seasonal Home Maintenance Checklist for the DMV",
    description: "Stay ahead of costly home problems with our comprehensive seasonal maintenance checklist designed specifically for the DMV climate.",
    image: "/images/services/seasonal-home-maintenance.png",
    imageAlt: "Mor Handy seasonal maintenance service",
  }
];
