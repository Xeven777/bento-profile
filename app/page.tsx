"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Play,
} from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/card";
import { ContributionGraph } from "@/components/contribution-graph";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="sticky top-8 h-fit w-80 shrink-0"
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              className="object-cover"
              fill
              priority
            />
          </div>
          <h1 className="mt-6 text-4xl font-bold">Anish Biswas</h1>
          <p className="mt-2 text-zinc-600">Wassup guys ;)</p>
        </motion.div>

        {/* Scrollable Right Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Portfolio Card */}
          <Card className="col-span-full md:col-span-2" href="#">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#84cc16]/10">
                <Image
                  src="/placeholder.svg"
                  alt="Portfolio Icon"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-medium">My New Portfolio</h2>
                <p className="text-sm text-zinc-600">anish@vercel.app</p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="relative h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Portfolio Preview"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </Card>

          {/* GitHub Card */}
          <Card href="#" className="col-span-1">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5" />
                <span className="font-medium">Anish</span>
              </div>
              <button className="rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium">
                Follow
              </button>
            </div>
          </Card>

          {/* Contribution Graph */}
          <Card className="col-span-full row-span-1 md:col-span-2">
            <div className="p-4">
              <ContributionGraph />
              <p className="mt-2 text-sm text-zinc-600">
                5481 contributions in the last year
              </p>
            </div>
          </Card>

          {/* Old Portfolio Card */}
          <Card href="#" className="col-span-2">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                <Image
                  src="/placeholder.svg"
                  alt="Old Portfolio"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-medium">my old portfolio</h2>
                <p className="text-sm text-zinc-600">
                  next-portfolio7.vercel.app
                </p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="relative h-[200px] overflow-hidden rounded-lg bg-yellow-400">
                <Image
                  src="/placeholder.svg"
                  alt="Old Portfolio Preview"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card href="#" className="col-span-2">
            <div className="flex items-center gap-4 p-4">
              <Linkedin className="h-6 w-6 text-[#0077b5]" />
              <div>
                <h2 className="font-medium">Anish Biswas - Web Developer</h2>
                <p className="text-sm text-zinc-600">OctaNet Services</p>
              </div>
              <div className="relative ml-auto h-16 w-16 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="LinkedIn Profile"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </Card>

          {/* Social Media Cards */}
          <Card href="#" className="group col-span-1">
            <div className="flex items-center gap-3 p-4">
              <Instagram className="h-5 w-5 text-[#e4405f]" />
              <div>
                <p className="font-medium">anish_biswas_7</p>
                <button className="text-sm font-medium text-blue-500">
                  Follow
                </button>
              </div>
            </div>
          </Card>

          <Card href="#" className="group col-span-1">
            <div className="flex items-center gap-3 p-4">
              <Twitter className="h-5 w-5 text-[#1da1f2]" />
              <div>
                <p className="font-medium">@biswas</p>
                <button className="text-sm font-medium text-blue-500">
                  Follow
                </button>
              </div>
            </div>
          </Card>

          {/* Spotify Card */}
          <Card href="#" className="col-span-2">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1ed760]/10">
                <Play className="h-6 w-6 text-[#1ed760]" />
              </div>
              <div>
                <h2 className="font-medium">Certain Things</h2>
                <p className="text-sm text-zinc-600">Now Playing on Spotify</p>
              </div>
              <div className="relative ml-auto h-16 w-16 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Album Cover"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
