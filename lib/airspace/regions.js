export const AIRSPACE_REGIONS = {
  europe: { lamin: 42, lomin: -10, lamax: 58, lomax: 18 },
  gulf: { lamin: 15, lomin: 39, lamax: 32, lomax: 58 },
  singapore: { lamin: -6, lomin: 94, lamax: 10, lomax: 112 },
  atlantic: { lamin: 40, lomin: -75, lamax: 58, lomax: -5 },
};

export function resolveAirspaceRegion(regionKey = "europe") {
  return AIRSPACE_REGIONS[regionKey] || AIRSPACE_REGIONS.europe;
}
