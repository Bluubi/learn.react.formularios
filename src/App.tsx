import styles from './App.module.css'
import {FormProvider, useForm} from "react-hook-form";
import {PersonalForm} from "./personal-form/personal-form.tsx";
import utils from './utils.module.css'
import {AddressForm} from "./address-form/address-form.tsx";

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
            <PersonalForm />
            <AddressForm />
            <button className={utils.submit}> Send form </button>
        </form>
   </FormProvider>
   </div>
  )
}

export default App
