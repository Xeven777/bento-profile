"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Play,
  Heart,
  PenBoxIcon,
} from "lucide-react";
import insta1 from "@/assets/insta1.jpeg";
import insta2 from "@/assets/insta2.jpeg";
import insta3 from "@/assets/insta3.jpeg";
import Image from "next/image";
import statuscode from "@/assets/statuscode.jpeg";
import { Card } from "@/components/card";
import anish from "@/assets/anish2.jpg";
import linkdinAnish from "@/assets/anish1.jpg";
import { ContributionGraph } from "@/components/contribution-graph";
import ThemeTogglebutton from "@/components/ThemeBtn";
import VerticalCutReveal from "@/components/fancy/vertical-cut-reveal";
import TextRotate from "@/components/fancy/text-rotate";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full px-4 md:px-16 pt-20 pb-8 grid grid-cols-1 md:grid-cols-7 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:sticky w-full flex flex-col justify-between h-fit top-20 p-4 col-span-3"
        >
          <div className="relative size-48 overflow-hidden rounded-full">
            <Image
              src={anish}
              placeholder="blur"
              alt="Anish Biswas"
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
                "Music Producer 🎧",
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
          <div className="my-auto items-center flex gap-6 md:fixed ml-auto z-50 md:bottom-12">
            <ThemeTogglebutton />
            <p className="text-muted-foreground opacity-60 hidden md:block">
              Made with ❤️
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid col-span-4 pb-10 flex-1 grid-cols-1 gap-4 md:grid-cols-2"
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
          <Card href="https://git.new/anish" className="col-span-1">
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
                <div className="grid grid-cols-3 mt-12">
                  <div className="flex flex-col items-center justify-center p-2">
                    <p className="text-4xl font-mono tracking-tight font-semibold">
                      120+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Stars
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2">
                    <p className="text-4xl font-mono tracking-tight font-semibold">
                      220+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Repositories
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2">
                    <p className="text-4xl font-mono tracking-tight font-semibold">
                      125+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card
            href="https://www.linkedin.com/in/anishbiswas777/"
            className="col-span-2 bg-gradient-to-br from-blue-500/5"
          >
            <div className="flex items-center gap-4 p-4">
              <Linkedin
                className="size-10 rounded-xl py-1 px-2 bg-blue-600"
                color="white"
                fill="white"
                strokeWidth={1}
                stroke="none"
              />
              <div>
                <h2 className="font-medium">Anish Biswas</h2>
                <p className="text-sm text-muted-foreground">
                  Fullstack Developer | Intern
                </p>
              </div>
              <div className="relative ml-auto size-16 overflow-hidden rounded-lg">
                <Image
                  src={linkdinAnish}
                  placeholder="blur"
                  alt="Anish Biswas Linkedin"
                  className="rounded-xl size-20 object-cover"
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-lg bg-muted/20 border px-1">
                <p className="p-2 text-muted-foreground text-sm">
                  Hackathon Winner @StatusCode1
                </p>
                <div className="h-44 overflow-hidden rounded-lg relative">
                  <Image
                    fill
                    fetchPriority="low"
                    placeholder="blur"
                    src={statuscode}
                    alt="StatusCode Winners Aliens -Linkedin Post"
                    className="object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex tracking-tighter justify-between">
                  <p className="p-2 px-4 text-muted-foreground text-sm inline-flex items-center gap-2">
                    <Heart className="size-4 rounded-full bg-rose-700 fill-rose-300 stroke-rose-300 p-0.5 inline-block" />{" "}
                    585 Likes
                  </p>

                  <p className="p-2 px-4 text-muted-foreground text-sm">
                    45 comments
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Blog Card */}
          <Card href="https://blog.anish7.me" className="col-span-2">
            <div className="flex items-center gap-4 p-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-lime-900/10">
                <Image
                  src="https://blastro.vercel.app/favicon.svg"
                  alt="Anish's Blog - Blastro"
                  width={32}
                  height={32}
                  className="rounded-lg p-1"
                />
              </div>
              <div>
                <h2 className="font-medium">My Blog</h2>
                <p className="text-sm hover:underline text-muted-foreground">
                  blog.anish7.me
                </p>
              </div>
            </div>
            <div className="px-4 mt-4 pb-4">
              <div className="rounded-lg bg-muted/20 border p-1 pb-0 transition-all duration-300 hover:bg-muted">
                <div className="relative h-52 overflow-hidden rounded-lg">
                  <Image
                    src="https://blog.anish7.me/opengraph-image.jpg"
                    alt="Anish's Blog - Blastro"
                    className="object-cover hover:scale-105 transition-all duration-500"
                    fill
                  />
                </div>
                <p className="p-2 px-4 text-muted-foreground text-sm inline-flex items-center gap-2">
                  <PenBoxIcon size={12} /> 6+ Blogs
                </p>
              </div>
            </div>
          </Card>

          {/* Contribution Graph */}
          <Card className="col-span-full row-span-1 md:col-span-2">
            <div className="p-4">
              <ContributionGraph />
            </div>
          </Card>

          {/* Social Media Cards */}
          <Card
            href="https://www.instagram.com/anish_biswas_7_/"
            className="group col-span-1"
          >
            <div className="flex items-center gap-3 p-4">
              <Instagram className="size-6 text-rose-500" />
              <div>
                <p className="font-medium">anish_biswas_7_</p>
                <p className="text-sm text-muted-foreground">712+ followers</p>
              </div>
              <Button className="ml-auto bg-gradient-to-br from-rose-600 text-white to-purple-600">
                Follow
              </Button>
            </div>
            <div className="grid grid-cols-3 h-40 border rounded-xl overflow-hidden">
              <Image
                src={insta1}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
              <Image
                src={insta2}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
              <Image
                src={insta3}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
            </div>
          </Card>
          <div className="grid grid-cols-1 gap-2">
            <Card href="https://x.com/xevenbiswas" className="col-span-1">
              <div className="flex items-center gap-3 p-4">
                <Twitter className="size-6 text-blue-500" />
                <div>
                  <p className="font-medium">@xevenbiswas</p>
                  <p className="text-sm text-muted-foreground">
                    108+ followers
                  </p>
                </div>
                <Button className="ml-auto bg-gradient-to-bl from-blue-600 text-white to-cyan-600">
                  Follow
                </Button>
              </div>
            </Card>

            {/* Spotify Card */}
            <Card
              href="https://open.spotify.com/track/5XLXut2VSILvfeUElPNx3p"
              className="h-full bg-gradient-to-r from-green-600/10 dark:to-green-900/10"
            >
              <div className="flex items-start gap-2 p-4">
                <div className="size-12 pt-4">
                  <svg
                    viewBox="0 0 256 256"
                    width="256"
                    className="size-10"
                    height="256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
                      fill="#1ED760"
                    />
                  </svg>
                </div>
                <div className="pt-4">
                  <h2 className="font-medium">Certain Things</h2>
                  <p className="text-sm text-muted-foreground">Xeven</p>
                </div>
                <div className="relative ml-auto size-24 overflow-hidden rounded-lg">
                  <Image
                    src="https://i.scdn.co/image/ab6761670000ecd4cd1b44b074cbf57946694e8b"
                    alt="Album Cover"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
