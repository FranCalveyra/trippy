

export interface IconProps {
    variant: 'groups' | 'notifications' | 'bus' | 'walk' | 'arrow' | 'sent' | 'read',
    color: string
}

const Icon = ({variant, color}: IconProps) => {
    switch (variant) {
        case 'groups':
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 20.1306V17.3556C0 16.7889 0.141667 16.2639 0.425 15.7806C0.708333 15.2973 1.1 14.9306 1.6 14.6806C1.83333 14.5639 2.05833 14.4556 2.275 14.3556C2.50833 14.2556 2.75 14.1639 3 14.0806V20.1306H0ZM4 13.1306C3.16667 13.1306 2.45833 12.8389 1.875 12.2556C1.29167 11.6723 1 10.9639 1 10.1306C1 9.29728 1.29167 8.58895 1.875 8.00561C2.45833 7.42228 3.16667 7.13062 4 7.13062C4.83333 7.13062 5.54167 7.42228 6.125 8.00561C6.70833 8.58895 7 9.29728 7 10.1306C7 10.9639 6.70833 11.6723 6.125 12.2556C5.54167 12.8389 4.83333 13.1306 4 13.1306ZM4 11.1306C4.28333 11.1306 4.51667 11.0389 4.7 10.8556C4.9 10.6556 5 10.4139 5 10.1306C5 9.84728 4.9 9.61395 4.7 9.43062C4.51667 9.23061 4.28333 9.13061 4 9.13061C3.71667 9.13061 3.475 9.23061 3.275 9.43062C3.09167 9.61395 3 9.84728 3 10.1306C3 10.4139 3.09167 10.6556 3.275 10.8556C3.475 11.0389 3.71667 11.1306 4 11.1306ZM4 20.1306V17.3306C4 16.7639 4.14167 16.2473 4.425 15.7806C4.725 15.2973 5.11667 14.9306 5.6 14.6806C6.63333 14.1639 7.68333 13.7806 8.75 13.5306C9.81667 13.2639 10.9 13.1306 12 13.1306C13.1 13.1306 14.1833 13.2639 15.25 13.5306C16.3167 13.7806 17.3667 14.1639 18.4 14.6806C18.8833 14.9306 19.2667 15.2973 19.55 15.7806C19.85 16.2473 20 16.7639 20 17.3306V20.1306H4ZM6 18.1306H18V17.3306C18 17.1473 17.95 16.9806 17.85 16.8306C17.7667 16.6806 17.65 16.5639 17.5 16.4806C16.6 16.0306 15.6917 15.6973 14.775 15.4806C13.8583 15.2473 12.9333 15.1306 12 15.1306C11.0667 15.1306 10.1417 15.2473 9.225 15.4806C8.30833 15.6973 7.4 16.0306 6.5 16.4806C6.35 16.5639 6.225 16.6806 6.125 16.8306C6.04167 16.9806 6 17.1473 6 17.3306V18.1306ZM12 12.1306C10.9 12.1306 9.95833 11.7389 9.175 10.9556C8.39167 10.1723 8 9.23062 8 8.13062C8 7.03062 8.39167 6.08895 9.175 5.30562C9.95833 4.52228 10.9 4.13062 12 4.13062C13.1 4.13062 14.0417 4.52228 14.825 5.30562C15.6083 6.08895 16 7.03062 16 8.13062C16 9.23062 15.6083 10.1723 14.825 10.9556C14.0417 11.7389 13.1 12.1306 12 12.1306ZM12 10.1306C12.55 10.1306 13.0167 9.93895 13.4 9.55562C13.8 9.15562 14 8.68062 14 8.13062C14 7.58062 13.8 7.11395 13.4 6.73062C13.0167 6.33062 12.55 6.13061 12 6.13061C11.45 6.13061 10.975 6.33062 10.575 6.73062C10.1917 7.11395 10 7.58062 10 8.13062C10 8.68062 10.1917 9.15562 10.575 9.55562C10.975 9.93895 11.45 10.1306 12 10.1306ZM20 13.1306C19.1667 13.1306 18.4583 12.8389 17.875 12.2556C17.2917 11.6723 17 10.9639 17 10.1306C17 9.29728 17.2917 8.58895 17.875 8.00561C18.4583 7.42228 19.1667 7.13062 20 7.13062C20.8333 7.13062 21.5417 7.42228 22.125 8.00561C22.7083 8.58895 23 9.29728 23 10.1306C23 10.9639 22.7083 11.6723 22.125 12.2556C21.5417 12.8389 20.8333 13.1306 20 13.1306ZM20 11.1306C20.2833 11.1306 20.5167 11.0389 20.7 10.8556C20.9 10.6556 21 10.4139 21 10.1306C21 9.84728 20.9 9.61395 20.7 9.43062C20.5167 9.23061 20.2833 9.13061 20 9.13061C19.7167 9.13061 19.475 9.23061 19.275 9.43062C19.0917 9.61395 19 9.84728 19 10.1306C19 10.4139 19.0917 10.6556 19.275 10.8556C19.475 11.0389 19.7167 11.1306 20 11.1306ZM21 20.1306V14.0806C21.25 14.1639 21.4833 14.2556 21.7 14.3556C21.9333 14.4556 22.1667 14.5639 22.4 14.6806C22.9 14.9306 23.2917 15.2973 23.575 15.7806C23.8583 16.2639 24 16.7889 24 17.3556V20.1306H21Z"
                        fill={color}/>
                </svg>
            )
        case 'notifications':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 19V17H6V10C6 8.61667 6.41667 7.39167 7.25 6.325C8.08333 5.24167 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6417 2.73333 10.925 2.45C11.225 2.15 11.5833 2 12 2C12.4167 2 12.7667 2.15 13.05 2.45C13.35 2.73333 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.24167 16.75 6.325C17.5833 7.39167 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.975 21.8083 10.575 21.425C10.1917 21.025 10 20.55 10 20H14C14 20.55 13.8 21.025 13.4 21.425C13.0167 21.8083 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
                        fill={color}/>
                </svg>

            )
        case 'bus':
            return (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.5 11H6.5V6H18.5M17 17C16.6022 17 16.2206 16.842 15.9393 16.5607C15.658 16.2794 15.5 15.8978 15.5 15.5C15.5 15.1022 15.658 14.7206 15.9393 14.4393C16.2206 14.158 16.6022 14 17 14C17.3978 14 17.7794 14.158 18.0607 14.4393C18.342 14.7206 18.5 15.1022 18.5 15.5C18.5 15.8978 18.342 16.2794 18.0607 16.5607C17.7794 16.842 17.3978 17 17 17ZM8 17C7.60218 17 7.22064 16.842 6.93934 16.5607C6.65804 16.2794 6.5 15.8978 6.5 15.5C6.5 15.1022 6.65804 14.7206 6.93934 14.4393C7.22064 14.158 7.60218 14 8 14C8.39782 14 8.77936 14.158 9.06066 14.4393C9.34196 14.7206 9.5 15.1022 9.5 15.5C9.5 15.8978 9.34196 16.2794 9.06066 16.5607C8.77936 16.842 8.39782 17 8 17ZM4.5 16C4.5 16.88 4.89 17.67 5.5 18.22V20C5.5 20.2652 5.60536 20.5196 5.79289 20.7071C5.98043 20.8946 6.23478 21 6.5 21H7.5C7.76522 21 8.01957 20.8946 8.20711 20.7071C8.39464 20.5196 8.5 20.2652 8.5 20V19H16.5V20C16.5 20.2652 16.6054 20.5196 16.7929 20.7071C16.9804 20.8946 17.2348 21 17.5 21H18.5C18.7652 21 19.0196 20.8946 19.2071 20.7071C19.3946 20.5196 19.5 20.2652 19.5 20V18.22C20.11 17.67 20.5 16.88 20.5 16V6C20.5 2.5 16.92 2 12.5 2C8.08 2 4.5 2.5 4.5 6V16Z"
                        fill={color}/>
                </svg>

            )
        case 'walk':
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_549_4379)">
                        <path
                            d="M16.4938 11.7229H21.9692V9.70324H17.9075L15.6635 5.9669C15.3269 5.40589 14.721 5.0244 14.0253 5.0244C13.8234 5.0244 13.6438 5.05806 13.4643 5.11416L7.38293 7.01038V12.8449H9.40258V8.72708L11.77 7.98655L7.38293 25.1872H9.40258L12.6228 16.0876L15.2371 19.577V25.1872H17.2567V17.995L14.4629 12.901L15.282 9.6808M16.3591 4.76634C17.4811 4.76634 18.3788 3.86872 18.3788 2.74669C18.3788 1.62467 17.4811 0.727051 16.3591 0.727051C15.2371 0.727051 14.3395 1.62467 14.3395 2.74669C14.3395 3.86872 15.2371 4.76634 16.3591 4.76634Z"
                            fill={color}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_549_4379">
                            <rect width="26.9286" height="26.9286" fill="white"
                                  transform="translate(0.650757 0.502441)"/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case 'arrow':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.3891 13.071L9.73212 18.728L8.31812 17.314L13.2681 12.364L8.31812 7.414L9.73212 6L15.3891 11.657C15.5766 11.8445 15.6819 12.0988 15.6819 12.364C15.6819 12.6292 15.5766 12.8835 15.3891 13.071Z"
                          fill={color}/>
                </svg>
            )

        case 'sent':
            return (
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.3535 0.853723L4.35354 8.85372C4.3071 8.90021 4.25196 8.93709 4.19126 8.96225C4.13056 8.98742 4.0655 9.00037 3.99979 9.00037C3.93408 9.00037 3.86902 8.98742 3.80832 8.96225C3.74762 8.93709 3.69248 8.90021 3.64604 8.85372L0.14604 5.35372C0.0522194 5.2599 -0.000488281 5.13265 -0.000488281 4.99997C-0.000488281 4.86729 0.0522194 4.74004 0.14604 4.64622C0.23986 4.5524 0.367108 4.49969 0.49979 4.49969C0.632472 4.49969 0.759719 4.5524 0.85354 4.64622L3.99979 7.7931L11.646 0.146223C11.7399 0.0524023 11.8671 -0.000305177 11.9998 -0.000305176C12.1325 -0.000305175 12.2597 0.0524023 12.3535 0.146223C12.4474 0.240043 12.5001 0.367291 12.5001 0.499973C12.5001 0.632655 12.4474 0.759903 12.3535 0.853723Z"
                        fill="#002C2D"/>
                </svg>

            )

        case 'read':
            return (
                <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.3507 1.35687L3.7507 6.85687C3.65718 6.94886 3.53125 7.00041 3.40007 7.00041C3.26889 7.00041 3.14297 6.94886 3.04945 6.85687L0.64945 4.49999C0.602625 4.45395 0.565328 4.39913 0.539689 4.33867C0.514049 4.27822 0.500569 4.2133 0.500018 4.14763C0.499466 4.08196 0.511855 4.01683 0.536475 3.95595C0.561096 3.89507 0.597467 3.83963 0.643512 3.79281C0.689557 3.74598 0.744374 3.70868 0.804832 3.68305C0.865291 3.65741 0.930208 3.64393 0.995876 3.64337C1.06154 3.64282 1.12668 3.65521 1.18756 3.67983C1.24844 3.70445 1.30388 3.74082 1.3507 3.78687L3.40007 5.79937L8.65007 0.643119C8.74472 0.550127 8.87244 0.498544 9.00512 0.499716C9.07082 0.500296 9.13576 0.513811 9.19623 0.539488C9.2567 0.565166 9.31153 0.602503 9.35757 0.649369C9.40362 0.696234 9.43998 0.75171 9.46459 0.812629C9.48919 0.873547 9.50156 0.938716 9.50098 1.00441C9.5004 1.07011 9.48688 1.13505 9.4612 1.19552C9.43553 1.256 9.39819 1.31082 9.35132 1.35687H9.3507ZM15.3569 0.649369C15.3109 0.602468 15.2561 0.565099 15.1956 0.5394C15.1352 0.5137 15.0702 0.500173 15.0045 0.499592C14.9388 0.499012 14.8736 0.511389 14.8127 0.536016C14.7518 0.560644 14.6963 0.597038 14.6494 0.643119L9.39945 5.79937L8.22257 4.64312C8.12793 4.55021 8.00024 4.49871 7.86762 4.49994C7.735 4.50117 7.6083 4.55503 7.51539 4.64968C7.42248 4.74433 7.37097 4.87201 7.3722 5.00463C7.37344 5.13726 7.4273 5.26396 7.52195 5.35687L9.04882 6.85687C9.14234 6.94886 9.26827 7.00041 9.39945 7.00041C9.53063 7.00041 9.65655 6.94886 9.75007 6.85687L15.3501 1.35687C15.397 1.31089 15.4344 1.2561 15.4602 1.19565C15.4859 1.13519 15.4995 1.07025 15.5002 1.00454C15.5008 0.938835 15.4885 0.873645 15.4639 0.812701C15.4393 0.751757 15.403 0.696255 15.3569 0.649369Z"
                        fill="#002C2D"/>
                </svg>
            )

    }
}

export default Icon