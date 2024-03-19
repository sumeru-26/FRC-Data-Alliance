export async function get_data() {
    //just a test url
    const url = "https://www.thebluealliance.com/api/v3/status";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}