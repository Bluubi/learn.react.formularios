import styles from './address.module.css'
import {useFormContext} from "react-hook-form";
import utils from '../../utils.module.css';
import {PracticeForm} from "../../App.tsx";

export const AddressForm = () => {

    const methods = useFormContext<PracticeForm>();

    return (
        <div className={styles.addressForm}>
            <div className={utils.formBlock}>
                <label htmlFor={'address'}>Escribe tu dirección principal</label>
                <input type={'text'} className={utils.input} id={'address'} {...methods.register('address.direction', {
                    required: 'La dirección es necesaria'
                })} />
                { methods.formState.errors.address?.direction && <small className={utils.error}>  {methods.formState.errors.address.direction?.message} </small>}
            </div>
            <div className={utils.formBlock}>
                <label htmlFor={'address'}>Nº</label>
                <input type={'number'} className={`${utils.input} ${utils.small}`} id={'address'} {...methods.register('address.numberHouse')} />
            </div>
        </div>
    )
}
