export interface Catalog {
    flags: Flag ;
    altSpellings: string[];
    name: Name;
    cca2: string;
    cca3: string;
    idd: IDD;
    area: number;
    capital: string[];
    continents: string[];
    timezones: string[];
    region: string;
    startOfWeek: string;
}

export interface Name {
    nativeName: string;
    official: string;
    common: string;
}

export interface IDD {
    suffixes: string;
    root: string;
}

export interface Flag {
    alt: string;
    png: string;
    svg: string;
}