import ExploreCard from "./ExploreCard";

const exploreData = [
  {
    title: "UI Design Inspiration",
    profile: "John Doe",
    likes: "100",
    see: "500",
    image: "https://example.com/ui_design_inspiration",
  },
  {
    title: "Modern UI Trends",
    profile: "Jane Smith",
    likes: "75",
    see: "300",
    image: "https://example.com/modern_ui_trends",
  },
  {
    title: "Minimalist UI Examples",
    profile: "David Johnson",
    likes: "120",
    see: "600",
    image: "https://example.com/minimalist_ui_examples",
  },
  {
    title: "Creative UI Concepts",
    profile: "Sarah Williams",
    likes: "90",
    see: "400",
    image: "https://example.com/creative_ui_concepts",
  },
  {
    title: "Mobile UI Best Practices",
    profile: "Michael Brown",
    likes: "110",
    see: "550",
    image: "https://example.com/mobile_ui_best_practices",
  },
  {
    title: "Web UI Design Tips",
    profile: "Olivia Davis",
    likes: "80",
    see: "350",
    image: "https://example.com/web_ui_design_tips",
  },
  {
    title: "UI Animation Techniques",
    profile: "Robert Wilson",
    likes: "95",
    see: "450",
    image: "https://example.com/ui_animation_techniques",
  },
  {
    title: "Color Palette Ideas",
    profile: "Emily Anderson",
    likes: "105",
    see: "525",
    image: "https://example.com/color_palette_ideas",
  },
  {
    title: "Typography in UI",
    profile: "Daniel Martinez",
    likes: "85",
    see: "375",
    image: "https://example.com/typography_in_ui",
  },
  {
    title: "UI Design for E-commerce",
    profile: "Sophia Thompson",
    likes: "115",
    see: "575",
    image: "https://example.com/ui_design_for_ecommerce",
  },
  {
    title: "UI Design for Social Media",
    profile: "Matthew Garcia",
    likes: "70",
    see: "250",
    image: "https://example.com/ui_design_for_social_media",
  },
  {
    title: "UI Design for Travel Apps",
    profile: "Ava Robinson",
    likes: "130",
    see: "650",
    image: "https://example.com/ui_design_for_travel_apps",
  },
  {
    title: "UI Design for Health Apps",
    profile: "James Clark",
    likes: "95",
    see: "425",
    image: "https://example.com/ui_design_for_health_apps",
  },
  {
    title: "UI Design for Education Apps",
    profile: "Lily Hall",
    likes: "100",
    see: "500",
    image: "https://example.com/ui_design_for_education_apps",
  },
  {
    title: "UI Design for Music Apps",
    profile: "Benjamin Young",
    likes: "85",
    see: "375",
    image: "https://example.com/ui_design_for_music_apps",
  },
  {
    title: "UI Design for News Apps",
    profile: "Chloe Lewis",
    likes: "120",
    see: "600",
    image: "https://example.com/ui_design_for_news_apps",
  },
  {
    title: "UI Design for Food Apps",
    profile: "Henry Turner",
    likes: "110",
    see: "550",
    image: "https://example.com/ui_design_for_food_apps",
  },
  {
    title: "UI Design for Fashion Apps",
    profile: "Zoe Hill",
    likes: "90",
    see: "400",
    image: "https://example.com/ui_design_for_fashion_apps",
  },
  {
    title: "UI Design for Productivity Apps",
    profile: "Christopher Green",
    likes: "105",
    see: "525",
    image: "https://example.com/ui_design_for_productivity_apps",
  },
];

export default function Explore() {
  return (
    <div className="mb-[150px]">
      <div className="mb-10 text-center text-[35px] md:text-[48px]">
        <h1>Explore inspiring designs</h1>
      </div>
      <div
        id="explore__container"
        className="grid grid-cols-1 gap-[36px] px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:px-[72px]"
      >
        {exploreData.map((item) => {
          return (
            <ExploreCard
              imageSource={item.image}
              likes={item.likes}
              profile={item.profile}
              see={item.see}
              title={item.title}
              key={item.title}
            />
          );
        })}
      </div>
      <div className="mx-auto mt-10 h-fit w-fit rounded-full border border-slate-800 px-5 py-4 text-sm">
        <button>Browse more inspiration</button>
      </div>
    </div>
  );
}
