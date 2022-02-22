import { useCallback } from "react";
import apiClient from "../util/apiClient";

function Backend() {
    const onClick = useCallback(() => {
        apiClient.get("/test").then((response) => console.log(response.status))
    }, [])

    return (
        <div>
            <button onClick={onClick}>
                Get Status
            </button>
        </div>
    )
}

export default Backend;