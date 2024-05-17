import style from './App.module.css';
import util from "./utils.module.css";
import {PersonalForm} from "./forms/steps/personal";
import {FormProvider, useForm} from "react-hook-form";
import {useState} from "react";
import {HobbyForm} from './forms/steps/hobby';
import {FoodForm} from "./forms/steps/food";

function App() {

    const methods  = useForm();

    const forms = [ 'PersonalForm', 'HobbyForm', 'FoodForm'];

    const [ formulary, setFormulary ] = useState<string>('FoodForm')


    return (
        <div className={style.formContainer}>
            <FormProvider {...methods}>
                <form className={util.form} onSubmit={ methods.handleSubmit( (data) => {
                    const currentForm = forms.findIndex((f) => f === formulary);
                    const nextForm = currentForm + 1
                    if(nextForm === forms.length || currentForm === -1){
                        setFormulary('PersonalForm')
                        return true;
                    } else {
                        setFormulary(forms[nextForm])
                    }
                })}>
                    { formulary === 'PersonalForm' ? <PersonalForm/> :
                        formulary === 'HobbyForm' ? <HobbyForm /> :
                        formulary === 'FoodForm' ? <FoodForm /> :
                    <></>}
                    <button type="submit" className={util.submit}>Submit</button>
                </form>
            </FormProvider>
        </div>)
}

export default App;
