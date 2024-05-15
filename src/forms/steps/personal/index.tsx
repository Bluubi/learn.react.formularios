import {FormGroup} from "../../form-group/form-group.tsx";
import style from "../../../App.module.css";
import styleForm from '../personal/form-group-wrapper.module.css';
import {useRef} from "react";

export const PersonalForm = () => {

    const labelNameRef = useRef<HTMLLabelElement>(null);
    const labelSurnameRef = useRef<HTMLLabelElement>(null);

    return (
        <div className={styleForm.formGroupWrapper}>
            <FormGroup ref={labelNameRef} name={'name'}/>
            <FormGroup ref={labelSurnameRef} name={'surname'}/>
            <div className={style.inputAge}>
                <label> Edad<small>(opcional)</small> </label>
                <input type={"number"} className={style.inputNumber} name={'number'}/>
            </div>
        </div>
        )
}
