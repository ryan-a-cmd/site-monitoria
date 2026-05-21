import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgNuvem from "@assets/mago/oficinas/mago-nuvem.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */
export const oficinasAtivasData = [
  {
    id: "oficina-computação-nuvem",
    titulo: "Oficina de Computação em Nuvem (AWS)",
    descricao:
      "Criação de servidores virtuais, publicação de aplicações e gerenciamento básico de recursos em nuvem AWS.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/computacao-em-nuvem",
    imagem: imgNuvem,
    alt: "Mago ao lado ",
  },
  {
    id: "oficina-linux",
    titulo: "Oficina de Linux: Monte sua própria distro!",
    descricao:
      "Compilação e personalização de sistemas Linux, incluindo kernel, boot, rede, segurança e gerenciamento de pacotes.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-linux",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
  },
  {
    id: "web-hacking",
    titulo: "Estudo Dirigido: Web Hacking (Cibersegurança)",
    descricao:
      "Esta oficina oferece uma introdução prática e essencial ao universo de Redes de Computadores sob a ótica da cibersegurança.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Online",
    linkInscricao: "/oficinas/web-hacking",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
  },
  {
    id: "oficina-golang",
    titulo: "Oficina de Go (Golang)",
    descricao:
      "Aprenda os fundamentos de Go, uma das linguagens de programação mais performáticas e demandadas no mercado atual. Do básico de variáveis a estruturas complexas de dados.",
    turmas: ["Segunda a Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-golang",
    imagem: imgFundamentos,
    alt: "Mago estudando fundamentos",
  },
];
