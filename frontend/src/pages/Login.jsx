import Form from "../components/Form"
import "../styles/Index.css";

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login