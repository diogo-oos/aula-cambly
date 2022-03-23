/**
 * Componente para controle de rotas
 * Recebe as páginas e os layouts de páginas
 * As páginas entram como children dos layouts
 *  */

import 'bootstrap/dist/css/bootstrap.min.css'
import TutorsList from '../pages/tutorsList'
import { LayoutApp } from './layout-app'

export default function Main () {
  return (
    <>
      <LayoutApp>
        <TutorsList/>
      </LayoutApp>
    </>
  )
}
