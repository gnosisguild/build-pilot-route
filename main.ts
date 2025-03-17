import { buildRoute } from "./lib";

buildRoute(1, [
  {
    EOA: "0x1b0c638616ed79db430edbf549ad9512ff4a8ed1",
  },
  {
    SAFE: "0xf099e0f6604bde0aa860b39f7da75770b34ac804",
  },
  {
    ROLES: "0x27d8bb2e33bc38a9ce93fdd90c80677b8436affb",
    version: 2,
    roles: [
      "0x4d414e4147455200000000000000000000000000000000000000000000000000",
    ],
    multisend: [
      "0x9641d764fc13c8b624c04430c7356c1c7c8102e2",
      "0x38869bf66a61cf6bdb996a6ae40d5853fd43b526",
    ],
  },
  {
    SAFE: "0x849d52316331967b6ff1198e5e32a0eb168d039d",
  },
]);
