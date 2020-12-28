const settings = require("./data/settings.json");

module.exports = {
  async redirects() {
    const allYears = settings.map(({ year }) => year);
    return (yearRedirects = allYears.map((year) => ({
      source: `/${year}`,
      destination: `/${year}/en`,
      permanent: true,
    })));
    return [
      {
        source: "/",
        destination: "/2019/en",
        permanent: true,
      },
      ...yearRedirects,
    ];
  },
};
