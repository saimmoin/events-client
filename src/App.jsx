/** @format */

import { useAccount, useConnect, useDisconnect } from "wagmi";
import useGetData from "./hooks/useGetData";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const { data, isLoading, isError, refetch, isSuccess, error: userFetchError } = useGetData(`/user/${account.addresses?.[0]}`);
  console.log("data: ", data);

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold underline">Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button className="h-10 px-6 font-semibold rounded-md bg-black text-white font-mono" type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white font-mono"
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
