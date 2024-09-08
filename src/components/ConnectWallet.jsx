/** @format */

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { truncateAddress } from "../utils/common";

export const ConnectWallet = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const [position, setPosition] = React.useState("bottom");

  const { connectors, connect, status } = useConnect();
  console.log("status", status, account, account.status);
  return (
    <div>
      {account.status === "connected" ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{truncateAddress(account.address)}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <Link to={"/profile"}>
                <DropdownMenuRadioItem value="Profile">Profile</DropdownMenuRadioItem>
              </Link>
              {/* <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem> */}
              <DropdownMenuRadioItem value="Disconnect" onClick={disconnect}>
                Disconnect
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          {connectors.map((connector) =>
            connector.id === "metaMaskSDK" ? (
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white font-mono"
                key={connector.uid}
                onClick={() => connect({ connector })}
                type="button"
              >
                {connector.name}
              </button>
            ) : null
          )}
        </>
      )}
    </div>
  );
};
