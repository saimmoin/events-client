/** @format */

import { http, createConfig } from "wagmi";
import { auroraTestnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [auroraTestnet],
  connectors: [metaMask()],
  transports: {
    [auroraTestnet.id]: http(),
  },
});
