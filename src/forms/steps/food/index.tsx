import {useFormContext} from "react-hook-form";
import styles from './index.module.css';

export const FoodForm = () => {

    const { register, setValue } = useFormContext();

    const handleClickOnFood = (event: Event) => {
        const input = (event.target) as HTMLParagraphElement;
        const dataId = input.dataset.testid;
        if(input.classList.contains('selected')){
            input.classList.remove('selected')
            setValue('choice', `food.${dataId}`);

        } else {
            if(dataId){
                setValue('choice', `food.${dataId}`);
                input.classList.add('selected');
            }
        }
    }

    return (<div className={styles.foodFormWrapper}>
        <p> Selecciona tu preferencia alimentaria </p>
            <input hidden={true} type={"radio"} value={'food.omnivoro'} {...register('choice')} />
            <p className={styles.foodCard} data-testid={'omnivoro'}
               onClick={(event) => handleClickOnFood(event)} aria-label={'button'}> Omnívoro </p>
            <input hidden={true} type={"radio"} value={'food.vegetariano'} {...register('choice')} />
            <p className={styles.foodCard} data-testid={'vegetariano'}
               onClick={(event) => handleClickOnFood(event)} aria-label={'button'}> Vegetariano </p>
            <input hidden={true} type={"radio"} value={'food.vegano'} {...register('choice')} />
            <p className={styles.foodCard} data-testid={'vegano'}
               onClick={(event) => handleClickOnFood(event)} aria-label={'button'} > Vegano </p>
    </div>)
}
