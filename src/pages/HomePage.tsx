import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import worldData from "@/data/custom.geo.json";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { stringToColor } from "@/lib/color";

const typedWorldData = worldData as FeatureCollection;


const HomePage = () => {
  const style = (feature?: Feature<Geometry, any>) => {
    const name = feature?.properties?.name ?? "unknown";
    return {
      fillColor: stringToColor(name),
      weight: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

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
      >
        <GeoJSON data={typedWorldData} style={style} />
        <Marker position={[35.6895, 139.6917]}>
          <Popup>こんにちは！ This is Tokyo! 🗼</Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default HomePage;
