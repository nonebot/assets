import { defineConfig, tierPresets, type BadgePreset } from "sponsorkit";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;

const date = `${year}-${month.toString().padStart(2, "0")}`;
const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
};

export default defineConfig({
  outputDir: ".",
  formats: ["svg", "png"],
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 25,
      preset: tierPresets.large,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
  ],
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
