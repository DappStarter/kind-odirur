require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food wagon cruise six purity coral light army genuine'; 
let testAccounts = [
"0xa30b3c26aa594d536c3eb987c448e08d5ff609e55ec1f5c99a3f305c68dd4b8e",
"0xf74e28fa4dabeb7ae4729de35542c2e210bf50750c4eb579215ba97bf9ef7d0e",
"0x35d3153235e2ab842004e24c2bcebaef7b7db5c8ec334d74792991e0aacefe0d",
"0x4eb07e06d7e5a74af2073a65b99696472154e4120f0c2a6a81b99c9eeb8381f4",
"0x9df09db4693b634f8c742fb26cb0c43b9eebfc27f5a100f37c7f83e3715d0303",
"0xc08bcae6b9384d1205f85c75179d50c0633579fb86f4a1813e1bbc04094c8e6e",
"0x94858cddef50f8d1ff0e12d0123d3f4d6a647c93eca466a818a3a0c02d15a8fa",
"0x947cbb74a6ce778c6de2c96cc5369c94a9c24be612d6fce56c707fefc3483195",
"0x8068536b9b142dac31a5a03e63caa97c46dc9e12bef7ff1fa71c19c8882b2654",
"0x1ea09156799c0e4cfba108fdd6fa446b71455ecaf003f55c3a6ce57796a53388"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
