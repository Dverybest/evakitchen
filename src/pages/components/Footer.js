import React from 'react'

const Footer = () => {

    return (
        <footer className="container-fluid px-0 d-flex flex-column justify-content-center align-items-center align-content-center foot">
            <div>
                Follow us on social media
                <div>
                    <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 10.3698C15.1234 11.2021 14.9812 12.052 14.5937 12.7988C14.2062 13.5456 13.5931 14.1512 12.8416 14.5295C12.0901 14.9077 11.2384 15.0394 10.4077 14.9057C9.57708 14.7721 8.80971 14.3799 8.21479 13.785C7.61987 13.1901 7.22768 12.4227 7.09402 11.592C6.96035 10.7614 7.09202 9.90971 7.47028 9.15819C7.84854 8.40667 8.45414 7.79355 9.20094 7.40605C9.94773 7.01856 10.7977 6.8764 11.63 6.99981C12.4789 7.1257 13.2648 7.52128 13.8716 8.12812C14.4785 8.73496 14.8741 9.52089 15 10.3698Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 5.5H16.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="13" height="14" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </div>
            <div>Copyright Eva-Kitchen © {new Date().getFullYear()}. All Rights Reserved</div>
            {/* <div> Developed by <a target="blank" href="http://dverybest.dx.am/">DveryBest</a></div> */}
        </footer>
    )
}
export default Footer;