import web3 from './web3';

const address = '0xb41f7d1de963ed73822Fc8a097CF829e8DEdb860';
const abi = [{
    "inputs": [
        {
            "internalType": "string",
            "name": "name",
            "type": "string"
        }
    ],
    "stateMutability": "payable",
    "type": "constructor"
},
{
    "inputs": [],
    "name": "admin",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "get",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getBalance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "players",
    "outputs": [
        {
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "_LotName",
            "type": "string"
        }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "stateMutability": "payable",
    "type": "receive"
}];

export default new web3.eth.Contract(abi , address);