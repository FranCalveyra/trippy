import React from 'react'

export interface IconProps {
    variant: 'groups' | 'notifications' | 'bus' | 'walk'
}

const Icon = ({variant}: IconProps) => {
    switch (variant) {
        case 'groups':
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 20.1306V17.3556C0 16.7889 0.141667 16.2639 0.425 15.7806C0.708333 15.2973 1.1 14.9306 1.6 14.6806C1.83333 14.5639 2.05833 14.4556 2.275 14.3556C2.50833 14.2556 2.75 14.1639 3 14.0806V20.1306H0ZM4 13.1306C3.16667 13.1306 2.45833 12.8389 1.875 12.2556C1.29167 11.6723 1 10.9639 1 10.1306C1 9.29728 1.29167 8.58895 1.875 8.00561C2.45833 7.42228 3.16667 7.13062 4 7.13062C4.83333 7.13062 5.54167 7.42228 6.125 8.00561C6.70833 8.58895 7 9.29728 7 10.1306C7 10.9639 6.70833 11.6723 6.125 12.2556C5.54167 12.8389 4.83333 13.1306 4 13.1306ZM4 11.1306C4.28333 11.1306 4.51667 11.0389 4.7 10.8556C4.9 10.6556 5 10.4139 5 10.1306C5 9.84728 4.9 9.61395 4.7 9.43062C4.51667 9.23061 4.28333 9.13061 4 9.13061C3.71667 9.13061 3.475 9.23061 3.275 9.43062C3.09167 9.61395 3 9.84728 3 10.1306C3 10.4139 3.09167 10.6556 3.275 10.8556C3.475 11.0389 3.71667 11.1306 4 11.1306ZM4 20.1306V17.3306C4 16.7639 4.14167 16.2473 4.425 15.7806C4.725 15.2973 5.11667 14.9306 5.6 14.6806C6.63333 14.1639 7.68333 13.7806 8.75 13.5306C9.81667 13.2639 10.9 13.1306 12 13.1306C13.1 13.1306 14.1833 13.2639 15.25 13.5306C16.3167 13.7806 17.3667 14.1639 18.4 14.6806C18.8833 14.9306 19.2667 15.2973 19.55 15.7806C19.85 16.2473 20 16.7639 20 17.3306V20.1306H4ZM6 18.1306H18V17.3306C18 17.1473 17.95 16.9806 17.85 16.8306C17.7667 16.6806 17.65 16.5639 17.5 16.4806C16.6 16.0306 15.6917 15.6973 14.775 15.4806C13.8583 15.2473 12.9333 15.1306 12 15.1306C11.0667 15.1306 10.1417 15.2473 9.225 15.4806C8.30833 15.6973 7.4 16.0306 6.5 16.4806C6.35 16.5639 6.225 16.6806 6.125 16.8306C6.04167 16.9806 6 17.1473 6 17.3306V18.1306ZM12 12.1306C10.9 12.1306 9.95833 11.7389 9.175 10.9556C8.39167 10.1723 8 9.23062 8 8.13062C8 7.03062 8.39167 6.08895 9.175 5.30562C9.95833 4.52228 10.9 4.13062 12 4.13062C13.1 4.13062 14.0417 4.52228 14.825 5.30562C15.6083 6.08895 16 7.03062 16 8.13062C16 9.23062 15.6083 10.1723 14.825 10.9556C14.0417 11.7389 13.1 12.1306 12 12.1306ZM12 10.1306C12.55 10.1306 13.0167 9.93895 13.4 9.55562C13.8 9.15562 14 8.68062 14 8.13062C14 7.58062 13.8 7.11395 13.4 6.73062C13.0167 6.33062 12.55 6.13061 12 6.13061C11.45 6.13061 10.975 6.33062 10.575 6.73062C10.1917 7.11395 10 7.58062 10 8.13062C10 8.68062 10.1917 9.15562 10.575 9.55562C10.975 9.93895 11.45 10.1306 12 10.1306ZM20 13.1306C19.1667 13.1306 18.4583 12.8389 17.875 12.2556C17.2917 11.6723 17 10.9639 17 10.1306C17 9.29728 17.2917 8.58895 17.875 8.00561C18.4583 7.42228 19.1667 7.13062 20 7.13062C20.8333 7.13062 21.5417 7.42228 22.125 8.00561C22.7083 8.58895 23 9.29728 23 10.1306C23 10.9639 22.7083 11.6723 22.125 12.2556C21.5417 12.8389 20.8333 13.1306 20 13.1306ZM20 11.1306C20.2833 11.1306 20.5167 11.0389 20.7 10.8556C20.9 10.6556 21 10.4139 21 10.1306C21 9.84728 20.9 9.61395 20.7 9.43062C20.5167 9.23061 20.2833 9.13061 20 9.13061C19.7167 9.13061 19.475 9.23061 19.275 9.43062C19.0917 9.61395 19 9.84728 19 10.1306C19 10.4139 19.0917 10.6556 19.275 10.8556C19.475 11.0389 19.7167 11.1306 20 11.1306ZM21 20.1306V14.0806C21.25 14.1639 21.4833 14.2556 21.7 14.3556C21.9333 14.4556 22.1667 14.5639 22.4 14.6806C22.9 14.9306 23.2917 15.2973 23.575 15.7806C23.8583 16.2639 24 16.7889 24 17.3556V20.1306H21Z"
                        fill="#1D1B20"/>
                </svg>
            )
        case 'notifications':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 19V17H6V10C6 8.61667 6.41667 7.39167 7.25 6.325C8.08333 5.24167 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6417 2.73333 10.925 2.45C11.225 2.15 11.5833 2 12 2C12.4167 2 12.7667 2.15 13.05 2.45C13.35 2.73333 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.24167 16.75 6.325C17.5833 7.39167 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.975 21.8083 10.575 21.425C10.1917 21.025 10 20.55 10 20H14C14 20.55 13.8 21.025 13.4 21.425C13.0167 21.8083 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
                        fill="#1D1B20"/>
                </svg>

            )
        case 'bus':
            return (
                <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.3771 11.4009H6.37708V6.40088H18.3771M16.8771 17.4009C16.4793 17.4009 16.0977 17.2428 15.8164 16.9615C15.5351 16.6802 15.3771 16.2987 15.3771 15.9009C15.3771 15.5031 15.5351 15.1215 15.8164 14.8402C16.0977 14.5589 16.4793 14.4009 16.8771 14.4009C17.2749 14.4009 17.6564 14.5589 17.9377 14.8402C18.219 15.1215 18.3771 15.5031 18.3771 15.9009C18.3771 16.2987 18.219 16.6802 17.9377 16.9615C17.6564 17.2428 17.2749 17.4009 16.8771 17.4009ZM7.87708 17.4009C7.47925 17.4009 7.09772 17.2428 6.81641 16.9615C6.53511 16.6802 6.37708 16.2987 6.37708 15.9009C6.37708 15.5031 6.53511 15.1215 6.81641 14.8402C7.09772 14.5589 7.47925 14.4009 7.87708 14.4009C8.2749 14.4009 8.65643 14.5589 8.93774 14.8402C9.21904 15.1215 9.37708 15.5031 9.37708 15.9009C9.37708 16.2987 9.21904 16.6802 8.93774 16.9615C8.65643 17.2428 8.2749 17.4009 7.87708 17.4009ZM4.37708 16.4009C4.37708 17.2809 4.76708 18.0709 5.37708 18.6209V20.4009C5.37708 20.6661 5.48243 20.9205 5.66997 21.108C5.8575 21.2955 6.11186 21.4009 6.37708 21.4009H7.37708C7.64229 21.4009 7.89665 21.2955 8.08418 21.108C8.27172 20.9205 8.37708 20.6661 8.37708 20.4009V19.4009H16.3771V20.4009C16.3771 20.6661 16.4824 20.9205 16.67 21.108C16.8575 21.2955 17.1119 21.4009 17.3771 21.4009H18.3771C18.6423 21.4009 18.8966 21.2955 19.0842 21.108C19.2717 20.9205 19.3771 20.6661 19.3771 20.4009V18.6209C19.9871 18.0709 20.3771 17.2809 20.3771 16.4009V6.40088C20.3771 2.90088 16.7971 2.40088 12.3771 2.40088C7.95708 2.40088 4.37708 2.90088 4.37708 6.40088V16.4009Z"
                        fill="black"/>
                    <path
                        d="M29.4964 18.4009V17.1282L33.4339 13.0486C33.8543 12.6054 34.2009 12.2172 34.4737 11.8838C34.7502 11.5467 34.9566 11.2266 35.093 10.9236C35.2293 10.6206 35.2975 10.2986 35.2975 9.9577C35.2975 9.57133 35.2066 9.238 35.0248 8.9577C34.843 8.67361 34.5949 8.4558 34.2805 8.30429C33.9661 8.14898 33.6119 8.07133 33.218 8.07133C32.8013 8.07133 32.4377 8.15656 32.1271 8.32701C31.8165 8.49747 31.5778 8.738 31.4112 9.04861C31.2445 9.35921 31.1612 9.72285 31.1612 10.1395H29.485C29.485 9.43118 29.6479 8.81186 29.9737 8.28156C30.2994 7.75126 30.7464 7.34027 31.3146 7.04861C31.8828 6.75315 32.5286 6.60542 33.2521 6.60542C33.9831 6.60542 34.6271 6.75126 35.1839 7.04292C35.7445 7.3308 36.182 7.72474 36.4964 8.22474C36.8108 8.72095 36.968 9.28156 36.968 9.90656C36.968 10.3384 36.8865 10.7607 36.7237 11.1736C36.5646 11.5865 36.2862 12.0467 35.8884 12.5543C35.4907 13.0581 34.9377 13.6698 34.2293 14.3895L31.9168 16.81V16.8952H37.1555V18.4009H29.4964ZM43.36 18.5941C42.4623 18.5903 41.6953 18.3535 41.0589 17.8838C40.4225 17.4141 39.9358 16.7304 39.5987 15.8327C39.2615 14.935 39.093 13.8535 39.093 12.5884C39.093 11.327 39.2615 10.2494 39.5987 9.35542C39.9396 8.46148 40.4282 7.77967 41.0646 7.30997C41.7047 6.84027 42.4699 6.60542 43.36 6.60542C44.2502 6.60542 45.0134 6.84217 45.6498 7.31565C46.2862 7.78535 46.7729 8.46717 47.11 9.36111C47.4509 10.2513 47.6214 11.327 47.6214 12.5884C47.6214 13.8573 47.4528 14.9407 47.1157 15.8384C46.7786 16.7323 46.2918 17.416 45.6555 17.8895C45.0191 18.3592 44.254 18.5941 43.36 18.5941ZM43.36 17.077C44.1479 17.077 44.7634 16.6925 45.2066 15.9236C45.6536 15.1547 45.8771 14.0429 45.8771 12.5884C45.8771 11.6225 45.7748 10.8062 45.5703 10.1395C45.3695 9.46906 45.0797 8.96148 44.7009 8.61679C44.3259 8.2683 43.879 8.09406 43.36 8.09406C42.5759 8.09406 41.9604 8.48042 41.5134 9.25315C41.0665 10.0259 40.8411 11.1376 40.8373 12.5884C40.8373 13.5581 40.9377 14.3782 41.1384 15.0486C41.343 15.7153 41.6328 16.221 42.0078 16.5657C42.3828 16.9066 42.8335 17.077 43.36 17.077ZM53.6882 18.5941C52.7904 18.5903 52.0234 18.3535 51.387 17.8838C50.7507 17.4141 50.2639 16.7304 49.9268 15.8327C49.5897 14.935 49.4211 13.8535 49.4211 12.5884C49.4211 11.327 49.5897 10.2494 49.9268 9.35542C50.2677 8.46148 50.7563 7.77967 51.3927 7.30997C52.0329 6.84027 52.798 6.60542 53.6882 6.60542C54.5783 6.60542 55.3416 6.84217 55.9779 7.31565C56.6143 7.78535 57.101 8.46717 57.4382 9.36111C57.7791 10.2513 57.9495 11.327 57.9495 12.5884C57.9495 13.8573 57.781 14.9407 57.4438 15.8384C57.1067 16.7323 56.62 17.416 55.9836 17.8895C55.3472 18.3592 54.5821 18.5941 53.6882 18.5941ZM53.6882 17.077C54.476 17.077 55.0916 16.6925 55.5347 15.9236C55.9817 15.1547 56.2052 14.0429 56.2052 12.5884C56.2052 11.6225 56.1029 10.8062 55.8984 10.1395C55.6976 9.46906 55.4079 8.96148 55.0291 8.61679C54.6541 8.2683 54.2071 8.09406 53.6882 8.09406C52.9041 8.09406 52.2885 8.48042 51.8416 9.25315C51.3946 10.0259 51.1692 11.1376 51.1654 12.5884C51.1654 13.5581 51.2658 14.3782 51.4666 15.0486C51.6711 15.7153 51.9609 16.221 52.3359 16.5657C52.7109 16.9066 53.1616 17.077 53.6882 17.077Z"
                        fill="black"/>
                </svg>
            )
        case 'walk':
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_549_4379)">
                        <path
                            d="M16.4938 11.7229H21.9692V9.70324H17.9075L15.6635 5.9669C15.3269 5.40589 14.721 5.0244 14.0253 5.0244C13.8234 5.0244 13.6438 5.05806 13.4643 5.11416L7.38293 7.01038V12.8449H9.40258V8.72708L11.77 7.98655L7.38293 25.1872H9.40258L12.6228 16.0876L15.2371 19.577V25.1872H17.2567V17.995L14.4629 12.901L15.282 9.6808M16.3591 4.76634C17.4811 4.76634 18.3788 3.86872 18.3788 2.74669C18.3788 1.62467 17.4811 0.727051 16.3591 0.727051C15.2371 0.727051 14.3395 1.62467 14.3395 2.74669C14.3395 3.86872 15.2371 4.76634 16.3591 4.76634Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_549_4379">
                            <rect width="26.9286" height="26.9286" fill="white"
                                  transform="translate(0.650757 0.502441)"/>
                        </clipPath>
                    </defs>
                </svg>
            )
    }
}

export default Icon