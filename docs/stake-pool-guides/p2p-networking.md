# Enable P2P Networking

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Relays not registered on chain will not be discovered. The latest topology updater detects if P2P is enabled and will disable fetching a new list. Continue pushing your relay to topology updater without pulling in a list from them. This allows you to get incoming while keeping the p2p topology file as is on unregistered relays.

:::

https://github.com/cardano-foundation/docs-cardano-org/blob/main/explore-cardano/p2p-networking.md

Edit your mainnet-config.json. I add them just above ***"defaultBackends": [***. Testnets are already on P2P and you can find the configuration files here https://book.world.dev.cardano.org/environments.html

```bash title="mainnet-config.json"
  "EnableP2P": true,
  "PeerSharing": true,
  "TargetNumberOfRootPeers": 100,
  "TargetNumberOfKnownPeers": 100,
  "TargetNumberOfEstablishedPeers": 50,
  "TargetNumberOfActivePeers": 25,
```

Edit the topology file on the core, raise valency to match the number of hot relays you wish to keep connection with. Lower valency will downgrade any extra nodes to a warm connection. The assumption is the governor will determine the best nodes to keep "hot".

```json title="Core mainnet-topology.json"

{
  "localRoots": [
    { "accessPoints": [
      { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "name": "My relay" },
      { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "name": "My other relay" }
  ],
      "advertise": false,
      "valency": 2
    }
  ],
  "publicRoots": []
}
```

Edit the topology file on the relays. The nodes only share block headers in P2P. If it does not have the block it will download it. This allows for more sensible interconnections, saving bandwidth while allowing interconnections between relays. Local roots remain hot connections(unless valency is lower than the total) if you have trusted peers you can add them to localRoots and remain connected to them always.

```json title="Relay mainnet-topology.json"
{
  "localRoots": [
    { "accessPoints": [
      { "address": "<core>", "port": <port>, "name": "My core" }
    ],
      "advertise": false,
      "valency": 1
    },
    { "accessPoints": [
      { "address": "<other-relay-1>", "port": <port>, "name": "relay1" },
      { "address": "<other-relay-2>", "port": <port>, "name": "relay2" },
      { "address": "<other-relay-3>", "port": <port>, "name": "relay3" },
      { "address": "<other-relay-4>", "port": <port>, "name": "relay4" }
    ],
      "advertise": true,
      "valency": 4
    }
  ],
  "publicRoots": [
    { "accessPoints": [
      { "address": "relays-new.cardano-mainnet.iohk.io", "port": 3001 }
    ],
      "advertise": true
    }
  ],
  "useLedgerAfterSlot": 185500763
}
```

Restart the node and check they are syncing up. Look for ('***Started opening Ledger DB***').

```bash title=">_ Terminal"
journalctl -f --output=cat -u cardano-node
```

You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it.

```bash title=">_ Terminal"
nano ~/.bashrc
```
Add this to the bottom and source the changes into Bash.


```bash title="~/.bashrc"
cardano-reload() {
   CPID=$(pidof cardano-node)
   kill -SIGHUP ${CPID}
   echo ${CPID}
}
```

```bash title=">_ Terminal"
source ~/.bashrc
```
