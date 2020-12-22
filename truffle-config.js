// /*
// * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
// * function when declaring them. Failure to do so will cause commands to hang. ex:
// * ```
//  * mainnet: {
//  *     provider: function() {
//  *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
//  *     },
//  *     network_id: '1',
//  *     gas: 4500000,
//  *     gasPrice: 10000000000,
//  *   },
//  */
// const HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "twist doctor stand team try mushroom coffee salmon thank dust horn police";
// //0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047 - this is default address created from mnemonic above
// //0xD59b6C2463670F5D7cE3f95Ec21B0Ef02cCfc69B - Contract Address Rinkeby
// module.exports = {
//     // See <http://truffleframework.com/docs/advanced/configuration>
//     // to customize your Truffle configuration!
//     networks: {
//         development_cli: {
//             host: "127.0.0.1",
//             port: 7545,
//             network_id: "*",
//             websockets: true
//         },
//         development_ui: {
//             host: "127.0.0.1",
//             port: 7545,
//             network_id: 5777
//         },
//         rinkeby: {
//             provider: function() {
//                 return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/65abe92259cc4e5f90e24759d3220907");
//             },
//             network_id: 4
//         },
//         compilers: {
//             solc: {
//               version: "^0.7.0", // A version or constraint - Ex. "^0.5.0"
//                                  // Can also be set to "native" to use a native solc
//               docker: false, // Use a version obtained through docker
//               parser: "solcjs",  // Leverages solc-js purely for speedy parsing
//               settings: {
//                 optimizer: {
//                   enabled: false,
//                   runs: 200   // Optimize for how many times you intend to run the code
//                 },
//                 evmVersion: "istanbul" // Default: "istanbul"
//               },
             
//             }
//           }
//     }
// };

module.exports = {
  networks: {
    development_cli: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*",
        websockets: true
    },
 
  },

     compilers: {
      solc: {
        version: "^0.7.0", // A version or constraint - Ex. "^0.5.0"
                           // Can also be set to "native" to use a native solc
        docker: false, // Use a version obtained through docker
        parser: "solcjs",  // Leverages solc-js purely for speedy parsing
        settings: {
          optimizer: {
            enabled: false,
            runs: 200   // Optimize for how many times you intend to run the code
          },
          evmVersion: "istanbul" // Default: "istanbul"
        },
       
      }
    }
};
