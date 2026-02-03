// Site-wide constants
export const SITE_CONFIG = {
  name: "SpinPickOnline",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "spinpickonline.com",
  url: process.env.NEXT_PUBLIC_URL || "https://spinpickonline.com",
  description: "Free random picker wheel tool for fair and instant random selection",
  brand: "SpinPickOnline",
} as const;

// Primary keywords
export const PRIMARY_KEYWORDS = {
  main: "random picker wheel",
  wheelOfNames: "wheel of names",
  randomNamePicker: "random name picker",
  spinTheWheel: "spin the wheel",
  decisionWheel: "decision wheel",
  randomChoicePicker: "random choice picker",
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Name Picker", href: "/name-picker" },
  { label: "Yes/No Wheel", href: "/yes-no-wheel" },
  { label: "Features", href: "/features", hasDropdown: true },
  { label: "About", href: "/about" },
] as const;

// Use cases data for programmatic pages
export const USE_CASES = [
  {
    slug: "team-picker",
    title: "Team Picker Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for team selection. Fair selection, instant results, mobile-friendly. Perfect for sports teams and work groups. No signup required.",
    h1: "Random Picker Wheel for Teams",
    primaryKeyword: "team picker wheel",
    useCase: "Team Selection",
    context: "Fair team distribution for sports, work projects, and group activities",
    benefits: [
      "Eliminates bias in team selection",
      "Ensures fair distribution of skills",
      "Saves time on manual selection",
      "Transparent and verifiable results",
    ],
    steps: [
      "Enter all team member names",
      "Set number of teams needed",
      "Spin the wheel to randomly assign",
      "Share results with team members",
    ],
    relatedUseCases: ["classroom-activities", "task-assignment"],
    relatedFeatures: ["customization", "shareable-wheels"],
  },
  {
    slug: "lunch-decisions",
    title: "Lunch Decisions Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for lunch decisions. Fair selection, instant results, mobile-friendly. Perfect for daily meal choices. No signup required.",
    h1: "Random Picker Wheel for Lunch Decisions",
    primaryKeyword: "lunch decision wheel",
    useCase: "Lunch Decisions",
    context: "Quick and fair decision-making for daily lunch choices",
    benefits: [
      "Ends decision fatigue",
      "Fair selection for groups",
      "Quick results in seconds",
      "Works on mobile devices",
    ],
    steps: [
      "Add restaurant or meal options",
      "Customize wheel colors",
      "Spin to get random selection",
      "Share with friends or colleagues",
    ],
    relatedUseCases: ["task-assignment"],
    relatedFeatures: ["mobile-friendly", "customization"],
  },
  {
    slug: "classroom-activities",
    title: "Classroom Activities Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for classroom activities. Fair selection, instant results, mobile-friendly. Perfect for student selection and activities. No signup required.",
    h1: "Random Picker Wheel for Classroom Activities",
    primaryKeyword: "classroom random picker",
    useCase: "Classroom Activities",
    context: "Fair student selection for presentations, activities, and participation",
    benefits: [
      "Fair student selection",
      "Engages all students equally",
      "Reduces teacher bias",
      "Quick and easy to use",
    ],
    steps: [
      "Enter student names",
      "Choose selection type",
      "Spin wheel for random pick",
      "Display results on screen",
    ],
    relatedUseCases: ["team-picker", "presentation-picker"],
    relatedFeatures: ["customization", "shareable-wheels"],
  },
  {
    slug: "giveaway-winner",
    title: "Giveaway Winner Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for giveaway winner selection. Fair selection, instant results, mobile-friendly. Perfect for contests and prizes. No signup required.",
    h1: "Random Picker Wheel for Giveaway Winners",
    primaryKeyword: "giveaway winner picker",
    useCase: "Giveaway Winner Selection",
    context: "Fair and transparent winner selection for contests and giveaways",
    benefits: [
      "Transparent winner selection",
      "Verifiable random results",
      "Builds trust with participants",
      "Quick and professional",
    ],
    steps: [
      "Add all participant names",
      "Customize wheel appearance",
      "Spin to select winner",
      "Share results publicly",
    ],
    relatedUseCases: ["team-picker"],
    relatedFeatures: ["shareable-wheels", "fair-randomization"],
  },
  {
    slug: "task-assignment",
    title: "Task Assignment Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for task assignment. Fair selection, instant results, mobile-friendly. Perfect for work and home chores. No signup required.",
    h1: "Random Picker Wheel for Task Assignment",
    primaryKeyword: "task assignment wheel",
    useCase: "Task Assignment",
    context: "Fair distribution of tasks and responsibilities",
    benefits: [
      "Fair task distribution",
      "Eliminates arguments",
      "Quick assignment process",
      "Works for any task list",
    ],
    steps: [
      "List all tasks to assign",
      "Add assignee names",
      "Spin to randomly assign",
      "Save and share results",
    ],
    relatedUseCases: ["lunch-decisions", "chore-assignment"],
    relatedFeatures: ["customization", "shareable-wheels"],
  },
  {
    slug: "presentation-picker",
    title: "Presentation Picker Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for presentation selection. Fair selection, instant results, mobile-friendly. Perfect for classrooms and meetings. No signup required.",
    h1: "Random Picker Wheel for Presentations",
    primaryKeyword: "presentation picker wheel",
    useCase: "Presentation Selection",
    context: "Fair selection of presenters in classrooms and meetings",
    benefits: [
      "Fair presenter selection",
      "Engages all participants",
      "Reduces selection bias",
      "Professional appearance",
    ],
    steps: [
      "Enter participant names",
      "Set presentation order",
      "Spin to select presenter",
      "Display on screen",
    ],
    relatedUseCases: ["classroom-activities", "team-picker"],
    relatedFeatures: ["customization", "shareable-wheels"],
  },
  {
    slug: "chore-assignment",
    title: "Chore Assignment Random Picker Wheel | Free Tool | SpinPickOnline",
    description: "Use our free random picker wheel for chore assignment. Fair selection, instant results, mobile-friendly. Perfect for household tasks. No signup required.",
    h1: "Random Picker Wheel for Chores",
    primaryKeyword: "chore assignment wheel",
    useCase: "Chore Assignment",
    context: "Fair distribution of household chores and responsibilities",
    benefits: [
      "Fair chore distribution",
      "Ends arguments about tasks",
      "Quick and easy setup",
      "Family-friendly tool",
    ],
    steps: [
      "List all household chores",
      "Add family member names",
      "Spin to assign randomly",
      "Save for reference",
    ],
    relatedUseCases: ["task-assignment"],
    relatedFeatures: ["customization", "mobile-friendly"],
  },
] as const;

