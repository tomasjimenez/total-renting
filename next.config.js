/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.autobild.es',
      },
      {
        protocol: 'https',
        hostname: 'www.bmw.es',
      },
      {
        protocol: 'https',
        hostname: 'tesla-cdn.thron.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.elektroauto-vergleich.de',
      },
      {
        protocol: 'https',
        hostname: 'www.motor.es',
      },
      {
        protocol: 'https',
        hostname: 'www.ludego.com',
      },
      {
        protocol: 'https',
        hostname: 'grupojmc.es',
      },
      {
        protocol: 'https',
        hostname: 'www.mini.ie',
      },
      {
        protocol: 'https',
        hostname: 'www.carzaocasion.com',
      },
      {
        protocol: 'https',
        hostname: 'www.autocasion.com',
      },
      {
        protocol: 'https',
        hostname: 'rentingplus.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mercedes-benz.es',
      },
      {
        protocol: 'https',
        hostname: 'www.audi.es',
      },
      {
        protocol: 'https',
        hostname: 'www.ford.es',
      },
      {
        protocol: 'https',
        hostname: 'www.tesla.com',
      },
      {
        protocol: 'https',
        hostname: 'www.toyota.es',
      },
      {
        protocol: 'https',
        hostname: 'www.hyundai.es',
      },
      {
        protocol: 'https',
        hostname: 'www.renault.es',
      },
      {
        protocol: 'https',
        hostname: 'www.skoda.es',
      },
      {
        protocol: 'https',
        hostname: 'www.peugeot.es',
      },
      {
        protocol: 'https',
        hostname: 'www.citroen.es',
      },
      {
        protocol: 'https',
        hostname: 'scene7.toyota.eu',
      },
      {
        protocol: 'https',
        hostname: 'cdn.motor1.com',
      },
      {
        protocol: 'https',
        hostname: 'e00-elmundo.uecdn.es',
      },
      {
        protocol: 'https',
        hostname: 'quadis.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'content.media.ccdn.es',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.autonocion.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dealerk.es',
      },
      {
        protocol: 'https',
        hostname: 'images.motorflash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dravit.es',
      },
      {
        protocol: 'https',
        hostname: 'www.tufurgoneta.es',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.mediagach.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-xy.drivek.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.maxterauto.com',
      },
      {
        protocol: 'https',
        hostname: 'images0.autocasion.com',
      },
      {
        protocol: 'https',
        hostname: 'avolo.net',
      },
      {
        protocol: 'https',
        hostname: 'd2v9mob6nwdg55.cloudfront.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vehiculos',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 