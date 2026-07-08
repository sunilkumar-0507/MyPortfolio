// Maps the string keys used in data.js to real branded SVG icons.
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiJsonwebtokens,
  SiMysql,
  SiHostinger,
  SiLinux,
  SiFirebase,
  SiVercel,
  SiGit,
  SiAndroidstudio,
  SiPostman,
  SiPhp,
  SiWordpress,
  SiFigma,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { TbApi, TbBrandCSharp, TbBrandReactNative, TbBrandVisualStudio } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaServer,
  FaBuilding,
  FaShoppingCart,
  FaMobileAlt,
  FaTachometerAlt,
  FaClipboardList,
  FaDatabase,
  FaCloudUploadAlt,
  FaTools,
  FaLightbulb,
  FaWindows,
} from 'react-icons/fa'

// Skill / tech icons with their brand colors.
export const skillIcons = {
  react: { Icon: SiReact, color: '#61DAFB' },
  reactnative: { Icon: TbBrandReactNative, color: '#61DAFB' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  js: { Icon: SiJavascript, color: '#F7DF1E' },
  html: { Icon: SiHtml5, color: '#E34F26' },
  css: { Icon: SiCss, color: '#1572B6' },
  tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
  bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  csharp: { Icon: TbBrandCSharp, color: '#9b6dff' },
  aspnet: { Icon: SiDotnet, color: '#512BD4' },
  efcore: { Icon: SiDotnet, color: '#7c5cff' },
  api: { Icon: TbApi, color: '#06b6d4' },
  jwt: { Icon: SiJsonwebtokens, color: '#F050A0' },
  sqlserver: { Icon: DiMsqlServer, color: '#CC2927' },
  mysql: { Icon: SiMysql, color: '#4479A1' },
  hostinger: { Icon: SiHostinger, color: '#673DE6' },
  linux: { Icon: SiLinux, color: '#FCC624' },
  firebase: { Icon: SiFirebase, color: '#FFCA28' },
  vercel: { Icon: SiVercel, color: '#e6e6e6' },
  iis: { Icon: FaWindows, color: '#0078D6' },
  visualstudio: { Icon: TbBrandVisualStudio, color: '#A179DC' },
  vscode: { Icon: VscVscode, color: '#0098FF' },
  git: { Icon: SiGit, color: '#F05032' },
  github: { Icon: FaGithub, color: '#e6e6e6' },
  androidstudio: { Icon: SiAndroidstudio, color: '#3DDC84' },
  postman: { Icon: SiPostman, color: '#FF6C37' },
  // legacy keys kept for safety
  php: { Icon: SiPhp, color: '#8993be' },
  wordpress: { Icon: SiWordpress, color: '#3858E9' },
  figma: { Icon: SiFigma, color: '#F24E1E' },
}

// Service icons.
export const serviceIcons = {
  webapp: FaLaptopCode,
  enterprise: FaBuilding,
  ecommerce: FaShoppingCart,
  mobile: FaMobileAlt,
  api: FaServer,
  dashboard: FaTachometerAlt,
  management: FaClipboardList,
  database: FaDatabase,
  deploy: FaCloudUploadAlt,
  maintenance: FaTools,
  consulting: FaLightbulb,
}

// Contact icons.
export const contactIcons = {
  phone: FaPhone,
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  location: FaMapMarkerAlt,
}
