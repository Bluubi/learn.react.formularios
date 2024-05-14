import style from './form-group.module.css';
import util from "../../utils.module.css";
import {useFormContext} from "react-hook-form";
import {forwardRef, useEffect} from "react";

export const FormGroup = forwardRef<HTMLLabelElement, {name: string}>((props, ref) => {
    const { register, watch } = useFormContext();

    useEffect(() => {

        const subscription = watch((value) => {
            if(value[props.name] !== "" ){
                ref?.current?.classList.add('stayAtTop');
                ref?.current?.classList.remove('goBottom');
            } else {
                ref?.current?.classList.remove('stayAtTop');
                ref?.current?.classList.add('goBottom');
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className={style.formGroup}>
            <input type={"text"} className={util.input} {...register(props.name)} />
            <label htmlFor={'name'} ref={ref} className={util.label}> { props.name } </label>
        </div>
    )

})
