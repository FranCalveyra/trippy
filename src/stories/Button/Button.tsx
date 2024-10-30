import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['rounded-button'],{
    variants:{
        variant:{
            //TODO: how to specify color, considering 'hover' and 'disabled' should be tweaked?
            fulfilled:[
                'bg-secondary-300 text-white',
                'hover:bg-secondary-500 hover:text-white',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            outlined:[
                'bg-white text-secondary-300 border border-secondary-300',
                'hover:bg-secondary-300 hover:text-white',
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