// Features data
export const FEATURES = [
  {
    slug: "customization",
    title: "Customizable Random Picker Wheel | SpinPickOnline",
    description: "Customizable random picker wheel with color and label options. Free, fast, and easy to use. Create custom wheels in seconds. No download required.",
    h1: "Customizable Random Picker Wheel",
    primaryKeyword: "customizable picker wheel",
    featureName: "Customization",
    featureDescription: "Full control over wheel appearance and behavior",
    benefits: [
      "Custom colors for each segment",
      "Personalized labels and text",
      "Multiple entry support",
      "Save custom configurations",
    ],
    howItWorks: [
      "Choose colors for each entry",
      "Add custom labels",
      "Set wheel size and style",
      "Save your custom wheel",
    ],
    useCases: ["team-picker", "lunch-decisions"],
    comparisonPoints: [
      "More customization than basic tools",
      "No design skills required",
      "Instant visual feedback",
    ],
  },
  {
    slug: "mobile-friendly",
    title: "Mobile-Friendly Random Picker Wheel | SpinPickOnline",
    description: "Mobile-friendly random picker wheel with responsive design. Free, fast, and easy to use. Perfect for on-the-go selection. No download required.",
    h1: "Mobile-Friendly Random Picker Wheel",
    primaryKeyword: "mobile random picker",
    featureName: "Mobile-Friendly",
    featureDescription: "Optimized for all mobile devices and screen sizes",
    benefits: [
      "Works on all mobile devices",
      "Touch-friendly interface",
      "Fast loading on mobile networks",
      "No app installation needed",
    ],
    howItWorks: [
      "Open on any mobile browser",
      "Touch to spin the wheel",
      "Share results instantly",
      "Works offline after first load",
    ],
    useCases: ["lunch-decisions", "classroom-activities"],
    comparisonPoints: [
      "Better mobile experience than desktop-only tools",
      "No app download required",
      "Works on any device",
    ],
  },
  {
    slug: "shareable-wheels",
    title: "Shareable Random Picker Wheel | SpinPickOnline",
    description: "Shareable random picker wheel with instant link sharing. Free, fast, and easy to use. Share results with anyone. No signup required.",
    h1: "Shareable Random Picker Wheel",
    primaryKeyword: "shareable picker wheel",
    featureName: "Shareable Wheels",
    featureDescription: "Share your wheels and results with others instantly",
    benefits: [
      "Generate shareable links",
      "Share via social media",
      "Embed in websites",
      "Public or private sharing",
    ],
    howItWorks: [
      "Create your wheel",
      "Click share button",
      "Copy link or share directly",
      "Recipients see live results",
    ],
    useCases: ["giveaway-winner", "team-picker"],
    comparisonPoints: [
      "Easier sharing than screenshot methods",
      "Live results for all viewers",
      "No account needed to share",
    ],
  },
  {
    slug: "fair-randomization",
    title: "Fair Randomization Random Picker Wheel | SpinPickOnline",
    description: "Fair randomization random picker wheel with cryptographically secure algorithm. Free, fast, and verifiably fair. No signup required.",
    h1: "Fair Randomization Random Picker Wheel",
    primaryKeyword: "fair random picker",
    featureName: "Fair Randomization",
    featureDescription: "Cryptographically secure random number generation",
    benefits: [
      "Truly random results",
      "Cryptographically secure",
      "Verifiable fairness",
      "No bias or patterns",
    ],
    howItWorks: [
      "Uses secure random number generator",
      "No predictable patterns",
      "Equal probability for all entries",
      "Transparent algorithm",
    ],
    useCases: ["giveaway-winner", "team-picker"],
    comparisonPoints: [
      "More secure than basic random functions",
      "Verifiable fairness",
      "Professional-grade randomization",
    ],
  },
] as const;

