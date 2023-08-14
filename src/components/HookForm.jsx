import React from 'react';
import { useForm } from 'react-hook-form';

export default function HookForm() {
    const { register, 
            handleSubmit, 
            watch,  
            formState: {errors} } = useForm({
        defaultValues: {
            name: '',
            profession: '',
            email: '',
            phone: ''
        }
    });
    

    console.log(watch());
    console.log(errors)

    return (
        <div>
            <h2>Hook Form</h2>
        <form onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
            <input {...register('name', { required: 'Name Is Required.' })} placeholder='name'
            aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p role='alert'>{errors.name?.message}</p>}

            <input {...register('profession', { required: 'Profession Is Required.' })} placeholder='profession'
            aria-invalid={errors.profession ? 'true' : 'false'}
            />
            {errors.profession && <p role='alert'>{errors.profession?.message}</p>}
            
            <input {...register('email', { required: 'Email Is Required.' })} placeholder='email'
            aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p role='alert'>{errors.email?.message}</p>}
            
            <input {...register('phone', { required: 'Phone Is Required.' })} placeholder='phone'
            aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <p role='alert'>{errors.phone?.message}</p>}
            
            <input type="submit" />
        </form>
        </div>
    );
}