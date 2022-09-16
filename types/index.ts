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
  // theme_color: string;
  // background_color: string;
  // display: string;
  // start_url: string;
  // scope: string;
  // short_name: string;
  // orientation: string;
  // screenshots: Screenshot[];
}
