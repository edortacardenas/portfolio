import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/v1/create-qr-code/**', // Esto permite cualquier imagen desde esta ruta específica
      },
      // Si tienes otras imágenes de otros dominios externos, añádelos aquí.
      // Por ejemplo, si tus `exp.imagePlaceholder` vienen de 'cdn.example.com':
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      //   port: '',
      //   pathname: '/**', // Permite cualquier imagen de este hostname
      // },
    ],
  },
};

export default nextConfig;
