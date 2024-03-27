// Source: https://github.com/dcousens/haversine-distance/tree/main

// Calculate distance between two geo spatial points in meters using haversine formula
// hav(theta) = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLon - aLon)
interface GeoPoint {
  latitude: number;
  longitude: number;
}

export function geoDistanceBetweenTwoPoints(a: GeoPoint, b: GeoPoint): number {
  const asin = Math.asin;
  const cos = Math.cos;
  const sin = Math.sin;
  const sqrt = Math.sqrt;
  const PI = Math.PI;

  // equatorial mean radius of Earth (in meters)
  const R = 6378137;

  function squared(x) {
    return x * x;
  }
  function toRad(x) {
    return (x * PI) / 180.0;
  }
  function hav(x) {
    return squared(sin(x / 2));
  }

  const aLat = toRad(a.latitude);
  const bLat = toRad(b.latitude);
  const aLng = toRad(a.longitude);
  const bLng = toRad(b.longitude);

  const ht = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLng - aLng);
  return 2 * R * asin(sqrt(ht));
}
