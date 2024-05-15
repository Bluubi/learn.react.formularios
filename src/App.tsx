import style from './App.module.css';
import util from "./utils.module.css";
import {PersonalForm} from "./forms/steps/personal";
import {FormProvider, useForm} from "react-hook-form";
import {useState} from "react";
import {HobbyForm} from './forms/steps/hobby';

function App() {

    const methods  = useForm();

    const forms = [ 'PersonalForm', 'HobbyForm'];

    const [ formulary, setFormulary ] = useState<string>('PersonalForm')



    return (
        <div className={style.formContainer}>
            <FormProvider {...methods}>
                <form className={util.form} onSubmit={ methods.handleSubmit( () => {
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
                    <></>}
                    <button type="submit" className={util.submit}>Submit</button>
                </form>
            </FormProvider>
        </div>)
}

export default App;
