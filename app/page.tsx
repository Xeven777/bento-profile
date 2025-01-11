"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Play } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/card";
import anish from "@/assets/anish2.jpg";
import { ContributionGraph } from "@/components/contribution-graph";
import ThemeTogglebutton from "@/components/ThemeBtn";
import VerticalCutReveal from "@/components/fancy/vertical-cut-reveal";
import TextRotate from "@/components/fancy/text-rotate";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full px-4 md:px-16 pt-20 pb-8 grid grid-cols-7 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-8 p-2 col-span-3 h-fit"
        >
          <div className="relative size-48 overflow-hidden rounded-full">
            <Image
              src={anish}
              alt="anish biswas"
              className="object-cover hover:scale-105 transition-all duration-500"
              fill
              priority
            />
          </div>
          <h1 className="mt-6 pl-2 text-4xl md:text-5xl tracking-tighter font-bold bg-gradient-to-b from-foreground via-foreground/80 to-muted-foreground/50 text-transparent bg-clip-text text-glow cursor-crosshair">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.03}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.8,
              }}
            >
              {`Anish Biswas`}
            </VerticalCutReveal>
          </h1>
          <div className="mt-4 flex pl-2 text-base md:text-xl text-muted-foreground">
            <span>Im a</span>
            <TextRotate
              texts={[
                "Developer 🖥️",
                "Designer 🎨",
                "Football fan ⚽",
                "sleepyhead 😴",
                "meme lover 🤣",
                "LEGEND 🕶️",
              ]}
              mainClassName="px-2 text-foreground"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 50, stiffness: 400 }}
              rotationInterval={2300}
            />
          </div>
          <ThemeTogglebutton className="mt-10" />
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
          className="grid col-span-4 flex-1 grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Portfolio Card */}
          <Card
            className="col-span-full md:col-span-2"
            href="https://anish7.me"
          >
            <div className="flex items-center gap-4 p-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#84cc16]/10">
                <Image
                  src="/primary.svg"
                  alt="Anish Biswas Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h2 className="font-medium">My New Portfolio</h2>
                <p className="text-sm hover:underline text-muted-foreground">
                  anish7.me
                </p>
              </div>
            </div>
            <div className="px-4 pb-4 mt-10">
              <div className="relative h-52 overflow-hidden rounded-lg">
                <Image
                  src="https://anish7.me/opengraph-image.jpg?deaf77301f5639ff"
                  alt="Portfolio Preview"
                  className="object-cover hover:scale-105 transition-all duration-500"
                  fill
                />
              </div>
            </div>
          </Card>

          {/* GitHub Card */}
          <Card href="http://git.new/anish" className="col-span-1">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl dark:bg-blue-500/10 bg-slate-900/10">
                  <Github className="size-6" />
                </div>
                <div>
                  <h2 className="font-medium">Anish</h2>
                  <p className="text-sm hover:underline text-muted-foreground">
                    xeven777
                  </p>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <div className="px-4 pb-4 mt-10">
              <div className="relative h-52">
                <div className="flex gap-4 items-start">
                  <img
                    src="https://avatars.githubusercontent.com/u/115650165?v=4"
                    alt="Anish Biswas"
                    className="object-cover rounded-xl size-20"
                  />
                  <div className="py-1 space-y-2">
                    <h2 className="text-lg text">@Xeven777</h2>
                    <p className="line-clamp-2 text-xs text-muted-foreground break-words ellipsis">
                      ♦️Learning. Growing. Blooming✨ | Passionate developer
                      with a love for problem-solving , efficient and creative
                      thinking 🔥💫
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contribution Graph */}
          <Card className="col-span-full row-span-1 md:col-span-2">
            <div className="p-4">
              <ContributionGraph />
              <p className="mt-2 text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
                  OctaNet Services
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Now Playing on Spotify
                </p>
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
