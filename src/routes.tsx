import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { PatientListPage } from './components/PatientListPage';

export const routes = [
  {
    path: '/',
    exact: true,
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage requestConfig={{"apiUrl":"/api/login","redirectPath":"/patient-list"}} forgotRoute="/forgot-password"/>
  },
  {
    path: '/patient-list',
    element: <PatientListPage patients={[{"id":"001","name":"Test Patient","mrn":"001010","birthdate":"19-04-1991","location":"Minessota","symptoms":"Headache"},{"id":"002","name":"Test Patient","mrn":"0010450","birthdate":"19-04-1991","location":"Minessota","symptoms":"Soreness"}]}/>
  },
];
