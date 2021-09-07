import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg, IonAvatar } from '@ionic/react';
import './slider.css';
// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 1,
    speed: 500
};

export const Slider: React.FC = () => (

    <IonContent ion-color-primary>
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
                <h1>Slide 1</h1>
                <IonAvatar>
                    <IonImg src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                
                <IonImg src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'} />
            </IonSlide>
            <IonSlide>
                <h1>Slide 2</h1>
                <IonAvatar>

                </IonAvatar>
                    <IonImg src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" />
            
            </IonSlide>
            <IonSlide>
                <h1>Slide 3</h1>
                <IonAvatar>
                    

                </IonAvatar><IonImg src="https://mdbootstrap.com/img/Photos/Others/images/78.jpg" />
            </IonSlide>
        </IonSlides>

    </IonContent>

);

export default Slider;