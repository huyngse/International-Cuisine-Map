import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const HomePage = () => {
  return (
    <main>
      <MapContainer
        center={[35.6895, 139.6917]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.6895, 139.6917]}>
          <Popup>こんにちは！ This is Tokyo! 🗼</Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default HomePage;
