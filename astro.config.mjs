// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Manual de Coordinación",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introducción",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Objetivos del Manual", slug: "guides/objetivos" },
            {
              label: "Importancia del rol del coordinador",
              slug: "guides/importancia",
            },
            { label: "Alcance del manual", slug: "guides/alcance" },
          ],
        },
        {
          label: "Perfil del Coordinador",
          autogenerate: { directory: "perfil" },
        },
        {
          label: "Procedimientos Operativos",
          autogenerate: { directory: "procedimientos" },
        },
        {
          label: "Protocolos de Comunicación",
          autogenerate: { directory: "protocolos" },
        },
        {
          label: "Gestion de Crisis y Resolucion de Problemas",
          autogenerate: { directory: "gestion" },
        },
        {
          label: "Indicadores de Desempeño y Evaluacion",
          autogenerate: { directory: "indicadores" },
        },
        {
          label: "Capacitacion y Desarrollo del Equipo",
          autogenerate: { directory: "capacitacion" },
        },
        {
          label: "Protocolos de Comunicación",
          autogenerate: { directory: "protocolos" },
        },
        {
          label: "Normativa y Documentación Legal",
          autogenerate: { directory: "normativa" },
        },
        {
          label: "Conclusiones y Recomendaciones Finales",
          autogenerate: { directory: "conclusiones" },
        },
      ],
    }),
  ],
});
