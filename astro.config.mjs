// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Inicio",
      social: {
        github: "https://github.com/RadikeCosa/coordination-manual",
      },

      sidebar: [
        {
          label: "Introducción",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "La Atencion Domiciliaria",
              slug: "intro/atencion-domiciliaria",
            },
            {
              label: "Importancia del rol del coordinador",
              slug: "intro/rol",
            },
          ],
        },
        {
          label: "Perfil",
          autogenerate: { directory: "perfil" },
        },
      ],
    }),
  ],
});
