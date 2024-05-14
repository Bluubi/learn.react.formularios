import {FormProvider, useForm} from "react-hook-form";
import style from './App.module.css';
import util from './utils.module.css'
import {useRef} from "react";
import {FormGroup} from "./forms/form-group/form-group.tsx";

function App() {


    const methods = useForm();
    const labelNameRef = useRef<HTMLLabelElement>(null);
    const labelSurnameRef = useRef<HTMLLabelElement>(null);
    const { register } = methods;

    return (
        <FormProvider {...methods}>
            <div className={style.formContainer}>
            <form className={util.form}>

                <FormGroup ref={labelNameRef} name={'name'} />
                <FormGroup ref={labelSurnameRef} name={'surname'} />

                {/*<div className={style.formGroup} >
                    <input type={"text"} className={util.input} {... register('name') } />
                    <label htmlFor={'name'} ref={labelNameRef} className={util.label}> Nombre </label>
                </div>
                <div className={style.formGroup}>
                    <input type={"text"} className={util.input} {... register('surname') } />
                    <label htmlFor={'apellido'} ref={labelSurnameRef} className={util.label} > Apellido </label>
                </div>*/}
            </form>
            </div>
        </FormProvider>
    )
}

export default App;
