import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Layout from "./layout";
import clsx from "clsx";

export default function Home() {
  return (
    <div>
      {/* big landing part */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10" style={{ backgroundColor: "#4086DD", borderRadius: '30px' }}>
        <div className="inline-block max-w-xl text-left mt-8">
          <h1 className={(title({ size: "lg" }))} style={{ color: "white" }}>SomaliMindMatters </h1>
          <h2 className={subtitle({ class: "mt-4" })} style={{ color: "white" }}>
            Soothing Minds, Building Bridges: Welcome to Somali Mind Matters - Destigmatizing Mental Health in Toronto's Somali Community.
          </h2>
          <button
            style={{
              backgroundColor: "white",
              color: "#4086DD",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%", // Make it wide
              maxWidth: "200px", // Limit maximum width
              display: "block", // Set to block-level element
              margin: "0 auto", // Center horizontally
            }}
          >
            Learn More
          </button>
        </div>

        <div className="mb-3 mt-3 md:ml-8">
          <img src="/earth-globe-with-continents-maps.png" alt="Earth Globe" width='512px' height='512' />
        </div>
      </section>

      {/* About Us */}
      <section className="flex flex-wrap items-center justify-center py-8 md:py-10">
        {/* left Div */}
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-4xl text-blue-500 font-bold">About Us</h1>
          <div className="mt-4 text-lg md:text-xl">
            <p className="text-zinc-700">
              Somali Mind Matters is a dedicated platform committed to breaking the silence surrounding mental health within the vibrant Somali-Toronto Diaspora community. Our mission is to provide culturally sensitive resources, support, and advocacy, empowering individuals to prioritize their mental wellbeing without fear or stigma. Through collaboration, education, and compassion, we strive to foster a community where every voice is heard, and every mind matters.
            </p>
          </div>
        </div>
        {/* Right div */}
        <div className="w-full md:w-1/2 px-8">
          <div className="mx-auto md:mx-0">
            <ul className="list-outside list-decimal flex flex-col items-start space-y-4">
              <li className="flex items-center text-blue-500">
                <div className="w-6 h-6 mt-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white">1</span>
                </div>
                <p className="ml-4 mt-5 text-zinc-700 font-semibold font-['Merriweather Sans']">Destigmatize mental health issues in the somali community.</p>
              </li>
              <li className="flex items-center text-blue-500">
                <div className="w-6 h-6 mt-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white">2</span>
                </div>
                <p className="ml-4 mt-5 text-zinc-700 font-semibold font-['Merriweather Sans']">Empower individuals to prioritize their mental well-being.</p>
              </li>
              <li className="flex items-center text-blue-500">
                <div className="w-6 h-6 mt-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white">3</span>
                </div>
                <p className="ml-4 mt-5 text-zinc-700 font-semibold font-['Merriweather Sans']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="w-full text-center mt-8">
        <img src="/somali-girls.jpeg" alt="Image" className="mx-auto max-w-6xl" />
      </div>

      {/*  */}
    </div>
  );
}
