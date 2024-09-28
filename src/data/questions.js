 const questions = [
  {
    question: "What is Blockchain?",
    options:["A distributed system, consisting of list of Transactions that are arranged in a chronological order of blocks",
      "An arrangement of blocks in other to get a building constructed.", 
      "It's just something heard of everyday",
      "I do not know"
    ],
    answer: "A distributed system, consisting of list of Transactions that are arranged in a chronological order of blocks"

  },
  {
    id: 2,
    question: "What does EIP-1193 specify?",
    options: [
      "A standard interface for Ethereum provider API",
      "A new consensus mechanism for Ethereum",
      "A new token standard",
      "A layer-2 scaling solution"
    ],
    answer: "A standard interface for Ethereum provider API"
  },
  {
    id:3,
    question: "Which method is used to request accounts from a user in EIP-1193?",
    options: [
      "eth_requestAccounts",
      "eth_getBalance",
      "eth_sendTransaction",
      "eth_call"
    ],
    answer: "eth_requestAccounts"
  },
  {
    id: 4,
    question: "What is the purpose of EIP-1193's 'connect' event?",
    options: [
      "To notify the dApp that a new block has been mined",
      "To notify the dApp when the user connects to the provider",
      "To send transactions to the Ethereum network",
      "To disconnect from the Ethereum provider"
    ],
    answer: "To notify the dApp when the user connects to the provider"
  },
  {
    id: 5,
    question: "Which event is emitted when the Ethereum network changes in EIP-1193?",
    options: [
      "chainChanged",
      "accountsChanged",
      "providerChanged",
      "networkUpdate"
    ],
    answer: "chainChanged"
  },
  {
    id: 6,
    question: "In EIP-1193, how are changes to the user's Ethereum accounts communicated?",
    options: [
      "Using the 'accountsChanged' event",
      "By polling the blockchain",
      "Through a REST API",
      "Using the 'transactionConfirmed' event"
    ],
    answer: "Using the 'accountsChanged' event"
  }
]
   


export default questions;