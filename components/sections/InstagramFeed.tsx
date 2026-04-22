"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, PlayCircle } from "lucide-react";

const posts = [
  {
    id: 1,
    mediaType: "image",
    image: "/images/insta_advertise.jpg",
    likes: 412,
    comments: 46,
    caption: "Street session drills with intense energy",
  },
  {
    id: 2,
    mediaType: "video",
    image: "/images/insta_dance_vedio.jpg",
    likes: 603,
    comments: 72,
    caption: "Dhatingnaach prep night",
  },
  {
    id: 3,
    mediaType: "image",
    image: "/images/insta_advertisement.jpg",
    likes: 377,
    comments: 29,
    caption: "Bollywood choreography hour",
  },
  {
    id: 4,
    mediaType: "video",
    image: "/images/image_trophy.jpg",
    likes: 721,
    comments: 94,
    caption: "Stage rehearsal highlights",
  },
  {
    id: 5,
    mediaType: "image",
    image: "/images/Logo.jpg",
    likes: 258,
    comments: 18,
    caption: "Academy identity drop",
  },
  {
    id: 6,
    mediaType: "image",
    image: "/images/insta_dance_vedio.jpg",
    likes: 489,
    comments: 55,
    caption: "Kids batch energy blast",
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Live Instagram Vibe</h2>
          <p className="mt-4 text-slate-300">
            Updated showcase of class snippets, reels, and event energy from our dance community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative aspect-square">
                <Image src={post.image} alt={post.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80" />

                {post.mediaType === "video" ? (
                  <div className="absolute right-3 top-3 rounded-full bg-black/45 p-1.5 text-white">
                    <PlayCircle className="h-4 w-4" />
                  </div>
                ) : null}

                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 text-xs text-white transition-transform duration-300 group-hover:translate-y-0">
                  <p className="mb-2 line-clamp-2 text-sm">{post.caption}</p>
                  <div className="flex items-center gap-3 text-slate-100">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 text-pink-300" /> {post.likes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5 text-cyan-300" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
