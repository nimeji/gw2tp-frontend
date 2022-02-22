import Keycloak from 'keycloak-js'
const keycloakConfig = {
    clientId: "frontend",
    realm: "GW2TP",
    url: "https://auth.nimeji.com/"
}
console.log("test");
const keycloak = new Keycloak(keycloakConfig);
export default keycloak