"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.MapContainer })),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.TileLayer })),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.Marker })),
  { ssr: false }
);
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.Polyline })),
  { ssr: false }
);

// Component to handle map clicks
const MapClickHandler = ({ setStartPoint, setEndPoint, startPoint, fetchRoute }) => {
  useMapEvents({
    click: (e) => {
      if (!startPoint) {
        setStartPoint(e.latlng);
      } else {
        setEndPoint(e.latlng);
        fetchRoute(startPoint, e.latlng);
      }
    },
  });

  return null;
};

const MapRouting = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [route, setRoute] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchRoute = async (start, end) => {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
      );
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const routeCoordinates = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        setRoute(routeCoordinates);
      }
    } catch (error) {
      console.error("Route fetching error:", error);
    }
  };

  return (
    <div className="w-full h-screen relative">
      {isClient && (
        <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full z-10">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapClickHandler
            setStartPoint={setStartPoint}
            setEndPoint={setEndPoint}
            startPoint={startPoint}
            fetchRoute={fetchRoute}
          />

          {startPoint && <Marker position={[startPoint.lat, startPoint.lng]} />}
          {endPoint && <Marker position={[endPoint.lat, endPoint.lng]} />}
          {route && <Polyline positions={route} color="blue" weight={5} opacity={0.7} />}
        </MapContainer>
      )}

      <div className="absolute top-4 left-4 z-50 bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Route Mapper</h2>
        <p>Click on the map to set start and end points</p>
        {startPoint && <p>Start Point: {startPoint.lat.toFixed(4)}, {startPoint.lng.toFixed(4)}</p>}
        {endPoint && <p>End Point: {endPoint.lat.toFixed(4)}, {endPoint.lng.toFixed(4)}</p>}
        {route && <p>Route calculated!</p>}
      </div>
    </div>
  );
};

export default MapRouting;
