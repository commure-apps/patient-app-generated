import PatientListItem from './PatientItem';
import React from 'react';

import Patient from './Patient';
//import styles from './patient-list.module.scss';

interface Props {
  patients: Patient[];
}

export const PatientListPage: React.FC<Props> = ({ patients }) => {
  return (
    <div className="list">
      {!patients?.length && <p>No patients founds</p>}

      {patients &&
        patients.map((patient) => (
          <PatientListItem key={patient.id} patient={patient} />
        ))}
    </div>
  );
};