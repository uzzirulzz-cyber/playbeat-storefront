// Product catalog from izoko commit 466a52a18a22d93f7a0f8fcedd273368c40357fc (69 products, PKR, 134 price variants).
import { Product } from '../types.ts';

export const MONGODB_PRODUCTS: Product[] = [
    {
        "id":  "pb-str-001",
        "name":  "YouTube Premium",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  400,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Official YouTube Premium plan activated directly on your own Google account — ad-free videos, background and offline playback, plus YouTube Music Premium included. Delivered by PlayBeat with a full-duration stability warranty.",
        "features":  [
                         "Ad-free videos across YouTube and YouTube Music",
                         "Background play and offline downloads",
                         "Activation on your own email"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STR-001",
                             "name":  "Your Own Email 1 Month",
                             "duration":  "Your Own Email 1 Month",
                             "price":  400
                         },
                         {
                             "id":  "v-PB-STR-003",
                             "name":  "International 1 Month",
                             "duration":  "International 1 Month",
                             "price":  1150
                         },
                         {
                             "id":  "v-PB-STR-002",
                             "name":  "Full Private 1 Year",
                             "duration":  "Full Private 1 Year",
                             "price":  5000
                         },
                         {
                             "id":  "v-PB-STR-004",
                             "name":  "International 1 Year",
                             "duration":  "International 1 Year",
                             "price":  12500
                         }
                     ],
        "imageUrl":  "/assets/images/products/youtube-premium.webp",
        "licenseType":  "account_invite",
        "originalPrice":  500,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-str-005",
        "name":  "Prime Video",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  199,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Amazon Prime Video subscription with thousands of movies, award-winning Originals and live sports. Stream on up to three devices at once in Full HD and 4K where available.",
        "features":  [
                         "Hollywood movies, series and Amazon Originals",
                         "Watch on TV, mobile, tablet or console",
                         "Full-duration warranty handled by PlayBeat"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STR-005",
                             "name":  "1 Month Shared",
                             "duration":  "1 Month Shared",
                             "price":  199
                         },
                         {
                             "id":  "v-PB-STR-006",
                             "name":  "6 Month",
                             "duration":  "6 Month",
                             "price":  750
                         },
                         {
                             "id":  "v-PB-STR-007",
                             "name":  "Full Private 1 Month",
                             "duration":  "Full Private 1 Month",
                             "price":  799
                         }
                     ],
        "imageUrl":  "/assets/images/products/prime-video.webp",
        "licenseType":  "account_invite",
        "originalPrice":  250,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-str-008",
        "name":  "Netflix 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  600,
        "duration":  "Choose Region",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Netflix subscription plan (Pakistan local catalog) with HD/4K streaming of series, films and mobile games. Private profile with watching history kept separate.",
        "features":  [
                         "HD / 4K streaming where plan allows",
                         "TV, mobile, tablet and web supported",
                         "Replacement warranty for full plan duration"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STR-008",
                             "name":  "Local Pakistan",
                             "duration":  "Local Pakistan",
                             "price":  600
                         },
                         {
                             "id":  "v-PB-STR-009",
                             "name":  "International",
                             "duration":  "International",
                             "price":  850
                         }
                     ],
        "imageUrl":  "/assets/images/products/netflix.webp",
        "licenseType":  "account_invite",
        "originalPrice":  750,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-str-010",
        "name":  "Netflix + Prime Video Combo",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  699,
        "duration":  "Choose Region",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Bundle pairing a Netflix plan with Amazon Prime Video for one month — double the entertainment at a combo price. Both activations delivered together with warranty support.",
        "features":  [
                         "Two top streaming services in one order",
                         "Delivered together within minutes",
                         "Full-duration warranty on both plans"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STR-010",
                             "name":  "1 Month Local Combo",
                             "duration":  "1 Month Local Combo",
                             "price":  699
                         },
                         {
                             "id":  "v-PB-STR-011",
                             "name":  "1 Month International Combo",
                             "duration":  "1 Month International Combo",
                             "price":  950
                         }
                     ],
        "imageUrl":  "/assets/images/products/netflix-prime-combo.webp",
        "licenseType":  "account_invite",
        "originalPrice":  850,
        "badge":  "18% OFF"
    },
    {
        "id":  "pb-str-012",
        "name":  "Apple TV+",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  499,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Apple TV+ subscription featuring Apple Originals — Ted Lasso, Severance, Silo and more — in stunning 4K HDR with Dolby Atmos on supported devices.",
        "features":  [
                         "All Apple Originals in 4K HDR",
                         "Up to six family profiles",
                         "Warranty for the full subscription period"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STR-012",
                             "name":  "1 Month",
                             "duration":  "1 Month",
                             "price":  499
                         },
                         {
                             "id":  "v-PB-STR-013",
                             "name":  "International",
                             "duration":  "International",
                             "price":  750
                         }
                     ],
        "imageUrl":  "/assets/images/products/appletv-plus.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-str-014",
        "name":  "Spotify Individual Plan 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  299,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Spotify Premium Individual plan — ad-free music, offline downloads, unlimited skips and high-quality audio on your existing account.",
        "features":  [
                         "Ad-free listening with offline mode",
                         "Works on your own Spotify account",
                         "Full-duration subscription warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/spotify.webp",
        "licenseType":  "account_invite",
        "originalPrice":  400,
        "badge":  "25% OFF"
    },
    {
        "id":  "pb-str-015",
        "name":  "Sony Liv 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  800,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "SonyLIV premium subscription for Indian entertainment — live sports, Sony TV shows, Originals and movies in HD.",
        "features":  [
                         "Live cricket and sports events",
                         "Latest Sony TV serials and Originals",
                         "HD streaming on two devices"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/sonyliv.webp",
        "licenseType":  "account_invite",
        "originalPrice":  950,
        "badge":  "16% OFF"
    },
    {
        "id":  "pb-str-016",
        "name":  "Ullu 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ULLU app subscription unlocking the complete library of ULLU Originals, web series and films on Android, iOS and Smart TV.",
        "features":  [
                         "Complete ULLU Originals catalog",
                         "Android, iOS and Smart TV apps",
                         "Instant activation with warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/ullu.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-str-017",
        "name":  "Crunchyroll Single Screen 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Crunchyroll single-screen premium plan — stream the world\u0027s largest anime library ad-free in HD, with new episodes straight from Japan.",
        "features":  [
                         "Ad-free HD anime streaming",
                         "New episodes hours after Japan broadcast",
                         "Single-screen private plan"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/crunchyroll.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-str-018",
        "name":  "Chaupal Single Screen 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  600,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Chaupal single-screen subscription for Punjabi, Haryanvi and Bhojpuri movies and Originals — regional entertainment in HD.",
        "features":  [
                         "Punjabi, Haryanvi and Bhojpuri content",
                         "HD streaming on one screen",
                         "Instant delivery and full warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/chaupal.webp",
        "licenseType":  "account_invite",
        "originalPrice":  750,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-str-019",
        "name":  "Disney+ with VPN 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  1850,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Disney+ subscription (with VPN access guide) unlocking Disney, Pixar, Marvel, Star Wars and National Geographic in 4K UHD.",
        "features":  [
                         "Marvel, Star Wars, Pixar and Disney classics",
                         "4K UHD with Dolby Atmos",
                         "VPN usage guide included for access"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/disney-plus.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2000,
        "badge":  "8% OFF"
    },
    {
        "id":  "pb-str-020",
        "name":  "HBO Max with VPN 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  650,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "HBO Max subscription (with VPN guide) — HBO Originals, Warner Bros. movies same-day, and DC universe titles in 4K HDR.",
        "features":  [
                         "HBO Originals and Warner Bros. films",
                         "4K HDR streaming",
                         "VPN access guide included"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/hbo-max.webp",
        "licenseType":  "account_invite",
        "originalPrice":  800,
        "badge":  "19% OFF"
    },
    {
        "id":  "pb-str-021",
        "name":  "Jio Hotstar with VPN 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  1250,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "JioHotstar premium subscription (with VPN) — live sports including IPL and cricket, Disney+ content and Indian Originals in up to 4K.",
        "features":  [
                         "Live IPL, cricket and global sports",
                         "Hollywood, Bollywood and Originals",
                         "VPN usage guide included"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/jiohotstar.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-str-022",
        "name":  "Hulu with VPN 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  650,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Hulu subscription (with VPN) — next-day US TV episodes, Hulu Originals and a massive on-demand library in HD.",
        "features":  [
                         "Next-day US network TV",
                         "Hulu Originals and FX on Hulu",
                         "VPN usage guide included"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/hulu.webp",
        "licenseType":  "account_invite",
        "originalPrice":  800,
        "badge":  "19% OFF"
    },
    {
        "id":  "pb-str-023",
        "name":  "Zee5 with VPN 1 Month",
        "category":  "entertainment",
        "categoryLabel":  "Streaming Subscriptions",
        "price":  1250,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ZEE5 premium subscription (with VPN) — Zee serials, movies, Live TV and Originals across 12 languages in HD.",
        "features":  [
                         "12 Indian languages content",
                         "Live TV channels included",
                         "HD streaming with full warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/zee5.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-ait-001",
        "name":  "ChatGPT 5",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2499,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ChatGPT plan (Plus tier) on a fully private account — GPT-5 access, advanced reasoning, file analysis, image generation and custom GPTs.",
        "features":  [
                         "GPT-5 with advanced reasoning",
                         "File uploads, vision and data analysis",
                         "Fully private account"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-AIT-001",
                             "name":  "1 Month Semi-Private",
                             "duration":  "1 Month Semi-Private",
                             "price":  2499
                         },
                         {
                             "id":  "v-PB-AIT-002",
                             "name":  "Full Private 1 Month",
                             "duration":  "Full Private 1 Month",
                             "price":  4000
                         }
                     ],
        "imageUrl":  "/assets/images/products/chatgpt.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3000,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-ait-003",
        "name":  "ChatGPT Go Plan 1 Year Full-Private",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  7599,
        "duration":  "1 Year",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ChatGPT plan (Go tier) on a fully private account — GPT-5 access, advanced reasoning, file analysis, image generation and custom GPTs.",
        "features":  [
                         "GPT-5 with advanced reasoning",
                         "File uploads, vision and data analysis",
                         "Fully private account"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/chatgpt.webp",
        "licenseType":  "account_invite",
        "originalPrice":  8500,
        "badge":  "11% OFF"
    },
    {
        "id":  "pb-ait-004",
        "name":  "Perplexity AI Private Yearly Plan",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  9500,
        "duration":  "Instant Digital Delivery",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Perplexity Pro subscription — unlimited Pro searches with GPT-5, Claude and Sonar models, file uploads and dedicated AI inference.",
        "features":  [
                         "Unlimited Pro-tier AI searches",
                         "Choose GPT-5, Claude or Sonar models",
                         "Private activation with warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/perplexity.webp",
        "licenseType":  "account_invite",
        "originalPrice":  11000,
        "badge":  "14% OFF"
    },
    {
        "id":  "pb-ait-005",
        "name":  "Google Veo 3 1 Month Normal",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2000,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Google Veo 3 access for 1 month — Google\u0027s most advanced AI video generation with native audio, 4K-quality output via Gemini and Flow.",
        "features":  [
                         "Text-to-video with native audio",
                         "Cinematic 1080p+ AI video generation",
                         "Activated on provided Google account"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/google-veo.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2500,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-ait-006",
        "name":  "Eleven Labs 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  5999,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ElevenLabs 1-month plan — the most realistic AI voice generation with 3,000+ voices in 32 languages, voice cloning and dubbing studio.",
        "features":  [
                         "Ultra-realistic AI text-to-speech",
                         "Voice cloning and dubbing studio",
                         "Commercial usage license"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/elevenlabs.webp",
        "licenseType":  "account_invite",
        "originalPrice":  7000,
        "badge":  "14% OFF"
    },
    {
        "id":  "pb-ait-007",
        "name":  "Leonardo AI Unlimited Plan Official 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Leonardo AI Unlimited official plan for 1 month — unlimited AI image generations, Phoenix model, canvas editing and upscaling.",
        "features":  [
                         "Unlimited daily image generations",
                         "Phoenix and Flux pro models",
                         "Official plan activated on your email"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/leonardo-ai.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3000,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-ait-008",
        "name":  "Turnitin Instructor Account 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  16999,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Turnitin Instructor account for 1 month — full instructor dashboard with similarity reports, AI-writing detection and grading tools.",
        "features":  [
                         "Genuine instructor (teacher) account",
                         "AI-writing detection included",
                         "Similarity reports for student papers"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/turnitin.webp",
        "licenseType":  "account_invite",
        "originalPrice":  19500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-ait-009",
        "name":  "Hailio AI 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  4999,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Hailuo AI (MiniMax) 1-month subscription — state-of-the-art AI video generation with smooth motion, image-to-video and director-grade camera controls.",
        "features":  [
                         "Text-to-video and image-to-video",
                         "Cinematic camera movement controls",
                         "Private activation with warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/hailio-ai.webp",
        "licenseType":  "account_invite",
        "originalPrice":  5500,
        "badge":  "9% OFF"
    },
    {
        "id":  "pb-stu-001",
        "name":  "Helium 10 Platinum Plan 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1200,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Helium 10 Platinum plan for Amazon sellers — product research (Black Box), keyword research (Magnet, Cerebro) and listing optimization in one suite.",
        "features":  [
                         "Full Platinum toolset for 1 month",
                         "Keyword and product research suite",
                         "Private credentials, instant setup"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/helium10.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-stu-002",
        "name":  "Zoom Pro",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2000,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Zoom Pro license for meetings up to 100 participants — unlimited group meetings, cloud recording and advanced meeting controls.",
        "features":  [
                         "Pro host license with cloud recording",
                         "HD video meetings with breakout rooms",
                         "Reliable activation with warranty"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STU-002",
                             "name":  "100 Participants 1 Month",
                             "duration":  "100 Participants 1 Month",
                             "price":  2000
                         },
                         {
                             "id":  "v-PB-STU-004",
                             "name":  "Officially Paid No Trial",
                             "duration":  "Officially Paid No Trial",
                             "price":  3200
                         },
                         {
                             "id":  "v-PB-STU-003",
                             "name":  "1 Year",
                             "duration":  "1 Year",
                             "price":  23000
                         }
                     ],
        "imageUrl":  "/assets/images/products/zoom.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2500,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-stu-007",
        "name":  "CapCut Pro",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1499,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "CapCut Pro plan on up to 3 devices — pro video editing with 4K export, premium effects, templates and cloud space.",
        "features":  [
                         "All Pro effects, filters and templates",
                         "4K export with no watermark",
                         "Works on 3 of your devices"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-STU-007",
                             "name":  "1 Month 3 Devices",
                             "duration":  "1 Month 3 Devices",
                             "price":  1499
                         },
                         {
                             "id":  "v-PB-STU-008",
                             "name":  "Full Private 1 Year",
                             "duration":  "Full Private 1 Year",
                             "price":  13999
                         }
                     ],
        "imageUrl":  "/assets/images/products/capcut.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2000,
        "badge":  "25% OFF"
    },
    {
        "id":  "pb-stu-009",
        "name":  "Freepik Premium 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1599,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Freepik Premium 1-month plan — unlimited downloads of stock photos, vectors, PSDs, icons and AI-generated assets with full commercial license.",
        "features":  [
                         "Unlimited premium downloads",
                         "Commercial-use license included",
                         "Instant activation on your email"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/freepik.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2000,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-stu-010",
        "name":  "QuillBot Premium 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "QuillBot Premium 1-month plan — unlimited paraphrasing, grammar checking, plagiarism checker and summarizer for flawless writing.",
        "features":  [
                         "Unlimited words in paraphraser",
                         "Grammar, plagiarism and summarizer tools",
                         "Activated on your own account"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/quillbot.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-stu-011",
        "name":  "Grammarly Premium 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Grammarly Premium 1-month plan — advanced grammar, clarity and tone suggestions plus plagiarism detection, activated on your own account.",
        "features":  [
                         "Premium writing suggestions everywhere",
                         "Tone and clarity rewrites",
                         "Plagiarism checker included"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/grammarly.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-vpn-004",
        "name":  "Surfshark VPN",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  499,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Surfshark VPN plan (shared) — CleanWeb ad blocking, NoBorders mode and 3,200+ servers in 100 countries.",
        "features":  [
                         "Unlimited simultaneous devices",
                         "CleanWeb ads and tracker blocker",
                         "24/7 protection with warranty"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-VPN-004",
                             "name":  "1 Month Shared",
                             "duration":  "1 Month Shared",
                             "price":  499
                         },
                         {
                             "id":  "v-PB-VPN-005",
                             "name":  "Full Private 1 Month",
                             "duration":  "Full Private 1 Month",
                             "price":  1999
                         },
                         {
                             "id":  "v-PB-VPN-006",
                             "name":  "Full Private 1 Year",
                             "duration":  "Full Private 1 Year",
                             "price":  8500
                         }
                     ],
        "imageUrl":  "/assets/images/products/surfshark.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-vpn-007",
        "name":  "ExpressVPN 1 Month Single Device",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1600,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ExpressVPN plan (single device) — Lightning-fast servers in 105 countries with TrustedServer technology and full privacy audit.",
        "features":  [
                         "Servers in 105 countries",
                         "TrustedServer RAM-only technology",
                         "Works on PC and mobile"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/expressvpn.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2000,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-vpn-008",
        "name":  "ExpressVPN For PC",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  900,
        "duration":  "Instant Digital Delivery",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "ExpressVPN plan for Windows PC — Lightning-fast servers in 105 countries with TrustedServer technology and full privacy audit.",
        "features":  [
                         "Servers in 105 countries",
                         "TrustedServer RAM-only technology",
                         "Works on PC and mobile"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/expressvpn.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1100,
        "badge":  "18% OFF"
    },
    {
        "id":  "pb-vpn-009",
        "name":  "Proton VPN 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  650,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Proton VPN 1-month premium — Secure Core servers, NetShield ad-blocker and strict Swiss no-logs privacy policy.",
        "features":  [
                         "Swiss privacy, no-logs policy",
                         "NetShield ad and malware blocking",
                         "Secure Core double-hop routing"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/protonvpn.webp",
        "licenseType":  "account_invite",
        "originalPrice":  800,
        "badge":  "19% OFF"
    },
    {
        "id":  "pb-vpn-010",
        "name":  "IPVanish VPN 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  650,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "IPVanish VPN 1-month plan — unlimited device connections, 2,400+ servers and zero-traffic-logs policy.",
        "features":  [
                         "Unlimited simultaneous devices",
                         "2,400+ servers in 90+ locations",
                         "Strict no-logs policy"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/ipvanish.webp",
        "licenseType":  "account_invite",
        "originalPrice":  800,
        "badge":  "19% OFF"
    },
    {
        "id":  "pb-vpn-011",
        "name":  "Hotspot Shield VPN 1 Month",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  499,
        "duration":  "1 Month",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Hotspot Shield Premium 1-month — Catapult Hydra protocol for blazing speeds on 115+ virtual locations with military-grade encryption.",
        "features":  [
                         "Catapult Hydra speed protocol",
                         "115+ virtual locations",
                         "Automatic kill switch"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/hotspot-shield.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-gft-001",
        "name":  "Xbox Live Gift Card",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  440,
        "duration":  "Choose Denomination",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Xbox Live gift card ($1 USD) — official Microsoft digital code to top up any Xbox or Microsoft account for games, DLC, Game Pass and add-ons.",
        "features":  [
                         "Official Microsoft code — never expires",
                         "Redeem on Xbox console or Microsoft Store",
                         "Region-locked to USA accounts"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GFT-001",
                             "name":  "1 USD",
                             "duration":  "1 USD",
                             "price":  440
                         },
                         {
                             "id":  "v-PB-GFT-002",
                             "name":  "5 USD",
                             "duration":  "5 USD",
                             "price":  1451
                         },
                         {
                             "id":  "v-PB-GFT-003",
                             "name":  "10 USD",
                             "duration":  "10 USD",
                             "price":  2698
                         },
                         {
                             "id":  "v-PB-GFT-004",
                             "name":  "15 USD",
                             "duration":  "15 USD",
                             "price":  3850
                         },
                         {
                             "id":  "v-PB-GFT-005",
                             "name":  "25 USD",
                             "duration":  "25 USD",
                             "price":  6324
                         },
                         {
                             "id":  "v-PB-GFT-006",
                             "name":  "50 USD",
                             "duration":  "50 USD",
                             "price":  13548
                         },
                         {
                             "id":  "v-PB-GFT-007",
                             "name":  "100 USD",
                             "duration":  "100 USD",
                             "price":  28415
                         },
                         {
                             "id":  "v-PB-GFT-008",
                             "name":  "160 USD",
                             "duration":  "160 USD",
                             "price":  40719
                         },
                         {
                             "id":  "v-PB-GFT-009",
                             "name":  "225 USD",
                             "duration":  "225 USD",
                             "price":  57339
                         }
                     ],
        "imageUrl":  "/assets/images/products/xbox-giftcard.webp",
        "licenseType":  "account_invite",
        "originalPrice":  550,
        "badge":  "20% OFF"
    },
    {
        "id":  "pb-gft-010",
        "name":  "PlayStation Network Gift Card",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  2820,
        "duration":  "Choose Denomination",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "PlayStation Network gift card ($10 USD) — official Sony digital code for PS5 and PS4 wallet top-up: games, add-ons, PS Plus and media.",
        "features":  [
                         "Official Sony USA code",
                         "Redeem on PS5 / PS4 store",
                         "Funds never expire once redeemed"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GFT-010",
                             "name":  "10 USD",
                             "duration":  "10 USD",
                             "price":  2820
                         },
                         {
                             "id":  "v-PB-GFT-011",
                             "name":  "20 USD",
                             "duration":  "20 USD",
                             "price":  5451
                         },
                         {
                             "id":  "v-PB-GFT-012",
                             "name":  "25 USD",
                             "duration":  "25 USD",
                             "price":  6739
                         },
                         {
                             "id":  "v-PB-GFT-013",
                             "name":  "50 USD",
                             "duration":  "50 USD",
                             "price":  13304
                         },
                         {
                             "id":  "v-PB-GFT-014",
                             "name":  "100 USD",
                             "duration":  "100 USD",
                             "price":  29163
                         },
                         {
                             "id":  "v-PB-GFT-015",
                             "name":  "180 USD",
                             "duration":  "180 USD",
                             "price":  45705
                         }
                     ],
        "imageUrl":  "/assets/images/products/playstation-giftcard.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3000,
        "badge":  "6% OFF"
    },
    {
        "id":  "pb-gft-016",
        "name":  "Steam Gift Card",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  1255,
        "duration":  "Choose Denomination",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Steam wallet gift card ($4 USD) — Pakistan region digital code redeemable on Steam for games, DLC, in-game items and Market purchases.",
        "features":  [
                         "Works with Pakistan-region Steam wallets",
                         "Instant code delivery by email",
                         "Funds never expire on Steam wallet"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GFT-016",
                             "name":  "4 USD Pakistan Region",
                             "duration":  "4 USD Pakistan Region",
                             "price":  1255
                         },
                         {
                             "id":  "v-PB-GFT-017",
                             "name":  "5 USD Global",
                             "duration":  "5 USD Global",
                             "price":  1385
                         },
                         {
                             "id":  "v-PB-GFT-018",
                             "name":  "6 USD Pakistan Region",
                             "duration":  "6 USD Pakistan Region",
                             "price":  1554
                         },
                         {
                             "id":  "v-PB-GFT-019",
                             "name":  "8 USD Pakistan Region",
                             "duration":  "8 USD Pakistan Region",
                             "price":  2200
                         },
                         {
                             "id":  "v-PB-GFT-020",
                             "name":  "10 USD Global",
                             "duration":  "10 USD Global",
                             "price":  2892
                         },
                         {
                             "id":  "v-PB-GFT-021",
                             "name":  "10 USD Pakistan Region",
                             "duration":  "10 USD Pakistan Region",
                             "price":  3800
                         },
                         {
                             "id":  "v-PB-GFT-022",
                             "name":  "15 USD Pakistan Region",
                             "duration":  "15 USD Pakistan Region",
                             "price":  4100
                         },
                         {
                             "id":  "v-PB-GFT-023",
                             "name":  "20 USD Global",
                             "duration":  "20 USD Global",
                             "price":  5781
                         },
                         {
                             "id":  "v-PB-GFT-024",
                             "name":  "20 USD Pakistan Region",
                             "duration":  "20 USD Pakistan Region",
                             "price":  7000
                         },
                         {
                             "id":  "v-PB-GFT-025",
                             "name":  "50 USD Global",
                             "duration":  "50 USD Global",
                             "price":  13850
                         },
                         {
                             "id":  "v-PB-GFT-026",
                             "name":  "100 USD Global",
                             "duration":  "100 USD Global",
                             "price":  27348
                         }
                     ],
        "imageUrl":  "/assets/images/products/steam-giftcard.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "16% OFF"
    },
    {
        "id":  "pb-gft-027",
        "name":  "Razer Gold Gift Card",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  1471,
        "duration":  "Choose Denomination",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Razer Gold gift card ($5 USD) — unified virtual credit for 42,000+ games and entertainment content, with Razer Silver rewards on every spend.",
        "features":  [
                         "42,000+ supported games and apps",
                         "Earn Razer Silver loyalty points",
                         "Instant code delivery"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GFT-027",
                             "name":  "5 USD",
                             "duration":  "5 USD",
                             "price":  1471
                         },
                         {
                             "id":  "v-PB-GFT-028",
                             "name":  "10 USD",
                             "duration":  "10 USD",
                             "price":  2875
                         },
                         {
                             "id":  "v-PB-GFT-029",
                             "name":  "20 USD",
                             "duration":  "20 USD",
                             "price":  5997
                         },
                         {
                             "id":  "v-PB-GFT-030",
                             "name":  "30 USD",
                             "duration":  "30 USD",
                             "price":  9127
                         },
                         {
                             "id":  "v-PB-GFT-031",
                             "name":  "50 USD",
                             "duration":  "50 USD",
                             "price":  14681
                         },
                         {
                             "id":  "v-PB-GFT-032",
                             "name":  "100 USD",
                             "duration":  "100 USD",
                             "price":  27700
                         }
                     ],
        "imageUrl":  "/assets/images/products/razer-gold.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "2% OFF"
    },
    {
        "id":  "pb-gft-033",
        "name":  "Apple Gift Card",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  1471,
        "duration":  "Choose Denomination",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Apple Gift Card ($5 USD) — official Apple digital code for App Store, iCloud+, Apple Music, accessories and everything Apple (USA store).",
        "features":  [
                         "Official Apple USA code",
                         "App Store, iCloud+, Music and more",
                         "Never expires"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GFT-033",
                             "name":  "5 USD",
                             "duration":  "5 USD",
                             "price":  1471
                         },
                         {
                             "id":  "v-PB-GFT-034",
                             "name":  "10 USD",
                             "duration":  "10 USD",
                             "price":  2903
                         },
                         {
                             "id":  "v-PB-GFT-035",
                             "name":  "15 USD",
                             "duration":  "15 USD",
                             "price":  3642
                         },
                         {
                             "id":  "v-PB-GFT-036",
                             "name":  "20 USD",
                             "duration":  "20 USD",
                             "price":  5817
                         },
                         {
                             "id":  "v-PB-GFT-037",
                             "name":  "25 USD",
                             "duration":  "25 USD",
                             "price":  7064
                         },
                         {
                             "id":  "v-PB-GFT-038",
                             "name":  "40 USD",
                             "duration":  "40 USD",
                             "price":  11634
                         },
                         {
                             "id":  "v-PB-GFT-039",
                             "name":  "50 USD",
                             "duration":  "50 USD",
                             "price":  14803
                         },
                         {
                             "id":  "v-PB-GFT-040",
                             "name":  "100 USD",
                             "duration":  "100 USD",
                             "price":  29085
                         },
                         {
                             "id":  "v-PB-GFT-041",
                             "name":  "220 USD",
                             "duration":  "220 USD",
                             "price":  60940
                         }
                     ],
        "imageUrl":  "/assets/images/products/apple-giftcard.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "2% OFF"
    },
    {
        "id":  "pb-gam-001",
        "name":  "Xbox Game Pass Ultimate",
        "category":  "gaming_vpn",
        "categoryLabel":  "Gift Cards \u0026 Gaming",
        "price":  2999,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Xbox Game Pass Ultimate shared slot for one device — 500+ high-quality games on console, PC and cloud including day-one releases.",
        "features":  [
                         "Day-one Xbox and Bethesda releases",
                         "EA Play and cloud gaming included",
                         "Shared slot on one device"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-GAM-001",
                             "name":  "1 Device Shared",
                             "duration":  "1 Device Shared",
                             "price":  2999
                         },
                         {
                             "id":  "v-PB-GAM-002",
                             "name":  "Full Private 1 Month",
                             "duration":  "Full Private 1 Month",
                             "price":  7500
                         }
                     ],
        "imageUrl":  "/assets/images/products/xbox-game-pass.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3500,
        "badge":  "14% OFF"
    },
    {
        "id":  "pb-stu-006",
        "name":  "Adobe Creative Cloud",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1498,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Adobe Creative Cloud Pro plan with all apps — Photoshop, Illustrator, Premiere Pro, After Effects and more. For Windows PC.",
        "features":  [
                         "Genuine Adobe activation",
                         "Windows PC supported",
                         "Full-duration warranty with replacement"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-023",
                             "name":  "Photography Plan 1 Month 20GB Global",
                             "duration":  "Photography Plan 1 Month 20GB Global",
                             "price":  1498
                         },
                         {
                             "id":  "v-PB-SWF-015",
                             "name":  "Pro PC 1 Month Global",
                             "duration":  "Pro PC 1 Month Global",
                             "price":  2715
                         },
                         {
                             "id":  "v-PB-STU-006",
                             "name":  "1 Month",
                             "duration":  "1 Month",
                             "price":  2999
                         },
                         {
                             "id":  "v-PB-SWF-017",
                             "name":  "Pro PC 1 Year ROW Region",
                             "duration":  "Pro PC 1 Year ROW Region",
                             "price":  5557
                         },
                         {
                             "id":  "v-PB-SWF-016",
                             "name":  "Pro PC 3 Months Global",
                             "duration":  "Pro PC 3 Months Global",
                             "price":  20300
                         },
                         {
                             "id":  "v-PB-SWF-020",
                             "name":  "Pro Student \u0026 Teacher PC 1 Year",
                             "duration":  "Pro Student \u0026 Teacher PC 1 Year",
                             "price":  36860
                         },
                         {
                             "id":  "v-PB-SWF-022",
                             "name":  "Pro Student \u0026 Teacher PC Mac 1 Year US",
                             "duration":  "Pro Student \u0026 Teacher PC Mac 1 Year US",
                             "price":  40392
                         },
                         {
                             "id":  "v-PB-SWF-024",
                             "name":  "Photography Plan 1 Year 20GB Global",
                             "duration":  "Photography Plan 1 Year 20GB Global",
                             "price":  50541
                         },
                         {
                             "id":  "v-PB-SWF-021",
                             "name":  "Pro Student \u0026 Teacher PC Mac 1 Year Global",
                             "duration":  "Pro Student \u0026 Teacher PC Mac 1 Year Global",
                             "price":  51408
                         },
                         {
                             "id":  "v-PB-SWF-018",
                             "name":  "Pro PC Mac 1 Year Europe",
                             "duration":  "Pro PC Mac 1 Year Europe",
                             "price":  58261
                         },
                         {
                             "id":  "v-PB-SWF-019",
                             "name":  "Pro PC 1 Year Japan",
                             "duration":  "Pro PC 1 Year Japan",
                             "price":  61688
                         }
                     ],
        "imageUrl":  "/assets/images/products/adobe-cc.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3500,
        "badge":  "14% OFF"
    },
    {
        "id":  "pb-swf-007",
        "name":  "Microsoft Office",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2945,
        "duration":  "Choose Edition",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Genuine Microsoft Office retail license (2019 edition) for Windows PC — lifetime activation with Word, Excel, PowerPoint, Outlook and more.",
        "features":  [
                         "Lifetime retail key — one-time purchase",
                         "Instant digital delivery by email",
                         "Official Microsoft activation with updates"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-007",
                             "name":  "Professional 2019 PC 1 Device Global",
                             "duration":  "Professional 2019 PC 1 Device Global",
                             "price":  2945
                         },
                         {
                             "id":  "v-PB-SWF-002",
                             "name":  "2024 LTSC Standard PC Global",
                             "duration":  "2024 LTSC Standard PC Global",
                             "price":  3989
                         },
                         {
                             "id":  "v-PB-STU-005",
                             "name":  "365 Pro Plus 1 Year 5 Devices",
                             "duration":  "365 Pro Plus 1 Year 5 Devices",
                             "price":  3999
                         },
                         {
                             "id":  "v-PB-SWF-001",
                             "name":  "2024 LTSC Professional Plus PC Global",
                             "duration":  "2024 LTSC Professional Plus PC Global",
                             "price":  4853
                         },
                         {
                             "id":  "v-PB-SWF-006",
                             "name":  "Professional Plus 2021 PC Global",
                             "duration":  "Professional Plus 2021 PC Global",
                             "price":  4853
                         },
                         {
                             "id":  "v-PB-SWF-003",
                             "name":  "2024 Home \u0026 Business PC Global",
                             "duration":  "2024 Home \u0026 Business PC Global",
                             "price":  4956
                         },
                         {
                             "id":  "v-PB-SWF-008",
                             "name":  "Home \u0026 Business 2019 PC Global",
                             "duration":  "Home \u0026 Business 2019 PC Global",
                             "price":  5659
                         },
                         {
                             "id":  "v-PB-SWF-009",
                             "name":  "Pro 2021 + Windows 11 Pro Bundle",
                             "duration":  "Pro 2021 + Windows 11 Pro Bundle",
                             "price":  9692
                         },
                         {
                             "id":  "v-PB-SWF-004",
                             "name":  "2024 Home \u0026 Business PC Mac Global",
                             "duration":  "2024 Home \u0026 Business PC Mac Global",
                             "price":  34262
                         },
                         {
                             "id":  "v-PB-SWF-005",
                             "name":  "2024 Home PC Mac Global",
                             "duration":  "2024 Home PC Mac Global",
                             "price":  34265
                         }
                     ],
        "imageUrl":  "/assets/images/products/office.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3500,
        "badge":  "16% OFF"
    },
    {
        "id":  "pb-swf-010",
        "name":  "Microsoft Windows 11",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  5429,
        "duration":  "Choose Edition",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Genuine Microsoft Windows 11 Home retail license (retail) for one PC, with lifetime activation and official updates.",
        "features":  [
                         "Lifetime activation key",
                         "All official Windows Update features",
                         "Instant email delivery"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-010",
                             "name":  "Home PC Global Retail",
                             "duration":  "Home PC Global Retail",
                             "price":  5429
                         },
                         {
                             "id":  "v-PB-SWF-012",
                             "name":  "Pro PC Global Retail",
                             "duration":  "Pro PC Global Retail",
                             "price":  5551
                         },
                         {
                             "id":  "v-PB-SWF-011",
                             "name":  "Home N PC Global",
                             "duration":  "Home N PC Global",
                             "price":  6197
                         },
                         {
                             "id":  "v-PB-SWF-013",
                             "name":  "Pro OEM PC Global",
                             "duration":  "Pro OEM PC Global",
                             "price":  6252
                         },
                         {
                             "id":  "v-PB-SWF-014",
                             "name":  "Pro x4 Bundle Global",
                             "duration":  "Pro x4 Bundle Global",
                             "price":  10953
                         }
                     ],
        "imageUrl":  "/assets/images/products/windows-11.webp",
        "licenseType":  "account_invite",
        "originalPrice":  6000,
        "badge":  "10% OFF"
    },
    {
        "id":  "pb-swf-033",
        "name":  "CyberGhost VPN",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  10592,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "CyberGhost VPN plan for 5 devices — 11,000+ servers worldwide, NoSpy servers and strict no-logs policy, audited by Deloitte.",
        "features":  [
                         "11,000+ servers in 100 countries",
                         "Up to 7 devices per subscription",
                         "Deloitte-audited no-logs policy"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-033",
                             "name":  "5 Devices 2 Years Global",
                             "duration":  "5 Devices 2 Years Global",
                             "price":  10592
                         },
                         {
                             "id":  "v-PB-SWF-032",
                             "name":  "7 Devices 1 Year Global",
                             "duration":  "7 Devices 1 Year Global",
                             "price":  10673
                         },
                         {
                             "id":  "v-PB-SWF-034",
                             "name":  "5 Devices 5 Years Global",
                             "duration":  "5 Devices 5 Years Global",
                             "price":  12329
                         }
                     ],
        "imageUrl":  "/assets/images/products/cyberghost.webp",
        "licenseType":  "account_invite",
        "originalPrice":  12000,
        "badge":  "12% OFF"
    },
    {
        "id":  "pb-swf-035",
        "name":  "Perplexity Pro",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  3834,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Perplexity Pro subscription — unlimited Pro searches with GPT-5, Claude and Sonar models, file uploads and dedicated AI inference.",
        "features":  [
                         "Unlimited Pro-tier AI searches",
                         "Choose GPT-5, Claude or Sonar models",
                         "Private activation with warranty"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-035",
                             "name":  "1 Month Global",
                             "duration":  "1 Month Global",
                             "price":  3834
                         },
                         {
                             "id":  "v-PB-SWF-042",
                             "name":  "1 Year Netherlands",
                             "duration":  "1 Year Netherlands",
                             "price":  14296
                         },
                         {
                             "id":  "v-PB-SWF-038",
                             "name":  "1 Year UK",
                             "duration":  "1 Year UK",
                             "price":  14329
                         },
                         {
                             "id":  "v-PB-SWF-041",
                             "name":  "1 Year France",
                             "duration":  "1 Year France",
                             "price":  14329
                         },
                         {
                             "id":  "v-PB-SWF-043",
                             "name":  "1 Year Australia",
                             "duration":  "1 Year Australia",
                             "price":  14329
                         },
                         {
                             "id":  "v-PB-SWF-036",
                             "name":  "3 Months Global",
                             "duration":  "3 Months Global",
                             "price":  14509
                         },
                         {
                             "id":  "v-PB-SWF-037",
                             "name":  "1 Year Europe",
                             "duration":  "1 Year Europe",
                             "price":  17708
                         },
                         {
                             "id":  "v-PB-SWF-039",
                             "name":  "1 Year Global Key",
                             "duration":  "1 Year Global Key",
                             "price":  55087
                         },
                         {
                             "id":  "v-PB-SWF-040",
                             "name":  "1 Year Global Account",
                             "duration":  "1 Year Global Account",
                             "price":  62422
                         }
                     ],
        "imageUrl":  "/assets/images/products/perplexity.webp",
        "licenseType":  "account_invite",
        "originalPrice":  4500,
        "badge":  "15% OFF"
    },
    {
        "id":  "pb-swf-048",
        "name":  "Bitdefender Total Security",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1753,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Bitdefender Total Security license — multi-layer ransomware protection, web attack prevention and anti-fraud for the full term.",
        "features":  [
                         "Multi-layer ransomware protection",
                         "Anti-phishing and anti-fraud guard",
                         "Covers all major platforms"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-048",
                             "name":  "3 Months Global",
                             "duration":  "3 Months Global",
                             "price":  1753
                         },
                         {
                             "id":  "v-PB-SWF-044",
                             "name":  "1 Year Global",
                             "duration":  "1 Year Global",
                             "price":  3942
                         },
                         {
                             "id":  "v-PB-SWF-045",
                             "name":  "1 Year US",
                             "duration":  "1 Year US",
                             "price":  3942
                         },
                         {
                             "id":  "v-PB-SWF-046",
                             "name":  "1 Year Europe",
                             "duration":  "1 Year Europe",
                             "price":  6836
                         },
                         {
                             "id":  "v-PB-SWF-047",
                             "name":  "1 Year UK",
                             "duration":  "1 Year UK",
                             "price":  8257
                         },
                         {
                             "id":  "v-PB-SWF-053",
                             "name":  "3 Years India",
                             "duration":  "3 Years India",
                             "price":  11753
                         },
                         {
                             "id":  "v-PB-SWF-050",
                             "name":  "2 Years US",
                             "duration":  "2 Years US",
                             "price":  14642
                         },
                         {
                             "id":  "v-PB-SWF-049",
                             "name":  "2 Years Global",
                             "duration":  "2 Years Global",
                             "price":  17332
                         },
                         {
                             "id":  "v-PB-SWF-051",
                             "name":  "3 Years Global PC",
                             "duration":  "3 Years Global PC",
                             "price":  23806
                         },
                         {
                             "id":  "v-PB-SWF-052",
                             "name":  "3 Years Global All Devices",
                             "duration":  "3 Years Global All Devices",
                             "price":  47722
                         }
                     ],
        "imageUrl":  "/assets/images/products/bitdefender.webp",
        "licenseType":  "account_invite",
        "originalPrice":  2000,
        "badge":  "12% OFF"
    },
    {
        "id":  "pb-swf-054",
        "name":  "Bitdefender Internet Security",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  604,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Bitdefender Internet Security license for 1 device(s) — multi-layer ransomware protection, web attack prevention and anti-fraud for the full term.",
        "features":  [
                         "Multi-layer ransomware protection",
                         "Anti-phishing and anti-fraud guard",
                         "Covers 1 device(s)"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-054",
                             "name":  "1 Device 1 Year",
                             "duration":  "1 Device 1 Year",
                             "price":  604
                         },
                         {
                             "id":  "v-PB-SWF-055",
                             "name":  "10 Devices 1 Year",
                             "duration":  "10 Devices 1 Year",
                             "price":  5263
                         },
                         {
                             "id":  "v-PB-SWF-056",
                             "name":  "3 Devices 2026 2 Years",
                             "duration":  "3 Devices 2026 2 Years",
                             "price":  24911
                         }
                     ],
        "imageUrl":  "/assets/images/products/bitdefender.webp",
        "licenseType":  "account_invite",
        "originalPrice":  750,
        "badge":  "19% OFF"
    },
    {
        "id":  "pb-swf-058",
        "name":  "Bitdefender Antivirus Plus",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  2523,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Bitdefender Antivirus Plus license for 1 device(s) — multi-layer ransomware protection, web attack prevention and anti-fraud for the full term.",
        "features":  [
                         "Multi-layer ransomware protection",
                         "Anti-phishing and anti-fraud guard",
                         "Covers 1 device(s)"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-058",
                             "name":  "1 Device 2 Years",
                             "duration":  "1 Device 2 Years",
                             "price":  2523
                         },
                         {
                             "id":  "v-PB-SWF-057",
                             "name":  "5 Devices 3 Years 2025",
                             "duration":  "5 Devices 3 Years 2025",
                             "price":  5360
                         }
                     ],
        "imageUrl":  "/assets/images/products/bitdefender.webp",
        "licenseType":  "account_invite",
        "originalPrice":  3000,
        "badge":  "16% OFF"
    },
    {
        "id":  "pb-swf-059",
        "name":  "McAfee Total Protection",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  1313,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "McAfee Total Protection license for 1 device(s) — antivirus, identity monitoring, safe web browsing and a password manager included.",
        "features":  [
                         "Real-time antivirus protection",
                         "Identity and privacy monitoring",
                         "Secure VPN on unlimited devices"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-SWF-059",
                             "name":  "1 Device 1 Year",
                             "duration":  "1 Device 1 Year",
                             "price":  1313
                         },
                         {
                             "id":  "v-PB-SWF-061",
                             "name":  "3 Devices 1 Year",
                             "duration":  "3 Devices 1 Year",
                             "price":  2210
                         },
                         {
                             "id":  "v-PB-SWF-060",
                             "name":  "1 Device 3 Years",
                             "duration":  "1 Device 3 Years",
                             "price":  4155
                         },
                         {
                             "id":  "v-PB-SWF-062",
                             "name":  "5 Devices 2 Years",
                             "duration":  "5 Devices 2 Years",
                             "price":  5537
                         },
                         {
                             "id":  "v-PB-SWF-063",
                             "name":  "10 Devices 1 Year",
                             "duration":  "10 Devices 1 Year",
                             "price":  5537
                         }
                     ],
        "imageUrl":  "/assets/images/products/mcafee.webp",
        "licenseType":  "account_invite",
        "originalPrice":  1500,
        "badge":  "12% OFF"
    },
    {
        "id":  "pb-swf-064",
        "name":  "Kaspersky Standard 5 Devices 2 Years Europe",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  6925,
        "duration":  "2 Years",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Kaspersky Standard license for 5 devices — award-winning malware engine, safe banking tools and performance optimization.",
        "features":  [
                         "Top-rated antivirus engine",
                         "Safe online banking mode",
                         "Essential protection suite"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/kaspersky.webp",
        "licenseType":  "account_invite",
        "originalPrice":  8000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-swf-065",
        "name":  "Kaspersky Premium 5 Devices 1 Year",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  9695,
        "duration":  "1 Year",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "Kaspersky Premium license for 5 devices — award-winning malware engine, safe banking tools and performance optimization.",
        "features":  [
                         "Top-rated antivirus engine",
                         "Safe online banking mode",
                         "Premium VPN and identity tools"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/kaspersky.webp",
        "licenseType":  "account_invite",
        "originalPrice":  11000,
        "badge":  "12% OFF"
    },
    {
        "id":  "pb-vpn-001",
        "name":  "NordVPN",
        "category":  "software",
        "categoryLabel":  "Subscriptions \u0026 Software",
        "price":  499,
        "duration":  "Choose Plan",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  999,
        "status":  "published",
        "description":  "NordVPN plan (shared line) — 6,000+ servers in 111 countries with Threat Protection and Meshnet.",
        "features":  [
                         "6,000+ RAM-only servers worldwide",
                         "Threat Protection malware blocker",
                         "Managed shared access"
                     ],
        "variants":  [
                         {
                             "id":  "v-PB-VPN-001",
                             "name":  "1 Month Shared",
                             "duration":  "1 Month Shared",
                             "price":  499
                         },
                         {
                             "id":  "v-PB-SWF-025",
                             "name":  "Basic 1 Month Global",
                             "duration":  "Basic 1 Month Global",
                             "price":  1518
                         },
                         {
                             "id":  "v-PB-VPN-002",
                             "name":  "Full Private 1 Month",
                             "duration":  "Full Private 1 Month",
                             "price":  1999
                         },
                         {
                             "id":  "v-PB-SWF-026",
                             "name":  "Basic 3 Months Global",
                             "duration":  "Basic 3 Months Global",
                             "price":  2413
                         },
                         {
                             "id":  "v-PB-SWF-028",
                             "name":  "Basic 1 Year Europe",
                             "duration":  "Basic 1 Year Europe",
                             "price":  3964
                         },
                         {
                             "id":  "v-PB-SWF-027",
                             "name":  "Basic 1 Year Global",
                             "duration":  "Basic 1 Year Global",
                             "price":  4629
                         },
                         {
                             "id":  "v-PB-SWF-031",
                             "name":  "Complete 1 Year with NordPass Global",
                             "duration":  "Complete 1 Year with NordPass Global",
                             "price":  4811
                         },
                         {
                             "id":  "v-PB-VPN-003",
                             "name":  "Full Private 1 Year",
                             "duration":  "Full Private 1 Year",
                             "price":  8500
                         },
                         {
                             "id":  "v-PB-SWF-029",
                             "name":  "Basic 2 Years Global",
                             "duration":  "Basic 2 Years Global",
                             "price":  10592
                         },
                         {
                             "id":  "v-PB-SWF-030",
                             "name":  "Basic 2 Years Europe",
                             "duration":  "Basic 2 Years Europe",
                             "price":  29415
                         }
                     ],
        "imageUrl":  "/assets/images/products/nordvpn.webp",
        "licenseType":  "account_invite",
        "originalPrice":  600,
        "badge":  "17% OFF"
    },
    {
        "id":  "pb-zbp-001",
        "name":  "190cm Stand for Projector",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  1121,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "Universal 190 cm floor stand for projectors — heavy-duty height-adjustable aluminum tripod with 360° rotating mount plate, anti-slip feet and cable management.",
        "features":  [
                         "Smart LED projection",
                         "Screen mirroring",
                         "HDMI + USB",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/projector-stand.webp",
        "licenseType":  "code",
        "originalPrice":  1500,
        "badge":  "25% OFF"
    },
    {
        "id":  "pb-zbp-002",
        "name":  "A10",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  31270,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "A10 smart projector — A10 · 1280x720P Native · 300 ANSI Lumens · Android 11 · WiFi · 4K decoding ·  35dB cooling ·  160° adjustable projection. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1280x720P Native",
                         "300 ANSI lumens",
                         "Android 11",
                         "WiFi wireless",
                         "4K Decoding",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-a10.webp",
        "licenseType":  "code",
        "originalPrice":  36000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-003",
        "name":  "F18",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  88500,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "F18 smart projector — F18 · 1920x1080P Native  · Android 10 · WiFi · 4K support ·  8000:1 Contrast ·  MEMC. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "Android 10",
                         "WiFi wireless",
                         "4K Decoding",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-f18.webp",
        "licenseType":  "code",
        "originalPrice":  102000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-004",
        "name":  "HCS350MAX",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  43070,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HCS350MAX smart projector — HCS350 HCS350MAX · 1280x720P Native  · Android 11 · WiFi 6 · 36 · 000+ game support ·  2 controllers. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1280x720P Native",
                         "Android 11",
                         "WiFi 6 wireless",
                         "4K Decoding",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hcs350max.webp",
        "licenseType":  "code",
        "originalPrice":  49500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-005",
        "name":  "HCS350PRO",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  40710,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HCS350PRO smart projector — HCS350 HCS350PRO · 1280x720P Native  · Android 11 · WiFi 6 · 36 · 000+ game support ·  2 controllers. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1280x720P Native",
                         "Android 11",
                         "WiFi 6 wireless",
                         "4K Decoding",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hcs350pro.webp",
        "licenseType":  "code",
        "originalPrice":  47000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-006",
        "name":  "Hongtop P10",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  41890,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "Hongtop P10 smart projector — Hongtop P10 · 1280x720P Native · 300 ANSI Lumens · Android 10 · WiFi · Portable mini design ·  Electric adjustment of focusing distance. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1280x720P Native",
                         "300 ANSI lumens",
                         "Android 10",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hongtop-p10.webp",
        "licenseType":  "code",
        "originalPrice":  48000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-007",
        "name":  "HY300 Plus",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  26550,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY300 Plus smart projector — DI TONG HY300 Plus · 1280x720P Native · 300 ANSI Lumens · Android 11 · WiFi 6 · Compact portable ·  Support Lifting ·  Electronic Focus. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1280x720P Native",
                         "300 ANSI lumens",
                         "Android 11",
                         "WiFi 6 wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy300-plus.webp",
        "licenseType":  "code",
        "originalPrice":  30500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-008",
        "name":  "HY320 NTV (Netflix Licensed)",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  40710,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY320 NTV (Netflix Licensed) smart projector — Magcubic HY320 NTV · - Native  · - · WiFi · Netflix Licensed ·  Available in White/Black/Grey. Official Netflix-licensed model with built-in apps. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "WiFi wireless",
                         "Netflix Licensed",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy320-ntv.webp",
        "licenseType":  "code",
        "originalPrice":  47000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-009",
        "name":  "HY7 Built-in Battery Projector",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  52510,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "PlayBeat HY7 Built-in Battery Projector smart projector — genuine 720P HD-ready LED projection with smart TV experience, screen mirroring and HDMI/USB connectivity. Backed by PlayBeat hardware warranty and local support.",
        "features":  [
                         "Smart LED projection",
                         "Screen mirroring",
                         "HDMI + USB",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy7.webp",
        "licenseType":  "code",
        "originalPrice":  60500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-010",
        "name":  "Magcubic HY300 PRO",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  21122,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY300 PRO smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy300-pro.webp",
        "licenseType":  "code",
        "originalPrice":  24500,
        "badge":  "14% OFF"
    },
    {
        "id":  "pb-zbp-011",
        "name":  "Magcubic HY300Pro Plus",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  22538,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY300Pro Plus smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy300pro-plus.webp",
        "licenseType":  "code",
        "originalPrice":  26000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-012",
        "name":  "Magcubic HY300X",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  23010,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY300X smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy300x.webp",
        "licenseType":  "code",
        "originalPrice":  26500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-013",
        "name":  "Magcubic HY310",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  34220,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY310 smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy310.webp",
        "licenseType":  "code",
        "originalPrice":  39500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-014",
        "name":  "Magcubic HY320MINI",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  25370,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY320MINI smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy320mini.webp",
        "licenseType":  "code",
        "originalPrice":  29000,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-015",
        "name":  "Magcubic HY320PRO",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  35990,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY320PRO smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy320pro.webp",
        "licenseType":  "code",
        "originalPrice":  41500,
        "badge":  "13% OFF"
    },
    {
        "id":  "pb-zbp-016",
        "name":  "Magcubic HY350 Upgraded+",
        "category":  "hardware",
        "categoryLabel":  "Smart Projectors",
        "price":  42480,
        "duration":  "Ships in 1-3 days",
        "rating":  0,
        "reviewCount":  0,
        "salesCount":  0,
        "inStock":  true,
        "stockCount":  10,
        "status":  "published",
        "description":  "HY350 Upgraded+ smart projector — Magcubic HY450GT · 1920x1080P Native · 1100 ANSI Lumens · Google TV · WiFi · Obstacle Avoidance ·  Screen Recognition. Includes remote, power adapter and full PlayBeat warranty with local after-sales support.",
        "features":  [
                         "1920x1080P Native",
                         "1100 ANSI lumens",
                         "WiFi wireless",
                         "1-year PlayBeat hardware warranty"
                     ],
        "variants":  [

                     ],
        "imageUrl":  "/assets/images/products/proj-hy350.webp",
        "licenseType":  "code",
        "originalPrice":  49000,
        "badge":  "13% OFF"
    }
];
