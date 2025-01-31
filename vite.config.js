import process from 'process';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? "/link-page/" : "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename,
  server: {
    host: true, 
    port: 5173, 
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
    allowedHosts: ["9ebc-102-90-96-163.ngrok-free.app"],
  },
  
});
