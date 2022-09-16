export interface Config {
  name: string;
  description: string;
  icons: Icon[];
}

interface Icon {
  src: string;
  sizes: string;
  type: string;
}

export interface Manifest {
  name: string;
  description: string;
  icons: Icon[];
}
