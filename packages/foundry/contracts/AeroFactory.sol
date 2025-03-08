// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./AeroCollection.sol";

contract AeroFactory {
    struct CollectionInfo {
        address collectionAddress;
        address creator;
        string name;
        string symbol;
        string baseURI;
    }

    CollectionInfo[] public collections;

    event CollectionCreated(
        address indexed collectionAddress,
        address creator,
        string name,
        string symbol,
        string baseURI
    );

    function createNFTCollection(
        string memory _name, 
        string memory _symbol, 
        string memory _baseURI
    ) public {
        AeroCollection newCollection = new AeroCollection(_name, _symbol, _baseURI);
        collections.push(CollectionInfo({
            collectionAddress: address(newCollection),
            name: _name,
            symbol: _symbol,
            baseURI: _baseURI,
            creator: msg.sender
        }));

        emit CollectionCreated(address(newCollection), msg.sender, _name, _symbol, _baseURI);
    }

    function getAllCollections() public view returns (CollectionInfo[] memory) {
        return collections;
    }
}