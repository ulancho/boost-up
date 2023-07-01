import React from "react";
import programmers from '../assets/programmers.png'

const Directions = () => {
    return (
        <>
            <div className="center-container">
                <h2 className="text-left">  Мы рады представить нашу </h2>
                <div className="text-right">
                    <div className="wrapper">
                        <h2 className="orange-color fs-36">стажировочную программу</h2>
                        <p>специально разработанную для начинающих программистов Java,
                            Python, SQL, FrontEnd, дизайнеров UX/UI и проектных менеджеров.</p>
                    </div>
                </div>
                <div className="center-wrapper">
                    <div className="directions-card"> 
                        <img src={programmers} alt="" />
                        <p className="title">Программисты</p>
                        <p className="subtitle">Java, Python, SQL, FrontEnd - у нас есть проекты, которые ждут вашего вклада. Вы получите возможность погрузиться в реальные задачи, применить и углубить свои знания, работая рука об руку с опытными менторами.</p>
                    </div>
                    <div className="directions-card"> 
                        <img src={programmers} alt="" />
                        <p className="title">Программисты</p>
                        <p className="subtitle">Java, Python, SQL, FrontEnd - у нас есть проекты, которые ждут вашего вклада. Вы получите возможность погрузиться в реальные задачи, применить и углубить свои знания, работая рука об руку с опытными менторами.</p>
                    </div>
                    <div className="directions-card"> 
                        <img src={programmers} alt="" />
                        <p className="title">Программисты</p>
                        <p className="subtitle">Java, Python, SQL, FrontEnd - у нас есть проекты, которые ждут вашего вклада. Вы получите возможность погрузиться в реальные задачи, применить и углубить свои знания, работая рука об руку с опытными менторами.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Directions;