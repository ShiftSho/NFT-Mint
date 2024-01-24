import { createHelia } from "helia";
import { dagJson } from "@helia/dag-json";

async function run() {
    const helia = await createHelia();
    const ipfs = dagJson(helia);
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Meme Sportif",
            attributes: [
            {
                "trait_type": "Pills",
                "value": "Basic Viagra" 
            },
            {
                "trait_type": "Clothes",
                "value": "Le Coq Sportif Tracksuit"
            },
            {
                "trait_type": "Glasses",
                "value": "Sunglasses"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmNRMzUuLUimrX2jzA9pij92Uo9XGBJc8TiqY7wLmUp2tB",
            description: "So much PLW3!"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();