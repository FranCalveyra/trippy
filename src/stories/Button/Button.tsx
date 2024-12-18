import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['rounded-button'],{
    variants:{
        variant:{
            //TODO: how to specify color, considering 'hover' and 'disabled' should be tweaked?
            fulfilled:[
                'bg-primary-300 text-neutral-white',
                'hover:bg-primary-500 hover:text-neutral-white',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            outlined:[
                'bg-neutral-white text-primary-300 border border-primary-300',
                'hover:bg-primary-300 hover:text-neutral-white',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ],
        },
        size:{
            // TODO: use actual Figma's sizes for 'small' and 'large'
            small:['px-4 py-2 text-xs'],
            medium:['px-7 py-4 text-body'],
            large:['px-7 py-4 text-h3'],
        }
    },
    defaultVariants:{
        variant:'fulfilled',
        size:'medium'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant,size, ...rest}:ButtonProps) => {
    return <button className={buttonVariant({size, variant})} {...rest}/>
}

export default Button