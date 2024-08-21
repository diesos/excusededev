const corsOptions = {
    origin: [
      "http://localhost:5173",
      "https://main--diesos-excusededev.netlify.app/",
      "https://diesos-excusededev.netlify.app/",
    ],
    methods: 'GET, POST',
    credentials: true,
  };

module.exports = corsOptions;
