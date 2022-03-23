import '../assets/stylePaginaInicial.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TutorsList from "../pages/tutorsList"
import { Layout } from "./layout";

export const App = () => {
  return (
    <>
      <Layout>
        <TutorsList/>
      </Layout>
    </>
  )
}
