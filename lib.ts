import { type ChainId, buildRoute as buildRouteBase } from "ser-kit";

type Waypoints = Parameters<typeof buildRouteBase>[1];

export async function buildRoute(chain: ChainId, waypoints: Waypoints) {
  const route = await buildRouteBase(chain, waypoints);
  const routeEncoded = btoa(JSON.stringify(route));
  console.log(
    `https://app.pilot.gnosisguild.org/edit/${route.id}/${routeEncoded}`
  );
}
