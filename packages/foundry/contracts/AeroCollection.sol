// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AeroCollection is ERC721URIStorage  {
    uint256 private _nextTokenId;
    string private _baseTokenURI;

    event NFTMinted(address indexed recipient, uint256 tokenId, string metadataCID);

    constructor(
        string memory name, 
        string memory symbol, 
        string memory baseURI
    ) ERC721(name, symbol)  {
        _baseTokenURI = baseURI;
    }

    function mintNFT(address _recipient, string memory _metadataCID) public  {
        uint256 tokenId = _nextTokenId++;
        _mint(_recipient, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(_baseTokenURI, _metadataCID, ".json")));

        emit NFTMinted(_recipient, tokenId, _metadataCID);
    }
}