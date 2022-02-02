require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach curtain noble arrow hockey another army gas'; 
let testAccounts = [
"0x621921de56fc0c2ef84b1279c2c3e63cd099ce46d1ef253990c9ed1e839d7925",
"0xce13d989018a74e6a68a9dbb0a2e754db7b410d8cfe88a0850fa9d322c0a13c7",
"0xcf99cf269d38f082de17adce2836a2d3a9bb28e2ff51f85b57821d89f8fd614a",
"0xf7702e2941e6c1fa962c29960c3ddb78668f1cb9d4c6dbc741d2d6397abf994b",
"0x19661791963bc5bd3773f18c48183e1ed42dd8f27b16e8b497412e4b93f4705f",
"0x12ea7449167f51e2194a9ce1bb0b9287ab2a21ace4226a6bd84dac10f912ca97",
"0x0cab648ceb520f4e913210f43fe936de35cf4e7641c663bf52c42d7c1a6aa779",
"0x83791f2bdcf0f9616f1f76a945a2fe167af5d73a8203b7a0261ef3d756c9aa4a",
"0xbf9a35ae5106722cf93ed9d62023d5d9076d03a3dbd939594499aad789c486fe",
"0xfc6c4c03cec38eedb95756dc6813f39460e0ec3af85c4d0277b221596ec0285d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

