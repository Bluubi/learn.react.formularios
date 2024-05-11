import styles from './App.module.css'
import {FormProvider, useForm} from "react-hook-form";
import {PersonalForm} from "./first-step/personal-form/personal-form.tsx";
import utils from './utils.module.css'
import {AddressForm} from "./first-step/address-form/address-form.tsx";
import {FirstStep} from "./first-step/first-step.tsx";

export interface PracticeForm {
    name: string;
    surname: string;
    address: {
        direction: string;
        numberHouse: number;
    }
}
function App() {



    const methods   = useForm<PracticeForm>();

  return (
   <div className={styles.mainForm}>

       <FormProvider {...methods}>
            <form className={styles.containerForm} onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <FirstStep />
        </form>
   </FormProvider>
   </div>
  )
}

export default App
