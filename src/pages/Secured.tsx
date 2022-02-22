import {useEffect} from 'react';
import {useKeycloak} from "@react-keycloak/web";

function Secured() {
  const { keycloak, initialized } = useKeycloak();

  if (initialized && keycloak.authenticated) return (
    <div>
      <p>This is a Keycloak-secured component of your application. You shouldn't be able
      to see this unless you've authenticated with Keycloak.</p>
      <button onClick={() => keycloak.logout({redirectUri: "http://localhost:3000/secured"})}>logout</button>
    </div>
  ); else return (<div>Unable to authenticate!<button onClick={() => keycloak.login()}>login</button></div>)
}
export default Secured;