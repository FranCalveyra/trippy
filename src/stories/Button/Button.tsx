import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            fulfilled:[
                'bg-primary-500 text-white',
                'hover:bg-primary-700 hover:text-white',
                'disabled:bg-grey-300 disabled:text-grey-700',
            ],
            outlined:[
                'bg-white text-primary-500 border border-primary-500',
                'hover:bg-primary-300',
                'disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-700',
            ],
            ghost: [
                "bg-transparent text-primary-500",
                "hover:bg-primary-300 hover:text-primary-500",
                "disabled:bg-grey-100 disabled:text-grey-700"
            ],
            white: [
                "bg-white text-primary-500",
                "hover:bg-primary-300 hover:text-primary-500",
                "disabled:bg-grey-100 disabled:text-grey-700"
            ],
            black:[]
        },
        size:{
            small:['px-4 py-2 text-xs'],
            medium:['px-4 py-3 text-sm'],
            large:['px-4 py-3 text-base'],
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