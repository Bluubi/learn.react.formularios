import {useFormContext} from "react-hook-form";
import utils from '../utils.module.css';
import {PracticeForm} from "../App.tsx";

export const PersonalForm = () => {

    const methods  = useFormContext<PracticeForm>()

    return (<div className={utils.personalForm}>
        <div className={utils.formBlock}>
            <label htmlFor={'name'}>Name *</label>
            <input type={'text'} id={'name'} {...methods.register('name', {
                required: true
            })}  className={utils.input}/>
            { methods.formState.errors.name && <small className={utils.error}> Es necesario escribir tu nombre </small>}
        </div>
        <div className={utils.formBlock}>
            <label htmlFor={'surname'}>Surname <small>(Opcional)</small></label>
            <input type={'text'} id={'surname'} {...methods.register('surname')}  className={utils.input}/>
        </div>
    </div>)
}