// FAQ data
export const FAQS = [
  {
    question: "Is the random picker wheel free?",
    answer: "Yes, our random picker wheel is completely free to use with no signup required. You can create unlimited wheels, add as many entries as you need, and share results without any cost or registration.",
    keywords: ["free", "cost", "pricing"],
  },
  {
    question: "How does the random picker work?",
    answer: "Our random picker wheel uses a cryptographically secure random number generator to ensure fair and unbiased selection. Simply add your entries, customize the wheel if desired, and spin to get instant random results.",
    keywords: ["how it works", "algorithm", "random"],
  },
  {
    question: "Do I need to sign up?",
    answer: "No signup is required. You can use our random picker wheel immediately without creating an account. All features are available to everyone, and you can save wheels locally in your browser if needed.",
    keywords: ["signup", "account", "registration"],
  },
  {
    question: "Is it truly random?",
    answer: "Yes, our random picker wheel uses cryptographically secure random number generation to ensure truly random results. Every entry has an equal probability of being selected, with no bias or predictable patterns.",
    keywords: ["random", "fair", "unbiased"],
  },
  {
    question: "Can I share results?",
    answer: "Yes, you can share your wheel results in multiple ways. Generate a shareable link, copy results to clipboard, or share directly on social media. Shared wheels can be viewed by anyone with the link.",
    keywords: ["share", "social media", "link"],
  },
  {
    question: "Is it mobile-friendly?",
    answer: "Absolutely. Our random picker wheel is fully optimized for mobile devices with a responsive design, touch-friendly interface, and fast loading times. It works perfectly on smartphones and tablets.",
    keywords: ["mobile", "responsive", "touch"],
  },
  {
    question: "How many entries can I add?",
    answer: "You can add as many entries as you need. There's no hard limit, though we recommend keeping it under 100 entries for the best user experience. The wheel automatically adjusts to accommodate your entries.",
    keywords: ["entries", "limit", "capacity"],
  },
  {
    question: "Can I customize the wheel?",
    answer: "Yes, you can customize colors, labels, and wheel appearance. Choose different colors for each segment, add custom text, and personalize the wheel to match your needs or branding.",
    keywords: ["customize", "colors", "personalize"],
  },
  {
    question: "Is my data private?",
    answer: "Yes, your data is private. Wheels are stored locally in your browser by default. If you share a wheel, only the shared data is accessible via the link. We don't collect or store personal information.",
    keywords: ["privacy", "data", "security"],
  },
  {
    question: "How is this different from other random pickers?",
    answer: "Our random picker wheel offers a visual, engaging experience with fair randomization, mobile optimization, easy sharing, and full customization - all completely free with no signup required.",
    keywords: ["comparison", "difference", "advantages"],
  },
] as const;

