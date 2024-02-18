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
  );
}
