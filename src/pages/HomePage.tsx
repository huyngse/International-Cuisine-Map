import { MapContainer, ZoomControl } from "react-leaflet";
import worldData from "@/data/custom.geo.json";
import type { FeatureCollection } from "geojson";
import Country from "@/components/Country";
import { useState } from "react";

const typedWorldData = worldData as FeatureCollection;

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const selectedFeature = typedWorldData.features.find(
    (f) => f.properties?.name === selectedCountry
  );

  return (
    <main className="caret-amber-200">
      <MapContainer
        center={[35.6895, 139.6917]}
        zoom={3}
        style={{ height: "100vh", width: "100%", backgroundColor: "white" }}
        minZoom={2}
        maxZoom={5}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        maxBoundsViscosity={1.0}
        zoomControl={false}
      >
        {typedWorldData.features
          .filter((f) => f.properties?.name !== selectedCountry)
          .map((feature, i) => (
            <Country
              key={i}
              feature={feature}
              isSelected={false}
              onSelect={(name) => setSelectedCountry(name)}
            />
          ))}

        {selectedFeature && (
          <Country
            key={selectedFeature.properties?.name}
            feature={selectedFeature}
            isSelected={true}
            onSelect={(name) => setSelectedCountry(name)}
          />
        )}

        <ZoomControl position="bottomright" />
      </MapContainer>
    </main>
  );
};

export default HomePage;
