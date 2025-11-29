import React from 'react';
import { Client, Service, Work } from './types';
import { Paintbrush, Layout, Camera } from 'lucide-react';

/* 
  DATA CUSTOMIZATION GUIDE:
  - Update the client list below with real image paths if different.
  - Ratings are set to 5 as requested.
  - Review text is simulated to look professional.
*/

export const CLIENTS: Client[] = [
  {
    name: "Tonde Gamer",
    image: "client1.jpg",
    channelLink: "https://youtube.com/@tondegamer?si=3DUL4hjLXXqeK0kR",
    review: "Sujan is an absolute visionary! The thumbnails and channel art he designed completely transformed my branding. Highly recommended for any serious creator.",
    rating: 5
  },
  {
    name: "Laka Gaming",
    image: "client2.jpg",
    channelLink: "https://www.youtube.com/@LakaGamingz",
    review: "Incredible attention to detail. Sujan understood my gaming niche perfectly and delivered graphics that instantly boosted my CTR.",
    rating: 5
  },
  {
    name: "ABHISHEK YT",
    image: "client3.jpg",
    channelLink: "https://youtube.com/@-abhishek_yt?si=O20L3SXT_rIzxWqv",
    review: "Fast turnaround and high quality. The visual effects in the edits were exactly what I needed to keep my audience engaged.",
    rating: 5
  },
  {
    name: "chunu vlogs",
    image: "client4.jpg",
    channelLink: "https://www.youtube.com/@Chunuvlogs",
    review: "Professional and creative. Sujan brought a fresh look to my vlog thumbnails that really makes them pop in the feed.",
    rating: 5
  },
  {
    name: "ZEROTH YT",
    image: "client5.jpg",
    channelLink: "https://www.youtube.com/@zerothyt10",
    review: "A pleasure to work with. He listens to feedback and delivers designs that are top-tier in the industry. 10/10 service.",
    rating: 5
  },
  {
    name: "MOTEY F",
    image: "client6.jpg",
    channelLink: "https://www.youtube.com/@moteyff111",
    review: "Sujan has a unique style that separates you from the competition. The best graphic designer I've worked with so far.",
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    title: "Thumbnail Design",
    description: "High-CTR thumbnails tailored for gaming and vlog channels that grab attention instantly.",
    icon: <Layout />
  },
  {
    title: "Channel Branding",
    description: "Complete visual identity packages including logos, banners, and overlays.",
    icon: <Paintbrush />
  },
  {
    title: "Social Media Graphics",
    description: "Eye-catching posts and stories for Instagram, Facebook, and LinkedIn.",
    icon: <Camera />
  }
];

export const PORTFOLIO_ITEMS: Work[] = [
  { id: 1, image: "thumbnail1.jpg", title: "Gaming Highlight", category: "Thumbnail" },
  { id: 2, image: "thumbnail2.jpg", title: "Vlog Adventure", category: "Thumbnail" },
  { id: 3, image: "thumbnail3.jpg", title: "Tech Review", category: "Thumbnail" },
  { id: 4, image: "thumbnail4.jpg", title: "Stream Overlay", category: "Branding" },
  { id: 5, image: "thumbnail5.jpg", title: "Social Campaign", category: "Social Media" },
  { id: 6, image: "thumbnail6.jpg", title: "Esports Tournament", category: "Thumbnail" },
  { id: 7, image: "thumbnail7.jpg", title: "Reaction Video", category: "Thumbnail" },
  { id: 8, image: "thumbnail8.jpg", title: "Lifestyle Vlog", category: "Thumbnail" },
  { id: 9, image: "thumbnail9.jpg", title: "Product Launch", category: "Branding" },
];