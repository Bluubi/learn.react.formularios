import {FormGroup} from "../../form-group/form-group.tsx";
import style from "../../../App.module.css";
import styleForm from '../personal/form-group-wrapper.module.css';
import {useRef} from "react";
import {useFormContext} from "react-hook-form";

export const PersonalForm = () => {

    const labelNameRef = useRef<HTMLLabelElement>(null);
    const labelSurnameRef = useRef<HTMLLabelElement>(null);

    const { register } = useFormContext();

    return (
        <div className={styleForm.formGroupWrapper}>
            <FormGroup ref={labelNameRef} name={'name'}/>
            <FormGroup ref={labelSurnameRef} name={'surname'}/>
            <div className={style.inputAge}>
                <label> Edad<small>(opcional)</small> </label>
                <input type={"number"} className={style.inputNumber} { ...register('age')}/>
            </div>
        </div>
        )
}
