import style from './index.module.css';
import {useFormContext} from "react-hook-form";


const hobbies = [
    'lectura', 'deportes', 'moda', 'cosmética', 'videojuegos', 'escritura'
]

export const HobbyForm = () => {

    const { setValue } = useFormContext();

    const handleClickOnHobby = (event: Event) => {
        const input = (event.target) as HTMLParagraphElement;
        const dataId = input.dataset.testid;
        if(input.classList.contains('selected')){
            input.classList.remove('selected')
            setValue(`hobbies.${dataId}`, false);

        } else {
            if(dataId){
                setValue(`hobbies.${dataId}`, true);
                input.classList.add('selected');
            }
        }
    }

    const { register } = useFormContext();

    return (
        <div>
            <div>
                <p className={style.formTitle}> Selecciona al menos un hobby </p>
            </div>
            <div className={style.hobbyWrapper}>
                { hobbies.map( hobby => {
                    return (
                        <div>
                            <input className={style.elementCheckbox} type={'checkbox'} value={hobby}
                                   hidden={true} {...register('hobbies.' + hobby)} />
                            <p className={style.hobbyBox} data-testid={hobby}
                               onClick={(event) => handleClickOnHobby(event)} aria-label={'button'}> {hobby}</p>
                        </div>)
                })}
            </div>
        </div>
    )
}
