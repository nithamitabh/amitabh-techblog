import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="w-48 h-56" >
            <AvatarImage
              className="object-cover rounded-full " // Adjust size (w-32 h-32) as needed
              src="/4.jpg" // Ensure the image is accessible in your public folder as '/4.jpg'
              alt={siteConfig.author}
            />

            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          I&apos;m a software developer with experience in web development. I enjoy
          creating web applications and learning new technologies. I&apos;m always
          looking for new challenges and opportunities to grow as a developer.I currently
          doing my Dual Degree in Electronics and Communication Engineering from NIT Hamirpur.
          This is my presonal blog site where i post latest tech hacks and programming related content in form of docs.
        </p>
      </div>
    </div>
  );
}
