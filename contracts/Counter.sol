//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Counter {
    uint public count;
    function increaseCount() public returns(uint){
        count++;
        return count;
    }

    function decreaseCount() public returns(uint){
        count--;
        return count;
    }

    function getCount() public view returns(uint){
        return count;
    }
}