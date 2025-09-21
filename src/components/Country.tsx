import { stringToColor, stringToGray } from "@/lib/color";
import type { Feature, Geometry } from "geojson";
import { useRef } from "react";
import { GeoJSON, useMap } from "react-leaflet";

interface CountryProps {
  feature: Feature<Geometry, any>;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const Country = ({ feature, isSelected, onSelect }: CountryProps) => {
  const map = useMap();
  const geoJsonRef = useRef<L.GeoJSON>(null);
  const name = feature.properties?.name ?? "unknown";

  const grayStyle = {
    fillColor: stringToGray(name),
    weight: 1,
    color: "white",
    fillOpacity: 0.7,
  };

  const colorfulStyle = {
    fillColor: stringToColor(name),
    weight: 2,
    color: "white",
    fillOpacity: 0.9,
  };

  return (
    <GeoJSON
      key={name}
      ref={geoJsonRef}
      data={feature}
      style={() => (isSelected ? colorfulStyle : grayStyle)}
      onEachFeature={(_, layer) => {
        layer.on("click", () => {
          onSelect(isSelected ? null : name);
          if ("getBounds" in layer && typeof layer.getBounds === "function") {
            const bounds = layer.getBounds();
            map.fitBounds(bounds, { padding: [20, 20] });
          }
        });

        layer.on("mouseover", () => {
          if ("setStyle" in layer && typeof layer.setStyle === "function") {
            layer.setStyle(colorfulStyle);
          }
        });

        layer.on("mouseout", () => {
          if ("setStyle" in layer && typeof layer.setStyle === "function") {
            layer.setStyle(isSelected ? colorfulStyle : grayStyle);
          }
        });
      }}
    />
  );
};

export default Country;
