
import utils from "../utils.module.css";
import {PersonalForm} from "./personal-form/personal-form.tsx";
import {AddressForm} from "./address-form/address-form.tsx";


export const FirstStep = () => {
    return (
        <>
            <PersonalForm />
            <AddressForm />
            <button className={utils.submit}> Send form </button>
        </>)
}
