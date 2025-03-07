//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 ;

// Useful for debugging. Remove when deploying to a live network.
import "forge-std/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YourContract is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    // constructor() ERC721("YourContract", "FTN") {}
    constructor(address initialOwner) Ownable(initialOwner) ERC721("FlightTicket", "FTK") {}

    function mintTicket(address to, string memory tokenURI) external onlyOwner {
        uint256 newTokenId = _tokenIdCounter;
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIdCounter++;
    }

}
