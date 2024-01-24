import { createHelia } from "helia";
import { dagJson } from "@helia/dag-json";

async function run() {
    const helia = await createHelia();
    const ipfs = dagJson(helia);
    
    // add as many attributes as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "MyToken",
            attributes: [
            {
                "trait_type": "Head",
                "value": "Basic" 
            },
            {
                "trait_type": "Body",
                "value": "Shirt"
            },
            {
                "trait_type": "Glasses",
                "value": "Sunglasses"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/CID",
            description: "NFT LAUNCH!"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();