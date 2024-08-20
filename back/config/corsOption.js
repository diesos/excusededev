const corsOptions = {
    origin: ['http://localhost:5173', 'https://diesos-excusededev.netlify.app/'],
    methods: 'GET, POST',
    credentials: true,
  };

module.exports = corsOptions;
