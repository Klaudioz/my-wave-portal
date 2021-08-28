pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint totalWaves;

  constructor(){
    console.log("Klaudioz test");
  }

  function wave() public{
    totalWaves += 1;
    console.log("Somebody waved");
  }
}