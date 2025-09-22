import { MapContainer, TileLayer, ZoomControl, GeoJSON } from "react-leaflet";
import worldData from "@/data/custom.geo.json";
import type { FeatureCollection } from "geojson";
import Country from "@/components/Country";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const typedWorldData = worldData as FeatureCollection;

type DisplayMode = "detailed" | "interactive" | "satellite";

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("interactive");

  const selectedFeature = typedWorldData.features.find(
    (f) => f.properties?.name === selectedCountry
  );

  const getMapLayers = () => {
    if (displayMode === "detailed") {
      return (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      );
    }

    if (displayMode === "satellite") {
      return (
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
      );
    }

    if (displayMode === "interactive") {
      const otherCountries = typedWorldData.features.filter(
        (f) => f.properties?.name !== selectedCountry
      );

      return (
        <>
          {otherCountries.map((feature) => (
            <Country
              key={feature.properties?.name}
              feature={feature}
              isSelected={false}
              onSelect={setSelectedCountry}
            />
          ))}
          {selectedFeature && (
            <Country
              key={selectedFeature.properties?.name}
              feature={selectedFeature}
              isSelected={true}
              onSelect={setSelectedCountry}
            />
          )}
        </>
      );
    }
  };

  return (
    <main className="relative">
      <nav className="absolute w-full top-0 left-1/2 transform -translate-x-1/2 z-50 bg-accent p-3 rounded shadow flex gap-3 items-center justify-between">
        <div className="flex gap-2 items-center">
          <label className="font-medium">Display Mode:</label>
          <Select
            value={displayMode}
            onValueChange={(value) => setDisplayMode(value as DisplayMode)}
          >
            <SelectTrigger className="w-[150px]" size="sm">
              <SelectValue placeholder="<< Select mode >>" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="interactive">Interactive</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
              <SelectItem value="satellite">Satellite</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
      <div className="w-full h-screen relative z-0">
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
          {getMapLayers()}
          {selectedFeature && (
            <GeoJSON
              data={selectedFeature}
              style={{
                color: "#ef4444",
                weight: 2,
                fill: false,
              }}
            />
          )}
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    </main>
  );
};

export default HomePage;
