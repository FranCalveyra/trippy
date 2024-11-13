import { ButtonHTMLAttributes } from 'react'
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../Icon/Icon.tsx";


const buttonVariant = cva(['rounded-lg', 'px-5 py-5'],{
    variants:{
        variant:{
            primary:[
                'bg-primary-300 text-neutral-white',
                'hover:bg-primary-500 hover:text-neutral-white',
                'disabled:bg-grey-100 disabled:text-grey-700',
            ],
            secondary:[
                'bg-secondary-300 text-primary-800',
                'hover:bg-secondary-500 hover:text-neutral-white',
                'disabled:bg-grey-100 disabled:text-grey-700',
            ],
        },
    },
    defaultVariants:{
        variant:'primary',
    }
})

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    variant: 'primary' | 'secondary'
    iconVariant: IconProps['variant']
}

const IconButton = ({variant, iconVariant, value, ...rest}: IconButtonProps) => {
    return (
        <button className={buttonVariant({variant})} {...rest}>
            <div className={'flex justify-center items-center'}>
                <Icon variant={iconVariant} color=""/>
            </div>
        </button>
    )
}

export default IconButton