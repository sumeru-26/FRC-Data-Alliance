import { TBA_KEY } from "./config";

export async function get_data() {
    //just a test url
    const url = "https://www.thebluealliance.com/api/v3/status";
    const request = new Request(url, {
        method: "GET",
        headers: {
            "X-TBA-Auth-Key": TBA_KEY
        }
    });
    reponse = fetch(request);
    const data = await response.json();
    return data;
}