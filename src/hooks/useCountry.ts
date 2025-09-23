import { countryApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useCountry = (country: string) => {
    return useQuery({
        queryKey: ["country", country],
        queryFn: () => countryApi.fetchCountry(country),
        retry: 1,
        staleTime: 1000 * 60 * 60 * 24
    })
};
