import { defineConfig } from "sponsorkit";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;

const date = `${year}-${month.toString().padStart(2, "0")}`;

export default defineConfig({
  outputDir: ".",
  formats: ["svg", "png"],

  renders: [
    {
      name: `sponsors.${date}`,
      width: 1000,
      includePastSponsors: false,
      renderer: "circles",
    },
    {
      name: "sponsors.all",
      width: 1000,
      includePastSponsors: true,
      renderer: "circles",
    },
    {
      name: "sponsors",
      width: 800,
      includePastSponsors: true,
      renderer: "tiers",
    },
    {
      name: "sponsors.wide",
      width: 1800,
      includePastSponsors: true,
      renderer: "tiers",
    },
    {
      name: "sponsors.part1",
      width: 800,
      includePastSponsors: true,
      renderer: "tiers",
      filter(sponsor) {
        return sponsor.monthlyDollars >= 9.9;
      },
    },
    {
      name: "sponsors.part2",
      width: 800,
      includePastSponsors: true,
      renderer: "tiers",
      filter(sponsor) {
        return sponsor.monthlyDollars < 9.9;
      },
    },
  ],
});
