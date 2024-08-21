const allowedOrigins = [
  "https://diesos-excusededev.netlify.app/",
  "https://main--diesos-excusededev.netlify.app/",
  "http://localhost:5173",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST",
  credentials: true,
};

module.exports = corsOptions;
