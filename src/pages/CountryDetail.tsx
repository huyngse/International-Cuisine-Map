import { useCountry } from "@/hooks/useCountry";

interface CountryDetailProps {
  country: string;
}

const CountryDetail = ({ country }: CountryDetailProps) => {
  const { data, isLoading, isError } = useCountry(country);

  if (isLoading) {
    return (
      <section className="p-5">
        <p>Loading...</p>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="p-5">
        <h1 className="font-bold text-3xl">{country}</h1>
        <p className="text-gray-500">No data found</p>
      </section>
    );
  }

  return (
    <section className="p-5 space-y-3">
      <h1 className="font-bold text-3xl">{data.name.common}</h1>
      <img
        src={data.flags.png}
        alt={`${data.name.common} flag`}
        className="w-40 border"
      />
      <p>
        <span className="font-semibold">Official:</span> {data.name.official}
      </p>
      <p>
        <span className="font-semibold">Capital:</span>{" "}
        {data.capital?.[0] ?? "N/A"}
      </p>
      <p>
        <span className="font-semibold">Region:</span> {data.region}
      </p>
      <p>
        <span className="font-semibold">Population:</span>{" "}
        {data.population.toLocaleString()}
      </p>
    </section>
  );
};

export default CountryDetail;
