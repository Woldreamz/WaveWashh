import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';


const LoginPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
            <IonTitle>Log in</IonTitle>
        </IonToolbar>
      </IonHeader>
  
        <IonContent class='ion-padding-top' className='ion-padding-start'>
          
          <form action="/" method='post'>
            <Paragraph headertext='Welcome' text='Sign in via your email address'/>

            <Input 
              type="email"
              placeholder="Email" 
            />

            <Input 
              type="password"
              placeholder="Password" 
            />

           <p><Link to="changepassword" style={{ color: '#006A55', padding: "15px", fontFamily: 'Inter', textDecoration: 'none'}}>Forgot password?</Link></p>
           <p><Link to="/loginPhone" style={{ color: '#006A55', padding: "15px", textDecoration: 'none', fontFamily: 'Inter'}}>
            Click here to use mobile number, instead</Link></p>

            <Button buttonName='Log In' />

          </form>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default LoginPage;