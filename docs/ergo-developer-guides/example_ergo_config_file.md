```bash
ergo {
    node {
        mining = false
        extraIndex = false
        utxo {
            # Download and apply UTxO set snapshot and full-blocks after that
            utxoBootstrap = false

            # How many utxo set snapshots to store, 0 means that they are not stored at all
            storingUtxoSnapshots = 2

            # How many utxo set snapshots for a height with the same id we need to find in p2p network
            # in order to start downloading it
            p2pUtxoSnapshots = 2
        }
        # Settings releated to headers-chain bootstrapping via NiPoPows
        nipopow {
            # Download PoPoW proof on node utxoBootstrap
            nipopowBootstrap = false

            #how many different proofs we are downloading from other peers
            # and compare with each other, before choosing the best one
            p2pNipopows = 2
        }
    }
}
scorex {
    restApi {
        # node which exposes restApi in firewall should define publicly accessible URL of it
        # you will need to enable port forwarding from logging into your router for 9053
        # publicUrl = "http://xxx.xxx.xxx.xxx:9053"
        # apiKeyHash = "CHANGE_ME_HASH"
    }
    network {
        # For below declared address do not include "http://"!
        # you will need to enable port forwarding from logging into your router for 9030
        # declaredAddress = "xxx.xxx.xxx.xxx:9030"
        # nodeName = "my-ergo-node"
    }
}
```