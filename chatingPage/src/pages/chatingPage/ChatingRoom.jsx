import React from "react";
import style from "./ChatingRoom.module.css";
import ProfileButton from "../../assets/images/profile-none.png";

export default function chating() {
    return (
        <section className={style.cont_section}>
            <div className={style.cont_box}>
                <img className={style.profile_none} src={ProfileButton} />
                <div className={style.cont_txt}>
                    <p className={style.chat_txt}>
                        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의
                        위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
                        약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                    </p>
                </div>
                <span className={style.chat_time}>12:39</span>
            </div>
            <div className={style.cont_box}>
                <img className={style.profile_none} src={ProfileButton} />
                <div className={style.cont_txt}>
                    <p className={style.chat_txt}>
                        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의
                        위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
                        약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                    </p>
                </div>
                <span className={style.chat_time}>12:39</span>
            </div>
            <div className={`${style.cont_box} ${style.my_msg}`}>
                <div className={style.cont_blacktxt}>
                    <p className={style.chat_txt}>네 말씀하세요.</p>
                </div>
                <span className={style.chat_time}>12:39</span>
            </div>
        </section>
    );
}
