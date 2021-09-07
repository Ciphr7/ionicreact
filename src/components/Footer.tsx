import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const Footer: React.FC = () => (
  <>

    {/*-- Footer without a border --*/}
    <IonFooter className="ion-no-border">
      <IonToolbar color="primary">
        <IonTitle>Footer - No Border</IonTitle>
      </IonToolbar>
    </IonFooter>


  </>
);
export default Footer;