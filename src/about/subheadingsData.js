import data from "../assets/details.json";

const subheadingsData = {
  1: [
    {
      title: "About Me",
      content: data.body.description,
    },
  ],
  2: data.education,
  3: data.experience,
  4: data.body.links
};

export default subheadingsData;
