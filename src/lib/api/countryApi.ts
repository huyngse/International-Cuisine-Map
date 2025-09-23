import type { Country } from "@/types";
import axios from "axios";

export const countryApi = {
    fetchCountry: async (country: string): Promise<Country> => {
        const res = await axios.get<Country[]>(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(country).toLowerCase()}?fullText=true`
        );
        return res.data[0];
    }
}