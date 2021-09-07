import React from 'react';
import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const Header: React.FC = () => (


 <>
<IonToolbar class="sticky" color="primary">
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
    </IonButtons>
    <IonTitle>BzeBee</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  </>
);
export default Header;