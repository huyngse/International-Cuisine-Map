export type CountryName = "Costa Rica" | "Nicaragua" | "Haiti" | "Dominican Rep." | "El Salvador" | "Guatemala" | "Cuba" | "Honduras" | "United States of America" | "Canada" | "Mexico" | "Belize" | "Panama" | "Greenland" | "Bahamas" | "Trinidad and Tobago" | "Puerto Rico" | "Jamaica" | "Indonesia" | "Malaysia" | "Cyprus" | "India" | "China" | "Israel" | "Palestine" | "Lebanon" | "Syria" | "South Korea" | "North Korea" | "Bhutan" | "Oman" | "Uzbekistan" | "Kazakhstan" | "Tajikistan" | "Mongolia" | "Vietnam" | "Cambodia" | "United Arab Emirates" | "Georgia" | "Azerbaijan" | "Turkey" | "Laos" | "Kyrgyzstan" | "Armenia" | "Iraq" | "Iran" | "Qatar" | "Saudi Arabia" | "Pakistan" | "Thailand" | "Kuwait" | "Timor-Leste" | "Brunei" | "Myanmar" | "Bangladesh" | "Afghanistan" | "Turkmenistan" | "Jordan" | "Nepal" | "Yemen" | "N. Cyprus" | "Philippines" | "Sri Lanka" | "Taiwan" | "Japan" | "Chile" | "Bolivia" | "Peru" | "Argentina" | "Suriname" | "Guyana" | "Brazil" | "Uruguay" | "Ecuador" | "Colombia" | "Paraguay" | "Venezuela" | "Falkland Is." | "Ethiopia" | "S. Sudan" | "Somalia" | "Kenya" | "Malawi" | "Tanzania" | "Somaliland" | "Morocco" | "W. Sahara" | "Congo" | "Dem. Rep. Congo" | "Namibia" | "South Africa" | "Libya" | "Tunisia" | "Zambia" | "Sierra Leone" | "Guinea" | "Liberia" | "Central African Rep." | "Sudan" | "Djibouti" | "Eritrea" | "Côte d'Ivoire" | "Mali" | "Senegal" | "Nigeria" | "Benin" | "Angola" | "Botswana" | "Zimbabwe" | "Chad" | "Algeria" | "Mozambique" | "eSwatini" | "Burundi" | "Rwanda" | "Uganda" | "Lesotho" | "Cameroon" | "Gabon" | "Niger" | "Burkina Faso" | "Togo" | "Ghana" | "Guinea-Bissau" | "Egypt" | "Mauritania" | "Eq. Guinea" | "Gambia" | "Madagascar" | "France" | "Ukraine" | "Belarus" | "Lithuania" | "Russia" | "Czechia" | "Germany" | "Estonia" | "Latvia" | "Norway" | "Sweden" | "Finland" | "Luxembourg" | "Belgium" | "North Macedonia" | "Albania" | "Kosovo" | "Spain" | "Denmark" | "Romania" | "Hungary" | "Slovakia" | "Poland" | "Ireland" | "United Kingdom" | "Greece" | "Austria" | "Italy" | "Switzerland" | "Netherlands" | "Serbia" | "Croatia" | "Slovenia" | "Bulgaria" | "Montenegro" | "Bosnia and Herz." | "Portugal" | "Moldova" | "Iceland" | "Papua New Guinea" | "Australia" | "Fiji" | "New Zealand" | "New Caledonia" | "Solomon Is." | "Vanuatu" | "Antarctica" | "Fr. S. Antarctic Lands";

type NativeName = {
    official: string;
    common: string;
};

type Name = {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
};

type Currency = {
    symbol: string;
    name: string;
};

type IDD = {
    root: string;
    suffixes: string[];
};

type Demonym = {
    f: string;
    m: string;
};

type Demonyms = Record<string, Demonym>;

type Translation = {
    official: string;
    common: string;
};

type Translations = Record<string, Translation>;

type Maps = {
    googleMaps: string;
    openStreetMaps: string;
};

type Car = {
    signs: string[];
    side: string;
};

type Flags = {
    png: string;
    svg: string;
    alt: string;
};

type CoatOfArms = {
    png: string;
    svg: string;
};

type CapitalInfo = {
    latlng: [number, number];
};

type PostalCode = {
    format: string;
    regex: string;
};

export type Country = {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, Currency>;
    idd: IDD;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    latlng: [number, number];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    cca3: string;
    translations: Translations;
    flag: string;
    maps: Maps;
    population: number;
    gini: Record<string, number>;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
};