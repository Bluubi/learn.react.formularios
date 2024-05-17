# Entendiendo React Hook Forms

Para comenzar a usar react hook forms, debemos instalar el paquete:

``npm install react-hook-form``


## Register

```
    const { register } = useForm();
```

Función que permite registrar un campo de un formulario. Actúa como la propiedad ``name`` de un input.

```
 <form className={'flex flex-wrap justify-center align-middle gap-y-2 border p-6'} onSubmit={handleSubmit(handleSubmitForm)}>
                <h1 className={'text-5xl font-bold text-sky-800 w-full'}> Formulary </h1>
                <div className={'flex flex-wrap gap-x-2 justify-center items-center p-2 w-full'}>
                    <label className={'w-full text-lg'}> Nombre </label>
                    <input type={"text"} {...register('name')} className={'bg-gray-50 p-4 w-full'}/>
                </div>
 </form>
```

Cuando creas un input a partir de un ``register``, también puedes añadir validaciones.

Por ejemplo:

```
    const { register, formState: { errors} } = useForm<PracticeForm>();

<div className={'flex flex-wrap gap-x-2 justify-center items-center p-2 w-full'}>
                    <label className={'w-full text-lg'}> Nombre </label>
                    <input type={"text"} {...register('name', { required: true})} className={'bg-gray-50 p-4 w-full'}/>
                </div>
```

Y gracias al ``formState`` podemos comprobar si hay errores y aprovecharlo:

````
<form className={'flex flex-wrap justify-center align-middle gap-y-2 border p-6'} onSubmit={handleSubmit(handleSubmitForm)}>
                <h1 className={'text-5xl font-bold text-sky-800 w-full'}> Formulary </h1>
                <div className={'flex flex-wrap gap-x-2 justify-center items-center p-2 w-full'}>
                    <label className={'w-full text-lg'}> Nombre </label>
                    <input type={"text"} {...register('name', { required: true})} className={'bg-gray-50 p-4 w-full'}/>
                    { errors.name && <span className={'text-red-600 text-xs'}> El nombre es requerido </span> }
                </div>
                <button className={'p-2 bg-indigo-800 text-indigo-50 rounded-sm'}> Enviar formulario </button>
            </form>
````

> Tip!
> Podemos utilizar las interfaces para tipar los formularios:
> ```
> export interface PracticeForm {
>    name: string;
>    surname: string;
>    age: number;
> }
> ```
>    `` const { register } = useForm<PracticeForm>();``

### setValue y getValues

Las funciones de ``setValue`` y ``getValues``te permiten establecer o recoger el valor para un campo ``register``concretamente.

Un ejemplo:

```
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

```

En esta función, pretendemos marcar un checkbox invisible cuando el usuario haga click en un elemento Paragraph. Para ello, hacemos
uso de la función ``setValue``, con la cual accedemos al campo mediante el nombre del hobby (del register) y establecemos un valor; true si
ha sido seleccionado, false si no.


Por otro lado ```getValues``` te permite obtener los valores de cada uno de los controladores del formulario:


```
useEffect(() => {
        const content = getValues();
        if(content[props.name] !== ""){
            ref?.current?.classList.add('stayAtTop');
        }
    }, []);
```


En este otro caso, por ejemplo, recogemos todos los valores y comprobamos que para el controlador con nombre X no es vacío, asignamos una clase al elemento consecuente.

## Submit del formulario

```
export function App () {


    const { register, handleSubmit }  = useForm();


    return <form onSubmit={handleSubmit((data) => console.log('hola', data))}>
        <input type={"text"} {...register('nombre')} />
        <input type={"text"} {...register('apellido')}/>
        <input type={"submit"}/>
            </form>
}
```

``HandleSubmit`` es una función que admite un callback, y que envía ``data`` como parámetro con toda
la información de todos los campos del formulario.

## Submit Nativo vs HandleSubmit

### ¿Por qué usar handleSubmitForm en lugar del submit nativo

El handleSubmit de la librería cuenta con algunas ventajas frente al nativo:
1. Recoge de una todos los datos de tu formulario. No necesitas andar haciendo document.querySelector por cada campo.
2. Previene automáticamente de event.preventDefault(). Evita que sea una instrucción repetida
3. Lanza los validadores y se asegura de que éstos funcionan correctamente.

## FormStates

## Errors

### Errors en register

Indica cuándo un controlador está en estado de `error`.

```
<div className={utils.formBlock}>
     <label htmlFor={'address'}>Escribe tu dirección principal</label>
     <input type={'text'} className={utils.input} id={'address'} {...methods.register('address.direction', {
     required: 'La dirección es necesaria'
     })} />
    { methods.formState.errors.address?.direction && <small className={utils.error}>  {methods.formState.errors.address.direction?.message} </small>}
</div>
```
Puedes configurar el **mensaje de error** que quieras mostrar desde el registro del controlador.

### required

```

```

Indica que el cambio es obligatorio

### touchedFields

Cuando toquemos un campo, se activará la validación.

````
const { register, formState: { errors, touchedFields} } = useForm<PracticeForm>();

{ (errors.age || touchedFields.age )&& <span className={'text-red-600 text-sm'}>No se cumple la edad requerida</span> }
````

## useFormContext

Cuando quieras separar los controladores en componentes diferentes, necesitarás de dos etiquetas para ello:

```<FormContext> </FormContext>``` y ``useFormContext()``

Esta es tu pieza de código donde tienes los controladores:

```
export const PersonalForm = () => {

    const methods  = useFormContext<PracticeForm>()

    return (<div className={utils.personalForm}>
        <div className={utils.formBlock}>
            <label htmlFor={'name'}>Name</label>
            <input type={'text'} id={'name'} {...methods.register('name')} className={utils.input}/>
        </div>
        <div className={utils.formBlock}>
            <label htmlFor={'surname'}>Surname</label>
            <input type={'text'} id={'surname'} {...methods.register('surname')}  className={utils.input}/>
        </div>
    </div>)

```

Y el formulario se encuentra aquí:

````
  return (
   <div className={styles.mainForm}>

       <FormProvider {...methods}>
            <form className={styles.containerForm} onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <PersonalForm />
            <AddressForm />
            <button className={utils.submit}> Send form </button>
        </form>
   </FormProvider>
   </div>
  )
````

Mediante el uso de ``FormProvider`` podemos contextualizar el formulario al que pertenecen los controladores de ``PersonalForm``:

```
    const methods   = useForm<PracticeForm>();

```

Y como se ve arriba, se pasan a través de ``FormProvider``: ``<FormProvider {...methods}>...``
# learn.react.formularios

# watch

## Funcionamiento

Watch es una función que obtenemos de ``useForm`` y que nos permite suscribirnos a los controladores y 
rastrear sus valores:

```
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
```

En este caso, por ejemplo, nos suscribimos para comprar si el valor del campo que sea está vacío o no.
En caso de estar vacío, asignamos una clase; y en caso de no estarlo, asignamos otra.
